import { rubricGroups } from './data/rubric.mjs';
import { diagnosticQuestions, challenges, codeActivities, practiceCases } from './data/training.mjs';
import { readProgress, readStudy, readWorkshopPositions } from './lib.mjs';
import { lessons as courseLessons } from './data/course.mjs';
import { readRubricChecks } from './data/rubric.mjs';

export const trainingKey = 'aula-interfaces.entrenamiento.v1';
export const storageKeys = [trainingKey, 'aula-interfaces.progreso.v1', 'aula-interfaces.estudio.v1', 'aula-interfaces.ultimo-paso.v1', 'aula-interfaces.rubrica.v1', 'aula-interfaces.tema'];
export const statusLabels = { pendiente:'Pendiente', leido:'Leído', ayuda:'Resuelto con ayuda', solo:'Resuelto solo' };
export const caseLabels = { pendiente:'Pendiente', correcto:'Correcto', fallido:'Fallido' };
const criterionIds = new Set(rubricGroups.flatMap(g=>g.criteria.map(c=>c.id)));
export const notebookQuestions = [...diagnosticQuestions, ...courseLessons.flatMap(l=>l.quizzes.map((q,i)=>({id:`legacy-${l.id}-${i}`,prompt:q.question,options:q.options,answer:q.answer,explanation:q.explanation,lessonId:l.id,criterion:rubricGroups.flatMap(g=>g.criteria).find(c=>c.lessons.includes(l.id))?.id || 'RA1-AB'})))];
const questionMap = new Map(notebookQuestions.map(q=>[q.id,q]));
const caseIds = new Set(practiceCases.map(c=>c.id));
const activityIds = new Set([...challenges,...codeActivities].map(c=>c.id));
const object = v => !!v && typeof v === 'object' && !Array.isArray(v);
const own = (o,k) => Object.hasOwn(o,k);
const dictionaries = ['statuses','answers','cases','errors','help','reviews'];
export const emptyTraining = () => ({version:1,statuses:{},answers:{},cases:{},errors:{},help:{},reviews:{},lastActivity:null});
export function validActivity(activity) {
  if (!object(activity) || typeof activity.title !== 'string' || activity.title.length>240 || typeof activity.at!=='string' || !Number.isFinite(Date.parse(activity.at))) return false;
  const href=activity.href;
  return ['#/','#/entrenar','#/diagnostico','#/diagnostico?ra=RA1','#/diagnostico?ra=RA3','#/diagnostico?ra=RA4','#/cuaderno','#/progreso','#/temario','#/autoevaluacion'].includes(href) || courseLessons.some(l=>href==='#/leccion/'+l.id || href==='#/autoevaluacion?leccion='+l.id) || /^#\/taller\/relacion-[1-8](\?paso=[a-z0-9-]+)?$/.test(href) ||
    challenges.some(c=>href==='#/reto/'+c.id) || codeActivities.some(c=>href==='#/codigo/'+c.id) ||
    practiceCases.some(c=>href==='#/casos/'+c.packageId);
}
function validateTraining(value, strict=false) {
  if (!object(value) || value.version!==1) throw new Error('Versión de entrenamiento incompatible.');
  const out=emptyTraining();
  for (const field of dictionaries) {
    if (!object(value[field])) throw new Error('Datos de entrenamiento incompletos: '+field);
    for (const [id,item] of Object.entries(value[field])) {
      let valid=false;
      if(field==='statuses') valid=criterionIds.has(id) && own(statusLabels,item);
      if(field==='answers') valid=questionMap.has(id) && Number.isInteger(item) && item>=0 && item<questionMap.get(id).options.length;
      if(field==='cases') valid=caseIds.has(id) && own(caseLabels,item);
      if(field==='help') valid=activityIds.has(id) && Number.isInteger(item) && item>=0 && item<=3;
      if(field==='reviews') valid=activityIds.has(id) && typeof item==='boolean';
      if(field==='errors') valid=questionMap.has(id) && object(item) && typeof item.note==='string' && item.note.length<=10000 && typeof item.reviewed==='boolean';
      if (valid) out[field][id]=field==='errors'?{note:item.note,reviewed:item.reviewed}:item;
      else if(strict) throw new Error('Valor o actividad no válida: '+field+'/'+id);
    }
  }
  if(value.lastActivity!==null) {
    if(validActivity(value.lastActivity)) out.lastActivity={href:value.lastActivity.href,title:value.lastActivity.title,at:value.lastActivity.at};
    else if(strict) throw new Error('Última actividad no válida.');
  }
  return out;
}
export function readTraining(raw) {
  try { return validateTraining(JSON.parse(raw)); } catch { return emptyTraining(); }
}
export function gradeDiagnostic(state, answers) {
  const next=readTraining(JSON.stringify(state));
  for(const [id,answer] of Object.entries(answers)) {
    const q=questionMap.get(id);
    if(!q || !Number.isInteger(answer) || answer<0 || answer>=q.options.length) throw new Error('Respuesta no válida.');
    next.answers[id]=answer;
    if(answer!==q.answer && (next.answers[id]!==state.answers[id] || !next.errors[id])) next.errors[id]={note:next.errors[id]?.note || '',reviewed:false};
    else if(answer===q.answer && next.errors[id]) next.errors[id].reviewed=true;
  }
  return next;
}
export function criterionEvidence(criterion,state) {
  const questions=diagnosticQuestions.filter(q=>q.criterion===criterion);
  const answered=questions.filter(q=>own(state.answers,q.id));
  const correct=answered.filter(q=>state.answers[q.id]===q.answer).length;
  const relatedCases=practiceCases.filter(c=>c.criteria.includes(criterion));
  return {answered:answered.length,correct,wrong:answered.length-correct,
    failed:relatedCases.filter(c=>state.cases[c.id]==='fallido').length,
    passed:relatedCases.filter(c=>state.cases[c.id]==='correcto').length,
    totalCases:relatedCases.length};
}
export function pendingGroups(state) {
  return rubricGroups.map(g=>({...g,criteria:g.criteria.map(c=>{
    const evidence=criterionEvidence(c.id,state);
    const unpracticed=!evidence.answered && !evidence.passed && !evidence.failed && !challenges.some(a=>a.criterion===c.id && state.reviews[a.id]) && !codeActivities.some(a=>a.criterion===c.id && state.reviews[a.id]);
    return {...c,evidence,priority:evidence.wrong || evidence.failed?0:unpracticed?1:2};
  }).sort((a,b)=>a.priority-b.priority || b.weight-a.weight || a.id.localeCompare(b.id))}));
}
function stable(value) { return JSON.stringify(value, (_,v)=>object(v)?Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])):v); }
function parseStored(raw) { if(raw===null)return null; if(typeof raw!=='string')throw new Error('Datos de copia no válidos.'); return JSON.parse(raw); }
export function validateBackup(value, lessons, packages) {
  if(!object(value) || value.format!=='aula-interfaces' || value.version!==1 || !Number.isFinite(Date.parse(value.exportedAt)) || !object(value.storage)) throw new Error('Archivo de copia incompatible.');
  if(Object.keys(value.storage).some(k=>!storageKeys.includes(k)) || storageKeys.some(k=>!own(value.storage,k))) throw new Error('La copia contiene campos desconocidos o incompletos.');
  const clean={};
  for(const key of storageKeys) {
    const raw=value.storage[key];
    if(raw===null){clean[key]=null;continue;}
    if(key==='aula-interfaces.tema') {if(!['dark','light'].includes(raw))throw new Error('Tema no válido.');clean[key]=raw;continue;}
    const parsed=parseStored(raw);
    if(key===trainingKey) {clean[key]=JSON.stringify(validateTraining(parsed,true));continue;}
    let normalized;
    if(key==='aula-interfaces.progreso.v1') normalized=[...readProgress(raw,lessons)];
    if(key==='aula-interfaces.rubrica.v1') normalized=[...readRubricChecks(raw)];
    if(key==='aula-interfaces.ultimo-paso.v1') normalized=readWorkshopPositions(raw,packages);
    if(key==='aula-interfaces.estudio.v1') {const s=readStudy(raw,lessons);normalized={checks:[...s.checks],answers:s.answers};}
    // Exact equality rejects unknown identifiers and wrong shapes rather than silently erasing them.
    if(stable(parsed)!==stable(normalized)) throw new Error('Progreso anterior no válido: '+key);
    clean[key]=JSON.stringify(normalized);
  }
  return {...value,storage:clean};
}
export function makeBackup(storage, now=new Date()) {
  return {format:'aula-interfaces',version:1,exportedAt:now.toISOString(),storage:Object.fromEntries(storageKeys.map(k=>[k,storage.getItem(k)]))};
}
export function combineBackups(current,incoming,mode='combine') {
  if(!['combine','replace'].includes(mode))throw new Error('Modo de importación no válido.');
  if(mode==='replace')return {...incoming.storage};
  const out={...current.storage};
  for(const key of storageKeys) {
    const a=current.storage[key], b=incoming.storage[key];
    if(b===null)continue;
    if(a===null || key==='aula-interfaces.tema'){out[key]=b;continue;}
    const left=JSON.parse(a),right=JSON.parse(b);
    if(key===trainingKey){
      const merged=emptyTraining();
      for(const field of dictionaries)merged[field]={...left[field],...right[field]};
      merged.lastActivity=Date.parse(left.lastActivity?.at || 0)>Date.parse(right.lastActivity?.at || 0)?left.lastActivity:right.lastActivity;
      for(const [id,answer] of Object.entries(merged.answers)) {
        if(answer!==questionMap.get(id)?.answer)merged.errors[id]={note:merged.errors[id]?.note || '',reviewed:merged.errors[id]?.reviewed || false};
        else if(merged.errors[id])merged.errors[id].reviewed=true;
      }
      out[key]=JSON.stringify(merged);
    } else if(Array.isArray(left))out[key]=JSON.stringify([...new Set([...left,...right])]);
    else if(key==='aula-interfaces.estudio.v1')out[key]=JSON.stringify({checks:[...new Set([...left.checks,...right.checks])],answers:{...left.answers,...right.answers}});
    else out[key]=JSON.stringify({...left,...right});
  }
  return out;
}
export function applyBackup(storage, values) {
  let previous;
  try { previous=Object.fromEntries(storageKeys.map(k=>[k,storage.getItem(k)])); }
  catch { throw new Error('No se ha importado nada: el almacenamiento local no está disponible. Conserva el archivo para importarlo cuando vuelva a estar disponible.'); }
  try {for(const key of storageKeys)values[key]===null?storage.removeItem(key):storage.setItem(key,values[key]);}
  catch(error) {
    let restored=true;
    for(const key of storageKeys)try{previous[key]===null?storage.removeItem(key):storage.setItem(key,previous[key]);}catch{restored=false;}
    throw new Error(restored?'No se pudo guardar la copia; se ha conservado el progreso anterior.':'No se pudo completar la importación ni restaurar todo el progreso. Conserva la copia exportada.');
  }
}
