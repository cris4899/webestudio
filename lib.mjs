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
    solutions: solutions.filter(p => matches(JSON.stringify({title:p.title,order:p.order,cases:p.cases,notes:p.notes})))
  };
}
