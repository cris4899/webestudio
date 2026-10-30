export const topics = [
  {id:'empezar',title:'Empezar con MAUI',unit:'UD2',summary:'Preparar el entorno y crear la primera aplicación.',lessons:['entorno','learn-primera-app']},
  {id:'xaml',title:'XAML y distribución',unit:'UD2',summary:'Colocar controles con pilas, Grid y marcado XAML.',lessons:['xaml-layouts','learn-layouts','learn-xaml']},
  {id:'eventos',title:'Eventos y datos',unit:'UD2',summary:'Validar entradas, reaccionar a eventos y generar interfaz desde código.',lessons:['formulario','calculadora','tablero']},
  {id:'navegacion',title:'Navegación',unit:'UD2',summary:'Moverse entre páginas con menú, pestañas y pila.',lessons:['navegacion','learn-multipagina']},
  {id:'controles',title:'Controles reutilizables',unit:'UD2',summary:'Especializar Views y componerlas en un ContentView.',lessons:['especializacion','contentview']},
  {id:'extensiones',title:'Extensiones y recursos',unit:'UD3-4',summary:'Adaptar valores por plataforma y reutilizarlos con extensiones y recursos.',lessons:['extensiones','recursos','extensiones-login','learn-recursos']},
  {id:'formularios',title:'Formularios completos',unit:'UD3-4',summary:'Matrícula, fechas y edad con controles propios.',lessons:['matricula','edad']},
];

export const topicOf = lessonId => topics.find(topic => topic.lessons.includes(lessonId));
