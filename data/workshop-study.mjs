// Comparaciones y decisiones presentes en las relaciones recibidas.
export const workshopStudy = {
  'relacion-1': {
    focus: 'El cambio de distribución no cambia las reglas: ambas páginas construyen Usuario. La validación debe ocurrir antes de mostrar Mensaje; ante un error hay que borrar un éxito anterior.',
    mistake: 'Validar solo el teclado o conservar el mensaje de acceso después de una entrada inválida.',
    rows: [
      ['Formulario vertical','Los campos se apilan verticalmente.','Usuario, límites y método Acceder.','Relacion1E01_Estudio/Ejercicio01.xaml'],
      ['Formulario mixto','Se combinan grupos horizontales y verticales.','Los mismos datos y condiciones de acceso.','Relacion1E01_Estudio/Ejercicio02.xaml'],
    ],
  },
  'relacion-2': {
    focus: 'La calculadora conserva primer operando, operador y visor entre eventos. Los cuatro layouts delegan en Calculadora; las teclas no deben implementar cuatro aritméticas distintas. La división es entera y los errores deben limpiar también el estado.',
    mistake: 'Crear otra Calculadora en cada clic, borrar solo el visor o invertir fila y columna al construir Grid.',
    rows: [
      ['Stack en XAML','Filas de controles declaradas en pilas.','Modelo Calculadora, eventos y resultados.','Relacion2_Estudio/Ejercicio01.xaml'],
      ['Grid en XAML','Definiciones de filas y columnas y posiciones explícitas.','El mismo estado y operaciones enteras.','Relacion2_Estudio/Ejercicio02.xaml'],
      ['Stack en C#','Se crean objetos, se añaden hijos y se conectan eventos con +=.','La distribución por pilas y el modelo.','Relacion2_Estudio/Ejercicio03.cs'],
      ['Grid en C#','Se crean definiciones y se añade cada control por columna y fila.','La distribución por celdas y el modelo.','Relacion2_Estudio/Ejercicio04.cs'],
    ],
  },
  'relacion-3': {
    focus: 'fila * 5 + columna + 1 transforma índices desde cero en números del 1 al 25. En la segunda variante, cada MiBoton guarda su estado y el tercer clic vuelve al color original.',
    mistake: 'Compartir el estado con static: pulsar un botón alteraría el ciclo de los demás.',
    rows: [
      ['Tablero con alerta','Cada clic informa del número del botón.','Matriz dinámica 5×5 y numeración.','Relacion3_Estudio/Ejercicio01.cs'],
      ['Tablero de color','Se crean MiBoton, que administran su ciclo de color.','La misma matriz y un estado independiente por instancia.','Relacion3_Estudio/Ejercicio02.cs'],
    ],
  },
  'relacion-4': {
    focus: 'Title es el texto del menú; ContentTemplate decide la clase que se abre. Revisa ambos: un menú con títulos distintos puede estar mostrando por error la misma página.',
    mistake: 'Copiar solo las páginas y olvidar Usuario, Calculadora, MiBoton o sus reglas.',
    rows: [
      ['Aplicación de formularios','Dos destinos: acceso vertical y mixto.','Validación de la relación 1.','Ejercicio1_Estudio/AppShell.xaml'],
      ['Aplicación de calculadoras','Cuatro destinos: Stack/Grid y XAML/C#.','Estado y operaciones de la relación 2.','Ejercicio2_Estudio/AppShell.xaml'],
      ['Aplicación de tableros','Dos destinos: alerta y color.','Construcción y estados de la relación 3.','Ejercicio3_Estudio/AppShell.xaml'],
    ],
  },
  'relacion-5': {
    focus: 'La propiedad validada debe comprobar tanto la lectura como la asignación. MaxLength e IsPassword ayudan a introducir y presentar el dato, pero no sustituyen las reglas.',
    mistake: 'Leer Text desde el anfitrión para saltarse Usuario o Password. El PDF pide herencia de Entry; el ContentView del RAR es una discrepancia ya documentada.',
    rows: [
      ['Entrada de usuario','Propiedad Usuario y regla de nombre de acceso.','Herencia de Entry y validación en getter/setter.','BLoginViews_Estudio/EntryNombreUsuario.cs'],
      ['Entrada de contraseña','Propiedad Password, ocultación y categorías requeridas.','Validación al leer y antes de asignar.','BLoginViews_Estudio/EntryContrasenia.cs'],
    ],
  },
  'relacion-6': {
    focus: 'LoginView compone las entradas y expone UserName y PassWord. La lectura debe delegar en las propiedades validadas de los hijos, sin duplicar reglas ni devolver directamente su Text.',
    mistake: 'Confundir namespace XAML con referencia de proyecto, o hacer público todo el árbol interno para leer los datos.',
    rows: [
      ['Control especializado','EntryNombreUsuario añade un contrato a Entry.','La validación sigue en Reglas.','BLoginViews_Estudio/EntryNombreUsuario.cs'],
      ['Control compuesto','LoginView distribuye ambos controles en una sola pieza.','Las reglas de los controles hijos.','BAcceso_Estudio/LoginView.xaml'],
      ['Contrato del compuesto','UserName y PassWord delegan en las propiedades de los hijos.','El rechazo del dato inválido al leerlo.','BAcceso_Estudio/LoginView.xaml.cs'],
    ],
  },
  'relacion-7': {
    focus: 'No confundas obtener un valor con mantener una referencia. ProvideValue y x:Static proporcionan valores tipados; StaticResource resuelve una clave y DynamicResource mantiene su actualización mientras siga vinculado.',
    mistake: 'Cambiar BackgroundColor directamente y después atribuir a DynamicResource un resultado cuando ya se sustituyó la referencia local. Reinicia antes de comparar.',
    rows: [
      ['Extensión propia','ProvideValue devuelve el valor elegido por su selector.','Tipos adecuados y personalización pública.','BAccesoPropias/LoginView.xaml'],
      ['x:Static','Acceso a miembros estáticos, sin selector propio.','Los tipos y valores de diseño de la variante.','BAccesoStatic/LoginView.xaml'],
      ['StaticResource','Se obtiene el valor de una clave al resolverla.','Diccionario local del ContentView.','BAccesoRecursosEstaticos/LoginView.xaml'],
      ['DynamicResource','Se conserva la referencia a la clave y su actualización.','Ámbito local y propiedades del View.','BAccesoRecursosDinamicos/LoginView.xaml'],
    ],
  },
  'relacion-7-r5': {
    focus: 'Las cuatro variantes producen el mismo Spacing en Windows y Android: lo que cambia es dónde vive la decisión. V2 la toma en una clase C# propia, V3 en OnPlatform con constantes, V4 en recursos resueltos una vez y V5 en recursos que siguen vinculados a su clave. Solo se personaliza el espaciado de la contraseña.',
    mistake: 'Dar por resueltos relleno, margen, color de fondo y tamaño de fuente. V1 no los resuelve, y EntryNombreUsuario no cambia respecto a V0.',
    rows: [
      ['V2 Extensión propia','EspaciadoExtension decide el valor con DeviceInfo.Platform.','Las constantes de espaciado y el tipo double de Spacing.','BLoginViews_Estudio/EntryContraseniaV2.xaml.cs'],
      ['V3 x:Static','OnPlatform elige entre dos constantes públicas.','Los mismos valores y el mismo StackLayout.','BLoginViews_Estudio/EntryContraseniaV3.xaml'],
      ['V4 StaticResource','Las claves viven en ContentView.Resources y se resuelven al cargar.','OnPlatform y los mismos valores.','BLoginViews_Estudio/EntryContraseniaV4.xaml'],
      ['V5 DynamicResource','La referencia a la clave se mantiene y puede actualizarse.','Diccionario local; añade propiedades públicas y enlaza con SetDynamicResource porque On.Value no admite un recurso dinámico.','BLoginViews_Estudio/EntryContraseniaV5.xaml'],
    ],
  },
  'relacion-8': {
    focus: 'La matrícula debe validar toda la cadena antes de sustituir el valor anterior. La edad se calcula teniendo en cuenta el cumpleaños; cambiar nacimiento o umbral obliga a recalcular el aviso.',
    mistake: 'Calcular la edad solo restando años, aceptar futuro, o asignar el límite antes de comprobar que es superior a 12.',
    rows: [
      ['Vista de matrícula','Entry, TextChanged y propiedad de lectura/escritura validada.','Aviso amarillo, aspecto público y encapsulación.','BRelacion07Estudio/ViewMatriculaEstudio.xaml.cs'],
      ['Vista de edad','DatePicker, edad calculada y umbral inicial 18.','Aviso y personalización desde el anfitrión.','BRelacion07Estudio/ViewMayorEdadEstudio.xaml.cs'],
    ],
  },
};

export function isImportantCode(code) {
  return /Reglas\.|TryParse|throw\b|\btry\b|\bcatch\b|\bif\s*\(|\bfor\s*\(|\b(?:primero|operador|resultado|Visor|limite)\b|Clicked|TextChanged|DateSelected|DateTime|DynamicResource|StaticResource|x:Static|ProvideValue|ContentTemplate|ProjectReference|\.Usuario\b|\.Password\b/.test(code);
}
