// Estas notas describen la sintaxis del código recibido o de su adaptación didáctica.
export const memberNotes = {
  Texto: ['Recibir un texto y los límites del campo', 'La misma comprobación sirve para nombre y apellidos porque recibe mínimo, máximo y nombre del campo. No se aceptan datos inválidos para arreglarlos después: se interrumpe la operación antes de guardar el resultado.'],
  EdadEntrada: ['Convertir y validar la edad escrita', 'El contenido de Entry sigue siendo texto. TryParse comprueba que pueda convertirse a int. Después se verifica el intervalo inclusivo 5–70. Son dos condiciones distintas: tener formato numérico y estar dentro del intervalo.'],
  Nombre: ['Guardar el nombre validado', 'La propiedad pertenece a cada Usuario. Su getter permite leer el dato, pero la ausencia de setter público impide sustituirlo desde la página. Se asigna en el constructor después de validar.'],
  Apellidos: ['Guardar los apellidos validados', 'No se reutiliza el límite del nombre: Usuario llama a Texto con los límites específicos de apellidos. La página lee esta propiedad después de construir correctamente el modelo.'],
  Edad: ['Obtener la edad del modelo', 'En Usuario se guarda la edad validada; en la vista de fecha se calcula mediante Reglas.Edad. Mira la expresión de esta propiedad para distinguir un dato almacenado de un resultado calculado.'],
  Acceder: ['Leer los campos y responder al clic', 'Este método conecta la interfaz con el modelo. Crear Usuario puede fallar, por eso se hace dentro de try. El resultado solo se muestra tras una construcción válida. El error limpia un éxito anterior antes de informar al usuario.'],
  Operar: ['Elegir una operación entera', 'Cada rama del switch corresponde a un operador. Trabajar con int conserva la división entera del ejercicio. checked evita que un desbordamiento pase inadvertido; la página debe capturar ese error.'],
  Visor: ['Conservar el texto del visor', 'El modelo guarda el texto que se está formando con las teclas. La página lo copia a la entrada de solo lectura. private set permite modificarlo desde Calculadora, sin abrir esa modificación a la página.'],
  primero: ['Recordar el primer operando', 'int? distingue un operando todavía no introducido de un primer número igual a cero. Este campo debe conservarse entre dos clics distintos.'],
  operador: ['Recordar la operación pendiente', 'char? permite guardar una operación o indicar su ausencia con null. No se deduce la operación leyendo la posición de los botones.'],
  resultado: ['Distinguir resultado y entrada nueva', 'Este indicador dice si el visor contiene un resultado terminado. Cuando llega el siguiente dígito, permite iniciar un cálculo nuevo en vez de concatenarlo al resultado anterior.'],
  Digito: ['Procesar una tecla numérica', 'En el modelo se concatena un solo dígito; en la página se obtiene el Button que originó el evento y se actualiza el visor. La comprobación de sender evita tratar cualquier objeto como botón.'],
  Limpiar: ['Restablecer todo el cálculo', 'Borrar solo la pantalla dejaría operandos antiguos en memoria. Se restablecen visor, primer operando, operador y marca de resultado para comenzar desde el mismo estado inicial.'],
  Operacion: ['Procesar una operación o el igual', 'El modelo convierte el visor a entero y distingue seleccionar operador de resolver el cálculo. El manejador visual traduce los símbolos de las teclas, actualiza la salida y limpia el estado si ocurre un error. Comprueba cuál de esas clases contiene este fragmento.'],
  SiguienteEstado: ['Avanzar en el ciclo del botón', 'El resto entre tres mantiene el resultado en 0, 1 o 2. Así el tercer avance regresa al inicio. Esta regla decide el estado; MiBoton decide cómo se representa con colores.'],
  estado: ['Guardar un estado por botón', 'El campo no es static: cada MiBoton tiene su propia copia. Si se compartiera el contador, pulsar un botón alteraría el ciclo de los demás.'],
  original: ['Conservar el color de regreso', 'El color inicial se guarda aparte para poder recuperarlo tras el tercer clic. En esta solución es azul por la elección del RAR; no se añade una condición nueva al enunciado.'],
  Usuario: ['Validar los datos al construir Usuario', 'El constructor llama a las reglas antes de dejar un objeto utilizable. Si una comprobación lanza una excepción, la página no recibe un Usuario válido a medias. Los parámetros de texto pueden ser nulos y las reglas deciden si se aceptan.'],
  NombreUsuario: ['Comprobar el nombre de acceso', 'Primero se aplica la longitud 5–15. Después All exige que todos los caracteres pertenezcan a A–Z/a–z, convención de esta solución señalada aparte del PDF. Una sola letra no admitida rechaza el dato.'],
  Contrasenia: ['Comprobar longitud y categorías de contraseña', 'Se requieren diez caracteres y al menos una mayúscula, minúscula, cifra y uno de los signos indicados. Any comprueba existencia, no que todos los caracteres tengan la misma categoría. Ocultar la entrada no valida ni cifra su contenido.'],
  Password: ['Exponer la contraseña validada', 'El getter aplica la regla al leer Text y el setter valida antes de asignar. Así no basta con saltarse un evento de foco para obtener un dato inválido mediante esta propiedad.'],
  UserName: ['Leer el usuario a través del View', 'La propiedad pública delega en la propiedad validada del control hijo. El anfitrión no necesita conocer el árbol visual ni los nombres de los Entry internos.'],
  PassWord: ['Leer la contraseña a través del View', 'Se conserva exactamente este nombre público del ejercicio. La lectura acaba en la propiedad Password del control especializado; no se devuelve Text saltándose su regla.'],
  Espaciado: ['Cambiar la separación entre hijos', 'La propiedad pública modifica Spacing en el contenedor interno. En los Views de relación 8 alcanza también la fila. La comprobación previa impide aplicar un valor negativo donde está prevista esa validación.'],
  Relleno: ['Cambiar el espacio interior', 'Padding es el espacio dentro del contenedor, entre borde y contenido. Se expresa con Thickness. No es Margin, que separa el elemento del exterior.'],
  Margen: ['Cambiar la separación exterior', 'Margin utiliza Thickness y separa el control de los elementos que lo rodean. El setter delega en el layout interno sin exigir al anfitrión acceso directo a ese objeto.'],
  Fondo: ['Personalizar el color de fondo', 'La propiedad pública delega en BackgroundColor. Una asignación directa cambia el valor local; no equivale a reemplazar una clave de un diccionario de recursos.'],
  Fuente: ['Cambiar el tamaño de letra de los hijos', 'Un único setter actualiza los elementos internos que deben compartir tamaño. Antes se rechaza un tamaño no positivo. Se evita que cada anfitrión tenga que localizar y modificar cada hijo.'],
  ReemplazarRecurso: ['Sustituir el valor de una clave', 'La asignación modifica Resources["FondoLayout"]. DynamicResource mantiene la referencia y actualiza el destino; StaticResource ya resolvió su valor. Reinicia antes de comparar si has usado personalización directa.'],
  ProvideValue: ['Devolver el valor solicitado por XAML', 'La extensión devuelve un objeto del tipo que necesita el atributo: double, Thickness o Color. El selector elige la rama y la opción desconocida produce una excepción para hacer visible el error.'],
  Propiedad: ['Recibir el selector de la extensión', 'El atributo del XAML asigna esta cadena antes de llamar a ProvideValue. Su texto debe coincidir con una de las ramas del switch; no representa el valor final de la propiedad visual.'],
  Tipo: ['Seleccionar el aspecto de la vista', 'El texto recibido por la extensión selecciona espaciado, relleno o color. El selector no convierte automáticamente cualquier cadena en un valor visual válido.'],
  Android: ['Distinguir la plataforma actual', 'DeviceInfo compara la plataforma con DevicePlatform.Android. El resultado selecciona los valores didácticos de esta variante. Compilar para Windows no comprueba la presentación de Android.'],
  FondoLayout: ['Elegir el fondo del contenedor', 'El miembro devuelve Color para el contenedor. Los valores de la relación 7 son decisiones didácticas para mostrar la diferencia de plataforma, no cifras impuestas por el profesor.'],
  FondoEntry: ['Elegir el fondo de una entrada', 'Se devuelve Color para el tipo de control Entry. La distinción por tipo permite que entradas, etiquetas y contenedor no dependan de un único color indistinto.'],
  FondoLabel: ['Elegir el fondo de una etiqueta', 'Este valor corresponde a Label. Revisa el consumo del miembro en XAML para no confundir el nombre de una clave con el color que devuelve.'],
  FuenteEntry: ['Elegir el tamaño de las entradas', 'FontSize espera una magnitud numérica. Se usa un valor adecuado al tipo Entry y a la plataforma, sin convertir el número en una cadena de texto.'],
  FuenteLabel: ['Elegir el tamaño de las etiquetas', 'Este miembro proporciona el tamaño para Label. Separarlo del tamaño de Entry permite mostrar la especialización por tipo pedida en la práctica.'],
  Matricula: ['Validar y exponer la matrícula', 'En Reglas se comprueba la cadena completa. En el View, el getter valida lo leído y el setter comprueba el valor antes de sustituir el anterior. La edición manual se informa mediante TextChanged.'],
  Cambio: ['Validar mientras cambia el texto', 'TextChanged informa de una edición del Entry. Se aplica la misma regla que en la propiedad pública y se actualiza el mensaje. El evento no sustituye la validación de getter y setter.'],
  Mensaje: ['Preparar el mensaje de resultado', 'Lee la expresión para distinguir el mensaje de acceso del modelo y el método de aviso de los Views. En estos últimos, un texto vacío quita el fondo amarillo; un error lo activa. En Usuario se elige el texto según el umbral de acceso.'],
  FechaNacimiento: ['Leer o asignar la fecha de nacimiento', 'La asignación rechaza una fecha futura antes de cambiar el DatePicker. Después se recalcula la salida. En MAUI 10 Date puede ser anulable y la lectura usa Today como apoyo cuando no hay valor.'],
  limite: ['Guardar el umbral inicial', 'Cada View empieza con límite 18. El campo es privado; los cambios externos pasan por MayoriaEdad para comprobar que el nuevo límite sea superior a 12.'],
  MayoriaEdad: ['Cambiar el umbral con validación', 'El setter evalúa Reglas.Limite antes de modificar el campo. Si falla, el límite anterior queda intacto. Si tiene éxito, Actualizar recalcula el estado usando la fecha actual.'],
  Limite: ['Comprobar el nuevo límite', 'La regla exige un valor estrictamente superior a 12. El método del anfitrión convierte antes el texto a entero. No se debe confundir el formato de la entrada con la validez del umbral.'],
  CambioFecha: ['Responder a otra fecha seleccionada', 'El evento vuelve a calcular la edad y el aviso. La comprobación del control de error evita usarlo antes de que InitializeComponent haya terminado de crear los hijos.'],
  Actualizar: ['Recalcular edad y condición', 'La salida depende de nacimiento, día actual y límite. Se obtiene primero la edad; después se muestra el aviso si no alcanza el umbral. En el error se limpia una edad anterior para no mostrar un dato engañoso.'],
  Mostrar: ['Leer datos desde la aplicación de prueba', 'El anfitrión usa las propiedades públicas dentro de try porque pueden rechazar el dato. Mostrar credenciales responde al ejercicio académico; no es una autenticación real ni una práctica para producción.'],
  Cambiar: ['Aplicar la personalización desde fuera', 'El anfitrión modifica el contrato público del View, no sus hijos privados. Se comprueba así que espaciado, relleno, margen, fondo y fuente se propagan a los elementos internos.'],
  Recurso: ['Probar la sustitución del recurso', 'El botón delega en ReemplazarRecurso. Prueba esta operación antes de personalizar directamente el fondo para observar la diferencia entre referencia estática y dinámica.'],
  Asignar: ['Asignar la matrícula desde el anfitrión', 'Se entrega el texto a la propiedad pública. La vista valida antes de guardarlo y puede lanzar una excepción que la aplicación muestra mediante una alerta.'],
  Aspecto: ['Comprobar la apariencia pública de ambos Views', 'La aplicación cambia las propiedades expuestas por ambas vistas. No sustituye sus reglas de matrícula o edad: apariencia y validación son responsabilidades distintas.'],
  visor: ['Crear el control de salida', 'La instancia Entry presenta el visor y se marca de solo lectura. Así el usuario utiliza las teclas previstas; la lógica de la operación permanece en Calculadora.'],
  modelo: ['Crear una calculadora por página', 'La página conserva su propia instancia de Calculadora para recordar el estado entre clics. Crear una nueva en cada evento perdería el primer operando y la operación pendiente.'],
};

