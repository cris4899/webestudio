import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { lessons, referenceCards } from '../data/course.mjs';
import { workshops, workshopSteps, workshopCode } from '../data/workshops.mjs';
import { explainPart, explainLine } from '../data/study-explanations.mjs';
import { readProgress, readStudy, normalize, searchCourse } from '../lib.mjs';
import { root, server } from './serve.mjs';

const materials = JSON.parse(await readFile(path.join(root, 'data/materials.json'), 'utf8'));
const solutions = JSON.parse(await readFile(path.join(root, 'data/solutions.json'), 'utf8'));

test('Talleres: ocho relaciones, pasos únicos y código de los ZIP verificados', () => {
  assert.deepEqual(workshops.map(w=>w.id),Array.from({length:8},(_,i)=>`relacion-${i+1}`));
  for(const w of workshops) {
    const pkg=solutions.find(p=>p.id===w.id),steps=workshopSteps(w,pkg);
    assert.ok(lessons.some(l=>l.id===w.lesson));
    assert.equal(new Set(steps.map(s=>s.id)).size,steps.length);
    assert.ok(steps.length>=10 && steps.length<=50,'Recorrido intermedio por relación');
    const previousCounts={'relacion-1':77,'relacion-2':178,'relacion-3':50,'relacion-4':115,'relacion-5':60,'relacion-6':60,'relacion-7':224,'relacion-8':82};
    assert.equal(new Set(steps.flatMap(s=>[s.id,...s.aliases])).size,previousCounts[w.id],'Todas las URL de micro pasos siguen resolviendo');
    for(const s of steps)assert.ok(new Set(s.files.map(f=>f.path)).size<=1,'Se trabaja en un archivo por paso');
    assert.equal(steps[0].id,'preparar');
    assert.equal(steps.at(-1).id,'comprobar');
    for(const previous of w.steps)assert.ok(steps.some(s=>s.id===previous.id),'Se conserva la URL del bloque anterior');
    assert.ok(steps.some(s=>s.group==='arranque' && s.files.length),`Falta arranque en ${w.id}`);
    assert.ok(steps.some(s=>s.aliases?.includes('preparar-fragmentos')));
    for(const s of steps) {
      assert.ok(s.action && s.explanation && s.check);
      assert.ok(s.files.length<=6,'Cada paso reúne un máximo de seis fragmentos relacionados');
      for(const f of s.files) {
        const code=workshopCode(f,pkg);
        assert.ok(code.length && f.explanation);
        assert.ok(pkg.files.find(p=>p.path===f.path).code.includes(code));
      }
    }
  }
  assert.ok(searchCourse('aritmética modular',lessons,materials,referenceCards,solutions).solutions.some(p=>p.id==='relacion-3'));
  assert.throws(()=>workshopCode({path:'no-existe.cs'},solutions[0]),/inexistente/);
  assert.throws(()=>workshopCode({path:solutions[0].files.find(f=>f.code)?.path,start:'ancla que no existe'},solutions[0]),/inválido/);
});

test('C# didáctico: tipos explícitos y comentarios de plantilla traducidos', () => {
  for(const pkg of solutions)for(const f of pkg.files){
    if(f.path.endsWith('.cs'))assert.doesNotMatch(f.code,/\bvar\b/,`${pkg.id}/${f.path}`);
    if(f.code && /\.(cs|xaml|csproj|xml|plist|manifest)$/.test(f.path))assert.doesNotMatch(f.code,/This is the main|Display name|App Identifier|Left column =|Please consult|length in days of a complete moon cycle/,f.path);
  }
  for(const l of lessons)for(const s of l.sections)if(s.code)assert.doesNotMatch(s.code,/\bvar\b/,l.id);
});

test('Notas de estudio: tipos, propiedades y límites explicados en español', () => {
  const signature=explainLine('public static string Texto(string? valor, int minimo, int maximo, string campo)');
  assert.match(signature,/devuelve texto/);
  assert.match(signature,/puede ser nulo/);
  assert.match(signature,/sin crear una instancia/);
  assert.match(explainLine('{'),/Abre un bloque/);
  assert.match(explainLine('}'),/Cierra el bloque/);
  assert.match(explainLine('for (int i = 0; i < 6; i++)'),/hasta 5/);
  assert.match(explainPart({name:'Usuario',kind:'propiedad'},{}).why,/Reglas.NombreUsuario/);
  assert.match(explainPart({name:'Edad',kind:'método'},{}).why,/descuenta uno/);
});

