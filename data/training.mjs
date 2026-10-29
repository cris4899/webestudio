// Preparación didáctica basada en la rúbrica y las prácticas; no son preguntas oficiales.
export const diagnosticQuestions = [
  {
    "id": "diag-ra1-ab-1",
    "criterion": "RA1-AB",
    "prompt": "¿Qué conecta una página XAML con su code-behind?",
    "options": [
      "El nombre del botón",
      "x:Class y la clase partial con el mismo namespace y nombre",
      "El color del fondo"
    ],
    "answer": 1,
    "explanation": "x:Class identifica la clase parcial. InitializeComponent carga los controles declarados en XAML."
  },
  {
    "id": "diag-ra1-ab-2",
    "criterion": "RA1-AB",
    "prompt": "Creas un Button en C# y no aparece. ¿Qué falta comprobar?",
    "options": [
      "Que tenga un nombre de variable largo",
      "Que se haya declarado en un archivo XAML",
      "Que forme parte del árbol visual asignado a Content"
    ],
    "answer": 2,
    "explanation": "Instanciar un objeto no lo incorpora a la interfaz: hay que añadirlo al contenedor y mostrar ese contenedor."
  },
  {
    "id": "diag-ra1-c-1",
    "criterion": "RA1-C",
    "prompt": "¿Qué significa Grid.Row=\"0\"?",
    "options": [
      "La primera fila",
      "La última fila",
      "Una fila invisible"
    ],
    "answer": 0,
    "explanation": "Los índices de filas y columnas de Grid empiezan en cero."
  },
  {
    "id": "diag-ra1-c-2",
    "criterion": "RA1-C",
    "prompt": "La práctica pide calculadora con solo StackLayout. ¿Qué entrega respeta la condición?",
    "options": [
      "Grid porque es más compacto",
      "Pilas verticales y horizontales con la misma lógica",
      "Una captura sin proyecto"
    ],
    "answer": 1,
    "explanation": "La elección de layout debe respetar el enunciado; no basta con que la pantalla se parezca."
  },
  {
    "id": "diag-ra1-d-1",
    "criterion": "RA1-D",
    "prompt": "¿Qué permite x:Name en un View?",
    "options": [
      "Usarlo desde el code-behind generado para esa página",
      "Validar automáticamente el dato",
      "Sustituir su propiedad Text"
    ],
    "answer": 0,
    "explanation": "x:Name proporciona una referencia al control en el ámbito de nombres de XAML."
  },
  {
    "id": "diag-ra1-d-2",
    "criterion": "RA1-D",
    "prompt": "Entry tiene Keyboard=\"Numeric\". ¿Qué haces antes de usar su Text como edad?",
    "options": [
      "Convertir siempre con int.Parse sin tratar errores",
      "Confiar en el teclado",
      "Convertir con TryParse y comprobar los límites"
    ],
    "answer": 2,
    "explanation": "El teclado es una ayuda de entrada; texto vacío, pegado o fuera de rango sigue necesitando validación."
  },
  {
    "id": "diag-ra1-e-1",
    "criterion": "RA1-E",
    "prompt": "¿Dónde añades comportamiento propio a una página XAML?",
    "options": [
      "En obj para que no se vea",
      "En la clase partial de usuario del code-behind",
      "En un ZIP ya generado"
    ],
    "answer": 1,
    "explanation": "Los archivos generados pueden regenerarse. La clase parcial de usuario es el lugar para miembros propios."
  },
  {
    "id": "diag-ra1-e-2",
    "criterion": "RA1-E",
    "prompt": "Un contador se reinicia en cada clic porque es una variable local. ¿Qué cambio expresa el estado persistente de la página?",
    "options": [
      "Declararlo como campo de la instancia",
      "Renombrar el botón",
      "Crear otra página en cada clic"
    ],
    "answer": 0,
    "explanation": "Un campo conserva su valor mientras vive esa instancia; una variable local se crea al entrar en el método."
  },
  {
    "id": "diag-ra1-f-1",
    "criterion": "RA1-F",
    "prompt": "¿Qué diferencia un modelo instanciable de una utilidad estática?",
    "options": [
      "Ninguna: ambos comparten siempre sus datos",
      "Solo el nombre del archivo",
      "El modelo puede mantener datos distintos por objeto; la utilidad estática no requiere instancia"
    ],
    "answer": 2,
    "explanation": "Las instancias permiten identidades y estados independientes; una operación estática puede recibir todos sus datos como parámetros."
  },
  {
    "id": "diag-ra1-f-2",
    "criterion": "RA1-F",
    "prompt": "Dos formularios deben conservar usuarios distintos. ¿Qué diseño evita mezclarlos?",
    "options": [
      "Un modelo por formulario y reglas reutilizables",
      "Un único campo static Usuario para todo",
      "Guardar el nombre en el texto del botón"
    ],
    "answer": 0,
    "explanation": "Separa estado por instancia y reutiliza reglas sin convertir los datos de cada usuario en estado global."
  },
  {
    "id": "diag-ra1-g-1",
    "criterion": "RA1-G",
    "prompt": "¿Qué hace boton.Clicked += DigitosClick?",
    "options": [
      "Ejecuta el método inmediatamente",
      "Suscribe el manejador al evento",
      "Crea otro botón"
    ],
    "answer": 1,
    "explanation": "+= registra la acción que recibirá futuras pulsaciones; no invoca por sí mismo el manejador."
  },
  {
    "id": "diag-ra1-g-2",
    "criterion": "RA1-G",
    "prompt": "Cinco botones comparten un manejador. ¿Cómo reconoces el que se ha pulsado?",
    "options": [
      "Por el orden de declaración del método",
      "Por EventArgs.Empty",
      "Comprobando sender y leyendo el Button emisor"
    ],
    "answer": 2,
    "explanation": "sender referencia al emisor. Comprueba su tipo antes de acceder a Text u otra propiedad."
  },
  {
    "id": "diag-ra1-h-1",
    "criterion": "RA1-H",
    "prompt": "¿Qué demuestra recuperación después de un error?",
    "options": [
      "La app sigue abierta pero bloqueada",
      "Tras informar y restaurar el estado se puede completar una operación válida",
      "Se oculta toda la interfaz"
    ],
    "answer": 1,
    "explanation": "El tratamiento de errores debe permitir continuar sin conservar un éxito anterior ni un estado incoherente."
  },
  {
    "id": "diag-ra1-h-2",
    "criterion": "RA1-H",
    "prompt": "¿Cómo compruebas 2147483647 + 1 sobre int?",
    "options": [
      "Esperando 2147483648 en un int",
      "Ignorando el resultado",
      "Usando checked y tratando OverflowException"
    ],
    "answer": 2,
    "explanation": "La suma supera Int32.MaxValue. checked detecta el desbordamiento, que debe comunicarse y recuperarse."
  },
  {
    "id": "diag-ra3-a-1",
    "criterion": "RA3-A",
    "prompt": "¿Qué proyecto es adecuado para reutilizar un ContentView con XAML MAUI?",
    "options": [
      "Una biblioteca de clases MAUI referenciada por una aplicación",
      "Un archivo de texto suelto",
      "Solo un proyecto de consola sin dependencias MAUI"
    ],
    "answer": 0,
    "explanation": "El componente visual necesita sus dependencias y compilación MAUI; la biblioteca no se ejecuta como aplicación."
  },
  {
    "id": "diag-ra3-a-2",
    "criterion": "RA3-A",
    "prompt": "Tienes una biblioteca de modelos y otra de Views. ¿Cómo demuestras su utilidad?",
    "options": [
      "Ejecutando directamente cada DLL",
      "Cambiando la extensión a exe",
      "Referenciándolas y consumiéndolas desde una app"
    ],
    "answer": 2,
    "explanation": "La aplicación anfitriona usa los modelos y componentes; las bibliotecas aportan tipos reutilizables."
  },
  {
    "id": "diag-ra3-b-1",
    "criterion": "RA3-B",
    "prompt": "¿Cuándo elegir ContentView frente a heredar de Entry?",
    "options": [
      "Siempre que haya una sola cadena",
      "Cuando compones varios controles en una unidad reutilizable",
      "Solo para cambiar el nombre del archivo"
    ],
    "answer": 1,
    "explanation": "Entry se especializa por herencia; ContentView agrupa controles, estado y comportamiento."
  },
  {
    "id": "diag-ra3-b-2",
    "criterion": "RA3-B",
    "prompt": "La relación pide dos Views y solo uno funciona. ¿Qué queda por hacer?",
    "options": [
      "Implementar y probar también el segundo componente",
      "Aumentar la nota del primero",
      "Ocultar la segunda entrada del menú"
    ],
    "answer": 0,
    "explanation": "La rúbrica pide todos los Views adecuados; un ejemplo representativo no completa la entrega."
  },
  {
    "id": "diag-ra3-c-1",
    "criterion": "RA3-C",
    "prompt": "¿Qué debe permitir la API pública de un componente?",
    "options": [
      "Acceder obligatoriamente a todos sus hijos privados",
      "Solo cambiar su color desde dentro",
      "Leer y establecer información válida desde el consumidor"
    ],
    "answer": 2,
    "explanation": "Propiedades, métodos y constructores deben permitir interacción exterior preservando invariantes."
  },
  {
    "id": "diag-ra3-c-2",
    "criterion": "RA3-C",
    "prompt": "Necesitas que una propiedad participe en binding y estilos MAUI. ¿Qué mecanismo eliges?",
    "options": [
      "Un campo público sin notificación",
      "BindableProperty con envoltorio GetValue/SetValue",
      "Una variable local del constructor"
    ],
    "answer": 1,
    "explanation": "BindableProperty integra el valor con el sistema de propiedades MAUI; define un valor inicial coherente y actualización cuando corresponda."
  },
  {
    "id": "diag-ra3-de-1",
    "criterion": "RA3-DE",
    "prompt": "¿Cuándo debe emitirse un evento público de cambio?",
    "options": [
      "Después de actualizar un estado válido y coherente",
      "Antes de validar, aunque el dato sea inválido",
      "Solo al crear la DLL"
    ],
    "answer": 0,
    "explanation": "El consumidor debe observar la información actualizada al recibir la notificación."
  },
  {
    "id": "diag-ra3-de-2",
    "criterion": "RA3-DE",
    "prompt": "La página no debe conocer los Entry internos de LoginView. ¿Cómo recibe la acción?",
    "options": [
      "Copiando los Entry al anfitrión",
      "Leyendo campos privados por reflexión",
      "Suscribiéndose al evento público y usando la API del componente"
    ],
    "answer": 2,
    "explanation": "El componente encapsula controles y validación; la página consume su contrato público."
  },
  {
    "id": "diag-ra3-f-1",
    "criterion": "RA3-F",
    "prompt": "¿Qué documentación permite reutilizar un componente?",
    "options": [
      "Solo una captura",
      "Propósito, API, valores iniciales, restricciones, eventos y ejemplo de uso",
      "Solo el nombre del autor"
    ],
    "answer": 1,
    "explanation": "La documentación debe explicar cómo instanciar, configurar y consumir el componente, incluidos errores."
  },
  {
    "id": "diag-ra3-f-2",
    "criterion": "RA3-F",
    "prompt": "¿Qué debe decir la documentación de un evento?",
    "options": [
      "Cuándo se emite, qué datos aporta y cómo suscribirse",
      "Solo que es public",
      "Que sustituye todos los métodos"
    ],
    "answer": 0,
    "explanation": "El consumidor necesita conocer el momento, los datos y la forma de observar la acción."
  },
  {
    "id": "diag-ra3-gh-1",
    "criterion": "RA3-GH",
    "prompt": "¿Qué demuestra integración de una biblioteca?",
    "options": [
      "La existencia de un archivo DLL aislado",
      "Un README con su nombre",
      "Referencia correcta y uso real de sus Views, propiedades y eventos en una app"
    ],
    "answer": 2,
    "explanation": "Generar un ensamblado no basta: debe consumirse y funcionar en la aplicación anfitriona."
  },
  {
    "id": "diag-ra3-gh-2",
    "criterion": "RA3-GH",
    "prompt": "Un xmlns usa un assembly que no coincide con la biblioteca. ¿Qué revisas?",
    "options": [
      "El tamaño de la ventana",
      "La referencia, el nombre del ensamblado y el namespace real",
      "La contraseña del usuario"
    ],
    "answer": 1,
    "explanation": "El namespace CLR y assembly de XAML deben identificar tipos accesibles en la biblioteca referenciada."
  },
  {
    "id": "diag-ra4-abc-1",
    "criterion": "RA4-ABC",
    "prompt": "¿Qué debe permitir el menú flotante exigido?",
    "options": [
      "Llegar a todas las páginas requeridas",
      "Mostrar una sola página vacía",
      "Sustituir todas las páginas por pestañas sin menú"
    ],
    "answer": 0,
    "explanation": "El criterio exige menú flotante y accesibilidad de los destinos, no solo que existan archivos de página."
  },
  {
    "id": "diag-ra4-abc-2",
    "criterion": "RA4-ABC",
    "prompt": "Una calculadora existe pero no puede abrirse desde el menú. ¿Está completo el criterio?",
    "options": [
      "Sí, porque compila",
      "Sí, si está dentro del ZIP",
      "No: falta un destino accesible y probarlo"
    ],
    "answer": 2,
    "explanation": "Hay que revisar la navegación de cada página y su comportamiento una vez abierta."
  },
  {
    "id": "diag-ra4-de-1",
    "criterion": "RA4-DE",
    "prompt": "¿Qué diferencia Padding de Margin?",
    "options": [
      "Ambos son el texto del control",
      "Padding separa el contenido del borde; Margin separa el elemento de su entorno",
      "Margin solo existe en Grid"
    ],
    "answer": 1,
    "explanation": "Distingue separación interior, exterior y Spacing entre hijos de un contenedor."
  },
  {
    "id": "diag-ra4-de-2",
    "criterion": "RA4-DE",
    "prompt": "La interfaz coincide con la captura a un tamaño, pero recorta etiquetas al estrecharla. ¿Qué revisas?",
    "options": [
      "Alineación, distribución y tamaños para conservar lectura y acceso",
      "Solo el nombre del namespace",
      "La lógica de suma"
    ],
    "answer": 0,
    "explanation": "La distribución debe respetar el modelo y seguir siendo usable con el espacio disponible."
  },
  {
    "id": "diag-ra4-fghi-1",
    "criterion": "RA4-FGHI",
    "prompt": "¿Qué permite DynamicResource al reemplazar una clave de recurso?",
    "options": [
      "Compilar código C# en el navegador",
      "Sustituir automáticamente cualquier variable local",
      "Actualizar las propiedades que siguen vinculadas a esa clave"
    ],
    "answer": 2,
    "explanation": "StaticResource resuelve el recurso; DynamicResource mantiene la relación para responder a cambios de recurso."
  },
  {
    "id": "diag-ra4-fghi-2",
    "criterion": "RA4-FGHI",
    "prompt": "Un Style está definido pero no cambia ningún View. ¿Qué verificas?",
    "options": [
      "Solo que su clave sea larga",
      "Ámbito, TargetType, Setters y aplicación explícita o implícita",
      "Que todos los eventos sean static"
    ],
    "answer": 1,
    "explanation": "Un recurso debe estar accesible y aplicado al tipo correcto; además hay que comprobar legibilidad del resultado."
  }
];
export const challenges = [
  {
    "id": "reto-ra1-ab",
    "criterion": "RA1-AB",
    "packageId": "relacion-1",
    "title": "Conecta la interfaz y el comportamiento de un formulario",
    "requirements": [
      "Identifica x:Class y su clase partial.",
      "Nombra una entrada y muestra su valor desde un evento."
    ],
    "hints": [
      "Localiza InitializeComponent en el constructor.",
      "La entrada debe formar parte del árbol visual y ser accesible por x:Name."
    ],
    "solution": "Declara el control en XAML, conserva x:Class alineado con la clase partial e inicializa la página antes de leer sus controles. El manejador actualiza la etiqueta; no dibuja una segunda interfaz paralela.",
    "verification": "Explica el recorrido XAML → InitializeComponent → evento → propiedad Text y comprueba el resultado al ejecutar.",
    "files": [
      "Relacion1E01_Estudio/Ejercicio01.xaml.cs",
      "Relacion1E02_Estudio/Ejercicio01.xaml.cs"
    ]
  },
  {
    "id": "reto-ra1-c",
    "criterion": "RA1-C",
    "packageId": "relacion-2",
    "title": "Reconstruye las dos distribuciones de la calculadora",
    "requirements": [
      "Haz una versión solo con StackLayout y otra con Grid.",
      "Conserva botones, visor y lógica de cálculo."
    ],
    "hints": [
      "Dibuja filas y columnas antes de programar.",
      "En Grid los índices empiezan en cero; el visor puede usar ColumnSpan."
    ],
    "solution": "Las filas horizontales dentro de una pila vertical resuelven la primera versión. Define el Grid y posiciones para la segunda. Ambas delegan en el mismo modelo y manejadores.",
    "verification": "Calcula 7 / 2 en ambas y contrasta posiciones y botones con el PDF. La relación completa incluye también las dos versiones en C#.",
    "files": [
      "Relacion2_Estudio/Ejercicio02.xaml"
    ]
  },
  {
    "id": "reto-ra1-d",
    "criterion": "RA1-D",
    "packageId": "relacion-1",
    "title": "Justifica las propiedades de un formulario",
    "requirements": [
      "Configura nombres, longitudes y teclado conforme al enunciado.",
      "Mantén validación aunque el View limite la entrada."
    ],
    "hints": [
      "Separa ayuda de entrada de regla de negocio.",
      "MaxLength no comprueba el mínimo y Keyboard no garantiza un entero."
    ],
    "solution": "Da identidad a los controles necesarios y configura sus propiedades visuales y de entrada. Valida nombre 3–20, apellidos 4–40 y edad 5–70 en el modelo o flujo de validación.",
    "verification": "Prueba vacíos, texto en edad y longitudes fronterizas; explica cada propiedad seleccionada.",
    "files": [
      "Relacion1E01_Estudio/Ejercicio01.xaml",
      "Relacion1E02_Estudio/Ejercicio01.xaml"
    ]
  },
  {
    "id": "reto-ra1-e",
    "criterion": "RA1-E",
    "packageId": "relacion-3",
    "title": "Explica y adapta los miembros del tablero",
    "requirements": [
      "Identifica un campo, un método y una propiedad relevante.",
      "Mantén estado independiente por botón."
    ],
    "hints": [
      "Busca quién recuerda el color original y la fase del ciclo.",
      "Una variable local del evento no conserva el estado entre clics."
    ],
    "solution": "La página compone el tablero y cada MiBoton conserva su propio estado. Añade miembros en archivos de usuario, no en obj; separa construcción y respuesta al clic.",
    "verification": "Pulsa el botón 1 y el 2; ambos deben estar en la misma fase sin compartir un único contador global.",
    "files": [
      "Relacion3_Estudio/Ejercicio02.cs"
    ]
  },
  {
    "id": "reto-ra1-f",
    "criterion": "RA1-F",
    "packageId": "relacion-2",
    "title": "Separa cálculo y estado de pantalla",
    "requirements": [
      "Distingue una operación estática de una instancia con estado.",
      "Evita recrear el modelo en cada pulsación."
    ],
    "hints": [
      "El primer operando debe sobrevivir hasta pulsar igual.",
      "Las reglas pueden recibir parámetros; el estado pertenece a la instancia."
    ],
    "solution": "Conserva una Calculadora por pantalla. Las operaciones reutilizables reciben operandos y operador; los campos de cada instancia representan su secuencia de entrada.",
    "verification": "Explica qué ocurre entre 7, /, 2 e igual y por qué dos calculadoras no deben mezclar datos.",
    "files": [
      "Relacion2_Estudio/Calculadora.cs"
    ]
  },
  {
    "id": "reto-ra1-g",
    "criterion": "RA1-G",
    "packageId": "relacion-2",
    "title": "Conecta un manejador de dígitos compartido",
    "requirements": [
      "Conecta todos los botones de dígitos una sola vez.",
      "Identifica el emisor y conserva el flujo de estado."
    ],
    "hints": [
      "Compara Clicked en XAML con += en C#.",
      "Comprueba sender is Button antes de leer Text."
    ],
    "solution": "Suscribe los dígitos al mismo método, identifica el Button y delega su valor en el modelo. No dupliques la suscripción en constructor y XAML.",
    "verification": "Pulsa 1, 2 y 3: debe aparecer 123, no 112233 ni el mismo dígito para todos.",
    "files": [
      "Relacion2_Estudio/Ejercicio01.xaml.cs"
    ]
  },
  {
    "id": "reto-ra1-h",
    "criterion": "RA1-H",
    "packageId": "relacion-2",
    "title": "Recupera la calculadora tras un error",
    "requirements": [
      "Gestiona división por cero y desbordamiento.",
      "Comunica el error y permite una nueva operación."
    ],
    "hints": [
      "Limpiar el visor no siempre reinicia operandos y operador.",
      "checked detecta desbordamientos; el consumidor debe tratar el error."
    ],
    "solution": "Captura los errores previstos en el flujo de UI, informa al usuario y restablece el modelo y la vista coherentemente. No produzcas un cero ficticio.",
    "verification": "Prueba 8 / 0, 2147483647 + 1 y después 2 + 3; el último resultado debe ser 5.",
    "files": [
      "Relacion2_Estudio/Calculadora.cs"
    ]
  },
  {
    "id": "reto-ra3-a",
    "criterion": "RA3-A",
    "packageId": "relacion-5",
    "title": "Localiza las fronteras de las bibliotecas",
    "requirements": [
      "Identifica la biblioteca MAUI de Views y el modelo o reglas de datos.",
      "Explica qué proyecto se inicia y qué proyectos se referencian."
    ],
    "hints": [
      "Una biblioteca no tiene por qué tener ventana propia.",
      "Lee los ProjectReference y namespaces de la aplicación anfitriona."
    ],
    "solution": "La biblioteca define controles reutilizables y las reglas independientes del formulario; el anfitrión referencia esos tipos. Compila y muestra el consumo real.",
    "verification": "Abre el proyecto consumidor, identifica las referencias y localiza el ensamblado de salida de la biblioteca.",
    "files": [
      "BLoginViews_Estudio/EntryNombreUsuario.cs"
    ]
  },
  {
    "id": "reto-ra3-b",
    "criterion": "RA3-B",
    "packageId": "relacion-6",
    "title": "Compón un LoginView reutilizable",
    "requirements": [
      "Agrupa los dos Entry especializados en un ContentView.",
      "Consume el componente desde el botón de la página anfitriona y conserva las validaciones."
    ],
    "hints": [
      "ContentView compone; Entry se especializa por herencia.",
      "El consumidor no debería reconstruir los controles internos."
    ],
    "solution": "El LoginView de referencia contiene las dos entradas y expone UserName y PassWord mediante lecturas validadas. El botón pertenece a Solucion.xaml, en la página anfitriona. Reutiliza los controles especializados sin duplicar sus reglas.",
    "verification": "Muestra LoginView en una app y compara sus elementos con la relación 6; revisa también ambos Views de la relación 8.",
    "files": [
      "BAcceso_Estudio/LoginView.xaml"
    ]
  },
  {
    "id": "reto-ra3-c",
    "criterion": "RA3-C",
    "packageId": "relacion-8",
    "title": "Prueba el contrato público de ViewMayorEdad",
    "requirements": [
      "Lee valores iniciales y cambia fecha y límite desde la página.",
      "Rechaza límite 12 y recalcula al cambiar uno válido."
    ],
    "hints": [
      "El setter debe validar antes de sustituir el valor anterior.",
      "Una propiedad pública debe mantener sincronizados estado y controles internos."
    ],
    "solution": "En ViewMayorEdadEstudio, FechaNacimiento permite configurar la fecha, Edad expone el cálculo y MayoriaEdad define el límite inicial 18. El setter valida con Reglas.Limite antes de asignar y llama a Actualizar. Usa esos nombres reales desde la página y explica si otra API necesitaría BindableProperty para binding; no la añadas por rutina.",
    "verification": "Conserva el límite anterior tras asignar 12; cambia a uno >12 y comprueba que se recalcula la mayoría de edad.",
    "files": [
      "BRelacion07Estudio/ViewMayorEdadEstudio.xaml.cs"
    ]
  },
  {
    "id": "reto-ra3-de",
    "criterion": "RA3-DE",
    "packageId": "relacion-6",
    "title": "Amplía una copia con un evento público de acceso",
    "requirements": [
      "Parte de una copia de LoginView: el paquete original no tiene evento público ni botón interno.",
      "Añade a la copia una acción, validación y evento público; suscríbelo desde el anfitrión."
    ],
    "hints": [
      "En el original, Solucion.xaml contiene el botón y lee UserName y PassWord; no busques un evento público que no existe.",
      "En tu ampliación, valida ambas lecturas antes de invocar AccesoSolicitado?.Invoke(this, EventArgs.Empty)."
    ],
    "solution": "Ampliación didáctica para practicar RA3-DE, no requisito añadido al PDF de R6: en una copia, declara public event EventHandler? AccesoSolicitado; añade la acción de solicitud, lee las propiedades validadas y notifica solo cuando las dos sean válidas. El anfitrión se suscribe una vez. El ejemplo original mantiene su botón externo y sus propiedades de lectura.",
    "verification": "En tu copia ampliada prueba campos vacíos, datos válidos y clic repetido; una solicitud válida debe producir una notificación. En el paquete sin ampliar, comprueba el evento del botón anfitrión y la lectura validada, sin afirmar que hay evento público del componente.",
    "files": [
      "BAcceso_Estudio/LoginView.xaml.cs"
    ]
  },
  {
    "id": "reto-ra3-f",
    "criterion": "RA3-F",
    "packageId": "relacion-6",
    "title": "Documenta el componente para otra persona",
    "requirements": [
      "Describe API, valores iniciales, restricciones y errores.",
      "Incluye ejemplo de referencia, creación y suscripción."
    ],
    "hints": [
      "Piensa en alguien que solo ve la biblioteca.",
      "Para cada evento explica cuándo se emite y qué puede leer su suscriptor."
    ],
    "solution": "Documenta el contrato real: LoginView contiene dos entradas, el constructor llama a InitializeComponent y UserName/PassWord son propiedades de solo lectura que validan al acceder. El botón está en Solucion.xaml del anfitrión. No atribuyas eventos públicos a este componente; documenta aparte la ampliación opcional del reto RA3-DE si la has realizado.",
    "verification": "Otra persona debe poder añadirlo y utilizarlo sin abrir su implementación interna.",
    "files": [
      "BAcceso_Estudio/LoginView.xaml.cs"
    ]
  },
  {
    "id": "reto-ra3-gh",
    "criterion": "RA3-GH",
    "packageId": "relacion-6",
    "title": "Demuestra la integración de la biblioteca",
    "requirements": [
      "Compila la biblioteca e identifica su DLL.",
      "Referencia el proyecto y utiliza el componente en una página."
    ],
    "hints": [
      "Revisa ProjectReference antes de corregir el XAML.",
      "El xmlns necesita namespace y assembly reales, no el nombre de la página."
    ],
    "solution": "Añade la referencia a BAcceso_Estudio, declara su namespace Estudio y assembly real e instancia LoginView. En Solucion.xaml el botón pertenece al anfitrión; su manejador Mostrar lee UserName y PassWord y trata ArgumentException. Los eventos públicos del componente solo se prueban en la ampliación didáctica RA3-DE.",
    "verification": "Comprueba la compilación de biblioteca y anfitrión, una lectura válida y otra inválida desde el botón externo; no uses MainPage, que conserva la plantilla y no es la página de prueba.",
    "files": [
      "LoginAccesoV2_Estudio/Solucion.xaml",
      "LoginAccesoV2_Estudio/Solucion.xaml.cs"
    ]
  },
  {
    "id": "reto-ra4-abc",
    "criterion": "RA4-ABC",
    "packageId": "relacion-4",
    "title": "Audita todos los destinos del menú flotante",
    "requirements": [
      "Revisa los tres proyectos de navegación de la relación 4.",
      "Abre todas las variantes de formulario, calculadora y tablero."
    ],
    "hints": [
      "Enumera destinos antes de tocar Shell.",
      "Una página en disco no implica que sea accesible desde el menú."
    ],
    "solution": "Relaciona cada destino requerido con su entrada de menú y ShellContent. Conserva títulos y comportamiento de los ejercicios de origen.",
    "verification": "Recorre 2 formularios, 4 calculadoras y 2 tableros en sus aplicaciones correspondientes, vuelve y repite.",
    "files": [
      "Ejercicio1_Estudio/AppShell.xaml",
      "Ejercicio2_Estudio/AppShell.xaml"
    ]
  },
  {
    "id": "reto-ra4-de",
    "criterion": "RA4-DE",
    "packageId": "relacion-1",
    "title": "Reproduce el modelo sin recortar contenido",
    "requirements": [
      "Distingue alineación, Spacing, Padding y Margin.",
      "Contrasta la versión mixta con la captura del PDF."
    ],
    "hints": [
      "El espacio interior pertenece a Padding.",
      "No uses dimensiones rígidas para tapar una distribución incorrecta."
    ],
    "solution": "Organiza grupos según la captura, alinea etiquetas y entradas y usa separaciones con intención. Comprueba ventanas estrechas sin modificar las reglas del formulario.",
    "verification": "Las etiquetas y botones deben seguir accesibles con nombres largos y al reducir el ancho.",
    "files": [
      "Relacion1E01_Estudio/Ejercicio02.xaml",
      "Relacion1E02_Estudio/Ejercicio02.xaml"
    ]
  },
  {
    "id": "reto-ra4-fghi",
    "criterion": "RA4-FGHI",
    "packageId": "relacion-7",
    "title": "Contrasta recursos estáticos y dinámicos",
    "requirements": [
      "Aplica las variantes de la relación 7.",
      "Explica ProvideValue, claves, ámbito y personalización pública."
    ],
    "hints": [
      "Localiza la clave FondoLayout y cómo la consume cada variante.",
      "Reemplazar un recurso no es lo mismo que asignar un color directamente al View."
    ],
    "solution": "Compara extensiones propias, x:Static, recursos estáticos y dinámicos en sus proyectos. Sustituye FondoLayout y observa cuál conserva la vinculación. Revisa estilos y legibilidad en Learn recursos.",
    "verification": "La variante dinámica refleja el recurso sustituido; documenta el resultado estático y prueba los valores de plataforma en su plataforma correspondiente.",
    "files": [
      "BAccesoPropias/LoginView.xaml",
      "BAccesoRecursosDinamicos/LoginView.xaml"
    ]
  }
];
export const codeActivities = [
  {
    "id": "codigo-r1-explicar",
    "kind": "explicar",
    "criterion": "RA1-AB",
    "packageId": "relacion-1",
    "title": "Del clic al resultado",
    "code": "if (!int.TryParse(EdadEntry.Text, out int edad))\n    throw new ArgumentException(\"Edad no válida\");\nResultadoLabel.Text = edad >= 18 ? \"Tiene acceso\" : \"No tiene acceso\";",
    "answer": "La conversión comprueba el formato; la decisión por 18 determina acceso. Falta en este fragmento comprobar el intervalo 5–70 y las longitudes del nombre y apellidos: se necesita el flujo completo del formulario.",
    "checks": [
      "Conversión de Text a int",
      "Formato frente a reglas y umbral de acceso",
      "Actualización de la etiqueta y gestión de excepciones"
    ],
    "files": [
      "Relacion1E01_Estudio/Ejercicio01.xaml.cs"
    ]
  },
  {
    "id": "codigo-r1-corregir",
    "kind": "corregir",
    "criterion": "RA1-H",
    "packageId": "relacion-1",
    "title": "Localiza el fallo · Relación 1 · acceso vertical y mixto",
    "code": "int edad = int.Parse(EdadEntry.Text);\nResultadoLabel.Text = \"Tiene acceso\";",
    "answer": "No valida formato, rango ni umbral y permite conservar información engañosa. Usa TryParse, valida 5–70 y los demás datos, distingue 5–17 de 18–70; ante error borra el resultado anterior e informa.",
    "checks": [
      "Vacío y texto no numérico",
      "Edades 4, 5, 17, 18, 70 y 71",
      "Resultado limpio y operación válida posterior"
    ],
    "files": [
      "Relacion1E01_Estudio/Ejercicio01.xaml.cs"
    ]
  },
  {
    "id": "codigo-r2-explicar",
    "kind": "explicar",
    "criterion": "RA1-F",
    "packageId": "relacion-2",
    "title": "Estado entre pulsaciones",
    "code": "private int primerOperando;\nprivate char operador;\n\nprivate static int Sumar(int a, int b) => checked(a + b);",
    "answer": "Los campos pertenecen a cada instancia y recuerdan datos entre eventos. Sumar no necesita estado de instancia: recibe datos y detecta desbordamiento. La pantalla debe conservar su modelo y tratar el error.",
    "checks": [
      "Estado por instancia",
      "Método estático con parámetros",
      "checked y tratamiento en el consumidor"
    ],
    "files": [
      "Relacion2_Estudio/Calculadora.cs"
    ]
  },
  {
    "id": "codigo-r2-corregir",
    "kind": "corregir",
    "criterion": "RA1-G",
    "packageId": "relacion-2",
    "title": "Localiza el fallo · Relación 2 · cuatro calculadoras de enteros",
    "code": "boton.Clicked += DigitosClick;\nboton.Clicked += DigitosClick;",
    "answer": "El mismo delegado queda suscrito dos veces y el dígito se procesa dos veces. Mantén una única conexión, en XAML o en C#, y prueba todos los botones compartidos.",
    "checks": [
      "Doble suscripción",
      "Una acción por pulsación",
      "sender identifica el dígito"
    ],
    "files": [
      "Relacion2_Estudio/Calculadora.cs"
    ]
  },
  {
    "id": "codigo-r3-explicar",
    "kind": "explicar",
    "criterion": "RA1-E",
    "packageId": "relacion-3",
    "title": "Estado independiente en un View",
    "code": "public class BotonCiclico : Button\n{\n    private int fase;\n    public void Avanzar() => fase = (fase + 1) % 3;\n}",
    "answer": "Es un ejemplo de especialización de Button. fase es estado privado por instancia; Avanzar recorre 0, 1 y 2. El fragmento no conecta Clicked ni asigna colores: explica qué falta para un botón visual completo.",
    "checks": [
      "Herencia",
      "Campo por instancia y ciclo",
      "Suscripción y actualización visual pendientes"
    ],
    "files": [
      "Relacion3_Estudio/MiBoton.cs"
    ]
  },
  {
    "id": "codigo-r3-corregir",
    "kind": "corregir",
    "criterion": "RA3-B",
    "packageId": "relacion-3",
    "title": "Localiza el fallo · Relación 3 · tableros dinámicos",
    "code": "public class BotonCiclico : Button\n{\n    private static int fase;\n    public void Avanzar() => fase = (fase + 1) % 3;\n}",
    "answer": "static comparte una fase entre todos los botones. Sustitúyelo por un campo de instancia y conserva también el color original por botón.",
    "checks": [
      "Estado compartido accidental",
      "Estado por botón",
      "Prueba alternando dos botones"
    ],
    "files": [
      "Relacion3_Estudio/MiBoton.cs"
    ]
  },
  {
    "id": "codigo-r4-explicar",
    "kind": "explicar",
    "criterion": "RA4-ABC",
    "packageId": "relacion-4",
    "title": "Del menú a la página",
    "code": "<FlyoutItem Title=\"Acceso vertical\">\n    <ShellContent ContentTemplate=\"{DataTemplate local:AccesoVertical}\" />\n</FlyoutItem>",
    "answer": "FlyoutItem aporta un destino del menú y ShellContent crea la página indicada por DataTemplate. local debe apuntar al namespace real. Repite para cada destino requerido y comprueba su funcionamiento.",
    "checks": [
      "Entrada del menú",
      "Tipo y namespace de página",
      "Cobertura de todos los destinos"
    ],
    "files": [
      "Ejercicio1_Estudio/AppShell.xaml"
    ]
  },
  {
    "id": "codigo-r4-corregir",
    "kind": "corregir",
    "criterion": "RA4-DE",
    "packageId": "relacion-4",
    "title": "Localiza el fallo · Relación 4 · tres aplicaciones con menú",
    "code": "<HorizontalStackLayout WidthRequest=\"120\">\n    <Label Text=\"Apellidos completos\" />\n    <Entry WidthRequest=\"200\" />\n</HorizontalStackLayout>",
    "answer": "El ancho pedido al contenedor es menor que el de uno de sus hijos y no reserva espacio flexible. Reestructura con Grid o pilas según el enunciado, usa alineación y separaciones y prueba una ventana estrecha.",
    "checks": [
      "Restricciones contradictorias de ancho",
      "Distribución acorde al modelo",
      "Lectura y acceso sin recortes"
    ],
    "files": [
      "Ejercicio1_Estudio/AppShell.xaml"
    ]
  },
  {
    "id": "codigo-r5-explicar",
    "kind": "explicar",
    "criterion": "RA3-A",
    "packageId": "relacion-5",
    "title": "Especialización y contrato del control",
    "code": "public class EntradaUsuario : Entry\n{\n    public EntradaUsuario()\n    {\n        MaxLength = 15;\n        Placeholder = \"Usuario\";\n    }\n}",
    "answer": "La clase hereda la funcionalidad de Entry y fija propiedades iniciales en el constructor. MaxLength limita la entrada, pero no comprueba mínimo 5 ni letras A–Z/a–z de la convención del ejemplo. La biblioteca y el consumidor deben conservar la validación.",
    "checks": [
      "Herencia y constructor",
      "Propiedades iniciales",
      "Límites de MaxLength y reglas de usuario"
    ],
    "files": [
      "BLoginViews_Estudio/EntryNombreUsuario.cs"
    ]
  },
  {
    "id": "codigo-r5-corregir",
    "kind": "corregir",
    "criterion": "RA1-D",
    "packageId": "relacion-5",
    "title": "Localiza el fallo · Relación 5 · biblioteca de entradas",
    "code": "public bool EsValido(string texto) => texto.Length <= 15;",
    "answer": "Acepta vacío, cuatro letras y caracteres no permitidos; además no trata null. Valida longitud 5–15 y alfabeto documentado antes de aceptar.",
    "checks": [
      "Nulo y vacío",
      "Longitudes 4, 5, 15 y 16",
      "Dígitos, acentos y convención del ejemplo"
    ],
    "files": [
      "BLoginViews_Estudio/EntryNombreUsuario.cs"
    ]
  },
  {
    "id": "codigo-r6-explicar",
    "kind": "explicar",
    "criterion": "RA3-DE",
    "packageId": "relacion-6",
    "title": "Notificación después de validar",
    "code": "public event EventHandler? AccesoSolicitado;\n\nprivate void SolicitarAcceso()\n{\n    ValidarDatos();\n    AccesoSolicitado?.Invoke(this, EventArgs.Empty);\n}",
    "answer": "Ampliación didáctica, ausente en el LoginView original: ValidarDatos representa la validación de ambas lecturas antes de notificar. AccesoSolicitado es un evento que añadirías en una copia; el consumidor se suscribe y lee propiedades públicas coherentes. En el original, el botón está en Solucion.xaml del anfitrión y lee UserName/PassWord sin evento público del componente.",
    "checks": [
      "Evento público y consumidor",
      "Validación antes de notificar",
      "Estado público coherente y errores"
    ],
    "files": [
      "BAcceso_Estudio/LoginView.xaml.cs"
    ]
  },
  {
    "id": "codigo-r6-corregir",
    "kind": "corregir",
    "criterion": "RA3-GH",
    "packageId": "relacion-6",
    "title": "Localiza el fallo · Relación 6 · LoginView compuesto",
    "code": "xmlns:acceso=\"clr-namespace:BibliotecaQueNoExiste;assembly:OtroEnsamblado\"",
    "answer": "Es una referencia deliberadamente incorrecta. Revisa el ProjectReference del anfitrión y sustituye namespace y assembly por los reales de la biblioteca. Compila y usa el componente; no copies su clase al anfitrión.",
    "checks": [
      "Referencia de proyecto",
      "Namespace y assembly reales",
      "Uso efectivo de propiedades y eventos"
    ],
    "files": [
      "BAcceso_Estudio/LoginView.xaml.cs"
    ]
  },
  {
    "id": "codigo-r7-explicar",
    "kind": "explicar",
    "criterion": "RA4-FGHI",
    "packageId": "relacion-7",
    "title": "Resolución de un recurso dinámico",
    "code": "<VerticalStackLayout BackgroundColor=\"{DynamicResource FondoLayout}\" />\n\n<!-- En el diccionario visible para el View: -->\n<!-- Resources[\"FondoLayout\"] = Colors.Beige; (C#) -->",
    "answer": "DynamicResource conserva la vinculación a FondoLayout y actualiza el fondo al sustituir esa clave en el ámbito apropiado. StaticResource resuelve el valor sin esa actualización automática. El diccionario debe ser accesible al elemento.",
    "checks": [
      "Clave y ámbito",
      "Vinculación dinámica",
      "Diferencia con StaticResource"
    ],
    "files": [
      "BAccesoPropias/LoginView.xaml"
    ]
  },
  {
    "id": "codigo-r7-corregir",
    "kind": "corregir",
    "criterion": "RA4-FGHI",
    "packageId": "relacion-7",
    "title": "Localiza el fallo · Relación 7 · cuatro variantes de personalización",
    "code": "<Style x:Key=\"TextoLegible\" TargetType=\"Label\">\n    <Setter Property=\"TextColor\" Value=\"White\" />\n    <Setter Property=\"BackgroundColor\" Value=\"White\" />\n</Style>",
    "answer": "El texto blanco sobre blanco no es legible. Selecciona colores con contraste suficiente, aplica el estilo al tipo correcto y comprueba tamaño y lectura en la pantalla real.",
    "checks": [
      "Texto y fondo distinguibles",
      "TargetType y aplicación del estilo",
      "Legibilidad en el resultado"
    ],
    "files": [
      "BAccesoPropias/LoginView.xaml"
    ]
  },
  {
    "id": "codigo-r8-explicar",
    "kind": "explicar",
    "criterion": "RA3-C",
    "packageId": "relacion-8",
    "title": "Propiedad con validación previa",
    "code": "private int limite = 18;\npublic int Limite\n{\n    get => limite;\n    set\n    {\n        if (value <= 12) throw new ArgumentException(\"Límite mayor que 12\");\n        limite = value;\n        Recalcular();\n    }\n}",
    "answer": "El valor inicial es 18. El setter valida antes de escribir y recalcula con un límite aceptado; si lanza excepción conserva el anterior. Recalcular es un método del componente en este ejemplo, no una API de MAUI.",
    "checks": [
      "Valor inicial",
      "Validación antes de mutar",
      "Recalcular y conservar estado tras rechazo"
    ],
    "files": [
      "BRelacion07Estudio/ViewMayorEdadEstudio.xaml.cs"
    ]
  },
  {
    "id": "codigo-r8-corregir",
    "kind": "corregir",
    "criterion": "RA3-F",
    "packageId": "relacion-8",
    "title": "Localiza el fallo · Relación 8 · matrícula y mayoría de edad",
    "code": "/// <summary>Hace cosas.</summary>\npublic event EventHandler? Cambio;",
    "answer": "La documentación no describe el contrato. Explica la información que cambia, cuándo se emite, los datos accesibles, restricciones y un ejemplo de suscripción; el nombre por sí solo no permite consumirlo.",
    "checks": [
      "Momento y motivo del evento",
      "Datos y restricciones",
      "Ejemplo de integración"
    ],
    "files": [
      "BRelacion07Estudio/ViewMayorEdadEstudio.xaml.cs"
    ]
  }
];
export const practiceCases = [
  {
    "id": "caso-r1-01",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Nombre de 2 caracteres",
    "expected": "Error de longitud.",
    "why": "Validación de formato, límites y acceso del formulario.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r1-02",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Nombre de 3 y apellidos de 4; edad 17",
    "expected": "Datos válidos; No tiene acceso al sistema.",
    "why": "Validación de formato, límites y acceso del formulario.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r1-03",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Datos válidos; edad 18",
    "expected": "Tiene acceso al sistema, con apellidos y nombre.",
    "why": "Validación de formato, límites y acceso del formulario.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r1-04",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Edad 4, 71 o texto",
    "expected": "Alerta y etiqueta de resultado vacía.",
    "why": "Validación de formato, límites y acceso del formulario.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r1-05",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Nombre 20 y apellidos 40 caracteres; edad 70",
    "expected": "Datos válidos, acceso concedido.",
    "why": "Comprueba los extremos superiores incluidos.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r1-06",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Nombre 21 o apellidos 3/41 caracteres",
    "expected": "Error; no conservar resultado de éxito.",
    "why": "Comprueba longitud mínima y máxima sin confundir los campos.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r1-07",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Vaciar cada campo después de un acceso válido",
    "expected": "Error y etiqueta de resultado vacía.",
    "why": "Comprueba obligatoriedad y recuperación de un éxito anterior.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r1-08",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Edades 5 y 17 con nombres válidos; después 18",
    "expected": "5–17: datos válidos sin acceso; 18: acceso.",
    "why": "Separa rango válido del umbral de mayoría.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r1-09",
    "packageId": "relacion-1",
    "criteria": [
      "RA1-C",
      "RA1-H",
      "RA4-DE"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-1, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Repetir una entrada válida tras un error en ambas distribuciones",
    "expected": "Misma respuesta y posibilidad de continuar.",
    "why": "Comprueba recuperación y equivalencia vertical/mixta.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r2-01",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-F",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "7 / 2 =",
    "expected": "3, por división entera.",
    "why": "Estado, operaciones enteras y tratamiento de errores de la calculadora.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r2-02",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "8 / 0 =",
    "expected": "Alerta y reinicio de la calculadora.",
    "why": "Estado, operaciones enteras y tratamiento de errores de la calculadora.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r2-03",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Igual sin operador",
    "expected": "Error; no se muestra un cero ficticio.",
    "why": "Estado, operaciones enteras y tratamiento de errores de la calculadora.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r2-04",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-F",
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Resultado seguido de un dígito",
    "expected": "Comienza una nueva operación.",
    "why": "Estado, operaciones enteras y tratamiento de errores de la calculadora.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r2-05",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "2147483647 + 1",
    "expected": "Desbordamiento detectado.",
    "why": "Estado, operaciones enteras y tratamiento de errores de la calculadora.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r2-06",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-F",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "7 % 2, 4 - 9 y 3 * 4",
    "expected": "1, -5 y 12 respectivamente.",
    "why": "Cubre operaciones y resultado negativo.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r2-07",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "8 % 0; después 2 + 3",
    "expected": "Error y recuperación; después resultado 5.",
    "why": "El resto también falla con divisor cero.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r2-08",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-F",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Operador sin primer operando o igual con segundo vacío",
    "expected": "Error informado sin resultado ficticio.",
    "why": "Cubre secuencias incompletas.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r2-09",
    "packageId": "relacion-2",
    "criteria": [
      "RA1-C",
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-2, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Repetir 7 / 2 en Stack/Grid XAML y Stack/Grid C#",
    "expected": "Resultado 3 y controles operativos en las cuatro.",
    "why": "Cubre todas las variantes del PDF.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r3-01",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-C",
      "RA1-E"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Inicio",
    "expected": "25 botones numerados 1–25.",
    "why": "Numeración y estado por botón en ambas variantes.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r3-02",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Clic en 25 en primera versión",
    "expected": "Has pulsado el botón 25.",
    "why": "Numeración y estado por botón en ambas variantes.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r3-03",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-E",
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Tres clics en un mismo botón de color",
    "expected": "Verde → rojo → original.",
    "why": "Numeración y estado por botón en ambas variantes.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r3-04",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-E",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Un clic en 1 y un clic en 2",
    "expected": "Los dos verdes; estados independientes.",
    "why": "Numeración y estado por botón en ambas variantes.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r3-05",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-C",
      "RA1-E"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Comparar posiciones de 1, 5, 6 y 25",
    "expected": "Filas de cinco: 1–5, 6–10, hasta 21–25.",
    "why": "Verifica índices y numeración, no solo cantidad.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r3-06",
    "packageId": "relacion-3",
    "criteria": [
      "RA1-E",
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Ciclo completo y nueva pulsación sobre el mismo botón",
    "expected": "Vuelve al original en el tercer clic y a verde en el cuarto.",
    "why": "Comprueba repetición de estado.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r3-07",
    "packageId": "relacion-3",
    "criteria": [
      "RA3-B",
      "RA1-G"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-3, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Probar los dos tableros de la relación",
    "expected": "Primero informa el número; segundo cambia colores por botón.",
    "why": "Cubre ambas variantes sin confundir sus acciones.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r4-01",
    "packageId": "relacion-4",
    "criteria": [
      "RA4-ABC"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Ejercicio1",
    "expected": "Acceso Vertical y Acceso Mixto.",
    "why": "Menú flotante y conservación del comportamiento de cada destino.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r4-02",
    "packageId": "relacion-4",
    "criteria": [
      "RA4-ABC"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Ejercicio2",
    "expected": "Cuatro calculadoras con sus títulos.",
    "why": "Menú flotante y conservación del comportamiento de cada destino.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r4-03",
    "packageId": "relacion-4",
    "criteria": [
      "RA4-ABC"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Ejercicio3",
    "expected": "Tablero Dinámico y Tablero Dinámico Color.",
    "why": "Menú flotante y conservación del comportamiento de cada destino.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r4-04",
    "packageId": "relacion-4",
    "criteria": [
      "RA4-ABC",
      "RA1-G",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Abrir un destino y utilizarlo",
    "expected": "Conserva validaciones, eventos y resultados de la relación de origen.",
    "why": "Menú flotante y conservación del comportamiento de cada destino.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r4-05",
    "packageId": "relacion-4",
    "criteria": [
      "RA4-ABC"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Abrir y volver a cada destino de los tres proyectos",
    "expected": "Acceso a 2 formularios, 4 calculadoras y 2 tableros.",
    "why": "Audita cobertura del menú.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r4-06",
    "packageId": "relacion-4",
    "criteria": [
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-4, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Introducir dato inválido en formulario y dividir entre cero desde el menú",
    "expected": "Se mantienen las validaciones de R1 y los errores de R2.",
    "why": "Navegar no debe eliminar comportamiento de origen.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r5-01",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Usuario de 4 o 16 letras",
    "expected": "Rechazado.",
    "why": "Restricciones de los Views especializados según la convención documentada.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r5-02",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Usuario de 5–15 letras A-Z/a-z",
    "expected": "Aceptado bajo la convención indicada.",
    "why": "Restricciones de los Views especializados según la convención documentada.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r5-03",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Usuario con acento o dígito",
    "expected": "Rechazado.",
    "why": "Restricciones de los Views especializados según la convención documentada.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r5-04",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Abcdef1.;Z (10 caracteres)",
    "expected": "Contraseña aceptada.",
    "why": "Restricciones de los Views especializados según la convención documentada.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r5-05",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA3-B"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Contraseña sin una categoría o longitud distinta de 10",
    "expected": "Rechazada.",
    "why": "Restricciones de los Views especializados según la convención documentada.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r5-06",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Usuario vacío y contraseña vacía",
    "expected": "Rechazados con información del error.",
    "why": "Cubre obligatoriedad.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r5-07",
    "packageId": "relacion-5",
    "criteria": [
      "RA1-D"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Contraseñas de 9 y 11 caracteres con todas las categorías",
    "expected": "Rechazadas: la longitud debe ser exactamente 10.",
    "why": "Separa composición de longitud.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r5-08",
    "packageId": "relacion-5",
    "criteria": [
      "RA3-B",
      "RA1-F"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-5, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Crear dos instancias con textos distintos",
    "expected": "Cada View conserva sus propios datos.",
    "why": "Detecta estado static accidental.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r6-01",
    "packageId": "relacion-6",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-6, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Dos datos válidos",
    "expected": "El anfitrión puede leer UserName y PassWord.",
    "why": "Contrato público, validación e integración del componente.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r6-02",
    "packageId": "relacion-6",
    "criteria": [
      "RA3-DE",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-6, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Campo vacío y clic directo en botón",
    "expected": "Error aunque no se haya disparado Unfocused.",
    "why": "Contrato público, validación e integración del componente.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r6-03",
    "packageId": "relacion-6",
    "criteria": [
      "RA3-GH"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-6, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Biblioteca sin referencia",
    "expected": "No debe considerarse resuelta la integración.",
    "why": "Contrato público, validación e integración del componente.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r6-04",
    "packageId": "relacion-6",
    "criteria": [
      "RA1-H",
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-6, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Tras un intento inválido, completar datos válidos y pulsar el botón del anfitrión",
    "expected": "El manejador Mostrar puede leer UserName y PassWord actuales y mostrar los datos de prueba.",
    "why": "Comprueba recuperación y contrato público.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r6-05",
    "packageId": "relacion-6",
    "criteria": [
      "RA3-DE"
    ],
    "preparation": "Abrir el paquete de R6 y trabajar sobre una copia ampliada según el reto RA3-DE. El LoginView original no tiene evento público; su botón está en el anfitrión.",
    "action": "En la copia ampliada, suscribir AccesoSolicitado una vez y solicitar acceso con datos válidos",
    "expected": "Una notificación pública después de validar las dos propiedades. Con datos inválidos no se notifica y se informa del error.",
    "why": "Detecta conexiones duplicadas.",
    "origin": "Ampliación didáctica del reto RA3-DE; no existe en el ZIP original"
  },
  {
    "id": "caso-r6-06",
    "packageId": "relacion-6",
    "criteria": [
      "RA3-F",
      "RA3-GH"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-6, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Revisar documentación y compilar ambos proyectos",
    "expected": "API explicada, DLL generada y View usado por la aplicación.",
    "why": "Integra documentación y empaquetado real.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r7-01",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Extensiones propias / x:Static",
    "expected": "Las cinco propiedades se asignan con el mecanismo de esa variante.",
    "why": "Mecanismo de asignación, ámbito y actualización visual.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r7-02",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Windows frente a Android",
    "expected": "Valores definidos distintos para plataforma y tipo de View; Android requiere comprobación allí.",
    "why": "Mecanismo de asignación, ámbito y actualización visual.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r7-03",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Reemplazar FondoLayout en estática",
    "expected": "No actualiza automáticamente el color inicial.",
    "why": "Mecanismo de asignación, ámbito y actualización visual.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r7-04",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Reemplazar FondoLayout en dinámica",
    "expected": "Actualiza el fondo mientras sigue vinculado a la clave.",
    "why": "Mecanismo de asignación, ámbito y actualización visual.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r7-05",
    "packageId": "relacion-7",
    "criteria": [
      "RA3-C",
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Personalizar desde anfitrión",
    "expected": "Los cambios públicos se ven en los elementos internos.",
    "why": "Mecanismo de asignación, ámbito y actualización visual.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r7-06",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Leer las cinco propiedades en variantes propias y x:Static",
    "expected": "Coinciden con los valores definidos por cada mecanismo.",
    "why": "Evita una sustitución parcial.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r7-07",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Aplicar recurso fuera de su ámbito o con clave incorrecta en una copia de práctica",
    "expected": "Detectar el error, corregir clave/ámbito y restaurar ejecución.",
    "why": "Comprueba comprensión del diccionario sin alterar fuentes de referencia.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r7-08",
    "packageId": "relacion-7",
    "criteria": [
      "RA4-FGHI"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-7, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Contrastar colores y fuentes en la aplicación",
    "expected": "Texto distinguible, tamaños legibles y personalización visible.",
    "why": "Comprueba la finalidad visual de recursos y estilos.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r8-01",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-B",
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "0000-BBB",
    "expected": "Matrícula válida; fondo informativo transparente.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-02",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C",
      "RA1-H"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "0000-BAA o cadena más larga",
    "expected": "Error y etiqueta amarilla.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-03",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Asignar matrícula inválida por propiedad",
    "expected": "Se rechaza antes de sustituir el valor anterior.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-04",
    "packageId": "relacion-8",
    "criteria": [
      "RA1-H",
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Fecha futura",
    "expected": "Error específico de futuro.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-05",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Hoy es el cumpleaños número 18",
    "expected": "Edad 18, mayor bajo límite por defecto.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-06",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Límite 12",
    "expected": "Rechazado; se conserva el límite anterior.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-07",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Cambiar a límite válido >12",
    "expected": "Se recalcula el estado actual.",
    "why": "Validación, cálculo y estado de los Views compuestos.",
    "origin": "Caso de la solución existente"
  },
  {
    "id": "caso-r8-08",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "0000-BBB, 9999-ZZZ y 0000-BAA",
    "expected": "Las dos primeras válidas; la tercera no, bajo el alfabeto documentado.",
    "why": "Comprueba extremos y vocales.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r8-09",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Día anterior al cumpleaños 18; mismo día; día posterior",
    "expected": "17, 18 y 18 años respectivamente.",
    "why": "Comprueba el cálculo por cumpleaños, no solo resta de años.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r8-10",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C",
      "RA1-F"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Leer valores iniciales y probar dos instancias independientes",
    "expected": "Límite inicial documentado y estado independiente.",
    "why": "Comprueba constructor y contrato.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r8-11",
    "packageId": "relacion-8",
    "criteria": [
      "RA1-H",
      "RA3-C"
    ],
    "preparation": "Abrir Soluciones.slnx del paquete relacion-8, elegir el proyecto o variante indicada y ejecutar en Windows. Para variantes Android, usar ese destino; no darlo por verificado en Windows.",
    "action": "Tras fecha futura, introducir fecha válida",
    "expected": "Se limpia el error y se recalcula el estado.",
    "why": "Comprueba recuperación y actualización visual.",
    "origin": "Ampliación didáctica de comprobación"
  },
  {
    "id": "caso-r8-12",
    "packageId": "relacion-8",
    "criteria": [
      "RA3-C"
    ],
    "preparation": "Probar Reglas.Edad(nacimiento, hoy) con fechas controladas; el View de la aplicación usa DateTime.Today. No cambiar el reloj del sistema.",
    "action": "En una prueba de Reglas.Edad, nacimiento 29/02/2008 y fechas de referencia 27/02/2026 y 28/02/2026",
    "expected": "17 y 18 años respectivamente: DateTime.AddYears ajusta el aniversario al 28 de febrero en 2026.",
    "why": "Verifica de forma reproducible la convención AddYears documentada, sin atribuirla al enunciado del profesor.",
    "origin": "Ampliación didáctica de comprobación"
  }
];
