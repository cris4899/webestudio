// Los bloques se obtienen del manifiesto de soluciones, no de copias del código.
const file = (path, explanation, start, end) => ({ path, explanation, start, end });
const step = (id, title, action, explanation, files, check) => ({ id, title, action, explanation, files, check });
const r1 = 'Relacion1E01_Estudio';
const r2 = 'Relacion2_Estudio';
const r3 = 'Relacion3_Estudio';
const r5 = 'BLoginViews_Estudio';
const r8 = 'BRelacion07Estudio';
const lib = 'BLoginViews_Estudio';
const host = 'R07E01R05App_Estudio';

export const workshops = [
  { id:'relacion-1', lesson:'formulario', steps:[
    step('reglas','Validar antes de crear el usuario','En el proyecto Relacion1E01_Estudio abre Reglas.cs. Escribe primero Texto y EdadEntrada. Conserva el resto de métodos del archivo de apoyo; en esta relación solo se utilizan estos dos.',
      'Entry.Text entrega texto, incluso cuando el teclado es numérico. Texto rechaza nulos, blancos y longitudes fuera del intervalo. EdadEntrada usa TryParse para comprobar que hay un entero y después aplica el intervalo inclusivo 5–70. Las excepciones impiden continuar con datos inválidos.',
      [file(`${r1}/Reglas.cs`,'Texto recibe los límites para reutilizar la misma regla en nombre y apellidos. El operador || significa que basta un incumplimiento para rechazar el dato. TryParse evita convertir una entrada no numérica con Parse.', '    public static string Texto', '    public static string NombreUsuario')],
      'Lee las condiciones: 5 y 70 se aceptan; 4, 71 y texto se rechazan. No cambies esos límites.'),
    step('modelo','Construir Usuario','Añade o reconstruye Usuario.cs como clase C# en el mismo proyecto. Introduce las propiedades y después el constructor.',
      'Las propiedades de solo lectura se asignan durante la construcción. Nombre exige 3–20 caracteres y Apellidos 4–40. Si una llamada a Reglas falla, no se devuelve un Usuario parcialmente válido. Mensaje combina los datos y distingue el acceso a partir de los 18 años.',
      [file(`${r1}/Usuario.cs`,'string? admite la entrada nula que puede proceder del control; la regla decide si es válida. La propiedad calculada Mensaje no almacena una segunda copia del estado. El operador condicional elige uno de los dos textos.')],
      'Sigue a mano un usuario con nombre de 3 letras, apellidos de 4 y edad 17; repite con 18. Solo debe cambiar el permiso de acceso.'),
    step('vertical','Dibujar el formulario vertical','Abre Ejercicio01.xaml. Escribe el árbol de controles respetando x:Class y los x:Name del código. Reproduce la distribución de la captura del PDF.',
      'El contenedor coloca las entradas en orden. x:Name permite que la clase parcial acceda a nombre, apellidos, edad y resultado. Clicked conecta el botón con un método de esa clase. Keyboard facilita la entrada; la regla C# sigue siendo la que valida.',
      [file(`${r1}/Ejercicio01.xaml`,'La página pertenece a Estudio.Ejercicio01. Cada nombre utilizado por Acceder debe existir exactamente aquí, con las mismas mayúsculas. El resultado tiene su propio Label para no confundir entrada y salida.')],
      'Comprueba que hay tres entradas, botón Acceder y etiqueta de resultado. No dupliques x:Name.'),
    step('acceder','Conectar el botón y gestionar errores','Abre Ejercicio01.xaml.cs. Conserva InitializeComponent en el constructor y escribe Acceder.',
      'InitializeComponent crea los controles definidos en XAML antes de utilizarlos. El clic lee las tres entradas, construye Usuario y muestra Mensaje. El catch limpia un éxito anterior antes de alertar: un dato inválido no debe dejar en pantalla un permiso antiguo.',
      [file(`${r1}/Ejercicio01.xaml.cs`,'El manejador es async void porque responde a un evento. await espera al cuadro de diálogo. DisplayAlertAsync corresponde a la adaptación a MAUI 10; los originales pueden usar DisplayAlert.')],
      'Ejecuta Acceder con datos válidos y después con edad 4. Debe desaparecer el resultado anterior y aparecer el error.'),
    step('mixto','Resolver el segundo formulario','En Relacion1E01_Estudio abre Ejercicio02.xaml y su code-behind. Construye la disposición mixta sin cambiar el contrato de Usuario.',
      'La presentación cambia, pero el flujo de datos no. Compara los contenedores y la colocación de las etiquetas con la primera variante. Mantener los nombres de entrada permite aplicar las mismas validaciones a los dos ejercicios.',
      [file(`${r1}/Ejercicio02.xaml`,'Los grupos horizontales y verticales expresan la distribución mixta. Copia el archivo completo en su página, no dentro de un segundo ContentPage.'),file(`${r1}/Ejercicio02.xaml.cs`,'La lógica vuelve a construir Usuario. No introduzcas otras condiciones por haber cambiado la distribución.')],
      'Usa los mismos datos en ambas páginas; el mensaje y los errores deben coincidir.'),
    step('segunda-app','Preparar las dos aplicaciones entregables','Abre ahora Relacion1E02_Estudio. Repite los archivos de modelo y las páginas en este proyecto; compara sus archivos con los de la primera aplicación.',
      'El paquete contiene dos aplicaciones independientes para las dos presentaciones. Compartir el namespace Estudio no comparte automáticamente archivos entre proyectos. Cada aplicación necesita sus propias clases o una referencia explícita; aquí los archivos están incluidos.',
      [file('Relacion1E02_Estudio/AppShell.xaml','Esta aplicación arranca en la segunda presentación. La primera aplicación se revisa en el paso de arranque final.')],
      'Selecciona cada proyecto como inicio por separado y confirma que la presentación inicial es la correspondiente.')
  ]},
  { id:'relacion-2', lesson:'calculadora', steps:[
    step('operaciones','Definir las operaciones enteras','En Relacion2_Estudio abre Reglas.cs y localiza Operar. Implementa las cinco operaciones antes de conectar botones.',
      'El switch devuelve un int para cada operador. La división entre int produce cociente entero. checked hace visible un desbordamiento de suma, resta o multiplicación. Dividir o calcular resto entre cero también produce un error aritmético que la página debe manejar.',
      [file(`${r2}/Reglas.cs`,'Los símbolos visibles × y ÷ se traducen más adelante a * y /. Una tecla desconocida se rechaza en lugar de producir un resultado arbitrario.', '    public static int Operar', '    public static int SiguienteEstado')],
      'Predice 7/2, 8%3 y 8/0: los resultados son 3, 2 y error.'),
    step('estado','Guardar operandos entre pulsaciones','Reconstruye Calculadora.cs. Escribe los campos y Digito/Limpiar antes de Operacion.',
      'La página recibe eventos separados y necesita recordar el primer número y el operador. primero y operador son anulables para distinguir ausencia de un valor de un cero real. resultado permite empezar una operación nueva al pulsar un dígito después de igual.',
      [file(`${r2}/Calculadora.cs`,'Digito concatena texto en Visor. Al seleccionar operación se guarda el primer entero y se vacía el visor para el segundo. Igual exige ambos campos, calcula y marca resultado. Limpiar restablece todos los campos, no solo la etiqueta.')],
      'Traza 1, 2, +, 3, =: Visor pasa por 1, 12, vacío, 3 y 15. Comprueba el estado de primero en cada cambio.'),
    step('stack-xaml','Construir la calculadora Stack en XAML','Escribe Ejercicio01.xaml con el visor y las filas de botones. Conserva el orden de teclas del PDF.',
      'Una pila vertical contiene el visor y las filas; cada fila horizontal contiene las teclas. Las pilas distribuyen hijos por orden. Los botones numéricos comparten Digito y las operaciones comparten Operacion; no hace falta un método por tecla.',
      [file(`${r2}/Ejercicio01.xaml`,'x:Name="visor" identifica la salida. Los atributos Clicked son enlaces a métodos C#, no llamadas ejecutadas al construir el XAML. El botón C es una ayuda de esta solución, no un requisito adicional del profesor.')],
      'Cuenta las cuatro filas de teclas del enunciado y comprueba que cada dígito llama a Digito.'),
    step('eventos','Actualizar el visor desde el modelo','Escribe Ejercicio01.xaml.cs y sigue sender hasta modelo.',
      'El mismo método identifica qué Button originó el clic. Después de cambiar el modelo, copia modelo.Visor al control. En el error limpia tanto estado como pantalla y muestra la causa. No deduce el operador a partir de la posición del botón.',
      [file(`${r2}/Ejercicio01.xaml.cs`,'El patrón sender is Button evita tratar otro objeto como tecla. El switch traduce ×/÷. El filtro catch cubre argumentos y errores aritméticos, incluido desbordamiento.')],
      'Prueba 8/0 y después 2+3. La segunda operación debe funcionar sin arrastrar el primer operando anterior.'),
    step('grid-xaml','Crear la variante Grid en XAML','Construye Ejercicio02.xaml y su code-behind. Cambia la distribución conservando Calculadora.',
      'Grid divide el espacio en filas y columnas. Grid.Row y Grid.Column usan índices desde cero; los spans permiten ampliar una celda. El contrato del modelo es el mismo que en Stack, por lo que la salida numérica no depende del layout.',
      [file(`${r2}/Ejercicio02.xaml`,'Relaciona cada definición de fila con los controles que la usan. El visor ocupa su región y los botones usan coordenadas explícitas.'),file(`${r2}/Ejercicio02.xaml.cs`,'Compara estos eventos con la variante Stack: mantienen el mismo cambio de estado y tratamiento de errores.')],
      'Calcula 7/2 en ambas páginas; ambas deben mostrar 3.'),
    step('stack-csharp','Construir Stack mediante objetos C#','Abre Ejercicio03.cs. Crea primero el visor y el contenedor, después cada fila y sus botones.',
      'Esta variante crea directamente los objetos que antes describía XAML. El constructor configura propiedades y añade hijos; += conecta eventos. La página se completa asignando Content al contenedor raíz. Al no existir XAML asociado, no se llama a InitializeComponent.',
      [file(`${r2}/Ejercicio03.cs`,'Compara new Button y su Text con el elemento Button del XAML. La matriz de teclas define las filas; los eventos siguen utilizando el mismo modelo Calculadora.')],
      'Encuentra dónde se añade una fila a la pila y dónde se asigna Content. Comprueba 8%3.'),
    step('grid-csharp','Construir Grid mediante objetos C#','Reconstruye Ejercicio04.cs y compara la colocación con Ejercicio02.xaml.',
      'Las definiciones del Grid se crean con objetos RowDefinition y ColumnDefinition. Añadir una tecla requiere indicar columna y fila; ese orden es importante en Add. La diferencia con Stack es la distribución, no la aritmética.',
      [file(`${r2}/Ejercicio04.cs`,'Relaciona los índices de los bucles con las coordenadas de cada botón. El visor y los manejadores mantienen el mismo significado que en las otras tres variantes.')],
      'Ejecuta las cuatro calculadoras: prueba división entera, división por cero, igual sin operador y un dígito después del resultado.')
  ]},
  { id:'relacion-3', lesson:'tablero', steps:[
    step('tablero','Crear 25 botones desde bucles','En Relacion3_Estudio escribe Ejercicio01.cs. Crea cinco filas y columnas y después los botones.',
      'Dos bucles anidados recorren las coordenadas 0–4. fila*5+col+1 transforma la coordenada en número 1–25. Cada botón recibe su propio texto y evento antes de añadirse al Grid. No se escriben 25 controles manualmente.',
      [file(`${r3}/Ejercicio01.cs`,'GridLength.Star reparte el espacio. grid.Add recibe columna y después fila. El manejador captura el botón creado en esa vuelta y muestra su Text.')],
      'Verifica las esquinas: 1 arriba a la izquierda, 5 arriba a la derecha y 25 abajo a la derecha. Pulsa 25.'),
    step('transicion','Definir el ciclo de estados','Localiza SiguienteEstado en Reglas.cs antes de añadir colores al botón.',
      'El estado es un entero 0, 1 o 2. Sumar uno y tomar resto entre tres produce el ciclo 0,1,2,0. Se separa la transición lógica de su representación visual para poder comprobar ambas sin mezclar responsabilidades.',
      [file(`${r3}/Reglas.cs`,'La aritmética modular evita que el estado crezca indefinidamente. El color se decide en MiBoton, no en esta regla.', '    public static int SiguienteEstado', '    public static string Matricula')],
      'Calcula SiguienteEstado para 0, 1 y 2: debe dar 1, 2 y 0.'),
    step('miboton','Especializar Button con estado propio','Añade MiBoton.cs como clase C# que hereda de Button.',
      'Cada instancia guarda su propio estado. El constructor conserva el color original y suscribe Clicked; tras el clic cambia primero el estado y después el color. El tercer clic vuelve al color original. Azul reproduce la elección del RAR, no una nueva exigencia del PDF.',
      [file(`${r3}/MiBoton.cs`,'estado no es static: si lo fuera, todos los botones compartirían el mismo contador. readonly impide cambiar la referencia al color original fuera de su inicialización.')],
      'Sigue tres clics en una instancia: verde, rojo y original. Otra instancia debe seguir en su estado inicial.'),
    step('segundo-tablero','Reutilizar el tablero con MiBoton','Construye Ejercicio02.cs con la misma numeración y sustituye Button por MiBoton.',
      'La página solo distribuye los controles especializados. El cambio de color pertenece al propio botón y no necesita un contador global en la página. Los dos tableros resuelven las dos variantes del material.',
      [file(`${r3}/Ejercicio02.cs`,'Los bucles mantienen las posiciones. La instancia nueva de MiBoton configura por sí misma su comportamiento de color.')],
      'Pulsa una vez en 1 y una vez en 2: ambos deben estar verdes. Pulsa dos veces más en 1; solo 1 vuelve al original.')
  ]},
  { id:'relacion-4', lesson:'navegacion', steps:[
    step('referencias','Preparar tres aplicaciones independientes','En Soluciones.slnx localiza Ejercicio1_Estudio, Ejercicio2_Estudio y Ejercicio3_Estudio. Comprueba los archivos que reutiliza cada uno.',
      'El primer proyecto necesita Usuario y los dos formularios; el segundo Calculadora y cuatro presentaciones; el tercero MiBoton y dos tableros. Copiar únicamente el XAML no copia sus clases ni sus eventos. Los proyectos del paquete incluyen esas dependencias locales.',
      [file('Ejercicio1_Estudio/Usuario.cs','Conserva el modelo validado de la relación 1.'),file('Ejercicio2_Estudio/Calculadora.cs','El estado de la relación 2 sigue en una clase separada.'),file('Ejercicio3_Estudio/MiBoton.cs','La transición de color de la relación 3 sigue siendo propia de cada botón.')],
      'En el Explorador de soluciones identifica las páginas y sus clases auxiliares en cada proyecto antes de editar el menú.'),
    step('menu-acceso','Conectar los dos formularios al menú','Escribe AppShell.xaml de Ejercicio1_Estudio. Conserva los títulos del enunciado y los nombres de sus páginas.',
      'Shell es la estructura de navegación de la aplicación. FlyoutItem representa una entrada de menú; ShellContent contiene la plantilla que creará la página. El namespace local permite resolver las clases del mismo ensamblado.',
      [file('Ejercicio1_Estudio/AppShell.xaml','Acceso Vertical y Acceso Mixto son títulos de navegación. DataTemplate local:AccesoVertical referencia la clase, no el texto de un archivo.'),file('Ejercicio1_Estudio/AccesoVertical.xaml.cs','La página conserva Acceder y el tratamiento de errores del modelo.'),file('Ejercicio1_Estudio/AccesoMixto.xaml.cs','Cambiar de destino no elimina la necesidad de validar el segundo formulario.')],
      'Selecciona Ejercicio1_Estudio como inicio. Abre ambos destinos y prueba una edad inválida en cada formulario.'),
    step('menu-calculadoras','Conectar las cuatro calculadoras','Escribe AppShell.xaml en Ejercicio2_Estudio y comprueba cada clase referenciada.',
      'Cada destino debe apuntar a una variante distinta: Stack y Grid construidos en XAML y en C#. Un título correcto con una plantilla equivocada puede mostrar la misma calculadora cuatro veces; comprueba ambas cosas.',
      [file('Ejercicio2_Estudio/AppShell.xaml','La correspondencia entre Title y ContentTemplate identifica las cuatro variantes exigidas.')],
      'Ejecuta los cuatro destinos y compara su clase con su título. En cada uno calcula 7/2.'),
    step('menu-tableros','Conectar los dos tableros','Escribe AppShell.xaml en Ejercicio3_Estudio y revisa los dos constructores de página.',
      'Tablero Dinámico abre la variante de alerta y Tablero Dinámico Color la de MiBoton. La navegación no debe convertir ambos comportamientos en uno solo. Las páginas C# son ContentPage válidas aunque no tengan archivo XAML.',
      [file('Ejercicio3_Estudio/AppShell.xaml','Las plantillas señalan dos clases distintas.'),file('Ejercicio3_Estudio/TableroCS.cs','Este tablero muestra el número pulsado.'),file('Ejercicio3_Estudio/TableroColorCS.cs','Este tablero crea controles MiBoton y deja en ellos la transición de color.')],
      'Selecciona Ejercicio3_Estudio como inicio. Comprueba alerta en un destino y tres estados de color en el otro.')
  ]},
  { id:'relacion-5', lesson:'especializacion', steps:[
    step('validadores','Definir las reglas de credenciales','En BLoginViews_Estudio abre Reglas.cs. Estudia NombreUsuario y Contrasenia junto a Texto.',
      'El usuario exige 5–15 letras según la convención A–Z/a–z documentada; no se atribuye al profesor una decisión sobre ñ. La contraseña exige diez caracteres y al menos una mayúscula, minúscula, cifra y signo de los indicados. Any significa que basta un carácter de esa categoría.',
      [file(`${r5}/Reglas.cs`,'Texto aplica las longitudes comunes. NombreUsuario comprueba todos los caracteres con All; Contrasenia comprueba la existencia de cada categoría con Any.', '    public static string Texto', '    public static int Operar')],
      'Verifica que Abcdef1.;Z tiene diez caracteres y cumple las cuatro categorías. Un teclado de contraseña no sustituye esta validación.'),
    step('entry-usuario','Crear una entrada especializada','Añade EntryNombreUsuario.cs a la biblioteca. Hereda de Entry como pide el PDF.',
      'La clase ya es un control de entrada por herencia. Usuario expone un contrato validado sobre Text: el getter rechaza texto inválido introducido a mano y el setter rechaza una asignación inválida antes de sustituir el contenido. MaxLength ayuda a escribir, pero no reemplaza la regla.',
      [file(`${r5}/EntryNombreUsuario.cs`,'get y set llaman a la misma regla para que el origen del dato no cambie su validez. Esta solución sigue Entry del PDF; el ContentView del RAR es una diferencia señalada.')],
      'Comprueba el orden del setter: primero se evalúa Reglas.NombreUsuario y solo después se asigna Text.'),
    step('entry-password','Crear la entrada de contraseña','Añade EntryContrasenia.cs a la misma biblioteca y compara su propiedad con Usuario.',
      'IsPassword oculta visualmente el texto; no cifra ni autentica a nadie. La propiedad Password valida tanto al leer como al escribir. Evita validar únicamente al perder el foco, porque el anfitrión puede leer directamente la propiedad.',
      [file(`${r5}/EntryContrasenia.cs`,'El nombre Password pertenece a esta especialización. El control sigue heredando Text de Entry, pero la página de prueba debe leer la propiedad validada.')],
      'Encuentra IsPassword y ambas llamadas a Reglas.Contrasenia. Una contraseña incompleta debe fallar al leer Password.'),
    step('anfitrion','Usar la biblioteca desde una aplicación','En LoginAcceso_Estudio revisa la referencia de proyecto a BLoginViews_Estudio. Abre Solucion.xaml y añade los controles con su namespace.',
      'Una referencia permite compilar contra la biblioteca. xmlns indica al analizador XAML dónde vive el tipo. El nombre x:Name permite acceder a la instancia en C#. Son tres relaciones distintas que deben coincidir; renombrar un proyecto no cambia automáticamente su namespace.',
      [file('LoginAcceso_Estudio/LoginAcceso_Estudio.csproj','ProjectReference enlaza la biblioteca local; no necesitas un paquete externo para estas clases.'),file('LoginAcceso_Estudio/Solucion.xaml','El namespace con assembly apunta al ensamblado de la biblioteca y el prefijo se utiliza en las etiquetas.')],
      'Si el tipo XAML no se resuelve, comprueba referencia, namespace y assembly antes de modificar la validación.'),
    step('probar-acceso','Leer propiedades y capturar el error','Escribe Solucion.xaml.cs y ejecuta la prueba académica.',
      'El botón lee Usuario y Password. Esa lectura puede lanzar una excepción y por ello se hace dentro de try. La alerta con datos responde al ejercicio académico; no implementa un inicio de sesión real ni debe copiarse a una autenticación de producción.',
      [file('LoginAcceso_Estudio/Solucion.xaml.cs','El catch informa del primer dato inválido. La prueba sigue siendo necesaria aunque el usuario no haya abandonado ninguna entrada.')],
      'Prueba usuario de cuatro letras, uno de cinco y contraseña incompleta. Con ambos campos válidos se muestra el resultado académico.')
  ]},
  { id:'relacion-6', lesson:'contentview', steps:[
    step('dependencias','Enlazar las dos bibliotecas','Localiza BLoginViews_Estudio, BAcceso_Estudio y LoginAccesoV2_Estudio en la solución. Comprueba primero sus referencias.',
      'BAcceso compone los controles especializados de BLoginViews. La aplicación utiliza BAcceso como control visual. La referencia de proyecto es necesaria para compilar y el namespace XAML para encontrar el control dentro de su ensamblado.',
      [file('BAcceso_Estudio/BAcceso_Estudio.csproj','ProjectReference lleva a la biblioteca de entradas; UseMaui configura la biblioteca para controles MAUI.'),file('LoginAccesoV2_Estudio/LoginAccesoV2_Estudio.csproj','La aplicación referencia la biblioteca compuesta. Las dependencias del ZIP son locales.')],
      'En Dependencias deben resolverse las referencias sin rutas a carpetas de otro ordenador.'),
    step('componer','Construir LoginView en XAML','En BAcceso_Estudio añade o reconstruye LoginView.xaml como ContentView.',
      'ContentView representa un fragmento reutilizable, no una página con navegación propia. Dentro se distribuyen los controles especializados. El namespace de la otra biblioteca permite usar sus tipos y los nombres usuario/password se utilizarán en el code-behind.',
      [file('BAcceso_Estudio/LoginView.xaml','x:Class debe coincidir con Estudio.LoginView. Los hijos conservan las reglas de las entradas originales por ser instancias de esas clases.')],
      'Distingue los prefijos del namespace XAML y los x:Name de las instancias. No los intercambies.'),
    step('interfaz','Exponer UserName y PassWord','Escribe LoginView.xaml.cs. Mantén los nombres públicos exigidos y enlaza cada getter con el control hijo.',
      'El anfitrión conoce LoginView y sus propiedades públicas, sin necesitar los nombres internos. UserName delega en usuario.Usuario y PassWord en password.Password; se conserva la validación de la relación 5. No devuelve directamente Text para evitar saltarse esas reglas.',
      [file('BAcceso_Estudio/LoginView.xaml.cs','InitializeComponent construye los hijos antes de exponerlos. La composición reutiliza comportamiento; no necesita copiar las expresiones de validación al View.')],
      'Sigue la lectura UserName hasta Reglas.NombreUsuario. Debe existir una ruta equivalente para PassWord.'),
    step('integrar','Usar el control compuesto desde LoginAccesoV2','Construye Solucion.xaml y su manejador en la aplicación.',
      'La página instancia un LoginView y lo llama login. El botón accede solo a su interfaz pública. El catch de la página sigue siendo necesario: el View conserva la capacidad de rechazar los datos de sus controles hijos.',
      [file('LoginAccesoV2_Estudio/Solucion.xaml','Una sola etiqueta inserta el conjunto reutilizable.'),file('LoginAccesoV2_Estudio/Solucion.xaml.cs','El botón lee login.UserName y login.PassWord, no busca los Entry dentro del árbol visual.')],
      'Pulsa directamente el botón con un campo vacío; debe informar del error aunque no haya cambio de foco.')
  ]},
  { id:'relacion-7', lesson:'extensiones', steps:[
    step('valores','Definir valores con tipos adecuados','En BAccesoPropias abre Valores.cs. Relaciona cada propiedad con el tipo que espera el control.',
      'Spacing y FontSize reciben double; Padding y Margin reciben Thickness; BackgroundColor recibe Color. Los valores distinguen plataforma y tipo de elemento. La paleta y las cifras son elecciones didácticas de la solución, no números impuestos por el PDF.',
      [file('BAccesoPropias/Valores.cs','DeviceInfo consulta la plataforma actual. La propiedad Android decide entre dos conjuntos de valores sin convertir todo a string.')],
      'Identifica las cinco propiedades de personalización y por qué Relleno no devuelve un número de fuente.'),
    step('extension','Crear una extensión de marcado propia','Reconstruye ValorExtension.cs antes de usar su sintaxis en XAML.',
      'IMarkupExtension permite devolver un valor al cargar el XAML. Propiedad selecciona qué valor se solicita; ProvideValue lo devuelve con su tipo real. El caso por defecto hace visible una clave mal escrita. El atributo de MAUI 10 declara que esta extensión no necesita servicios del analizador.',
      [file('BAccesoPropias/ValorExtension.cs','El resultado object puede contener un double, Thickness o Color. No significa que se deba devolver texto que parezca un color.')],
      'Localiza el caso Relleno y sigue su resultado hasta Valores.Relleno.'),
    step('propias','Aplicar la extensión al LoginView','Escribe LoginView.xaml y sus propiedades públicas en BAccesoPropias.',
      'La extensión se utiliza dentro de los atributos del XAML. El code-behind expone operaciones sobre el layout y sus hijos para personalizar desde fuera. Las entradas siguen siendo las clases validadas de BLoginViews; personalizar aspecto no cambia el contrato de credenciales.',
      [file('BAccesoPropias/LoginView.xaml','Relaciona cada uso de Valor con su selector Propiedad y con el tipo del atributo receptor.'),file('BAccesoPropias/LoginView.xaml.cs','Las propiedades públicas delegan a elementos internos. Espaciado y Fuente comprueban sus límites antes de modificar los controles.')],
      'Comprueba que el anfitrión puede cambiar las cinco propiedades sin acceder a layout ni a titulo directamente.'),
    step('static','Resolver la variante x:Static','Abre BAccesoStatic. Compara Valores.cs y LoginView.xaml con la variante de extensiones propias.',
      'x:Static obtiene un miembro estático accesible. No llama al selector Propiedad de ValorExtension. Esta variante conserva los mismos tipos y valores para poder comparar el mecanismo de asignación, no una interfaz distinta.',
      [file('BAccesoStatic/Valores.cs','Los miembros públicos static son los que puede resolver x:Static.'),file('BAccesoStatic/LoginView.xaml','Cada expresión identifica el miembro estático completo. Comprueba que los prefijos resuelven el namespace que contiene Valores.')],
      'Encuentra una asignación de Padding en ambas variantes y explica cómo llega cada una al mismo tipo Thickness.'),
    step('recurso-estatico','Declarar recursos del ContentView','En BAccesoRecursosEstaticos reconstruye LoginView.xaml y su code-behind.',
      'El ResourceDictionary del ContentView guarda claves con valores. StaticResource busca el valor al resolver el atributo. La clave pertenece a este View, como pide la relación; no se traslada sin más al diccionario de Application del módulo Learn.',
      [file('BAccesoRecursosEstaticos/LoginView.xaml','Distingue la declaración con x:Key de su consumo con StaticResource.'),file('BAccesoRecursosEstaticos/LoginView.xaml.cs','ReemplazarRecurso cambia la entrada FondoLayout del diccionario. La referencia estática ya resuelta no actualiza automáticamente su valor visual.')],
      'Antes de personalizar directamente, usa Reemplazar recurso: el fondo inicial estático no debe actualizarse automáticamente.'),
    step('recurso-dinamico','Mantener la referencia dinámica','En BAccesoRecursosDinamicos escribe la variante con DynamicResource.',
      'DynamicResource mantiene la relación con la clave. Cuando ReemplazarRecurso asigna otro color a FondoLayout, el control que sigue enlazado a esa clave recibe el nuevo valor. Una asignación directa posterior puede sustituir esa relación; reinicia la aplicación antes de comparar.',
      [file('BAccesoRecursosDinamicos/LoginView.xaml','Compara las mismas propiedades con la variante estática: la diferencia está en el mecanismo de consumo.'),file('BAccesoRecursosDinamicos/LoginView.xaml.cs','Resources["FondoLayout"] modifica el diccionario local. Cambiar layout.BackgroundColor directamente sería una operación distinta.')],
      'Ejecuta primero el botón de recurso en la variante dinámica; el color debe actualizarse. Compara con la variante estática.'),
    step('anfitriones','Probar las cuatro personalizaciones','Abre Solucion.xaml y Solucion.xaml.cs de cada Pruebas. Repite la integración con la biblioteca correspondiente.',
      'Los anfitriones permiten leer credenciales, personalizar las cinco propiedades y comparar recursos. Cada aplicación debe referenciar su biblioteca, aunque todas expongan Estudio.LoginView. No referencies las cuatro bibliotecas del mismo tipo desde una única aplicación.',
      ['Propias','Static','RecursosEstaticos','RecursosDinamicos'].flatMap(v=>[file(`Pruebas${v}/Solucion.xaml`,'El namespace assembly selecciona la biblioteca de esta variante.'),file(`Pruebas${v}/Solucion.xaml.cs`,'Cambiar modifica espaciado, relleno, margen, fondo y fuente a través del contrato público del View. Recurso permite comparar el comportamiento del diccionario.')]),
      'Selecciona y ejecuta cada proyecto Pruebas por separado. Comprueba las cinco propiedades y prueba datos inválidos para confirmar que la validación sigue activa.')
  ]},
  { id:'relacion-8', lesson:'matricula', steps:[
    step('reglas','Definir matrícula, edad y límite','En BRelacion07Estudio abre Reglas.cs. Localiza Matricula, Limite y Edad.',
      'La expresión regular comprueba toda la cadena, no una coincidencia parcial: cuatro cifras, guion y tres consonantes. Edad descuenta un año si el cumpleaños aún no ha llegado. Limite acepta solo valores superiores a 12. A–Z y AddYears para el 29 de febrero son convenciones indicadas, no requisitos adicionales del profesor.',
      [file(`${r8}/Reglas.cs`,'Los anclajes delimitan el texto completo. Antes de restar años se rechaza una fecha futura. Comparar solo el año de nacimiento daría una edad incorrecta antes del cumpleaños.', '    public static string Matricula')],
      'Predice el resultado para 0000-BBB, 0000-BAA y un límite de 12. El segundo y el tercero deben rechazarse.'),
    step('aspecto','Crear las extensiones de aspecto','Reconstruye AspectoExtension.cs en la biblioteca.',
      'ProvideValue devuelve 10d para espaciado, Thickness(10) para relleno y los colores verde/azul de los Views. Cada atributo XAML espera un tipo concreto. Una selección desconocida provoca un error explícito en lugar de ocultar un fallo de escritura.',
      [file(`${r8}/AspectoExtension.cs`,'Tipo selecciona la rama. Espacio y Relleno representan magnitudes distintas aunque ambos partan de la cifra 10.')],
      'Relaciona cada rama con la propiedad XAML donde se utiliza. No sustituyas Thickness por string.'),
    step('matricula-xaml','Construir la vista de matrícula','Escribe ViewMatriculaEstudio.xaml como ContentView, respetando los nombres entrada, error, layout y fila.',
      'El Entry recibe el texto y TextChanged permite mostrar inmediatamente el error. La etiqueta informativa cambia su fondo, no el contrato de la matrícula. El layout consume la extensión de aspecto para evitar repetir valores literales.',
      [file(`${r8}/ViewMatriculaEstudio.xaml`,'El archivo define la parte visual y enlaza Cambio. Los nombres serán utilizados por las propiedades públicas y por Mensaje en el code-behind.')],
      'Comprueba la clase parcial y el enlace del evento antes de escribir el método Cambio.'),
    step('matricula-csharp','Validar escritura manual y asignación','Escribe ViewMatriculaEstudio.xaml.cs. Sigue por separado TextChanged, getter y setter.',
      'Cambio valida la edición manual y actualiza el aviso. El getter vuelve a validar antes de entregar el dato. El setter valida primero una variable temporal: una asignación inválida no sustituye la matrícula anterior. Mensaje quita el fondo amarillo cuando ya no hay error.',
      [file(`${r8}/ViewMatriculaEstudio.xaml.cs`,'El setter informa y relanza la excepción para que el anfitrión conozca el fallo. Las propiedades de aspecto delegan en layout y fila sin exponer esos controles.')],
      'Escribe una matrícula correcta y después intenta asignar una incorrecta desde el anfitrión: debe rechazarse sin sustituir el valor válido anterior.'),
    step('edad-xaml','Construir la vista de mayoría de edad','Escribe ViewMayorEdadEstudio.xaml. Sitúa DatePicker, edad y etiqueta informativa.',
      'DatePicker selecciona una fecha; no decide por sí mismo si se ha alcanzado la mayoría de edad. DateSelected conecta el cambio con el recálculo. Los controles de salida son independientes para mostrar edad y condición sin mezclar ambos datos.',
      [file(`${r8}/ViewMayorEdadEstudio.xaml`,'Conserva fecha, edad y error. La extensión selecciona el aspecto azul de esta vista frente al verde de matrícula.')],
      'Encuentra el evento de fecha y distingue los controles de entrada y salida.'),
    step('edad-csharp','Recalcular con fecha y umbral','Escribe ViewMayorEdadEstudio.xaml.cs. Implementa las propiedades y después Actualizar.',
      'FechaNacimiento rechaza fechas futuras antes de asignar. Edad se calcula con el día actual, no se guarda como dato que pueda quedar obsoleto. MayoriaEdad valida el límite antes de cambiarlo y llama a Actualizar. Cambiar fecha o umbral debe recalcular el mismo estado visible.',
      [file(`${r8}/ViewMayorEdadEstudio.xaml.cs`,'El límite inicial es 18. Date puede ser anulable en MAUI 10; la lectura emplea Today como valor de apoyo. Actualizar muestra la edad y, si no alcanza el límite, el aviso amarillo. El catch limpia una edad anterior cuando hay error.')],
      'Prueba el cumpleaños exacto y el día anterior. Cambia el umbral a 21 y verifica el recálculo; 12 debe conservar el límite anterior.'),
    step('pruebas','Integrar las dos vistas en PruebasR07','En PruebasR07_Estudio revisa la referencia a BRelacion07Estudio y escribe Solucion.xaml y su code-behind.',
      'La aplicación hospeda ambas vistas y prueba su interfaz pública. Asignar matrícula, modificar umbral y mostrar datos son operaciones separadas. Los botones de aspecto permiten comprobar que espaciado, relleno y fondo llegan a los elementos internos.',
      [file('PruebasR07_Estudio/Solucion.xaml','El namespace assembly encuentra los dos controles en la biblioteca. Los x:Name permiten al anfitrión hablar con cada instancia.'),file('PruebasR07_Estudio/Solucion.xaml.cs','TryParse valida el texto del umbral antes de pasarlo al View. Las excepciones de las vistas se informan mediante alerta. Aspecto usa únicamente sus propiedades públicas.')],
      'Ejecuta matrícula válida/errónea, fecha futura, cumpleaños, límite inválido y cambio de aspecto. Contrasta las dos vistas con las capturas del PDF.')
  ]},
  { id:'relacion-7-r5', lesson:'extensiones-login', steps:[
    step('base','Partir de la base de V0','En BLoginViews_Estudio abre EntryContraseniaV1.xaml. Es la contraseña sin personalizar: la base de V0 y el punto de partida de V1.',
      'Un ContentView contiene un StackLayout horizontal con una etiqueta, un Entry con IsPassword y otra etiqueta para el mensaje de error. El StackLayout no declara Spacing: usa el valor predeterminado. El evento Unfocused conecta la pérdida de foco con la validación del code-behind.',
      [file(`${lib}/EntryContraseniaV1.xaml`,'Esta es la plantilla que las variantes V2 a V5 modifican. Solo cambiará el atributo o la propiedad Spacing del StackLayout y, en V4 y V5, el diccionario de recursos.'),file(`${lib}/EntryContraseniaV1.xaml.cs`,'Password vuelve a validar antes de entregar el texto, igual que en la relación 5. Las cuatro banderas registran qué categorías de carácter se han visto.','    public string Password','    // MANEJADORES DE EVENTOS')],
      'Localiza el StackLayout y comprueba que no tiene Spacing. Esa ausencia es lo que V1 resuelve en las cuatro variantes siguientes.'),
    step('usuario','Comprobar que el nombre de usuario no cambia','Abre EntryNombreUsuarioV1.xaml y compáralo con la contraseña.',
      'En el RAR, EntryNombreUsuario no recibe ninguna personalización en V1: V0 y V1 contienen el mismo código para este control. La personalización de V1 se limita a la contraseña.',
      [file(`${lib}/EntryNombreUsuarioV1.xaml`,'Aquí tampoco hay Spacing. Es un control de apoyo para que la aplicación anfitriona tenga las dos entradas.')],
      'Confirma que este archivo no contiene extensiones, OnPlatform ni diccionarios de recursos.'),
    step('v2-extension','V2: crear EspaciadoExtension','Abre EntryContraseniaV2.xaml.cs. Añade las dos constantes y la clase EspaciadoExtension al final del archivo.',
      'IMarkupExtension permite que XAML pida un valor al cargar. ProvideValue consulta DeviceInfo.Platform: WinUI devuelve la constante de Windows y Android la de Android. Cualquier otra plataforma deja el valor inicial 0. El atributo AcceptEmptyServiceProvider indica que la extensión no necesita servicios del analizador XAML.',
      [file(`${lib}/EntryContraseniaV2.xaml.cs`,'Las constantes viven en el control para que el selector de plataforma y el XAML hablen del mismo número.','#region PARÁMETROS','    const int LONGITUD'),file(`${lib}/EntryContraseniaV2.xaml.cs`,'La clase devuelve un double: Spacing espera ese tipo. No devuelve texto.','[AcceptEmptyServiceProvider]')],
      'Sigue el valor de DeviceInfo.Platform en Windows y comprueba que el switch devuelve EspaciadoWindows.'),
    step('v2-xaml','V2: usar la extensión en XAML','Abre EntryContraseniaV2.xaml. Declara el prefijo codigo y escribe Spacing con la extensión.',
      'El prefijo codigo apunta al namespace CLR de la biblioteca. La sintaxis Espaciado, sin el sufijo Extension, resuelve la clase EspaciadoExtension. El resto del XAML coincide con V1.',
      [file(`${lib}/EntryContraseniaV2.xaml`,'Compara con V1: se añade xmlns:codigo y el atributo Spacing del StackLayout.')],
      'Comprueba que Espaciado se escribe sin el sufijo Extension y que el prefijo codigo está declarado.'),
    step('v3','V3: OnPlatform con x:Static','Abre EntryContraseniaV3.xaml.cs y EntryContraseniaV3.xaml. El XAML consume las constantes públicas del control.',
      'Spacing se escribe como elemento de propiedad con un OnPlatform de tipo double. Cada On elige el valor según la plataforma. x:Static obtiene la constante pública del control; no hace falta una extensión propia ni código que decida la plataforma.',
      [file(`${lib}/EntryContraseniaV3.xaml.cs`,'Son las mismas constantes que V2, pero consumidas desde XAML mediante x:Static.','#region PARÁMETROS','    const int LONGITUD'),file(`${lib}/EntryContraseniaV3.xaml`,'OnPlatform sustituye al switch de la extensión. El tipo de x:TypeArguments debe coincidir con el de Spacing.')],
      'Comprueba que Platform usa Android y WinUI, y que cada Value apunta a su constante.'),
    step('v4','V4: StaticResource en el ContentView','Abre EntryContraseniaV4.xaml. Declara las dos claves en ContentView.Resources y consúmelas con StaticResource.',
      'Las constantes del code-behind desaparecen: el valor vive en un diccionario de recursos del propio ContentView. StaticResource busca la clave una vez, al cargar el XAML. El code-behind de V4 coincide con V1, salvo el nombre de la clase.',
      [file(`${lib}/EntryContraseniaV4.xaml`,'Los dos x:Double declaran el valor con su tipo. OnPlatform decide cuál se aplica.')],
      'Localiza las dos claves y comprueba que cada una tiene el tipo x:Double.'),
    step('v5','V5: DynamicResource y propiedades de configuración','Abre EntryContraseniaV5.xaml y EntryContraseniaV5.xaml.cs. Quita OnPlatform, nombra el StackLayout, enlaza Spacing con SetDynamicResource y añade las dos propiedades públicas.',
      'DynamicResource mantiene la relación con la clave, así que reemplazar el valor del diccionario actualiza el espaciado. Las propiedades EspaciadoAndroid y EspaciadoWindows leen y escriben this.Resources con el mismo nombre de clave. Una clave mal escrita falla al leer el diccionario.',
      [file(`${lib}/EntryContraseniaV5.xaml`,'El RAR usa DynamicResource dentro de OnPlatform, pero On.Value no es enlazable. Aquí el XAML solo nombra el StackLayout y el enlace se hace en C#.'),file(`${lib}/EntryContraseniaV5.xaml.cs`,'SetDynamicResource enlaza Spacing con la clave de la plataforma; las propiedades añadidas escriben esa clave. Las propiedades permiten configurar el control desde la aplicación que lo aloja.','public EntryContraseniaV5()','    // MANEJADORES DE EVENTOS')],
      'Comprueba que los nombres entre corchetes son idénticos a los x:Key del XAML.'),
    step('anfitrion','Probar los controles en una aplicación anfitriona','En R07E01R05App_Estudio abre MainPage.xaml y MainPage.xaml.cs. Coloca una instancia de cada variante.',
      'El MainPage del RAR es la plantilla sin usar: no contiene los controles. Esta página los aloja para poder compararlos. El botón de V5 asigna las dos propiedades; como DynamicResource sigue vinculado, el espaciado cambia en pantalla. Este paquete no resuelve relleno, margen, color de fondo ni tamaño de fuente.',
      [file(`${host}/MainPage.xaml`,'El prefijo v con assembly localiza los controles de la biblioteca. Hay una instancia de V1 a V5.'),file(`${host}/MainPage.xaml.cs`,'Mostrar lee las propiedades validadas. CambiarEspaciadoV5 modifica solo la variante dinámica.')],
      'Ejecuta en Windows y pulsa el botón de V5: solo esa fila debe cambiar su espaciado.')
  ]}
];

