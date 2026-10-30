"""Extrae los fragmentos marcados de examples/EjemplosEstudio a data/lesson-examples-code.mjs.

Marcas: `// ejemplo:<id>` ... `// fin:<id>` (.cs) y `<!-- ejemplo:<id> -->` ... `<!-- fin:<id> -->` (.xaml, .csproj, .xml).
Falla si falta una marca, si hay un id duplicado, o si un id no coincide con data/lesson-examples.mjs.
"""
import json
import re
import subprocess
import sys
import textwrap
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PROYECTO = RAIZ / 'examples' / 'EjemplosEstudio'
SALIDA = RAIZ / 'data' / 'lesson-examples-code.mjs'
EXTENSIONES = {'.cs': 'csharp', '.xaml': 'xml', '.csproj': 'xml', '.xml': 'xml', '.appxmanifest': 'xml'}
MARCA = re.compile(r'^\s*(?://|<!--)\s*(ejemplo|fin):([a-z0-9-]+)\s*(?:-->)?\s*$')


def ids_declarados() -> dict:
    """Lee id y path de lesson-examples.mjs ejecutando Node, para no duplicar el formato."""
    js = "import('./data/lesson-examples.mjs').then(m=>console.log(JSON.stringify(m.lessonExamples.map(e=>[e.id,e.path]))))"
    salida = subprocess.run(['node', '-e', js], cwd=RAIZ, capture_output=True, text=True, encoding='utf-8')
    if salida.returncode != 0:
        sys.exit('No se pudo leer data/lesson-examples.mjs:\n' + salida.stderr)
    pares = json.loads(salida.stdout)
    ids = [p[0] for p in pares]
    repetidos = sorted({i for i in ids if ids.count(i) > 1})
    if repetidos:
        sys.exit('Ids repetidos en lesson-examples.mjs: ' + ', '.join(repetidos))
    return dict(pares)


def extraer() -> dict:
    encontrados = {}
    errores = []
    for ruta in sorted(PROYECTO.rglob('*')):
        if not ruta.is_file() or ruta.suffix not in EXTENSIONES:
            continue
        partes = ruta.relative_to(PROYECTO).parts
        if 'bin' in partes or 'obj' in partes:
            continue
        relativa = ruta.relative_to(RAIZ).as_posix()
        abiertos = {}
        lineas = ruta.read_text(encoding='utf-8').splitlines()
        for numero, linea in enumerate(lineas):
            m = MARCA.match(linea)
            if not m:
                continue
            tipo, ident = m.groups()
            if tipo == 'ejemplo':
                if ident in abiertos or ident in encontrados:
                    errores.append(f'{relativa}:{numero + 1}: id duplicado {ident}')
                abiertos[ident] = numero
            else:
                if ident not in abiertos:
                    errores.append(f'{relativa}:{numero + 1}: fin:{ident} sin ejemplo:{ident}')
                    continue
                cuerpo = lineas[abiertos.pop(ident) + 1:numero]
                if not any(c.strip() for c in cuerpo):
                    errores.append(f'{relativa}:{numero + 1}: fragmento vacío {ident}')
                codigo = textwrap.dedent('\n'.join(cuerpo)).strip('\n')
                encontrados[ident] = {'code': codigo, 'language': EXTENSIONES[ruta.suffix], 'path': relativa}
        for ident in abiertos:
            errores.append(f'{relativa}: ejemplo:{ident} sin fin:{ident}')
    if errores:
        sys.exit('\n'.join(errores))
    return encontrados


def main() -> None:
    declarados = ids_declarados()
    encontrados = extraer()
    errores = []
    for ident in sorted(set(declarados) - set(encontrados)):
        errores.append(f'Falta la marca del ejemplo {ident}')
    for ident in sorted(set(encontrados) - set(declarados)):
        errores.append(f'Marca sin usar en lesson-examples.mjs: {ident} ({encontrados[ident]["path"]})')
    for ident in sorted(set(declarados) & set(encontrados)):
        if declarados[ident] != encontrados[ident]['path']:
            errores.append(f'{ident}: path {declarados[ident]} no coincide con {encontrados[ident]["path"]}')
    if errores:
        sys.exit('\n'.join(errores))
    datos = {i: {'code': v['code'], 'language': v['language']} for i, v in sorted(encontrados.items())}
    texto = '// Generado por scripts/lesson-examples.py. No editar a mano.\nexport default ' + json.dumps(datos, ensure_ascii=False, indent=2) + ';\n'
    SALIDA.write_text(texto, encoding='utf-8', newline='\n')
    print(f'{len(datos)} ejemplos extraídos en {SALIDA.relative_to(RAIZ).as_posix()}')


if __name__ == '__main__':
    main()
