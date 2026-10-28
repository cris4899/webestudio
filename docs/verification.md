# Verificación SDD

Fecha: 28 de octubre de 2026.

## Ampliación: modo oscuro y progreso persistente

- Cinco pruebas automáticas superadas, incluyendo datos de estudio corruptos, identificadores desconocidos, respuestas fuera de rango, opción cero y restauración de casillas.
- Navegador local: casilla y respuesta correcta de relación 1 sobreviven a recarga. La misma casilla aparece marcada en Prácticas de clase. Tema claro y oscuro sobreviven a recarga. Revisión visual de portada oscura.
- Se conserva la clave anterior de lecciones completadas; las nuevas preferencias y los datos de ejercicios se guardan por separado para mantener el avance previo.
- El guardado sigue limitado al navegador y dominio; borrar sus datos elimina preferencias y progreso. Si no permite escribir en localStorage se avisa y se mantiene el estado durante la sesión.

| Criterio | Evidencia |
| --- | --- |
| AC1 · Navegación y búsqueda | Prueba automática de búsquedas sin tildes y términos múltiples en lecciones y fuentes. Navegador: «matricula» encuentra lecciones y relación 8; historial vuelve de un RAR a la biblioteca. |
| AC2 · Contenido | 12 lecciones con fuente, objetivos, explicación, práctica guiada, comprobaciones y pregunta razonada. Cobertura automática de referencias. Diferencias PDF/RAR señaladas en relaciones 1, 2 y 5; nombres de entrega de relación 8 preservados en la explicación. |
| AC3 · Originales | Inventario cotejado con los 16 archivos de las carpetas. 9 PDF, 17 páginas renderizadas, 5 RAR, 85 fuentes consultables y 20 enlaces de los dos listados. Navegador: páginas de relación 8 y despliegue de MiBoton.cs. |
| AC4 · Progreso | Navegador: marcar entorno → 8%; recargar conserva 1/12; desmarcar devuelve a 0%. Validación automática de JSON corrupto, valores desconocidos y duplicados. Código controla falta de localStorage; ese modo excepcional no se forzó en navegador. |
| AC5 · Autoevaluación | Navegador: respuesta incorrecta produce explicación, respuesta posterior correcta cambia la retroalimentación. La práctica usa los requisitos de los documentos, sin simulacro inventado. |
| AC6 · Accesibilidad y responsive | Revisión a 1280×900 y 390×844; móvil sin desbordamiento de documento, menú operativo, panel cerrado oculto a tecnologías de asistencia y código acotado. Labels, fieldsets, foco visible y salto a contenido implementados. No se ha ejecutado una auditoría de lector de pantalla o contraste automatizada. |
| AC7 · Entrega | npm test: cuatro pruebas. npm run build: dist generado con contenido y originales. Servidor: recursos y originales responden; acceso a .git, cachés y archivos no publicados rechazado. vercel.json prepara build y salida dist. |

## Límites de la revisión

- No se han compilado ni ejecutado aplicaciones MAUI. Los fragmentos nuevos se identifican como material didáctico que requiere integrarse con sus controles y namespaces.
- Los enlaces Learn originales se conservan. Se consultaron los módulos formativos y referencias oficiales; varias direcciones con viewFallbackFrom no se pudieron recuperar con la herramienta de lectura. No se afirma disponibilidad permanente de cada enlace.
- Las convenciones no especificadas en los PDF se indican como tales: alfabeto exacto para usuario/matrícula y cumpleaños de 29 de febrero. No se añaden restricciones de matrículas reales ni un criterio de evaluación atribuido al profesor.
- Tras la autorización posterior se ha creado el repositorio público cris4899/webestudio y el proyecto webestudio en Vercel, conectado a main. Primer despliegue confirmado como Deployed to Production en https://webestudio-three.vercel.app. En producción se verifican inicio, navegación y búsqueda. Se añade .gitattributes para impedir que Git normalice los listados originales.
- Los archivos originales no se modificaron. La importación y el renderizado generan datos y páginas de consulta; los RAR se descargan completos, incluidos sus metadatos originales.
