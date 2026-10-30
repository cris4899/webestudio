import tempfile
"""Pruebas de navegador opcionales: requiere Playwright y Chromium, sin dependencias de producción.
Ejecutar con el servidor iniciado: python3 tests/browser/training.py
"""
import json
import os
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

ROOT=Path(__file__).resolve().parents[2]
BASE=os.environ.get('STUDY_BASE_URL','http://127.0.0.1:4180/')
DATA=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {diagnosticQuestions,challenges,codeActivities,practiceCases} from './data/training.mjs'; console.log(JSON.stringify({diagnosticQuestions,challenges,codeActivities,practiceCases}));"],cwd=ROOT))
KEY='aula-interfaces.entrenamiento.v1'
errors=[]

def goto(page,route):
    page.goto(BASE+'#/'+route)
    page.locator('h1').wait_for()
    expect(page.locator('#contenido')).not_to_contain_text('La biblioteca no está disponible.')

def snapshot(page):
    return page.evaluate('key=>JSON.parse(localStorage.getItem(key))',KEY)

with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
    context=browser.new_context(viewport={'width':1440,'height':1000},accept_downloads=True)
    page=context.new_page()
    page.on('pageerror',lambda error:errors.append(str(error)))
    goto(page,'')
    assert 'Practicar' in ' '.join(page.locator('#nav a').all_text_contents())
    # Correct only after completing the selected diagnostic block.
    goto(page,'diagnostico?ra=RA1')
    qs=[q for q in DATA['diagnosticQuestions'] if q['criterion'].startswith('RA1-')]
    assert page.locator('#diagnostic-form fieldset').count()==14
    assert page.locator('#diagnostic-result').count()==0
    for q in qs:page.locator(f'input[name="{q["id"]}"][value="{(q["answer"]+1)%3}"]').check()
    page.get_by_role('button',name='Terminar y corregir 14 preguntas').click()
    expect(page.locator('#diagnostic-result')).to_contain_text('0 aciertos de 14')
    assert len(snapshot(page)['errors'])==14
    goto(page,'cuaderno')
    entry=page.locator('[data-error-note]').first
    entry.locator('textarea').fill('<script>alert("error")</script> Confundí clase y nombre. Corrección: x:Class. Comprobar al ejecutar.')
    entry.locator('[name=reviewed]').check()
    entry.get_by_role('button',name='Guardar revisión').click()
    page.reload();expect(page.locator('textarea').first).to_have_value('<script>alert("error")</script> Confundí clase y nombre. Corrección: x:Class. Comprobar al ejecutar.')
    assert page.locator('#contenido script').count()==0
    goto(page,'diagnostico?ra=RA1')
    page.get_by_role('button',name='Reintentar sin mostrar respuestas').click()
    assert page.locator('#diagnostic-result').count()==0
    for q in qs:page.locator(f'input[name="{q["id"]}"][value="{q["answer"]}"]').check()
    page.get_by_role('button',name='Terminar y corregir 14 preguntas').click()
    expect(page.locator('#diagnostic-result')).to_contain_text('14 aciertos de 14')
    assert all(e['reviewed'] for e in snapshot(page)['errors'].values())
    assert not snapshot(page)['statuses']
    # Diagnostic RA filter and full scope.
    goto(page,'diagnostico')
    assert page.locator('#diagnostic-form fieldset').count()==32
    page.locator('#diagnostic-ra').select_option('RA4')
    expect(page.locator('#diagnostic-form fieldset')).to_have_count(6)
    # Progressive hints and explicit independent valuation.
    challenge=DATA['challenges'][0]
    goto(page,'reto/'+challenge['id'])
    assert page.locator('details[open]').count()==0
    assert not page.locator('details[data-level="2"] summary').is_visible()
    page.locator('details[data-level="1"] > summary').click()
    page.locator('details[data-level="2"] > summary').click()
    page.locator('details[data-level="3"] > summary').click()
    page.wait_for_function('(key)=>JSON.parse(localStorage.getItem(key)).help["reto-ra1-ab"]===3',arg=KEY)
    page.locator('[data-review]').check()
    page.locator('[data-criterion-status]').select_option('solo')
    page.reload();expect(page.locator('[data-criterion-status]')).to_have_value('solo')
    assert page.locator('details[open]').count()==0
    # Cases persist and surface failures in the dashboard.
    goto(page,'casos/relacion-1')
    page.locator('[data-case]').first.select_option('fallido')
    page.reload();expect(page.locator('[data-case]').first).to_have_value('fallido')
    goto(page,'')
    expect(page.locator('#contenido')).to_contain_text('Revisar errores')
    expect(page.locator('.today')).to_contain_text('RA1-D')
    # Export / validation preview / apply / merge / replace.
    goto(page,'progreso')
    with page.expect_download() as result:page.get_by_role('button',name='Descargar copia JSON').click()
    download=result.value;download.save_as(str(Path(tempfile.gettempdir())/'study-progress.json'))
    exported=json.loads(Path(str(Path(tempfile.gettempdir())/'study-progress.json')).read_text());assert exported['version']==1
    before=page.evaluate('Object.fromEntries(Object.keys(localStorage).map(k=>[k,localStorage.getItem(k)]))')
    page.locator('#backup-file').set_input_files({'name':'incorrecto.json','mimeType':'application/json','buffer':b'{"version":99}'})
    expect(page.locator('#backup-preview')).to_contain_text('No se ha importado nada')
    assert before==page.evaluate('Object.fromEntries(Object.keys(localStorage).map(k=>[k,localStorage.getItem(k)]))')
    page.locator('#backup-file').set_input_files(str(Path(tempfile.gettempdir())/'study-progress.json'))
    expect(page.locator('#backup-mode')).to_have_value('combine')
    assert before==page.evaluate('Object.fromEntries(Object.keys(localStorage).map(k=>[k,localStorage.getItem(k)]))')
    page.get_by_role('button',name='Aplicar importación').click()
    expect(page.locator('#notice')).to_contain_text('Copia importada')
    # Replace must actually remove a newer local-only valuation.
    goto(page,'reto/reto-ra1-c');page.locator('[data-criterion-status]').select_option('ayuda')
    goto(page,'progreso');page.locator('#backup-file').set_input_files(str(Path(tempfile.gettempdir())/'study-progress.json'))
    page.locator('#backup-mode').select_option('replace');page.get_by_role('button',name='Aplicar importación').click()
    expect(page.locator('#notice')).to_contain_text('Copia importada')
    assert 'RA1-C' not in snapshot(page)['statuses']
    # Search connects new content and existing lesson links are preserved.
    goto(page,'buscar?q=contrato')
    expect(page.locator('#contenido')).to_contain_text('Retos y código razonado')
    goto(page,'leccion/contentview')
    expect(page.locator('#contenido')).to_contain_text('Practica lo que estudias')
    # Both explanation and defect pages render; answers are initially hidden.
    for a in DATA['codeActivities']:
        goto(page,'codigo/'+a['id'])
        assert page.locator('.code-block code').count()==1
        assert page.locator('details[open]').count()==0
        page.locator('details[data-help] > summary').click()
        expect(page.locator('#contenido')).to_contain_text('Una explicación completa debe incluir')
    # Original autoevaluation failures also enter the notebook without changing old ids.
    goto(page,'autoevaluacion?leccion=entorno')
    form=page.locator('form[data-quiz="entorno-0"]');form.locator('input[value="1"]').check();form.get_by_role('button',name='Comprobar respuesta').click()
    assert 'legacy-entorno-0' in snapshot(page)['errors']
    # Layout, themes, keyboard focus and screenshots.
    routes=['','entrenar','diagnostico?ra=RA3','reto/reto-ra3-c','codigo/codigo-r7-corregir','casos/relacion-8','rubrica','cuaderno','progreso','leccion/calculadora','taller/relacion-2']
    for width,height in [(1440,1000),(390,844)]:
        page.set_viewport_size({'width':width,'height':height})
        for theme in ['light','dark']:
            page.evaluate('(theme)=>{localStorage.setItem("aula-interfaces.tema",theme);document.documentElement.dataset.theme=theme}',theme)
            for route in routes:
                goto(page,route)
                assert page.locator('h1').count()==1,route
                sizes=page.evaluate('({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})')
                assert sizes['scroll']<=sizes['client']+1,(width,theme,route,sizes)
            goto(page,'');page.screenshot(path=f'/tmp/study-{width}-{theme}.png',full_page=True)
    page.set_viewport_size({'width':390,'height':844});goto(page,'')
    page.locator('#menu-toggle').click();expect(page.locator('#menu-toggle')).to_have_attribute('aria-expanded','true')
    page.keyboard.press('Escape');expect(page.locator('#menu-toggle')).to_have_attribute('aria-expanded','false')
    theme=page.locator('html').get_attribute('data-theme');page.locator('#theme-toggle').click()
    assert page.locator('html').get_attribute('data-theme')!=theme
    page.reload();assert page.locator('html').get_attribute('data-theme')!=theme
    page.set_viewport_size({'width':1440,'height':1000});goto(page,'reto/reto-ra1-ab')
    page.locator('details[data-level="1"] > summary').focus();page.keyboard.press('Enter')
    assert page.locator('details[data-level="1"]').get_attribute('open') is not None
    assert page.evaluate('document.activeElement.tagName')=='SUMMARY'
    page.keyboard.press('Tab');assert page.evaluate('document.activeElement.tagName')=='SUMMARY'
    # Completely blocked storage: all core activities and export remain usable.
    blocked=browser.new_context()
    blocked.add_init_script("Storage.prototype.getItem=function(){throw new Error('blocked')};Storage.prototype.setItem=function(){throw new Error('blocked')};Storage.prototype.removeItem=function(){throw new Error('blocked')};")
    bp=blocked.new_page();bp.on('pageerror',lambda error:errors.append(str(error)))
    goto(bp,'reto/reto-ra1-ab');bp.locator('[data-criterion-status]').select_option('ayuda')
    expect(bp.locator('#notice')).to_contain_text('No se puede guardar')
    goto(bp,'progreso')
    with bp.expect_download() as result:bp.get_by_role('button',name='Descargar copia JSON').click()
    result.value.save_as('/tmp/study-blocked.json')
    assert json.loads(json.loads(Path('/tmp/study-blocked.json').read_text())['storage'][KEY])['statuses']['RA1-AB']=='ayuda'
    bp.locator('#backup-file').set_input_files(str(Path(tempfile.gettempdir())/'study-progress.json'));bp.get_by_role('button',name='Aplicar importación').click()
    expect(bp.locator('#notice')).not_to_contain_text('Copia importada')
    blocked.close()
    # An empty browser restores exported progress after an explicit application.
    fresh=browser.new_context();fp=fresh.new_page();goto(fp,'progreso');fp.locator('#backup-file').set_input_files(str(Path(tempfile.gettempdir())/'study-progress.json'))
    assert not snapshot(fp)['statuses'];fp.get_by_role('button',name='Aplicar importación').click()
    assert snapshot(fp)['statuses']['RA1-AB']=='solo'
    fresh.close();context.close();browser.close()
assert not errors,errors
print('Navegador: diagnóstico, reintentos, ayudas, estados, errores, copias, compatibilidad, almacenamiento bloqueado, teclado y 52 vistas sin desbordamiento: OK.')
