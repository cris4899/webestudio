# Aula de Interfaces

Web de estudio de Desarrollo de Interfaces, 2º DAM. Contenido basado en los materiales entregados en `UD2/` y `UD3-4/`: 9 PDF, 5 RAR y 2 listados con 20 enlaces a Microsoft Learn.

## Uso local

Requiere Node.js 20 o posterior. Sin paquetes de terceros ni instalación de dependencias.

```powershell
npm run dev
```

Abre http://127.0.0.1:4173. Para detener el servidor, Ctrl+C. Si el puerto está ocupado, configura `PORT` antes de iniciarlo. No abras index.html directamente: los módulos y la biblioteca se cargan por HTTP.

```powershell
npm test
npm run build
```

`dist/` contiene la web y los originales que se publicarán. No debe subirse como fuente a GitHub. El servidor de desarrollo sirve los archivos fuente de la web y los originales inventariados; Vercel publica el resultado de build.

## Qué incluye

- 17 lecciones: 12 en UD2 y 5 en UD3-4, con las ocho relaciones y los cinco módulos Learn enviados.
- Explicaciones secuenciales, fragmentos identificados, guías de resolución y comprobaciones.
- Las ocho relaciones del profesor; sin supuestos nuevos de examen.
- Autoevaluación de 85 preguntas razonadas y 19 fichas de consulta rápida.
- Guías de construcción, flujo de datos, requisitos previos y soluciones completas ocultas inicialmente para practicar antes de consultarlas.
- 13 proyectos descargables en ZIP: uno por relación y uno por módulo Learn. Incluyen todas sus variantes, 36 proyectos MAUI con compilación Windows comprobada, instrucciones y casos de verificación.
- Progreso de lecciones, casillas de práctica y respuestas comprobadas de autoevaluación guardados en este navegador y restaurados al volver. Las casillas se comparten entre la lección y la vista de prácticas.
- Selector de modo claro/oscuro con preferencia guardada; la primera visita utiliza el tema del sistema.
- Biblioteca con páginas de los PDF (17 páginas con imágenes), texto extraído y descarga del original.
- 85 archivos fuente consultables de los cinco RAR, sin ejecutar sus proyectos.
- Búsqueda sin tildes en lecciones, enunciados y código original.

Los originales se conservan sin modificación. Los apuntes y soluciones nuevas son elaboración didáctica, no soluciones oficiales del profesor. Los proyectos recibidos pueden ser parciales y no siempre coinciden con los requisitos del PDF; las diferencias se explican en sus lecciones. Los ZIP contienen proyectos completos y autónomos: abre Soluciones.slnx y selecciona el proyecto de inicio. Los fragmentos breves de las explicaciones siguen siendo ejemplos de integración. La web no compila ni ejecuta MAUI en el navegador.

Los módulos de Learn utilizan los repositorios de ejercicio que enlaza el profesor, conservan los archivos de licencia MicrosoftDocs e identifican las adaptaciones a MAUI 10. Las cifras no fijadas por el enunciado, el alfabeto de matrícula/usuario y la convención de fecha de 29 de febrero se documentan como decisiones del ejemplo.

## SDD

El desarrollo sigue **Specification-Driven Development**: [especificación](docs/spec.md), [plan](docs/plan.md), criterios AC1–AC7 y [verificación](docs/verification.md). La restricción posterior de ceñirse al material del profesor está registrada en la especificación.

Mapa del proyecto:

| Archivo | Función |
| --- | --- |
| `data/course.mjs` | Lecciones, ejercicios derivados y preguntas |
| `data/guide.mjs` | Ampliación didáctica, módulos Learn y consulta rápida |
| `data/solution-guides.mjs`, `data/solutions.json` | Pasos, casos y exportación exacta de los archivos de solución |
| `solutions/`, `downloads/` | Fuentes y ZIP de los 13 paquetes |
| `data/materials.json` | Inventario, texto de PDF y código extraído |
| `assets/pdf/` | Páginas renderizadas de los documentos originales |
| `app.mjs`, `lib.mjs` | Navegación, búsqueda, progreso y evaluación |
| `styles.css` | Diseño responsive, tarjetas y colores por unidad |
| `scripts/` | Build, servidor, importación y comprobaciones |
| `UD2/`, `UD3-4/` | Archivos originales |

## GitHub y Vercel

