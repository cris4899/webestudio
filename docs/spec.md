# Especificación · Aula de Interfaces

Estado: implementable. Fecha: 28 de octubre de 2026.

Actualización de alcance: el usuario ha autorizado crear el repositorio público en GitHub y conectar/publicar el proyecto en Vercel. La restricción de entrega exclusivamente local queda sustituida por esa autorización; se conserva el resto de criterios y materiales.

Ampliación: selector claro/oscuro con preferencia persistente, por defecto según sistema. Guardar también casillas de práctica y respuestas comprobadas de autoevaluación; restaurarlas al recargar y compartir las casillas entre lección y prácticas. Mantener el avance de lecciones existente. Validar almacenamiento corrupto y avisar si el navegador bloquea las escrituras. Todo sigue siendo local al navegador.

Restricción posterior del usuario: ceñirse estrictamente a los archivos y enlaces del profesor. No inventar temario, ejercicios ni supuestos de examen. Las explicaciones son elaboración didáctica identificada; la práctica reproduce requisitos de las relaciones originales y la autoevaluación solo pregunta sobre ellos. Las discrepancias entre enunciados y código se señalan sin alterar los originales.

## Objetivo y decisiones
Preparar un examen práctico de .NET MAUI/XAML con explicaciones muy detalladas, ejemplos, ejercicios y autoevaluación derivados de todos los materiales de UD2 y UD3-4. Interfaz visual con tarjetas, colores por unidad y progreso local. El usuario autoriza materiales públicos; repositorio GitHub y proyecto Vercel se crearán posteriormente.

## Historias y criterios de aceptación
- **AC1 · Encontrar contenido.** Inicio, UD2, UD3-4, práctica de examen y biblioteca tienen navegación con URL propia mediante hash, historial y vista móvil. El buscador encuentra títulos, explicaciones, ejercicios y materiales sin distinguir tildes.
- **AC2 · Aprender.** Cada lección incluye objetivos, explicación secuencial, código identificado como ejemplo o fragmento, errores frecuentes, ejercicio con solución desplegable, comprobaciones y una pregunta con respuesta razonada. Las relaciones 1 a 8 y configuración tienen cobertura explícita.
- **AC3 · Consultar fuentes.** Todos los PDF, RAR y listados originales aparecen en la biblioteca. Los PDF tienen texto extraído consultable y enlace al original; el código relevante de todos los RAR se puede leer sin descargarlo. El material original se diferencia del contenido didáctico nuevo. No se ejecuta código MAUI en la web.
- **AC4 · Medir avance.** El alumno marca una lección completada y el avance se mantiene al recargar. Si el almacenamiento no está disponible la web sigue funcionando y avisa. No hay cuenta ni sincronización.
- **AC5 · Practicar.** Las preguntas permiten responder, ver explicación y reintentar. El modo práctica reúne los enunciados originales y sus listas de comprobación, sin inventar un examen ni atribuir soluciones nuevas al profesor.
- **AC6 · Accesibilidad.** Navegación por teclado, foco visible, etiquetas en campos, semántica, contraste y adaptación a pantallas pequeñas. Sin depender exclusivamente de colores para comunicar estado.
- **AC7 · Entrega.** Web estática sin dependencias de producción, comprobación con Node, compilación a dist y configuración para Vercel. Documentación de uso y publicación. No crear ni publicar servicios externos en esta fase.

## Alcance y límites
Se conservan los originales. Los RAR contienen metadatos de Visual Studio y productos de compilación: se leen los fuentes para estudiar, sin modificar los archivos originales. Los ejemplos nuevos siguen .NET MAUI 10; se advierte que los PDF usan DisplayAlert y no se promete compilación sin adaptar namespaces y proyectos. Se mantienen juntas las unidades 3 y 4 porque así están los materiales. No añadir backend, usuarios, IA, editor compilable ni paquetes de UI.

## Trazabilidad
ConfiguracionMAUI → entorno. Relación 1 → XAML/layouts y formulario. Relación 2 → calculadora/eventos/C#. Relación 3 → tablero dinámico. Relación 4 → Shell. Relación 5 → especialización. Relación 6 → composición. Relación 7 → extensiones y recursos. Relación 8 → matrícula y edad. RAR y listados → biblioteca de fuentes y enlaces.

## Verificación prevista
Prueba automatizada de cobertura documental y datos didácticos, rutas/recursos y build. Revisión en navegador de búsqueda, lecciones, preguntas, avance persistente, biblioteca, historial y ancho móvil. Los ejemplos MAUI se revisan contra fuentes y documentación oficial; compilar aplicaciones MAUI requiere Visual Studio/workload y queda fuera de la web.
