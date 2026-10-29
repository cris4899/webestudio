// Ampliaciones didácticas de las 19 fichas; no modifican los originales ni los ZIP.
export const referenceDetails = {
  "controles": {
    "explanation": [
      "Label muestra información: instrucciones, un resultado o un error. Su Text es una cadena, aunque represente un número. No sirve para recoger lo que escribe el usuario. Puedes configurar FontSize, TextColor, FontAttributes y LineBreakMode para que el texto sea legible.",
      "Entry permite introducir una sola línea. Text puede ser null o estar vacío; Placeholder es una ayuda que desaparece al escribir, no es el dato. Keyboard orienta el teclado y MaxLength limita caracteres, pero ninguno comprueba por sí solo obligatoriedad, formato o mínimos. IsPassword oculta visualmente el texto; no autentica ni cifra credenciales.",
      "Button representa una acción. Clicked conecta la pulsación con un método del code-behind. IsEnabled permite impedir una acción que todavía no tiene sentido; la validación sigue siendo necesaria en el manejador. x:Name identifica el control para usarlo desde C#, mientras Text es lo que ve el usuario."
    ],
    "properties": [
      {
        "name": "Label.Text / TextColor",
        "use": "Cadena que se muestra y su color; actualiza también los resultados obsoletos."
      },
      {
        "name": "Entry.Text / Placeholder",
        "use": "Dato escrito frente a pista de entrada. Trata null y espacios."
      },
      {
        "name": "MaxLength / Keyboard / IsPassword",
        "use": "Ayudas de entrada: no sustituyen las reglas de validación."
      },
      {
        "name": "Button.Clicked / IsEnabled",
        "use": "Acción al pulsar y disponibilidad del botón."
      },
      {
        "name": "x:Name",
        "use": "Referencia al View dentro de su página; no es una etiqueta visible."
      }
    ],
    "examples": [
      {
        "title": "Una pantalla: entrada, acción y respuesta",
        "filename": "EjemploPage.xaml",
        "context": "Ejemplo de página XAML en un proyecto MAUI. La clase parcial de C# del siguiente bloque debe coincidir con x:Class. El saludo solo ilustra el flujo; no sustituye las reglas de la relación 1.",
        "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Aula.EjemploPage\">\n    <VerticalStackLayout Padding=\"20\" Spacing=\"12\">\n        <Label Text=\"Escribe tu nombre\" FontSize=\"20\" />\n        <Entry x:Name=\"nombreEntry\"\n               Placeholder=\"Entre 3 y 20 caracteres\"\n               MaxLength=\"20\" />\n        <Button Text=\"Saludar\" Clicked=\"Saludar\" />\n        <Label x:Name=\"resultadoLabel\"\n               Text=\"Todavía no has enviado un nombre.\"\n               LineBreakMode=\"WordWrap\" />\n    </VerticalStackLayout>\n</ContentPage>",
        "steps": [
          "El contenedor coloca los controles verticalmente y reserva espacio interior.",
          "x:Name permite que el manejador lea nombreEntry y escriba resultadoLabel.",
          "Clicked=\"Saludar\" debe nombrar un método existente en la misma clase parcial."
        ],
        "result": "Al pulsar el botón se ejecutará Saludar; el bloque siguiente decide si muestra un error o un saludo."
      },
      {
        "title": "Leer, validar y actualizar la interfaz",
        "filename": "EjemploPage.xaml.cs",
        "context": "Code-behind de la página anterior. Usa namespace Aula y una clase partial con el mismo nombre. Los proyectos MAUI suelen incluir los using necesarios mediante implicit usings.",
        "code": "namespace Aula;\n\npublic partial class EjemploPage : ContentPage\n{\n    public EjemploPage()\n    {\n        InitializeComponent();\n    }\n\n    private void Saludar(object sender, EventArgs e)\n    {\n        string nombre = (nombreEntry.Text ?? \"\").Trim();\n        if (nombre.Length < 3 || nombre.Length > 20)\n        {\n            resultadoLabel.Text = \"Nombre: entre 3 y 20 caracteres.\";\n            resultadoLabel.TextColor = Colors.DarkRed;\n            return;\n        }\n\n        resultadoLabel.Text = $\"Hola, {nombre}.\";\n        resultadoLabel.TextColor = Colors.DarkGreen;\n    }\n}",
        "steps": [
          "InitializeComponent construye los Views declarados en XAML antes de usarlos.",
          "?? y Trim permiten tratar la ausencia de texto y espacios exteriores.",
          "La rama inválida termina con return; así no se sobrescribe el error con un saludo."
        ],
        "result": "Vacío o dos letras muestran error; tres letras muestran saludo. Después de un saludo, borrar el nombre y pulsar vuelve a mostrar el error."
      }
    ],
    "pitfalls": [
      "Confundir Placeholder con un valor introducido.",
      "Creer que MaxLength comprueba el mínimo o que un teclado numérico impide texto pegado.",
      "Usar una firma o nombre de manejador que no coincide con Clicked."
    ],
    "check": "Prueba vacío, solo espacios, dos letras, tres letras y veinte. Explica qué hace cada uno de los tres Views y qué propiedad cambia en el resultado."
  },
  "boxview": {
    "explanation": [
      "BoxView es un View que dibuja una superficie rectangular de un color. Puede servir como separador, muestra de color o indicador de estado. No contiene otros Views y no convierte automáticamente su color en información accesible: acompáñalo de una etiqueta si comunica un significado.",
      "Slider permite elegir un double dentro de un intervalo continuo. Minimum y Maximum definen los extremos y Value el valor actual. ValueChanged se produce al cambiar el valor, tanto por interacción como por una asignación en C#. Un valor continuo no se convierte en entero por mostrarlo sin decimales.",
      "El ejemplo une ambos controles: la posición del Slider representa un porcentaje y modifica Opacity del BoxView. Slider trabaja de 0 a 100, mientras Opacity espera de 0 a 1; por eso se divide entre 100. La etiqueta explica el dato sin depender solo del color."
    ],
    "properties": [
      {
        "name": "BoxView.Color",
        "use": "Color de la superficie; en BoxView es Color, no TextColor."
      },
      {
        "name": "HeightRequest / WidthRequest",
        "use": "Tamaños solicitados al layout, no coordenadas absolutas."
      },
      {
        "name": "Slider.Minimum / Maximum / Value",
        "use": "Intervalo y número actual; configura los extremos antes del valor inicial."
      },
      {
        "name": "ValueChanged / NewValue",
        "use": "Evento y nuevo double recibido al cambiar."
      },
      {
        "name": "Opacity",
        "use": "Transparencia del View: 0 invisible, 1 opaco."
      }
    ],
    "examples": [
      {
        "title": "Porcentaje e indicador visual",
        "filename": "Contenido de una ContentPage XAML",
        "context": "Inserta este contenedor como contenido de una página ya creada y añade el manejador del siguiente bloque en su code-behind.",
        "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">\n    <Label Text=\"Opacidad de la muestra\" />\n    <BoxView x:Name=\"muestra\"\n             Color=\"RoyalBlue\"\n             HeightRequest=\"60\"\n             Opacity=\"0.5\" />\n    <Label x:Name=\"porcentajeLabel\" Text=\"50 %\" />\n    <Slider Minimum=\"0\" Maximum=\"100\" Value=\"50\"\n            ValueChanged=\"CambiarOpacidad\" />\n</VerticalStackLayout>",
        "steps": [
          "BoxView reserva 60 unidades de alto para ver la muestra.",
          "El valor inicial 50 se corresponde con Opacity 0.5.",
          "ValueChanged actualiza etiqueta y muestra cada vez que cambia el Slider."
        ],
        "result": "La pantalla empieza en 50 % y la muestra tiene media opacidad."
      },
      {
        "title": "Convertir intervalos y presentar el dato",
        "filename": "Manejador dentro de la clase partial de la página",
        "context": "El evento puede dispararse mientras InitializeComponent carga el XAML. Comprueba que los controles nombrados ya existen antes de acceder a ellos.",
        "code": "private void CambiarOpacidad(object sender, ValueChangedEventArgs e)\n{\n    if (porcentajeLabel is null || muestra is null)\n        return;\n\n    double porcentaje = e.NewValue;\n    porcentajeLabel.Text = $\"{porcentaje:F0} %\";\n    muestra.Opacity = porcentaje / 100.0;\n}",
        "steps": [
          "NewValue contiene el double del Slider.",
          "F0 muestra cero decimales, pero no cambia el número almacenado.",
          "Dividir por 100 transforma 0–100 en 0–1 para Opacity."
        ],
        "result": "En 0 la muestra no se ve y la etiqueta indica 0 %; en 100 es opaca. Los valores intermedios producen transiciones continuas."
      }
    ],
    "pitfalls": [
      "Asignar directamente 75 a Opacity en vez de 0.75.",
      "Esperar que un BoxView actúe como contenedor o control de texto.",
      "Ignorar que el evento puede llegar durante la inicialización."
    ],
    "check": "Mueve el Slider al mínimo, mitad y máximo; comprueba etiqueta y opacidad. Después explica por qué el formato F0 no hace discreto el intervalo."
  },
  "image": {
    "explanation": [
      "Image muestra una imagen mediante Source. Para un archivo empaquetado en la aplicación, colócalo en Resources/Images con la configuración MauiImage del proyecto. El nombre usado por Source debe coincidir con el recurso; no es una ruta arbitraria al disco del profesor.",
      "AspectFit conserva la proporción y deja toda la imagen visible, aunque queden huecos. AspectFill conserva la proporción llenando el área y puede recortar. Fill estira la imagen hasta las dimensiones del área y puede deformarla. La decisión depende de si importa ver la imagen completa o cubrir toda la región.",
      "WidthRequest y HeightRequest solicitan el espacio al layout. Una imagen puede seguir ocupando un área distinta si el contenedor impone restricciones. Añade una descripción semántica cuando aporte información y evita comunicar datos solo mediante una imagen."
    ],
    "properties": [
      {
        "name": "Source",
        "use": "Nombre de recurso local o fuente soportada, por ejemplo una URI remota."
      },
      {
        "name": "Aspect",
        "use": "Regla para adaptar la imagen al área disponible."
      },
      {
        "name": "WidthRequest / HeightRequest",
        "use": "Área solicitada, que se combina con las reglas del layout."
      },
      {
        "name": "SemanticProperties.Description",
        "use": "Descripción para tecnologías de asistencia cuando la imagen aporta contenido."
      }
    ],
    "examples": [
      {
        "title": "Mostrar el recurso de la plantilla",
        "filename": "Fragmento XAML dentro de un layout",
        "context": "Este ejemplo requiere dotnet_bot.png en Resources/Images con la acción MauiImage. Es un recurso habitual de la plantilla MAUI; comprueba el nombre en tu proyecto.",
        "code": "<Image x:Name=\"imagen\"\n       Source=\"dotnet_bot.png\"\n       HeightRequest=\"120\"\n       WidthRequest=\"220\"\n       Aspect=\"AspectFit\"\n       SemanticProperties.Description=\"Robot de la plantilla .NET MAUI\" />",
        "steps": [
          "Source selecciona el recurso empaquetado.",
          "El rectángulo de 220 × 120 ayuda a observar la diferencia entre reglas de proporción.",
          "La descripción comunica el contenido sin depender de verlo."
        ],
        "result": "Con AspectFit se ve la imagen completa y puede quedar espacio libre."
      },
      {
        "title": "Comparar el ajuste desde C#",
        "filename": "Instrucciones dentro de la página, después de InitializeComponent",
        "context": "Usa el Image con x:Name=\"imagen\" del ejemplo anterior. Cambia una opción cada vez para comparar.",
        "code": "imagen.Aspect = Aspect.AspectFit;   // Imagen completa.\n// Alternativa: conserva proporción, puede recortar.\n// imagen.Aspect = Aspect.AspectFill;\n// Alternativa: ocupa el área y puede deformar.\n// imagen.Aspect = Aspect.Fill;",
        "steps": [
          "Mantén el mismo archivo y tamaño para que la comparación sea válida.",
          "Prueba cada alternativa por separado.",
          "Distingue un fallo de recurso inexistente de una regla de ajuste incorrecta."
        ],
        "result": "AspectFill puede cortar bordes; Fill cambia la proporción si el área y la imagen no coinciden."
      }
    ],
    "pitfalls": [
      "Copiar una ruta absoluta de otro ordenador como Source.",
      "Confundir un recorte de AspectFill con que falte una parte del archivo."
    ],
    "check": "Compara los tres modos con la misma imagen en un rectángulo no cuadrado y explica cuál elegirías para un logotipo que debe verse completo."
  },
  "stack": {
    "explanation": [
      "StackLayout distribuye sus hijos en un solo eje. Orientation=\"Vertical\" los coloca de arriba abajo; Horizontal los coloca uno junto a otro. Las pilas anidadas permiten construir filas dentro de una columna, como las teclas de una calculadora.",
      "VerticalStackLayout y HorizontalStackLayout expresan una dirección fija, pero no sustituyen una condición explícita del enunciado. Si la relación pide usar solo StackLayout, utiliza esa clase y configura Orientation en cada contenedor.",
      "Cada pila distribuye sus propios hijos, no alinea automáticamente las columnas de otras filas. Para que varias filas compartan columnas suele ser más adecuado Grid, siempre que lo permita el ejercicio. Spacing y Padding no deben reemplazarse por controles vacíos de separación."
    ],
    "properties": [
      {
        "name": "Orientation",
        "use": "Eje vertical u horizontal en StackLayout."
      },
      {
        "name": "Children",
        "use": "Colección de Views colocados en el contenedor."
      },
      {
        "name": "Spacing",
        "use": "Separación entre hijos consecutivos."
      },
      {
        "name": "Padding",
        "use": "Espacio interior antes de colocar los hijos."
      }
    ],
    "examples": [
      {
        "title": "Una columna con dos filas de botones",
        "filename": "Fragmento XAML de distribución; no es una calculadora completa",
        "context": "Inserta como contenido de una ContentPage. Aquí se muestra la estructura; los manejadores y el modelo se estudian en la relación 2.",
        "code": "<StackLayout Orientation=\"Vertical\" Padding=\"20\" Spacing=\"10\">\n    <Entry Text=\"0\" IsReadOnly=\"True\" />\n    <StackLayout Orientation=\"Horizontal\" Spacing=\"8\">\n        <Button Text=\"1\" />\n        <Button Text=\"2\" />\n    </StackLayout>\n    <StackLayout Orientation=\"Horizontal\" Spacing=\"8\">\n        <Button Text=\"3\" />\n        <Button Text=\"4\" />\n    </StackLayout>\n</StackLayout>",
        "steps": [
          "La pila exterior ordena visor y filas.",
          "Cada pila interior organiza dos botones horizontalmente.",
          "Los botones todavía no calculan: la disposición y el comportamiento se conectan por separado."
        ],
        "result": "Aparece un visor y dos filas de dos botones; solo se usa StackLayout."
      },
      {
        "title": "Construir la misma idea con objetos",
        "filename": "Cuerpo del constructor de una ContentPage creada en C#",
        "context": "En una página exclusivamente C# puedes asignar Content directamente; no hace falta inventar un XAML paralelo.",
        "code": "StackLayout raiz = new StackLayout { Spacing = 10, Padding = 20 };\nEntry visor = new Entry { Text = \"0\", IsReadOnly = true };\nStackLayout fila = new StackLayout\n{\n    Orientation = StackOrientation.Horizontal,\n    Spacing = 8\n};\nfila.Children.Add(new Button { Text = \"1\" });\nfila.Children.Add(new Button { Text = \"2\" });\nraiz.Children.Add(visor);\nraiz.Children.Add(fila);\nContent = raiz;",
        "steps": [
          "Crear un View no lo añade a la pantalla: Children.Add lo incorpora.",
          "La raíz contiene el visor y una fila.",
          "Content conecta el árbol con la página que se muestra."
        ],
        "result": "La página presenta el visor y una fila; faltaría repetir la segunda fila para reproducir todo el XAML."
      }
    ],
    "pitfalls": [
      "Crear controles en C# sin incorporarlos al árbol visual.",
      "Esperar alineación de columnas entre pilas independientes."
    ],
    "check": "Reconstruye dos filas sin Grid y explica qué cambia al invertir Orientation en la pila exterior."
  },
  "grid": {
    "explanation": [
      "Grid reparte un área en filas y columnas compartidas. Define primero la estructura y después coloca cada hijo con Grid.Row y Grid.Column. Los índices empiezan en cero; si omites ambos, varios hijos pueden terminar superpuestos en la primera celda.",
      "Auto mide lo que necesita el contenido. Un valor fijo reserva unidades independientes del dispositivo. * distribuye espacio restante; 2* recibe el doble que * cuando se reparte ese espacio. No significa porcentaje del tamaño total.",
      "RowSpan y ColumnSpan indican cuántas celdas ocupa un hijo desde su posición inicial. Los espacios entre filas y columnas se controlan con RowSpacing y ColumnSpacing, no con una fila vacía por cada hueco."
    ],
    "properties": [
      {
        "name": "RowDefinitions / ColumnDefinitions",
        "use": "Tamaño y cantidad de filas y columnas."
      },
      {
        "name": "Grid.Row / Grid.Column",
        "use": "Posición inicial desde cero."
      },
      {
        "name": "Grid.RowSpan / Grid.ColumnSpan",
        "use": "Número de filas o columnas ocupadas."
      },
      {
        "name": "RowSpacing / ColumnSpacing",
        "use": "Separación entre filas y columnas."
      }
    ],
    "examples": [
      {
        "title": "Visor que ocupa dos columnas",
        "filename": "Contenido de una ContentPage XAML",
        "context": "Fragmento de distribución de una calculadora; los botones se conectan al modelo en el proyecto completo.",
        "code": "<Grid RowDefinitions=\"Auto,*\"\n      ColumnDefinitions=\"*,2*\"\n      RowSpacing=\"10\" ColumnSpacing=\"8\" Padding=\"20\">\n    <Entry Grid.Row=\"0\" Grid.Column=\"0\" Grid.ColumnSpan=\"2\"\n           Text=\"0\" IsReadOnly=\"True\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"0\" Text=\"1\" />\n    <Button Grid.Row=\"1\" Grid.Column=\"1\" Text=\"2\" />\n</Grid>",
        "steps": [
          "La primera fila usa la altura necesaria para el visor.",
          "El visor empieza en columna cero y abarca dos columnas.",
          "La segunda columna recibe dos partes del espacio disponible frente a una de la primera."
        ],
        "result": "El visor ocupa todo el ancho útil y el segundo botón dispone aproximadamente del doble de ancho, descontando separaciones."
      },
      {
        "title": "Posicionar en un Grid creado en C#",
        "filename": "Instrucciones dentro de una ContentPage",
        "context": "Los parámetros de Add son columna y fila, en ese orden. Las definiciones se añaden antes de colocar el control.",
        "code": "Grid tabla = new Grid();\ntabla.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto });\ntabla.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\ntabla.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\nLabel mensaje = new Label { Text = \"Ocupo dos columnas\" };\ntabla.Add(mensaje, 0, 0);\nGrid.SetColumnSpan(mensaje, 2);\nContent = tabla;",
        "steps": [
          "Las dos columnas comparten una única fila automática.",
          "Add(mensaje, 0, 0) elige primera columna y primera fila.",
          "SetColumnSpan amplía su ocupación sin crear un segundo Label."
        ],
        "result": "Un único Label abarca las dos columnas."
      }
    ],
    "pitfalls": [
      "Usar índices desde uno o invertir fila y columna al usar Add.",
      "Interpretar * como un porcentaje fijo o sumar spans que exceden la estructura."
    ],
    "check": "Dibuja las celdas antes de escribir XAML. Cambia *,2* por *,* y comprueba qué se mantiene y qué cambia."
  },
  "espacios": {
    "explanation": [
      "Margin separa el elemento de su entorno: deja espacio exterior. Padding reserva espacio dentro del contenedor antes de colocar su contenido. Spacing separa hijos sucesivos de una pila; en Grid se usan RowSpacing y ColumnSpacing.",
      "Las propiedades Margin y Padding usan Thickness. Un valor aplica a los cuatro lados; dos valores representan horizontal y vertical; cuatro se escriben izquierda, arriba, derecha y abajo. No todos los Views tienen Padding ni Spacing: consulta el tipo que estás configurando.",
      "Estas medidas son unidades independientes del dispositivo, no píxeles físicos de una captura. Combínalas con alineación y tamaños flexibles para reproducir el modelo sin recortar texto al cambiar la ventana."
    ],
    "properties": [
      {
        "name": "Margin=\"12\"",
        "use": "12 unidades exteriores en cada lado del View."
      },
      {
        "name": "Padding=\"16,8\"",
        "use": "16 interiores a izquierda/derecha y 8 arriba/abajo."
      },
      {
        "name": "Thickness(4,8,12,16)",
        "use": "Izquierda, arriba, derecha y abajo respectivamente."
      },
      {
        "name": "Spacing=\"10\"",
        "use": "10 entre hijos de una pila, no en su borde exterior."
      }
    ],
    "examples": [
      {
        "title": "Separación exterior, interior y entre hijos",
        "filename": "Fragmento XAML dentro de una página",
        "context": "Observa cada nivel: el contenedor tiene margen y relleno; los hijos se separan con Spacing.",
        "code": "<VerticalStackLayout Margin=\"12\" Padding=\"16,8\" Spacing=\"10\"\n                     BackgroundColor=\"AliceBlue\">\n    <Label Text=\"Primer elemento\" />\n    <Label Text=\"Segundo elemento\" />\n</VerticalStackLayout>",
        "steps": [
          "Margin separa todo el bloque de su contenedor padre.",
          "Padding separa los Labels del borde azul interior.",
          "Spacing aparece solo entre los dos Labels."
        ],
        "result": "Se distinguen el espacio exterior, el relleno del área coloreada y el hueco entre textos."
      },
      {
        "title": "Thickness y alineación",
        "filename": "Instrucciones después de crear un layout y un Label",
        "context": "Aquí se crean los objetos para que puedas situar cada propiedad en el tipo correcto.",
        "code": "VerticalStackLayout layout = new VerticalStackLayout\n{\n    Padding = new Thickness(16, 8),\n    Spacing = 10\n};\nLabel texto = new Label\n{\n    Text = \"Texto centrado en su espacio\",\n    Margin = new Thickness(4, 8, 12, 16),\n    HorizontalOptions = LayoutOptions.Center\n};\nlayout.Children.Add(texto);",
        "steps": [
          "Dos argumentos de Thickness representan horizontal y vertical.",
          "Cuatro argumentos permiten configurar cada borde por separado.",
          "HorizontalOptions alinea el View; no sustituye Margin ni Padding."
        ],
        "result": "El Label se centra dentro del espacio que el layout le concede y conserva sus márgenes exteriores."
      }
    ],
    "pitfalls": [
      "Intercambiar margen y relleno para corregir un layout sin entender el origen del hueco.",
      "Asignar Spacing a un Label o suponer que existe Padding en cualquier View."
    ],
    "check": "Pon un color al contenedor, modifica solo una propiedad cada vez y señala dónde aparece el espacio añadido."
  },
  "xaml": {
    "explanation": [
      "XAML construye objetos y asigna propiedades. El namespace por defecto identifica los tipos MAUI; xmlns:x declara las directivas de XAML, como x:Class, x:Name y x:Key. Un prefijo local suele señalar clases del propio proyecto.",
      "x:Class debe coincidir exactamente con namespace y nombre de la clase partial del code-behind. Las dos partes forman un único tipo. InitializeComponent, generado durante la compilación XAML, carga la interfaz y sus referencias nombradas.",
      "clr-namespace identifica un namespace CLR. Si el tipo está en otra biblioteca, assembly indica el nombre de ese ensamblado. Escribir el prefijo no añade una referencia al proyecto: ambas cosas deben existir."
    ],
    "properties": [
      {
        "name": "xmlns",
        "use": "Namespace de los tipos que aparecen sin prefijo."
      },
      {
        "name": "xmlns:x",
        "use": "Directivas de XAML: Class, Name y Key."
      },
      {
        "name": "x:Class",
        "use": "Tipo CLR de la página; debe coincidir con su clase partial."
      },
      {
        "name": "x:Name",
        "use": "Nombre del objeto dentro del ámbito XAML, accesible desde el code-behind."
      },
      {
        "name": "InitializeComponent",
        "use": "Método generado que carga la interfaz; no lo implementes manualmente."
      }
    ],
    "examples": [
      {
        "title": "Una página y un control nombrado",
        "filename": "Pagina.xaml",
        "context": "Ejemplo completo de raíz de página; Aula es el namespace didáctico y debe coincidir con el C#.",
        "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             xmlns:local=\"clr-namespace:Aula\"\n             x:Class=\"Aula.Pagina\">\n    <Label x:Name=\"mensaje\" Text=\"Valor inicial\" />\n</ContentPage>",
        "steps": [
          "ContentPage pertenece al namespace MAUI por defecto.",
          "x:Class apunta a Aula.Pagina; local permite referenciar otros tipos de Aula.",
          "x:Name crea una referencia al Label, no cambia su texto."
        ],
        "result": "El Label muestra Valor inicial antes de ejecutar la personalización de C#."
      },
      {
        "title": "La segunda parte de la misma clase",
        "filename": "Pagina.xaml.cs",
        "context": "Code-behind de la página anterior, no una clase de un namespace distinto.",
        "code": "namespace Aula;\n\npublic partial class Pagina : ContentPage\n{\n    public Pagina()\n    {\n        InitializeComponent();\n        mensaje.Text = \"Interfaz cargada\";\n    }\n}",
        "steps": [
          "partial permite combinar la parte de usuario y la parte generada.",
          "El constructor carga el XAML antes de usar mensaje.",
          "Cambiar namespace o nombre en un único archivo rompe la correspondencia."
        ],
        "result": "La página termina mostrando Interfaz cargada."
      }
    ],
    "pitfalls": [
      "Editar archivos de obj para solucionar un error de nombres.",
      "Llamar a un control antes de InitializeComponent o declarar otra clase con el mismo propósito."
    ],
    "check": "Señala en ambos archivos las partes que deben coincidir y distingue x:Class, x:Name y x:Key."
  },
  "eventos": {
    "explanation": [
      "Un evento comunica que ha ocurrido una acción, como pulsar un botón o cambiar un valor. El manejador contiene la respuesta. Puedes conectarlo desde XAML con Clicked=\"Nombre\" o desde C# con +=, pero evita suscribir el mismo manejador dos veces.",
      "sender identifica al objeto que emite el evento; EventArgs o su subtipo aporta información de la acción. Un manejador centralizado permite compartir lógica entre botones y decidir a partir del emisor qué dato se ha introducido.",
      "El estado que debe sobrevivir entre pulsaciones pertenece normalmente a campos de la instancia o a su modelo. Una variable local empieza de nuevo en cada invocación. No conviertas el estado en static si cada pantalla debe tener su propia operación."
    ],
    "properties": [
      {
        "name": "Clicked",
        "use": "Evento de pulsación de un Button."
      },
      {
        "name": "+= / -=",
        "use": "Suscripción y retirada de un manejador cuando corresponda a su ciclo de vida."
      },
      {
        "name": "sender",
        "use": "Emisor; comprueba el tipo antes de acceder a propiedades."
      },
      {
        "name": "EventArgs / ValueChangedEventArgs",
        "use": "Datos del evento; algunos eventos usan un subtipo con información adicional."
      }
    ],
    "examples": [
      {
        "title": "Dos emisores, un método",
        "filename": "Fragmento XAML dentro de la página de ejemplo",
        "context": "Los controles y el campo de estado del siguiente bloque pertenecen a la misma página.",
        "code": "<HorizontalStackLayout Spacing=\"10\">\n    <Button Text=\"1\" Clicked=\"AgregarDigito\" />\n    <Button Text=\"2\" Clicked=\"AgregarDigito\" />\n    <Label x:Name=\"visor\" Text=\"\" />\n</HorizontalStackLayout>",
        "steps": [
          "Los dos botones nombran el mismo manejador.",
          "El Label solo presenta el texto acumulado.",
          "No se necesita un método casi idéntico para cada dígito."
        ],
        "result": "Las pulsaciones se diferencian por el Button recibido como sender."
      },
      {
        "title": "Conservar estado y leer el emisor",
        "filename": "Miembros de la clase partial de esa página",
        "context": "Fragmento de acumulación para estudiar eventos; no implementa todos los estados de la calculadora de R2.",
        "code": "private string entrada = \"\";\n\nprivate void AgregarDigito(object sender, EventArgs e)\n{\n    if (sender is not Button boton)\n        return;\n\n    entrada += boton.Text;\n    visor.Text = entrada;\n}",
        "steps": [
          "entrada es un campo de la instancia, no una variable local reiniciada.",
          "El patrón is comprueba el tipo y proporciona una referencia Button.",
          "El mismo flujo actualiza el estado y después el Label."
        ],
        "result": "Pulsar 1, 2, 1 muestra 121. Si aparece 112211, revisa una posible suscripción duplicada."
      }
    ],
    "pitfalls": [
      "Conectar en XAML y además con += al mismo método.",
      "Guardar toda la operación en variables locales que desaparecen tras cada clic."
    ],
    "check": "Comprueba una sola acción por clic e identifica qué cambiaría si dos páginas compartiesen un campo static."
  },
  "modelo": {
    "explanation": [
      "El modelo representa datos y reglas independientes de cómo se distribuye la interfaz. Un constructor o setter puede rechazar un valor antes de almacenarlo, de forma que el objeto no quede con un dato inválido.",
      "La página recoge la entrada, convierte formatos y muestra el resultado. Debe capturar errores previstos de las reglas y dar una respuesta comprensible. Una excepción no debe convertirse en un cierre inesperado ni en una alerta que deje un éxito anterior visible.",
      "Distingue dato inválido de resultado permitido pero negativo. En R1 una edad 17 es válida dentro de 5–70: el resultado es no tener acceso, no un error de formato. Keyboard=\"Numeric\" no elimina la conversión ni la comprobación del rango."
    ],
    "properties": [
      {
        "name": "Constructor / setter",
        "use": "Punto donde se establece y valida un dato."
      },
      {
        "name": "ArgumentException",
        "use": "Comunica que un argumento incumple una regla conocida."
      },
      {
        "name": "TryParse",
        "use": "Conversión que permite comprobar formato sin una excepción por texto inválido."
      },
      {
        "name": "try / catch",
        "use": "La UI trata errores previstos y decide la retroalimentación."
      }
    ],
    "examples": [
      {
        "title": "Modelo mínimo con una regla",
        "filename": "Persona.cs",
        "context": "Clase didáctica independiente. Solo valida Nombre: para resolver R1 completa también apellidos y edad con los límites del enunciado.",
        "code": "namespace Aula;\n\npublic class Persona\n{\n    public string Nombre { get; }\n\n    public Persona(string? nombre)\n    {\n        if (string.IsNullOrWhiteSpace(nombre) ||\n            nombre.Length < 3 || nombre.Length > 20)\n            throw new ArgumentException(\"Nombre: entre 3 y 20 caracteres.\");\n\n        Nombre = nombre;\n    }\n}",
        "steps": [
          "La comprobación ocurre antes de asignar Nombre.",
          "La propiedad de lectura expone un dato validado.",
          "El modelo no necesita conocer Entry ni Label."
        ],
        "result": "Crear Persona con dos caracteres lanza ArgumentException; con tres conserva el nombre."
      },
      {
        "title": "Consumir el modelo y limpiar un éxito anterior",
        "filename": "Manejador dentro de una ContentPage de namespace Aula",
        "context": "Requiere nombreEntry (Entry) y resultadoLabel (Label), inicializados desde su XAML. DisplayAlertAsync corresponde a MAUI 10.",
        "code": "private async void Comprobar(object sender, EventArgs e)\n{\n    resultadoLabel.Text = \"\";\n    try\n    {\n        Persona persona = new Persona(nombreEntry.Text);\n        resultadoLabel.Text = $\"Nombre válido: {persona.Nombre}\";\n    }\n    catch (ArgumentException ex)\n    {\n        await DisplayAlertAsync(\"Datos incorrectos\", ex.Message, \"Aceptar\");\n    }\n}",
        "steps": [
          "El resultado anterior se borra antes de la nueva validación.",
          "La página pide al modelo que aplique la regla.",
          "El catch trata un error previsto e informa sin cambiar arbitrariamente la regla."
        ],
        "result": "Después de un nombre válido, introducir uno inválido muestra alerta y deja el resultado vacío."
      }
    ],
    "pitfalls": [
      "Duplicar límites distintos en el modelo y en la página.",
      "Capturar Exception y ocultar todos los fallos como si fueran errores de entrada."
    ],
    "check": "Prueba justo antes, en y después de cada límite; después de un error, introduce un dato válido y comprueba recuperación."
  },
  "herencia": {
    "explanation": [
      "La herencia especializa un tipo existente. Un Entry especializado sigue siendo un Entry y puede fijar propiedades iniciales o publicar una propiedad validada. No hace falta volver a implementar un teclado o el dibujo del campo.",
      "La composición crea una unidad a partir de otros Views. ContentView contiene un único Content, que puede ser un layout con varios hijos. El consumidor coloca el componente y usa su API pública sin buscar campos privados de su interior.",
      "Publica solo la información necesaria y valida también al entrar por código. Que el Entry tenga restricciones no protege automáticamente un setter público. Si necesitas binding y estilos sobre una propiedad propia, estudia BindableProperty; una propiedad C# ordinaria no participa por sí sola en ese sistema."
    ],
    "properties": [
      {
        "name": "class Tipo : Entry",
        "use": "Herencia para especializar un control individual."
      },
      {
        "name": "ContentView.Content",
        "use": "Contenido raíz de un componente compuesto."
      },
      {
        "name": "Propiedades públicas",
        "use": "Contrato para leer o escribir información del componente."
      },
      {
        "name": "Constructor",
        "use": "Inicialización de recursos y valores coherentes."
      }
    ],
    "examples": [
      {
        "title": "Un Entry con contrato validado",
        "filename": "EntradaUsuario.cs en una biblioteca MAUI",
        "context": "Ejemplo didáctico de la convención A–Z/a–z de R5. El getter y el setter aplican la misma regla.",
        "code": "namespace Aula;\n\npublic class EntradaUsuario : Entry\n{\n    public EntradaUsuario()\n    {\n        Placeholder = \"Usuario (5–15 letras A–Z)\";\n        MaxLength = 15;\n    }\n\n    public string Usuario\n    {\n        get => Validar(Text);\n        set => Text = Validar(value);\n    }\n\n    private static string Validar(string? texto)\n    {\n        if (texto is null || texto.Length < 5 || texto.Length > 15 ||\n            !texto.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: 5–15 letras A–Z/a–z.\");\n        return texto;\n    }\n}",
        "steps": [
          "El constructor configura ayudas de entrada.",
          "La propiedad Usuario valida al leer y al asignar desde código.",
          "La regla estática recibe el texto, sin almacenar estado compartido."
        ],
        "result": "MaxLength ayuda en la UI, pero la API también rechaza un nombre de cuatro letras o con dígitos."
      },
      {
        "title": "Componer sin exponer el Entry interno",
        "filename": "FichaUsuario.cs en la misma biblioteca MAUI",
        "context": "Ejemplo creado íntegramente en C#: ContentView compone la entrada especializada y una etiqueta.",
        "code": "namespace Aula;\n\npublic class FichaUsuario : ContentView\n{\n    private readonly EntradaUsuario entrada = new EntradaUsuario();\n\n    public FichaUsuario()\n    {\n        Content = new VerticalStackLayout\n        {\n            Spacing = 8,\n            Children = { new Label { Text = \"Nombre de usuario\" }, entrada }\n        };\n    }\n\n    public string Usuario\n    {\n        get => entrada.Usuario;\n        set => entrada.Usuario = value;\n    }\n}",
        "steps": [
          "FichaUsuario no hereda de Entry: agrupa Views.",
          "El Entry sigue siendo privado.",
          "La propiedad delega en la regla del control especializado, sin duplicarla."
        ],
        "result": "El anfitrión puede configurar Usuario y recibir un error si el valor no cumple el contrato."
      }
    ],
    "pitfalls": [
      "Copiar reglas distintas en el componente y en cada página que lo usa.",
      "Exponer los hijos solo para que la página haga toda la validación."
    ],
    "check": "Desde el anfitrión asigna un usuario válido y uno inválido; explica qué clase valida y qué clase muestra la respuesta."
  },
  "bibliotecas": {
    "explanation": [
      "Una biblioteca agrupa tipos reutilizables y produce un ensamblado, normalmente una DLL. La aplicación anfitriona es el proyecto que se ejecuta y consume esos tipos. Una biblioteca de Views requiere configuración MAUI; una biblioteca de reglas sin controles puede ser independiente de la interfaz.",
      "ProjectReference declara la dependencia entre proyectos y permite que el consumidor compile contra la biblioteca. El namespace CLR puede ser distinto del nombre del ensamblado; usa los valores reales, no una ruta al XAML ni el nombre de una clase como assembly.",
      "La integración se demuestra al instanciar el View y utilizar su contrato. Compilar una DLL aislada o copiar una clase al anfitrión no prueba reutilización. En el paquete de R6, el botón consumidor está en Solucion.xaml; MainPage conserva código de plantilla."
    ],
    "properties": [
      {
        "name": "ProjectReference",
        "use": "Referencia de compilación a otro .csproj de la solución."
      },
      {
        "name": "public",
        "use": "Accesibilidad requerida para los tipos consumidos fuera de la biblioteca."
      },
      {
        "name": "clr-namespace / assembly",
        "use": "Namespace del tipo y nombre del ensamblado que lo contiene."
      },
      {
        "name": "DLL y dependencias",
        "use": "Salida de compilación que se consume junto a las dependencias necesarias."
      }
    ],
    "examples": [
      {
        "title": "Referencia del anfitrión a la biblioteca",
        "filename": "Fragmento del .csproj del anfitrión",
        "context": "Ejemplo con los nombres reales de R6; inserta la referencia dentro de Project solo si no existe ya. Conserva la configuración MAUI del proyecto.",
        "code": "<ItemGroup>\n    <ProjectReference Include=\"..\\BAcceso_Estudio\\BAcceso_Estudio.csproj\" />\n</ItemGroup>",
        "steps": [
          "La ruta es relativa al .csproj consumidor.",
          "La referencia permite resolver los tipos de la biblioteca.",
          "No añadas duplicados si el proyecto ya la incluye."
        ],
        "result": "El anfitrión puede compilar utilizando BAcceso_Estudio y sus dependencias."
      },
      {
        "title": "Consumir LoginView desde XAML",
        "filename": "Fragmento de una ContentPage del anfitrión de R6",
        "context": "Esquema de la página Solucion.xaml del anfitrión de R6, con su clase parcial Estudio.Solucion ya creada. Conserva el botón y el manejador Mostrar del proyecto completo si quieres probar la lectura de datos; este bloque se centra en la importación del View.",
        "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             xmlns:views=\"clr-namespace:Estudio;assembly=BAcceso_Estudio\"\n             x:Class=\"Estudio.Solucion\">\n    <VerticalStackLayout Spacing=\"10\" Padding=\"20\">\n        <views:LoginView x:Name=\"login\" />\n    </VerticalStackLayout>\n</ContentPage>",
        "steps": [
          "El prefijo views identifica el namespace Estudio de la biblioteca.",
          "El tipo LoginView debe ser público.",
          "El code-behind real llama a InitializeComponent y el botón externo lee UserName/PassWord tratando las excepciones. El esquema aquí se centra en colocar el componente."
        ],
        "result": "Se muestra el componente importado; no una copia de sus controles en el anfitrión."
      }
    ],
    "pitfalls": [
      "Confundir namespace con nombre de ensamblado.",
      "Creer que xmlns agrega automáticamente ProjectReference."
    ],
    "check": "Compila ambos proyectos, localiza la DLL generada y muestra qué página instancia el View y qué propiedades consume."
  },
  "shell": {
    "explanation": [
      "Shell organiza la navegación de una aplicación. FlyoutItem representa una entrada de menú flotante; ShellContent representa contenido de página. Tab y TabBar organizan pestañas. Un archivo de página existente no es accesible por el usuario hasta que hay una ruta o entrada adecuada.",
      "DataTemplate permite crear la página del destino cuando Shell la necesita. La referencia local debe apuntar al namespace real. Flyout y pestañas resuelven maneras de elegir destinos; una pila de navegación conserva el recorrido de una página a un detalle y permite volver.",
      "Usa una estrategia de navegación coherente. Shell puede navegar por rutas registradas con GoToAsync. Los ejemplos Learn también permiten estudiar Navigation.PushAsync cuando existe una pila de navegación. No registres la misma ruta repetidamente en cada pulsación."
    ],
    "properties": [
      {
        "name": "FlyoutItem / ShellContent",
        "use": "Entrada del menú y página de contenido asociada."
      },
      {
        "name": "Tab / TabBar",
        "use": "Agrupación y presentación de destinos en pestañas."
      },
      {
        "name": "Routing.RegisterRoute",
        "use": "Registro de una ruta de detalle en Shell."
      },
      {
        "name": "GoToAsync / PushAsync",
        "use": "Navegación por rutas Shell o por una pila, según la estructura de la app."
      }
    ],
    "examples": [
      {
        "title": "Dos páginas accesibles desde el menú",
        "filename": "AppShell.xaml",
        "context": "Requiere InicioPage y PracticaPage en namespace Aula. Esta es una raíz Shell; su clase partial debe existir y cargar el XAML.",
        "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n       xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n       xmlns:local=\"clr-namespace:Aula\"\n       x:Class=\"Aula.AppShell\"\n       FlyoutBehavior=\"Flyout\">\n    <FlyoutItem Title=\"Inicio\">\n        <ShellContent ContentTemplate=\"{DataTemplate local:InicioPage}\" />\n    </FlyoutItem>\n    <FlyoutItem Title=\"Práctica\">\n        <ShellContent ContentTemplate=\"{DataTemplate local:PracticaPage}\" />\n    </FlyoutItem>\n</Shell>",
        "steps": [
          "Cada FlyoutItem ofrece un destino visible.",
          "DataTemplate indica el tipo de página, no un archivo descargable.",
          "Para R4 repite la auditoría con todas las variantes exigidas por el PDF."
        ],
        "result": "El menú permite abrir ambas páginas; una página sin entrada no quedaría cubierta por este ejemplo."
      },
      {
        "title": "Abrir un detalle y volver mediante rutas",
        "filename": "Fragmentos C# de AppShell y de una página Shell",
        "context": "Requiere una clase DetallePage. Registra la ruta una vez en el constructor de AppShell, después de InitializeComponent; los métodos van en la página consumidora.",
        "code": "// En el constructor de AppShell:\nRouting.RegisterRoute(\"detalle\", typeof(DetallePage));\n\n// En la clase de una página mostrada por Shell:\nprivate async void AbrirDetalle(object sender, EventArgs e)\n{\n    await Shell.Current.GoToAsync(\"detalle\");\n}\n\nprivate async void Volver(object sender, EventArgs e)\n{\n    await Shell.Current.GoToAsync(\"..\");\n}",
        "steps": [
          "El registro relaciona una cadena con un tipo de página.",
          "GoToAsync abre el detalle sobre el recorrido actual.",
          ".. vuelve un nivel; no implica crear otra instancia de Inicio manualmente."
        ],
        "result": "Puedes abrir el detalle, volver y repetir sin duplicar registros de ruta."
      }
    ],
    "pitfalls": [
      "Sustituir el menú flotante exigido por pestañas y considerar completado el criterio.",
      "Crear páginas sin comprobar acceso y regreso."
    ],
    "check": "Enumera los destinos requeridos y abre cada uno desde la UI; verifica que conserva sus validaciones y acciones."
  },
  "extensiones": {
    "explanation": [
      "Una extensión de marcado calcula o proporciona un valor cuando XAML la evalúa. IMarkupExtension define ProvideValue; el resultado debe ser compatible con la propiedad que lo recibe. Un Color no sirve para Spacing, que espera un double.",
      "La clase puede recibir parámetros mediante propiedades públicas. El sufijo Extension se puede omitir al utilizarla entre llaves en XAML. Define valores por defecto coherentes para que la extensión pueda usarse sin repetir siempre los mismos argumentos.",
      "x:Static no invoca una extensión propia de tu proyecto: accede a un miembro estático público. Ni un valor suministrado por ProvideValue ni una lectura x:Static se actualizan automáticamente al cambiar otro dato, salvo que el mecanismo concreto establezca esa vinculación."
    ],
    "properties": [
      {
        "name": "IMarkupExtension",
        "use": "Contrato para proporcionar un valor al evaluar XAML."
      },
      {
        "name": "ProvideValue(IServiceProvider)",
        "use": "Método que devuelve el resultado compatible con el destino."
      },
      {
        "name": "Propiedades de la extensión",
        "use": "Parámetros configurables desde XAML, con valores iniciales."
      },
      {
        "name": "x:Static",
        "use": "Referencia a un miembro estático público accesible."
      }
    ],
    "examples": [
      {
        "title": "Una extensión de espaciado configurable",
        "filename": "EspacioExtension.cs en namespace Aula",
        "context": "Usa el namespace Microsoft.Maui.Controls.Xaml. Implementa la interfaz no genérica y devuelve un double empaquetado como object.",
        "code": "using Microsoft.Maui.Controls.Xaml;\n\nnamespace Aula;\n\npublic class EspacioExtension : IMarkupExtension\n{\n    public double Valor { get; set; } = 10;\n\n    public object ProvideValue(IServiceProvider serviceProvider)\n    {\n        return Valor;\n    }\n}\n\npublic static class Valores\n{\n    public static Color Fondo => Colors.LightBlue;\n}",
        "steps": [
          "Valor tiene un valor por defecto de diez.",
          "ProvideValue devuelve ese double; no cambia directamente un layout.",
          "Valores.Fondo ofrece un Color estático para comparar el otro mecanismo."
        ],
        "result": "La extensión aporta separación y la clase estática aporta un color; no son tipos intercambiables."
      },
      {
        "title": "Consumir la extensión y el miembro estático",
        "filename": "Fragmento XAML de una página",
        "context": "La raíz debe declarar xmlns:local=\"clr-namespace:Aula\". El nombre Espacio corresponde a EspacioExtension.",
        "code": "<VerticalStackLayout Spacing=\"{local:Espacio Valor=12}\"\n                     BackgroundColor=\"{x:Static local:Valores.Fondo}\">\n    <Label Text=\"Primero\" />\n    <Label Text=\"Segundo\" />\n</VerticalStackLayout>",
        "steps": [
          "Spacing recibe el número 12 devuelto por la extensión.",
          "BackgroundColor recibe un Color de Valores.Fondo.",
          "Si omites Valor=12, Espacio usa su valor inicial diez."
        ],
        "result": "Se muestran dos Labels separados doce unidades sobre el color definido estáticamente."
      }
    ],
    "pitfalls": [
      "Devolver una cadena o un Color para una propiedad que espera double.",
      "Suponer actualización dinámica solo por haber escrito una expresión entre llaves."
    ],
    "check": "Cambia Valor de 12 a 20, recompila y observa el espaciado; explica qué devolvería una extensión usada en Padding."
  },
  "recursos": {
    "explanation": [
      "ResourceDictionary almacena objetos reutilizables identificados mediante claves. El ámbito puede ser un View, una página, un componente o la aplicación. La búsqueda parte del ámbito del elemento y asciende: una clave local puede ocultar una global del mismo nombre.",
      "StaticResource obtiene el objeto de la clave al resolver la asignación. DynamicResource mantiene una relación con esa clave para actualizar una propiedad cuando se sustituye el recurso. Esto no significa que todos los datos de una app sean observables ni convierte cualquier objeto C# en un binding.",
      "Una clave debe existir y proporcionar el tipo adecuado. Para comparar ambos mecanismos, sustituye la misma clave en el mismo ámbito y no asignes directamente el color al View: esa asignación mediría otra cosa."
    ],
    "properties": [
      {
        "name": "Resources / ResourceDictionary",
        "use": "Colección de recursos de un ámbito."
      },
      {
        "name": "x:Key",
        "use": "Identificador utilizado por StaticResource y DynamicResource."
      },
      {
        "name": "StaticResource",
        "use": "Resolución del recurso sin relación de actualización por reemplazo de clave."
      },
      {
        "name": "DynamicResource",
        "use": "Vinculación al recurso para responder a sustituciones de la clave."
      }
    ],
    "examples": [
      {
        "title": "Dos Views con la misma clave",
        "filename": "Ejemplo dentro de una ContentPage",
        "context": "La propiedad Resources se declara antes del contenido. El botón requiere CambiarFondo en el code-behind.",
        "code": "<ContentPage.Resources>\n    <Color x:Key=\"Fondo\">LightBlue</Color>\n</ContentPage.Resources>\n\n<VerticalStackLayout Spacing=\"12\" Padding=\"20\">\n    <Label Text=\"Estático\" Padding=\"10\"\n           BackgroundColor=\"{StaticResource Fondo}\" />\n    <Label Text=\"Dinámico\" Padding=\"10\"\n           BackgroundColor=\"{DynamicResource Fondo}\" />\n    <Button Text=\"Cambiar recurso\" Clicked=\"CambiarFondo\" />\n</VerticalStackLayout>",
        "steps": [
          "La clave Fondo tiene un Color como valor.",
          "Ambos Labels empiezan resolviendo la misma clave.",
          "El botón solo solicita el cambio; el bloque siguiente sustituye el recurso."
        ],
        "result": "Los dos fondos empiezan azules claros."
      },
      {
        "title": "Sustituir el recurso del ámbito correcto",
        "filename": "Manejador dentro de esa ContentPage",
        "context": "Resources corresponde al diccionario de la página del ejemplo anterior.",
        "code": "private void CambiarFondo(object sender, EventArgs e)\n{\n    Resources[\"Fondo\"] = Colors.LightGreen;\n}",
        "steps": [
          "La asignación cambia el objeto asociado a la clave.",
          "El Label dinámico sigue vinculado y actualiza su propiedad.",
          "El Label estático conserva su asignación inicial para este ejemplo de Color."
        ],
        "result": "Dinámico pasa a verde claro; Estático conserva el azul claro."
      }
    ],
    "pitfalls": [
      "Cambiar una clave en el diccionario de aplicación cuando otra local la está ocultando.",
      "Usar una clave inexistente o devolver Thickness donde se espera Color."
    ],
    "check": "Ejecuta el cambio, explica por qué solo uno se actualiza y localiza el diccionario exacto utilizado por cada View."
  },
  "estilos": {
    "explanation": [
      "Style agrupa asignaciones de propiedades para no repetir la misma configuración en varios Views. TargetType indica a qué tipo se aplican sus Setter. Un Setter modifica una propiedad; no conecta por sí solo un evento como Clicked.",
      "Con x:Key el estilo se aplica explícitamente con Style=\"{StaticResource Clave}\". Sin clave puede funcionar como estilo implícito para los elementos de ese tipo dentro del ámbito correspondiente. No supongas que se aplica a cualquier tipo derivado sin revisar esa configuración.",
      "El estilo organiza el aspecto, pero debes comprobar su legibilidad real: contraste entre texto y fondo, tamaño de fuente y distribución. Un estilo definido pero no aplicado no demuestra personalización de la interfaz."
    ],
    "properties": [
      {
        "name": "Style.TargetType",
        "use": "Tipo al que pertenecen las propiedades de los Setter."
      },
      {
        "name": "Setter.Property / Value",
        "use": "Propiedad configurada y valor de tipo compatible."
      },
      {
        "name": "x:Key y Style",
        "use": "Identificador y aplicación explícita del estilo."
      },
      {
        "name": "Ámbito",
        "use": "Página, componente o aplicación donde se encuentra el estilo."
      }
    ],
    "examples": [
      {
        "title": "Un estilo explícito de Label",
        "filename": "Recursos y contenido de una ContentPage",
        "context": "Separa el ResourceDictionary del layout de contenido dentro de la misma página.",
        "code": "<ContentPage.Resources>\n    <Style x:Key=\"TextoAviso\" TargetType=\"Label\">\n        <Setter Property=\"FontSize\" Value=\"18\" />\n        <Setter Property=\"TextColor\" Value=\"DarkBlue\" />\n        <Setter Property=\"BackgroundColor\" Value=\"AliceBlue\" />\n    </Style>\n</ContentPage.Resources>\n\n<VerticalStackLayout Spacing=\"10\">\n    <Label Text=\"Primer aviso\" Style=\"{StaticResource TextoAviso}\" />\n    <Label Text=\"Segundo aviso\" Style=\"{StaticResource TextoAviso}\" />\n</VerticalStackLayout>",
        "steps": [
          "TargetType permite usar propiedades propias de Label.",
          "Una única definición alimenta dos elementos.",
          "La referencia Style es lo que aplica el recurso explícito."
        ],
        "result": "Ambos avisos comparten tamaño y colores sin duplicar las tres asignaciones."
      },
      {
        "title": "Aplicar el estilo a un objeto creado en C#",
        "filename": "Instrucciones dentro de la página que define TextoAviso",
        "context": "El recurso debe existir en Resources antes de buscarlo. El tipo Style se comprueba mediante el cast.",
        "code": "Label aviso = new Label { Text = \"Aviso creado en C#\" };\naviso.Style = (Style)Resources[\"TextoAviso\"];\n// Añade aviso al layout visible de la página. ",
        "steps": [
          "El Label existe aunque no se haya colocado todavía.",
          "La asignación de Style aplica el recurso compatible.",
          "Falta incorporarlo al layout visible: configurar un objeto no lo muestra automáticamente."
        ],
        "result": "Cuando lo añadas al árbol visual tendrá el mismo aspecto que los Labels del XAML."
      }
    ],
    "pitfalls": [
      "Usar TargetType Button con propiedades exclusivas de otro tipo.",
      "Pensar que un estilo con x:Key se aplica a todos los Labels sin referenciarlo."
    ],
    "check": "Modifica un Setter y comprueba los dos Labels; después retira Style de uno y explica por qué deja de compartir el aspecto."
  },
  "plataforma": {
    "explanation": [
      "DeviceInfo permite consultar datos de ejecución. Platform distingue Windows, Android, iOS y otras plataformas soportadas. DeviceType distingue físico y virtual; no equivale al sistema operativo ni al tamaño de pantalla.",
      "OnPlatform selecciona valores por plataforma directamente en XAML. La propiedad receptora sigue necesitando un tipo compatible; por ejemplo FontSize requiere Double. Define un valor predeterminado para no dejar sin intención los destinos no enumerados.",
      "Una condición por plataforma no prueba que se haya ejecutado allí. Contrasta cada rama con el destino correspondiente y documenta los que no has comprobado. Revisa primero si un layout adaptable resuelve la necesidad antes de introducir valores particulares."
    ],
    "properties": [
      {
        "name": "DeviceInfo.Current.Platform",
        "use": "Plataforma de la ejecución actual."
      },
      {
        "name": "DeviceInfo.Current.DeviceType",
        "use": "Dispositivo físico o virtual."
      },
      {
        "name": "OnPlatform x:TypeArguments",
        "use": "Tipo del valor que se selecciona en XAML."
      },
      {
        "name": "Default",
        "use": "Valor utilizado cuando ninguna plataforma declarada coincide."
      }
    ],
    "examples": [
      {
        "title": "Consultar plataforma y tipo de dispositivo",
        "filename": "Instrucciones dentro de una página, con using Microsoft.Maui.Devices",
        "context": "Son dos datos independientes. El ejemplo prepara un mensaje; asígnalo después a un Label si quieres mostrarlo.",
        "code": "DevicePlatform plataforma = DeviceInfo.Current.Platform;\nDeviceType tipo = DeviceInfo.Current.DeviceType;\n\nstring mensaje = $\"Plataforma: {plataforma}; dispositivo: {tipo}\";\nif (plataforma == DevicePlatform.Android && tipo == DeviceType.Virtual)\n    mensaje += \" · Android en entorno virtual\";",
        "steps": [
          "Platform identifica el sistema de la app.",
          "DeviceType aporta una clasificación diferente.",
          "El mensaje especial requiere que se cumplan ambas condiciones."
        ],
        "result": "Solo un Android clasificado como virtual añade el último texto."
      },
      {
        "title": "Elegir un tamaño por plataforma",
        "filename": "Fragmento XAML dentro de una página con xmlns:x",
        "context": "La sintaxis por elemento de propiedad permite indicar el tipo Double de forma explícita.",
        "code": "<Label Text=\"Tamaño según plataforma\">\n    <Label.FontSize>\n        <OnPlatform x:TypeArguments=\"x:Double\" Default=\"18\">\n            <On Platform=\"Android\" Value=\"20\" />\n            <On Platform=\"WinUI\" Value=\"18\" />\n        </OnPlatform>\n    </Label.FontSize>\n</Label>",
        "steps": [
          "La propiedad FontSize recibe un número, no una cadena de decisión.",
          "El identificador XAML de Windows en OnPlatform es WinUI.",
          "Default mantiene una elección para otros destinos."
        ],
        "result": "Android usa 20; WinUI y los destinos no enumerados usan 18 en este ejemplo."
      }
    ],
    "pitfalls": [
      "Confundir DeviceType.Virtual con DevicePlatform.Android.",
      "Afirmar que una rama funciona en Android porque compiló o se ejecutó en Windows."
    ],
    "check": "Explica qué verías en Windows físico, Android físico y Android virtual, y distingue predicción de comprobación real."
  },
  "fecha": {
    "explanation": [
      "DatePicker permite elegir una fecha; en MAUI 10 Date puede ser nullable, por lo que debes contemplar que no haya selección. Format controla su representación visual, no modifica la fecha almacenada ni reemplaza reglas como rechazar fechas futuras.",
      "La edad se calcula con años cumplidos. Empieza por la diferencia de años y resta uno si todavía no se ha alcanzado el aniversario. Normaliza las fechas a su parte Date para que la hora no cambie la comparación del cumpleaños.",
      "En R8 el límite de mayoría empieza en 18 y solo admite valores superiores a 12. Fecha futura y minoría son respuestas distintas. Al cambiar fecha o límite hay que recalcular. La convención de 29 de febrero se documenta en los ejemplos con DateTime.AddYears, sin añadirla como regla del PDF."
    ],
    "properties": [
      {
        "name": "DatePicker.Date",
        "use": "Fecha seleccionada; contempla null en MAUI 10."
      },
      {
        "name": "DatePicker.Format",
        "use": "Formato visual, por ejemplo dd/MM/yyyy."
      },
      {
        "name": "DateSelected",
        "use": "Evento de cambio de fecha; no sustituye la comprobación al consumir el dato."
      },
      {
        "name": "DateTime.AddYears",
        "use": "Permite comparar el aniversario con la fecha actual."
      },
      {
        "name": "MayoriaEdad",
        "use": "Propiedad real de ViewMayorEdadEstudio; inicial 18 y siempre >12."
      }
    ],
    "examples": [
      {
        "title": "Elegir fecha y solicitar comprobación",
        "filename": "Fragmento XAML de una ContentPage",
        "context": "Añade ComprobarEdad en la clase partial de la página. El ejemplo no cambia el reloj del dispositivo.",
        "code": "<VerticalStackLayout Spacing=\"12\" Padding=\"20\">\n    <DatePicker x:Name=\"fecha\" Date=\"2008-01-01\" Format=\"dd/MM/yyyy\" />\n    <Button Text=\"Comprobar edad\" Clicked=\"ComprobarEdad\" />\n    <Label x:Name=\"resultadoEdad\" />\n</VerticalStackLayout>",
        "steps": [
          "Format modifica la presentación de la fecha.",
          "El botón permite validar también sin esperar un evento de cambio.",
          "El Label presenta la respuesta para la fecha actual."
        ],
        "result": "La interfaz ofrece una fecha, una acción y un resultado independiente del formato visual."
      },
      {
        "title": "Validar y calcular años cumplidos",
        "filename": "Manejador dentro de la página anterior",
        "context": "Ejemplo didáctico con el límite inicial 18. Para el componente de R8 usa además su propiedad configurable MayoriaEdad y su contrato completo.",
        "code": "private void ComprobarEdad(object sender, EventArgs e)\n{\n    DateTime? seleccion = fecha.Date;\n    if (seleccion is null)\n    {\n        resultadoEdad.Text = \"Selecciona una fecha.\";\n        return;\n    }\n\n    DateTime nacimiento = seleccion.Value.Date;\n    DateTime hoy = DateTime.Today;\n    if (nacimiento > hoy)\n    {\n        resultadoEdad.Text = \"La fecha no puede ser futura.\";\n        return;\n    }\n\n    int edad = hoy.Year - nacimiento.Year;\n    if (nacimiento.AddYears(edad) > hoy)\n        edad--;\n\n    resultadoEdad.Text = $\"{edad} años · \" +\n        (edad >= 18 ? \"Mayor de edad\" : \"Menor de edad\");\n}",
        "steps": [
          "Primero comprueba selección y fecha futura.",
          "El ajuste del aniversario diferencia 17 de 18 antes del cumpleaños.",
          "Solo después se decide el mensaje de mayoría."
        ],
        "result": "La víspera del cumpleaños 18 produce 17; el mismo día produce 18. Una fecha futura informa de futuro, no de minoría."
      }
    ],
    "pitfalls": [
      "Calcular edad solo restando los años.",
      "Usar Date sin tratar ausencia de selección o permitir límite 12 en el componente."
    ],
    "check": "Prueba víspera, día y día posterior del cumpleaños. Para 29/02/2008, compara 27/02/2026 y 28/02/2026 en una función con hoy como parámetro: devuelve 17 y 18 con AddYears."
  },
  "formato": {
    "explanation": [
      "Un control de matrícula tiene dos vías de entrada: el texto que escribe una persona y la propiedad que configura otra clase. Ambas deben comprobar el patrón completo para que la API no acepte lo que la interfaz rechaza.",
      "El ejemplo de R8 utiliza cuatro dígitos, un guion y tres letras mayúsculas sin vocales, con el alfabeto concreto documentado en las soluciones. La expresión está anclada al inicio y al final; no basta encontrar una subcadena válida dentro de otra mayor.",
      "El setter valida antes de asignar para conservar el valor anterior si falla. La vista debe actualizar su mensaje y el fondo informativo: transparente sin error y amarillo con error. Limitar longitud ayuda a introducir el dato, pero no comprueba su estructura."
    ],
    "properties": [
      {
        "name": "Entry.Text / TextChanged",
        "use": "Texto actual y evento para reaccionar a cambios de entrada."
      },
      {
        "name": "Propiedad Matricula",
        "use": "Contrato público que debe aplicar la misma validación."
      },
      {
        "name": "Regex con \\A y \\z",
        "use": "Coincidencia de la cadena completa, no solo una parte."
      },
      {
        "name": "Label.BackgroundColor",
        "use": "Indicador visual complementado por un texto de error."
      }
    ],
    "examples": [
      {
        "title": "Regla común de formato",
        "filename": "Método de una clase de reglas C#",
        "context": "Patrón didáctico de las soluciones de R8: conserva sus decisiones y no añade reglas administrativas nuevas.",
        "code": "public static string ValidarMatricula(string? texto)\n{\n    if (texto is null ||\n        !System.Text.RegularExpressions.Regex.IsMatch(\n            texto, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n        throw new ArgumentException(\"Formato: 0000-BBB, sin vocales.\");\n\n    return texto;\n}",
        "steps": [
          "Cuatro dígitos y guion fijan el comienzo del formato.",
          "La clase de letras enumera el alfabeto elegido en los ejemplos.",
          "Los anclajes impiden caracteres adicionales al principio o al final."
        ],
        "result": "0000-BBB se acepta; 0000-BAA y 0000-BBBX se rechazan."
      },
      {
        "title": "Validar antes de mutar una propiedad",
        "filename": "Miembro de un ContentView didáctico",
        "context": "Requiere entrada (Entry), error (Label) y la regla anterior accesible en esta clase o mediante su clase de reglas. El manejador TextChanged debe reutilizar la misma regla.",
        "code": "public string Matricula\n{\n    get => ValidarMatricula(entrada.Text);\n    set\n    {\n        try\n        {\n            string validada = ValidarMatricula(value);\n            entrada.Text = validada;\n            error.Text = \"\";\n            error.BackgroundColor = Colors.Transparent;\n        }\n        catch (ArgumentException ex)\n        {\n            error.Text = ex.Message;\n            error.BackgroundColor = Colors.Yellow;\n            throw;\n        }\n    }\n}",
        "steps": [
          "La asignación a entrada ocurre solo tras validar.",
          "La UI ofrece texto además del color de fondo.",
          "throw propaga el rechazo al consumidor; la página debe tratar la excepción."
        ],
        "result": "Asignar una matrícula inválida informa y conserva el texto anterior; no deja el componente con un valor inválido por esa vía."
      }
    ],
    "pitfalls": [
      "Validar solo TextChanged y dejar el setter público sin regla.",
      "Aceptar una cadena más larga porque contiene una matrícula válida en medio."
    ],
    "check": "Prueba entrada manual y asignación pública: deben coincidir. Después de un error, asigna un valor válido y comprueba que se limpia el mensaje."
  },
  "errores": {
    "explanation": [
      "Un error de compilación, uno de carga XAML y uno de ejecución tienen causas distintas. Empieza por el mensaje completo y el primer archivo relevante, no por cambios aleatorios. Comprueba nombres, referencias y tipos antes de añadir nuevas capas de código.",
      "Si un tipo XAML no se encuentra, revisa namespace, assembly, visibilidad public y ProjectReference. Si un control nombrado no está disponible, revisa x:Class, x:Name e InitializeComponent. Los eventos de algunas propiedades pueden dispararse durante la carga: distingue ese momento de una pulsación del usuario.",
      "Si la pantalla muestra un resultado antiguo, sigue el flujo de error hasta la actualización de la vista. Si un recurso no cambia, comprueba clave, ámbito y mecanismo estático o dinámico. No captures todos los fallos para ocultar una configuración incorrecta."
    ],
    "properties": [
      {
        "name": "Mensaje y ubicación",
        "use": "Primera evidencia para separar compilación, carga y ejecución."
      },
      {
        "name": "Namespace / assembly / ProjectReference",
        "use": "Identidad del tipo y dependencia que lo aporta."
      },
      {
        "name": "InitializeComponent / x:Name",
        "use": "Carga y nombres de los objetos declarados."
      },
      {
        "name": "Excepciones previstas",
        "use": "Errores de entrada que deben comunicarse sin ocultar defectos de programación."
      }
    ],
    "examples": [
      {
        "title": "Un orden correcto en el constructor",
        "filename": "Fragmento del constructor de una ContentPage con XAML",
        "context": "Requiere un Label x:Name=\"estado\". Las instrucciones pertenecen al cuerpo del constructor de la misma clase que declara x:Class.",
        "code": "InitializeComponent();\nestado.Text = \"Página preparada\";\n\n// Incorrecto en una página cuyo Label se crea desde XAML:\n// estado.Text = \"Página preparada\";\n// InitializeComponent();",
        "steps": [
          "La carga crea y conecta las referencias XAML.",
          "La asignación solo puede depender de esas referencias después de cargarlas.",
          "No soluciones el orden añadiendo otro Label que no forma parte del árbol mostrado."
        ],
        "result": "El constructor termina sin acceder anticipadamente al control y muestra el mensaje."
      },
      {
        "title": "Restablecer la vista cuando un dato falla",
        "filename": "Manejador de una página con edadEntry y resultadoLabel",
        "context": "Ejemplo de formato y rango de R1. No es el formulario completo: faltan nombre y apellidos.",
        "code": "private void LeerEdad(object sender, EventArgs e)\n{\n    resultadoLabel.Text = \"\";\n    if (!int.TryParse(edadEntry.Text, out int edad) || edad < 5 || edad > 70)\n    {\n        resultadoLabel.Text = \"Edad: entero entre 5 y 70.\";\n        return;\n    }\n\n    resultadoLabel.Text = edad >= 18\n        ? \"Tiene acceso al sistema\"\n        : \"No tiene acceso al sistema\";\n}",
        "steps": [
          "Borrar el resultado anterior evita arrastrar un éxito obsoleto.",
          "TryParse y el rango comprueban condiciones diferentes.",
          "return impide que la rama válida sobrescriba la explicación del fallo."
        ],
        "result": "Edad 18 muestra acceso; después introducir texto muestra error. Corregir a 17 muestra no acceso sin bloquear la pantalla."
      }
    ],
    "pitfalls": [
      "Corregir varios archivos a la vez sin comprobar qué hipótesis resuelve el error.",
      "Silenciar cualquier excepción y considerar que la aplicación funciona porque no se cierra."
    ],
    "check": "Reproduce el fallo, identifica una causa concreta, cambia una sola cosa y vuelve a probar el mismo caso y uno válido posterior."
  }
};
