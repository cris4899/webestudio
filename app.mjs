import { lessons, officialNotes, referenceCards } from './data/course.mjs';
import { readProgress, readStudy, searchCourse } from './lib.mjs';
import { workshops, workshopSteps, workshopCode } from './data/workshops.mjs';
import { explainLine } from './data/study-explanations.mjs';

const $ = (selector) => document.querySelector(selector);
const main = $('#contenido');
const esc = (value) => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const iconPaths = { home: 'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z', book: 'M12 5v16M3 3h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v16h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z', practice: 'm8 3-5 5 5 5m8-10 5 5-5 5M10 21h4M12 16v5', files: 'M7 3h8l5 5v13H7Zm8 0v6h5M3 7v14', check: 'm5 12 4 4L19 6', quiz: 'M9 3h6v3H9ZM6 5H4v16h16V5h-2M7 11h10M7 16h6', arrow: 'M4 12h16m-6-6 6 6-6 6' };
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="${iconPaths[name] || iconPaths.book}"/></svg>`;
let materials = [];
let solutions = [];
let completed = new Set();
let storageWarning = false;
let libraryFilter = 'all';
const quizResults = new Map();
const key = 'aula-interfaces.progreso.v1';
const studyKey = 'aula-interfaces.estudio.v1';
let study = readStudy(null, lessons);
let noticeTimer;
function notify(message) { $('#notice').textContent = message; clearTimeout(noticeTimer); noticeTimer = setTimeout(() => { $('#notice').textContent = ''; }, 6500); }
try { completed = readProgress(localStorage.getItem(key), lessons); } catch { storageWarning = true; }
try { study = readStudy(localStorage.getItem(studyKey), lessons); } catch { storageWarning = true; }
function restoreResults() {
  quizResults.clear();
  for (const l of lessons) l.quizzes.forEach((q, i) => {
    const id = `${l.id}-${i}`;
    if (Object.hasOwn(study.answers, id)) quizResults.set(id, study.answers[id] === q.answer);
  });
}
restoreResults();
function saveStudy() {
  try { localStorage.setItem(studyKey, JSON.stringify({ checks: [...study.checks], answers: study.answers })); }
  catch { notify('El navegador no permite guardar el progreso. Los cambios durarán solo esta sesión.'); }
}
function checklist(l) { return l.checks.map((c, i) => `<label><input type="checkbox" data-check="${l.id}-${i}"${study.checks.has(`${l.id}-${i}`) ? ' checked' : ''}><span>${esc(c)}</span></label>`).join(''); }
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  $('#theme-toggle').setAttribute('aria-pressed', String(dark));
  $('#theme-toggle').setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
  $('#theme-toggle').title = dark ? 'Activar modo claro' : 'Activar modo oscuro';
  $('#theme-toggle').textContent = dark ? 'Claro' : 'Oscuro';
}
updateThemeButton();
$('#theme-toggle').addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  updateThemeButton();
  try { localStorage.setItem('aula-interfaces.tema', document.documentElement.dataset.theme); }
  catch { notify('El tema se aplicará solo durante esta sesión: el almacenamiento está bloqueado.'); }
});
function progress(unit) { const list = unit ? lessons.filter(l => l.unit === unit) : lessons; const count = list.filter(l => completed.has(l.id)).length; return { count, total: list.length, percent: Math.round(count / list.length * 100) }; }
const track = (percent, label) => `<div class="progress-track" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><div class="progress-fill" style="width:${percent}%"></div></div>`;
const heading = (eyebrow, title, description, badge = '') => `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="subheading">${description}</p></div>${badge ? `<span class="pill">${badge}</span>` : ''}</div>`;
const lessonLink = l => `#/leccion/${l.id}`;
const materialLink = m => `#/material/${encodeURIComponent(m.path)}`;
const originalLink = m => m.path.split('/').map(encodeURIComponent).join('/');
const materialName = m => m.name.replace(/\.pdf$|\.rar$|\.md\.txt$/gi, '').replaceAll('_', ' ');
const matchedSources = l => materials.filter(m => l.sources.includes(m.id));
const paragraphs = list => list.map(p => `<p>${esc(p)}</p>`).join('');
const codeBlock = (code, filename = 'Código original') => `<div class="code-block"><div class="code-head"><span>${esc(filename)}</span><button class="copy-button" type="button">Copiar código</button></div><pre><code>${esc(code)}</code></pre></div>`;
function sourceReference(ref) {
  if (ref.url) return `<a class="source-link" href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">Microsoft Learn <br>${esc(ref.url.split('/modules/')[1] || ref.url)}</a>`;
  const m = materials.find(m => m.path === ref.path); if (!m) return '';
  const file=m.sources?.find(f=>f.name.endsWith(ref.file || '\u0000'));
  return `<a class="source-link" href="${materialLink(m)}${ref.pages ? '?pagina='+ref.pages[0] : file ? '?archivo='+encodeURIComponent(file.name) : ''}">${esc(m.name)}${ref.pages ? ' · páginas '+ref.pages.join(', ') : ''}${ref.file ? ' · '+esc(ref.file) : ''} </a>`;
}
function solutionPanel(id) {
  const pkg = solutions.find(p => p.id === id); if (!pkg) return '';
  const passed = pkg.builds.filter(p => p.success).length;
  return `<details class="solution-panel"><summary>Ver solución explicada · ${esc(pkg.title)}</summary><div class="solution-body"><p class="source-notice">Elaboración didáctica. Los proyectos Learn conservan su base MicrosoftDocs y las licencias incluidas. El código mostrado aquí procede de los mismos archivos del ZIP.</p><a class="button" href="${pkg.download}" download>Descargar proyecto completo · ${formatSize(pkg.size)} </a><h3>Cómo abrirlo</h3><p>Descomprime el ZIP, abre <code>Soluciones.slnx</code> en Visual Studio con .NET 10 y MAUI y elige la aplicación de inicio. Selecciona Máquina Windows. Las bibliotecas no se ejecutan solas. También puedes abrir un .csproj directamente. Lee el README del paquete para las variantes y referencias.</p><h3>Orden de construcción y lectura</h3><ol>${pkg.order.map(p=>`<li>${esc(p)}</li>`).join('')}</ol><p>${esc(pkg.notes)}</p><h3>Comprobar el resultado</h3><div class="table-scroll"><table class="study-table"><thead><tr><th>Entrada o acción</th><th>Resultado esperado</th></tr></thead><tbody>${pkg.cases.map(([a,b])=>`<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</tbody></table></div><h3>Proyectos y verificación</h3><p>${passed} de ${pkg.builds.length} proyectos con compilación Windows comprobada. Esto no acredita ejecución en Android/iOS ni una llamada real.</p><ul>${pkg.builds.map(p=>`<li>${esc(p.project)} · ${p.success?' Compila en Windows':'Pendiente / fallo'}${p.warnings ? ` · ${p.warnings} advertencias` : ''}</li>`).join('')}</ul><h3>Fuentes del ejercicio</h3>${pkg.sources.map(sourceReference).join('')}<h3>Árbol de archivos y código completo</h3><p>Los recursos binarios se incluyen en el ZIP. Abre cada archivo de texto para leerlo o copiarlo.</p><div class="source-files">${pkg.files.map((f,i)=>f.code!==undefined?`<details data-solution-file="${pkg.id}|${i}"><summary>${esc(f.path)}</summary><div class="solution-code"></div></details>`:`<div class="binary-file">${esc(f.path)} · recurso · ${formatSize(f.size)}</div>`).join('')}</div></div></details>`;
}
function guideSection(l) {
  return `<section class="guide-section" id="guia"><h2>Tu recorrido de estudio</h2><h3>Antes de empezar</h3><ul>${l.guide.prerequisites.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><h3>Cómo circulan los datos</h3><p class="data-flow">${esc(l.guide.flow)}</p><h3>Construcción paso a paso</h3><ol class="guide-steps">${l.guide.steps.map(([title,text])=>`<li><strong>${esc(title)}</strong><p>${esc(text)}</p></li>`).join('')}</ol><a class="text-link" href="#/solucion/${l.guide.packageId}">Proyecto, archivos y casos de comprobación </a></section>`;
}
function workshopLink(id) {
  return workshops.some(w=>w.id===id) ? `<a class="button" href="#/taller/${id}">Hacer la relación paso a paso en Visual Studio</a>` : '';
}
function workshopFile(block,pkg) {
  const raw=workshopCode(block,pkg), display=block.display || raw;
  const notes=display.split('\n').map((line,index)=>({line:index+1,text:explainLine(line)})).filter(n=>n.text);
  const index=pkg.files.findIndex(f=>f.path===block.path);
  return `<section class="workshop-file"><h3>${esc(block.title || 'Archivo que debes editar')}</h3>${block.reason?`<p>${esc(block.reason)}</p>`:''}<p class="file-location"><code>${esc(block.path)}</code></p><p class="source-notice">Fragmento, no archivo completo. ${esc(block.context || 'Escríbelo dentro de la clase o contenedor indicado.')} Línea ${block.line || 1} de la referencia.</p>${codeBlock(display,block.path)}<details class="line-reading"><summary>Consultar explicación línea a línea</summary><p>La numeración corresponde al fragmento mostrado; la ubicación en el archivo aparece arriba.</p><ol>${notes.map(n=>`<li><strong>Línea ${n.line}</strong><p>${esc(n.text)}</p></li>`).join('')}</ol><section class="fragment-context"><h3>Por qué va en este archivo</h3><p>${esc(block.explanation)}</p></section></details><details class="complete-file" data-solution-file="${pkg.id}|${index}"><summary>Consultar archivo completo para situar el fragmento</summary><div class="solution-code"></div></details></section>`;
}
function workshopIndex(steps,index,id) {
  const groups=[...new Set(steps.map(s=>s.group))];
  const links=list=>`<ol>${list.map(s=>`<li><a class="toc-link" href="#/taller/${id}?paso=${s.id}"${s.id===steps[index].id?' aria-current="step"':''}>${esc(s.title)}</a></li>`).join('')}</ol>`;
  return `<details class="workshop-outline"${matchMedia('(min-width:901px)').matches?' open':''}><summary>Recorrido por bloques</summary>${groups.map(group=>{
    const list=steps.filter(s=>s.group===group),paths=[...new Set(list.flatMap(s=>s.files.map(f=>f.path)))];
    return `<details${steps[index].group===group?' open':''}><summary>${esc(list[0].groupTitle)} · ${list.length} ${list.length===1?'paso':'pasos'}</summary>${links(list.filter(s=>!s.files.length))}${paths.map(path=>`<details class="file-step-index"${steps[index].files[0]?.path===path?' open':''}><summary>${esc(path)}</summary>${links(list.filter(s=>s.files[0]?.path===path))}</details>`).join('')}</details>`;
  }).join('')}</details>`;
}
function workshopPage(id, stepId) {
  const workshop = workshops.find(w=>w.id===id), pkg=solutions.find(p=>p.id===id);
  if(!workshop || !pkg) return notFound();
  const steps=workshopSteps(workshop,pkg);
  const index=stepId ? steps.findIndex(s=>s.id===stepId || s.aliases?.includes(stepId)) : 0;
  if(index<0) return notFound();
  const current=steps[index];
  const link=i=>`#/taller/${id}?paso=${steps[i].id}`;
  return `<a class="back-link" href="#/practica">Volver a las prácticas</a>`+heading('TALLER EN VISUAL STUDIO',esc(pkg.title),'Trabaja en Visual Studio con la web al lado. Lee el paso, escribe el código y comprueba el resultado antes de continuar.')+
    `<p class="source-notice">Elaboración didáctica basada en el material recibido. El ZIP contiene la solución final: úsalo como base y referencia para reconstruir los archivos, no como sustituto de la práctica.</p><div class="workshop-actions"><a class="button secondary" href="${pkg.download}" download>Descargar base y solución de apoyo</a><a class="text-link" href="#/solucion/${id}">Consultar solución completa</a><a class="text-link" href="#/leccion/${workshop.lesson}">Repasar conceptos y autoevaluación</a></div>`+
    `<div class="reader-layout workshop-layout"><article class="reader workshop-reader"><p class="unit-code">PASO ${index+1} DE ${steps.length}</p><h2>${esc(current.title)}</h2><section class="study-stage"><h3>1. Qué hacer en Visual Studio</h3><p>${esc(current.action)}</p>${current.subtasks?.length?`<details class="step-preparation"><summary>Ver las acciones de este paso</summary><ol>${current.subtasks.map(task=>`<li><strong>${esc(task.title)}</strong><p>${esc(task.action)}</p><p>${esc(task.explanation)}</p></li>`).join('')}</ol></details>`:''}</section><section class="study-stage"><h3>2. Entiende el motivo</h3>${current.explanation.split(/(?<=[.?!])\s+(?=[A-ZÁÉÍÓÚ])/).map(text=>`<p>${esc(text)}</p>`).join('')}</section><section class="study-stage"><h3>3. Código y explicación</h3>${current.files.length?current.files.map(block=>workshopFile(block,pkg)).join(''):'<p>Este paso es de preparación o comprobación: no requiere añadir código.</p>'}</section><aside class="callout"><h3>Comprueba antes de continuar</h3><p>${esc(current.check)}</p></aside>${current.id==='comprobar'?`<div class="table-scroll"><table class="study-table"><thead><tr><th>Entrada o acción</th><th>Resultado esperado</th></tr></thead><tbody>${pkg.cases.map(([a,b])=>`<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</tbody></table></div><h3>Convenciones y límites</h3><p>${esc(pkg.notes)}</p><h3>Fuentes</h3>${pkg.sources.map(sourceReference).join('')}`:''}<nav class="workshop-pagination" aria-label="Cambiar de paso">${index?`<a class="button secondary" href="${link(index-1)}">Paso anterior</a>`:''}${index<steps.length-1?`<a class="button" href="${link(index+1)}">Siguiente paso</a>`:`<a class="button" href="#/leccion/${workshop.lesson}?apartado=comprobacion">Revisar la relación y guardar mi progreso</a>`}</nav><p class="source-notice">El paso mostrado orienta la navegación; no acredita que hayas completado la práctica. Tu progreso sigue guardándose desde las casillas y la lección.</p></article><aside class="reader-aside"><nav class="panel workshop-index" aria-label="Pasos de la relación"><h2>RECORRIDO COMPLETO</h2>${workshopIndex(steps,index,id)}</nav></aside></div>`;
}
function referencePage() {
  return heading('CONSULTA RÁPIDA','La pieza que necesitas, a mano.','Sintaxis, controles y patrones presentes en tus materiales. Cada ficha conecta la explicación con su práctica y su fuente.')+`<div class="lesson-grid">${referenceCards.map(c=>`<article class="panel reference-card" id="ficha-${c.id}"><h2>${esc(c.title)}</h2><p>${esc(c.text)}</p><div class="exam-links"><a href="#/leccion/${c.lesson}">Entender el concepto </a><a href="#/leccion/${c.practice}">Ver su aplicación </a></div>${sourceReference({path:c.source})}</article>`).join('')}</div>`;
}
function solutionsPage(id) {
  if(id) { const pkg=solutions.find(p=>p.id===id);if(!pkg)return notFound();return `<a class="back-link" href="#/soluciones"> Todas las soluciones</a>`+heading('PROYECTO DIDÁCTICO',esc(pkg.title),'Archivos completos, pasos de lectura y tabla de comprobación basados en el material recibido.')+`<div class="workshop-actions">${workshopLink(pkg.id)}<a class="button" href="${pkg.download}" download>Descargar ZIP · ${formatSize(pkg.size)} </a></div>${solutionPanel(id)}`; }
  return heading('SOLUCIONES Y DESCARGAS','De principio a fin, archivo por archivo.','Ocho relaciones y cinco módulos Learn. Los paquetes incluyen todas sus variantes y dependencias locales, sin cachés ni productos de compilación.')+`<div class="lesson-grid">${solutions.map(p=>`<article class="panel"><span class="unit-code">${p.id.startsWith('relacion')?'RELACIÓN DE CLASE':'MÓDULO LEARN'}</span><h2>${esc(p.title)}</h2><p>${p.builds.length} proyectos · ${p.files.length} archivos · ${formatSize(p.size)}</p><div class="exam-links">${workshopLink(p.id)}<a href="#/solucion/${p.id}">Ver explicación y código </a><a href="${p.download}" download>Descargar ZIP </a></div></article>`).join('')}</div>`;
}

function renderNav(route) {
  const unit = route.startsWith('/leccion/') ? lessons.find(l => l.id === route.split('/')[2])?.unit : route.split('/')[2];
  const active = target => route === target || (target === '/soluciones' && route.startsWith('/solucion/')) || (target === '/practica' && route.startsWith('/taller/')) || (target.startsWith('/unidad/') && unit === target.split('/')[2]);
  const navLink = (target, name, symbol, count = '') => `<a class="nav-link${active(target) ? ' active' : ''}" href="#${target}"${active(target) ? ' aria-current="page"' : ''}>${symbol}<span>${name}</span>${count ? `<span class="nav-count">${count}</span>` : ''}</a>`;
  $('#nav').innerHTML = navLink('/', 'Vista general', icon('home')) + '<div class="nav-label">CONTENIDO DEL CURSO</div>' + navLink('/unidad/UD2', 'Unidad 2', '<span class="nav-dot"></span>', String(lessons.filter(l=>l.unit==='UD2').length)) + navLink('/unidad/UD3-4', 'Unidades 3 y 4', '<span class="nav-dot purple"></span>', String(lessons.filter(l=>l.unit==='UD3-4').length)) + '<div class="nav-label">APRENDE HACIENDO</div>' + navLink('/practica', 'Prácticas de clase', icon('practice')) + navLink('/autoevaluacion', 'Autoevaluación', icon('quiz')) + navLink('/consulta', 'Consulta rápida', icon('book')) + navLink('/soluciones', 'Soluciones y descargas', icon('files')) + navLink('/biblioteca', 'Biblioteca de recursos', icon('files'));
  const p = progress();
  $('#sidebar-progress').innerHTML = `<div class="progress-top"><span>Tu progreso global</span><strong>${p.percent}%</strong></div>${track(p.percent, 'Progreso global')}<span class="muted">${p.count} de ${p.total} lecciones completadas</span>`;
}

function unitCard(unit) {
  const isPurple = unit === 'UD3-4'; const p = progress(unit);
  return `<article class="unit-card${isPurple ? ' purple' : ''}"><div class="unit-card-top"><div><span class="unit-code">${isPurple ? 'UNIDADES 03 + 04' : 'UNIDAD 02'}</span><h3>${isPurple ? 'Recursos y controles personalizados' : 'Construye tus primeras interfaces'}</h3><p>${isPurple ? 'Extensiones, recursos y Views completos.' : 'Del XAML al comportamiento de tu aplicación.'}</p></div><span class="unit-symbol" aria-hidden="true">${isPurple ? '' : '&lt;/&gt;'}</span></div><div class="unit-card-body"><div class="topic-chips">${(isPurple ? ['Extensiones XAML', 'Recursos', 'Matrícula', 'Fecha y edad'] : ['Layouts', 'Validación', 'Eventos', 'Navegación', 'ContentView']).map(t => `<span>${t}</span>`).join('')}</div><div class="progress-top"><span>${p.count} de ${p.total} lecciones completadas</span><strong>${p.percent}%</strong></div>${track(p.percent, `Progreso ${unit}`)}<div class="unit-card-bottom"><span>${p.total} lecciones · ${isPurple ? 'R7–R8 + Learn' : 'R1–R6 + Learn'}</span><a href="#/unidad/${unit}">Explorar unidad <span aria-hidden="true"></span></a></div></div></article>`;
}

function resourceRow(m) { return `<a class="resource-row" href="${materialLink(m)}"><span class="file-icon ${m.kind}">${m.kind === 'links' ? 'LINK' : m.kind.toUpperCase()}</span><div><strong>${esc(materialName(m))}</strong><small>${esc(m.unit)} · ${m.kind === 'pdf' ? m.pages + ' páginas' : m.kind === 'rar' ? m.sources.length + ' archivos de código consultables' : m.links.length + ' enlaces'}</small></div><span aria-hidden="true"></span></a>`; }

function home() {
  const next = lessons.find(l => !completed.has(l.id)) || lessons[0];
  const p = progress();
  return heading('APRENDER. PRACTICAR. ENTENDER.', 'Tu próximo paso empieza aquí.', 'Todo tu material de Desarrollo de Interfaces, conectado y organizado<br class="desktop-break"> para pasar del «lo he leído» al «sé hacerlo».', '2º DAM <span aria-hidden="true">·</span> .NET MAUI') +
    `<section class="hero" aria-label="Continuar estudiando"><div class="hero-content"><span class="tiny-label">${p.count === p.total ? 'VUELVE A REPASAR' : p.count ? 'SIGUE DONDE LO DEJASTE' : 'EMPIEZA POR LO ESENCIAL'}</span><h2>${p.count ? esc(next.title) : 'Las interfaces se entienden<br>construyéndolas.'}</h2><p>${p.count ? esc(next.summary) : 'Apuntes paso a paso, código explicado y las prácticas de tu profesor. Un recorrido para aprender haciendo.'}</p><a class="button" href="${lessonLink(next)}">${p.count ? 'Continuar estudiando' : 'Empezar a estudiar'} <span aria-hidden="true"></span></a></div><div class="hero-visual" aria-hidden="true"><div class="code-window"><div class="window-dots"><i></i><i></i><i></i><span>Tu próxima interfaz.xaml</span></div><pre>&lt;<span class="code-purple">ContentPage</span>&gt;\n  &lt;<span class="code-purple">VerticalStackLayout</span>&gt;\n    &lt;<span class="code-purple">Label</span>\n      Text="¡Hola, MAUI!" /&gt;\n  &lt;/<span class="code-purple">VerticalStackLayout</span>&gt;\n&lt;/<span class="code-purple">ContentPage</span>&gt;</pre></div><div class="float-label"><span></span> De la teoría a tu aplicación</div></div></section>` +
    `<div class="stats"><div class="stat"><span class="stat-icon">${icon('book')}</span><div><strong>${lessons.length}</strong><span>Lecciones para entender</span></div></div><div class="stat"><span class="stat-icon">${icon('practice')}</span><div><strong>8</strong><span>Relaciones para practicar</span></div></div><div class="stat"><span class="stat-icon">${icon('files')}</span><div><strong>${materials.length}</strong><span>Materiales originales</span></div></div></div>` +
    `<div class="guide-links"><a href="#/practica">Talleres guiados en Visual Studio</a><a class="button secondary" href="#/consulta">Consulta rápida</a><a class="button secondary" href="#/soluciones">${solutions.length} soluciones completas y ZIP</a><a class="button secondary" href="#/autoevaluacion">${lessons.reduce((n,l)=>n+l.quizzes.length,0)} preguntas de repaso</a></div><section><div class="section-heading"><div><h2>Tu ruta de aprendizaje</h2><p>Dos bloques, un mismo objetivo: dominar tus prácticas.</p></div><a class="text-link" href="#/practica">Ver prácticas <span aria-hidden="true"></span></a></div><div class="unit-grid">${unitCard('UD2')}${unitCard('UD3-4')}</div></section>` +
    `<div class="bottom-grid"><section class="panel"><div class="section-heading"><div><h2>Siempre a mano</h2><p>Vuelve a la fuente cuando lo necesites.</p></div><a class="text-link" href="#/biblioteca">Ver todo </a></div>${materials.filter(m => m.kind === 'pdf').filter(m => ['ConfiguracionMAUI', 'Relacion01_MAUI', 'Relacion08_MAUI_2627'].includes(m.id)).map(resourceRow).join('')}</section><section class="panel practice-panel"><span class="tiny-label">PONLO EN PRÁCTICA</span><h2>Leer ayuda.<br>Hacerlo lo cambia todo.</h2><p>Trabaja los enunciados de clase y comprueba sus requisitos antes de dar una práctica por terminada.</p><div class="practice-steps"><span><b>1</b> Consulta</span><span><b>2</b> Resuelve</span><span><b>3</b> Comprueba</span></div><a class="button small" href="#/practica">Ir a las prácticas <span aria-hidden="true"></span></a></section></div><p class="source-notice">Basado en los archivos del profesor. Las explicaciones y preguntas son apoyo de estudio; los enunciados originales son siempre la referencia. Tu progreso se guarda en este navegador.</p>`;
}

function lessonCard(l) { return `<a class="lesson-card" href="${lessonLink(l)}"><div class="lesson-meta"><span>${esc(l.tag.toUpperCase())}</span>${completed.has(l.id) ? '<span class="done"> Completada</span>' : `<span>LECTURA GUIADA</span>`}</div><h3>${esc(l.title)}</h3><p>${esc(l.summary)}</p><div class="lesson-card-footer"><span>${l.sections.length} apartados · práctica y repaso</span><span>Estudiar </span></div></a>`; }
function unitPage(unit) {
  if (!['UD2', 'UD3-4'].includes(unit)) return notFound();
  const p = progress(unit);
  return heading(unit === 'UD2' ? 'UNIDAD 02' : 'UNIDADES 03 + 04', unit === 'UD2' ? 'Construir la interfaz, paso a paso.' : 'Dar forma a tus propios controles.', unit === 'UD2' ? 'Configuración, XAML, relaciones 1 a 6 y cuatro módulos Learn. Los proyectos y guías conectan conceptos con práctica.' : 'Relaciones 7 y 8 y el módulo Learn de recursos: extensiones, estilos y controles personalizados. Se conserva la agrupación del profesor.') + `<div class="unit-intro${unit === 'UD3-4' ? ' purple' : ''}"><strong>${p.count} / ${p.total} completadas</strong>${track(p.percent, 'Progreso de unidad')}<span>${p.percent}% de tu recorrido</span></div><div class="lesson-grid">${lessons.filter(l => l.unit === unit).map(lessonCard).join('')}</div>`;
}

function quizForm(l, q, index, order) {
  const id = `${l.id}-${index}`;
  const options = q.options.map((text, i) => ({ text, i }));
  const shift = (order + index + 1) % options.length;
  const reordered = [...options.slice(shift), ...options.slice(0, shift)];
  const answered = Object.hasOwn(study.answers, id), correct = study.answers[id] === q.answer;
  return `<form class="quiz" data-quiz="${id}" data-lesson="${l.id}" data-index="${index}"><fieldset><legend>${esc(q.question)}</legend>${reordered.map(o => `<label><input type="radio" name="answer" value="${o.i}" required${study.answers[id] === o.i ? ' checked' : ''}><span>${esc(o.text)}</span></label>`).join('')}</fieldset><button type="submit" class="button small">Comprobar respuesta</button><div class="feedback${answered && correct ? ' correct' : ''}" aria-live="polite">${answered ? esc((correct ? ' Correcto. ' : 'Vuelve a intentarlo. ') + q.explanation) : ''}</div></form>`;
}
function lessonPage(id) {
  const l = lessons.find(item => item.id === id); if (!l) return notFound();
  const index = lessons.indexOf(l), next = lessons[index + 1];
  return `<a class="back-link" href="#/unidad/${l.unit}"> Volver a ${l.unit === 'UD2' ? 'Unidad 2' : 'Unidades 3 y 4'}</a>` + heading(esc(l.tag.toUpperCase()), esc(l.title), esc(l.summary)) +
    `<div class="reader-layout"><article class="reader"><div class="objectives"><h2>Al terminar podrás…</h2><ul>${l.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>${workshopLink(l.guide.packageId)}${guideSection(l)}${l.sections.map((s, i) => `<section id="apartado-${i}"><h2>${esc(s.title)}</h2>${paragraphs(s.paragraphs)}${s.code ? codeBlock(s.code, s.filename) : ''}</section>`).join('')}<aside class="callout"><h3>Donde conviene fijarse</h3><ul>${l.pitfalls.map(p => `<li>${esc(p)}</li>`).join('')}</ul></aside><section class="exercise" id="ejercicio"><span class="unit-code">DEL MATERIAL DE CLASE</span><h3>${esc(l.practice.title)}</h3><p>${esc(l.practice.prompt)}</p><ol>${l.practice.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol><details><summary>Ver guía de resolución</summary><p>${esc(l.practice.solution)}</p></details></section>${solutionPanel(l.guide.packageId)}<section id="repaso"><h2>¿Lo has entendido?</h2><p>Comprueba los requisitos del enunciado. Estas preguntas son apoyo de estudio, no preguntas oficiales de examen.</p>${l.quizzes.map((q, i) => quizForm(l, q, i, index)).join('')}</section><section class="checklist" id="comprobacion"><h2>Antes de darlo por terminado</h2>${checklist(l)}<p class="source-notice">Las casillas se guardan en este navegador y se comparten con la página de prácticas. El botón «Marcar como completada» guarda el avance global de la lección.</p></section><div class="reader-bottom"><button class="button" data-complete="${l.id}">${completed.has(l.id) ? ' Completada · desmarcar' : 'Marcar como completada'}</button>${next ? `<a class="text-link" href="${lessonLink(next)}">Siguiente: ${esc(next.tag)} </a>` : '<a class="text-link" href="#/practica">Volver a practicar </a>'}</div></article><aside class="reader-aside"><div class="panel"><h2>EN ESTA LECCIÓN</h2><a class="toc-link" href="#/leccion/${l.id}?apartado=guia">Guía de construcción</a>${l.sections.map((s, i) => `<a class="toc-link" href="#/leccion/${l.id}?apartado=${i}" data-scroll="apartado-${i}">${esc(s.title)}</a>`).join('')}<a class="toc-link" href="#/leccion/${l.id}?apartado=ejercicio" data-scroll="ejercicio">Ejercicio de clase</a><a class="toc-link" href="#/leccion/${l.id}?apartado=repaso" data-scroll="repaso">Autoevaluación</a></div><div class="panel"><h2>FUENTES DE LA LECCIÓN</h2>${(solutions.find(p=>p.id===l.guide.packageId)?.sources || []).map(sourceReference).join('')}${matchedSources(l).map(m => `<a class="source-link" href="${materialLink(m)}"> ${esc(m.name)} <span>(${esc(m.unit)})</span></a>`).join('')}<p class="source-notice">Explicación didáctica basada en estas fuentes. Consulta las imágenes y el formato exacto en el PDF.</p></div></aside></div>`;
}

function libraryPage() {
  const list = materials.filter(m => libraryFilter === 'all' || m.kind === libraryFilter);
  return heading('BIBLIOTECA DE RECURSOS', 'El material, tal como lo recibiste.', 'Todos los originales de UD2 y UD3-4. Consulta los enunciados, lee los fuentes de los proyectos y abre las lecciones de Microsoft Learn.') + `<div class="filter-row" aria-label="Filtrar materiales">${[['all', 'Todos · ' + materials.length], ['pdf', 'Documentos PDF · 9'], ['rar', 'Proyectos RAR · 5'], ['links', 'Listados Learn · 2']].map(([value, label]) => `<button class="filter-button${libraryFilter === value ? ' active' : ''}" data-filter="${value}" aria-pressed="${libraryFilter === value}">${label}</button>`).join('')}</div><div class="material-grid">${list.map(m => `<article class="material-card"><span class="file-icon ${m.kind}">${m.kind === 'links' ? 'LINK' : m.kind.toUpperCase()}</span><h2>${esc(m.name)}</h2><p>${esc(m.unit)} · ${m.kind === 'pdf' ? m.pages + ' páginas' : m.kind === 'rar' ? m.sources.length + ' fuentes consultables' : m.links.length + ' enlaces'} · ${formatSize(m.size)}</p><a class="text-link" href="${materialLink(m)}">${m.kind === 'rar' ? 'Explorar código' : m.kind === 'links' ? 'Consultar listado' : 'Leer documento'} </a></article>`).join('')}</div><div class="note-grid">${officialNotes.map(n => `<section class="panel"><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></section>`).join('')}</div>`;
}
function formatSize(bytes) { return bytes >= 1024 * 1024 ? (bytes / 1024 / 1024).toFixed(1) + ' MB' : Math.max(1, Math.round(bytes / 1024)) + ' KB'; }
function materialPage(path) {
  const m = materials.find(item => item.path === path); if (!m) return notFound();
  const related = lessons.filter(l => l.sources.includes(m.id));
  let body = '';
  if (m.kind === 'pdf') body = `<p class="source-notice">Páginas del documento original, con sus imágenes y formato. Puedes ampliar cada página abriéndola. El texto extraído se ofrece al final para facilitar la lectura y la búsqueda.</p><div class="pdf-pages">${m.images.map((src, i) => `<figure id="pagina-${i+1}"><figcaption>Página ${i + 1} de ${m.pages}</figcaption><a href="${esc(src)}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar página ${i + 1} de ${esc(m.name)}"><img src="${esc(src)}" alt="Página ${i + 1} del documento ${esc(m.name)}. Texto accesible disponible debajo de las páginas." loading="lazy" width="952" height="1347"></a></figure>`).join('')}</div><details class="document-disclosure"><summary>Leer texto extraído · ${m.pages} páginas</summary><div class="document-text">${esc(m.text)}</div></details>`;
  if (m.kind === 'rar') body = `<div class="callout"><h3>Fuentes originales, sin ejecutar</h3><p class="material-summary">Código extraído del RAR recibido. Se incluyen archivos C#, XAML y proyecto, omitiendo archivos de compilación, cachés y código de plataforma para facilitar el estudio. El archivo original conserva todo. Las soluciones pueden ser parciales o diferir del PDF: las lecciones señalan las discrepancias detectadas.</p></div><div class="source-files">${m.sources.map((s, i) => `<details data-source="${i}"><summary>${esc(s.name)}</summary><div class="source-code" data-source-code="${i}"></div></details>`).join('')}</div>`;
  if (m.kind === 'links') body = m.links.length ? `<section class="panel"><h2>Enlaces del listado original</h2><ul class="link-list">${m.links.map(url => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(learnTitle(url))} </a><br><small>${esc(url)}</small></li>`).join('')}</ul><p class="source-notice">Se conservan las direcciones y parámetros de versión del profesor; Microsoft puede redirigirlos o actualizar su contenido.</p></section>` : '<div class="empty">Este archivo original está vacío. Se conserva en la biblioteca para reflejar exactamente el material recibido. El listado con enlaces se encuentra en la otra unidad.</div>';
  return `<a class="back-link" href="#/biblioteca"> Volver a la biblioteca</a>` + heading(`${esc(m.unit)} · ORIGINAL ${m.kind.toUpperCase()}`, esc(materialName(m)), `${esc(m.name)} · ${formatSize(m.size)}${m.kind === 'pdf' ? ` · ${m.pages} páginas` : ''}`) + `<div class="doc-actions"><a class="button" href="${originalLink(m)}" target="_blank" rel="noopener noreferrer">Abrir original </a><a class="button secondary" href="${originalLink(m)}" download>Descargar archivo </a></div>${body}${related.length ? `<section class="result-group"><div class="section-heading"><h2>Estudiar este material</h2></div><div class="lesson-grid">${related.map(lessonCard).join('')}</div></section>` : ''}`;
}
function learnTitle(url) { const slug = new URL(url).pathname.split('/').filter(Boolean).pop(); return slug.replaceAll('-', ' ').replace('microsoft.maui.controls.', 'Control MAUI: '); }

function practicePage() {
  const practices = lessons.filter(l => l.tag.startsWith('Relación') || l.id.startsWith('learn-'));
  return heading('PRÁCTICAS DE CLASE', 'Del enunciado al «funciona».', 'Trabaja los ejercicios enviados por el profesor. Cada ficha resume sus requisitos y enlaza el original. También se incluyen los ejercicios de los módulos Learn enviados; las soluciones se identifican como didácticas.') + `<div class="exam-list">${practices.map(l => `<article class="exam-item"><span class="unit-code">${esc(l.unit)} · ${esc(l.tag.toUpperCase())}</span><h2>${esc(l.practice.title)}</h2><p>${esc(l.practice.prompt)}</p><div class="checklist">${checklist(l)}</div><div class="exam-links">${workshopLink(l.guide.packageId)}<a href="${lessonLink(l)}">Consultar explicación y guía </a><a href="#/solucion/${l.guide.packageId}">Solución completa y ZIP </a>${matchedSources(l).filter(m => m.kind === 'pdf').map(m => `<a href="${materialLink(m)}">Ver enunciado original </a>`).join('')}</div></article>`).join('')}</div><p class="source-notice">Las casillas se guardan en este navegador. Marca una lección completada desde su página para actualizar el avance global. No se atribuyen ponderaciones ni tiempos de examen al profesor.</p>`;
}
function assessmentPage() {
  return heading('AUTOEVALUACIÓN', 'Comprueba qué has entendido.', 'Preguntas de repaso derivadas de los requisitos de las relaciones. Puedes reintentar cada respuesta. No son preguntas oficiales del profesor.') + `<div class="quiz-summary" id="quiz-summary" aria-live="polite">${scoreText()}</div><div class="reader">${lessons.map((l, i) => `<section><h2>${esc(l.tag)} · ${esc(l.title)}</h2>${l.quizzes.map((q, j) => quizForm(l, q, j, i)).join('')}<a class="text-link" href="${lessonLink(l)}">Repasar la explicación </a></section>`).join('')}</div>`;
}
function scoreText() { const total = lessons.reduce((n, l) => n + l.quizzes.length, 0); const correct = [...quizResults.values()].filter(Boolean).length; return `${correct} correctas · ${quizResults.size} respondidas · ${total} preguntas de repaso. Respuestas guardadas en este navegador.`; }
function searchPage(query) {
  const term = query.trim();
  if (!term) return heading('BUSCADOR', '¿Qué quieres repasar?', 'Escribe en el buscador un tema, una relación o una parte del código.') + '<div class="empty">Puedes buscar, por ejemplo, «Grid», «matrícula», «contraseña» o «DynamicResource».</div>';
  const result = searchCourse(term, lessons, materials, referenceCards, solutions);
  return heading('BUSCADOR', `Resultados para «${esc(term)}»`, `${result.lessons.length} lecciones, ${result.materials.length} materiales, ${result.references.length} fichas y ${result.solutions.length} soluciones encontrados. Se busca también dentro del texto de los PDF y de los fuentes.`) + (result.lessons.length ? `<section class="result-group"><h2>Apuntes y prácticas</h2>${result.lessons.map(l => `<a class="result-item" href="${lessonLink(l)}"><small>${esc(l.unit)} · ${esc(l.tag)}</small><strong>${esc(l.title)}</strong><p>${esc(l.summary)}</p></a>`).join('')}</section>` : '') + (result.materials.length ? `<section class="result-group"><h2>Material original</h2>${result.materials.map(m => `<a class="result-item" href="${materialLink(m)}"><small>${esc(m.unit)} · ${m.kind.toUpperCase()}</small><strong>${esc(m.name)}</strong><p>Consultar el archivo original y su contenido.</p></a>`).join('')}</section>` : '') + (result.references.length ? `<section class="result-group"><h2>Consulta rápida</h2>${result.references.map(c=>`<a class="result-item" href="#/consulta?ficha=${c.id}"><strong>${esc(c.title)}</strong><p>${esc(c.text)}</p></a>`).join('')}</section>` : '') + (result.solutions.length ? `<section class="result-group"><h2>Soluciones completas</h2>${result.solutions.map(p=>`<a class="result-item" href="#/solucion/${p.id}"><strong>${esc(p.title)}</strong><p>${esc(p.notes)}</p></a>`).join('')}</section>` : '') + (!result.lessons.length && !result.materials.length && !result.references.length && !result.solutions.length ? '<div class="empty">No hay coincidencias. Prueba con otra palabra o con el número de relación.</div>' : '');
}
function notFound() { return heading('PÁGINA NO ENCONTRADA', 'Este apartado no existe.', 'Puedes volver al inicio para encontrar el material.') + '<a class="button" href="#/">Volver al inicio </a>'; }

function render({ focus = true } = {}) {
  let route;
  try { route = decodeURI(location.hash.slice(1) || '/'); } catch { route = '/404'; }
  const [pathname, query = ''] = route.split('?');
  const params = new URLSearchParams(query);
  const segment = pathname.split('/');
  let title = 'Vista general'; let content;
  switch (segment[1]) {
    case '': content = home(); break;
    case 'unidad': content = unitPage(segment[2]); title = segment[2] === 'UD2' ? 'Unidad 2' : 'Unidades 3 y 4'; break;
    case 'leccion': content = lessonPage(segment[2]); title = lessons.find(l => l.id === segment[2])?.tag || 'Lección'; break;
    case 'biblioteca': content = libraryPage(); title = 'Biblioteca'; break;
    case 'material': { let path; try { path = decodeURIComponent(segment.slice(2).join('/')); } catch { path = ''; } content = materialPage(path); title = 'Material original'; break; }
    case 'practica': content = practicePage(); title = 'Prácticas de clase'; break;
    case 'taller': content = workshopPage(segment[2], params.get('paso')); title = 'Taller en Visual Studio'; break;
    case 'autoevaluacion': content = assessmentPage(); title = 'Autoevaluación'; break;
    case 'consulta': content = referencePage(); title = 'Consulta rápida'; break;
    case 'soluciones': content = solutionsPage(); title = 'Soluciones y descargas'; break;
    case 'solucion': content = solutionsPage(segment[2]); title = 'Solución explicada'; break;
    case 'buscar': content = searchPage(params.get('q') || ''); title = 'Resultados de búsqueda'; break;
    default: content = notFound(); title = 'Página no encontrada';
  }
  main.innerHTML = content;
  main.querySelectorAll('.exam-links a:not(.button), .workshop-actions .text-link, .reader-bottom .text-link, .guide-links a:not(.button)').forEach(link=>{link.classList.add('button','secondary');link.classList.remove('text-link');});

  document.title = `${title} · Aula de Interfaces`;
  $('#crumb').textContent = title;
  renderNav(pathname);
  $('#sidebar').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); $('#menu-toggle').setAttribute('aria-label', 'Abrir navegación');
  if (segment[1] === 'buscar') $('#search').value = params.get('q') || '';
  else $('#search').value = '';
  if (focus) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  if(segment[1]==='taller') requestAnimationFrame(()=>document.querySelector('.workshop-reader')?.scrollIntoView({block:'start'}));
  if(segment[1]==='consulta' && params.has('ficha')) document.getElementById('ficha-'+params.get('ficha'))?.scrollIntoView();
  if(segment[1]==='material' && params.has('pagina')) document.getElementById('pagina-'+params.get('pagina'))?.scrollIntoView();
  if(segment[1]==='material' && params.has('archivo')) {
    let path;try{path=decodeURIComponent(segment.slice(2).join('/'));}catch{path='';}
    const index=materials.find(m=>m.path===path)?.sources?.findIndex(f=>f.name===params.get('archivo'));
    const details=index>=0 ? document.querySelector(`[data-source="${index}"]`) : null;
    if(details){details.open=true;details.scrollIntoView();}
  }
  if (params.has('apartado') && segment[1] === 'leccion') {
    const part = params.get('apartado'); const target = /^\d+$/.test(part) ? `apartado-${part}` : part;
    document.getElementById(target)?.scrollIntoView();
  }
}

$('#search-form').addEventListener('submit', event => { event.preventDefault(); const hash = '#/buscar?q=' + encodeURIComponent($('#search').value.trim()); if (location.hash === hash) render(); else location.hash = hash; });
$('.skip').addEventListener('click', event => { event.preventDefault(); main.focus(); main.scrollIntoView(); });
$('#menu-toggle').addEventListener('click', () => { const open = $('#sidebar').classList.toggle('open'); $('#menu-toggle').setAttribute('aria-expanded', String(open)); $('#menu-toggle').setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('#sidebar').classList.contains('open')) { $('#sidebar').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); $('#menu-toggle').setAttribute('aria-label', 'Abrir navegación'); $('#menu-toggle').focus(); } });
document.addEventListener('click', async event => {
  const copy = event.target.closest('.copy-button');
  if (copy) { try { await navigator.clipboard.writeText(copy.closest('.code-block').querySelector('code').textContent); copy.textContent = ' Copiado'; } catch { notify('No se pudo copiar automáticamente. Selecciona el código y cópialo manualmente.'); } return; }
  const complete = event.target.closest('[data-complete]');
  if (complete) {
    const id = complete.dataset.complete; if (!lessons.some(l => l.id === id)) return;
    completed.has(id) ? completed.delete(id) : completed.add(id);
    try { localStorage.setItem(key, JSON.stringify([...completed])); } catch { storageWarning = true; }
    render({ focus: false }); document.querySelector('[data-complete]')?.focus({ preventScroll: true });
    notify(storageWarning ? 'Progreso actualizado en esta sesión. El navegador no permite guardarlo de forma persistente.' : completed.has(id) ? 'Lección completada. Tu progreso está guardado en este navegador.' : 'Lección desmarcada. Progreso actualizado.');
  }
  const filter = event.target.closest('[data-filter]');
  if (filter) { libraryFilter = filter.dataset.filter; render({ focus: false }); document.querySelector(`[data-filter="${libraryFilter}"]`)?.focus({ preventScroll: true }); }
});
document.addEventListener('submit', event => {
  const form = event.target.closest('[data-quiz]'); if (!form) return;
  event.preventDefault(); const selected = new FormData(form).get('answer'); if (selected === null) return;
  const l = lessons.find(item => item.id === form.dataset.lesson); const q = l.quizzes[Number(form.dataset.index)]; const correct = Number(selected) === q.answer;
  quizResults.set(form.dataset.quiz, correct);
  study.answers[form.dataset.quiz] = Number(selected);
  saveStudy();
  const feedback = form.querySelector('.feedback'); feedback.classList.toggle('correct', correct);
  feedback.textContent = (correct ? ' Correcto. ' : 'Vuelve a intentarlo. ') + q.explanation;
  if ($('#quiz-summary')) $('#quiz-summary').textContent = scoreText();
});
main.addEventListener('toggle', event => {
  const details = event.target;
  if (details.matches('details[data-solution-file]') && details.open) {
    const placeholder = details.querySelector('.solution-code'); if (placeholder.children.length) return;
    const [id,index] = details.dataset.solutionFile.split('|');
    const file = solutions.find(p=>p.id===id)?.files[Number(index)];
    if(file?.code!==undefined) placeholder.innerHTML=codeBlock(file.code,file.path);
    return;
  }
  if (!details.matches('details[data-source]') || !details.open) return;
  const placeholder = details.querySelector('.source-code'); if (placeholder.children.length) return;
  let path; try { path = decodeURIComponent(location.hash.split('/material/')[1].split('?')[0]); } catch { return; }
  const material = materials.find(m => m.path === path); const source = material?.sources?.[Number(details.dataset.source)];
  if (source) placeholder.innerHTML = codeBlock(source.code, source.name);
}, true);
window.addEventListener('hashchange', () => render());
document.addEventListener('change', event => {
  const input = event.target.closest('[data-check]'); if (!input) return;
  input.checked ? study.checks.add(input.dataset.check) : study.checks.delete(input.dataset.check);
  saveStudy();
});
window.addEventListener('storage', event => {
  if (event.key === key || event.key === null) completed = readProgress(event.newValue, lessons);
  if (event.key === studyKey || event.key === null) { study = readStudy(event.newValue, lessons); restoreResults(); }
  if (event.key === 'aula-interfaces.tema' || event.key === null) {
    document.documentElement.dataset.theme = event.newValue === 'dark' ? 'dark' : event.newValue === 'light' ? 'light' : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    updateThemeButton();
  }
  if (event.key === key || event.key === studyKey || event.key === null) render({ focus: false });
});

try {
  const responses = await Promise.all(['data/materials.json','data/solutions.json'].map(url=>fetch(url)));
  if(responses.some(r=>!r.ok)) throw new Error('Biblioteca no disponible');
  [materials,solutions] = await Promise.all(responses.map(r=>r.json())); render({ focus: false });
  if (storageWarning) notify('El almacenamiento local no está disponible: el progreso durará solo esta sesión.');
} catch (error) {
  main.innerHTML = heading('NO SE PUDO CARGAR', 'La biblioteca no está disponible.', 'Abre la web desde el servidor local con npm run dev. Si ya lo estás usando, recarga la página.') + '<button class="button" id="retry">Volver a cargar</button>';
  $('#retry').addEventListener('click', () => location.reload());
}
