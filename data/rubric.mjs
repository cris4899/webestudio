export const rubricSource = "assets/documents/RubricaPractica1.pdf";
export const rubricGroups = [
  {
    "id": "RA1",
    "title": "Generar interfaces y adaptar el código",
    "criteria": [
      {
        "id": "RA1-AB",
        "ce": "AB",
        "weight": 10,
        "title": "Combinar XAML y C#",
        "lessons": [
          "entorno",
          "xaml-layouts",
          "learn-xaml"
        ],
        "explanation": "Relaciona x:Class con namespace y clase partial; InitializeComponent carga el árbol XAML. Usa x:Name para acceder a un View y explica qué parte declara la interfaz y qué parte implementa su comportamiento.",
        "evidence": "Abre una página y su code-behind; identifica la misma clase, un control nombrado y una actualización de su propiedad desde C#.",
        "pitfall": "Copiar XAML sin conectar la clase o crear controles en C# sin añadirlos a Content."
      },
      {
        "id": "RA1-C",
        "ce": "C",
        "weight": 15,
        "title": "Estructurar con layouts",
        "lessons": [
          "xaml-layouts",
          "calculadora",
          "learn-layouts"
        ],
        "explanation": "Elige StackLayout o Grid según el enunciado, no solo por comodidad. Define filas y columnas, Auto y *, posiciones desde cero y spans; conserva la lógica entre distribuciones.",
        "evidence": "Reproduce el modelo del profesor; prueba que no haya solapamientos y que todas las variantes exigidas conserven el comportamiento.",
        "pitfall": "Entregar una sola versión de la calculadora o sustituir el layout obligatorio."
      },
      {
        "id": "RA1-D",
        "ce": "D",
        "weight": 15,
        "title": "Configurar propiedades de los Views",
        "lessons": [
          "xaml-layouts",
          "especializacion"
        ],
        "explanation": "Revisa identificación x:Name, Text, Keyboard, IsReadOnly, MaxLength, color, dimensiones y alineación según la función del control. Una ayuda de entrada no sustituye la validación.",
        "evidence": "Enumera las propiedades relevantes de cada View y justifica su valor; prueba texto inválido aunque el teclado sea numérico.",
        "pitfall": "Dejar valores por defecto que contradicen el modelo o confundir Name con Text."
      },
      {
        "id": "RA1-E",
        "ce": "E",
        "weight": 15,
        "title": "Añadir miembros, propiedades y métodos",
        "lessons": [
          "formulario",
          "tablero",
          "contentview"
        ],
        "explanation": "Separa campos de estado, propiedades públicas y métodos de comportamiento. Amplía la clase partial de usuario; no edites archivos generados de obj. Inicializa antes de usar controles y explica qué miembros has añadido.",
        "evidence": "Señala un campo, una propiedad y un método propios; recorre quién escribe y quién lee cada dato.",
        "pitfall": "Acumular toda la lógica visual y de negocio en un único manejador sin poder explicarla."
      },
      {
        "id": "RA1-F",
        "ce": "F",
        "weight": 15,
        "title": "Clases instanciables, estáticas y code-behind",
        "lessons": [
          "formulario",
          "calculadora",
          "tablero"
        ],
        "explanation": "Una clase instanciable mantiene datos de cada objeto; una clase estática agrupa operaciones sin identidad de instancia. Conserva modelos separados del code-behind y evita estado compartido accidental entre pantallas.",
        "evidence": "Crea dos modelos con datos distintos y muestra una operación de cálculo reutilizada desde la página.",
        "pitfall": "Usar static para todos los datos o duplicar reglas en cada botón."
      },
      {
        "id": "RA1-G",
        "ce": "G",
        "weight": 20,
        "title": "Asociar eventos y acciones",
        "lessons": [
          "calculadora",
          "tablero",
          "contentview"
        ],
        "explanation": "Conecta Clicked en XAML o con += en C#. Comprueba firma, sender y EventArgs; los manejadores compartidos identifican el emisor. Separa recibir el evento, validar, cambiar estado y actualizar la vista.",
        "evidence": "Pulsa todos los botones, reutiliza un manejador cuando corresponda y comprueba que cada acción se ejecuta una sola vez.",
        "pitfall": "Declarar un método sin suscripción, duplicar suscripciones o actualizar solo la apariencia."
      },
      {
        "id": "RA1-H",
        "ce": "H",
        "weight": 10,
        "title": "Aplicación funcional y tratamiento de errores",
        "lessons": [
          "formulario",
          "calculadora",
          "edad"
        ],
        "explanation": "La pantalla debe funcionar y tratar errores. TryParse valida conversiones, checked detecta desbordamiento y los errores deben explicarse sin conservar un éxito anterior. Recupera un estado que permita continuar.",
        "evidence": "Prueba vacío, formato incorrecto, límites, división entre cero, desbordamiento y una operación válida después del error.",
        "pitfall": "Considerar suficiente que compile; gestionar solo el caso feliz o capturar todo sin informar."
      }
    ]
  },
  {
    "id": "RA3",
    "title": "Crear, documentar e integrar componentes",
    "criteria": [
      {
        "id": "RA3-A",
        "ce": "A",
        "weight": 10,
        "title": "Bibliotecas de componentes y modelos",
        "lessons": [
          "especializacion",
          "contentview",
          "matricula"
        ],
        "explanation": "Distingue biblioteca de clases para modelos de una biblioteca MAUI para Views con dependencias visuales. Una biblioteca produce un ensamblado reutilizable y no es una aplicación de inicio.",
        "evidence": "Localiza el csproj de cada biblioteca, sus clases y el proyecto que la consume; explica sus dependencias.",
        "pitfall": "Dejar todos los componentes dentro de la aplicación sin la biblioteca solicitada."
      },
      {
        "id": "RA3-B",
        "ce": "B",
        "weight": 15,
        "title": "Crear todos los Views adecuados",
        "lessons": [
          "especializacion",
          "contentview",
          "matricula",
          "edad"
        ],
        "explanation": "Hereda de Entry o Button para especializar un control; compón un ContentView cuando necesites varios Views. Comprueba todos los componentes y variantes del enunciado, no solo uno representativo.",
        "evidence": "Contrasta la lista de componentes del PDF con las clases creadas y muestra cada uno en una aplicación.",
        "pitfall": "Confundir especialización con composición o dejar un View sin implementar."
      },
      {
        "id": "RA3-C",
        "ce": "C",
        "weight": 25,
        "title": "Propiedades, métodos, constructores y valores iniciales",
        "lessons": [
          "especializacion",
          "contentview",
          "matricula",
          "edad"
        ],
        "explanation": "Define una API pública para leer y establecer información sin acceder a hijos privados. Inicializa recursos y valores coherentes en el constructor. Valida setters y comprueba que la vista refleja el nuevo valor; usa BindableProperty cuando necesites enlace, estilos o cambios observables de MAUI.",
        "evidence": "Desde la página consumidora crea el componente, lee su valor inicial, cambia su propiedad pública y verifica vista y lectura; prueba valores no admitidos.",
        "pitfall": "Exponer solo etiquetas internas, un constructor sin inicialización o propiedades que no permiten interacción exterior."
      },
      {
        "id": "RA3-DE",
        "ce": "DE",
        "weight": 30,
        "title": "Eventos del componente y control del estado",
        "lessons": [
          "contentview",
          "matricula",
          "edad"
        ],
        "explanation": "Distingue eventos internos de los Views de un evento público del componente. Actualiza primero el estado coherente y notifica después; el consumidor se suscribe sin conocer los controles internos. Define cuándo se emite y qué información transporta.",
        "evidence": "Suscribe la página al evento público; cambia datos válidos e inválidos, repite la acción y comprueba estado, payload y número de notificaciones.",
        "pitfall": "Declarar un evento sin invocarlo o dejar de actualizar el dato expuesto al cambiar la entrada."
      },
      {
        "id": "RA3-F",
        "ce": "F",
        "weight": 5,
        "title": "Documentar componentes",
        "lessons": [
          "especializacion",
          "contentview",
          "matricula",
          "edad"
        ],
        "explanation": "Documenta propósito, herencia, propiedades y tipos, valores por defecto, constructores, métodos, eventos, restricciones y errores. Añade un ejemplo mínimo de consumo y referencias necesarias.",
        "evidence": "Explica cómo otra persona instancia, configura, escucha y usa cada componente con su documentación.",
        "pitfall": "Documentar solo la aplicación o limitarse al nombre de la clase."
      },
      {
        "id": "RA3-GH",
        "ce": "GH",
        "weight": 15,
        "title": "Generar, importar y utilizar bibliotecas",
        "lessons": [
          "contentview",
          "matricula",
          "edad"
        ],
        "explanation": "Compila la biblioteca y comprueba su DLL en la salida de compilación. Añade referencia de proyecto o ensamblado según la entrega; declara xmlns con namespace y assembly correctos e instancia el View en XAML o C#. NuGet no es un requisito de esta rúbrica.",
        "evidence": "Compila biblioteca y aplicación; verifica referencia, uso real del View, propiedades y eventos desde la página, y comportamiento ante errores.",
        "pitfall": "Generar una DLL sin consumirla o mostrar una copia local de la clase que oculta una referencia ausente."
      }
    ]
  },
  {
    "id": "RA4",
    "title": "Navegación, distribución y aspecto legible",
    "criteria": [
      {
        "id": "RA4-ABC",
        "ce": "ABC",
        "weight": 30,
        "title": "Menú flotante y acceso a las páginas",
        "lessons": [
          "navegacion",
          "learn-multipagina"
        ],
        "explanation": "Construye navegación con menú flotante y entradas que permitan llegar a todas las páginas requeridas. Distingue FlyoutItem, ShellContent y navegación por rutas; las pestañas solas no sustituyen el menú pedido.",
        "evidence": "Desde el menú abre cada página, vuelve y repite; comprueba títulos, selección y que ninguna página requerida sea inaccesible.",
        "pitfall": "Crear páginas sin entrada de menú o confundir pestañas con menú flotante."
      },
      {
        "id": "RA4-DE",
        "ce": "DE",
        "weight": 30,
        "title": "Distribución fiel al modelo",
        "lessons": [
          "xaml-layouts",
          "learn-layouts",
          "matricula",
          "edad"
        ],
        "explanation": "Compara con el modelo facilitado: alineación horizontal y vertical, Spacing, Padding y Margin resuelven cosas distintas. Revisa tamaños de texto largos y espacio disponible sin depender solo de posiciones fijas.",
        "evidence": "Reproduce la captura del enunciado y comprueba etiquetas, entradas y botones con más de un tamaño de ventana.",
        "pitfall": "Intercambiar Margin y Padding, recortar contenido o ignorar la distribución solicitada."
      },
      {
        "id": "RA4-FGHI",
        "ce": "FGHI",
        "weight": 40,
        "title": "Extensiones, recursos, estilos y legibilidad",
        "lessons": [
          "extensiones",
          "recursos",
          "learn-recursos"
        ],
        "explanation": "Reutiliza valores en ResourceDictionary, usa x:Key y el ámbito adecuado. StaticResource resuelve el recurso; DynamicResource permite responder a cambios de recurso. Define estilos con TargetType y Setters y explica el valor devuelto por ProvideValue en las extensiones propias. Revisa colores y fuentes legibles.",
        "evidence": "Aplica recursos y estilos a una página y a un componente; cambia un recurso dinámico, comprueba su efecto y verifica texto, fondo y tamaños legibles.",
        "pitfall": "Definir recursos que nunca se usan, claves fuera de ámbito o modificar el aspecto sin atender a la lectura."
      }
    ]
  }
];

export function readRubricChecks(raw) {
  try {
    const ids = new Set(rubricGroups.flatMap(g => g.criteria.map(c => c.id)));
    const values = JSON.parse(raw);
    return new Set(Array.isArray(values) ? values.filter(id => ids.has(id)) : []);
  } catch { return new Set(); }
}
