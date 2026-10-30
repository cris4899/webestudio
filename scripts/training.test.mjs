import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { rubricGroups } from '../data/rubric.mjs';
import { diagnosticQuestions, challenges, codeActivities, practiceCases } from '../data/training.mjs';
import { lessons } from '../data/course.mjs';
import { storageKeys, trainingKey, emptyTraining, readTraining, gradeDiagnostic, criterionEvidence, pendingGroups, makeBackup, validateBackup, combineBackups, applyBackup } from '../training-state.mjs';
const packages=JSON.parse(await readFile(new URL('../data/solutions.json',import.meta.url),'utf8'));
const criteria=rubricGroups.flatMap(g=>g.criteria);
const memory=(initial={})=>{const map=new Map(Object.entries(initial));return {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)};};
const backup=s=>makeBackup(memory({...Object.fromEntries(storageKeys.map(k=>[k,null])),[trainingKey]:JSON.stringify(s)}));

test('Preparación: 32 preguntas, dos por criterio, opciones y referencias válidas',()=>{
  assert.equal(diagnosticQuestions.length,32);
  assert.equal(new Set(diagnosticQuestions.map(q=>q.id)).size,32);
  for(const c of criteria)assert.equal(diagnosticQuestions.filter(q=>q.criterion===c.id).length,2,c.id);
  for(const q of diagnosticQuestions){assert.ok(q.options.length>=3);assert.ok(Number.isInteger(q.answer));assert.ok(q.answer>=0 && q.answer<q.options.length);assert.ok(q.explanation.length>30);}
});
test('Preparación: retos, código, variantes y casos conservan referencias de las soluciones',()=>{
  assert.equal(challenges.length,16);assert.equal(new Set(challenges.map(c=>c.criterion)).size,16);
  assert.equal(codeActivities.filter(c=>c.kind==='explicar').length,8);assert.equal(codeActivities.filter(c=>c.kind==='corregir').length,8);
  for(const a of [...challenges,...codeActivities]){
    assert.ok(criteria.some(c=>c.id===a.criterion));
    const pkg=packages.find(p=>p.id===a.packageId);assert.ok(pkg);
    for(const f of a.files)assert.ok(pkg.files.some(file=>file.path===f && file.code!==undefined),f);
    if(a.hints){assert.equal(a.hints.length,2);assert.ok(a.solution && a.verification);}
    if(a.checks)assert.ok(a.checks.length>=3);
  }
  assert.equal(new Set(practiceCases.map(c=>c.id)).size,practiceCases.length);
  for(let n=1;n<=8;n++){
    const pkg=packages.find(p=>p.id===`relacion-${n}`),cases=practiceCases.filter(c=>c.packageId===pkg.id);
    assert.ok(cases.length>pkg.cases.length);
    assert.deepEqual(cases.slice(0,pkg.cases.length).map(c=>[c.action,c.expected]),pkg.cases);
    for(const c of cases){assert.ok(c.preparation && c.action && c.expected && c.why);for(const id of c.criteria)assert.ok(criteria.some(c=>c.id===id));}
  }
});
test('Diagnóstico: error, reintento correcto, reapertura y revisión manual independiente',()=>{
  const q=diagnosticQuestions[0],bad=(q.answer+1)%q.options.length;
  let state=gradeDiagnostic(emptyTraining(),{[q.id]:bad});
  assert.equal(state.errors[q.id].reviewed,false);
  state.errors[q.id].note='Confundí x:Class con x:Name';state.errors[q.id].reviewed=true;
  state=gradeDiagnostic(state,{[q.id]:bad});assert.equal(state.errors[q.id].reviewed,true,'No reabre por mera sincronización');
  state=gradeDiagnostic(state,{[q.id]:q.answer});assert.equal(state.errors[q.id].reviewed,true);
  assert.equal(state.errors[q.id].note,'Confundí x:Class con x:Name');
  state=gradeDiagnostic(state,{[q.id]:bad});assert.equal(state.errors[q.id].reviewed,false);
  assert.deepEqual(state.statuses,{});
  assert.throws(()=>gradeDiagnostic(state,{[q.id]:9}));
});
test('Pendientes: errores primero y no practicados después; peso solo dentro del RA',()=>{
  const state=emptyTraining();state.statuses['RA1-AB']='solo';
  const q=diagnosticQuestions.find(q=>q.criterion==='RA1-AB');state.answers[q.id]=(q.answer+1)%3;
  const groups=pendingGroups(state);assert.equal(groups[0].criteria[0].id,'RA1-AB');assert.equal(groups[0].criteria[0].priority,0);
  assert.equal(groups[1].criteria[0].id,'RA3-DE');assert.equal(groups[2].criteria[0].id,'RA4-FGHI');
  assert.equal(criterionEvidence('RA1-AB',state).wrong,1);
  state.cases[practiceCases.find(c=>c.criteria.includes('RA3-C')).id]='fallido';
  assert.ok(criterionEvidence('RA3-C',state).failed>0);
});
test('Persistencia: datos corruptos, valores ajenos, XSS y estado válido restaurado',()=>{
  for(const raw of ['null','[]','{mal','{"version":2}'])assert.deepEqual(readTraining(raw),emptyTraining());
  const state=emptyTraining();state.statuses['RA1-AB']='solo';state.cases[practiceCases[0].id]='correcto';state.help[challenges[0].id]=3;
  assert.deepEqual(readTraining(JSON.stringify(state)),state);
  state.statuses.ajeno='solo';state.lastActivity={href:'javascript:alert(1)',title:'hola',at:new Date().toISOString()};
  const cleaned=readTraining(JSON.stringify(state));assert.equal(cleaned.lastActivity,null);assert.ok(!Object.hasOwn(cleaned.statuses,'ajeno'));
});
test('Copia: conserva progreso anterior completo y acepta orden distinto de claves',()=>{
  const s=memory();s.setItem(trainingKey,JSON.stringify(emptyTraining()));
  s.setItem('aula-interfaces.progreso.v1','["edad","entorno"]');
  s.setItem('aula-interfaces.estudio.v1',JSON.stringify({answers:{'formulario-0':0,'entorno-0':0},checks:['edad-0']}));
  s.setItem('aula-interfaces.rubrica.v1','["RA1-AB"]');
  s.setItem('aula-interfaces.ultimo-paso.v1','{"relacion-1":"preparar"}');
  s.setItem('aula-interfaces.tema','dark');
  const b=validateBackup(makeBackup(s),lessons,packages);
  assert.equal(b.storage['aula-interfaces.progreso.v1'],'["edad","entorno"]');
  assert.equal(JSON.parse(b.storage['aula-interfaces.estudio.v1']).answers['entorno-0'],0);
});
test('Copia: combinación y reemplazo con notas, resultados y datos anteriores',()=>{
  const a=emptyTraining(),b=emptyTraining();const q=diagnosticQuestions[0];
  a.statuses['RA1-AB']='leido';b.statuses['RA1-AB']='solo';a.cases[practiceCases[0].id]='fallido';b.answers[q.id]=q.answer;
  a.errors[q.id]={note:'Mi explicación',reviewed:false};b.errors[q.id]={note:'Corregido',reviewed:true};
  const left=backup(a),right=backup(b);left.storage['aula-interfaces.progreso.v1']='["entorno"]';right.storage['aula-interfaces.progreso.v1']='["edad"]';
  const combined=combineBackups(left,right);const state=readTraining(combined[trainingKey]);
  assert.equal(state.statuses['RA1-AB'],'solo');assert.equal(state.cases[practiceCases[0].id],'fallido');assert.equal(state.errors[q.id].note,'Corregido');
  assert.deepEqual(JSON.parse(combined['aula-interfaces.progreso.v1']),['entorno','edad']);
  assert.deepEqual(combineBackups(left,right,'replace'),right.storage);
});
test('Copia: rechaza versiones, formas, ids y rutas inválidas antes de escribir',()=>{
  const valid=backup(emptyTraining());
  for(const mutation of [b=>b.version=8,b=>delete b.storage[trainingKey],b=>b.storage.inventado='1',b=>b.storage[trainingKey]='{}',b=>b.storage['aula-interfaces.progreso.v1']='["inventado"]',b=>b.storage['aula-interfaces.estudio.v1']='{"checks":[],"answers":{"edad-0":99}}']){
    const b=structuredClone(valid);mutation(b);assert.throws(()=>validateBackup(b,lessons,packages));
  }
  const b=structuredClone(valid),state=emptyTraining();state.lastActivity={href:'https://example.com',title:'x',at:new Date().toISOString()};b.storage[trainingKey]=JSON.stringify(state);assert.throws(()=>validateBackup(b,lessons,packages));
});
test('Copia: fallo de almacenamiento restaura valores anteriores',()=>{
  const initial=Object.fromEntries(storageKeys.map(k=>[k,k==='aula-interfaces.tema'?'dark':null]));
  const s=memory(initial),values={...initial,[trainingKey]:JSON.stringify(emptyTraining())};
  const setter=s.setItem;let count=0;s.setItem=(k,v)=>{if(++count===2)throw Error('quota');setter(k,v);};
  values['aula-interfaces.progreso.v1']='[]';assert.throws(()=>applyBackup(s,values),/conservado/);
  for(const k of storageKeys)assert.equal(s.getItem(k),initial[k]);
});
