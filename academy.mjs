import { rubricGroups } from './data/rubric.mjs';
import { diagnosticQuestions, challenges, codeActivities, practiceCases } from './data/training.mjs';
import { topics } from './data/topics.mjs';
import { trainingKey, storageKeys, statusLabels, caseLabels, emptyTraining, readTraining, gradeDiagnostic, pendingGroups, criterionEvidence, makeBackup, validateBackup, combineBackups, applyBackup, notebookQuestions, studyPlan, daysUntil, pickMock, scheduleReview, queueErrors, dueReviews } from './training-state.mjs';

export function createAcademy({lessons, getPackages, heading, codeBlock, esc, notify, refresh, getLegacy, reloadLegacy, pendingLessons}) {
  let state=emptyTraining(), storageFailed=false, incoming=null, diagnosticRetry=false, mockFinished=false, session=null;
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
    state=queueErrors(gradeDiagnostic(state,mapped),localToday(),state.plan.examDate);save();
  }
  function sources(item) {
    const c=criterion(item.criterion),p=pkg(item.packageId);
    return `<aside class="activity-sources"><strong>Para estudiar y contrastar</strong><div class="academy-actions">${link('#/rubrica?criterio='+c.id,c.id+' · '+c.title)}${c.lessons.map(id=>link('#/leccion/'+id,lessons.find(l=>l.id===id).title)).join('')}${p?link('#/solucion/'+p.id,'Archivos de '+p.title):''}</div>${item.files?`<p>Archivos de referencia del paquete:</p><ul>${item.files.map(f=>`<li><code>${esc(f)}</code></li>`).join('')}</ul>`:''}<p>La rúbrica y los enunciados originales son la referencia; los fragmentos y retos son elaboración didáctica.</p></aside>`;
  }
  const localToday=()=>new Date().toLocaleDateString('sv');
  const dueCount=()=>dueReviews(state,localToday()).length;
  const pendingErrors=()=>Object.values(state.errors).filter(e=>!e.reviewed).length;
  const tabs=(active='')=>`<nav class="lesson-tabs academy-tabs" aria-label="Formas de practicar">${[['hoy','Hoy'+(dueCount()?' · '+dueCount():'')],['entrenar','Actividades'],['simulacro','Simulacro'],['diagnostico','Diagnóstico'],['autoevaluacion','Preguntas'],['cuaderno','Errores'+(pendingErrors()?' · '+pendingErrors():'')]].map(([id,t])=>`<a href="#/${id}"${id===active?' aria-current="page"':''}>${esc(t)}</a>`).join('')}</nav>`;
  function statusSelect(id) {
    return `<label class="status-control">Mi valoración de ${esc(id)}<select data-criterion-status="${id}">${Object.entries(statusLabels).map(([v,t])=>`<option value="${v}"${(state.statuses[id] || 'pendiente')===v?' selected':''}>${t}</option>`).join('')}</select></label>`;
  }
  function nextStep() {
    const flat=pendingGroups(state).flatMap(g=>g.criteria), bad=flat.filter(c=>c.evidence.wrong || c.evidence.failed);
    const next=bad[0] || flat.find(c=>(state.statuses[c.id] || 'pendiente')!=='solo') || flat[0];
    return {title:next.title,id:next.id,href:'#/reto/'+challenges.find(a=>a.criterion===next.id).id,review:bad.length>0};
  }
  function todayPlan() {
    const groups=pendingGroups(state).flatMap(g=>g.criteria);
    const reto=c=>({label:`Practicar ${c.id}: ${c.title}`,href:'#/reto/'+challenges.find(a=>a.criterion===c.id).id});
    const lessonItems=pendingLessons();
    const items=[...(dueCount()?[{label:`Repasar ${dueCount()} ${dueCount()===1?'pregunta':'preguntas'} que tocan hoy`,href:'#/hoy'}]:[]),...groups.filter(c=>c.priority===0).map(c=>({...reto(c),label:`Revisar errores en ${c.id}: ${c.title}`})),...lessonItems,...groups.filter(c=>c.priority===1).map(reto)];
    const today=localToday(), exam=state.plan.examDate, left=daysUntil(today,exam), plan=studyPlan(items,today,exam);
    return {left,exam,items:plan[0]?.items || [],total:items.length};
  }
  function rubricMap() {
    const label={0:'Con errores',1:'Sin practicar',2:'Practicado'};
    return `<section class="panel"><h2>Mapa de criterios</h2><div class="rubric-map">${pendingGroups(state).flatMap(g=>g.criteria.map(c=>{const proved=c.priority===2 && c.evidence.answered && !c.evidence.wrong;return `<a class="rubric-cell${c.priority===0?' bad':proved?' good':''}" href="#/reto/${challenges.find(a=>a.criterion===c.id).id}"><strong>${c.id}</strong><span>${proved?'Demostrado':label[c.priority]}</span></a>`;})).join('')}</div></section>`;
  }
  function todayReviews() {
    const due=dueReviews(state,localToday()), next=Object.values(state.spaced).map(s=>s.due).sort()[0];
    return heading('HOY','Practicar','Las preguntas falladas vuelven para que las recuerdes sin mirar.')+tabs('hoy')+
      (due.length?due.map(q=>`<form class="quiz" data-spaced="${q.id}"><fieldset><legend>${esc(q.prompt)}</legend>${q.options.map((o,i)=>`<label><input type="radio" name="answer" value="${i}" required><span>${esc(o)}</span></label>`).join('')}</fieldset><button class="button small" type="submit">Comprobar</button><div class="feedback" aria-live="polite"></div></form>`).join(''):`<section class="panel"><h2>Nada que repasar hoy</h2><p>${next?`El próximo repaso es el ${esc(next)}.`:'Cuando falles una pregunta, volverá aquí.'}</p>${link('#/diagnostico','Hacer el diagnóstico')}</section>`);
  }
  function sessionPage() {
    if(!session)return heading('SESIÓN','Sesión de 25 minutos','Repaso pendiente, una lección y un reto, en ese orden.')+`<section class="panel"><button class="button" data-session-start>Empezar sesión</button></section>`;
    const done=session.steps.filter(s=>s.done).length;
    if(session.finished)return heading('SESIÓN','Sesión terminada',`${done} de ${session.steps.length} tareas hechas.`)+`<section class="panel"><ul>${session.steps.map(s=>`<li>${s.done?'Hecho':'Pendiente'}: ${esc(s.label)}</li>`).join('')}</ul><button class="button" data-session-start>Otra sesión</button></section>`;
    return heading('SESIÓN','Sesión de 25 minutos','Marca cada tarea al terminarla.')+`<p class="mock-timer" id="session-timer" role="timer" data-ends="${session.ends}"></p><section class="panel checklist">${session.steps.map((s,i)=>`<label><input type="checkbox" data-session-step="${i}"${s.done?' checked':''}><span><a href="${esc(s.href)}">${esc(s.label)}</a></span></label>`).join('')}</section><button class="button" data-session-finish>Terminar sesión</button>`;
  }
  function startSession() {
    const next=nextStep(), lesson=pendingLessons()[0];
    session={ends:Date.now()+25*60000,finished:false,steps:[dueCount()?{label:`Repasar ${dueCount()} preguntas`,href:'#/hoy',done:false}:{label:'Revisar los errores del cuaderno',href:'#/cuaderno',done:false},...(lesson?[{...lesson,done:false}]:[]),{label:`Reto de ${next.id}: ${next.title}`,href:next.href,done:false}]};
  }
  function noteBox(id) {
    return `<section class="note-box"><h2>Explícalo con tus palabras</h2><label>Sin mirar el texto, resume lo importante de esta lección.<textarea data-lesson-note="${esc(id)}" rows="4" maxlength="10000">${esc(state.notes[id] || '')}</textarea></label></section>`;
  }
  function mockPage() {
    const notes='<p class="source-notice">Ensayo de estudio: no reproduce el examen real ni predice la nota. Puedes consultar tus relaciones, igual que en el examen.</p>';
    const active=state.activeMock;
    if(active && !mockFinished) {
      const items=active.challenges.map(id=>challenges.find(c=>c.id===id)), cases=active.cases.map(id=>practiceCases.find(c=>c.id===id));
      return heading('SIMULACRO','Simulacro en curso','Trabaja en Visual Studio con las relaciones a mano. Las ayudas de los retos no se muestran aquí.')+tabs('simulacro')+notes+
        `<p class="mock-timer" id="mock-timer" role="timer" data-ends="${Date.parse(active.startedAt)+active.minutes*60000}"></p>${items.map(a=>`<article class="panel activity-reader"><h2>${esc(a.title)}</h2><p>${a.criterion}</p><ul>${a.requirements.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><h3>Cómo comprobarlo</h3><p>${esc(a.verification)}</p></article>`).join('')}<section class="panel"><h2>Casos que debe superar</h2><ul>${cases.map(c=>`<li>${esc(c.action)}: ${esc(c.expected)}</li>`).join('')}</ul></section><div class="academy-actions"><button class="button" data-mock-finish>Terminar y corregir</button>${link('#/chuleta','Abrir chuletas')}</div>`;
    }
    if(active) {
      const items=active.challenges.map(id=>challenges.find(c=>c.id===id));
      return heading('SIMULACRO','Corrige tu simulacro','Valora cada reto con sus comprobaciones. La web no ejecuta tu proyecto.')+tabs('simulacro')+notes+
        `<form id="mock-form">${items.map(a=>`<fieldset class="panel"><legend>${a.criterion} · ${esc(a.title)}</legend><p>${esc(a.verification)}</p><details><summary>Ver solución razonada</summary><p>${esc(a.solution)}</p></details>${[['bien','Lo resolví'],['regular','Con errores'],['mal','No lo resolví']].map(([v,t])=>`<label><input type="radio" name="${a.criterion}" value="${v}" required> ${t}</label>`).join('')}</fieldset>`).join('')}<button class="button" type="submit">Guardar resultado</button></form>`;
    }
    const last=state.mocks.at(-1);
    return heading('SIMULACRO','Simulacro','Tres retos, uno por RA, con tiempo y sin ayudas.')+tabs('simulacro')+notes+
      `<section class="panel"><label>Duración<select id="mock-minutes">${[60,90,120].map(m=>`<option value="${m}"${m===90?' selected':''}>${m} minutos</option>`).join('')}</select></label><div class="academy-actions"><button class="button" data-mock-start>Empezar simulacro</button></div></section>${last?`<section class="panel"><h2>Último simulacro</h2><p>${esc(new Date(last.at).toLocaleString('es-ES'))} · ${last.minutes} minutos</p><ul>${Object.entries(last.results).map(([id,v])=>`<li>${id}: ${{bien:'Lo resolví',regular:'Con errores',mal:'No lo resolví'}[v]} ${v==='bien'?'':link('#/reto/'+challenges.find(a=>a.criterion===id).id,'Repasar')}</li>`).join('')}</ul></section>`:''}`;
  }
  function tickMock() {
    const clock=document.getElementById('session-timer');
    if(clock){const rest=Math.max(Math.ceil((Number(clock.dataset.ends)-Date.now())/1000),0);clock.textContent=rest?`Tiempo restante: ${Math.floor(rest/60)}:${String(rest%60).padStart(2,'0')}`:'Tiempo agotado: termina la sesión.';}
    const el=document.getElementById('mock-timer');if(!el)return;
    const left=Number(el.dataset.ends)-Date.now();
    if(left<=0){mockFinished=true;notify('Tiempo agotado. Corrige tu simulacro.');refresh();return;}
    const total=Math.ceil(left/1000);el.textContent=`Tiempo restante: ${Math.floor(total/60)}:${String(total%60).padStart(2,'0')}`;
  }
  function pendingPanel(groups=pendingGroups(state)) {
    return `<section class="content-section"><h2>Qué queda por demostrar</h2><p>Primero aparecen los criterios con errores o casos fallidos; después, los no practicados. Los pesos ordenan dentro de cada RA: no hay una nota conjunta.</p>${groups.map(g=>`<section class="panel"><h3>${g.id} · ${esc(g.title)}</h3><div class="pending-list">${g.criteria.map(c=>`<article><div><h4>${c.id} · ${esc(c.title)} <small>${c.weight}% de ${g.id}</small></h4><p class="evidence">Diagnóstico: ${c.evidence.correct} aciertos / ${c.evidence.answered} respondidas · ${c.evidence.wrong} errores. Casos: ${c.evidence.passed} correctos, ${c.evidence.failed} fallidos de ${c.evidence.totalCases} relacionados.</p>${c.priority===0?'<span class="evidence-alert">Revisar errores</span>':c.priority===1?'<span>Sin práctica registrada</span>':''}<div class="academy-actions">${link('#/reto/'+challenges.find(a=>a.criterion===c.id).id,'Ir al reto')}${link('#/rubrica?criterio='+c.id,'Ver criterio')}</div></div>${statusSelect(c.id)}</article>`).join('')}</div></section>`).join('')}</section>`;
  }
  function training(params) {
    const ra=['RA1','RA3','RA4'].includes(params.get('ra'))?params.get('ra'):'all';
    const topic=topics.find(t=>t.id===params.get('tema'));
    const matches=a=>(ra==='all' || a.criterion.startsWith(ra+'-')) && (!topic || criterion(a.criterion).lessons.some(id=>topic.lessons.includes(id)));
    return heading('PRACTICAR','Practicar','Elige una actividad, responde preguntas o revisa tus errores.')+tabs('entrenar')+notice+
      `<div class="panel filter-panel"><label>Criterio<select id="training-ra">${['all','RA1','RA3','RA4'].map(v=>`<option value="${v}"${ra===v?' selected':''}>${v==='all'?'Todos los RA':v}</option>`).join('')}</select></label><label>Tema<select id="training-topic"><option value="">Todos los temas</option>${topics.map(t=>`<option value="${t.id}"${t===topic?' selected':''}>${esc(t.title)}</option>`).join('')}</select></label></div>`+
      `<section class="content-section"><h2>Retos sin solución visible</h2><div class="academy-grid">${challenges.filter(matches).map(c=>`<article class="panel"><span class="unit-code">${c.criterion}</span><h3>${esc(c.title)}</h3><p>${esc(c.requirements[0])}</p><p>${state.reviews[c.id]?'Comprobación registrada':'Pendiente de comprobar'} · ${state.help[c.id]?'Ayuda consultada':'Sin ayuda consultada'}</p>${link('#/reto/'+c.id,'Abrir reto')}</article>`).join('')}</div></section>`+
      `<section class="content-section"><h2>Explica y corrige código</h2><div class="academy-grid">${codeActivities.filter(matches).map(a=>`<article class="panel"><span class="unit-code">${a.kind==='explicar'?'Explica el flujo':'Localiza y corrige'} · ${a.criterion}</span><h3>${esc(a.title)}</h3><p>${state.reviews[a.id]?'Revisión registrada':'Pendiente de revisar'}</p>${link('#/codigo/'+a.id,'Repasar código')}</article>`).join('')}</div></section>`+
      `<section class="content-section"><h2>Casos de prueba de las ocho relaciones</h2><div class="academy-grid">${Array.from({length:8},(_,i)=>'relacion-'+(i+1)).map(id=>`<article class="panel"><h3>${esc(pkg(id).title)}</h3><p>${practiceCases.filter(c=>c.packageId===id).length} casos con preparación, acción, resultado y motivo.</p>${link('#/casos/'+id,'Comprobar la relación')}</article>`).join('')}</div></section>`;
  }
  function reviewBox(a) {return `<label class="review-box"><input type="checkbox" data-review="${a.id}"${state.reviews[a.id]?' checked':''}> He contrastado mi solución con las comprobaciones. Esto no cambia automáticamente mi valoración del criterio.</label>`;}
  function challengePage(id) {
    const a=challenges.find(c=>c.id===id);if(!a)return null;
    return heading('RETO · '+a.criterion,esc(a.title),'Trabaja primero en una copia del proyecto en Visual Studio. Consulta ayuda solo cuando la necesites.')+tabs('entrenar')+notice+
      `<article class="panel activity-reader"><h2>Qué tienes que hacer</h2><ul>${a.requirements.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><h2>Cómo comprobarlo</h2><p>${esc(a.verification)}</p><details data-help="${a.id}" data-level="1"><summary>Necesito una primera pista</summary><p>${esc(a.hints[0])}</p><details data-help="${a.id}" data-level="2"><summary>Ver una segunda pista</summary><p>${esc(a.hints[1])}</p></details></details><details data-help="${a.id}" data-level="3"><summary>Consultar solución razonada</summary><p>${esc(a.solution)}</p></details>${reviewBox(a)}${statusSelect(a.criterion)}<p>Ayuda consultada anteriormente: ${state.help[a.id]===3?'solución':state.help[a.id]===2?'dos pistas':state.help[a.id]===1?'primera pista':'ninguna'}. Abrir ayuda no modifica tu valoración personal.</p>${sources(a)}</article>`;
  }
  function codePage(id) {
    const a=codeActivities.find(c=>c.id===id);if(!a)return null;
    return heading('CÓDIGO · '+a.criterion,esc(a.title),a.kind==='corregir'?'Localiza el fallo, explica su efecto y propone una corrección.':'Explica el recorrido de los datos antes de abrir la respuesta.')+tabs('entrenar')+notice+
      `<article class="panel activity-reader"><p class="source-notice">${a.kind==='corregir'?'Fragmento didáctico con error deliberado.':'Fragmento didáctico parcial para razonar; no es un archivo completo compilable.'} Los archivos de referencia del paquete permanecen intactos.</p>${codeBlock(a.code,'Ejemplo didáctico · '+a.kind)}<details data-help="${a.id}" data-level="3"><summary>Contrastar mi respuesta</summary><p>${esc(a.answer)}</p><h2>Una explicación completa debe incluir</h2><ul>${a.checks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>${reviewBox(a)}${statusSelect(a.criterion)}${sources(a)}</article>`;
  }
  function casesPage(id) {
    const cases=practiceCases.filter(c=>c.packageId===id);if(!cases.length)return null;
    return heading('COMPROBACIÓN PRÁCTICA',esc(pkg(id).title),'Ejecuta cada caso en la aplicación. El estado registra tu comprobación manual; la web no ejecuta MAUI.')+tabs('entrenar')+notice+
      `<section class="panel"><h2>Preparación</h2><p>${esc(cases[0].preparation)}</p><div class="academy-actions">${link('#/taller/'+id,'Abrir taller')}${link('#/solucion/'+id,'Consultar archivos y fuentes')}</div></section><div class="table-scroll case-table" tabindex="0" role="region" aria-label="Casos de comprobación con desplazamiento horizontal"><table class="study-table"><caption>Casos de ${esc(pkg(id).title)}</caption><thead><tr><th>Preparación y origen</th><th>Entrada o acción</th><th>Resultado esperado</th><th>Por qué comprobarlo</th><th>Mi resultado</th></tr></thead><tbody>${cases.map(c=>`<tr><td>${esc(c.preparation)}<br><small>${esc(c.origin)}</small></td><td>${esc(c.action)}</td><td>${esc(c.expected)}</td><td>${esc(c.why)}</td><td><label><span class="sr-only">Resultado de ${esc(c.action)}</span><select data-case="${c.id}">${Object.entries(caseLabels).map(([v,t])=>`<option value="${v}"${(state.cases[c.id] || 'pendiente')===v?' selected':''}>${t}</option>`).join('')}</select></label></td></tr>`).join('')}</tbody></table></div>`;
  }
  function diagnosticPage(params) {
    const ra=['RA1','RA3','RA4'].includes(params.get('ra'))?params.get('ra'):'all';
    const questions=diagnosticQuestions.filter(q=>ra==='all' || q.criterion.startsWith(ra+'-'));
    const finished=!diagnosticRetry && questions.every(q=>Object.hasOwn(state.answers,q.id));
    return heading('DIAGNÓSTICO','Comprueba cada criterio.','Responde sin consultar la solución. Recibirás corrección y explicación al terminar el bloque elegido.')+tabs('diagnostico')+notice+
      `<section class="panel"><label>Diagnóstico completo o por RA<select id="diagnostic-ra">${['all','RA1','RA3','RA4'].map(v=>`<option value="${v}"${v===ra?' selected':''}>${v==='all'?'Completo · 32 preguntas':v}</option>`).join('')}</select></label><p>${questions.length} preguntas en este bloque. Cada criterio tiene dos preguntas.</p></section>`+
      (finished?`<section class="panel" id="diagnostic-result" tabindex="-1"><h2>Resultados del bloque</h2><p>${questions.filter(q=>state.answers[q.id]===q.answer).length} aciertos de ${questions.length}. Es un diagnóstico de estudio, no una nota de examen.</p><button class="button" data-diagnostic-retry>Reintentar sin mostrar respuestas</button></section><div class="academy-grid">${criteria.filter(c=>ra==='all'||c.id.startsWith(ra+'-')).map(c=>{const e=criterionEvidence(c.id,state);return `<article class="panel"><h3>${c.id} · ${esc(c.title)}</h3><p>${e.correct} aciertos · ${e.wrong} errores</p>${questions.filter(q=>q.criterion===c.id).map(q=>`<details><summary>${state.answers[q.id]===q.answer?'Correcta':'Revisar'} · ${esc(q.prompt)}</summary><p>Tu respuesta: ${esc(q.options[state.answers[q.id]])}</p><p>Respuesta correcta: ${esc(q.options[q.answer])}</p><p>${esc(q.explanation)}</p></details>`).join('')}${link('#/leccion/'+c.lessons[0],'Repasar explicación')}${link('#/reto/'+challenges.find(a=>a.criterion===c.id).id,'Practicar el criterio')}</article>`;}).join('')}</div>`:
      `<form id="diagnostic-form" data-ra="${ra}">${questions.map((q,i)=>`<fieldset class="panel diagnostic-question"><legend>${i+1}. ${esc(q.prompt)}</legend><p>${q.criterion}</p>${q.options.map((o,n)=>`<label><input type="radio" name="${q.id}" value="${n}" required> ${esc(o)}</label>`).join('')}</fieldset>`).join('')}<button class="button" type="submit">Terminar y corregir ${questions.length} preguntas</button></form>`);
  }
  function notebook() {
    const entries=notebookQuestions.filter(q=>state.errors[q.id]);
    return heading('CUADERNO DE ERRORES','Convierte cada fallo en una explicación.','Aquí aparecen errores del diagnóstico y de las preguntas por lección. La respuesta se consulta después de intentar resolverlo.')+tabs('cuaderno')+
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
    if(![...challenges,...codeActivities].some(a=>ids.includes(a.criterion)))return '';
    return `<section class="panel"><h2>Practica lo que estudias</h2><div class="academy-actions">${challenges.filter(a=>ids.includes(a.criterion)).map(a=>link('#/reto/'+a.id,a.title)).join('')}${codeActivities.filter(a=>ids.includes(a.criterion)).map(a=>link('#/codigo/'+a.id,a.kind==='corregir'?'Corregir: '+a.title:'Explicar: '+a.title)).join('')}</div></section>`;
  }
  function search(term) {
    const normalize=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const terms=normalize(term).trim().split(/\s+/).filter(Boolean);
    if(!terms.length)return '';
    const matches=[...challenges.map(a=>({...a,href:'#/reto/'+a.id})),...codeActivities.map(a=>({...a,href:'#/codigo/'+a.id}))].filter(a=>terms.every(t=>normalize(JSON.stringify(a)).includes(t)));
    return matches.length?`<section class="result-group"><h2>Retos y código razonado · ${matches.length}</h2>${matches.map(a=>`<a class="result-item" href="${a.href}"><small>${a.criterion}</small><strong>${esc(a.title)}</strong></a>`).join('')}</section>`:'';
  }
  function setExamDate(value) {state.plan.examDate=value;return save();}
  function render(route,params,id) {
    const pages={hoy:todayReviews,sesion:sessionPage,simulacro:mockPage,entrenar:()=>training(params),diagnostico:()=>diagnosticPage(params),reto:()=>challengePage(id),codigo:()=>codePage(id),casos:()=>casesPage(id),cuaderno:notebook,progreso:backupPage};
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
      if(el.id==='training-ra' || el.id==='training-topic') {const q=new URLSearchParams();const ra=document.getElementById('training-ra').value,t=document.getElementById('training-topic').value;if(ra!=='all')q.set('ra',ra);if(t)q.set('tema',t);location.hash='#/entrenar'+(q.size?'?'+q:'');return;}
      if(el.id==='diagnostic-ra') {diagnosticRetry=false;location.hash='#/diagnostico'+(el.value==='all'?'':'?ra='+el.value);return;}
      if(el.matches('[data-criterion-status]')) {state.statuses[el.dataset.criterionStatus]=el.value;const saved=save();if(location.hash.startsWith('#/rubrica')){const id=el.dataset.criterionStatus;refresh();document.querySelector(`[data-criterion-status="${id}"]`)?.focus({preventScroll:true});}if(saved)notify('Valoración personal guardada; los resultados de las pruebas no cambian.');return;}
      if(el.matches('[data-lesson-note]')) {state.notes[el.dataset.lessonNote]=el.value.slice(0,10000);if(save())notify('Nota guardada.');return;}
      if(el.matches('[data-session-step]')) {session.steps[Number(el.dataset.sessionStep)].done=el.checked;return;}
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
        state=queueErrors(gradeDiagnostic(state,answers),localToday(),state.plan.examDate);diagnosticRetry=false;activity('#/diagnostico'+(ra==='all'?'':'?ra='+ra),'Diagnóstico '+(ra==='all'?'completo':ra));refresh();document.getElementById('diagnostic-result')?.focus();
      }
      if(event.target.matches('[data-spaced]')) {
        event.preventDefault();const form=event.target,id=form.dataset.spaced,q=notebookQuestions.find(n=>n.id===id),value=new FormData(form).get('answer');
        if(value===null)return;
        const correct=Number(value)===q.answer,next=scheduleReview(state.spaced[id],correct,localToday(),state.plan.examDate);
        if(next)state.spaced[id]=next;else delete state.spaced[id];
        if(correct && state.errors[id])state.errors[id].reviewed=true;
        save();form.querySelector('button').remove();form.querySelector('.feedback').classList.toggle('correct',correct);
        form.querySelector('.feedback').textContent=`${correct?'Correcto.':'Respuesta: '+q.options[q.answer]+'.'} ${q.explanation} ${next?'Volverá el '+next.due+'.':'Sale de la cola de repaso.'}`;
      }
      if(event.target.id==='mock-form') {
        event.preventDefault();
        state.mocks.push({at:new Date().toISOString(),minutes:state.activeMock.minutes,results:Object.fromEntries(new FormData(event.target))});
        state.activeMock=null;mockFinished=false;if(save())notify('Simulacro guardado.');refresh();
      }
      if(event.target.matches('[data-error-note]')) {
        event.preventDefault();const form=event.target, data=new FormData(form);
        state.errors[form.dataset.errorNote]={note:String(data.get('note')).slice(0,10000),reviewed:data.has('reviewed')};if(activity('#/cuaderno','Revisión de errores'))notify('Revisión guardada.');
        const summary=document.getElementById('error-summary');if(summary)summary.textContent=`${Object.values(state.errors).filter(e=>!e.reviewed).length} errores pendientes de revisar · ${Object.keys(state.errors).length} registrados.`;
        const title=form.querySelector('h2');title.nextElementSibling.textContent=title.nextElementSibling.textContent.replace(/Pendiente de revisar|Revisado/,data.has('reviewed')?'Revisado':'Pendiente de revisar');
      }
    });
    document.addEventListener('click',event=>{
      if(event.target.closest('[data-session-start]')){startSession();refresh();}
      if(event.target.closest('[data-session-finish]')){session.finished=true;refresh();}
      if(event.target.closest('[data-mock-start]')){state.activeMock={...pickMock(state.mocks.length),startedAt:new Date().toISOString(),minutes:Number(document.getElementById('mock-minutes').value)};mockFinished=false;save();refresh();}
      if(event.target.closest('[data-mock-finish]')){mockFinished=true;refresh();}
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
  return {render,bind,search,lessonActivities,touchRoute,syncLegacy,nextStep,pendingPanel,tabs,noteBox,todayPlan,rubricMap,tickMock,setExamDate,state:()=>state};
}