export function workshopSteps(workshop, pkg) {
  // Los proyectos ejecutables se identifican por OutputType, no por el nombre de carpeta.
  const executable = pkg.builds.filter(b => /<OutputType>Exe<\/OutputType>/.test(pkg.files.find(f => f.path === b.project)?.code || ''));
  const overview = [step('preparar','Preparar Visual Studio y la copia de trabajo',
    'Descarga el ZIP de esta relación y descomprímelo. Guarda una copia como referencia y trabaja en otra carpeta. En Visual Studio abre Soluciones.slnx; si tu versión no reconoce ese formato, abre el .csproj de la aplicación. Necesitas una versión compatible con .NET 10 y la carga de trabajo de desarrollo MAUI.',
    'El ZIP es una base compilable y también contiene la solución final. Para practicar, reconstruye los archivos indicados en cada paso con tu propio código y compara después con el bloque de referencia. Conserva configuración, recursos y archivos de plataforma. Si prefieres crear la estructura desde cero, usa Archivo > Nuevo > Proyecto > Aplicación .NET MAUI para cada aplicación y Biblioteca de clases .NET MAUI para cada biblioteca; los .csproj de abajo indican cuáles son ejecutables y sus referencias. Mantén los nombres de proyecto del paquete y ajusta el namespace de los archivos a Estudio, tal como aparece en su XAML y C#. Añade las referencias desde Dependencias > Agregar referencia de proyecto. Para cada archivo C# usa Agregar > Clase; para una página o View con XAML usa la plantilla MAUI ContentPage o ContentView correspondiente, con su clase parcial asociada. Si el archivo ya existe, edítalo en lugar de crear otro con la misma clase. Guarda con Ctrl+S. Los fragmentos indican cuándo muestran solo una parte: no sustituyas una clase completa por un método suelto. Las decisiones didácticas están separadas de los requisitos del profesor.',
    pkg.builds.map(b => file(b.project,'TargetFrameworks declara los destinos. Las referencias ProjectReference enlazan bibliotecas de esta misma carpeta. Mantén estas rutas y el namespace Estudio de los archivos para seguir la guía sin renombrados.')),
    'En el Explorador de soluciones deben aparecer los proyectos del paquete. Selecciona una aplicación como proyecto de inicio y Máquina Windows como destino; una biblioteca no se ejecuta sola.'),
    ...workshop.steps,
    step('arranque','Conectar el arranque y ejecutar todas las variantes',
      'Revisa AppShell.xaml y App.xaml.cs en cada aplicación. Haz clic derecho en su proyecto, Establecer como proyecto de inicio. Usa Compilar solución y luego F5 con Máquina Windows. Para depurar un evento, pon un punto de interrupción con F9 y avanza con F10. Repite con cada aplicación del paquete.',
      'App crea la ventana y Shell decide qué página se abre. xmlns:local resuelve tipos del namespace Estudio y ContentTemplate indica la página que se construye. Si aparece la página de plantilla en lugar de tu ejercicio, comprueba el arranque antes de cambiar los controles. No ejecutes una biblioteca como aplicación. Compara los casos del último paso con el resultado real; compilar no demuestra que todos los comportamientos sean correctos.',
      executable.flatMap(b => { const dir=b.project.slice(0,b.project.lastIndexOf('/')); return [file(`${dir}/AppShell.xaml`,'Cada destino debe apuntar a la clase de la variante correcta, con el título exigido.'),file(`${dir}/App.xaml.cs`,'La ventana inicial utiliza AppShell. No añadas otra página inicial que oculte el menú.')]; }),
      'La compilación debe terminar sin errores. Si no se genera InitializeComponent, revisa x:Class, la clase partial y que el XAML pertenece al proyecto. Si no se encuentra un tipo, revisa namespace y referencia de proyecto.'),
    step('comprobar','Comprobar los requisitos del enunciado',
      'Ejecuta los casos de la tabla inferior en cada variante afectada. Abre el PDF desde Fuentes y compara también títulos, nombres y distribución. Corrige el archivo responsable y repite el caso que falló.',
      'La tabla comprueba comportamiento; las capturas comprueban presentación. No marques una relación como hecha únicamente porque compile o porque puedas abrir el ZIP resuelto. Las soluciones son elaboraciones didácticas basadas en el material enviado, no correcciones oficiales.', [],
      'Explica sin mirar el código qué evento inicia el flujo, dónde se valida y qué control muestra el resultado. Después usa las casillas y la autoevaluación de la lección.')];
  const result=[];
  for(const section of overview) {
    if(section.id==='comprobar') {
      pkg.cases.forEach(([input,expected],i)=>result.push({...step(`caso-${i+1}`,`Comprobar el caso ${i+1}`,`Ejecuta esta entrada o acción: ${input}`,`El resultado esperado es: ${expected} Esta comprobación procede de los requisitos y convenciones explicados en la relación, no de un supuesto de examen nuevo.`,[],`Compara el resultado real con el esperado antes de pasar al siguiente caso.`),group:'comprobar',groupTitle:section.title}));
    }
    result.push({...section,action:section.id==='preparar'?'Descarga y descomprime el ZIP de esta relación.':section.action.split(/(?<=\.)\s+/)[0],explanation:section.id==='preparar'?'El ZIP contiene la base compilable y la solución de referencia. Conserva el original y trabaja en una copia: así podrás reconstruir los archivos y contrastar tu resultado sin perder la referencia.':section.explanation,files:[],group:section.id,groupTitle:section.title});
    if(section.id==='preparar') {
      const preparation=[
        ['copia','Crear una copia de trabajo','Duplica la carpeta descomprimida y abre la copia para practicar.','No necesitas sobrescribir los materiales del profesor. La copia conserva recursos, archivos de plataforma y referencias, mientras reconstruyes únicamente el archivo indicado en cada paso.','Localiza las dos carpetas y distingue cuál usarás para escribir.'],
        ['abrir','Abrir la solución en Visual Studio','Usa Archivo > Abrir > Proyecto o solución y selecciona Soluciones.slnx.','Necesitas una versión compatible con .NET 10 y la carga de trabajo de MAUI. Si no reconoce .slnx, abre el .csproj de la aplicación; las bibliotecas se enlazan mediante sus referencias.','Comprueba que los proyectos aparecen en el Explorador de soluciones.'],
        ['crear','Elegir cómo reconstruir el ejercicio','Recrea el archivo señalado dentro de la copia de trabajo.','Para una clase C# usa Agregar > Clase. Para páginas y controles XAML utiliza ContentPage o ContentView de MAUI. Si el archivo ya existe, edítalo: no crees otra clase con el mismo nombre. Conserva el namespace Estudio de los archivos.','Distingue un archivo nuevo de uno existente antes de pegar el código.'],
        ['referencias','Revisar las dependencias locales','Abre Dependencias de cada aplicación y comprueba sus referencias de proyecto.','Si falta una biblioteca, usa Agregar referencia de proyecto y selecciona la del paquete. Un namespace XAML localiza el tipo, pero no reemplaza la referencia al ensamblado.','Las referencias deben resolverse dentro de tu carpeta, sin rutas del ordenador del profesor.'],
        ['fragmentos','Distinguir fragmento y archivo completo','Lee la ubicación del fragmento antes de escribirlo.','Los pasos pequeños muestran una propiedad, un método o un elemento XAML, no un archivo completo. Intégralos en orden dentro de su clase o contenedor. El archivo completo queda plegado como referencia; evita duplicar clases o borrar sus llaves y etiquetas de cierre.','Explica dónde irá el fragmento antes de copiarlo. Guarda con Ctrl+S.'],
      ];
      for(const [id,title,action,why,check] of preparation)result.push({...step(`preparar-${id}`,title,action,why,[],check),group:'preparar',groupTitle:section.title});
    }
    for(const [fileIndex,block] of section.files.entries()) {
      const selected=workshopCode(block,pkg);
      const parts=(codeParts[`${pkg.id}/${block.path}`] || []).filter(p=>selected.includes(p.code));
      if(!parts.length)throw new Error(`Faltan micro pasos: ${pkg.id}/${block.path}`);
      for(const [partIndex,part] of parts.entries()) {
        const note=explainPart(part,block);
        result.push({...step(`${section.id}-archivo-${fileIndex+1}-parte-${partIndex+1}`,note.title,`En ${block.path}, escribe únicamente el fragmento de este paso.`,note.why,[{path:block.path,explanation:block.explanation,fragment:part.code,display:part.display,context:part.context,line:part.line}],`Comprueba qué dato o control modifica este fragmento y por qué está en este archivo. ${partIndex===parts.length-1?section.check:'Guarda antes de continuar; no ejecutes una clase que todavía estás completando.'}`),group:section.id,groupTitle:section.title});
      }
    }
  }
  return groupStudySteps(result);
}

