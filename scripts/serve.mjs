import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8', '.rar': 'application/vnd.rar' };
// Solo se sirven los activos de la web y los originales inventariados.
const materials = JSON.parse(await readFile(path.join(root, 'data/materials.json'), 'utf8'));
const solutions = JSON.parse(await readFile(path.join(root, 'data/solutions.json'), 'utf8'));
const allowed = new Set(['index.html', 'styles.css', 'app.mjs', 'academy.mjs', 'training-state.mjs', 'data/training.mjs', 'lib.mjs', 'favicon.svg', 'data/course.mjs', 'data/guide.mjs', 'data/reference-details.mjs', 'data/workshops.mjs', 'data/interface.mjs', 'data/topics.mjs', 'data/rubric.mjs', 'assets/documents/RubricaPractica1.pdf', 'data/workshop-study.mjs', 'data/workshop-parts.mjs', 'data/study-explanations.mjs', 'data/solution-guides.mjs', 'data/materials.json', 'data/solutions.json', ...solutions.map(p=>p.download), ...materials.map(m => m.path), ...materials.flatMap(m => m.images || [])]);
export const server = http.createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
    const url = new URL(request.url, 'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\//, '') || 'index.html';
    if (!allowed.has(relative)) { response.writeHead(404); response.end('No encontrado'); return; }
    const filename = path.join(root, relative);
    const info = await stat(filename);
    response.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Content-Length': info.size, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : await readFile(filename));
  } catch { response.writeHead(400); response.end('Petición no válida'); }
});
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 4173);
  server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
  server.on('error', error => { console.error(`No se pudo iniciar el servidor: ${error.message}`); process.exitCode = 1; });
}
