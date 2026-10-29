# Verificación SDD

## Estudio exhaustivo, tipos explícitos y botones · 29 de octubre de 2026

- Ocho talleres con 846 micro pasos agrupados por bloques. Los pasos anteriores siguen siendo accesibles por sus identificadores. Cada micro paso contiene como máximo un fragmento y ofrece motivo, ubicación, lectura línea a línea en español y acceso plegado al archivo completo.
- Se traducen los comentarios de las soluciones adaptadas, incluidos los de plataforma, proyecto y módulos Learn. Las licencias y los archivos originales del profesor permanecen intactos.
- C# utiliza tipos explícitos en las soluciones y ejemplos de las lecciones. Se reemplaza también el patrón `var op` por `char op`; las pruebas impiden reintroducir var en los fuentes didácticos.
- Roslyn comprueba que la normalización de espacios conserva los tokens. Los 36 proyectos vuelven a compilar para Windows; las pruebas C# de lógica y las doce pruebas Node se superan. Los 13 ZIP se regeneran y se cotejan sus hashes con los fuentes mostrados.
- Las acciones de prácticas, talleres, descargas y grupos equivalentes se presentan como botones, con 20 px de separación entre filas y columnas y altura mínima de 44 px. No se atribuye ejecución Android/iOS a estas comprobaciones.

## Talleres Visual Studio · 29 de octubre de 2026

- Ocho talleres y 68 pasos, con todas las variantes de las relaciones. Cada paso indica acción, explicación, archivos y comprobación; el código se obtiene del manifiesto verificado de los ZIP.
- Diez pruebas Node: se añaden cobertura de los ocho talleres, identificadores únicos, referencias y fragmentos de código existentes, búsqueda de explicaciones de taller y ausencia de emojis decorativos en la interfaz. Se mantienen las pruebas de compatibilidad del progreso anterior.
- El código MAUI, los ZIP y los originales no se modifican en esta ampliación; no se repite su compilación Windows. Los saltos añadidos a la presentación XAML solo separan etiquetas para facilitar lectura.
- Navegador: acceso desde Prácticas a los ocho talleres, cambio al siguiente paso y tabla final de casos. Revisión en escritorio y a 390×844 en tema claro, con documento de 375 px sin desbordamiento; el tema oscuro se revisó en escritorio. Se retiran los emojis y glifos decorativos Unicode de la interfaz; los botones de tema y menú usan texto.


Fecha: 28 de octubre de 2026.

## Guía completa · 29 de octubre de 2026

- 17 lecciones, 85 preguntas, 19 fichas de consulta y 13 paquetes ZIP. La matriz de cobertura está en coverage.md.
- Los 36 proyectos MAUI de los paquetes compilan para net10.0-windows10.0.19041.0. Se conserva resultado por proyecto en el README de cada paquete y en el manifiesto web.
- Las pruebas C# sobre los fuentes entregados comprueban límites de formulario y credenciales, operaciones y desbordamiento, estado del tablero, matrícula completa, cumpleaños/futuro/límite y Phoneword.
- Ocho pruebas Node superadas: cobertura, búsqueda, originales, archivos/hashes, compatibilidad exacta de preguntas y casillas publicadas, progreso corrupto y servidor/descargas.
- Se comprobó visualmente la disposición de formulario y Views de matrícula/edad en aplicaciones Windows, frente a las imágenes de los PDF. El control de entrada de la herramienta de escritorio no pudo enfocar esas ventanas; no se afirma una prueba manual de todos sus botones. Los casos de lógica se ejecutaron por separado.
- Navegador: solución oculta al inicio, código desplegable del mismo ZIP, consulta rápida, búsqueda de ProvideValue y adaptación a 390×844 en claro y oscuro sin desbordamiento de documento. Las tablas y código tienen desplazamiento interno.
- No se han ejecutado aplicaciones Android/iOS ni llamadas reales. La página Sunrise de Astronomy depende de su servicio original. El cálculo de propinas conserva la limitación de salida anterior al introducir texto inválido; se advierte junto al ejemplo.

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
