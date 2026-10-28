import { mkdir, cp, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const item of ['index.html', 'styles.css', 'app.mjs', 'lib.mjs', 'favicon.svg', 'data', 'assets']) {
  await cp(path.join(root, item), path.join(output, item), { recursive: true });
}
const materials = JSON.parse(await readFile(path.join(root, 'data/materials.json'), 'utf8'));
for (const material of materials) {
  const target = path.join(output, material.path);
  await mkdir(path.dirname(target), { recursive: true });
  await cp(path.join(root, material.path), target);
}
await writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nAllow: /\n');
console.log(`Web generada en dist: ${materials.length} originales y biblioteca de fuentes.`);
