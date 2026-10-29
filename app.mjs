import { createAcademy } from './academy.mjs';
import { rubricGroups, rubricSource, readRubricChecks } from './data/rubric.mjs';
import { lessons, officialNotes, referenceCards } from './data/course.mjs';
import { normalize, readProgress, readStudy, searchCourse, readWorkshopPositions } from './lib.mjs';
import { workshops, workshopSteps, workshopCode } from './data/workshops.mjs';
import { explainLine } from './data/study-explanations.mjs';
import { workshopStudy, isImportantCode } from './data/workshop-study.mjs';
import { referenceCategories, practiceGroups } from './data/interface.mjs';

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
const rubricKey = 'aula-interfaces.rubrica.v1';
let rubricChecks = new Set();
try { rubricChecks = readRubricChecks(localStorage.getItem(rubricKey)); } catch { storageWarning = true; }
const positionKey = 'aula-interfaces.ultimo-paso.v1';
let lastSteps = {};
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
  return workshops.some(w=>w.id===id) ? `<span class="workshop-entry"><a class="button" href="#/taller/${id}">${lastSteps[id]?'Continuar la relación en Visual Studio':'Hacer la relación paso a paso en Visual Studio'}</a><a class="button secondary" href="#/comparar/${id}">Comparar variantes</a></span>` : '';
}
function comparisonPage(id) {
  const info=workshopStudy[id],pkg=solutions.find(p=>p.id===id);
  if(!info || !pkg)return notFound();
  return heading('COMPARAR VARIANTES',esc(pkg.title),'Qué cambia, qué se conserva y qué archivo debes comparar. Las diferencias corresponden a las soluciones didácticas de los materiales recibidos.')+`<div class="workshop-actions"><a class="button" href="#/taller/${id}">Volver al taller${lastSteps[id]?' donde lo dejé':''}</a><a class="button secondary" href="#/practica">Todas las prácticas</a></div><section class="panel"><h2>La diferencia importante</h2><p>${esc(info.focus)}</p><div class="table-scroll"><table class="study-table"><thead><tr><th>Variante</th><th>Qué cambia</th><th>Qué se conserva</th></tr></thead><tbody>${info.rows.map(([name,change,same])=>`<tr><th scope="row">${esc(name)}</th><td>${esc(change)}</td><td>${esc(same)}</td></tr>`).join('')}</tbody></table></div><aside class="callout"><h3>Error que debes evitar</h3><p>${esc(info.mistake)}</p></aside></section><h2>Compara los archivos</h2><p>Abre los que quieras contrastar. Puedes mantener varios abiertos a la vez; en escritorio aparecen uno junto al otro.</p><div class="comparison-grid">${info.rows.map(([name,change,,path])=>`<article class="panel"><h3>${esc(name)}</h3><p>${esc(change)}</p><p class="file-location"><code>${esc(path)}</code></p><details data-solution-file="${id}|${pkg.files.findIndex(f=>f.path===path)}"><summary>Ver código de esta variante</summary><div class="solution-code"></div></details></article>`).join('')}</div><section class="panel"><h2>Fuente y convenciones</h2><p>${esc(pkg.notes)}</p>${pkg.sources.map(sourceReference).join('')}</section>`;
}
function workshopFile(block,pkg) {
  const raw=workshopCode(block,pkg), display=block.display || raw;
  const notes=display.split('\n').map((line,index)=>({line:index+1,text:explainLine(line)})).filter(n=>n.text);
  const index=pkg.files.findIndex(f=>f.path===block.path);
  return `<section class="workshop-file"><h3>${esc(block.title || 'Archivo que debes editar')}</h3>${block.reason?isImportantCode(raw)?`<p class="important-reason">${esc(block.reason)}</p>`:`<details class="syntax-note"><summary>Entender esta declaración</summary><p>${esc(block.reason)}</p></details>`:''}<p class="file-location"><code>${esc(block.path)}</code></p><p class="source-notice">Fragmento, no archivo completo. ${esc(block.context || 'Escríbelo dentro de la clase o contenedor indicado.')} Línea ${block.line || 1} de la referencia.</p>${codeBlock(display,block.path)}<details class="line-reading"><summary>Consultar explicación línea a línea</summary><p>La numeración corresponde al fragmento mostrado; la ubicación en el archivo aparece arriba.</p><ol>${notes.map(n=>`<li><strong>Línea ${n.line}</strong><p>${esc(n.text)}</p></li>`).join('')}</ol><section class="fragment-context"><h3>Por qué va en este archivo</h3><p>${esc(block.explanation)}</p></section></details><details class="complete-file" data-solution-file="${pkg.id}|${index}"><summary>Consultar archivo completo para situar el fragmento</summary><div class="solution-code"></div></details></section>`;
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
  const resuming=!stepId && !!lastSteps[id];
  const requested=stepId || lastSteps[id];
  const index=requested ? steps.findIndex(s=>s.id===requested || s.aliases?.includes(requested)) : 0;
  if(index<0) return notFound();
  const current=steps[index];
  lastSteps[id]=current.id;
  try { localStorage.setItem(positionKey,JSON.stringify(lastSteps)); }
  catch { if(!storageWarning)notify('El último paso se conservará solo durante esta sesión: el navegador bloquea el almacenamiento.');storageWarning=true; }
  const link=i=>`#/taller/${id}?paso=${steps[i].id}`;
  return `<a class="back-link" href="#/practica">Volver a las prácticas</a>`+heading('TALLER EN VISUAL STUDIO',esc(pkg.title),'Trabaja en Visual Studio con la web al lado. Lee el paso, escribe el código y comprueba el resultado antes de continuar.')+
    `<p class="source-notice">Elaboración didáctica basada en el material recibido. El ZIP contiene la solución final: úsalo como base y referencia para reconstruir los archivos, no como sustituto de la práctica.</p><p class="resume-status" role="status">${resuming?`Retomas el paso ${index+1}: ${esc(current.title)}.`:'Tu posición se guarda automáticamente al visitar cada paso.'} Es independiente de las tareas completadas y se conserva en este navegador.</p><div class="workshop-actions"><a class="button secondary" href="#/comparar/${id}">Comparar variantes</a><a class="button secondary" href="#/taller/${id}?paso=preparar">Ir al primer paso</a><a class="button secondary" href="${pkg.download}" download>Descargar base y solución de apoyo</a><a class="text-link" href="#/solucion/${id}">Consultar solución completa</a><a class="text-link" href="#/leccion/${workshop.lesson}">Repasar conceptos y autoevaluación</a></div>`+
    `<div class="reader-layout workshop-layout"><article class="reader workshop-reader"><p class="unit-code">PASO ${index+1} DE ${steps.length}</p><h2>${esc(current.title)}</h2><section class="study-stage"><h3>1. Qué hacer en Visual Studio</h3><p>${esc(current.action)}</p>${current.subtasks?.length?`<details class="step-preparation"><summary>Ver las acciones de este paso</summary><ol>${current.subtasks.map(task=>`<li><strong>${esc(task.title)}</strong><p>${esc(task.action)}</p><p>${esc(task.explanation)}</p></li>`).join('')}</ol></details>`:''}</section><section class="study-stage"><h3>2. Entiende el motivo</h3>${current.explanation.split(/(?<=[.?!])\s+(?=[A-ZÁÉÍÓÚ])/).map(text=>`<p>${esc(text)}</p>`).join('')}</section><section class="study-stage"><h3>3. Código y explicación</h3>${current.files.length && current.id===current.group && !['preparar','arranque'].includes(current.group)?`<aside class="important-code"><h3>Lo importante de esta lógica</h3><p>${esc(workshopStudy[id].focus)}</p><p><strong>Evita este error:</strong> ${esc(workshopStudy[id].mistake)}</p></aside>`:''}${current.files.length?current.files.map(block=>workshopFile(block,pkg)).join(''):'<p>Este paso es de preparación o comprobación: no requiere añadir código.</p>'}</section><aside class="callout"><h3>Comprueba antes de continuar</h3><p>${esc(current.check)}</p></aside>${current.id==='comprobar'?`<div class="table-scroll"><table class="study-table"><thead><tr><th>Entrada o acción</th><th>Resultado esperado</th></tr></thead><tbody>${pkg.cases.map(([a,b])=>`<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</tbody></table></div><h3>Convenciones y límites</h3><p>${esc(pkg.notes)}</p><h3>Fuentes</h3>${pkg.sources.map(sourceReference).join('')}`:''}<nav class="workshop-pagination" aria-label="Cambiar de paso">${index?`<a class="button secondary" href="${link(index-1)}">Paso anterior</a>`:''}${index<steps.length-1?`<a class="button" href="${link(index+1)}">Siguiente paso</a>`:`<a class="button" href="#/leccion/${workshop.lesson}?apartado=comprobacion">Revisar la relación y guardar mi progreso</a>`}</nav><p class="source-notice">El paso mostrado orienta la navegación; no acredita que hayas completado la práctica. Tu progreso sigue guardándose desde las casillas y la lección.</p></article><aside class="reader-aside"><nav class="panel workshop-index" data-workshop="${id}" aria-label="Pasos de la relación" tabindex="0"><h2>RECORRIDO COMPLETO</h2>${workshopIndex(steps,index,id)}</nav></aside></div>`;
}
function sectionJump(items) {
  return `<nav class="section-jump" aria-label="Apartados de esta página">${items.map(item=>`<button class="button secondary" data-jump="${item.id}" type="button">${esc(item.title)}</button>`).join('')}</nav>`;
}
function rubricPage() {
  return heading('EXAMEN · UNIDADES 2, 3 Y 4', 'Repaso con la rúbrica del profesor.', 'Comprueba lo que sabes construir, explicar y verificar, criterio por criterio.') +
    `<section class="panel"><h2>Cómo usar esta guía</h2><p>La fuente es la rúbrica de la práctica 1: RA1, RA3 y RA4 son resultados de aprendizaje, no números de unidad. La usamos para preparar las unidades 2, 3 y 4; no confirma el enunciado, las preguntas ni la ponderación del examen. Cada RA suma 100% por separado; no se conoce su peso conjunto. Los niveles publicados son 5, 4, 3, 2 y 0, con celdas vacías: no inventamos descriptores ni calculamos una nota.</p><a class="button" href="${rubricSource}" download>Descargar rúbrica original (PDF)</a><p>Los criterios y porcentajes proceden del PDF. Las explicaciones, pruebas y recomendaciones son una guía didáctica. Marca un criterio después de realizar su comprobación sin copiar la solución. Las casillas se guardan en este navegador, independientemente del progreso anterior, y no acreditan una calificación.</p><p id="rubric-progress" role="status">${rubricChecks.size} de 16 criterios comprobados.</p></section>` +
    rubricGroups.map(group=>`<section class="content-section"><h2>${esc(group.id)} · ${esc(group.title)}</h2><p>Pesos dentro de ${esc(group.id)}: 100%. Revisa todos los criterios, también los de menor peso.</p>${group.criteria.map(c=>`<article class="panel" id="${c.id}"><h3>CE-${esc(c.ce)} · ${esc(c.title)} · ${c.weight}%</h3><p>${esc(c.explanation)}</p><h4>Comprobación práctica</h4><p>${esc(c.evidence)}</p><p><strong>Fallo que debes evitar:</strong> ${esc(c.pitfall)}</p><div class="academy-actions"><a class="button secondary" href="#/reto/reto-${c.id.toLowerCase()}">Practicar este criterio</a><a class="button secondary" href="#/diagnostico?ra=${group.id}">Diagnóstico de ${group.id}</a></div><div class="exam-links">${c.lessons.map(id=>`<a href="#/leccion/${id}">${esc(lessons.find(l=>l.id===id).title)}</a>`).join('')}</div><label><input type="checkbox" data-rubric="${c.id}"${rubricChecks.has(c.id)?' checked':''}> He realizado y puedo explicar esta comprobación sin copiar.</label></article>`).join('')}</section>`).join('') +
    `<section class="panel"><h2>Orden de repaso para no dejar huecos</h2><ol><li>Fundamentos: proyecto, XAML/C#, layouts y propiedades. Resuelve R1–R3 y trata entradas y operaciones erróneas.</li><li>Navegación: R4 y Learn multipágina. Abre todas las páginas desde el menú flotante.</li><li>Componentes: R5–R6 y R8. Comprueba biblioteca, API pública, valores iniciales, eventos, documentación y consumo real.</li><li>Aspecto: R7 y Learn recursos. Explica extensiones, ámbito, recursos y estilos; contrasta distribución y legibilidad con el modelo.</li><li>Integra: compila, ejecuta casos válidos y límites, recupera después de un error y explica el flujo completo desde la entrada hasta el resultado.</li></ol><p>Elige primero los criterios pendientes de mayor peso de cada RA: RA1 eventos (20%); RA3 eventos (30%) y API pública (25%); RA4 aspecto (40%). Esto organiza el tiempo, no elimina el resto.</p><h2>Preguntas para explicar en voz alta</h2><details><summary>¿Cómo viaja un cambio desde un View compuesto hasta su página consumidora?</summary><p>El evento interno recoge la entrada; se convierte y valida; se actualiza la propiedad pública y el estado visual; se emite el evento público con la información acordada; la página suscrita actualiza su respuesta. Si el dato falla, informa y conserva un estado coherente. No expongas hijos privados para que la página haga todo el trabajo.</p></details><details><summary>¿Qué diferencia una propiedad pública de una BindableProperty?</summary><p>Una propiedad C# permite get/set y puede validar o actualizar controles. BindableProperty integra el valor con el sistema de propiedades MAUI para bindings, estilos y notificación de cambios; su envoltorio usa GetValue/SetValue y puede definir un valor por defecto y propertyChanged. No toda propiedad pública tiene que ser enlazable: justifica la elección según su uso.</p></details><details><summary>¿Qué debe contener la documentación de un componente?</summary><p>Propósito y clase base; dependencias y namespace; constructores; propiedades con tipo, valor inicial y restricciones; métodos; eventos con momento de emisión y datos; errores y un ejemplo de integración. Demuestra una suscripción y una lectura/escritura desde el proyecto consumidor.</p></details><details><summary>¿Qué demuestra que la biblioteca está integrada?</summary><p>El proyecto de biblioteca compila y genera su DLL; el consumidor tiene la referencia correcta; el namespace y assembly de XAML coinciden; una página instancia el componente y usa realmente sus propiedades y eventos. Una captura o una DLL aislada no demuestra el flujo completo.</p></details><h2>Última pasada antes del examen</h2><p>Reconstruye una práctica del profesor desde una copia vacía y sin mirar la solución. Contrasta cada apartado del enunciado con la rúbrica; prueba entradas normales, vacías, inválidas y límites; comprueba recuperación, todas las páginas y todos los componentes. Anota qué archivo demuestra cada criterio. No hay una práctica nueva ni una nota estimada en esta guía.</p></section>`;
}

function referenceExplanation(card) {
  return `<div class="reference-explanation">${paragraphs(card.explanation)}<h4>Propiedades y piezas importantes</h4><div class="table-scroll reference-properties" tabindex="0" role="region" aria-label="Propiedades de ${esc(card.title)}"><table class="study-table"><caption>Qué configurar y para qué</caption><thead><tr><th>Propiedad o concepto</th><th>Uso</th></tr></thead><tbody>${card.properties.map(p=>`<tr><th scope="row"><code>${esc(p.name)}</code></th><td>${esc(p.use)}</td></tr>`).join('')}</tbody></table></div><h4>Ejemplos de código paso a paso</h4><p class="source-notice">Ejemplos didácticos. Cada bloque indica dónde se integra y qué necesita; un fragmento no sustituye el proyecto completo ni añade requisitos al enunciado.</p>${card.examples.map((example,i)=>`<section class="reference-example"><h5>${i+1}. ${esc(example.title)}</h5><p>${esc(example.context)}</p>${codeBlock(example.code,example.filename)}<h6>Cómo funciona</h6><ol>${example.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol><p class="example-result"><strong>Resultado esperado:</strong> ${esc(example.result)}</p></section>`).join('')}<aside class="callout"><h4>Errores que conviene evitar</h4><ul>${card.pitfalls.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></aside><h4>Compruébalo tú</h4><p>${esc(card.check)}</p></div>`;
}
function lessonReferences(lesson) {
  const extra={entorno:['xaml','errores'],'learn-primera-app':['controles','eventos','modelo'],'learn-layouts':['boxview','espacios','stack','grid'],'learn-xaml':['xaml','extensiones','plataforma'],'learn-multipagina':['shell','image']};
  const cards=referenceCards.filter(c=>c.lesson===lesson.id || c.practice===lesson.id || extra[lesson.id]?.includes(c.id));
  return cards.length?`<section class="lesson-concepts"><h2>Conceptos explicados con código</h2><p>Abre el bloque que necesites: explicación, propiedades, ejemplos y comprobación. Los archivos indicados son ejemplos de estudio, salvo referencia expresa al paquete de la práctica.</p>${cards.map(c=>`<details class="concept-detail"><summary>${esc(c.title)} · explicación y ejemplos</summary>${referenceExplanation(c)}<a class="button secondary" href="#/consulta?ficha=${c.id}">Abrir ficha de consulta</a></details>`).join('')}</section>`:'';
}
function referencePage() {
  return heading('CONSULTA Y EJEMPLOS','Entiende cada pieza y úsala en código.','19 bloques ampliados. Abre cada uno para estudiar sus propiedades, ejemplos de XAML y C# cuando corresponda, errores frecuentes y una comprobación práctica.')+sectionJump(referenceCategories)+referenceCategories.map(category=>`<section class="content-section" id="${category.id}"><header class="section-heading"><div><h2>${esc(category.title)}</h2><p>${esc(category.description)}</p></div></header><nav class="reference-jump" aria-label="Bloques de ${esc(category.title)}">${referenceCards.filter(c=>category.cards.includes(c.id)).map(c=>`<a href="#/consulta?ficha=${c.id}">${esc(c.title)}</a>`).join('')}</nav><div class="reference-list">${referenceCards.filter(c=>category.cards.includes(c.id)).map(c=>`<article class="panel reference-card" id="ficha-${c.id}"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><details class="concept-detail"><summary>Estudiar explicación, propiedades y ejemplos de código</summary>${referenceExplanation(c)}</details><div class="exam-links"><a href="#/leccion/${c.lesson}">Entender el concepto</a><a href="#/leccion/${c.practice}">Ver su aplicación</a></div>${sourceReference({path:c.source})}</article>`).join('')}</div></section>`).join('');
}

function solutionsPage(id) {
  if(id) { const pkg=solutions.find(p=>p.id===id);if(!pkg)return notFound();return `<a class="back-link" href="#/soluciones"> Todas las soluciones</a>`+heading('PROYECTO DIDÁCTICO',esc(pkg.title),'Archivos completos, pasos de lectura y tabla de comprobación basados en el material recibido.')+`<div class="workshop-actions">${workshopLink(pkg.id)}<a class="button" href="${pkg.download}" download>Descargar ZIP · ${formatSize(pkg.size)} </a></div>${solutionPanel(id)}`; }
  const sections=[{id:'soluciones-relaciones',title:'Soluciones de las relaciones',prefix:'relacion-'},{id:'soluciones-learn',title:'Proyectos de Microsoft Learn',prefix:'learn-'}];
  return heading('SOLUCIONES Y DESCARGAS','Consulta o descarga el proyecto completo.','Ocho relaciones y cinco módulos Learn, con todas sus variantes y dependencias. Para construir paso a paso, entra en el taller de la relación.')+sectionJump(sections)+sections.map(section=>`<section class="content-section" id="${section.id}"><header class="section-heading"><h2>${section.title}</h2></header><div class="lesson-grid">${solutions.filter(p=>p.id.startsWith(section.prefix)).map(p=>`<article class="panel"><h3>${esc(p.title)}</h3><p>${p.builds.length} proyectos · ${formatSize(p.size)}</p><div class="exam-links"><a class="button" href="#/solucion/${p.id}">Consultar código y explicación</a><a href="${p.download}" download>Descargar ZIP</a>${p.id.startsWith('relacion-')?`<a href="#/taller/${p.id}">Ir al taller guiado</a>`:''}</div></article>`).join('')}</div></section>`).join('');
}

function renderNav(route) {
  const groups = {
    '/temario':['/temario','/unidad/','/leccion/','/consulta'],
    '/entrenar':['/entrenar','/practica','/taller/','/comparar/','/autoevaluacion','/diagnostico','/reto/','/codigo/','/casos/'],
    '/materiales':['/materiales','/biblioteca','/material/','/soluciones','/solucion/'],
    '/':['/','/cuaderno','/progreso'], '/rubrica':['/rubrica']
  };
  const active = target => groups[target].some(prefix=>prefix.endsWith('/') && prefix!=='/'?route.startsWith(prefix):route===prefix);
  const navLink = (target,name,symbol) => `<a class="nav-link${active(target)?' active':''}" href="#${target}"${active(target)?' aria-current="page"':''}>${symbol}<span>${name}</span></a>`;
  $('#nav').innerHTML = navLink('/','Mi estudio',icon('home')) + navLink('/temario','Temario',icon('book')) + navLink('/entrenar','Practicar',icon('practice')) + navLink('/rubrica','Rúbrica',icon('check')) + navLink('/materiales','Materiales',icon('files'));
  const p = progress();
  $('#sidebar-progress').innerHTML = `<div class="progress-top"><span>Lecciones completadas</span><strong>${p.percent}%</strong></div>${track(p.percent, 'Lecciones completadas')}<span class="muted">${p.count} de ${p.total} lecciones completadas</span>`;
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
  return `<a class="back-link" href="#/unidad/${l.unit}"> Volver a ${l.unit === 'UD2' ? 'Unidad 2' : 'Unidades 3 y 4'}</a>` + heading(esc(l.tag.toUpperCase()), esc(l.title), esc(l.summary)) + academy.lessonActivities(id) + `<section class="panel"><h2>Qué debes demostrar en la rúbrica</h2><div class="exam-links">${rubricGroups.flatMap(g=>g.criteria).filter(c=>c.lessons.includes(l.id)).map(c=>`<a href="#/rubrica?criterio=${c.id}">${c.id} · ${esc(c.title)} (${c.weight}% de su RA)</a>`).join('')}</div></section>` +
    `<div class="reader-layout"><article class="reader"><div class="objectives"><h2>Al terminar podrás…</h2><ul>${l.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>${workshopLink(l.guide.packageId)}${guideSection(l)}${lessonReferences(l)}${l.sections.map((s, i) => `<section id="apartado-${i}"><h2>${esc(s.title)}</h2>${paragraphs(s.paragraphs)}${s.code ? codeBlock(s.code, s.filename) : ''}</section>`).join('')}<aside class="callout"><h3>Donde conviene fijarse</h3><ul>${l.pitfalls.map(p => `<li>${esc(p)}</li>`).join('')}</ul></aside><section class="exercise" id="ejercicio"><span class="unit-code">DEL MATERIAL DE CLASE</span><h3>${esc(l.practice.title)}</h3><p>${esc(l.practice.prompt)}</p><ol>${l.practice.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol><details><summary>Ver guía de resolución</summary><p>${esc(l.practice.solution)}</p></details></section>${solutionPanel(l.guide.packageId)}<section id="repaso"><h2>¿Lo has entendido?</h2><p>Comprueba los requisitos del enunciado. Estas preguntas son apoyo de estudio, no preguntas oficiales de examen.</p>${l.quizzes.map((q, i) => quizForm(l, q, i, index)).join('')}</section><section class="checklist" id="comprobacion"><h2>Antes de darlo por terminado</h2>${checklist(l)}<p class="source-notice">Las casillas se guardan en este navegador y se comparten con la página de prácticas. El botón «Marcar como completada» guarda el avance global de la lección.</p></section><div class="reader-bottom"><button class="button" data-complete="${l.id}">${completed.has(l.id) ? ' Completada · desmarcar' : 'Marcar como completada'}</button>${next ? `<a class="text-link" href="${lessonLink(next)}">Siguiente: ${esc(next.tag)} </a>` : '<a class="text-link" href="#/practica">Volver a practicar </a>'}</div></article><aside class="reader-aside"><div class="panel"><h2>EN ESTA LECCIÓN</h2><a class="toc-link" href="#/leccion/${l.id}?apartado=guia">Guía de construcción</a>${l.sections.map((s, i) => `<a class="toc-link" href="#/leccion/${l.id}?apartado=${i}" data-scroll="apartado-${i}">${esc(s.title)}</a>`).join('')}<a class="toc-link" href="#/leccion/${l.id}?apartado=ejercicio" data-scroll="ejercicio">Ejercicio de clase</a><a class="toc-link" href="#/leccion/${l.id}?apartado=repaso" data-scroll="repaso">Autoevaluación</a></div><div class="panel"><h2>FUENTES DE LA LECCIÓN</h2>${(solutions.find(p=>p.id===l.guide.packageId)?.sources || []).map(sourceReference).join('')}${matchedSources(l).map(m => `<a class="source-link" href="${materialLink(m)}"> ${esc(m.name)} <span>(${esc(m.unit)})</span></a>`).join('')}<p class="source-notice">Explicación didáctica basada en estas fuentes. Consulta las imágenes y el formato exacto en el PDF.</p></div></aside></div>`;
}

function libraryPage() {
  const list = materials.filter(m => libraryFilter === 'all' || m.kind === libraryFilter);
  return heading('MATERIAL DEL PROFESOR', 'Los originales, sin modificar.', 'Todos los originales de UD2 y UD3-4. Consulta los enunciados, lee los fuentes de los proyectos y abre las lecciones de Microsoft Learn.') + `<div class="filter-row" aria-label="Filtrar materiales">${[['all', 'Todos · ' + materials.length], ['pdf', 'Documentos PDF · 9'], ['rar', 'Proyectos RAR · 5'], ['links', 'Listados Learn · 2']].map(([value, label]) => `<button class="filter-button${libraryFilter === value ? ' active' : ''}" data-filter="${value}" aria-pressed="${libraryFilter === value}">${label}</button>`).join('')}</div><div class="material-grid">${list.map(m => `<article class="material-card"><span class="file-icon ${m.kind}">${m.kind === 'links' ? 'LINK' : m.kind.toUpperCase()}</span><h2>${esc(m.name)}</h2><p>${esc(m.unit)} · ${m.kind === 'pdf' ? m.pages + ' páginas' : m.kind === 'rar' ? m.sources.length + ' fuentes consultables' : m.links.length + ' enlaces'} · ${formatSize(m.size)}</p><a class="text-link" href="${materialLink(m)}">${m.kind === 'rar' ? 'Explorar código' : m.kind === 'links' ? 'Consultar listado' : 'Leer documento'} </a></article>`).join('')}</div><div class="note-grid">${officialNotes.map(n => `<section class="panel"><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></section>`).join('')}</div>`;
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
  const groups=practiceGroups(lessons);
  const sections=[{id:'relaciones',title:'Relaciones de clase',prefix:'relacion-',description:'Ocho relaciones para resolver en Visual Studio. Continúa tu taller o consulta los conceptos antes de empezar.'},{id:'modulos-learn',title:'Módulos Microsoft Learn',prefix:'learn-',description:'Los cinco módulos enlazados por el profesor, con sus ejercicios y archivos de apoyo.'}];
  return `<nav class="academy-tabs" aria-label="Preparación práctica"><a class="button" href="#/entrenar">Retos, código y casos de prueba</a><a class="button secondary" href="#/diagnostico">Diagnóstico por criterio</a><a class="button secondary" href="#/autoevaluacion">Autoevaluación por lección</a></nav>`+heading('PRÁCTICAS DE CLASE','Elige una práctica y ponte a construir.','Cada relación reúne sus apartados, comprobaciones y materiales. La posición del taller se guarda al visitarlo; las casillas se marcan cuando tú compruebas el resultado.')+sectionJump(sections)+sections.map(section=>`<section class="content-section" id="${section.id}"><header class="section-heading"><div><h2>${section.title}</h2><p>${section.description}</p></div></header><div class="exam-list">${groups.filter(g=>g.id.startsWith(section.prefix)).map(group=>{
    const pkg=solutions.find(p=>p.id===group.id);
    const saved=lastSteps[group.id] && workshopSteps(workshops.find(w=>w.id===group.id),pkg).find(s=>s.id===lastSteps[group.id]);
    const pdfs=[...new Map(group.lessons.flatMap(matchedSources).filter(m=>m.kind==='pdf').map(m=>[m.path,m])).values()];
    return `<article class="exam-item" id="practica-${group.id}"><span class="unit-code">${esc(group.lessons[0].unit)} · ${group.id.startsWith('relacion-')?'RELACIÓN DE CLASE':'MÓDULO LEARN'}</span><h3>${esc(pkg.title)}</h3>${saved?`<p class="resume-label"><strong>Posición guardada:</strong> ${esc(saved.title)}</p>`:''}${group.lessons.map(l=>`<section class="practice-part">${group.lessons.length>1?`<h4>${esc(l.practice.title)}</h4>`:''}<p>${esc(l.practice.prompt)}</p><details class="practice-checks"><summary>Comprobaciones${group.lessons.length>1?' de este apartado':''}</summary><div class="checklist">${checklist(l)}</div></details></section>`).join('')}<div class="exam-links">${workshopLink(group.id)}${group.lessons.map(l=>`<a href="${lessonLink(l)}">${group.lessons.length>1?'Conceptos: '+esc(l.title):'Estudiar los conceptos'}</a>`).join('')}<a href="#/solucion/${group.id}">Solución y archivos ZIP</a>${pdfs.map(m=>`<a href="${materialLink(m)}">Enunciado del profesor</a>`).join('')}</div></article>`;
  }).join('')}</div></section>`).join('')+`<p class="source-notice">Tu avance es propio de este navegador. Completar una lección y visitar un paso son acciones distintas.</p>`;
}
function assessmentPage(selected='all') {
  const chosen=lessons.some(l=>l.id===selected)?selected:'all';
  const list=chosen==='all'?lessons:lessons.filter(l=>l.id===chosen);
  return heading('AUTOEVALUACIÓN','Repasa una lección cada vez.','Elige un tema y despliega sus preguntas. Puedes reintentar y consultar la explicación; las preguntas son de apoyo, no oficiales del examen.')+`<div class="assessment-controls panel"><label for="assessment-lesson">Qué quieres repasar</label><select id="assessment-lesson"><option value="all"${chosen==='all'?' selected':''}>Todas las lecciones, agrupadas</option>${lessons.map(l=>`<option value="${l.id}"${chosen===l.id?' selected':''}>${esc(l.unit)} · ${esc(l.title)}</option>`).join('')}</select></div><p class="source-notice">El resumen recoge todas tus respuestas guardadas, aunque estés viendo una sola lección.</p><div class="quiz-summary" id="quiz-summary" aria-live="polite">${scoreText()}</div><div class="assessment-list">${list.map((l,i)=>`<details class="assessment-group"${i===0?' open':''}><summary>${esc(l.title)} <span>${l.quizzes.length} preguntas</span></summary><div class="reader">${l.quizzes.map((q,j)=>quizForm(l,q,j,lessons.indexOf(l))).join('')}<a class="button secondary" href="${lessonLink(l)}">Volver a la explicación</a></div></details>`).join('')}</div>`;
}
function scoreText() { const total = lessons.reduce((n, l) => n + l.quizzes.length, 0); const correct = [...quizResults.values()].filter(Boolean).length; return `${correct} correctas · ${quizResults.size} respondidas · ${total} preguntas de repaso. Respuestas guardadas en este navegador.`; }
function searchPage(query) {
  const term = query.trim();
  if (!term) return heading('BUSCADOR', '¿Qué quieres repasar?', 'Escribe en el buscador un tema, una relación o una parte del código.') + '<div class="empty">Puedes buscar, por ejemplo, «Grid», «matrícula», «contraseña» o «DynamicResource».</div>';
  const result = searchCourse(term, lessons, materials, referenceCards, solutions);
  const rubricMatches = rubricGroups.flatMap(g=>g.criteria).filter(c=>normalize(term).trim().split(/\s+/).filter(Boolean).every(t=>normalize(JSON.stringify(c)).includes(t)));
  return heading('BUSCADOR', `Resultados para «${esc(term)}»`, `${result.lessons.length} lecciones, ${result.materials.length} materiales, ${result.references.length} fichas y ${result.solutions.length} soluciones encontrados. Se busca también dentro del texto de los PDF y de los fuentes.`) + academy.search(term) + (rubricMatches.length ? `<section class="panel"><h2>Criterios de la rúbrica</h2>${rubricMatches.map(c=>`<p><a href="#/rubrica?criterio=${c.id}">${c.id} · ${esc(c.title)}</a></p>`).join('')}</section>` : '') + (result.lessons.length ? `<section class="result-group"><h2>Apuntes y prácticas</h2>${result.lessons.map(l => `<a class="result-item" href="${lessonLink(l)}"><small>${esc(l.unit)} · ${esc(l.tag)}</small><strong>${esc(l.title)}</strong><p>${esc(l.summary)}</p></a>`).join('')}</section>` : '') + (result.materials.length ? `<section class="result-group"><h2>Material original</h2>${result.materials.map(m => `<a class="result-item" href="${materialLink(m)}"><small>${esc(m.unit)} · ${m.kind.toUpperCase()}</small><strong>${esc(m.name)}</strong><p>Consultar el archivo original y su contenido.</p></a>`).join('')}</section>` : '') + (result.references.length ? `<section class="result-group"><h2>Consulta rápida</h2>${result.references.map(c=>`<a class="result-item" href="#/consulta?ficha=${c.id}"><strong>${esc(c.title)}</strong><p>${esc(c.text)}</p></a>`).join('')}</section>` : '') + (result.solutions.length ? `<section class="result-group"><h2>Soluciones completas</h2>${result.solutions.map(p=>`<a class="result-item" href="#/solucion/${p.id}"><strong>${esc(p.title)}</strong><p>${esc(p.notes)}</p></a>`).join('')}</section>` : '') + (!academy.search(term) && !rubricMatches.length && !result.lessons.length && !result.materials.length && !result.references.length && !result.solutions.length ? '<div class="empty">No hay coincidencias. Prueba con otra palabra o con el número de relación.</div>' : '');
}
function notFound() { return heading('PÁGINA NO ENCONTRADA', 'Este apartado no existe.', 'Puedes volver al inicio para encontrar el material.') + '<a class="button" href="#/">Volver al inicio </a>'; }

function pageTrail(segment,title) {
  if(!segment[1])return '';
  const parents=[['#/','Mi estudio']];
  if(['reto','codigo','casos','diagnostico'].includes(segment[1]))parents.push(['#/entrenar','Practicar']);
  if(segment[1]==='leccion') {const lesson=lessons.find(l=>l.id===segment[2]);if(lesson)parents.push([`#/unidad/${lesson.unit}`,lesson.unit==='UD2'?'Unidad 2':'Unidades 3 y 4']);}
  if(['taller','comparar'].includes(segment[1]))parents.push(['#/practica','Prácticas']);
  if(segment[1]==='comparar')parents.push([`#/taller/${segment[2]}`,'Taller de la relación']);
  if(segment[1]==='solucion')parents.push(['#/soluciones','Soluciones y descargas']);
  if(segment[1]==='material')parents.push(['#/biblioteca','Material del profesor']);
  return `<nav class="page-trail" aria-label="Ubicación en la web">${parents.map(([href,label])=>`<a href="${href}">${esc(label)}</a><span aria-hidden="true">/</span>`).join('')}<span aria-current="page">${esc(title)}</span></nav>`;
}

function render({ focus = true } = {}) {
  const previousOutline=main.querySelector('.workshop-index');
  const outlineScroll=previousOutline?.scrollTop || 0;
  let route;
  try { route = decodeURI(location.hash.slice(1) || '/'); } catch { route = '/404'; }
  const [pathname, query = ''] = route.split('?');
  const params = new URLSearchParams(query);
  const segment = pathname.split('/');
  let title = 'Vista general'; let content;
  switch (segment[1]) {
    case '': content = academy.render('',params); title = 'Mi estudio'; break;
    case 'temario': case 'materiales': case 'entrenar': case 'diagnostico': case 'reto': case 'codigo': case 'casos': case 'cuaderno': case 'progreso':
      content = academy.render(segment[1],params,segment[2]) || notFound();
      title = {temario:'Temario',materiales:'Materiales',entrenar:'Practicar',diagnostico:'Diagnóstico',reto:'Reto práctico',codigo:'Código razonado',casos:'Casos de prueba',cuaderno:'Cuaderno de errores',progreso:'Copia del progreso'}[segment[1]];
      academy.touchRoute(segment[1],segment[2]);
      break;
    case 'unidad': content = unitPage(segment[2]); title = segment[2] === 'UD2' ? 'Unidad 2' : 'Unidades 3 y 4'; break;
    case 'leccion': content = lessonPage(segment[2]); title = lessons.find(l => l.id === segment[2])?.tag || 'Lección'; break;
    case 'biblioteca': content = libraryPage(); title = 'Biblioteca'; break;
    case 'material': { let path; try { path = decodeURIComponent(segment.slice(2).join('/')); } catch { path = ''; } content = materialPage(path); title = 'Material original'; break; }
    case 'practica': content = practicePage(); title = 'Prácticas de clase'; break;
    case 'taller': content = workshopPage(segment[2], params.get('paso')); title = 'Taller en Visual Studio'; break;
    case 'comparar': content = comparisonPage(segment[2]); title = 'Comparar variantes'; break;
    case 'autoevaluacion': content = assessmentPage(params.get('leccion') || 'all'); title = 'Autoevaluación'; break;
    case 'rubrica': content = rubricPage(); title = 'Rúbrica y repaso de examen'; break;
    case 'consulta': content = referencePage(); title = 'Consulta rápida'; break;
    case 'soluciones': content = solutionsPage(); title = 'Soluciones y descargas'; break;
    case 'solucion': content = solutionsPage(segment[2]); title = 'Solución explicada'; break;
    case 'buscar': content = searchPage(params.get('q') || ''); title = 'Resultados de búsqueda'; break;
    default: content = notFound(); title = 'Página no encontrada';
  }
  if (['leccion','taller'].includes(segment[1])) academy.touchRoute(segment[1],segment[2],params);
  main.innerHTML = pageTrail(segment,title)+content;
  if (segment[1] === 'rubrica' && params.get('criterio')) {
    const target = document.getElementById(params.get('criterio'));
    if (target && main.contains(target)) requestAnimationFrame(() => target.scrollIntoView());
  }
  main.querySelector(':scope > .back-link')?.remove();
  const freshOutline=main.querySelector('.workshop-index');
  const sameWorkshop=previousOutline && freshOutline && previousOutline.dataset.workshop===freshOutline.dataset.workshop;
  if(sameWorkshop) {
    // Se reutiliza el panel para mantener su desplazamiento y los bloques abiertos.
    const target=freshOutline.querySelector('[aria-current="step"]')?.getAttribute('href');
    previousOutline.querySelectorAll('[aria-current="step"]').forEach(link=>link.removeAttribute('aria-current'));
    const selected=[...previousOutline.querySelectorAll('a')].find(link=>link.getAttribute('href')===target);
    if(selected) {
      selected.setAttribute('aria-current','step');
      let parent=selected.parentElement;
      while(parent && parent!==previousOutline) {
        if(parent.matches('details') && !parent.classList.contains('workshop-outline'))parent.open=true;
        parent=parent.parentElement;
      }
    }
    freshOutline.replaceWith(previousOutline);
    previousOutline.scrollTop=outlineScroll;
  }
  main.querySelectorAll('.exam-links a:not(.button), .workshop-actions .text-link, .reader-bottom .text-link, .guide-links a:not(.button), .material-card .text-link, .unit-card-bottom a').forEach(link=>{link.classList.add('button','secondary');link.classList.remove('text-link');});

  document.title = `${title} · Aula de Interfaces`;
  $('#crumb').textContent = title;
  renderNav(pathname);
  $('#sidebar').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); $('#menu-toggle').setAttribute('aria-label', 'Abrir navegación');
  if (segment[1] === 'buscar') $('#search').value = params.get('q') || '';
  else $('#search').value = '';
  if (focus) { main.focus({ preventScroll: true }); if(!sameWorkshop)window.scrollTo(0, 0); }
  if(segment[1]==='taller') requestAnimationFrame(()=>document.querySelector('.workshop-reader')?.scrollIntoView({block:'start'}));
  if(segment[1]==='consulta' && params.has('ficha')) {
    const card=document.getElementById('ficha-'+params.get('ficha'));
    if(card){card.querySelector('.concept-detail').open=true;card.scrollIntoView();}
  }
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
  const jump=event.target.closest('[data-jump]');
  if(jump){const section=document.getElementById(jump.dataset.jump);if(section){section.scrollIntoView({block:'start'});const heading=section.querySelector('h2');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}}return;}
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
  academy.syncLegacy(study.answers);
});
main.addEventListener('toggle', event => {
  const details = event.target;
  if (details.matches('details[data-solution-file]') && details.open) {
    const placeholder = details.querySelector('.solution-code'); if (placeholder.children.length) return;
    const [id,index] = details.dataset.solutionFile.split('|');
    const file = solutions.find(p=>p.id===id)?.files[Number(index)];
    if(file?.code!==undefined) placeholder.innerHTML=codeBlock(location.hash.startsWith('#/comparar/') && file.path.endsWith('.xaml')?file.code.replace(/></g, '>\n<'):file.code,file.path);
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
  const rubricInput = event.target.closest('[data-rubric]');
  if (rubricInput) {
    rubricInput.checked ? rubricChecks.add(rubricInput.dataset.rubric) : rubricChecks.delete(rubricInput.dataset.rubric);
    try { localStorage.setItem(rubricKey, JSON.stringify([...rubricChecks])); } catch { notify('No se puede guardar la rúbrica: las marcas durarán solo esta sesión.'); }
    $('#rubric-progress').textContent = `${rubricChecks.size} de 16 criterios comprobados.`;
    return;
  }
  if(event.target.id==='assessment-lesson'){location.hash='#/autoevaluacion?leccion='+encodeURIComponent(event.target.value);return;}
  const input = event.target.closest('[data-check]'); if (!input) return;
  input.checked ? study.checks.add(input.dataset.check) : study.checks.delete(input.dataset.check);
  saveStudy();
});
window.addEventListener('storage', event => {
  if (event.key === rubricKey || event.key === null) {
    rubricChecks = readRubricChecks(event.newValue);
    if (location.hash.startsWith('#/rubrica')) render({focus:false});
  }
  if(event.key===positionKey) {
    lastSteps=readWorkshopPositions(event.newValue,solutions);
    if(!location.hash.startsWith('#/taller/'))render({focus:false});
    return;
  }
  if(event.key===null)lastSteps={};
  if (event.key === key || event.key === null) completed = readProgress(event.newValue, lessons);
  if (event.key === studyKey || event.key === null) { study = readStudy(event.newValue, lessons); restoreResults(); }
  if (event.key === 'aula-interfaces.tema' || event.key === null) {
    document.documentElement.dataset.theme = event.newValue === 'dark' ? 'dark' : event.newValue === 'light' ? 'light' : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    updateThemeButton();
  }
  if (event.key === key || event.key === studyKey || event.key === null) render({ focus: false });
});

const academy = createAcademy({
  lessons, getPackages:()=>solutions, heading, codeBlock, esc, notify,
  refresh:()=>render({focus:false}),
  getLegacy:()=>({
    [key]:JSON.stringify([...completed]),
    [studyKey]:JSON.stringify({checks:[...study.checks],answers:study.answers}),
    [positionKey]:JSON.stringify(lastSteps),
    [rubricKey]:JSON.stringify([...rubricChecks]),
    'aula-interfaces.tema':document.documentElement.dataset.theme
  }),
  reloadLegacy:()=>{
    completed=readProgress(localStorage.getItem(key),lessons);
    study=readStudy(localStorage.getItem(studyKey),lessons);
    lastSteps=readWorkshopPositions(localStorage.getItem(positionKey),solutions);
    rubricChecks=readRubricChecks(localStorage.getItem(rubricKey));
    document.documentElement.dataset.theme=localStorage.getItem('aula-interfaces.tema') || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    restoreResults();updateThemeButton();
  }
});
academy.bind();

try {
  const responses = await Promise.all(['data/materials.json','data/solutions.json'].map(url=>fetch(url)));
  if(responses.some(r=>!r.ok)) throw new Error('Biblioteca no disponible');
  [materials,solutions] = await Promise.all(responses.map(r=>r.json()));
  try { lastSteps=readWorkshopPositions(localStorage.getItem(positionKey),solutions); } catch { storageWarning=true; }
  academy.syncLegacy(study.answers);
  render({ focus: false });
  if (storageWarning) notify('El almacenamiento local no está disponible: el progreso durará solo esta sesión.');
} catch (error) {
  main.innerHTML = heading('NO SE PUDO CARGAR', 'La biblioteca no está disponible.', 'Abre la web desde el servidor local con npm run dev. Si ya lo estás usando, recarga la página.') + '<button class="button" id="retry">Volver a cargar</button>';
  $('#retry').addEventListener('click', () => location.reload());
}
