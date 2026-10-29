import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {rubricGroups, rubricSource, readRubricChecks} from '../data/rubric.mjs';
import {lessons} from '../data/course.mjs';

test('Rúbrica: cobertura completa, pesos originales por RA y lecciones existentes', async()=>{
  assert.deepEqual(rubricGroups.map(g=>[g.id,g.criteria.map(c=>[c.ce,c.weight])]),[
    ['RA1',[['AB',10],['C',15],['D',15],['E',15],['F',15],['G',20],['H',10]]],
    ['RA3',[['A',10],['B',15],['C',25],['DE',30],['F',5],['GH',15]]],
    ['RA4',[['ABC',30],['DE',30],['FGHI',40]]]
  ]);
  const ids=rubricGroups.flatMap(g=>g.criteria.map(c=>c.id));
  assert.equal(ids.length,16);assert.equal(new Set(ids).size,16);
  for(const g of rubricGroups){
    assert.equal(g.criteria.reduce((n,c)=>n+c.weight,0),100);
    for(const c of g.criteria){
      assert.ok(c.explanation && c.evidence && c.pitfall);
      assert.ok(c.lessons.length);
      for(const id of c.lessons)assert.ok(lessons.some(l=>l.id===id),id);
    }
  }
  assert.equal((await readFile(new URL('../'+rubricSource,import.meta.url))).subarray(0,5).toString(),'%PDF-');
});
test('Rúbrica: progreso independiente, corrupción y restauración sin ids ajenos',()=>{
  for(const raw of ['null','{}','{mal','3','"RA1-AB"'])assert.deepEqual([...readRubricChecks(raw)],[]);
  const checks=readRubricChecks('["RA1-AB","RA1-AB","RA3-DE","edad-0",null,5]');
  assert.deepEqual([...checks],['RA1-AB','RA3-DE']);
  assert.deepEqual(readRubricChecks(JSON.stringify([...checks])),checks);
});
