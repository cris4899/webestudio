import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, referenceCards } from '../data/course.mjs';
import { referenceDetails } from '../data/reference-details.mjs';
import { searchCourse } from '../lib.mjs';

test('Consulta: las 19 fichas tienen desarrollo, propiedades, ejemplos y comprobaciones',()=>{
  assert.equal(referenceCards.length,19);
  assert.deepEqual(Object.keys(referenceDetails).sort(),referenceCards.map(c=>c.id).sort());
  assert.equal(referenceCards.reduce((sum,c)=>sum+c.examples.length,0),38);
  for(const c of referenceCards){
    assert.ok(c.explanation.length>=3,c.id);
    assert.ok(c.properties.length>=3,c.id);
    assert.ok(c.examples.length>=2,c.id);
    assert.ok(c.pitfalls.length>=2 && c.check.length>60,c.id);
    assert.ok(c.explanation.every(p=>p.length>100),c.id);
    for(const p of c.properties)assert.ok(p.name && p.use);
    for(const ex of c.examples){
      assert.ok(ex.title && ex.filename && ex.context && ex.code && ex.result,c.id);
      assert.ok(ex.steps.length>=3,c.id);
      assert.doesNotMatch(ex.code,/\bvar\b/,c.id);
    }
  }
});
test('Consulta: el buscador encuentra la explicación y el código de las fichas',()=>{
  for(const [query,id] of [['CambiarOpacidad','boxview'],['IsPassword','controles'],['AspectFill','image'],['MayoriaEdad','fecha'],['EspacioExtension','extensiones']]){
    assert.ok(searchCourse(query,lessons,[],referenceCards).references.some(c=>c.id===id),query);
  }
});
test('Consulta: ejemplos relacionados mantienen nombres de página, eventos y controles coherentes',()=>{
  const controls=referenceDetails.controles.examples;
  assert.match(controls[0].code,/x:Class="Aula.EjemploPage"/);
  assert.match(controls[1].code,/partial class EjemploPage : ContentPage/);
  assert.match(controls[0].code,/Clicked="Saludar"/);
  assert.match(controls[1].code,/private void Saludar\(object sender, EventArgs e\)/);
  for(const name of ['nombreEntry','resultadoLabel'])assert.ok(controls[0].code.includes(`x:Name="${name}"`) && controls[1].code.includes(name));
  const slider=referenceDetails.boxview.examples;
  assert.match(slider[0].code,/ValueChanged="CambiarOpacidad"/);
  assert.match(slider[1].code,/muestra\.Opacity = porcentaje \/ 100\.0/);
  assert.match(slider[1].code,/porcentajeLabel is null \|\| muestra is null/);
  assert.match(referenceDetails.fecha.examples[1].code,/DateTime\? seleccion/);
  assert.match(referenceDetails.formato.examples[0].code,/\\A\[0-9\]/);
});