export function explainPart(part, block) {
  const name=part.name.split(' · ')[0];
  if(part.kind==='namespace')return {title:'Situar la clase en su namespace',why:'El namespace agrupa los tipos y debe coincidir con el que utiliza x:Class en el archivo XAML. El nombre de una carpeta o de un proyecto no sustituye esta declaración.'};
  if(part.kind==='importación')return {title:`Importar ${name}`,why:'using permite escribir el nombre corto de los tipos de este namespace. No instala una biblioteca: el proyecto debe tener ya su referencia. Evita confundir esta directiva con la herencia de una clase.'};
  if(part.kind==='clase')return {title:`Declarar ${name}`,why:'Esta cabecera define el nombre, visibilidad y clase base. partial permite compartir una clase entre XAML y C# cuando aparece ese modificador. Los campos, propiedades y métodos siguientes se escriben dentro de sus llaves, sin crear otra clase duplicada.'};
  if(part.kind==='propiedad' && name==='Usuario')return {title:'Leer o asignar el nombre de usuario validado',why:'Esta propiedad del Entry especializado delega en Reglas.NombreUsuario. Valida tanto al leer Text como antes de escribirlo, para conservar el mismo contrato si el dato se introduce a mano o desde el anfitrión.'};
  if(part.kind==='método' && name==='Edad')return {title:'Calcular los años cumplidos',why:'Primero se normalizan las fechas y se rechaza un nacimiento futuro. Se restan los años y después se descuenta uno si el aniversario todavía es posterior al día actual. Comparar solo los años daría una edad incorrecta antes del cumpleaños.'};
  const custom=memberNotes[name];
  if(custom) return {title:custom[0],why:custom[1]};
  if(part.kind==='constructor') {
    const creation=/\b([\w.]+)\s+(\w+)\s*=\s*new\b/.exec(part.code);
    return {title:creation?`Crear ${creation[2]} de tipo ${creation[1]}`:`Construir ${name}${part.name.includes(' · ')?' · '+part.name.split(' · ')[1]:''}`,why:creation?'Declara explícitamente el tipo, crea la instancia y configura únicamente sus propiedades de este fragmento. Después se conecta o añade al contenedor según el código. Cada instancia tiene su propio estado: reutilizar su tipo no significa compartir el mismo objeto.':'El constructor se ejecuta al crear esta instancia. En páginas XAML, InitializeComponent debe crear los controles antes de acceder a ellos. En páginas escritas en C#, se construyen los contenedores y después sus hijos. Sigue el orden: un objeto debe existir antes de configurarlo o añadirlo.'};
  }
  if(part.kind==='etiqueta') {
    const tag=name.split(':').at(-1);
    const notes={
      ContentPage:'Define una pantalla. x:Class enlaza esta raíz con la clase parcial C#; los namespaces permiten resolver las etiquetas. No confundas la página con un contenedor interior.',
      ContentView:'Define un control compuesto reutilizable. Su raíz se enlaza con una clase parcial, pero no sustituye a la página anfitriona.',
      Entry:'Recibe texto. x:Name permite acceder a la instancia desde C#. El teclado y MaxLength ayudan a introducir datos, pero la regla del modelo conserva la responsabilidad de validarlos.',
      Label:'Presenta texto o un resultado. Text fija el contenido; un x:Name permite actualizarlo desde C#. Las propiedades de alineación y color afectan a la presentación, no a la validez del dato.',
      Button:'Expone una acción al usuario. Text identifica la tecla o acción y Clicked conecta con el manejador C#. El mismo método puede atender varios botones y distinguirlos mediante sender.',
      Grid:'Distribuye hijos por filas y columnas. Define primero las regiones y después asigna Grid.Row y Grid.Column a cada elemento; los índices empiezan en cero.',
      RowDefinition:'Define una fila del Grid. Auto ajusta al contenido y * reparte espacio disponible. La definición por sí sola no añade ningún control.',
      ColumnDefinition:'Define una columna del Grid. Su Width determina cómo se reparte el espacio, mientras Grid.Column indica dónde se coloca un control.',
      VerticalStackLayout:'Coloca hijos de arriba abajo. Spacing separa hijos y Padding separa el contenido del borde; son espacios distintos.',
      HorizontalStackLayout:'Coloca hijos en una fila. El orden de las etiquetas es el orden visual; las opciones de tamaño determinan el espacio de cada hijo.',
      StackLayout:'Agrupa controles en orden. Orientation decide si la distribución es horizontal o vertical. Construye primero el contenedor y coloca después sus hijos.',
      Shell:'Define la navegación de la aplicación. El namespace local permite localizar las páginas y FlyoutBehavior configura el menú.',
      FlyoutItem:'Crea una opción del menú. Title es el texto visible; el destino real se define en su ShellContent.',
      ShellContent:'Asocia el destino con una página. DataTemplate referencia el tipo de página y permite construirlo cuando corresponde.',
      DatePicker:'Permite elegir una fecha. DateSelected comunica el cambio a C#; calcular edad y rechazar futuro siguen siendo reglas del View.',
      ResourceDictionary:'Agrupa claves y valores dentro del ámbito de este contenedor. Declarar una clave y utilizarla mediante StaticResource o DynamicResource son operaciones diferentes.',
      OutputType:'Exe identifica un proyecto ejecutable. Una biblioteca no debe seleccionarse para iniciar una ventana por sí sola.',
      TargetFrameworks:'Enumera los destinos de compilación. Para esta práctica se verificó Windows; que haya otros destinos declarados no implica que se hayan probado.',
      UseMaui:'Activa la configuración MAUI del proyecto y el tratamiento de sus controles y archivos asociados.',
      SingleProject:'Utiliza la organización de proyecto único de MAUI para recursos y configuración de plataforma.',
      ProjectReference:'Enlaza una biblioteca local. La ruta debe resolver al proyecto correcto y no a una carpeta del ordenador del profesor.',
    };
    return {title:`Configurar ${tag}`,why:notes[tag] || `Este elemento pertenece al árbol XAML del archivo. ${block.explanation} Comprueba su contenedor y el atributo que lo enlaza con el código antes de cambiarlo.`};
  }
  return {title:`Definir ${name}`,why:`${block.explanation} Este fragmento se estudia dentro de su clase; conserva sus tipos, nombres y el orden en el que se utiliza desde la página.`};
}

