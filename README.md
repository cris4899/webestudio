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

- 12 lecciones, 8 en UD2 y 4 en UD3-4.
- Explicaciones secuenciales, fragmentos identificados, guías de resolución y comprobaciones.
- Las ocho relaciones del profesor; sin supuestos nuevos de examen.
- Autoevaluación de 12 preguntas derivadas de los requisitos originales.
- Progreso de lecciones, casillas de práctica y respuestas comprobadas de autoevaluación guardados en este navegador y restaurados al volver. Las casillas se comparten entre la lección y la vista de prácticas.
- Selector de modo claro/oscuro con preferencia guardada; la primera visita utiliza el tema del sistema.
- Biblioteca con páginas de los PDF (17 páginas con imágenes), texto extraído y descarga del original.
- 85 archivos fuente consultables de los cinco RAR, sin ejecutar sus proyectos.
- Búsqueda sin tildes en lecciones, enunciados y código original.

Los originales se conservan sin modificación. Los apuntes son una elaboración didáctica, no soluciones oficiales. Los proyectos recibidos pueden ser parciales y no siempre coinciden con los requisitos del PDF; las diferencias detectadas se explican en sus lecciones. Los ejemplos MAUI deben integrarse en una aplicación con namespaces, controles y referencias adecuados. Esta web no compila ni ejecuta MAUI.

## SDD

El desarrollo sigue **Specification-Driven Development**: [especificación](docs/spec.md), [plan](docs/plan.md), criterios AC1–AC7 y [verificación](docs/verification.md). La restricción posterior de ceñirse al material del profesor está registrada en la especificación.

Mapa del proyecto:

| Archivo | Función |
| --- | --- |
| `data/course.mjs` | Lecciones, ejercicios derivados y preguntas |
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