La web está publicada en [webestudio-three.vercel.app](https://webestudio-three.vercel.app) y el repositorio público está en [cris4899/webestudio](https://github.com/cris4899/webestudio).

El proyecto `webestudio` del equipo `cristobal4899-3492s-projects` está conectado a la rama `main`. Los cambios subidos a esa rama generan nuevos despliegues automáticamente. La configuración está en `vercel.json`: framework sin preset, build `npm run build`, salida `dist`.

Para actualizar: comprueba `npm test` y `npm run build`, guarda el commit y ejecuta `git push`. Respeta `.gitignore`: los originales, `data/` y `assets/` se versionan; `.study-cache/`, `dist/` y metadatos locales quedan excluidos. `.gitattributes` conserva los originales byte a byte, incluidos los saltos de línea de los listados.

No se necesitan variables de entorno ni base de datos. Las rutas usan hash y funcionan sin reglas de reescritura. El progreso del dominio público es independiente del navegador local porque el origen es distinto.

Los RAR suman unos 130 MB; el mayor ronda 56 MB. Se mantienen porque se pidió conservar todos los archivos. No se extraen cachés de Visual Studio ni binarios dentro de la web. Los enlaces Learn se conservan tal como fueron enviados; su contenido puede cambiar y algunos parámetros de versión pueden redirigir.

## Actualizar materiales

Para editar apuntes basta modificar `data/course.mjs`. Para cambiar PDF o proyectos, regenera la biblioteca; este paso de preparación opcional necesita Python con `pypdf`, `pypdfium2`, Pillow y 7-Zip. No se requiere Python en Vercel.

1. Extrae de cada RAR `.cs`, `.xaml` y `.csproj` a `.study-cache/NOMBRE_DEL_RAR/`, omitiendo `bin`, `obj` y `.vs`. El comando orientativo está en `scripts/import-materials.py`.
2. Ejecuta `python scripts/import-materials.py` para regenerar JSON e imágenes.
3. Actualiza el contenido según las nuevas fuentes y ejecuta `npm test` y `npm run build`.

No hay cuentas, backend, sincronización de progreso ni dependencias de producción. Borrar datos del navegador elimina el progreso guardado.

## Verificar y actualizar las soluciones

Los fuentes son la referencia. `scripts/package-solutions.py` exporta esos mismos archivos para la lectura web, comprueba SHA-256 y genera los ZIP excluyendo bin, obj y cachés. No compila nada durante el build de Vercel.

```powershell
./scripts/verify-solutions.ps1
dotnet run --project tests/logic/Logic.csproj
python scripts/package-solutions.py
npm test
npm run build
```

El comando de verificación compila los 36 proyectos para Windows y deja el informe en `.study-cache/build-report.json`. Los ZIP incluyen sus resultados por proyecto. La prueba C# usa directamente las clases de las soluciones: modelo, validaciones, operaciones, estados, fechas y traducción Phoneword. Las pruebas Node verifican cobertura, archivos, hashes y compatibilidad exacta del progreso anterior.

Los generadores `create-relations.py` y `create-learn.py` permiten reconstruir el punto de partida; no deben ejecutarse después de editar manualmente las soluciones sin incorporar antes los cambios al generador. Requieren la plantilla oficial MAUI en `.study-cache/maui-template` y los repositorios de ejercicio oficiales en `.study-cache/upstream-*`, indicados en el script. No los necesita el alumno que descarga un ZIP.

Límites: compilación verificada para Windows; no se afirma ejecución Android/iOS. Phoneword requiere marcador compatible y confirmación del usuario. Astronomy mantiene la dependencia de red del ejercicio oficial. Las limitaciones heredadas de los ejemplos se señalan junto a su solución.
## Resolver las relaciones desde Visual Studio

En Prácticas de clase, selecciona «Hacer la relación paso a paso en Visual Studio». Las ocho relaciones incluyen 846 micro pasos agrupados por bloques, con una acción, un fragmento, motivo y comprobación. El código se estudia línea a línea con notas en español. Los ejemplos C# y los ZIP usan tipos explícitos; los comentarios adaptados están traducidos. Las acciones se presentan como botones separados. Descarga el ZIP como base y referencia; reconstruye los archivos en una copia de trabajo. La web guía la práctica y Visual Studio compila y ejecuta MAUI. El paso actual queda en la URL; las casillas y el progreso anteriores conservan su funcionamiento. El código XAML del taller añade saltos entre etiquetas para facilitar la lectura, sin cambiar los valores. Los originales permanecen intactos.


Para regenerar los fragmentos después de editar las soluciones, aplica este orden antes de empaquetar:

```powershell
python scripts/spanish-sources.py
dotnet run --project scripts/study-code/StudyCode.csproj -- .
python scripts/workshop-parts.py
./scripts/verify-solutions.ps1
python scripts/package-solutions.py
npm test
npm run build
```

La herramienta StudyCode utiliza Roslyn incluido en el SDK .NET; no añade paquetes de producción. Comprueba que el espaciado no cambia los tokens C#. Los fragmentos conservan el código canónico y el archivo completo se ofrece plegado para situarlos.
