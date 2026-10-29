"""Genera fragmentos pequeños del código canónico para los talleres."""
from pathlib import Path
import json
import re

ROOT=Path(__file__).resolve().parent.parent
parts=json.loads((ROOT/'.study-cache/csharp-parts.json').read_text(encoding='utf-8'))
output={path:[{k.lower():v for k,v in part.items()} for part in values] for path,values in parts.items()}

for path in sorted((ROOT/'solutions').glob('relacion-*/*/*')):
    if path.suffix not in {'.xaml','.csproj'}:continue
    source=path.read_text(encoding='utf-8-sig')
    key=path.relative_to(ROOT/'solutions').as_posix()
    nodes=[];stack=[]
    for match in re.finditer(r'<!--.*?-->|</?[A-Za-z_][^>]*>',source,re.S):
        tag=match.group()
        if tag.startswith('<!--'):continue
        if tag.startswith('</'):
            node=stack.pop();node['end']=match.end();continue
        name=re.match(r'<([^\s/>]+)',tag).group(1)
        node={'name':name,'start':match.start(),'opening':match.end(),'end':match.end(),'children':[],'tag':tag}
        if stack:stack[-1]['children'].append(node)
        else:nodes.append(node)
        if not tag.endswith('/>'):stack.append(node)
    result=[]
    def add(node,opening=False):
        code=source[node['start']:node['opening'] if opening else node['end']]
        # Solo se añaden saltos entre atributos; no se cambian sus valores.
        display=re.sub(r'\s+([\w:.]+)=',r'\n    \1=',code)
        result.append({'name':node['name'],'kind':'etiqueta','code':code,'display':display,'context':'Etiqueta de apertura: conserva los hijos y el cierre del archivo.' if opening and node['children'] else 'Elemento XAML dentro de su contenedor; no sustituye el archivo completo.','line':source.count('\n',0,node['start'])+1})
    def visit(node,root=False):
        if path.suffix=='.csproj':
            if node['name'] in {'OutputType','TargetFrameworks','UseMaui','SingleProject','ProjectReference'}:add(node)
            else:
                for child in node['children']:visit(child)
            return
        code=source[node['start']:node['end']]
        if not root and (not node['children'] or (len(code)<650 and len(node['children'])<=4)):
            add(node);return
        add(node,True)
        children=node['children'];index=0
        while index<len(children):
            child=children[index]
            row=re.search(r'Grid.Row="([^"]+)"',child['tag'])
            if node['name']=='Grid' and child['name']=='Button' and row:
                last=index
                while last+1<len(children) and children[last+1]['name']=='Button' and f'Grid.Row="{row.group(1)}"' in children[last+1]['tag']:last+=1
                if last>index:
                    grouped={**child,'name':'Fila de botones '+row.group(1),'end':children[last]['end']}
                    add(grouped);index=last+1;continue
            visit(child);index+=1
    for node in nodes:visit(node,True)
    output[key]=result

(ROOT/'data/workshop-parts.mjs').write_text('// Generado desde los archivos de los ZIP: no editar a mano.\nexport default '+json.dumps(output,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print(f'{len(output)} archivos con fragmentos de sintaxis para los talleres.')
