import { workshops, workshopSteps } from './data/workshops.mjs';
import { workshopStudy } from './data/workshop-study.mjs';
import { topicOf } from './data/topics.mjs';
export const lessonRoute = (id, block = 'entender', part = '') => `/tema/${topicOf(id)?.id}/${id}?bloque=${block}${part ? `&apartado=${part}` : ''}`;
const oldParts = { guia:'entender', ejercicio:'construir', repaso:'repasar', comprobacion:'repasar' };
// Rutas anteriores al rediseño por temas: los enlaces guardados siguen funcionando.
export function legacyRoute(route) {
  const [pathname, query = ''] = route.split('?');
  const [, section, id] = pathname.split('/');
  if (section === 'unidad') return '/';
  if (section === 'practica') return '/entrenar';
  if (section === 'leccion' && topicOf(id)) {
    const part = new URLSearchParams(query).get('apartado');
    return part && /^\d+$/.test(part) ? lessonRoute(id, 'entender', part) : lessonRoute(id, oldParts[part]);
  }
  if (section === 'comparar') { const workshop = workshops.find(w => w.id === id); if (workshop) return lessonRoute(workshop.lesson, 'comparar'); }
  return null;
}
export function readLastPlace(raw) {
  if (typeof raw !== 'string') return null;
  const [pathname, query = ''] = raw.split('?');
  const [, section, first, second, extra] = pathname.split('/');
  if (extra !== undefined) return null;
  if (section === 'taller') return !second && workshops.some(w => w.id === first) ? `/taller/${first}` : null;
  if (section !== 'tema' || topicOf(second)?.id !== first) return null;
  const block = new URLSearchParams(query).get('bloque');
  return lessonRoute(second, ['entender','construir','comparar','repasar'].includes(block) ? block : undefined);
}
export function readWorkshopPositions(raw, packages) {
  let value;
  try { value=JSON.parse(raw); } catch { return {}; }
  if(!value || typeof value!=='object' || Array.isArray(value))return {};
  const positions={};
  for(const workshop of workshops) {
    if(typeof value[workshop.id]!=='string')continue;
    const pkg=packages.find(p=>p.id===workshop.id);if(!pkg)continue;
    const step=workshopSteps(workshop,pkg).find(s=>s.id===value[workshop.id] || s.aliases.includes(value[workshop.id]));
    if(step)positions[workshop.id]=step.id;
  }
  return positions;
}
export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function readStudy(raw, lessons) {
  let value;
  try { value = JSON.parse(raw); } catch { value = null; }
  const checkIds = new Set(lessons.flatMap(l => l.checks.map((_, i) => `${l.id}-${i}`)));
  const checks = new Set(Array.isArray(value?.checks) ? value.checks.filter(id => checkIds.has(id)) : []);
  const answers = {};
  for (const l of lessons) l.quizzes.forEach((q, i) => {
    const id = `${l.id}-${i}`, answer = value?.answers?.[id];
    if (Number.isInteger(answer) && answer >= 0 && answer < q.options.length) answers[id] = answer;
  });
  return { checks, answers };
}
export function readProgress(raw, lessons) {
  try {
    const values = JSON.parse(raw);
    return new Set(Array.isArray(values) ? values.filter(id => lessons.some(l => l.id === id)) : []);
  } catch { return new Set(); }
}
export function searchCourse(query, lessons, materials, references = [], solutions = []) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const matches = value => { const text = normalize(value); return terms.every(term => text.includes(term)); };
  return {
    lessons: lessons.filter(l => matches(JSON.stringify(l))),
    materials: materials.filter(m => matches(JSON.stringify(m))),
    references: references.filter(c => matches(JSON.stringify(c))),
    solutions: solutions.filter(p => matches(JSON.stringify({title:p.title,order:p.order,cases:p.cases,notes:p.notes,workshop:workshops.find(w=>w.id===p.id),comparison:workshopStudy[p.id]})))
  };
}
