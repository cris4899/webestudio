import { rubricGroups } from './data/rubric.mjs';
import { diagnosticQuestions, challenges, codeActivities, practiceCases } from './data/training.mjs';
import { trainingKey, storageKeys, statusLabels, caseLabels, emptyTraining, readTraining, gradeDiagnostic, pendingGroups, criterionEvidence, makeBackup, validateBackup, combineBackups, applyBackup, notebookQuestions } from './training-state.mjs';

export function createAcademy({lessons, getPackages, heading, codeBlock, esc, notify, refresh, getLegacy, reloadLegacy}) {
  let state=emptyTraining(), storageFailed=false, incoming=null, diagnosticRetry=false;
  try {state=readTraining(localStorage.getItem(trainingKey));}catch{storageFailed=true;}
  const criteria=rubricGroups.flatMap(g=>g.criteria);
  const criterion=id=>criteria.find(c=>c.id===id);
  const pkg=id=>getPackages().find(p=>p.id===id);
  const link=(href,label,secondary=true)=>`<a class="button${secondary?' secondary':''}" href="${esc(href)}">${esc(label)}</a>`;
  const notice='<p class="source-notice">Preparación didáctica basada en la rúbrica y las prácticas del profesor; no son preguntas oficiales ni una predicción de la nota. El código MAUI se comprueba en Visual Studio.</p>';
  function save() {
    try {localStorage.setItem(trainingKey,JSON.stringify(state));storageFailed=false;return true;}
    catch{storageFailed=true;notify('No se puede guardar el progreso. Los cambios durarán solo esta sesión; puedes exportarlos.');return false;}
  }
  function activity(href,title) {state.lastActivity={href,title,at:new Date().toISOString()};return save();}
  function syncLegacy(answers) {
    const mapped=Object.fromEntries(Object.entries(answers).map(([id,v])=>['legacy-'+id,v]));
    state=gradeDiagnostic(state,mapped);save();
  }
  function sources(item) {
    const c=criterion(item.criterion),p=pkg(item.packageId);
    return `<aside class="activity-sources"><strong>Para estudiar y contrastar</strong><div class="academy-actions">${link('#/rubrica?criterio='+c.id,c.id+' · '+c.title)}${c.lessons.map(id=>link('#/leccion/'+id,lessons.find(l=>l.id===id).title)).join('')}${p?link('#/solucion/'+p.id,'Archivos de '+p.title):''}</div>${item.files?`<p>Archivos de referencia del paquete:</p><ul>${item.files.map(f=>`<li><code>${esc(f)}</code></li>`).join('')}</ul>`:''}<p>La rúbrica y los enunciados originales son la referencia; los fragmentos y retos son elaboración didáctica.</p></aside>`;
  }
  const tabs=()=>`<nav class="academy-tabs" aria-label="Actividades de preparación">${link('#/entrenar','Todas las actividades')}${link('#/diagnostico','Diagnóstico')}${link('#/practica','Talleres de clase')}${link('#/autoevaluacion','Repaso por lección')}${link('#/cuaderno','Cuaderno de errores')}</nav>`;
  function statusSelect(id) {
    return `<label class="status-control">Mi valoración de ${esc(id)}<select data-criterion-status="${id}">${Object.entries(statusLabels).map(([v,t])=>`<option value="${v}"${(state.statuses[id] || 'pendiente')===v?' selected':''}>${t}</option>`).join('')}</select></label>`;
  }
  function dashboard() {
    const groups=pendingGroups(state), flat=groups.flatMap(g=>g.criteria), bad=flat.filter(c=>c.evidence.wrong || c.evidence.failed);
    const next=bad[0] || flat.find(c=>(state.statuses[c.id] || 'pendiente')!=='solo') || flat[0];
    const target=challenges.find(a=>a.criterion===next.id);
    const last=state.lastActivity;
    return heading('MI ESTUDIO','Entiende. Practica. Demuéstralo.','Tu preparación de las unidades 2, 3 y 4, con el siguiente paso a la vista.')+
      `<section class="academy-hero"><div><span class="eyebrow">TU SIGUIENTE PASO</span><h2>${esc(next.title)}</h2><p>${bad.length?'Hay errores o casos fallidos que conviene revisar.':'Avanza desde lo que has leído hasta lo que puedes resolver sin ayuda.'} Empieza por ${esc(next.id)}.</p>${link('#/reto/'+target.id,'Practicar este criterio',false)}</div><div class="academy-hero-note"><strong>Aprender no es solo completar casillas</strong><p>Tu valoración personal y los resultados de tus comprobaciones se muestran por separado.</p>${link('#/diagnostico','Hacer el diagnóstico')}</div></section>`+
      `<div class="academy-stats"><article class="panel"><strong>${Object.values(state.statuses).filter(v=>v==='solo').length} / 16</strong><p>Criterios declarados «resuelto solo»</p></article><article class="panel"><strong>${diagnosticQuestions.filter(q=>Object.hasOwn(state.answers,q.id)).length} / 32</strong><p>Preguntas del diagnóstico respondidas</p></article><article class="panel"><strong>${practiceCases.filter(c=>state.cases[c.id]==='correcto').length} / ${practiceCases.length}</strong><p>Casos registrados como correctos</p></article></div>`+
      `<section class="panel"><h2>Última actividad</h2>${last?`<p>${esc(last.title)} · ${esc(new Date(last.at).toLocaleString('es-ES'))}</p>${link(last.href,'Continuar donde lo dejé')}`:'<p>Todavía no has registrado una actividad de preparación.</p>'}</section>`+
      `<section class="content-section"><h2>Elige cómo avanzar</h2><div class="academy-grid">${[
        ['#/temario','Estudiar el temario','Lecciones, conceptos y referencias de las tres unidades.'],
        ['#/entrenar','Practicar sin copiar','Retos, código razonado y casos de prueba.'],
        ['#/rubrica','Revisar la rúbrica','Qué debes demostrar en cada criterio.'],
        ['#/cuaderno','Aprender de los errores','Explica el fallo, su corrección y cómo comprobarlo.'],
        ['#/progreso','Guardar una copia','Lleva tu progreso a otro navegador con un archivo.'],
        ['#/materiales','Consultar materiales','Originales, soluciones y descargas de clase.']
      ].map(([href,t,d])=>`<article class="panel"><h3>${t}</h3><p>${d}</p>${link(href,t)}</article>`).join('')}</div></section>`+pendingPanel(groups);
  }
  function pendingPanel(groups=pendingGroups(state)) {
    return `<section class="content-section"><h2>Qué queda por demostrar</h2><p>Primero aparecen los criterios con errores o casos fallidos; después, los no practicados. Los pesos ordenan dentro de cada RA: no hay una nota conjunta.</p>${groups.map(g=>`<section class="panel"><h3>${g.id} · ${esc(g.title)}</h3><div class="pending-list">${g.criteria.map(c=>`<article><div><h4>${c.id} · ${esc(c.title)} <small>${c.weight}% de ${g.id}</small></h4><p class="evidence">Diagnóstico: ${c.evidence.correct} aciertos / ${c.evidence.answered} respondidas · ${c.evidence.wrong} errores. Casos: ${c.evidence.passed} correctos, ${c.evidence.failed} fallidos de ${c.evidence.totalCases} relacionados.</p>${c.priority===0?'<span class="evidence-alert">Revisar errores</span>':c.priority===1?'<span>Sin práctica registrada</span>':''}<div class="academy-actions">${link('#/reto/'+challenges.find(a=>a.criterion===c.id).id,'Ir al reto')}${link('#/rubrica?criterio='+c.id,'Ver criterio')}</div></div>${statusSelect(c.id)}</article>`).join('')}</div></section>`).join('')}</section>`;
  }
  function temario() {
    return heading('TEMARIO','Una base clara para cada práctica.','Estudia las unidades 2, 3 y 4 y conecta cada concepto con lo que debes demostrar.')+`<div class="academy-grid">${['UD2','UD3-4'].map(unit=>`<section class="panel"><h2>${unit==='UD2'?'Unidad 2':'Unidades 3 y 4'}</h2>${lessons.filter(l=>l.unit===unit).map(l=>`<p><a href="#/leccion/${l.id}">${esc(l.title)}</a></p>`).join('')}${link('#/unidad/'+unit,'Explorar la unidad')}</section>`).join('')}</div><section class="panel"><h2>Herramientas de consulta</h2><div class="academy-actions">${link('#/consulta','Consulta rápida')}${link('#/autoevaluacion','Preguntas por lección')}</div></section>`;
  }
  function materialHub() {
    return heading('MATERIALES','Las fuentes y las soluciones, a mano.','Consulta los originales para comprobar requisitos y usa las soluciones como referencia de estudio.')+`<div class="academy-grid"><section class="panel"><h2>Material del profesor</h2><p>PDF, archivos RAR y listados Learn conservados sin modificar.</p>${link('#/biblioteca','Abrir biblioteca')}</section><section class="panel"><h2>Soluciones y descargas</h2><p>Los 13 paquetes, archivos y casos de comprobación existentes.</p>${link('#/soluciones','Ver soluciones y ZIP')}</section><section class="panel"><h2>Rúbrica de la práctica 1</h2><p>Criterios y pesos originales, con guía didáctica para el examen.</p>${link('#/rubrica','Consultar rúbrica')}</section></div>`;
  }
  function training(params) {
    const ra=['RA1','RA3','RA4'].includes(params.get('ra'))?params.get('ra'):'all';
    const matches=a=>ra==='all' || a.criterion.startsWith(ra+'-');
    return heading('PRACTICAR','Del ejemplo a tu propia solución.','Comprueba lo que entiendes y vuelve al concepto que necesites reforzar.')+tabs()+notice+
      `<div class="panel"><label>Filtrar actividades por resultado de aprendizaje<select id="training-ra">${['all','RA1','RA3','RA4'].map(v=>`<option value="${v}"${ra===v?' selected':''}>${v==='all'?'Todos los RA':v}</option>`).join('')}</select></label></div>`+
      `<section class="content-section"><h2>Retos sin solución visible</h2><div class="academy-grid">${challenges.filter(matches).map(c=>`<article class="panel"><span class="unit-code">${c.criterion}</span><h3>${esc(c.title)}</h3><p>${esc(c.requirements[0])}</p><p>${state.reviews[c.id]?'Comprobación registrada':'Pendiente de comprobar'} · ${state.help[c.id]?'Ayuda consultada':'Sin ayuda consultada'}</p>${link('#/reto/'+c.id,'Abrir reto')}</article>`).join('')}</div></section>`+
      `<section class="content-section"><h2>Explica y corrige código</h2><div class="academy-grid">${codeActivities.filter(matches).map(a=>`<article class="panel"><span class="unit-code">${a.kind==='explicar'?'Explica el flujo':'Localiza y corrige'} · ${a.criterion}</span><h3>${esc(a.title)}</h3><p>${state.reviews[a.id]?'Revisión registrada':'Pendiente de revisar'}</p>${link('#/codigo/'+a.id,'Repasar código')}</article>`).join('')}</div></section>`+
      `<section class="content-section"><h2>Casos de prueba de las ocho relaciones</h2><div class="academy-grid">${Array.from({length:8},(_,i)=>'relacion-'+(i+1)).map(id=>`<article class="panel"><h3>${esc(pkg(id).title)}</h3><p>${practiceCases.filter(c=>c.packageId===id).length} casos con preparación, acción, resultado y motivo.</p>${link('#/casos/'+id,'Comprobar la relación')}</article>`).join('')}</div></section>`;
  }
  function reviewBox(a) {return `<label class="review-box"><input type="checkbox" data-review="${a.id}"${state.reviews[a.id]?' checked':''}> He contrastado mi solución con las comprobaciones. Esto no cambia automáticamente mi valoración del criterio.</label>`;}
  function challengePage(id) {
    const a=challenges.find(c=>c.id===id);if(!a)return null;
    return heading('RETO · '+a.criterion,esc(a.title),'Trabaja primero en una copia del proyecto en Visual Studio. Consulta ayuda solo cuando la necesites.')+tabs()+notice+
      `<article class="panel activity-reader"><h2>Qué tienes que hacer</h2><ul>${a.requirements.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><h2>Cómo comprobarlo</h2><p>${esc(a.verification)}</p><details data-help="${a.id}" data-level="1"><summary>Necesito una primera pista</summary><p>${esc(a.hints[0])}</p><details data-help="${a.id}" data-level="2"><summary>Ver una segunda pista</summary><p>${esc(a.hints[1])}</p></details></details><details data-help="${a.id}" data-level="3"><summary>Consultar solución razonada</summary><p>${esc(a.solution)}</p></details>${reviewBox(a)}${statusSelect(a.criterion)}<p>Ayuda consultada anteriormente: ${state.help[a.id]===3?'solución':state.help[a.id]===2?'dos pistas':state.help[a.id]===1?'primera pista':'ninguna'}. Abrir ayuda no modifica tu valoración personal.</p>${sources(a)}</article>`;
  }
  function codePage(id) {
    const a=codeActivities.find(c=>c.id===id);if(!a)return null;
    return heading('CÓDIGO · '+a.criterion,esc(a.title),a.kind==='corregir'?'Localiza el fallo, explica su efecto y propone una corrección.':'Explica el recorrido de los datos antes de abrir la respuesta.')+tabs()+notice+
      `<article class="panel activity-reader"><p class="source-notice">${a.kind==='corregir'?'Fragmento didáctico con error deliberado.':'Fragmento didáctico parcial para razonar; no es un archivo completo compilable.'} Los archivos de referencia del paquete permanecen intactos.</p>${codeBlock(a.code,'Ejemplo didáctico · '+a.kind)}<details data-help="${a.id}" data-level="3"><summary>Contrastar mi respuesta</summary><p>${esc(a.answer)}</p><h2>Una explicación completa debe incluir</h2><ul>${a.checks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>${reviewBox(a)}${statusSelect(a.criterion)}${sources(a)}</article>`;
  }
  function casesPage(id) {
    const cases=practiceCases.filter(c=>c.packageId===id);if(!cases.length)return null;
    return heading('COMPROBACIÓN PRÁCTICA',esc(pkg(id).title),'Ejecuta cada caso en la aplicación. El estado registra tu comprobación manual; la web no ejecuta MAUI.')+tabs()+notice+
      `<section class="panel"><h2>Preparación</h2><p>${esc(cases[0].preparation)}</p><div class="academy-actions">${link('#/taller/'+id,'Abrir taller')}${link('#/solucion/'+id,'Consultar archivos y fuentes')}</div></section><div class="table-scroll case-table" tabindex="0" role="region" aria-label="Casos de comprobación con desplazamiento horizontal"><table class="study-table"><caption>Casos de ${esc(pkg(id).title)}</caption><thead><tr><th>Preparación y origen</th><th>Entrada o acción</th><th>Resultado esperado</th><th>Por qué comprobarlo</th><th>Mi resultado</th></tr></thead><tbody>${cases.map(c=>`<tr><td>${esc(c.preparation)}<br><small>${esc(c.origin)}</small></td><td>${esc(c.action)}</td><td>${esc(c.expected)}</td><td>${esc(c.why)}</td><td><label><span class="sr-only">Resultado de ${esc(c.action)}</span><select data-case="${c.id}">${Object.entries(caseLabels).map(([v,t])=>`<option value="${v}"${(state.cases[c.id] || 'pendiente')===v?' selected':''}>${t}</option>`).join('')}</select></label></td></tr>`).join('')}</tbody></table></div>`;
  }
  function diagnosticPage(params) {
    const ra=['RA1','RA3','RA4'].includes(params.get('ra'))?params.get('ra'):'all';
    const questions=diagnosticQuestions.filter(q=>ra==='all' || q.criterion.startsWith(ra+'-'));
    const finished=!diagnosticRetry && questions.every(q=>Object.hasOwn(state.answers,q.id));
    return heading('DIAGNÓSTICO','Comprueba cada criterio.','Responde sin consultar la solución. Recibirás corrección y explicación al terminar el bloque elegido.')+tabs()+notice+
      `<section class="panel"><label>Diagnóstico completo o por RA<select id="diagnostic-ra">${['all','RA1','RA3','RA4'].map(v=>`<option value="${v}"${v===ra?' selected':''}>${v==='all'?'Completo · 32 preguntas':v}</option>`).join('')}</select></label><p>${questions.length} preguntas en este bloque. Cada criterio tiene dos preguntas.</p></section>`+
      (finished?`<section class="panel" id="diagnostic-result" tabindex="-1"><h2>Resultados del bloque</h2><p>${questions.filter(q=>state.answers[q.id]===q.answer).length} aciertos de ${questions.length}. Es un diagnóstico de estudio, no una nota de examen.</p><button class="button" data-diagnostic-retry>Reintentar sin mostrar respuestas</button></section><div class="academy-grid">${criteria.filter(c=>ra==='all'||c.id.startsWith(ra+'-')).map(c=>{const e=criterionEvidence(c.id,state);return `<article class="panel"><h3>${c.id} · ${esc(c.title)}</h3><p>${e.correct} aciertos · ${e.wrong} errores</p>${questions.filter(q=>q.criterion===c.id).map(q=>`<details><summary>${state.answers[q.id]===q.answer?'Correcta':'Revisar'} · ${esc(q.prompt)}</summary><p>Tu respuesta: ${esc(q.options[state.answers[q.id]])}</p><p>Respuesta correcta: ${esc(q.options[q.answer])}</p><p>${esc(q.explanation)}</p></details>`).join('')}${link('#/leccion/'+c.lessons[0],'Repasar explicación')}${link('#/reto/'+challenges.find(a=>a.criterion===c.id).id,'Practicar el criterio')}</article>`;}).join('')}</div>`:
      `<form id="diagnostic-form" data-ra="${ra}">${questions.map((q,i)=>`<fieldset class="panel diagnostic-question"><legend>${i+1}. ${esc(q.prompt)}</legend><p>${q.criterion}</p>${q.options.map((o,n)=>`<label><input type="radio" name="${q.id}" value="${n}" required> ${esc(o)}</label>`).join('')}</fieldset>`).join('')}<button class="button" type="submit">Terminar y corregir ${questions.length} preguntas</button></form>`);
  }
  function notebook() {
    const entries=notebookQuestions.filter(q=>state.errors[q.id]);
    return heading('CUADERNO DE ERRORES','Convierte cada fallo en una explicación.','Aquí aparecen errores del diagnóstico y de la autoevaluación por lección. La respuesta se consulta después de intentar resolverlo.')+tabs()+
      (entries.length?`<p id="error-summary" role="status">${entries.filter(q=>!state.errors[q.id].reviewed).length} errores pendientes de revisar · ${entries.length} registrados.</p>${entries.map(q=>`<form class="panel error-entry" data-error-note="${q.id}"><h2>${esc(q.prompt)}</h2><p>${q.lessonId?'Autoevaluación de lección':'Diagnóstico'} · ${q.criterion} · ${state.errors[q.id].reviewed?'Revisado':'Pendiente de revisar'}</p><details><summary>Consultar explicación</summary><p>${esc(q.explanation)}</p><p>Respuesta: ${esc(q.options[q.answer])}</p></details><label>Qué ocurrió, cómo lo corrijo y cómo lo compruebo<textarea name="note" maxlength="10000" rows="4">${esc(state.errors[q.id].note)}</textarea></label><label><input type="checkbox" name="reviewed"${state.errors[q.id].reviewed?' checked':''}> He comprobado manualmente la corrección</label><div class="academy-actions"><button class="button" type="submit">Guardar revisión</button>${link(q.lessonId?'#/autoevaluacion?leccion='+q.lessonId:'#/diagnostico?ra='+q.criterion.split('-')[0],'Volver a intentarlo')}${link('#/leccion/'+(q.lessonId || criterion(q.criterion).lessons[0]),'Repasar el concepto')}</div></form>`).join('')}`:'<section class="panel"><h2>Todavía no hay errores registrados</h2><p>Al fallar una pregunta, aparecerá aquí para que puedas revisarla.</p>'+link('#/diagnostico','Empezar diagnóstico')+'</section>');
  }
  function currentBackup() {
    // Use live in-memory progress, including when localStorage is unavailable.
    const snapshot={...getLegacy(),[trainingKey]:JSON.stringify(state)};
    return makeBackup({getItem:key=>snapshot[key]??null});
  }
  function backupPage() {
    return heading('COPIA DEL PROGRESO','Tu estudio también se puede guardar.','Exporta un archivo antes de cambiar de navegador o importar otra copia.')+
      `<section class="panel"><h2>Exportar</h2><p>Incluye lecciones completadas, respuestas, casillas, posiciones de taller, rúbrica, entrenamiento, notas de errores y tema. El archivo contiene tus notas personales; guárdalo donde prefieras.</p><button class="button" data-backup-export>Descargar copia JSON</button>${storageFailed?'<p role="status">El almacenamiento local no está disponible; se exportará el progreso de esta sesión.</p>':''}</section><section class="panel"><h2>Importar</h2><label>Seleccionar copia JSON<input id="backup-file" type="file" accept="application/json,.json"></label><p>Primero se valida el archivo; no se cambia nada hasta que elijas aplicar la importación.</p><div id="backup-preview" role="status"></div></section>`;
  }
  function lessonActivities(id) {
    const ids=criteria.filter(c=>c.lessons.includes(id)).map(c=>c.id);
    return `<section class="panel"><h2>Practica lo que estudias</h2><div class="academy-actions">${challenges.filter(a=>ids.includes(a.criterion)).map(a=>link('#/reto/'+a.id,a.title)).join('')}${codeActivities.filter(a=>ids.includes(a.criterion)).map(a=>link('#/codigo/'+a.id,a.kind==='corregir'?'Corregir: '+a.title:'Explicar: '+a.title)).join('')}</div></section>`;
  }
  function search(term) {
    const normalize=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const terms=normalize(term).trim().split(/\s+/).filter(Boolean);
    if(!terms.length)return '';
    const matches=[...challenges.map(a=>({...a,href:'#/reto/'+a.id})),...codeActivities.map(a=>({...a,href:'#/codigo/'+a.id}))].filter(a=>terms.every(t=>normalize(JSON.stringify(a)).includes(t)));
    return matches.length?`<section class="result-group"><h2>Retos y código razonado · ${matches.length}</h2>${matches.map(a=>`<a class="result-item" href="${a.href}"><small>${a.criterion}</small><strong>${esc(a.title)}</strong></a>`).join('')}</section>`:'';
  }
  function render(route,params,id) {
    const pages={'':dashboard,temario,materiales:materialHub,entrenar:()=>training(params),diagnostico:()=>diagnosticPage(params),reto:()=>challengePage(id),codigo:()=>codePage(id),casos:()=>casesPage(id),cuaderno:notebook,progreso:backupPage};
    return pages[route]?.() ?? null;
  }
  function touchRoute(route,id,params=new URLSearchParams()) {
    if(route==='leccion'){const l=lessons.find(l=>l.id===id);if(l)activity('#/leccion/'+id,l.title);}
    if(route==='taller' && practiceCases.some(c=>c.packageId===id))activity('#/taller/'+id+(params.get('paso')?'?paso='+params.get('paso'):''),'Taller · '+pkg(id).title);
    if(route==='reto'){const a=challenges.find(c=>c.id===id);if(a)activity('#/reto/'+id,a.title);}
    if(route==='codigo'){const a=codeActivities.find(c=>c.id===id);if(a)activity('#/codigo/'+id,a.title);}
    if(route==='casos' && practiceCases.some(c=>c.packageId===id))activity('#/casos/'+id,'Casos de '+pkg(id).title);
  }
  function bind() {
    document.addEventListener('change',async event=>{
      const el=event.target;
      if(el.id==='training-ra' || el.id==='diagnostic-ra') {diagnosticRetry=false;location.hash='#/'+(el.id==='training-ra'?'entrenar':'diagnostico')+(el.value==='all'?'':'?ra='+el.value);return;}
      if(el.matches('[data-criterion-status]')) {state.statuses[el.dataset.criterionStatus]=el.value;const saved=save();if(['','#/','#'].includes(location.hash)){const id=el.dataset.criterionStatus;refresh();document.querySelector(`[data-criterion-status="${id}"]`)?.focus({preventScroll:true});}if(saved)notify('Valoración personal guardada; los resultados de las pruebas no cambian.');return;}
      if(el.matches('[data-case]')) {state.cases[el.dataset.case]=el.value;if(save())notify('Resultado del caso guardado.');return;}
      if(el.matches('[data-review]')) {state.reviews[el.dataset.review]=el.checked;if(save())notify('Comprobación registrada.');return;}
      if(el.id==='backup-file') {
        incoming=null;const preview=document.getElementById('backup-preview');preview.textContent='';
        const file=el.files[0];if(!file)return;
        try {
          if(file.size>2*1024*1024)throw new Error('El archivo supera el máximo de 2 MB.');
          incoming=validateBackup(JSON.parse(await file.text()),lessons,getPackages());
          const imported=readTraining(incoming.storage[trainingKey]);
          const oldCompleted=JSON.parse(incoming.storage['aula-interfaces.progreso.v1'] || '[]');
          const oldStudy=JSON.parse(incoming.storage['aula-interfaces.estudio.v1'] || '{"checks":[],"answers":{}}');
          preview.innerHTML=`<h3>Copia validada</h3><p>Fecha: ${esc(new Date(incoming.exportedAt).toLocaleString('es-ES'))}. Contiene ${Object.keys(imported.statuses).length} valoraciones, ${Object.keys(imported.answers).length} respuestas de entrenamiento, ${Object.keys(imported.cases).length} casos y ${Object.keys(imported.errors).length} anotaciones de errores, ${oldCompleted.length} lecciones completadas, ${oldStudy.checks.length} casillas de estudio y ${Object.keys(oldStudy.answers).length} respuestas anteriores.</p><label>Cómo aplicar la copia<select id="backup-mode"><option value="combine">Combinar con mi progreso</option><option value="replace">Reemplazar mi progreso</option></select></label><p>Al combinar, se unen las casillas; las respuestas, valoraciones y notas del archivo prevalecen si coinciden. Al reemplazar, se sustituye todo el progreso incluido y el tema.</p><button class="button" data-backup-apply>Aplicar importación</button>`;
        }catch(error){incoming=null;preview.textContent='No se ha importado nada. '+error.message;}
      }
    });
    document.addEventListener('submit',event=>{
      if(event.target.id==='diagnostic-form') {
        event.preventDefault();const form=event.target, answers=Object.fromEntries([...new FormData(form)].map(([id,v])=>[id,Number(v)]));
        const ra=form.dataset.ra;const selected=diagnosticQuestions.filter(q=>ra==='all'||q.criterion.startsWith(ra+'-'));
        if(selected.some(q=>!Object.hasOwn(answers,q.id))){notify('Responde todas las preguntas del bloque antes de corregir.');return;}
        state=gradeDiagnostic(state,answers);diagnosticRetry=false;activity('#/diagnostico'+(ra==='all'?'':'?ra='+ra),'Diagnóstico '+(ra==='all'?'completo':ra));refresh();document.getElementById('diagnostic-result')?.focus();
      }
      if(event.target.matches('[data-error-note]')) {
        event.preventDefault();const form=event.target, data=new FormData(form);
        state.errors[form.dataset.errorNote]={note:String(data.get('note')).slice(0,10000),reviewed:data.has('reviewed')};if(activity('#/cuaderno','Revisión de errores'))notify('Revisión guardada.');
        const summary=document.getElementById('error-summary');if(summary)summary.textContent=`${Object.values(state.errors).filter(e=>!e.reviewed).length} errores pendientes de revisar · ${Object.keys(state.errors).length} registrados.`;
        const title=form.querySelector('h2');title.nextElementSibling.textContent=title.nextElementSibling.textContent.replace(/Pendiente de revisar|Revisado/,data.has('reviewed')?'Revisado':'Pendiente de revisar');
      }
    });
    document.addEventListener('click',event=>{
      if(event.target.closest('[data-diagnostic-retry]')){diagnosticRetry=true;refresh();document.querySelector('#diagnostic-form input')?.focus();}
      if(event.target.closest('[data-backup-export]')) {
        const blob=new Blob([JSON.stringify(currentBackup(),null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='aula-interfaces-progreso-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Copia de progreso preparada.');
      }
      if(event.target.closest('[data-backup-apply]') && incoming) {
        try {
          const merged=combineBackups(currentBackup(),incoming,document.getElementById('backup-mode').value);
          applyBackup(localStorage,merged);state=readTraining(merged[trainingKey]);incoming=null;reloadLegacy();refresh();notify('Copia importada. El progreso está actualizado.');
        }catch(error){notify(error.message);}
      }
    });
    document.getElementById('contenido').addEventListener('toggle',event=>{
      const el=event.target;
      if(el.matches('details[data-help]') && el.open){state.help[el.dataset.help]=Math.max(state.help[el.dataset.help] || 0,Number(el.dataset.level));save();}
    },true);
    window.addEventListener('storage',event=>{
      if(event.key===trainingKey || event.key===null){state=readTraining(event.newValue);refresh();}
    });
  }
  return {render,bind,search,lessonActivities,touchRoute,syncLegacy, state:()=>state};
}
