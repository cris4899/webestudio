import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { lessons } from '../data/course.mjs';
import { readProgress, readStudy, normalize, searchCourse } from '../lib.mjs';
import { root, server } from './serve.mjs';

const materials = JSON.parse(await readFile(path.join(root, 'data/materials.json'), 'utf8'));
test('AC2/AC3: todos los originales y fuentes tienen cobertura', async () => {
  const originals = (await Promise.all(['UD2', 'UD3-4'].map(async dir => (await readdir(path.join(root, dir))).map(name => `${dir}/${name}`)))).flat();
  assert.deepEqual(materials.map(m => m.path).sort(), originals.sort());
  assert.equal(new Set(lessons.map(l => l.id)).size, lessons.length);
  for (const l of lessons) {
    assert.ok(l.sections.length >= 3 && l.checks.length && l.practice.solution && l.quizzes.length);
    for (const id of l.sources) assert.ok(materials.some(m => m.id === id), `Fuente desconocida: ${id}`);
    for (const q of l.quizzes) assert.ok(q.options[q.answer] && q.explanation);
  }
  for (const m of materials) {
    assert.ok(lessons.some(l => l.sources.includes(m.id)), `Sin cobertura: ${m.path}`);
    assert.equal((await stat(path.join(root, m.path))).size, m.size);
    if (m.kind === 'pdf') {
      assert.ok(m.pages > 0 && m.text.length > 100);
      assert.equal(m.images.length, m.pages);
      for (const image of m.images) assert.ok((await stat(path.join(root, image))).size > 0);
    }
    if (m.kind === 'rar') assert.ok(m.sources.length > 0 && m.sources.every(s => s.code && !/(^|\/)(bin|obj|\.vs|Platforms)\//.test(s.name)));
    if (m.kind === 'links') for (const url of m.links) assert.equal(new URL(url).hostname, 'learn.microsoft.com');
  }
});
test('AC1: búsqueda sin tildes, varias palabras y contenido interior', () => {
  assert.equal(normalize('MATRÍCULA'), 'matricula');
  assert.ok(searchCourse('matricula', lessons, materials).lessons.some(l => l.id === 'matricula'));
  assert.ok(searchCourse('DynamicResource', lessons, materials).lessons.some(l => l.id === 'recursos'));
  assert.ok(searchCourse('ValidarContrasenia', lessons, materials).materials.some(m => m.kind === 'rar'));
  assert.ok(searchCourse('fecha futuro', lessons, materials).lessons.some(l => l.id === 'edad'));
  assert.deepEqual(searchCourse('inexistente-9384739', lessons, materials), { lessons: [], materials: [] });
});
test('AC4: progreso corrupto, datos ajenos y duplicados', () => {
  assert.deepEqual([...readProgress('{mal', lessons)], []);
  assert.deepEqual([...readProgress('null', lessons)], []);
  assert.deepEqual([...readProgress('{"entorno":true}', lessons)], []);
  assert.deepEqual([...readProgress('["entorno","entorno","inventado",5]', lessons)], ['entorno']);
});
test('AC4: casillas y respuestas persistentes se validan sin perder valores cero', () => {
  for (const raw of ['{mal', 'null', '[]', '{}']) {
    const saved = readStudy(raw, lessons);
    assert.equal(saved.checks.size, 0);
    assert.deepEqual(saved.answers, {});
  }
  const saved = readStudy(JSON.stringify({ checks: ['formulario-0', 'formulario-0', 'falso', 2], answers: { 'entorno-0': 0, 'formulario-0': 100, 'edad-0': '1', 'inventado-0': 0 } }), lessons);
  assert.deepEqual([...saved.checks], ['formulario-0']);
  assert.deepEqual(saved.answers, { 'entorno-0': 0 });
  assert.deepEqual(readStudy(JSON.stringify({ checks: [...saved.checks], answers: saved.answers }), lessons), saved);
});
test('AC7: servidor de vista previa sirve originales y bloquea archivos privados', async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const origin = `http://127.0.0.1:${server.address().port}`;
    for (const url of ['/', '/app.mjs', '/data/course.mjs', '/data/materials.json', ...materials.map(m => '/' + encodeURI(m.path)), ...materials.flatMap(m => m.images || []).map(p => '/' + p)]) {
      const response = await fetch(origin + url, { method: 'HEAD' });
      assert.equal(response.status, 200, url);
    }
    for (const url of ['/package.json', '/.study-cache/ConfiguracionMAUI.txt', '/.git/config', '/no-existe', '/%2e%2e%5cpackage.json']) assert.equal((await fetch(origin + url)).status, 404, url);
    assert.equal((await fetch(origin + '/', { method: 'POST' })).status, 405);
    assert.equal((await fetch(origin + '/%ZZ')).status, 400);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
