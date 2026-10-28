"""Regenera la biblioteca con pypdf y los fuentes extraídos en .study-cache.
Extracción RAR: 7z x archivo.rar -o.study-cache/NOMBRE -ir!*.xaml -ir!*.cs
-ir!*.csproj -xr!bin -xr!obj -xr!.vs. Nunca ejecutar los proyectos importados.
"""
import json
from pathlib import Path
from pypdf import PdfReader
import pypdfium2

ROOT = Path(__file__).resolve().parent.parent
materials = []
for folder in ('UD2', 'UD3-4'):
    for path in sorted((ROOT / folder).iterdir()):
        if not path.is_file():
            continue
        item = dict(id=path.stem, unit=folder, name=path.name,
                    path=path.relative_to(ROOT).as_posix(), size=path.stat().st_size)
        if path.suffix == '.pdf':
            reader = PdfReader(path)
            images = []
            document = pypdfium2.PdfDocument(path)
            for index, page in enumerate(document):
                image = ROOT / 'assets' / 'pdf' / f'{path.stem}-{index + 1}.jpg'
                image.parent.mkdir(parents=True, exist_ok=True)
                page.render(scale=1.6).to_pil().convert('RGB').save(image, quality=90)
                images.append(image.relative_to(ROOT).as_posix())
            item.update(kind='pdf', pages=len(reader.pages),
                        images=images, text='\n\n'.join(p.extract_text() or '' for p in reader.pages))
        elif path.suffix == '.rar':
            source_root = ROOT / '.study-cache' / path.stem
            assert source_root.is_dir(), f'Extraer primero: {path.name}'
            sources = []
            for source in sorted(source_root.rglob('*')):
                if (source.is_file() and source.suffix in ('.cs', '.xaml', '.csproj')
                    and not set(source.parts) & {'bin', 'obj', '.vs', 'Platforms'}):
                    sources.append(dict(name=source.relative_to(source_root).as_posix(),
                                        code=source.read_text(encoding='utf-8-sig')))
            assert sources, f'Sin fuentes: {path.name}'
            item.update(kind='rar', sources=sources)
        else:
            text = path.read_text(encoding='utf-8-sig')
            item.update(kind='links', links=[s.strip() for s in text.splitlines() if s.startswith('https://')], text=text)
        materials.append(item)
(ROOT / 'data').mkdir(exist_ok=True)
(ROOT / 'data' / 'materials.json').write_text(json.dumps(materials, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'{len(materials)} materiales: ' + ', '.join(f'{k}: {sum(m["kind"] == k for m in materials)}' for k in ('pdf', 'rar', 'links')))