// Se avanza por tareas; el detalle de cada fragmento se conserva dentro del paso.
function groupStudySteps(detailed) {
  const grouped=[];
  for(const group of [...new Set(detailed.map(s=>s.group))]) {
    const source=detailed.filter(s=>s.group===group);
    const intro=source.find(s=>s.id===group);
    const fragments=source.flatMap(s=>s.files.map(f=>({...f,reason:s.explanation,title:s.title,previousId:s.id})));
    const chunks=[];
    let chunk=[];
    for(const fragment of fragments) {
      const lines=chunk.reduce((n,f)=>n+f.fragment.split('\n').length,0)+fragment.fragment.split('\n').length;
      const fileChanges=chunk.length && chunk[0].path!==fragment.path;
      if(chunk.length && (chunk.length>=6 || lines>40 || fileChanges)) { chunks.push(chunk);chunk=[]; }
      chunk.push(fragment);
    }
    if(chunk.length)chunks.push(chunk);
    if(!chunks.length)chunks.push([]);
    chunks.forEach((files,index)=>grouped.push({
      ...intro,
      id:index===0?group:files[0].previousId,
      title:chunks.length===1?intro.title:`${intro.title} · ${index+1}/${chunks.length}`,
      action:index===0?intro.action:`Continúa en ${files[0].path} con los fragmentos de esta parte.`,
      files,
      subtasks:index===0?source.filter(s=>!s.files.length && s.id!==group).map(s=>({title:s.title,action:s.action,explanation:s.explanation})):[],
      aliases:(index===0?source.filter(s=>!s.files.length).map(s=>s.id):[]).concat(files.map(f=>f.previousId)),
    }));
  }
  return grouped;
}

export function workshopCode(block, pkg) {
  const source = pkg.files.find(f => f.path === block.path)?.code;
  if (source === undefined) throw new Error(`Archivo de taller inexistente: ${pkg.id}/${block.path}`);
  if(block.fragment!==undefined) {
    if(!source.includes(block.fragment))throw new Error(`Fragmento desactualizado: ${pkg.id}/${block.path}`);
    return block.fragment;
  }
  const start = block.start ? source.indexOf(block.start) : 0;
  const end = block.end ? source.indexOf(block.end, start + 1) : source.length;
  if (start < 0 || end < start) throw new Error(`Fragmento de taller inválido: ${pkg.id}/${block.path}`);
  return source.slice(start, end).trimEnd();
}
import codeParts from './workshop-parts.mjs';
import { explainPart } from './study-explanations.mjs';
