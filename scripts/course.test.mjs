import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { lessons, referenceCards } from '../data/course.mjs';
import { workshops, workshopSteps, workshopCode } from '../data/workshops.mjs';
import { explainPart, explainLine } from '../data/study-explanations.mjs';
import { workshopStudy, isImportantCode } from '../data/workshop-study.mjs';
import { readWorkshopPositions } from '../lib.mjs';
import { referenceCategories } from '../data/interface.mjs';
import { topics, topicOf } from '../data/topics.mjs';
import { lessonExamples } from '../data/lesson-examples.mjs';
import exampleCode from '../data/lesson-examples-code.mjs';
import { readProgress, readStudy, normalize, searchCourse, legacyRoute, lessonRoute, readLastPlace, lessonState } from '../lib.mjs';
import { root, server } from './serve.mjs';

const materials = JSON.parse(await readFile(path.join(root, 'data/materials.json'), 'utf8'));
const solutions = JSON.parse(await readFile(path.join(root, 'data/solutions.json'), 'utf8'));

test('Organización: cada lección en un solo tema y todas las fichas sin duplicados', () => {
  const ids=topics.flatMap(t=>t.lessons);
  assert.equal(new Set(ids).size,ids.length);
  assert.deepEqual([...ids].sort(),lessons.map(l=>l.id).sort());
  assert.equal(new Set(topics.map(t=>t.id)).size,7);
  const cards=referenceCategories.flatMap(c=>c.cards);
  assert.equal(new Set(cards).size,cards.length);
  assert.deepEqual(cards.sort(),referenceCards.map(c=>c.id).sort());
});

test('Rutas: los enlaces anteriores llegan a su tema y bloque', () => {
  for(const l of lessons)assert.equal(legacyRoute(`/leccion/${l.id}`),lessonRoute(l.id));
  assert.equal(legacyRoute('/leccion/recursos?apartado=2'),'/tema/extensiones/recursos?bloque=entender&apartado=2');
  assert.equal(legacyRoute('/leccion/edad?apartado=comprobacion'),'/tema/formularios/edad?bloque=repasar');
  assert.equal(legacyRoute('/leccion/calculadora?apartado=ejercicio'),'/tema/eventos/calculadora?bloque=construir');
  for(const w of workshops)assert.equal(legacyRoute(`/comparar/${w.id}`),lessonRoute(w.lesson,'comparar'));
  for(const old of ['/unidad/UD2','/unidad/UD3-4'])assert.equal(legacyRoute(old),'/');
  assert.equal(legacyRoute('/practica'),'/entrenar');
  for(const old of ['/academia','/temario'])assert.equal(legacyRoute(old),'/');
  assert.equal(legacyRoute('/materiales'),'/biblioteca');
  for(const current of ['/','/consulta','/autoevaluacion','/leccion/inventada','/comparar/inventada','/taller/relacion-1'])assert.equal(legacyRoute(current),null);
});

test('Ejemplos: cada apartado sin código tiene ejemplo extraído del proyecto compilado', async () => {
  for(const l of lessons)l.sections.forEach((s,i)=>{if(!s.code)assert.ok(lessonExamples.some(e=>e.lesson===l.id&&e.section===i),`${l.id}/${i}`);});
  assert.equal(new Set(lessonExamples.map(e=>e.id)).size,lessonExamples.length);
  for(const e of lessonExamples){
    assert.ok(lessons.find(l=>l.id===e.lesson)?.sections[e.section],e.id);
    assert.ok(e.title && e.context && e.steps.length && e.result,e.id);
    const code=exampleCode[e.id]?.code;assert.ok(code,e.id);
    const source=(await readFile(path.join(root,e.path),'utf8')).replaceAll('\r\n','\n');
    for(const line of code.split('\n'))assert.ok(source.includes(line.replace(/\r$/,'')),`${e.id}: ${line}`);
    if(e.path.endsWith('.cs'))assert.doesNotMatch(code,/\bvar\b/,e.id);
  }
});

test('Estado por lección: señales, dominio ganado y botón manual', () => {
  const l=lessons[0],base={completed:new Set(),study:{answers:{},checks:new Set()}};
  assert.equal(lessonState(l,base),'sin-empezar');
  assert.equal(lessonState(l,{...base,study:{answers:{[`${l.id}-0`]:l.quizzes[0].answer},checks:new Set()}}),'en-curso');
  assert.equal(lessonState(l,{...base,completed:new Set([l.id])}),'dominada');
  const answers=Object.fromEntries(l.quizzes.map((q,i)=>[`${l.id}-${i}`,q.answer]));
  assert.equal(lessonState(l,{...base,study:{answers,checks:new Set(l.checks.map((_,i)=>`${l.id}-${i}`))}}),'dominada');
  assert.equal(lessonState(l,{...base,study:{answers,checks:new Set()}}),'en-curso');
});

