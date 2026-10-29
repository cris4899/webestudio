export const referenceCategories = [
  {id:'controles-layouts',title:'Controles y distribución',description:'Qué muestra cada control y cómo colocar los elementos.',cards:['controles','boxview','image','stack','grid','espacios','fecha','formato']},
  {id:'codigo-navegacion',title:'Código, componentes y navegación',description:'Cómo se conectan los archivos, los eventos y las pantallas.',cards:['xaml','eventos','modelo','herencia','bibliotecas','shell','errores']},
  {id:'recursos-estilos',title:'Recursos, estilos y plataformas',description:'Cómo reutilizar valores y adaptar la presentación.',cards:['extensiones','recursos','estilos','plataforma']},
];

export const studyPaths = [
  {title:'1. Entiende los conceptos',text:'Estudia las lecciones de cada unidad y consulta el material del profesor.',label:'Estudiar la unidad 2',href:'#/unidad/UD2'},
  {title:'2. Resuelve las prácticas',text:'Trabaja en Visual Studio con los talleres guiados y compara las variantes.',label:'Ir a las prácticas',href:'#/practica'},
  {title:'3. Comprueba lo aprendido',text:'Repasa por lecciones y revisa el motivo de cada respuesta.',label:'Abrir autoevaluación',href:'#/autoevaluacion'},
];

export function practiceGroups(lessons) {
  const groups=[];
  for(const lesson of lessons.filter(l=>l.tag.startsWith('Relación') || l.id.startsWith('learn-'))) {
    let group=groups.find(g=>g.id===lesson.guide.packageId);
    if(!group){group={id:lesson.guide.packageId,lessons:[]};groups.push(group);}
    group.lessons.push(lesson);
  }
  return groups;
}
