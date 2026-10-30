// Explicaciones de los ejemplos compilados de examples/EjemplosEstudio.
// El código se extrae con scripts/lesson-examples.py a data/lesson-examples-code.mjs.
export const lessonExamples = [
  {
    "lesson": "navegacion",
    "section": 0,
    "title": "Integrar páginas existentes en un menú flotante",
    "path": "examples/EjemplosEstudio/AppShell.xaml",
    "id": "nav-integrar",
    "context": "La relación pide reunir varias prácticas ya hechas en una sola aplicación con menú lateral. El problema no es reescribirlas, sino decirle a Shell qué páginas existen y cómo se llaman en el menú.",
    "steps": [
      "FlyoutItem es una entrada del menú flotante. Su Title es el texto que ve el usuario.",
      "Dentro de cada FlyoutItem, un ShellContent apunta a una página mediante ContentTemplate=\"{DataTemplate local:NombreDePagina}\".",
      "El prefijo local está declarado en la raíz del Shell y señala el namespace donde viven las páginas. Si el nombre de la clase no coincide, no compila.",
      "DataTemplate hace que Shell cree la página solo cuando el usuario entra en ese destino, no al arrancar.",
      "Para añadir una práctica nueva basta con añadir otro ShellContent; la página no se modifica."
    ],
    "result": "Al abrir el menú aparece la entrada Integración. Al elegir cada destino se muestra la página original con su propia lógica, sin copias."
  },
  {
    "lesson": "navegacion",
    "section": 2,
    "title": "Comprobar qué página aloja Shell",
    "path": "examples/EjemplosEstudio/Paginas/NavVerificar.xaml.cs",
    "id": "nav-verificar",
    "context": "Tras integrar las páginas hay que comprobar que cada destino muestra su propia página y no una ContentPage metida dentro de otra. Este código le pregunta a Shell qué está mostrando.",
    "steps": [
      "Shell.Current es el Shell de la aplicación en ejecución, accesible desde cualquier página.",
      "CurrentPage devuelve la página visible. Puede ser null, por eso se declara Page? y se comprueba antes de usarla.",
      "GetType().Name da el nombre de la clase. Si el destino está bien integrado, coincide con la página que declaraste en ShellContent.",
      "Items.Count cuenta las entradas de primer nivel del menú, útil para ver que no se han duplicado destinos.",
      "El resultado se escribe en la etiqueta para poder leerlo sin depurador."
    ],
    "result": "Al pulsar Comprobar la etiqueta dice, por ejemplo, \"Página mostrada: NavVerificar\" seguido del número de entradas del menú."
  },
  {
    "lesson": "tablero",
    "section": 1,
    "title": "Cada botón recuerda su propio color",
    "path": "examples/EjemplosEstudio/Paginas/TableroCicloColor.xaml.cs",
    "id": "tablero-ciclo-color",
    "context": "En el tablero, cada pulsación cambia el color del botón: verde, rojo y de nuevo el original. Si el contador del ciclo fuera una sola variable de la página, pulsar un botón alteraría el siguiente paso de otro. El problema se resuelve dando a cada botón su propia memoria.",
    "steps": [
      "El enum EstadoColor nombra los tres estados. Es más legible que usar los números 0, 1 y 2.",
      "BotonCiclico hereda de Button, así que sigue siendo un botón y se puede añadir al Grid como cualquier otro.",
      "El campo estado pertenece a cada instancia: veinticinco botones, veinticinco estados independientes.",
      "El constructor fija el color original y suscribe el evento Clicked al método AlPulsar.",
      "AlPulsar avanza el estado con un switch de expresión y vuelve a Original después de Rojo.",
      "Un segundo switch traduce el estado nuevo a un color y lo asigna a BackgroundColor."
    ],
    "result": "Se ve un tablero de 5 por 5 botones azules. Un botón pulsado una vez se pone verde, dos veces rojo y tres veces vuelve al azul, sin afectar a los demás."
  },
  {
    "lesson": "tablero",
    "section": 2,
    "title": "Leer el número del botón con sender",
    "path": "examples/EjemplosEstudio/Paginas/TableroSender.xaml.cs",
    "id": "tablero-sender-text",
    "context": "El tablero se genera con dos bucles y todos los botones comparten un único manejador. Hay que saber qué botón se ha pulsado sin depender de las variables del bucle, que ya habrán cambiado cuando el usuario haga clic.",
    "steps": [
      "GenerarTablero crea cinco filas y cinco columnas con un primer bucle.",
      "Los bucles anidados crean cada botón con su número visible: fila por 5 más columna más 1, de 1 a 25.",
      "Todos los botones suscriben el mismo método BotonPulsado.",
      "Grid.Add(vista, columna, fila) coloca el botón; atención al orden de los dos índices.",
      "En el manejador, sender contiene el botón concreto. El patrón \"is not Button boton\" lo convierte y descarta casos raros.",
      "El mensaje se construye con boton.Text, así que muestra el número que el usuario ve, no el valor de fila o columna en ese instante."
    ],
    "result": "Aparece una cuadrícula numerada de 1 a 25. Al pulsar el botón 13 la etiqueta inferior dice \"Has pulsado el botón 13\"."
  },
  {
    "lesson": "entorno",
    "section": 0,
    "title": "Qué versiones del SDK declara el proyecto",
    "path": "examples/EjemplosEstudio/EjemplosEstudio.csproj",
    "id": "entorno-sdk",
    "context": "SDK Manager instala plataformas y herramientas, pero el proyecto decide contra qué versión mínima se compila y se ejecuta en cada sistema. Este fragmento del .csproj lo deja a la vista.",
    "steps": [
      "Cada línea SupportedOSPlatformVersion tiene una Condition que mira la plataforma del TargetFramework que se está compilando.",
      "Para Android, 21.0 es la versión mínima de API que podrá ejecutar la aplicación. El SDK que instalas debe incluir la plataforma con la que compilas, no solo ese mínimo.",
      "Para iOS y MacCatalyst los números son versiones del sistema Apple.",
      "Para Windows hay dos valores: la versión mínima admitida y TargetPlatformMinVersion, usada al empaquetar.",
      "Cambiar estos números no instala nada: solo declara qué se exige. La instalación sigue siendo cosa del SDK Manager."
    ],
    "result": "No hay pantalla que ver: es configuración. Si bajas la versión mínima por debajo de la que permite MAUI, la compilación avisa; si la subes, los dispositivos antiguos dejan de poder instalar la aplicación."
  },
  {
    "lesson": "entorno",
    "section": 1,
    "title": "Destinos de compilación: dónde puede ejecutarse la app",
    "path": "examples/EjemplosEstudio/EjemplosEstudio.csproj",
    "id": "entorno-dispositivo",
    "context": "Tener el SDK no crea un emulador. Para probar hay que elegir un destino. El proyecto declara qué destinos admite y de ahí salen las opciones que ofrece el entorno de desarrollo.",
    "steps": [
      "TargetFrameworks lista los destinos. Empieza por net10.0-android, que se ejecuta en un dispositivo o emulador creado con Device Manager.",
      "La segunda línea añade iOS y MacCatalyst solo si el sistema no es Linux, porque compilar para Apple exige herramientas de Apple.",
      "La tercera añade net10.0-windows10.0.19041.0 solo en Windows. Es el destino Máquina Windows, que no necesita emulador.",
      "Cada Condition usa IsOSPlatform para decidir según el ordenador donde compilas.",
      "Para una práctica de interfaz basta Máquina Windows; el emulador Android sirve para comprobar el comportamiento en móvil."
    ],
    "result": "En Visual Studio el desplegable de ejecución muestra Máquina Windows y los emuladores Android que hayas creado. Con la línea de comandos, el destino se elige con -f."
  },
  {
    "lesson": "entorno",
    "section": 2,
    "title": "InitializeComponent antes de usar los controles",
    "path": "examples/EjemplosEstudio/Paginas/EntornoArranque.xaml.cs",
    "id": "entorno-arranque",
    "context": "Un proyecto MAUI reparte cada página en dos archivos que forman una sola clase: el XAML declara la interfaz y el code-behind define el comportamiento. Al recorrer un proyecto hay que saber cómo se conectan.",
    "steps": [
      "La clase es partial porque el compilador genera la otra mitad a partir del XAML. Coincide con x:Class=\"Estudio.EntornoArranque\".",
      "El constructor llama primero a InitializeComponent, que construye los controles declarados en XAML.",
      "Esa llamada también crea el campo etiquetaEstado, porque el control tiene x:Name.",
      "Usar etiquetaEstado antes de InitializeComponent produciría un fallo de referencia nula.",
      "Después ya se puede asignar Text, suscribir eventos o leer valores."
    ],
    "result": "La página muestra la frase \"InitializeComponent ya ha construido la interfaz.\" en lugar del texto inicial del XAML."
  },
  {
    "lesson": "formulario",
    "section": 0,
    "title": "Convertir el enunciado en comprobaciones",
    "path": "examples/EjemplosEstudio/Paginas/FormComprobaciones.xaml.cs",
    "id": "formulario-comprobaciones",
    "context": "El enunciado fija rangos de longitud y de edad y pide avisar con una alerta cuando algo falla. Hay que traducir esas frases a comprobaciones ordenadas y distinguir un dato no válido de un menor sin acceso.",
    "steps": [
      "ComprobarDatos devuelve un texto de error o null si todo es correcto. Así el manejador del botón no repite los rangos.",
      "Los límites son inclusivos: nombre de 3 a 20 se escribe con \"menor que 3\" o \"mayor que 20\" como fallo.",
      "int.TryParse evita una excepción si la edad no es un número; el parámetro out entrega el entero ya convertido.",
      "En el manejador, un error se comunica con DisplayAlertAsync y se sale con return.",
      "Solo con datos válidos se calcula el resultado: tener menos de 18 no es un error, es una respuesta distinta del sistema.",
      "Los valores nulos de Text se sustituyen por cadena vacía con ??, para que la longitud siempre se pueda medir."
    ],
    "result": "Con nombre \"Al\" aparece una alerta de error. Con datos válidos y edad 16 la etiqueta dice \"No tiene acceso al sistema\"; con edad 30 dice \"Bienvenido al sistema\"."
  },
  {
    "lesson": "formulario",
    "section": 1,
    "title": "El modelo valida el dato antes de guardarlo",
    "path": "examples/EjemplosEstudio/Paginas/FormModelo.xaml.cs",
    "id": "formulario-modelo",
    "context": "El enunciado pide programación orientada a objetos para el modelo. La idea es que el dato se compruebe antes de almacenarse, de modo que una clase Usuario nunca contenga un nombre inválido.",
    "steps": [
      "El campo privado nombre guarda el valor. Es string? porque al principio no hay nada.",
      "El setter valida la longitud antes de asignar. Si falla, lanza ArgumentException y el valor anterior se conserva.",
      "El getter usa ?? throw: si nombre es null, avisa con InvalidOperationException en lugar de devolver un valor engañoso.",
      "Quien usa la clase decide qué hacer con la excepción; aquí la página la captura y muestra su mensaje.",
      "La clase no sabe nada de Entry ni de etiquetas: se podría probar sin interfaz."
    ],
    "result": "Con el nombre \"Ana\" se muestra \"Usuario creado: Ana\". Con \"Al\" se muestra el mensaje de la excepción y no se crea ningún valor."
  },
  {
    "lesson": "formulario",
    "section": 3,
    "title": "Probar justo por debajo, en el límite y por encima",
    "path": "examples/EjemplosEstudio/Paginas/FormFronteras.xaml.cs",
    "id": "formulario-fronteras",
    "context": "Un límite mal escrito (menor o igual en vez de menor) solo se nota en el valor exacto. Probar justo debajo, en el borde y justo encima de cada rango distingue un fallo de frontera de un fallo general.",
    "steps": [
      "EstaEnRango centraliza la regla \"mínimo y máximo incluidos\". Un único sitio que revisar si se cambia el criterio.",
      "Los arrays recogen los valores que importan: 2, 3, 20 y 21 para el nombre; 4, 5, 17, 18, 70 y 71 para la edad.",
      "StringBuilder va acumulando una línea por prueba sin crear una cadena nueva cada vez.",
      "La expresión condicional interpolada convierte el booleano en la palabra válido o no válido.",
      "Los límites 3 a 20 y 5 a 70 son los de esta relación; otros controles de otras relaciones tienen límites distintos."
    ],
    "result": "Al pulsar el botón aparece una tabla de diez líneas. 2 y 21 aparecen como no válidos; 3 y 20 como válidos; 4 y 71 como no válidos; 5 y 70 como válidos."
  },
  {
    "lesson": "calculadora",
    "section": 0,
    "title": "Varios botones, un único manejador",
    "path": "examples/EjemplosEstudio/Paginas/CalcEventoCentralizado.xaml.cs",
    "id": "calc-evento-centralizado",
    "context": "La calculadora tiene muchos botones de dígito que hacen lo mismo con distinto número. Escribir un método por botón repetiría el código; se resuelve con un solo manejador que averigua quién lo llamó.",
    "steps": [
      "En el XAML, todos los botones declaran Clicked=\"DigitoClick\". Es el mismo nombre de método.",
      "El visor es un Entry con IsReadOnly: el usuario introduce números solo con botones.",
      "En DigitoClick, sender llega como object?. El patrón \"is not Button boton\" lo convierte al tipo real o sale.",
      "boton.Text contiene el dígito mostrado, y se añade al final del texto del visor.",
      "Añadir el dígito 4 solo exige otro Button en el XAML, sin tocar C#."
    ],
    "result": "Al pulsar 1, 2 y 3 en ese orden, el visor muestra 123, alineado a la derecha."
  },
  {
    "lesson": "calculadora",
    "section": 3,
    "title": "La misma calculadora creada desde C#",
    "path": "examples/EjemplosEstudio/Paginas/CalcEnCSharp.cs",
    "id": "calc-en-csharp",
    "context": "Una de las cuatro variantes pide construir la interfaz solo con C#, sin XAML. El comportamiento no cambia: solo cambia dónde se crean los controles y cómo se conectan los eventos.",
    "steps": [
      "Cada control del XAML pasa a ser un objeto: new Entry, new Button, new Grid, con las propiedades en un inicializador.",
      "Las columnas de un Grid se añaden con ColumnDefinitions.Add; el valor por defecto de cada una es un reparto equitativo.",
      "En lugar de Clicked=\"DigitosClick\" se escribe boton.Clicked += DigitosClick. Es el mismo manejador.",
      "Grid.Add(vista, columna, fila) coloca cada botón; la columna sale del resto de dividir por 3 y la fila de la división entera.",
      "Content = ... asigna el contenedor raíz a la página. Crear controles sin añadirlos al árbol no los hace visibles."
    ],
    "result": "Se muestra un visor y un teclado de seis botones en dos filas de tres. Al pulsar los dígitos, el visor los acumula igual que en la versión XAML."
  },
  {
    "lesson": "matricula",
    "section": 0,
    "title": "Comprobar el formato 0000-BBB",
    "path": "examples/EjemplosEstudio/Paginas/MatFormato.xaml.cs",
    "id": "matricula-formato",
    "context": "El contrato del control exige el formato 0000-BBB: cuatro dígitos, un guion y tres letras que no sean vocales, y nada más. Se traduce a una función que responde sí o no y que servirá para todas las vías de entrada.",
    "steps": [
      "Primero se descartan las longitudes que no son 8 y la ausencia del guion en la posición 4 (los índices empiezan en 0).",
      "Un primer bucle exige dígitos en las posiciones 0 a 3, con char.IsDigit.",
      "Un segundo bucle revisa las posiciones 5 a 7: pasa a mayúscula, exige que sea letra y que no esté en \"AEIOU\".",
      "Se devuelve true solo si ninguna regla falló. No se inventan reglas administrativas que el enunciado no pide.",
      "El manejador solo lee el texto y muestra el veredicto: la regla vive en un método propio."
    ],
    "result": "\"1234-BCD\" muestra \"Formato correcto\". \"1234-BCA\" (vocal), \"123-BCD\" (tres dígitos) y \"1234BCD\" (sin guion) muestran \"Formato incorrecto\"."
  },
  {
    "lesson": "matricula",
    "section": 2,
    "title": "Mensaje y fondo coherentes entre sí",
    "path": "examples/EjemplosEstudio/Paginas/MatAviso.xaml.cs",
    "id": "matricula-aviso",
    "context": "El control debe avisar de un error con texto y fondo amarillo, y volver a su aspecto normal cuando el usuario corrige el dato. Si solo se borra el texto, la etiqueta queda amarilla y vacía, un estado incoherente.",
    "steps": [
      "MostrarError cambia a la vez el texto y el fondo de la etiqueta informativa.",
      "LimpiarError restituye las dos cosas: texto vacío y Colors.Transparent.",
      "TextChanged se dispara con cada tecla; e.NewTextValue trae el texto ya modificado.",
      "Regex.IsMatch comprueba el formato completo con un patrón: cuatro dígitos, guion y tres consonantes.",
      "Según el resultado se llama a una de las dos funciones, nunca se deja una a medias."
    ],
    "result": "Al escribir \"12\" aparece el aviso con fondo amarillo. Al completar \"1234-BCD\" el aviso desaparece y el fondo vuelve a ser transparente."
  },
  {
    "lesson": "matricula",
    "section": 3,
    "title": "Una propiedad pública que valida antes de guardar",
    "path": "examples/EjemplosEstudio/Paginas/MatPropiedad.xaml.cs",
    "id": "matricula-propiedad",
    "context": "El programa anfitrión debe poder leer y cambiar la matrícula del control, y el control debe garantizar el formato. Por eso no basta con exponer el Entry: hace falta una propiedad que valide.",
    "steps": [
      "El campo privado matricula guarda el último valor aceptado.",
      "El getter devuelve ese campo, no el contenido bruto del Entry, que podría estar a medio escribir.",
      "El setter comprueba el formato con la misma regla de siempre y lanza ArgumentException si no se cumple.",
      "Solo si el valor es válido se guarda y se refleja en entradaMatricula.Text.",
      "El anfitrión captura la excepción: el valor anterior sigue intacto y se puede mostrar al usuario."
    ],
    "result": "Pulsar \"Asignar 1234-BCD\" rellena la entrada y muestra \"Guardada: 1234-BCD\". Pulsar \"Asignar 12-A\" muestra el rechazo y la matrícula anterior se conserva."
  },
  {
    "lesson": "edad",
    "section": 0,
    "title": "Mayoría de edad configurable con límite mínimo",
    "path": "examples/EjemplosEstudio/Paginas/EdadContrato.xaml.cs",
    "id": "edad-contrato",
    "context": "El control tiene una mayoría de edad que vale 18 por defecto y que el programa anfitrión puede cambiar, pero siempre a un valor superior a 12. La regla pertenece al control, no a quien lo usa.",
    "steps": [
      "El campo privado mayoriaEdad arranca en 18, el valor por defecto del enunciado.",
      "La propiedad pública permite leer y escribir desde fuera.",
      "El setter rechaza valores menores o iguales a 12. Escribir \"<= 12\" es lo que hace que 12 no sea válido, porque se exige superior a 12.",
      "Al rechazar, lanza ArgumentOutOfRangeException antes de asignar, así que el valor anterior no se pierde.",
      "La página de prueba captura la excepción y vuelve a mostrar el límite que sigue en vigor."
    ],
    "result": "Al abrir la página se lee \"Límite actual: 18\". \"Fijar 21\" lo cambia a 21. \"Fijar 12\" informa del rechazo y el límite sigue valiendo 21."
  },
  {
    "lesson": "edad",
    "section": 2,
    "title": "Primero la fecha futura, después la edad",
    "path": "examples/EjemplosEstudio/Paginas/EdadOrden.xaml.cs",
    "id": "edad-orden",
    "context": "Si no se respeta el orden de las comprobaciones, una fecha futura acaba mostrando solo \"No eres mayor de edad\", cuando el enunciado pide informar específicamente de que la fecha es futura.",
    "steps": [
      "La primera comprobación compara la fecha con hoy. Si es posterior, devuelve su mensaje y termina.",
      "Solo si la fecha es pasada se calcula la edad: diferencia de años menos uno si el cumpleaños de este año aún no ha llegado.",
      "La tercera comprobación compara los años cumplidos con la mayoría configurada.",
      "El parámetro out hayError separa el mensaje del estado, para que la interfaz decida el aspecto.",
      "El manejador fija el fondo en amarillo si hay error y transparente si no, siempre junto al texto."
    ],
    "result": "Con 1 de enero de 2000 aparece \"Edad: ...\" con los años cumplidos y fondo transparente. Con una fecha de 2010 aparece \"No eres mayor de edad\" sobre amarillo. Con una fecha futura aparece el aviso de fecha futura."
  },
  {
    "lesson": "edad",
    "section": 3,
    "title": "El anfitrión cambia aspecto y límite",
    "path": "examples/EjemplosEstudio/Paginas/EdadIntegracion.xaml.cs",
    "id": "edad-integracion",
    "context": "En la integración final el anfitrión añade un botón que modifica espaciado, relleno y fondo para comprobar que los cambios se ven, y prueba que un límite no válido no sustituye al anterior.",
    "steps": [
      "AsignarLimite comprueba el nuevo valor antes de escribir en el campo; así el valor viejo sigue vigente si falla.",
      "Cuando el valor es válido se guarda y se muestra en la etiqueta.",
      "AspectoClick cambia tres propiedades del contenedor: Spacing (separación entre hijos), Padding (relleno interior) y BackgroundColor.",
      "Thickness(40) aplica 40 unidades en los cuatro lados.",
      "Como Spacing y Padding son propiedades del contenedor, el cambio se aprecia al instante sin recrear nada."
    ],
    "result": "Pulsar \"Cambiar aspecto\" agranda la separación y el relleno y pone el fondo azul. \"Limite 10\" avisa de que se rechaza; \"Limite 16\" lo acepta y lo muestra."
  },
  {
    "lesson": "xaml-layouts",
    "section": 1,
    "title": "StackLayout con orientaciones anidadas",
    "path": "examples/EjemplosEstudio/Paginas/XlStack.xaml",
    "id": "xl-stack",
    "context": "Cuando se pide usar solo StackLayout, no hay filas ni columnas: la estructura se consigue anidando pilas de orientación distinta. Cada pila reparte a sus hijos en una única dirección.",
    "steps": [
      "La raíz es un StackLayout con Orientation=\"Vertical\": sus hijos quedan uno debajo de otro.",
      "La primera Label ocupa su propia línea.",
      "El segundo hijo es otro StackLayout con Orientation=\"Horizontal\", que pone el Entry y el Button uno junto a otro.",
      "Spacing separa los hijos de cada pila; Padding deja un margen interior en la raíz.",
      "La última Label vuelve a ser un hijo vertical de la raíz."
    ],
    "result": "Se ve una etiqueta, debajo una fila con una entrada y un botón, y debajo otra etiqueta, todo con separación uniforme."
  },
  {
    "lesson": "xaml-layouts",
    "section": 3,
    "title": "Margin, Padding y Spacing no son lo mismo",
    "path": "examples/EjemplosEstudio/Paginas/XlEspaciado.xaml",
    "id": "xl-espaciado",
    "context": "Margin, Padding y Spacing parecen iguales porque los tres dejan huecos, pero actúan en sitios distintos. Confundirlos es un error frecuente al ajustar una interfaz.",
    "steps": [
      "Padding=\"30\" en la pila azul reserva espacio entre su borde y sus hijos, por dentro.",
      "Spacing=\"20\" añade 20 unidades entre cada pareja de hijos consecutivos. Solo existe en contenedores de pila.",
      "Margin=\"15\" en la tercera etiqueta deja espacio por fuera de esa etiqueta, entre ella y lo que la rodea.",
      "Los fondos de color permiten ver qué zona pertenece a cada elemento."
    ],
    "result": "Se ve un recuadro azul con un borde interior ancho. Las dos primeras etiquetas están separadas 20 unidades y la tercera queda más hundida por su margen."
  },
  {
    "lesson": "xaml-layouts",
    "section": 4,
    "title": "Label, Entry y Button juntos",
    "path": "examples/EjemplosEstudio/Paginas/XlControles.xaml",
    "id": "xl-controles",
    "context": "Label, Entry y Button son los tres controles básicos de entrada y salida de una pantalla. Cada uno tiene una propiedad principal y conviene no confundir su papel.",
    "steps": [
      "Label muestra información con Text. FontSize y TextColor cambian su aspecto; HorizontalTextAlignment alinea el texto dentro de la etiqueta, no la etiqueta dentro de su padre.",
      "Entry recoge una línea de texto: Text es el dato escrito y Placeholder es la pista que se ve mientras está vacío.",
      "IsPassword=\"True\" oculta los caracteres, pero Text sigue conteniendo el valor real.",
      "Button dispara el evento Clicked, enlazado con SaludarClick en el code-behind.",
      "Los controles con x:Name pueden leerse y modificarse desde C#."
    ],
    "result": "Se ve una etiqueta centrada, dos entradas (la segunda con puntos) y un botón. Al pulsar Saludar la etiqueta dice \"Hola\" seguido del nombre escrito."
  },
  {
    "lesson": "xaml-layouts",
    "section": 5,
    "title": "BoxView controlado por un Slider",
    "path": "examples/EjemplosEstudio/Paginas/XlBoxSlider.xaml.cs",
    "id": "xl-boxview-slider",
    "context": "BoxView dibuja un rectángulo de color y Slider elige un valor continuo. Juntos muestran que un View no siempre tiene texto ni recibe pulsaciones, y cómo reacciona un control a un valor numérico.",
    "steps": [
      "BoxView tiene Color y tamaño solicitado con WidthRequest y HeightRequest. No contiene a otros controles.",
      "Slider define un intervalo con Minimum y Maximum, y Value es el valor actual (un double).",
      "ValueChanged se dispara cada vez que el usuario mueve el deslizador. ValueChangedEventArgs trae NewValue y OldValue.",
      "El manejador asigna el valor nuevo al ancho del rectángulo y lo muestra con formato F0, sin decimales."
    ],
    "result": "Al arrastrar el deslizador el rectángulo azul se ensancha o estrecha entre 50 y 300 y la etiqueta muestra el ancho."
  },
  {
    "lesson": "especializacion",
    "section": 0,
    "title": "Un Entry especializado para nombres de usuario",
    "path": "examples/EjemplosEstudio/Paginas/EspContrato.xaml.cs",
    "id": "esp-contrato",
    "context": "El enunciado fija el contrato del control: basado en Entry, de 5 a 15 caracteres y sin acentos, dígitos ni signos. Heredar de Entry permite añadir esa regla sin reescribir un campo de texto.",
    "steps": [
      "La clase hereda de Entry, así que se comporta como un Entry y se puede usar en XAML con el prefijo local.",
      "En el constructor, MaxLength = 15 impide escribir más de lo permitido, pero no garantiza el mínimo.",
      "EsValido comprueba la longitud mínima y máxima sobre Text, usando \"\" si es null.",
      "El bucle revisa carácter a carácter: solo se aceptan letras de la a a la z, en minúscula o mayúscula.",
      "Quedan fuera las vocales acentuadas y la ñ: es la interpretación literal de \"sin acentos\"."
    ],
    "result": "La entrada muestra la pista \"Usuario (5 a 15 letras)\" y no deja pasar de 15 caracteres. \"Carlos\" da válido; \"Ana\", \"Carlos1\" o \"Jesús\" dan no válido."
  },
  {
    "lesson": "especializacion",
    "section": 1,
    "title": "Componer: un Entry dentro de un ContentView",
    "path": "examples/EjemplosEstudio/Paginas/EspComponer.xaml.cs",
    "id": "esp-componer",
    "context": "Heredar y componer resuelven problemas distintos. Heredar de Entry crea un Entry con comportamiento propio; componer crea un control nuevo que contiene un Entry y una Label de error. Es la diferencia entre \"es un\" y \"tiene un\".",
    "steps": [
      "CampoConError hereda de ContentView, no de Entry. No expone Text ni Placeholder por sí mismo.",
      "Los controles internos son campos privados: nadie fuera conoce su disposición.",
      "El constructor suscribe el evento del Entry y asigna a Content una pila con el Entry y la Label.",
      "TextoCambiado rellena o vacía el mensaje de error con cada cambio del texto.",
      "Se compone cuando hace falta devolver retroalimentación visual junto al campo, algo que un Entry heredado no ofrece por sí solo."
    ],
    "result": "Se ve un campo de texto. Al escribir y borrar hasta dejarlo vacío, aparece debajo en rojo \"El campo no puede estar vacío.\""
  },
  {
    "lesson": "especializacion",
    "section": 3,
    "title": "Validar al perder el foco y también al pulsar",
    "path": "examples/EjemplosEstudio/Paginas/EspValidarAlPulsar.xaml.cs",
    "id": "esp-validar-al-pulsar",
    "context": "Validar solo cuando el campo pierde el foco deja un hueco: el usuario puede pulsar el botón sin haber tocado el campo. La solución es una única función de validación llamada desde los dos sitios.",
    "steps": [
      "ValidarUsuario encapsula la comprobación y escribe el mensaje de error. Devuelve true o false.",
      "UsuarioSinFoco se conecta a Unfocused y valida en cuanto el usuario sale del campo.",
      "EntrarClick vuelve a validar, porque la pulsación puede llegar sin que haya ocurrido el evento anterior.",
      "Si la validación falla, return corta el flujo y no se concede el acceso.",
      "Tener una sola función evita que ambas vías apliquen reglas distintas."
    ],
    "result": "Si pulsas Entrar con el campo vacío aparece el mensaje de error sin haber pasado por el campo. Con \"Carlos\" aparece \"Acceso correcto\"."
  },
  {
    "lesson": "contentview",
    "section": 0,
    "title": "LoginView agrupa dos controles",
    "path": "examples/EjemplosEstudio/Paginas/CvAgrupar.xaml.cs",
    "id": "cv-agrupar",
    "context": "La relación pide un control nuevo que reúna los dos campos de acceso. Agrupar en un ContentView da una unidad reutilizable: quien lo usa no necesita saber cómo está organizado por dentro.",
    "steps": [
      "LoginView hereda de ContentView, que admite un único contenido.",
      "Los dos Entry son campos privados de solo lectura, creados con un inicializador de objeto.",
      "El constructor asigna a Content un VerticalStackLayout que contiene los dos campos.",
      "La página solo escribe local:LoginView: la disposición interna queda encapsulada.",
      "Cambiar el diseño interno más adelante no afecta a las páginas que lo usan."
    ],
    "result": "Se ven una entrada de usuario y una de contraseña (con puntos) apiladas, como un único control."
  },
  {
    "lesson": "contentview",
    "section": 3,
    "title": "Un tipo público vive en un ensamblado",
    "path": "examples/EjemplosEstudio/Paginas/CvBiblioteca.xaml.cs",
    "id": "cv-biblioteca",
    "context": "Una biblioteca de clases se compila en un ensamblado que otra aplicación referencia. Aquí todo está en un solo proyecto, pero el mismo código muestra en qué ensamblado vive un tipo y si podría usarse desde fuera.",
    "steps": [
      "typeof(LoginView) obtiene la información de tipo (Type) de la clase.",
      "Assembly.GetName().Name devuelve el nombre del ensamblado donde se compiló; con una biblioteca propia sería el de esa biblioteca.",
      "IsPublic indica si el tipo es público. Un tipo interno no es visible para quien referencia el ensamblado.",
      "Para usar la biblioteca desde la aplicación anfitriona hay que añadir una referencia de proyecto y escribir el prefijo XML con su namespace.",
      "Una biblioteca no tiene pantalla principal que lanzar: aporta tipos a otras aplicaciones."
    ],
    "result": "Al pulsar el botón aparece \"LoginView está en el ensamblado\" seguido del nombre del proyecto y \"¿Público? True\"."
  },
  {
    "lesson": "contentview",
    "section": 4,
    "title": "Image y su propiedad Aspect",
    "path": "examples/EjemplosEstudio/Paginas/CvImage.xaml",
    "id": "cv-image",
    "context": "Image es un View que muestra una imagen a partir de Source. Su propiedad Aspect decide cómo se adapta la imagen al espacio disponible, y no es lo mismo conservar proporción que rellenar.",
    "steps": [
      "Source=\"figura\" apunta a un archivo de Resources/Images sin extensión; MAUI elige el recurso adecuado para cada plataforma.",
      "WidthRequest y HeightRequest hacen un cuadrado de 200 y el fondo gris deja ver el espacio ocupado.",
      "AspectFit muestra la imagen entera y conserva su proporción; puede dejar bandas vacías.",
      "AspectFill conserva la proporción y rellena todo el espacio, recortando lo que sobre.",
      "Fill estira la imagen para ocupar todo el espacio y puede deformarla.",
      "Los tres botones comparten manejador y convierten su texto al valor del enum Aspect."
    ],
    "result": "Se ve una imagen rectangular dentro de un cuadrado gris. Al pulsar AspectFill se recorta, al pulsar Fill se deforma y con AspectFit vuelve a verse entera."
  },
  {
    "lesson": "extensiones",
    "section": 0,
    "title": "Propiedades visuales desde x:Static",
    "path": "examples/EjemplosEstudio/Paginas/ExtPedido.xaml",
    "id": "ext-pedido",
    "context": "La actividad pide personalizar espaciado, relleno, margen, color de fondo y tamaño de fuente, con valores que no estén escritos a mano en cada control. x:Static permite que el XAML lea esos valores de una clase.",
    "steps": [
      "La clase Medidas es pública y estática, y sus miembros son public static readonly del tipo correcto: double, Thickness y Color.",
      "En XAML, {x:Static local:Medidas.Separacion} se resuelve al valor del miembro. El prefijo local apunta al namespace del proyecto.",
      "Cada propiedad recibe un valor del tipo que espera: Spacing un double, Padding un Thickness, BackgroundColor un Color.",
      "Cambiar un valor en Medidas actualiza todos los controles que lo usan al volver a compilar.",
      "Si el miembro no existe o no es accesible, la compilación del XAML falla."
    ],
    "result": "Se ve un fondo amarillo claro con relleno amplio y una etiqueta con letra de 18 puntos y margen propio."
  },
  {
    "lesson": "extensiones",
    "section": 3,
    "title": "Distinguir Windows de Android con DeviceInfo",
    "path": "examples/EjemplosEstudio/Paginas/ExtDeviceInfo.xaml.cs",
    "id": "ext-deviceinfo",
    "context": "La relación pide valores distintos para Windows y Android. DeviceInfo.Current dice en qué plataforma se está ejecutando y permite elegir el valor correcto.",
    "steps": [
      "DeviceInfo.Current.Platform devuelve un DevicePlatform. Es el dato relevante para decidir entre Windows y Android.",
      "DevicePlatform.WinUI es el valor que corresponde a Windows; DevicePlatform.Android, a Android.",
      "No se usa DeviceType (físico o virtual), porque la distinción pedida es de sistema, no de si el dispositivo es un emulador.",
      "Cada rama asigna un texto y un tamaño de fuente distintos. Un tercer caso cubre cualquier otra plataforma.",
      "En XAML puro se obtiene el mismo efecto con OnPlatform; aquí se hace en C# para ver la comparación."
    ],
    "result": "Al ejecutarlo en Windows la etiqueta dice \"Windows: fuente 14\" con fuente de 14. En un emulador Android diría la línea de Android con fuente de 18."
  },
  {
    "lesson": "recursos",
    "section": 0,
    "title": "Recursos con ámbito de ContentView",
    "path": "examples/EjemplosEstudio/Paginas/RecAmbito.xaml",
    "id": "rec-ambito",
    "context": "Un control reutilizable debe llevar sus valores consigo, no depender del App.xaml de cada aplicación. Un ResourceDictionary dentro del propio ContentView lo consigue.",
    "steps": [
      "ContentView.Resources abre un diccionario que solo existe para ese control y sus hijos.",
      "Cada recurso tiene una clave x:Key y un tipo concreto: Color para colores, x:Double para tamaños.",
      "Se usan claves distintas (colorEtiqueta y colorEntrada) cuando Label y Entry deben tener valores distintos.",
      "{StaticResource clave} busca la clave en el árbol, empezando por el ámbito más cercano, y asigna el valor una vez al cargar.",
      "Si la clave se escribe mal, la página falla al cargarse: las claves distinguen mayúsculas."
    ],
    "result": "Se ve una etiqueta verde oscura de tamaño 20 y una entrada con texto rojo oscuro, sin ningún valor escrito en los propios controles."
  },
  {
    "lesson": "recursos",
    "section": 3,
    "title": "Static no cambia, Dynamic sí",
    "path": "examples/EjemplosEstudio/Paginas/RecVerificar.xaml.cs",
    "id": "rec-verificar",
    "context": "Para comprobar un recurso dinámico hay que cambiar el valor de su clave y observar quién reacciona. Es la prueba que distingue StaticResource de DynamicResource.",
    "steps": [
      "El diccionario de la página define colorTexto en negro.",
      "La primera Label lo consume con StaticResource: lee el valor una sola vez al cargar.",
      "La segunda lo consume con DynamicResource: mantiene la relación con la clave.",
      "El manejador asigna un nuevo Color a Resources[\"colorTexto\"], sustituyendo el valor en el diccionario.",
      "Solo los consumidores dinámicos reciben el aviso del cambio."
    ],
    "result": "Al pulsar el botón, la segunda etiqueta pasa a rojo y la primera sigue en negro."
  },
  {
    "lesson": "recursos",
    "section": 4,
    "title": "Style: agrupar propiedades con Setter",
    "path": "examples/EjemplosEstudio/Paginas/RecEstilos.xaml",
    "id": "rec-estilos",
    "context": "Repetir las mismas tres propiedades en cada etiqueta es largo y se corrige mal. Un Style reúne las asignaciones en un solo sitio y los controles lo consumen.",
    "steps": [
      "Style TargetType=\"Label\" sin clave es implícito: se aplica a todas las Label de su ámbito.",
      "Cada Setter asigna una propiedad con Property y Value.",
      "El segundo Style tiene x:Key, así que solo se aplica a quien lo pide con Style=\"{StaticResource estiloAviso}\".",
      "Las dos etiquetas de aviso comparten tres propiedades sin repetirlas.",
      "Un estilo no duplica el control: cambia la forma en que recibe sus propiedades."
    ],
    "result": "Se ven tres etiquetas con letra de 16; las dos últimas, además, en negrita, rojas y con fondo amarillo claro."
  },
  {
    "lesson": "extensiones-login",
    "section": 0,
    "title": "Solo la contraseña expone su espaciado",
    "path": "examples/EjemplosEstudio/Paginas/ElEspaciado.xaml.cs",
    "id": "el-espaciado",
    "context": "La variante V1 personaliza solo el espaciado y solo en el control de contraseña; relleno, margen, fondo y fuente quedan sin tocar. Es un primer paso concreto hacia la actividad completa.",
    "steps": [
      "EntryContraseniaV1 es un ContentView con una pila interna, un Entry de contraseña y una Label de error.",
      "La pila interna es un campo privado: así la propiedad pública puede modificarla.",
      "Separacion lee y escribe pila.Spacing. Es la única propiedad nueva expuesta al exterior.",
      "En XAML se escribe Separacion=\"20\" directamente en el control, igual que cualquier propiedad.",
      "El control de nombre de usuario no cambia: el cambio no se hereda ni se comparte."
    ],
    "result": "Se ve una entrada de contraseña con el mensaje de error debajo, separados 20 unidades en lugar de 4."
  },
  {
    "lesson": "extensiones-login",
    "section": 5,
    "title": "Una aplicación anfitriona que cambia el espaciado",
    "path": "examples/EjemplosEstudio/Paginas/ElAnfitrion.xaml.cs",
    "id": "el-anfitrion",
    "context": "Una variante solo se comprueba de verdad si hay una aplicación que la use. Un anfitrión mínimo contiene una instancia del control y un botón que cambia su espaciado, para ver el efecto.",
    "steps": [
      "La página coloca el control en el XAML y le pone x:Name para poder referirse a él desde C#.",
      "El botón alterna la propiedad Separacion entre 4 y 24 con un operador condicional.",
      "Solo se usa la propiedad pública; los campos internos siguen siendo privados.",
      "La etiqueta muestra el valor actual para comprobar que el cambio llegó al control.",
      "Este anfitrión es una elaboración didáctica añadida, no parte de la entrega original."
    ],
    "result": "Al pulsar el botón, la separación entre la entrada y su mensaje de error pasa de 4 a 24 y vuelve, y la etiqueta muestra el valor actual."
  },
  {
    "lesson": "learn-primera-app",
    "section": 0,
    "title": "Cómo arranca la aplicación: App crea la ventana",
    "path": "examples/EjemplosEstudio/App.xaml.cs",
    "id": "lp-arquitectura",
    "context": "MAUI no ejecuta el XAML como una página web: construye objetos de interfaz nativa. El hilo de arranque pasa por App, que decide qué ventana se abre y qué contiene.",
    "steps": [
      "MauiProgram.CreateMauiApp configura los servicios y registra la clase App.",
      "MAUI crea una instancia de App y llama a CreateWindow cuando necesita una ventana.",
      "CreateWindow devuelve una Window cuyo contenido es un AppShell: el Shell es la raíz de la interfaz.",
      "AppShell decide qué página se muestra primero, según sus ShellContent.",
      "El mismo código de arranque sirve para Android, iOS, MacCatalyst y Windows; solo la carpeta Platforms es específica de cada sistema."
    ],
    "result": "No hay pantalla propia: es el punto de entrada. Si cambias new AppShell() por otra página, la aplicación arranca con esa página como contenido de la ventana."
  },
  {
    "lesson": "learn-primera-app",
    "section": 1,
    "title": "Contador que suma cinco",
    "path": "examples/EjemplosEstudio/Paginas/LpContador.xaml.cs",
    "id": "lp-contador",
    "context": "El primer ejercicio del módulo parte de la plantilla con un botón contador y pide cambiar el incremento a cinco. Sirve para seguir el flujo desde el atributo Clicked del XAML hasta el método del code-behind.",
    "steps": [
      "El campo cuenta guarda el valor mientras la página esté viva; no es almacenamiento permanente.",
      "En el XAML, Clicked=\"ContarClick\" conecta el botón con el método del mismo nombre.",
      "El método suma 5 a cuenta. Cambiar el incremento es cambiar un número.",
      "La interpolación de cadena $\"...\" escribe el valor nuevo en la etiqueta.",
      "Si cierras y reabres la aplicación, la cuenta vuelve a cero porque el campo no se guarda."
    ],
    "result": "Al pulsar el botón la etiqueta muestra Valor: 5, luego Valor: 10, Valor: 15, y así sucesivamente."
  },
  {
    "lesson": "learn-primera-app",
    "section": 2,
    "title": "Traducir letras a dígitos del teclado",
    "path": "examples/EjemplosEstudio/Paginas/LpPhoneword.xaml.cs",
    "id": "lp-phoneword",
    "context": "Phoneword convierte un texto con letras en el número del teclado telefónico: ABC es el 2 y WXYZ es el 9. La función no depende de ningún botón, así que puede probarse sin abrir el marcador.",
    "steps": [
      "Grupos guarda las ocho agrupaciones de letras en orden; la posición 0 es ABC.",
      "Una entrada vacía o solo con espacios devuelve null: no hay resultado.",
      "El texto se pasa a mayúsculas para no distinguir \"a\" de \"A\".",
      "Los dígitos, espacios y guiones se copian tal cual.",
      "Para una letra, FindIndex busca su grupo; si no aparece en ninguno, la función devuelve null y rechaza la entrada.",
      "El dígito resultante es la posición del grupo más 2, porque el teclado empieza en el 2."
    ],
    "result": "\"1-800-FLORES\" produce \"1-800-356737\". Un texto con símbolos como \"@\" produce \"Texto no válido\"."
  },
  {
    "lesson": "learn-primera-app",
    "section": 3,
    "title": "Habilitar Llamar solo con un resultado vigente",
    "path": "examples/EjemplosEstudio/Paginas/LpHabilitar.xaml.cs",
    "id": "lp-habilitar",
    "context": "Llamar debe estar disponible solo cuando hay una traducción correcta y vigente. Si el usuario edita el texto después de traducir, el número guardado ya no se corresponde con lo que ve, y no debe poder marcarse.",
    "steps": [
      "numeroTraducido guarda la última traducción correcta, o null si no hay ninguna.",
      "TraducirClick traduce, habilita Llamar solo si hubo resultado y muestra el estado.",
      "TextoCambiado invalida la traducción y deshabilita Llamar con cada cambio del texto.",
      "LlamarClick pide confirmación con DisplayAlertAsync, que devuelve true si el usuario acepta.",
      "Cancelar termina sin abrir ninguna aplicación.",
      "PhoneDialer.Default.IsSupported comprueba que el dispositivo puede marcar antes de llamar a Open."
    ],
    "result": "Con un texto válido y Traducir pulsado, Llamar se habilita y pide confirmación. Al editar el texto, Llamar se deshabilita otra vez. En Windows sin marcador compatible aparece el aviso de que no es posible."
  },
  {
    "lesson": "learn-primera-app",
    "section": 4,
    "title": "Declarar la consulta del esquema tel en Android",
    "path": "examples/EjemplosEstudio/Platforms/Android/AndroidManifest.xml",
    "id": "lp-plataforma",
    "context": "Para poder detectar que existe una aplicación de marcado, Android pide declarar en el manifiesto qué tipo de intención se va a consultar. Es una configuración de la plataforma, no código C#.",
    "steps": [
      "El archivo Platforms/Android/AndroidManifest.xml describe la aplicación al sistema Android.",
      "El elemento queries lista las intenciones que la aplicación necesita comprobar.",
      "La intención usa la acción DIAL y el esquema de datos tel, que es el de los números de teléfono.",
      "Sin esta declaración, PhoneDialer.Default.IsSupported puede devolver false en versiones modernas de Android aunque exista marcador.",
      "Windows y iOS tienen sus propios requisitos; la compilación no comprueba que haya una aplicación de llamadas."
    ],
    "result": "No cambia nada visible: la consulta permite que IsSupported detecte el marcador en Android. En Windows el ejemplo se estudia sin llamar."
  },
  {
    "lesson": "learn-layouts",
    "section": 0,
    "title": "Alinear un View dentro de su celda",
    "path": "examples/EjemplosEstudio/Paginas/LlAlineacion.xaml.cs",
    "id": "ll-alineacion",
    "context": "HorizontalOptions decide dónde se coloca un View dentro del espacio que le ofrece su padre. El ejercicio cambia entre Start, Center, End y Fill con botones que comparten un único manejador.",
    "steps": [
      "La Label está en una celda del Grid de 120 de alto y ancho completo.",
      "Los cuatro botones llaman a AlinearClick; sender identifica cuál se pulsó.",
      "Un switch convierte el texto del botón en el valor LayoutOptions correspondiente.",
      "Start pega la etiqueta al borde izquierdo, Center la centra, End la pega al derecho y Fill la estira ocupando todo el ancho.",
      "Esta propiedad coloca el control en su celda. La alineación del texto dentro de la Label es otra propiedad distinta."
    ],
    "result": "Al pulsar Start, Center, End o Fill la etiqueta azul se mueve horizontalmente o se estira. Con Fill ocupa toda la fila."
  },
  {
    "lesson": "learn-layouts",
    "section": 1,
    "title": "Cálculo de la propina separado de la interfaz",
    "path": "examples/EjemplosEstudio/Paginas/LlCalculo.xaml.cs",
    "id": "ll-calculo",
    "context": "Antes de recolocar una calculadora hay que entender qué calcula. La propina y el total salen de la cuenta y del porcentaje, y los botones de redondeo ajustan el total y recalculan la propina como diferencia.",
    "steps": [
      "Calcular recibe cuenta y porcentaje y devuelve la propina redondeada a dos decimales y el total.",
      "Se usa decimal, no double, para que los importes monetarios no arrastren errores de coma flotante.",
      "RedondearTotal sube o baja el total al entero más cercano con Math.Ceiling o Math.Floor.",
      "La propina deja de ser un porcentaje y pasa a ser la diferencia entre el nuevo total y la cuenta original.",
      "La clase no conoce ningún control: cualquier diseño de pantalla puede usarla."
    ],
    "result": "Con cuenta 45,50 y 15 por ciento aparece propina 6,83 y total 52,33. Redondear arriba da total 53,00 y propina 7,50; redondear abajo da total 52,00 y propina 6,50."
  },
  {
    "lesson": "learn-layouts",
    "section": 2,
    "title": "Filas horizontales dentro de una pila vertical",
    "path": "examples/EjemplosEstudio/Paginas/LlPila.xaml",
    "id": "ll-pila",
    "context": "Una lista vertical de controles puede calcular bien y aun así no tener la disposición pedida. Con pilas, las parejas de texto y valor se agrupan en filas horizontales dentro de una pila vertical.",
    "steps": [
      "La raíz VerticalStackLayout apila las filas una debajo de otra.",
      "Cada pareja etiqueta y valor es un HorizontalStackLayout propio: etiqueta a la izquierda, dato a la derecha.",
      "Los botones de porcentaje comparten una fila horizontal.",
      "Cada pila solo organiza su propio eje: no alinea las columnas de filas distintas entre sí.",
      "Por eso el segundo texto de cada fila queda justo a continuación de su etiqueta, con anchos distintos según el texto."
    ],
    "result": "Se ven tres filas de pareja etiqueta y dato y una fila de botones. Las columnas no coinciden exactamente porque cada fila mide lo suyo."
  },
  {
    "lesson": "learn-layouts",
    "section": 3,
    "title": "La misma pantalla con un Grid",
    "path": "examples/EjemplosEstudio/Paginas/LlGrid.xaml",
    "id": "ll-grid",
    "context": "Con un Grid, las filas y columnas se comparten entre todos los controles, así que las parejas de etiqueta y dato quedan alineadas en columna. Es el mismo contenido que la versión con pilas, distribuido en una tabla.",
    "steps": [
      "RowDefinitions declara siete filas: seis se ajustan al contenido (Auto) y la cuarta usa todo el espacio sobrante (*).",
      "ColumnDefinitions=\"*,*\" reparte el ancho en dos columnas iguales.",
      "Grid.Row y Grid.Column colocan cada control; los índices empiezan en cero.",
      "Grid.ColumnSpan=\"2\" hace que el Slider y la última etiqueta ocupen las dos columnas.",
      "Un control sin Grid.Row ni Grid.Column cae en la primera celda; si algo aparece en esa esquina, falta alguno de esos atributos."
    ],
    "result": "Se ve una tabla de dos columnas con la cuenta, la propina y el total alineados, un deslizador ancho y dos filas de botones repartidos por columnas."
  },
  {
    "lesson": "learn-layouts",
    "section": 4,
    "title": "Comprobar que la fórmula da lo esperado",
    "path": "examples/EjemplosEstudio/Paginas/LlValidar.xaml.cs",
    "id": "ll-validar",
    "context": "Cambiar la distribución no debe cambiar el resultado. La forma de comprobarlo es introducir el mismo importe y porcentaje y comparar con valores calculados a mano, aquí contra la misma fórmula que usan las dos disposiciones.",
    "steps": [
      "Cada caso lleva cuenta, porcentaje y el resultado esperado, calculado por separado a mano.",
      "Se llama a CalculoPropina.Calcular, la misma función que usan las versiones con pila y con Grid.",
      "La comparación usa decimal, por lo que no hay diferencias por redondeo binario.",
      "La tabla de salida dice correcto o FALLO por caso, con lo que se ve cuál falla.",
      "Esta prueba no valida entradas no numéricas: esa limitación hay que comprobarla aparte escribiendo texto en el campo."
    ],
    "result": "Aparecen tres líneas, una por caso, todas con \"correcto\". Si cambias la fórmula y rompes un caso, esa línea cambia a FALLO."
  },
  {
    "lesson": "learn-xaml",
    "section": 0,
    "title": "Notes declarado en XAML",
    "path": "examples/EjemplosEstudio/Paginas/LxXaml.xaml",
    "id": "lx-xaml",
    "context": "El primer ejercicio parte de una interfaz creada paso a paso en el constructor C# y pide declarar la misma interfaz en XAML. La estructura es idéntica; cambia la forma de escribirla.",
    "steps": [
      "Una Label con el título, un Editor para la nota y una fila con dos botones: es el contenido que antes se creaba con new.",
      "El Editor lleva x:Name para poder leer y escribir su Text desde C#.",
      "Una fila de dos columnas del mismo ancho coloca Guardar y Borrar uno junto a otro.",
      "x:Class de la raíz vincula este XAML a la clase parcial del archivo .xaml.cs.",
      "InitializeComponent construye los controles y los campos con nombre; no se debe dejar a la vez otra asignación de Content en el constructor."
    ],
    "result": "Se ve el título Notas, una caja de texto de varias líneas y dos botones. Los botones aún no hacen nada: sus manejadores se conectan en el ejemplo siguiente."
  },
  {
    "lesson": "learn-xaml",
    "section": 1,
    "title": "Conectar Guardar y Borrar a su manejador",
    "path": "examples/EjemplosEstudio/Paginas/LxEventos.xaml.cs",
    "id": "lx-eventos",
    "context": "Mover un botón a XAML no mueve su manejador. El método sigue en el code-behind y el XAML tiene que apuntar al nombre correcto. Además, la nota debe guardarse en un lugar que exista en cualquier equipo.",
    "steps": [
      "FileSystem.AppDataDirectory es la carpeta de datos de la aplicación; evita escribir una ruta absoluta del ordenador del alumno.",
      "Path.Combine une la carpeta y el nombre del archivo con el separador correcto.",
      "GuardarClick escribe el contenido del Editor en el archivo.",
      "BorrarClick elimina el archivo si existe y limpia el Editor.",
      "En el XAML, Clicked=\"GuardarClick\" y Clicked=\"BorrarClick\" deben coincidir con los nombres de los métodos.",
      "Al abrir la página, el constructor lee el archivo si existe, así la nota reaparece."
    ],
    "result": "Al escribir una nota y pulsar Guardar, cerrar y reabrir la aplicación, la nota reaparece. Borrar vacía el Editor y elimina el archivo."
  },
  {
    "lesson": "learn-xaml",
    "section": 2,
    "title": "Guardar sin perder la nota anterior",
    "path": "examples/EjemplosEstudio/Paginas/LxErrores.xaml.cs",
    "id": "lx-errores",
    "context": "Escribir directamente sobre el archivo de la nota puede dejarlo truncado si la escritura falla a medias. Hay que proteger el dato anterior y comunicar el error en vez de ignorarlo.",
    "steps": [
      "Se calcula la ruta de destino y una ruta temporal con la extensión .tmp.",
      "La nota se escribe primero en el temporal. Si ocurre un error, el archivo definitivo no se ha tocado.",
      "File.Move con el tercer argumento true sustituye el destino por el temporal una vez terminado.",
      "Los fallos de acceso a archivos se capturan: IOException y UnauthorizedAccessException.",
      "Cada fallo se comunica con una alerta; no se presenta como si la nota estuviera vacía."
    ],
    "result": "En un caso normal no se ve nada especial: la nota se guarda. Si el archivo está bloqueado o la carpeta no permite escribir, aparece una alerta con el motivo y la nota anterior se conserva."
  },
  {
    "lesson": "learn-xaml",
    "section": 3,
    "title": "Colores compartidos desde una clase",
    "path": "examples/EjemplosEstudio/Paginas/LxStatic.xaml.cs",
    "id": "lx-static",
    "context": "Etiquetas, botones y Editor deben compartir los mismos colores sin repetirlos en cada control. x:Static permite que el XAML tome un valor de un miembro estático de una clase.",
    "steps": [
      "SharedResources es pública y estática, y cada color es un miembro public static readonly de tipo Color.",
      "En XAML se escribe {x:Static local:SharedResources.ColorTexto}. El prefijo local debe apuntar al namespace donde está la clase.",
      "Es una referencia a un miembro de una clase, no a un ResourceDictionary: no se busca por clave en el árbol.",
      "Cambiar un color en la clase cambia todos los controles que lo usan al recompilar.",
      "Cambiar el valor de un miembro estático en ejecución no refresca los controles ya creados: x:Static se lee una vez."
    ],
    "result": "Se ve una pantalla gris claro con etiqueta azul oscuro, un Editor amarillo claro y un botón verde, todos con los colores de una sola clase."
  },
  {
    "lesson": "learn-xaml",
    "section": 4,
    "title": "Altura del Editor según la plataforma",
    "path": "examples/EjemplosEstudio/Paginas/LxOnPlatform.xaml",
    "id": "lx-onplatform",
    "context": "En un teléfono hace falta más altura para el Editor que en un ordenador. OnPlatform da un valor distinto por plataforma sin tocar la lógica de la página.",
    "steps": [
      "{OnPlatform ...} es una extensión de marcado que elige un valor según el sistema donde se ejecuta.",
      "WinUI es Windows; Android e iOS son las otras dos plataformas del ejercicio.",
      "Cada valor se convierte al tipo de la propiedad, aquí un double para HeightRequest.",
      "Default cubre cualquier plataforma no listada, como MacCatalyst.",
      "Solo se adapta una propiedad visual; los manejadores y los archivos siguen igual."
    ],
    "result": "En Windows el Editor mide 100 de alto; en un teléfono Android o iOS, 220. En el resto de plataformas, 140."
  },
  {
    "lesson": "learn-multipagina",
    "section": 0,
    "title": "Encabezado del menú y páginas del Shell",
    "path": "examples/EjemplosEstudio/AppShell.xaml",
    "id": "lm-paginas",
    "context": "Todas las páginas de Astronomy viven bajo un único Shell. Antes de ordenar los destinos hay que saber dónde se declara el menú y cómo se pone un encabezado a ese menú.",
    "steps": [
      "AppShell.xaml es la raíz de la navegación: no es una página de contenido, es el contenedor de las páginas.",
      "Shell.FlyoutHeader fija el contenido que aparece arriba del menú lateral.",
      "El encabezado puede ser cualquier View; aquí una etiqueta con relleno.",
      "Los destinos se declaran después del encabezado con FlyoutItem y ShellContent.",
      "Los datos y las páginas del ejemplo ya vienen hechos: el objetivo del bloque es la navegación."
    ],
    "result": "Al abrir el menú lateral se ve primero el texto \"Ejemplos de estudio\" y debajo las entradas de los destinos."
  },
  {
    "lesson": "learn-multipagina",
    "section": 1,
    "title": "FlyoutItem y ShellContent para el menú flotante",
    "path": "examples/EjemplosEstudio/AppShell.xaml",
    "id": "lm-flyout",
    "context": "El primer ejercicio organiza las páginas como opciones del menú flotante. Cada opción es un FlyoutItem y cada FlyoutItem señala la página que debe crearse.",
    "steps": [
      "FlyoutItem agrupa un destino del menú; Title es el texto visible.",
      "FlyoutDisplayOptions=\"AsMultipleItems\" hace que cada ShellContent hijo salga como una entrada propia del menú.",
      "ShellContent con ContentTemplate=\"{DataTemplate local:NombreDePagina}\" crea la página solo al entrar en ella.",
      "El prefijo local apunta al namespace de las páginas; el título del menú puede diferir del nombre de la clase.",
      "No hace falta envolver el Shell en otra página de navegación: Shell ya es la raíz."
    ],
    "result": "El menú lateral muestra Astronomía con sus dos entradas, Cuerpos y Comprobar. Al elegir una se muestra la página correspondiente."
  },
  {
    "lesson": "learn-multipagina",
    "section": 2,
    "title": "Agrupar destinos en pestañas con Tab",
    "path": "examples/EjemplosEstudio/AppShell.xaml",
    "id": "lm-pestanas",
    "context": "El segundo ejercicio agrupa los destinos en pestañas. Las pestañas son destinos de primer nivel dentro del grupo; no son un historial de páginas visitadas.",
    "steps": [
      "Un FlyoutItem con varios Tab dentro muestra barra de pestañas.",
      "Cada Tab tiene un Title, que es la etiqueta visible para el usuario.",
      "Dentro de cada Tab, ShellContent apunta a la página que ese destino muestra.",
      "El título de la pestaña es solo una etiqueta de interfaz: la clase de la página mantiene su nombre de C#.",
      "Al cambiar de pestaña, Shell conserva la página seleccionada y muestra la correspondiente."
    ],
    "result": "Al elegir Pestañas en el menú se ve una barra con Cuerpos y Comprobar. Pulsar cada pestaña cambia el contenido sin salir de ese grupo."
  },
  {
    "lesson": "learn-multipagina",
    "section": 3,
    "title": "Abrir un detalle con PushAsync",
    "path": "examples/EjemplosEstudio/Paginas/LmDetalle.xaml.cs",
    "id": "lm-detalle",
    "context": "Una pestaña por cada cuerpo astronómico sería excesivo. Un solo listado con botones que abren una página de detalle temporal, apilada encima, es la solución habitual.",
    "steps": [
      "Los cuatro botones comparten CuerpoClick; sender indica cuál se pulsó.",
      "El texto del botón se pasa como identificador a CuerpoDetalle, que construye su contenido con él.",
      "Navigation.PushAsync añade la página nueva a la pila de navegación y la muestra.",
      "La lista es el origen y el detalle un destino temporal: el botón Atrás del sistema o de la barra la quita de la pila.",
      "await espera a que termine la navegación sin bloquear la interfaz; por eso el método es async."
    ],
    "result": "Al pulsar Moon se abre una página con el título Moon. El botón Atrás vuelve al listado."
  },
  {
    "lesson": "learn-multipagina",
    "section": 4,
    "title": "Comprobar dónde estás en la navegación",
    "path": "examples/EjemplosEstudio/Paginas/LmComprobar.xaml.cs",
    "id": "lm-comprobar",
    "context": "Tras recorrer menú, pestañas y detalle hay que comprobar que sigues dentro de la estructura de Shell y que el botón Atrás vuelve donde debe. Este código muestra la ruta actual y el tamaño de la pila.",
    "steps": [
      "Shell.Current.CurrentState.Location devuelve la ruta actual dentro del Shell, que identifica destino y pestaña.",
      "Navigation.NavigationStack lista las páginas apiladas en este destino.",
      "Desde un destino de primer nivel la pila contiene la propia página; tras PushAsync tendría una más.",
      "Las dos cifras se muestran en una etiqueta para compararlas antes y después de abrir un detalle.",
      "Esto comprueba la estructura de navegación; la disponibilidad de Internet o el aspecto en Android e iOS son comprobaciones aparte."
    ],
    "result": "Al pulsar el botón aparece la ruta del destino y el número de páginas apiladas, normalmente 1 en un destino de primer nivel."
  },
  {
    "lesson": "learn-recursos",
    "section": 0,
    "title": "Recursos de página para valores repetidos",
    "path": "examples/EjemplosEstudio/Paginas/LrPagina.xaml",
    "id": "lr-pagina",
    "context": "El mismo color y el mismo tamaño de letra estaban escritos en muchos controles. Extraerlos a recursos con clave y tipo reduce la repetición y deja un solo sitio donde cambiarlos.",
    "steps": [
      "ContentPage.Resources abre el diccionario de la página.",
      "Cada recurso tiene x:Key y tipo. Los colores son Color; un tamaño es x:Double.",
      "Los controles lo consumen con {StaticResource clave}: se resuelve una vez al cargar la página.",
      "El aspecto no cambia respecto a la versión sin recursos; solo se reduce la repetición.",
      "Una clave mal escrita provoca un error al cargar la página, porque las claves distinguen mayúsculas."
    ],
    "result": "Se ve una pantalla lavanda con tres etiquetas azul oscuro de tamaño 20. Cambiar fgColor en un solo lugar cambia las tres."
  },
  {
    "lesson": "learn-recursos",
    "section": 1,
    "title": "DynamicResource y cambio de tema",
    "path": "examples/EjemplosEstudio/Paginas/LrDinamico.xaml.cs",
    "id": "lr-dinamico",
    "context": "Un cambio de tema asignando color control a control obliga a recorrer todos los controles. Si los controles consumen los colores con DynamicResource, basta con sustituir los valores del diccionario.",
    "steps": [
      "Las referencias pasan de StaticResource a DynamicResource: mantienen la relación con la clave.",
      "ClaroClick y OscuroClick reemplazan dos entradas del diccionario con nuevos Color.",
      "Los controles que consumen esas claves se actualizan sin que el código los toque.",
      "El cambio es de presentación: no modifica ninguna cifra de la pantalla.",
      "Con StaticResource en lugar de DynamicResource, nada cambiaría tras la carga."
    ],
    "result": "Al pulsar Dark el fondo se vuelve negro y las etiquetas blancas. Light devuelve la apariencia clara."
  },
  {
    "lesson": "learn-recursos",
    "section": 2,
    "title": "infoLabelStyle: agrupar propiedades",
    "path": "examples/EjemplosEstudio/Paginas/LrStyle.xaml",
    "id": "lr-style",
    "context": "Aun con recursos, cada etiqueta repetía tres asignaciones. Un Style las agrupa: se escribe una vez y se aplica por nombre a las etiquetas informativas.",
    "steps": [
      "Style con TargetType=\"Label\" se aplica a controles de ese tipo; x:Key permite pedirlo por nombre.",
      "Cada Setter asigna una propiedad con Property y Value.",
      "Los Setter reutilizan los recursos ya definidos con StaticResource.",
      "Las etiquetas lo aplican con Style=\"{StaticResource infoLabelStyle}\" y no repiten ninguna propiedad.",
      "El estilo no crea ni duplica controles: solo cambia cómo reciben sus propiedades."
    ],
    "result": "Se ven dos etiquetas en cursiva, azul oscuro y tamaño 18, sin ninguna propiedad escrita en ellas salvo el estilo."
  },
  {
    "lesson": "learn-recursos",
    "section": 3,
    "title": "Recursos en Application.Resources",
    "path": "examples/EjemplosEstudio/App.xaml",
    "id": "lr-app",
    "context": "Cuando varias páginas necesitan los mismos recursos y estilos, se declaran una sola vez en App.xaml. Todas las páginas de la aplicación los ven sin repetirlos.",
    "steps": [
      "Application.Resources, en App.xaml, abre el diccionario global de la aplicación.",
      "Aquí se declaran un color, un tamaño y un estilo con clave que usa esos dos recursos.",
      "Cualquier página escribe Style=\"{StaticResource estiloAviso}\" sin definir nada local.",
      "Un recurso local más cercano puede ocultar una clave global del mismo nombre; por eso se eliminan las definiciones locales que deban compartir el valor de aplicación.",
      "La página de este ejemplo no declara ningún recurso: todo viene de App.xaml."
    ],
    "result": "Se ven dos etiquetas con el color y el tamaño definidos en App.xaml (22 puntos, morado), aunque la página no declare nada."
  },
  {
    "lesson": "learn-recursos",
    "section": 4,
    "title": "Estático, dinámico y estilo ante el mismo cambio",
    "path": "examples/EjemplosEstudio/Paginas/LrComparar.xaml.cs",
    "id": "lr-comparar",
    "context": "Los cuatro ejercicios van de valor repetido a recurso estático, relación dinámica, estilo y ámbito global. Comparar los mecanismos con el mismo cambio muestra quién reacciona y quién no.",
    "steps": [
      "colorAplicacion está en App.xaml; las tres etiquetas lo consumen de formas distintas.",
      "El manejador alterna el valor de esa clave en Application.Current.Resources.",
      "Application.Current puede ser null, por eso se comprueba antes de usarlo.",
      "Solo la etiqueta con DynamicResource cambia: las otras resolvieron el valor al cargarse.",
      "El estilo que usa StaticResource dentro tampoco se actualiza: para que lo hiciera tendría que usar DynamicResource en su Setter."
    ],
    "result": "Al pulsar el botón, solo la segunda etiqueta cambia a rojo y al pulsarlo otra vez vuelve al morado. Las otras dos permanecen sin cambios."
  }
];
