export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function readProgress(raw, lessons) {
  try {
    const values = JSON.parse(raw);
    return new Set(Array.isArray(values) ? values.filter(id => lessons.some(l => l.id === id)) : []);
  } catch { return new Set(); }
}
export function searchCourse(query, lessons, materials) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const matches = value => { const text = normalize(value); return terms.every(term => text.includes(term)); };
  return {
    lessons: lessons.filter(l => matches(JSON.stringify(l))),
    materials: materials.filter(m => matches(JSON.stringify(m)))
  };
}
