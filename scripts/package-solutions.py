"""Empaqueta únicamente fuentes y recursos; exporta el mismo código para la web."""
from pathlib import Path
import subprocess
import json
import hashlib
import zipfile
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parent.parent
meta=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {solutionGuides} from './data/solution-guides.mjs';console.log(JSON.stringify(solutionGuides))"],cwd=ROOT).decode('utf-8'))
report_path=ROOT/'.study-cache/build-report.json'
report=json.loads(report_path.read_text(encoding='utf-8-sig')) if report_path.exists() else []
output=[]
for item in meta:
    folder=ROOT/'solutions'/item['id']
    projects=sorted(folder.rglob('*.csproj'))
    assert projects, item['id']
    slnx=ET.Element('Solution')
    for project in projects:
        group=ET.SubElement(slnx,'Folder',Name='/'+project.parent.name+'/')
        ET.SubElement(group,'Project',Path=project.relative_to(folder).as_posix())
    ET.indent(slnx)
    (folder/'Soluciones.slnx').write_text(ET.tostring(slnx,encoding='unicode'),encoding='utf-8')
    lines=['# '+item['title'],'','Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.','','## Abrir y compilar','', 'Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.','', 'Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:', '', '```powershell', 'dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0','```','','## Orden de lectura','']
    lines += [f'{i+1}. {step}' for i,step in enumerate(item['order'])]
    lines += ['','## Casos de comprobación','','| Entrada / acción | Resultado esperado |','| --- | --- |']+[f'| {a} | {b} |' for a,b in item['cases']]
    lines += ['','## Procedencia y decisiones','',item['notes'],'']+[ref.get('url',ref.get('path',''))+(' · páginas '+','.join(map(str,ref['pages'])) if ref.get('pages') else '') for ref in item['sources']]
    lines += ['','## Proyectos y comprobación Windows','']
    builds=[]
    for p in projects:
        relative=p.relative_to(ROOT).as_posix()
        result=next((x for x in report if x['project']==relative),None)
        builds.append({'project':p.relative_to(folder).as_posix(),'success':bool(result and result['success']),'target':'net10.0-windows10.0.19041.0'})
        lines.append('- '+p.relative_to(folder).as_posix()+': '+('compilación Windows superada' if result and result['success'] else 'compilación pendiente o fallida'))
    lines += ['','No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.']
    (folder/'README.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
    files=[]
    paths=[]
    for path in sorted(folder.rglob('*')):
        if not path.is_file() or set(path.relative_to(folder).parts)&{'bin','obj','.vs','.git'} or path.name.endswith(('.user','.suo','.log')):continue
        raw=path.read_bytes();entry={'path':path.relative_to(folder).as_posix(),'size':len(raw),'sha256':hashlib.sha256(raw).hexdigest()}
        if path.suffix.lower() in ('.cs','.xaml','.csproj','.slnx','.json','.xml','.plist','.manifest','.svg','.md','.txt','.props','.targets','.xcprivacy') or 'LICENSE' in path.name:
            entry['code']=raw.decode('utf-8-sig')
        files.append(entry);paths.append(path)
    download=ROOT/'downloads'/(item['id']+'.zip');download.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(download,'w',zipfile.ZIP_DEFLATED) as z:
        for path in paths:z.write(path,path.relative_to(folder).as_posix())
    with zipfile.ZipFile(download) as z:
        assert z.testzip() is None
        assert set(z.namelist())=={f['path'] for f in files}
        for f in files:assert hashlib.sha256(z.read(f['path'])).hexdigest()==f['sha256']
    output.append({**item,'files':files,'builds':builds,'download':download.relative_to(ROOT).as_posix(),'sha256':hashlib.sha256(download.read_bytes()).hexdigest(),'size':download.stat().st_size})
(ROOT/'data/solutions.json').write_text(json.dumps(output,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'{len(output)} ZIP comprobados y fuentes exportados a la web.')
