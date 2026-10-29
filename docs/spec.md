# Especificación · Aula de Interfaces

Estado: implementación y verificación de guía completa. Actualización: 29 de octubre de 2026.

## Incremento aprobado: guía completa

17 lecciones (12 conservadas y 5 módulos Learn), consulta rápida, al menos 5 preguntas por lección y 13 paquetes descargables (8 relaciones y 5 módulos). Cada paquete incluye todos sus archivos, dependencias locales, instrucciones y casos de prueba; la web muestra esos mismos archivos bajo «Ver solución explicada». Las soluciones nuevas son elaboración didáctica y no se atribuyen al profesor. Se verifica compilación Windows de cada proyecto MAUI y lógica compartida de validaciones, operaciones, estados y fechas. Se conservan los identificadores y posiciones del progreso existente; preguntas y casillas nuevas se añaden al final. La matriz docs/coverage.md debe vincular cada requisito con explicación, archivo implementado y comprobación. La ampliación se publica en GitHub/Vercel una vez verificada. Sin backend ni nuevas dependencias de producción.

Actualización de alcance: el usuario ha autorizado crear el repositorio público en GitHub y conectar/publicar el proyecto en Vercel. La restricción de entrega exclusivamente local queda sustituida por esa autorización; se conserva el resto de criterios y materiales.

Ampliación: selector claro/oscuro con preferencia persistente, por defecto según sistema. Guardar también casillas de práctica y respuestas comprobadas de autoevaluación; restaurarlas al recargar y compartir las casillas entre lección y prácticas. Mantener el avance de lecciones existente. Validar almacenamiento corrupto y avisar si el navegador bloquea las escrituras. Todo sigue siendo local al navegador.

Restricción posterior del usuario: ceñirse estrictamente a los archivos y enlaces del profesor. No inventar temario, ejercicios ni supuestos de examen. Las explicaciones son elaboración didáctica identificada; la práctica reproduce requisitos de las relaciones originales y la autoevaluación solo pregunta sobre ellos. Las discrepancias entre enunciados y código se señalan sin alterar los originales.

## Objetivo y decisiones
Preparar un examen práctico de .NET MAUI/XAML con explicaciones muy detalladas, ejemplos, ejercicios y autoevaluación derivados de todos los materiales de UD2 y UD3-4. Interfaz visual con tarjetas, colores por unidad y progreso local. El repositorio público GitHub y el proyecto Vercel ya existen; las ampliaciones autorizadas se publican tras su verificación.

## Historias y criterios de aceptación
- **AC1 · Encontrar contenido.** Inicio, UD2, UD3-4, práctica de examen y biblioteca tienen navegación con URL propia mediante hash, historial y vista móvil. El buscador encuentra títulos, explicaciones, ejercicios y materiales sin distinguir tildes.
- **AC2 · Aprender.** Cada lección incluye objetivos, explicación secuencial, código identificado como ejemplo o fragmento, errores frecuentes, ejercicio con solución desplegable, comprobaciones y una pregunta con respuesta razonada. Las relaciones 1 a 8 y configuración tienen cobertura explícita.
- **AC3 · Consultar fuentes.** Todos los PDF, RAR y listados originales aparecen en la biblioteca. Los PDF tienen texto extraído consultable y enlace al original; el código relevante de todos los RAR se puede leer sin descargarlo. El material original se diferencia del contenido didáctico nuevo. No se ejecuta código MAUI en la web.
- **AC4 · Medir avance.** El alumno marca una lección completada y el avance se mantiene al recargar. Si el almacenamiento no está disponible la web sigue funcionando y avisa. No hay cuenta ni sincronización.
- **AC5 · Practicar.** Las preguntas permiten responder, ver explicación y reintentar. El modo práctica reúne los enunciados originales y sus listas de comprobación, sin inventar un examen ni atribuir soluciones nuevas al profesor.
- **AC6 · Accesibilidad.** Navegación por teclado, foco visible, etiquetas en campos, semántica, contraste y adaptación a pantallas pequeñas. Sin depender exclusivamente de colores para comunicar estado.
- **AC7 · Entrega.** Web estática sin dependencias de producción, comprobación con Node, compilación a dist y configuración para Vercel. Documentación de uso y publicación. Actualizar el repositorio y despliegue existentes tras verificar los cambios.

## Alcance y límites
### Talleres guiados en Visual Studio
El recorrido principal usa un punto intermedio: tareas por archivo y hasta seis fragmentos relacionados por paso, sin separar cada declaración en una pantalla. Los detalles línea a línea se mantienen desplegables. Los identificadores de los micro pasos anteriores resuelven al paso agrupado que los contiene. El progreso de estudio no cambia.

La ampliación de estudio exhaustivo divide las operaciones por miembro C# o elemento XAML. Cada micro paso contiene una acción, una explicación del motivo, un fragmento pequeño situado en su archivo, comentarios didácticos en español y una comprobación. Se conservan los pasos anteriores como introducciones y sus URL. Los ejemplos y soluciones adaptadas usan tipos explícitos en C#, sin var. Los comentarios de plantillas y código adaptado se traducen; las licencias y los originales del profesor se conservan. Las acciones de prácticas y los grupos equivalentes se presentan como botones separados, con espacios suficientes en escritorio y móvil.

Las ocho relaciones tendrán un taller navegable por pasos. Cada paso indicará la acción en Visual Studio, el archivo concreto, código procedente del paquete verificado, explicación del comportamiento y comprobación manual. Se cubrirán todas las variantes existentes; la relación 7 y la 8 se enlazarán desde sus dos lecciones. La solución completa permanecerá disponible por separado. Se conservarán los identificadores y posiciones de progreso anteriores. La interfaz no utilizará emojis ni símbolos decorativos Unicode añadidos; los originales permanecerán intactos. Se comprobarán referencias de archivos, fragmentos, rutas, navegación por pasos y adaptación móvil.

Se conservan los originales. Los RAR contienen metadatos de Visual Studio y productos de compilación: se leen los fuentes para estudiar, sin modificar los archivos originales. Los ejemplos nuevos siguen .NET MAUI 10; se advierte que los PDF usan DisplayAlert y no se promete compilación sin adaptar namespaces y proyectos. Se mantienen juntas las unidades 3 y 4 porque así están los materiales. No añadir backend, usuarios, IA, editor compilable ni paquetes de UI.

## Trazabilidad
ConfiguracionMAUI → entorno. Relación 1 → XAML/layouts y formulario. Relación 2 → calculadora/eventos/C#. Relación 3 → tablero dinámico. Relación 4 → Shell. Relación 5 → especialización. Relación 6 → composición. Relación 7 → extensiones y recursos. Relación 8 → matrícula y edad. RAR y listados → biblioteca de fuentes y enlaces.

## Verificación prevista
Prueba automatizada de cobertura documental y datos didácticos, rutas/recursos y build. Revisión en navegador de búsqueda, lecciones, preguntas, avance persistente, biblioteca, historial y ancho móvil. Los ejemplos MAUI se revisan contra fuentes y documentación oficial; compilar aplicaciones MAUI requiere Visual Studio/workload y queda fuera de la web.
