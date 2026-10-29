# Verificación SDD

## Revisión de interfaz y legibilidad · 29 de octubre de 2026

- Menú dividido en Estudiar, Practicar y Consultar. Portada con tres rutas de uso y ubicación con enlaces a los apartados superiores en las páginas internas.
- Prácticas: ocho fichas de relaciones y cinco de Learn; se agrupan los apartados de R7 y R8 sin duplicar ni cambiar los identificadores de sus casillas. Consulta rápida: las 19 fichas quedan repartidas en tres categorías sin omisiones. Descargas: relaciones y Learn por separado.
- Autoevaluación: bloques desplegables y selección por lección. Filtrar formulario muestra cinco preguntas y conserva la respuesta guardada con valor 0; se mantiene el índice original de lección para no cambiar el orden de opciones.
- Tipografía comprobada: texto de lectura 16 px, botones 14 px, código 13 px. Quince pruebas Node superadas y build completado.
- Navegador: doce pantallas principales revisadas en escritorio oscuro y móvil claro de 390×844. Cada pantalla presenta un solo h1 y no desborda horizontalmente (documento de 1265 px para ventana de 1280 y 375 px para ventana de 390).
- Recorrido: selección verde/blanco en claro (contraste 8,07:1), violeta/texto oscuro en oscuro (8,10:1). Se reutiliza su nodo al cambiar de paso; se comprobó desplazamiento idéntico de 519,33 px antes y después, con bloques abiertos conservados. El despliegue exterior del recorrido no se fuerza si el usuario lo ha cerrado.
- Revisión visual y funcional técnica; no sustituye pruebas de usabilidad con alumnos ni una auditoría completa con lector de pantalla. Los originales, código MAUI y ZIP no cambian en este incremento.

## Lógica importante, posición y comparaciones · 29 de octubre de 2026

- Se destacan reglas, eventos, estado y recursos; las explicaciones de declaraciones sencillas quedan desplegables. No se añaden pasos al recorrido de 177.
- La clave `aula-interfaces.ultimo-paso.v1` guarda el identificador válido por relación. Se aceptan alias anteriores y se rechazan datos corruptos o ajenos. La posición no marca tareas ni lecciones completadas.
- Ocho comparaciones muestran diferencias, comportamiento compartido, error frecuente y código del mismo paquete descargable. Las referencias de archivo se verifican automáticamente y el buscador incluye sus explicaciones.
- Catorce pruebas Node superadas, incluyendo posiciones corruptas, alias, relaciones independientes y fuentes de comparaciones. Navegador local: avanzar a la segunda parte de estado de calculadora, abrir comparación, volver y recargar recupera exactamente ese paso.
- Comparación Stack/Grid revisada con dos archivos abiertos en paralelo en escritorio oscuro; a 390×844 en tema claro usa una columna y documento de 375 px sin desbordamiento. Las tablas tienen desplazamiento interno.
- Las aplicaciones MAUI y los ZIP no cambian; no se repite su compilación en este incremento. El guardado sigue limitado al navegador y dominio; borrar sus datos elimina la posición.

## Agrupación intermedia de pasos · 29 de octubre de 2026

- El recorrido pasa de 846 micro pasos a 177 pasos: R1 17, R2 33, R3 10, R4 24, R5 13, R6 14, R7 48 y R8 18.
- Cada paso reúne hasta seis fragmentos del mismo archivo. Se conserva el código, el motivo de cada fragmento y el detalle línea a línea desplegable.
- Los identificadores anteriores son alias del paso agrupado, incluidos preparación y casos de comprobación. Se mantienen las claves de progreso existentes.
- No cambian las aplicaciones ni los ZIP; no se repite la compilación MAUI por este ajuste de navegación y presentación.

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

## Incorporación de la rúbrica de la práctica 1

