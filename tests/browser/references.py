"""Comprueba las 19 fichas ampliadas, XML, enlaces y copia de código con Chromium."""
import json
import os
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
ROOT=Path(__file__).resolve().parents[2]
BASE=os.environ.get('STUDY_BASE_URL','http://127.0.0.1:4190/')
cards=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {referenceCards} from './data/course.mjs'; console.log(JSON.stringify(referenceCards))"],cwd=ROOT))
for card in cards:
    for example in card['examples']:
        if example['code'].lstrip().startswith('<'):
            ET.fromstring('<Root xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:local="clr-namespace:Aula">'+example['code']+'</Root>')
errors=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    context=browser.new_context(viewport={'width':1440,'height':1000},permissions=['clipboard-read','clipboard-write'])
    page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
    for width,height in [(1440,1000),(390,844)]:
        page.set_viewport_size({'width':width,'height':height})
        for theme in ['light','dark']:
            page.goto(BASE);page.locator('h1').wait_for()
            page.evaluate('(theme)=>{document.documentElement.dataset.theme=theme;localStorage.setItem("aula-interfaces.tema",theme)}',theme)
            for card in cards:
                page.goto(BASE+'#/consulta?ficha='+card['id'])
                article=page.locator('#ficha-'+card['id'])
                expect(article.locator('.concept-detail')).to_have_attribute('open','')
                expect(article.locator('.reference-example')).to_have_count(2)
                expect(article.locator('.code-block code').first).to_be_visible()
                assert page.locator('h1').count()==1
                size=page.evaluate('({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})')
                assert size['scroll']<=size['client']+1,(width,theme,card['id'],size)
                assert len(article.locator('.reference-explanation').inner_text())>1200
            page.goto(BASE+'#/consulta?ficha=boxview')
            expect(page.locator('#ficha-boxview .concept-detail')).to_have_attribute('open','')
            page.locator('#ficha-boxview').scroll_into_view_if_needed()
            page.screenshot(path=f'/tmp/references-{width}-{theme}.png',full_page=False)
    # All cards have an explicit opening control. Keyboard expansion and copy work.
    page.goto(BASE+'#/consulta');page.locator('h1').wait_for()
    assert page.locator('.reference-card').count()==19
    assert page.locator('.reference-card details[open]').count()==0
    summary=page.locator('#ficha-controles > details > summary');summary.focus();page.keyboard.press('Enter')
    expect(page.locator('#ficha-controles > details')).to_have_attribute('open','')
    page.locator('#ficha-controles .copy-button').first.click()
    expect(page.locator('#ficha-controles .copy-button').first).to_contain_text('Copiado')
    assert page.evaluate('navigator.clipboard.readText()')==cards[0]['examples'][0]['code']
    for lesson in ['xaml-layouts','contentview','learn-primera-app','edad','learn-recursos']:
        page.goto(BASE+'#/leccion/'+lesson)
        expect(page.locator('.lesson-concepts')).to_be_visible()
        page.locator('.lesson-concepts > details > summary').first.click()
        expect(page.locator('.lesson-concepts .reference-example').first).to_be_visible()
        size=page.evaluate('({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})')
        assert size['scroll']<=size['client']+1,(lesson,size)
    page.goto(BASE+'#/buscar?q=CambiarOpacidad');page.locator('h1').wait_for()
    page.locator('a[href="#/consulta?ficha=boxview"]').click()
    expect(page.locator('#ficha-boxview > details')).to_have_attribute('open','')
    context.close();browser.close()
assert not errors,errors
print('Consulta: XML válido; 19 fichas × 2 tamaños × 2 temas (76 vistas), ejemplos visibles, copia exacta, teclado, enlaces de búsqueda y lecciones: OK.')