test('Último sitio: rechaza datos corruptos y rutas desconocidas', () => {
  for(const raw of [null,5,'{mal','/','/tema/xaml','/tema/xaml/inventada','/tema/navegacion/entorno','/taller/inventado','/taller/relacion-1/extra','/tema/xaml/xaml-layouts/extra'])assert.equal(readLastPlace(raw),null,String(raw));
  assert.equal(readLastPlace('/tema/xaml/xaml-layouts?bloque=repasar'),'/tema/xaml/xaml-layouts?bloque=repasar');
  assert.equal(readLastPlace('/tema/xaml/xaml-layouts?bloque=inventado'),'/tema/xaml/xaml-layouts?bloque=entender');
  assert.equal(readLastPlace('/taller/relacion-1'),'/taller/relacion-1');
  assert.equal(topicOf('inventada'),undefined);
});

test('Último paso: datos corruptos, alias, posición inicial y relaciones independientes', () => {
  for(const raw of ['{mal','null','[]','3','"texto"'])assert.deepEqual(readWorkshopPositions(raw,solutions),{});
  const saved=readWorkshopPositions(JSON.stringify({'relacion-1':'reglas-archivo-1-parte-1','relacion-2':'preparar','relacion-3':'inventado','relacion-4':3,desconocido:'preparar'}),solutions);
  assert.deepEqual(saved,{'relacion-1':'reglas','relacion-2':'preparar'});
  assert.deepEqual(readWorkshopPositions(JSON.stringify(saved),solutions),saved);
  assert.deepEqual(readWorkshopPositions(JSON.stringify(saved),[]),{});
});

test('Comparaciones: nueve talleres y archivos del paquete, sin sintaxis trivial destacada', () => {
  assert.equal(Object.keys(workshopStudy).length,9);
  for(const [id,info] of Object.entries(workshopStudy)) {
    const pkg=solutions.find(p=>p.id===id);
    assert.ok(info.focus && info.mistake && info.rows.length>=2);
    for(const [name,change,same,path] of info.rows)assert.ok(name && change && same && pkg.files.some(f=>f.path===path && f.code),path);
  }
  assert.equal(isImportantCode('public string Nombre { get; }'),false);
  assert.equal(isImportantCode('private int? primero;'),true);
  assert.equal(isImportantCode('if (!int.TryParse(texto, out int edad)) throw new ArgumentException();'),true);
  assert.equal(isImportantCode('BackgroundColor="{DynamicResource FondoLayout}"'),true);
  assert.ok(searchCourse('referencia local',lessons,materials,referenceCards,solutions).solutions.some(p=>p.id==='relacion-7'));
});

test('Talleres: nueve recorridos, pasos únicos y código de los ZIP verificados', () => {
  assert.deepEqual(workshops.map(w=>w.id),[...Array.from({length:8},(_,i)=>`relacion-${i+1}`),'relacion-7-r5']);
  for(const w of workshops) {
    const pkg=solutions.find(p=>p.id===w.id),steps=workshopSteps(w,pkg);
    assert.ok(lessons.some(l=>l.id===w.lesson));
    assert.equal(new Set(steps.map(s=>s.id)).size,steps.length);
    assert.ok(steps.length>=10 && steps.length<=50,'Recorrido intermedio por relación');
    const previousCounts={'relacion-1':77,'relacion-2':178,'relacion-3':50,'relacion-4':115,'relacion-5':60,'relacion-6':60,'relacion-7':224,'relacion-8':82,'relacion-7-r5':103};
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
  const r5=solutions.find(p=>p.id==='relacion-7-r5');
  assert.ok(workshopSteps(workshops.find(w=>w.id===r5.id),r5).some(s=>s.files.some(f=>workshopCode(f,r5).includes('SetDynamicResource'))),'El taller muestra el enlace dinámico de V5');
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
test('Guía completa: 18 lecciones y los 14 paquetes', async () => {
  assert.equal(lessons.length,18);
  assert.equal(solutions.length,14);
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
    for (const url of ['/', '/app.mjs', '/academy.mjs', '/training-state.mjs', '/data/training.mjs', '/data/course.mjs', '/data/guide.mjs', '/data/reference-details.mjs', '/data/workshops.mjs', '/data/interface.mjs', '/data/topics.mjs', '/data/lesson-examples.mjs', '/data/lesson-examples-code.mjs', '/data/rubric.mjs', '/assets/documents/RubricaPractica1.pdf', '/data/workshop-study.mjs', '/data/workshop-parts.mjs', '/data/study-explanations.mjs', '/data/solutions.json', '/data/materials.json', ...solutions.map(p=>'/'+p.download), ...materials.map(m => '/' + encodeURI(m.path)), ...materials.flatMap(m => m.images || []).map(p => '/' + p)]) {
      const response = await fetch(origin + url, { method: 'HEAD' });
      assert.equal(response.status, 200, url);
    }
    for (const url of ['/package.json', '/.study-cache/ConfiguracionMAUI.txt', '/.git/config', '/no-existe', '/%2e%2e%5cpackage.json']) assert.equal((await fetch(origin + url)).status, 404, url);
    assert.equal((await fetch(origin + '/', { method: 'POST' })).status, 405);
    assert.equal((await fetch(origin + '/%ZZ')).status, 400);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