- Fuente: PDF aportado por el usuario, conservado sin modificación y descargable desde la guía.
- Cobertura: RA1 (AB, C, D, E, F, G, H), RA3 (A, B, C, DE, F, GH) y RA4 (ABC, DE, FGHI). Se conservan los porcentajes y se distinguen los RA de las unidades.
- La adaptación incluye explicación, evidencias prácticas, fallos frecuentes, enlaces a lecciones, preguntas razonadas de repaso y orden de estudio. No declara nuevos enunciados de examen ni inventa una nota global.
- Pruebas Node: 17 superadas. Comprueban pesos exactos, cobertura, referencias, restauración del progreso independiente y servicio HTTP de la rúbrica y del nuevo módulo. Las pruebas anteriores de compatibilidad permanecen superadas. Build completado.

## Academia: diagnóstico, práctica y conservación del progreso · 29 de octubre de 2026

- Contenido añadido: 32 preguntas (dos por criterio), 16 retos, 16 actividades de código (ocho de explicación y ocho de corrección), y 65 casos para ocho relaciones. Las entradas y resultados de los casos anteriores se conservan. Se verifican todos los identificadores, criterios y archivos de referencia.
- Las ayudas y soluciones están cerradas al entrar. La segunda pista está dentro de la primera; consultar ayuda se registra sin asignar automáticamente «resuelto solo». Los fragmentos con defectos se identifican como didácticos y no modifican soluciones ni ZIP.
- El ejemplo de evento público en LoginView es una ampliación didáctica de una copia. El original solo expone UserName/PassWord y el botón de consumo está en Solucion.xaml. El caso de 29/02 usa fechas controladas y la convención AddYears de las soluciones.
- 26 pruebas Node superadas: incluye cobertura, referencias, reintentos, revisión del cuaderno, prioridad dentro del RA, datos corruptos, compatibilidad, importación válida/inválida, combinar/reemplazar y restauración tras fallo de escritura. Build completado con los módulos nuevos y la rúbrica original.
- Playwright con Chromium: diagnóstico completo y filtrado, corrección al terminar, reintento sin respuestas, persistencia de ayudas y valoraciones, casos, cuaderno (también preguntas anteriores), búsqueda, copia/exportación, vista previa sin escritura, reemplazo, restauración en navegador vacío y funcionamiento/exportación con almacenamiento bloqueado. Sin errores JavaScript no controlados en esos recorridos.
- 52 vistas comprobadas: 13 rutas en 1440×1000 y 390×844, claro y oscuro. Un h1 por vista y sin desbordamiento horizontal del documento; tablas y código conservan desplazamiento interno. Se revisan capturas de portada y controles de teclado, apertura de pistas, menú móvil/Escape y persistencia del tema.
- Estas verificaciones corresponden a la aplicación web. No constituyen compilación ni ejecución de los ejemplos MAUI; sus comprobaciones siguen siendo trabajo en Visual Studio. No se publica el sitio como parte de esta entrega.

## Ampliación de los 19 bloques de consulta · 29 de octubre de 2026

- Las 19 fichas incluyen explicación desarrollada, propiedades y usos, 38 ejemplos XAML/C#/proyecto con contexto de integración, pasos razonados, resultado esperado, errores y comprobación. No se modifican las preguntas, identificadores, claves de progreso ni originales.
- Los bloques se pueden abrir desde las lecciones; los enlaces directos y la búsqueda expanden la ficha. El código conserva el ancho de lectura y el botón de copia.
- 29 pruebas Node superadas y build completado. Se verifica cobertura de las 19 fichas, búsqueda dentro de código y coherencia de nombres entre ejemplos relacionados. El nuevo módulo está permitido por el servidor y se incluye en dist.
- Playwright/Chromium: XML bien formado en los ejemplos XML/XAML; 76 vistas sin desbordamiento horizontal del documento (19 fichas × escritorio/móvil × claro/oscuro), apertura de ejemplos, copia exacta al portapapeles, teclado, búsqueda y cinco lecciones representativas con sus bloques desplegados. Sin errores JavaScript no controlados.
- Los ejemplos se identifican como didácticos y parciales cuando corresponde. No se afirma compilación MAUI de estos fragmentos: deben integrarse en un proyecto con sus clases, recursos y referencias indicados.