test('Interfaz sin emojis ni marcas Unicode decorativas añadidas', async () => {
  for(const name of ['app.mjs','index.html','data/workshops.mjs']) {
    const source=await readFile(path.join(root,name),'utf8');
    assert.doesNotMatch(source,/[\p{Extended_Pictographic}\uFE0F\u2713\u2717]/u,name);
  }
});
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
  assert.deepEqual(searchCourse('inexistente-9384739', lessons, materials), { lessons: [], materials: [], references: [], solutions: [] });
});
test('Guía completa: 17 lecciones, 85 preguntas y los 13 paquetes', async () => {
  assert.equal(lessons.length,17);
  assert.equal(solutions.length,13);
  assert.ok(lessons.every(l=>l.quizzes.length>=5 && l.guide.steps.length>=3));
  for(const l of lessons) assert.ok(solutions.some(p=>p.id===l.guide.packageId));
  for(const c of referenceCards) {
    assert.ok(lessons.some(l=>l.id===c.lesson) && lessons.some(l=>l.id===c.practice));
    assert.ok(materials.some(m=>m.path===c.source));
  }
  for(const p of solutions) {
    assert.ok(p.cases.length && p.order.length && p.builds.length);
    assert.ok(p.builds.every(b=>b.success),`Compilación pendiente: ${p.id}`);
    const zip=await readFile(path.join(root,p.download));
    assert.equal(createHash('sha256').update(zip).digest('hex'),p.sha256);
    for(const f of p.files) {
      assert.ok(!/(^|\/)(bin|obj|\.vs|\.git)\//.test(f.path));
      const raw=await readFile(path.join(root,'solutions',p.id,f.path));
      assert.equal(createHash('sha256').update(raw).digest('hex'),f.sha256,`${p.id}/${f.path}`);
      if(f.code!==undefined)assert.equal(raw.toString('utf8').replace(/^\uFEFF/,''),f.code);
    }
    for(const ref of p.sources)if(ref.path) assert.ok(materials.some(m=>m.path===ref.path));
  }
  assert.ok(searchCourse('ProvideValue',lessons,materials,referenceCards,solutions).references.length);
});
test('Compatibilidad: preguntas, opciones y casillas existentes mantienen su posición', () => {
  const originalIds=['entorno','xaml-layouts','formulario','calculadora','tablero','navegacion','especializacion','contentview','extensiones','recursos','matricula','edad'];
  assert.deepEqual(lessons.slice(0,12).map(l=>l.id),originalIds);
  for(const l of lessons.slice(0,12)) {
    const saved=readStudy(JSON.stringify({checks:[`${l.id}-0`],answers:{[`${l.id}-0`]:0}}),lessons);
    assert.equal(saved.checks.has(`${l.id}-0`),true);
    assert.equal(saved.answers[`${l.id}-0`],0);
  }
});
test('Compatibilidad exacta con el contenido publicado antes de ampliar', async () => {
  const legacy=JSON.parse(await readFile(path.join(root,'tests/fixtures/legacy-progress.json'),'utf8'));
  for(const old of legacy){
    const current=lessons.find(l=>l.id===old.id);
    assert.deepEqual(current.quizzes.slice(0,old.quizzes.length),old.quizzes);
    assert.deepEqual(current.checks.slice(0,old.checks.length),old.checks);
  }
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
    for (const url of ['/', '/app.mjs', '/data/course.mjs', '/data/guide.mjs', '/data/workshops.mjs', '/data/workshop-parts.mjs', '/data/study-explanations.mjs', '/data/solutions.json', '/data/materials.json', ...solutions.map(p=>'/'+p.download), ...materials.map(m => '/' + encodeURI(m.path)), ...materials.flatMap(m => m.images || []).map(p => '/' + p)]) {
      const response = await fetch(origin + url, { method: 'HEAD' });
      assert.equal(response.status, 200, url);
    }
    for (const url of ['/package.json', '/.study-cache/ConfiguracionMAUI.txt', '/.git/config', '/no-existe', '/%2e%2e%5cpackage.json']) assert.equal((await fetch(origin + url)).status, 404, url);
    assert.equal((await fetch(origin + '/', { method: 'POST' })).status, 405);
    assert.equal((await fetch(origin + '/%ZZ')).status, 400);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