export function explainLine(line) {
  const text=line.trim();
  if(!text) return null;
  if(text==='{')return 'Abre un bloque: las instrucciones o miembros siguientes pertenecen a esa clase, método, condición o inicialización.';
  if(text==='}')return 'Cierra el bloque abierto anteriormente. Su posición indica hasta dónde pertenece el código a ese bloque.';
  if(text==='};')return 'Cierra la inicialización del objeto y termina la declaración con punto y coma.';
  if(/^<\//.test(text))return 'Cierra el elemento XAML abierto con el mismo nombre; los hijos anteriores quedan dentro de ese contenedor.';
  if(text.startsWith('//') || text.startsWith('<!--')) return 'Comentario en español: explica una decisión y no se ejecuta como parte de la lógica.';
  const types={string:'texto', 'string?':'texto que puede ser nulo',int:'un número entero','int?':'un número entero o ausencia de valor',char:'un carácter','char?':'un carácter o ausencia de valor',double:'un número con decimales',bool:'verdadero o falso',void:'ningún resultado',DateTime:'una fecha y hora',Color:'un color',Thickness:'una medida de espacio por lados'};
  const signature=/^(?:(?:public|private|protected|internal|static|async|virtual|override)\s+)+([\w?.<>]+)\s+(\w+)\(([^)]*)\)/.exec(text);
  if(signature) {
    const parameters=signature[3].split(',').map(p=>p.trim()).filter(Boolean).map(p=>{const pair=p.split(/\s+/);return `${pair.at(-1)} recibe ${types[pair[0]] || 'un valor de tipo '+pair[0]}`;});
    return `El método ${signature[2]} devuelve ${types[signature[1]] || 'un valor de tipo '+signature[1]}.${text.includes('static ')?' static permite llamarlo mediante la clase, sin crear una instancia.':''}${text.includes('async ')?' async permite esperar operaciones sin bloquear la interfaz.':''}${parameters.length?' Parámetros: '+parameters.join('; ')+'.':''}`;
  }
  if(text.includes('InitializeComponent()')) return 'Crea y enlaza los controles declarados en XAML; debe ocurrir antes de acceder a sus nombres desde C#.';
  if(/fila\s*\*\s*5\s*\+\s*(?:col|columna)\s*\+\s*1/.test(text))return 'Transforma coordenadas que empiezan en cero en números de botón: fila por cinco más columna más uno. La primera celda vale 1 y la última, 25.';
  if(/\w+\.Add\([^,]+,[^,]+,[^,)]+\)/.test(text))return 'Añade el control al Grid indicando primero la columna y después la fila. No inviertas este orden al pasar de los índices del bucle a las coordenadas visuales.';
  if(text.includes('TryParse')) return 'Intenta convertir el texto sin lanzar una excepción por formato; si falla, la rama de error impide continuar con un número inválido.';
  if(text.includes('IsNullOrWhiteSpace')) return 'Rechaza un dato nulo, vacío o formado solo por espacios antes de utilizar su contenido.';
  if(text.includes('throw')) return 'Interrumpe la operación y comunica un incumplimiento al código que la llamó; no se ejecuta como si el dato fuera válido.';
  if(text.startsWith('catch')) return 'Entra en esta rama cuando falla una operación del try con un error del tipo indicado.';
  if(text.startsWith('try')) return 'Agrupa la operación que puede fallar para tratar su error en el catch asociado.';
  if(text.includes('DisplayAlertAsync')) return 'Muestra el aviso y espera a que se cierre; la interfaz no confunde el error con un resultado correcto.';
  if(text.includes('checked')) return 'Comprueba desbordamiento: una operación fuera del rango de int produce un error en vez de ocultarlo.';
  if(text.includes('Regex.IsMatch')) return 'Contrasta el texto con el patrón completo de matrícula; los anclajes impiden aceptar una coincidencia parcial.';
  if(text.includes('.Any(')) return 'Any exige que exista al menos un carácter de la categoría comprobada. Cada categoría requerida se comprueba por separado.';
  if(text.includes('.All(')) return 'All exige que todos los caracteres cumplan la condición; basta un carácter no admitido para rechazar el dato.';
  if(text.includes('AddYears')) return 'Compara el aniversario con la fecha actual para descontar el año que todavía no se ha cumplido.';
  if(text.includes('DateTime.Today')) return 'Usa el día actual sin la hora para que la comprobación dependa de la fecha del cumpleaños.';
  if(text.includes('Clicked') || text.includes('TextChanged') || text.includes('DateSelected')) return 'Conecta un cambio de la interfaz con su manejador; comprueba que el método exista y tenga la firma del evento.';
  if(text.includes('x:Name=')) return 'Asigna el nombre de esta instancia para acceder a ella desde la clase parcial; las mayúsculas deben coincidir.';
  if(text.includes('x:Class=')) return 'Relaciona el archivo XAML con su clase C# y su namespace; si no coincide, los controles no se generan correctamente.';
  if(text.includes('xmlns')) return 'Declara dónde se buscan los tipos de las etiquetas; es distinto de una referencia de proyecto al ensamblado.';
  if(text.includes('DynamicResource')) return 'Mantiene una referencia a la clave para recibir cambios del recurso mientras esa relación siga activa.';
  if(text.includes('StaticResource')) return 'Obtiene el valor de la clave al resolver esta propiedad; sustituir después la clave no actualiza automáticamente ese valor.';
  if(text.includes('x:Static')) return 'Obtiene un miembro estático con su tipo real, sin pasar por el selector de una extensión propia.';
  if(text.includes('Grid.Row') || text.includes('Grid.Column')) return 'Sitúa el control en la región indicada del Grid; fila y columna se cuentan desde cero.';
  if(text.includes('||')) return 'El operador || significa «o»: basta con que se cumpla una de estas condiciones para entrar en la rama de rechazo.';
  if(text.includes('&&')) return 'El operador && significa «y»: deben cumplirse ambas condiciones para que el resultado sea verdadero.';
  if(text.includes('??')) return 'Si el valor de la izquierda es nulo, utiliza el de la derecha; no cambia un texto no nulo aunque esté vacío.';
  if(text.includes('>= 18') || text.includes('>=18')) return 'Incluye el umbral: exactamente 18 cumple esta comparación; 17 no lo cumple.';
  if(text.includes('% 3')) return 'El resto de dividir entre tres produce el ciclo 0, 1 y 2; después de 2 vuelve a 0.';
  if(text.includes('switch')) return 'Selecciona una rama comparando el valor con los casos indicados; revisa también qué ocurre con una opción no reconocida.';
  if(/\s\?\s/.test(text) && text.includes(':')) return 'El operador condicional elige el valor situado después de ? cuando la condición es verdadera y el situado después de : cuando es falsa.';
  if(text.includes('$"')) return 'La cadena interpolada inserta los valores entre llaves dentro del texto; los caracteres fuera de las llaves permanecen literales.';
  if(text.includes('=>')) return 'Define el resultado de esta propiedad, método o rama con una expresión; identifica qué valor se devuelve.';
  if(text.startsWith('if')) return 'Comprueba la condición antes de entrar en el bloque; distingue la rama verdadera de la alternativa else.';
  if(text.startsWith('else')) return 'Esta alternativa se ejecuta cuando no se cumple la condición de la rama anterior.';
  if(text.startsWith('for')) {
    const loop=/for\s*\(int\s+(\w+)\s*=\s*(\d+);\s*\1\s*<\s*(\d+);/.exec(text);
    return loop?`El índice ${loop[1]} es int: empieza en ${loop[2]}, continúa mientras sea menor que ${loop[3]} y avanza con cada vuelta. Recorre desde ${loop[2]} hasta ${Number(loop[3])-1}, ambos incluidos.`:'Declara el índice, asigna su inicio y comprueba la condición antes de cada vuelta. El incremento se aplica al terminar cada repetición.';
  }
  if(text.includes('new ')) return 'Crea una instancia del tipo indicado. La variable declara su tipo explícitamente para distinguir el objeto de sus datos.';
  if(text.includes('.Add(') || text.includes('.Children.Add')) return 'Añade el objeto al contenedor o colección; crearlo sin añadirlo no basta para mostrarlo en la interfaz.';
  if(text.startsWith('return')) return 'Devuelve el resultado y termina esta ejecución del método.';
  if(text.startsWith('get')) return 'Define qué ocurre al leer la propiedad; puede validar o calcular en lugar de devolver un campo directamente.';
  if(text.startsWith('set')) return 'Define qué ocurre al asignar la propiedad; value representa el valor recibido desde el código que la utiliza.';
  const declaration=/^(public|private)\s+(?:(?:readonly|static)\s+)?([\w?.<>]+)\s+(\w+)/.exec(text);
  if(declaration)return `${declaration[3]} utiliza ${types[declaration[2]] || 'el tipo '+declaration[2]}. ${declaration[1]==='private'?'private limita el acceso a esta clase; el anfitrión no puede cambiar el campo directamente.':'public expone el miembro a quien usa la clase; un getter permite leerlo y un setter define cómo puede asignarse.'}`;
  if(text.includes('=')) return 'Asigna el valor de la derecha al destino de la izquierda; comprueba el tipo del destino y cuándo debe cambiar.';
  if(text.startsWith('<')) return 'Introduce un elemento del árbol XAML. Su contenedor determina dónde se muestra y sus atributos configuran el objeto.';
  return 'Esta instrucción forma parte de la operación de este paso; sigue su efecto sobre el estado antes de pasar al siguiente fragmento.';
}
