// Generado por scripts/lesson-examples.py. No editar a mano.
export default {
  "calc-en-csharp": {
    "code": "private readonly Entry visor = new Entry { IsReadOnly = true, HorizontalTextAlignment = TextAlignment.End };\n\npublic CalcEnCSharp()\n{\n    Title = \"Calculadora en C#\";\n    Grid teclado = new Grid { ColumnSpacing = 6, RowSpacing = 6 };\n    for (int indice = 0; indice < 3; indice++)\n    {\n        teclado.ColumnDefinitions.Add(new ColumnDefinition());\n    }\n    for (int digito = 1; digito <= 6; digito++)\n    {\n        Button boton = new Button { Text = digito.ToString() };\n        boton.Clicked += DigitosClick;\n        teclado.Add(boton, (digito - 1) % 3, (digito - 1) / 3);\n    }\n    // Content debe recibir el contenedor raíz; sin esto no se ve nada.\n    Content = new StackLayout { Padding = 20, Spacing = 8, Children = { visor, teclado } };\n}\n\nprivate void DigitosClick(object? sender, EventArgs e)\n{\n    if (sender is Button boton)\n    {\n        visor.Text += boton.Text;\n    }\n}",
    "language": "csharp"
  },
  "calc-evento-centralizado": {
    "code": "private void DigitoClick(object? sender, EventArgs e)\n{\n    // sender identifica qué botón se pulsó; no hace falta un método por dígito.\n    if (sender is not Button boton)\n    {\n        return;\n    }\n    visor.Text += boton.Text;\n}",
    "language": "csharp"
  },
  "cv-agrupar": {
    "code": "public class LoginView : ContentView\n{\n    private readonly Entry entradaUsuario = new Entry { Placeholder = \"Usuario\" };\n    private readonly Entry entradaClave = new Entry { Placeholder = \"Contraseña\", IsPassword = true };\n\n    public LoginView()\n    {\n        // La aplicación solo coloca un LoginView; no ve cómo se reparten sus hijos.\n        Content = new VerticalStackLayout { Spacing = 6, Children = { entradaUsuario, entradaClave } };\n    }\n}",
    "language": "csharp"
  },
  "cv-biblioteca": {
    "code": "private void MostrarClick(object? sender, EventArgs e)\n{\n    Type tipo = typeof(LoginView);\n    string ensamblado = tipo.Assembly.GetName().Name ?? \"desconocido\";\n    // Solo los tipos públicos pueden usarse desde otro proyecto que referencie el ensamblado.\n    etiquetaInfo.Text = $\"{tipo.Name} está en el ensamblado {ensamblado}. ¿Público? {tipo.IsPublic}\";\n}",
    "language": "csharp"
  },
  "cv-image": {
    "code": "<Image x:Name=\"imagen\" Source=\"figura\" Aspect=\"AspectFit\" WidthRequest=\"200\" HeightRequest=\"200\" BackgroundColor=\"LightGray\" />\n<HorizontalStackLayout Spacing=\"6\">\n    <Button Text=\"AspectFit\" Clicked=\"AjusteClick\" />\n    <Button Text=\"AspectFill\" Clicked=\"AjusteClick\" />\n    <Button Text=\"Fill\" Clicked=\"AjusteClick\" />\n</HorizontalStackLayout>",
    "language": "xml"
  },
  "edad-contrato": {
    "code": "private int mayoriaEdad = 18;\n\npublic int MayoriaEdad\n{\n    get => mayoriaEdad;\n    set\n    {\n        // La configuración debe ser superior a 12: el propio 12 no vale.\n        if (value <= 12)\n        {\n            throw new ArgumentOutOfRangeException(nameof(value), \"La mayoría de edad debe ser superior a 12.\");\n        }\n        mayoriaEdad = value;\n    }\n}",
    "language": "csharp"
  },
  "edad-integracion": {
    "code": "private void AsignarLimite(int nuevo)\n{\n    // Se rechaza antes de sustituir el valor anterior.\n    if (nuevo <= 12)\n    {\n        etiquetaResultado.Text = $\"Límite {nuevo} rechazado. Sigue valiendo {limite}.\";\n        return;\n    }\n    limite = nuevo;\n    etiquetaResultado.Text = $\"Límite: {limite}\";\n}\n\nprivate void AspectoClick(object? sender, EventArgs e)\n{\n    contenedor.Spacing = 30;\n    contenedor.Padding = new Thickness(40);\n    contenedor.BackgroundColor = Colors.Blue;\n}",
    "language": "csharp"
  },
  "edad-orden": {
    "code": "private static string Evaluar(DateTime nacimiento, DateTime hoy, int mayoria, out bool hayError)\n{\n    // 1. Una fecha futura tiene su propio mensaje.\n    if (nacimiento.Date > hoy.Date)\n    {\n        hayError = true;\n        return \"La fecha de nacimiento está en el futuro.\";\n    }\n    // 2. Solo entonces se calculan los años cumplidos.\n    int edad = hoy.Year - nacimiento.Year;\n    if (nacimiento.Date > hoy.Date.AddYears(-edad))\n    {\n        edad--;\n    }\n    // 3. Y por último se compara con el límite configurado.\n    hayError = edad < mayoria;\n    return hayError ? \"No eres mayor de edad\" : $\"Edad: {edad} años\";\n}\n\nprivate void FechaCambiada(object? sender, DateChangedEventArgs e)\n{\n    DateTime fecha = e.NewDate ?? DateTime.Today;\n    string mensaje = Evaluar(fecha, DateTime.Today, 18, out bool hayError);\n    etiquetaInfo.Text = mensaje;\n    etiquetaInfo.BackgroundColor = hayError ? Colors.Yellow : Colors.Transparent;\n}",
    "language": "csharp"
  },
  "el-anfitrion": {
    "code": "private void AlternarClick(object? sender, EventArgs e)\n{\n    // El anfitrión usa la propiedad pública; no toca los controles internos.\n    contrasena.Separacion = contrasena.Separacion == 4 ? 24 : 4;\n    etiquetaValor.Text = $\"Separación actual: {contrasena.Separacion}\";\n}",
    "language": "csharp"
  },
  "el-espaciado": {
    "code": "public class EntryContraseniaV1 : ContentView\n{\n    private readonly VerticalStackLayout pila = new VerticalStackLayout { Spacing = 4 };\n    private readonly Entry entrada = new Entry { IsPassword = true, Placeholder = \"Contraseña\" };\n    private readonly Label error = new Label { TextColor = Colors.Red, Text = \"Debe tener 10 caracteres.\" };\n\n    public EntryContraseniaV1()\n    {\n        pila.Children.Add(entrada);\n        pila.Children.Add(error);\n        Content = pila;\n    }\n\n    // Única propiedad personalizable en esta variante: el espaciado.\n    public double Separacion\n    {\n        get => pila.Spacing;\n        set => pila.Spacing = value;\n    }\n}",
    "language": "csharp"
  },
  "entorno-arranque": {
    "code": "public partial class EntornoArranque : ContentPage\n{\n    public EntornoArranque()\n    {\n        // Carga el árbol declarado en el XAML y crea los campos con x:Name.\n        InitializeComponent();\n        // Solo a partir de aquí etiquetaEstado deja de ser null.\n        etiquetaEstado.Text = \"InitializeComponent ya ha construido la interfaz.\";\n    }\n}",
    "language": "csharp"
  },
  "entorno-dispositivo": {
    "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>\n<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>\n<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
    "language": "xml"
  },
  "entorno-sdk": {
    "code": "<SupportedOSPlatformVersion Condition=\"$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'ios'\">15.0</SupportedOSPlatformVersion>\n<SupportedOSPlatformVersion Condition=\"$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'maccatalyst'\">17.0</SupportedOSPlatformVersion>\n<SupportedOSPlatformVersion Condition=\"$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'android'\">21.0</SupportedOSPlatformVersion>\n<SupportedOSPlatformVersion Condition=\"$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'windows'\">10.0.17763.0</SupportedOSPlatformVersion>\n<TargetPlatformMinVersion Condition=\"$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'windows'\">10.0.17763.0</TargetPlatformMinVersion>",
    "language": "xml"
  },
  "esp-componer": {
    "code": "public class CampoConError : ContentView\n{\n    private readonly Entry entrada = new Entry { Placeholder = \"Escribe algo\" };\n    private readonly Label error = new Label { TextColor = Colors.Red };\n\n    public CampoConError()\n    {\n        // Es un ContentView que CONTIENE un Entry; no es un Entry.\n        entrada.TextChanged += TextoCambiado;\n        Content = new VerticalStackLayout { Spacing = 4, Children = { entrada, error } };\n    }\n\n    private void TextoCambiado(object? sender, TextChangedEventArgs e)\n    {\n        error.Text = string.IsNullOrEmpty(e.NewTextValue) ? \"El campo no puede estar vacío.\" : \"\";\n    }\n}",
    "language": "csharp"
  },
  "esp-contrato": {
    "code": "public class EntryNombreUsuario : Entry\n{\n    public EntryNombreUsuario()\n    {\n        Placeholder = \"Usuario (5 a 15 letras)\";\n        MaxLength = 15;\n    }\n\n    public bool EsValido()\n    {\n        string texto = Text ?? \"\";\n        if (texto.Length < 5 || texto.Length > 15)\n        {\n            return false;\n        }\n        foreach (char letra in texto)\n        {\n            // Solo letras ASCII: sin acentos, dígitos ni signos.\n            bool esLetra = (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z');\n            if (!esLetra)\n            {\n                return false;\n            }\n        }\n        return true;\n    }\n}",
    "language": "csharp"
  },
  "esp-validar-al-pulsar": {
    "code": "private bool ValidarUsuario()\n{\n    bool valido = entradaUsuario.EsValido();\n    etiquetaError.Text = valido ? \"\" : \"Usuario no válido: de 5 a 15 letras sin acentos.\";\n    return valido;\n}\n\nprivate void UsuarioSinFoco(object? sender, FocusEventArgs e)\n{\n    ValidarUsuario();\n}\n\nprivate void EntrarClick(object? sender, EventArgs e)\n{\n    // El usuario puede pulsar sin haber pasado antes por el campo.\n    if (!ValidarUsuario())\n    {\n        return;\n    }\n    etiquetaError.Text = \"Acceso correcto\";\n}",
    "language": "csharp"
  },
  "ext-deviceinfo": {
    "code": "private void AplicarSegunPlataforma()\n{\n    DevicePlatform plataforma = DeviceInfo.Current.Platform;\n    // Se compara la plataforma, no si el dispositivo es físico o virtual.\n    if (plataforma == DevicePlatform.WinUI)\n    {\n        etiquetaPlataforma.Text = \"Windows: fuente 14\";\n        etiquetaPlataforma.FontSize = 14;\n    }\n    else if (plataforma == DevicePlatform.Android)\n    {\n        etiquetaPlataforma.Text = \"Android: fuente 18\";\n        etiquetaPlataforma.FontSize = 18;\n    }\n    else\n    {\n        etiquetaPlataforma.Text = $\"Otra plataforma: {plataforma}\";\n    }\n}",
    "language": "csharp"
  },
  "ext-pedido": {
    "code": "<VerticalStackLayout Spacing=\"{x:Static local:Medidas.Separacion}\"\n                     Padding=\"{x:Static local:Medidas.Relleno}\"\n                     BackgroundColor=\"{x:Static local:Medidas.Fondo}\">\n    <Label Text=\"Valores tomados de la clase Medidas\"\n           Margin=\"{x:Static local:Medidas.Margen}\"\n           FontSize=\"{x:Static local:Medidas.TamanoFuente}\" />\n</VerticalStackLayout>",
    "language": "xml"
  },
  "formulario-comprobaciones": {
    "code": "private static string? ComprobarDatos(string nombre, string apellidos, string textoEdad)\n{\n    if (nombre.Length < 3 || nombre.Length > 20)\n    {\n        return \"El nombre debe tener entre 3 y 20 caracteres.\";\n    }\n    if (apellidos.Length < 4 || apellidos.Length > 40)\n    {\n        return \"Los apellidos deben tener entre 4 y 40 caracteres.\";\n    }\n    if (!int.TryParse(textoEdad, out int edad) || edad < 5 || edad > 70)\n    {\n        return \"La edad debe ser un número entre 5 y 70.\";\n    }\n    return null;\n}\n\nprivate async void AccederClick(object? sender, EventArgs e)\n{\n    string? error = ComprobarDatos(entradaNombre.Text ?? \"\", entradaApellidos.Text ?? \"\", entradaEdad.Text ?? \"\");\n    if (error is not null)\n    {\n        await DisplayAlertAsync(\"Datos no válidos\", error, \"Aceptar\");\n        return;\n    }\n    int edad = int.Parse(entradaEdad.Text!);\n    etiquetaResultado.Text = edad >= 18 ? \"Bienvenido al sistema\" : \"No tiene acceso al sistema\";\n}",
    "language": "csharp"
  },
  "formulario-fronteras": {
    "code": "private static bool EstaEnRango(int valor, int minimo, int maximo)\n{\n    return valor >= minimo && valor <= maximo;\n}\n\nprivate void ProbarClick(object? sender, EventArgs e)\n{\n    int[] longitudes = { 2, 3, 20, 21 };\n    int[] edades = { 4, 5, 17, 18, 70, 71 };\n    StringBuilder tabla = new StringBuilder();\n    foreach (int longitud in longitudes)\n    {\n        tabla.AppendLine($\"Nombre de {longitud} caracteres: {(EstaEnRango(longitud, 3, 20) ? \"válido\" : \"no válido\")}\");\n    }\n    foreach (int edad in edades)\n    {\n        tabla.AppendLine($\"Edad {edad}: {(EstaEnRango(edad, 5, 70) ? \"válida\" : \"no válida\")}\");\n    }\n    etiquetaTabla.Text = tabla.ToString();\n}",
    "language": "csharp"
  },
  "formulario-modelo": {
    "code": "public class Usuario\n{\n    private string? nombre;\n\n    public string Nombre\n    {\n        // Leer un nombre que nunca se estableció es un error de uso.\n        get => nombre ?? throw new InvalidOperationException(\"El nombre no se ha establecido.\");\n        set\n        {\n            if (value.Length < 3 || value.Length > 20)\n            {\n                throw new ArgumentException(\"El nombre debe tener entre 3 y 20 caracteres.\");\n            }\n            nombre = value;\n        }\n    }\n}",
    "language": "csharp"
  },
  "ll-alineacion": {
    "code": "private void AlinearClick(object? sender, EventArgs e)\n{\n    if (sender is not Button boton)\n    {\n        return;\n    }\n    LayoutOptions opcion = boton.Text switch\n    {\n        \"Start\" => LayoutOptions.Start,\n        \"Center\" => LayoutOptions.Center,\n        \"End\" => LayoutOptions.End,\n        _ => LayoutOptions.Fill\n    };\n    // Cambia la posición de la Label dentro de su celda, no la del texto dentro de la Label.\n    etiquetaObjetivo.HorizontalOptions = opcion;\n}",
    "language": "csharp"
  },
  "ll-calculo": {
    "code": "public static class CalculoPropina\n{\n    public static (decimal Propina, decimal Total) Calcular(decimal cuenta, decimal porcentaje)\n    {\n        decimal propina = Math.Round(cuenta * porcentaje / 100, 2, MidpointRounding.AwayFromZero);\n        return (propina, cuenta + propina);\n    }\n\n    public static (decimal Propina, decimal Total) RedondearTotal(decimal cuenta, decimal total, bool arriba)\n    {\n        decimal nuevoTotal = arriba ? Math.Ceiling(total) : Math.Floor(total);\n        // La propina pasa a ser la diferencia con la cuenta original.\n        return (nuevoTotal - cuenta, nuevoTotal);\n    }\n}",
    "language": "csharp"
  },
  "ll-grid": {
    "code": "<Grid Padding=\"20\" ColumnSpacing=\"10\" RowSpacing=\"8\"\n      RowDefinitions=\"Auto,Auto,Auto,*,Auto,Auto,Auto\"\n      ColumnDefinitions=\"*,*\">\n    <Label Text=\"Cuenta:\" Grid.Row=\"0\" Grid.Column=\"0\" />\n    <Entry Placeholder=\"0,00\" Grid.Row=\"0\" Grid.Column=\"1\" />\n    <Label Text=\"Propina:\" Grid.Row=\"1\" Grid.Column=\"0\" />\n    <Label Text=\"0,00\" Grid.Row=\"1\" Grid.Column=\"1\" />\n    <Label Text=\"Total:\" Grid.Row=\"2\" Grid.Column=\"0\" />\n    <Label Text=\"0,00\" Grid.Row=\"2\" Grid.Column=\"1\" />\n    <Slider Minimum=\"0\" Maximum=\"30\" Value=\"15\" Grid.Row=\"3\" Grid.ColumnSpan=\"2\" VerticalOptions=\"Center\" />\n    <Button Text=\"15%\" Grid.Row=\"4\" Grid.Column=\"0\" />\n    <Button Text=\"20%\" Grid.Row=\"4\" Grid.Column=\"1\" />\n    <Button Text=\"Redondear abajo\" Grid.Row=\"5\" Grid.Column=\"0\" />\n    <Button Text=\"Redondear arriba\" Grid.Row=\"5\" Grid.Column=\"1\" />\n    <Label Text=\"Los índices empiezan en cero.\" Grid.Row=\"6\" Grid.ColumnSpan=\"2\" />\n</Grid>",
    "language": "xml"
  },
  "ll-pila": {
    "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"8\">\n    <HorizontalStackLayout Spacing=\"10\">\n        <Label Text=\"Cuenta:\" />\n        <Entry Placeholder=\"0,00\" WidthRequest=\"120\" />\n    </HorizontalStackLayout>\n    <HorizontalStackLayout Spacing=\"10\">\n        <Label Text=\"Propina:\" />\n        <Label Text=\"0,00\" />\n    </HorizontalStackLayout>\n    <HorizontalStackLayout Spacing=\"10\">\n        <Label Text=\"Total:\" />\n        <Label Text=\"0,00\" />\n    </HorizontalStackLayout>\n    <HorizontalStackLayout Spacing=\"6\">\n        <Button Text=\"15%\" />\n        <Button Text=\"20%\" />\n    </HorizontalStackLayout>\n</VerticalStackLayout>",
    "language": "xml"
  },
  "ll-validar": {
    "code": "private void ComprobarClick(object? sender, EventArgs e)\n{\n    // (cuenta, porcentaje, propina esperada, total esperado) calculados a mano.\n    (decimal Cuenta, decimal Porcentaje, decimal Propina, decimal Total)[] casos =\n    {\n        (100m, 15m, 15m, 115m),\n        (80m, 20m, 16m, 96m),\n        (45.50m, 10m, 4.55m, 50.05m)\n    };\n    StringBuilder tabla = new StringBuilder();\n    foreach ((decimal cuenta, decimal porcentaje, decimal propinaEsperada, decimal totalEsperado) in casos)\n    {\n        (decimal propina, decimal total) = CalculoPropina.Calcular(cuenta, porcentaje);\n        bool correcto = propina == propinaEsperada && total == totalEsperado;\n        tabla.AppendLine($\"{cuenta} al {porcentaje}%: {(correcto ? \"correcto\" : \"FALLO\")}\");\n    }\n    etiquetaTabla.Text = tabla.ToString();\n}",
    "language": "csharp"
  },
  "lm-comprobar": {
    "code": "private void EstadoClick(object? sender, EventArgs e)\n{\n    // Location es la ruta actual dentro del Shell; la pila cuenta las páginas apiladas.\n    string ubicacion = Shell.Current.CurrentState.Location.ToString();\n    int apiladas = Navigation.NavigationStack.Count;\n    etiquetaEstado.Text = $\"Ruta: {ubicacion}. Páginas en la pila: {apiladas}.\";\n}",
    "language": "csharp"
  },
  "lm-detalle": {
    "code": "private async void CuerpoClick(object? sender, EventArgs e)\n{\n    if (sender is not Button boton)\n    {\n        return;\n    }\n    // La página de detalle se apila sobre la lista; Atrás vuelve a ella.\n    await Navigation.PushAsync(new CuerpoDetalle(boton.Text));\n}",
    "language": "csharp"
  },
  "lm-flyout": {
    "code": "<FlyoutItem Title=\"Astronomía\" FlyoutDisplayOptions=\"AsMultipleItems\">\n    <ShellContent Title=\"Cuerpos\" ContentTemplate=\"{DataTemplate local:LmDetalle}\" />\n    <ShellContent Title=\"Comprobar\" ContentTemplate=\"{DataTemplate local:LmComprobar}\" />\n</FlyoutItem>",
    "language": "xml"
  },
  "lm-paginas": {
    "code": "<Shell.FlyoutHeader>\n    <Label Text=\"Ejemplos de estudio\" FontSize=\"20\" Padding=\"16\" />\n</Shell.FlyoutHeader>",
    "language": "xml"
  },
  "lm-pestanas": {
    "code": "<FlyoutItem Title=\"Pestañas\">\n    <Tab Title=\"Cuerpos\">\n        <ShellContent Title=\"Cuerpos\" ContentTemplate=\"{DataTemplate local:LmDetalle}\" />\n    </Tab>\n    <Tab Title=\"Comprobar\">\n        <ShellContent Title=\"Comprobar\" ContentTemplate=\"{DataTemplate local:LmComprobar}\" />\n    </Tab>\n</FlyoutItem>",
    "language": "xml"
  },
  "lp-arquitectura": {
    "code": "protected override Window CreateWindow(IActivationState? activationState)\n{\n    // App crea la ventana y la ventana aloja el Shell.\n    return new Window(new AppShell());\n}",
    "language": "csharp"
  },
  "lp-contador": {
    "code": "private int cuenta = 0;\n\nprivate void ContarClick(object? sender, EventArgs e)\n{\n    // El incremento original era 1; el ejercicio lo cambia a 5.\n    cuenta += 5;\n    etiquetaCuenta.Text = $\"Valor: {cuenta}\";\n}",
    "language": "csharp"
  },
  "lp-habilitar": {
    "code": "private string? numeroTraducido;\n\nprivate void TraducirClick(object? sender, EventArgs e)\n{\n    numeroTraducido = TraductorTelefono.ANumero(entradaTexto.Text);\n    botonLlamar.IsEnabled = numeroTraducido is not null;\n    etiquetaEstado.Text = numeroTraducido ?? \"Texto no válido\";\n}\n\nprivate void TextoCambiado(object? sender, TextChangedEventArgs e)\n{\n    // Si el texto cambia, el número traducido ya no corresponde a lo que se ve.\n    numeroTraducido = null;\n    botonLlamar.IsEnabled = false;\n}\n\nprivate async void LlamarClick(object? sender, EventArgs e)\n{\n    if (numeroTraducido is null)\n    {\n        return;\n    }\n    bool confirmado = await DisplayAlertAsync(\"Llamar\", $\"¿Llamar al {numeroTraducido}?\", \"Llamar\", \"Cancelar\");\n    if (!confirmado)\n    {\n        return;\n    }\n    if (PhoneDialer.Default.IsSupported)\n    {\n        PhoneDialer.Default.Open(numeroTraducido);\n    }\n    else\n    {\n        etiquetaEstado.Text = \"Este dispositivo no puede abrir el marcador.\";\n    }\n}",
    "language": "csharp"
  },
  "lp-phoneword": {
    "code": "public static class TraductorTelefono\n{\n    private static readonly string[] Grupos = { \"ABC\", \"DEF\", \"GHI\", \"JKL\", \"MNO\", \"PQRS\", \"TUV\", \"WXYZ\" };\n\n    public static string? ANumero(string? texto)\n    {\n        if (string.IsNullOrWhiteSpace(texto))\n        {\n            return null;\n        }\n        StringBuilder resultado = new StringBuilder();\n        foreach (char caracter in texto.ToUpperInvariant())\n        {\n            if (char.IsDigit(caracter) || caracter == ' ' || caracter == '-')\n            {\n                resultado.Append(caracter);\n                continue;\n            }\n            int grupo = Array.FindIndex(Grupos, g => g.Contains(caracter));\n            if (grupo < 0)\n            {\n                return null;\n            }\n            // El grupo 0 (ABC) corresponde al dígito 2.\n            resultado.Append(grupo + 2);\n        }\n        return resultado.ToString();\n    }\n}",
    "language": "csharp"
  },
  "lp-plataforma": {
    "code": "<queries>\n\t<intent>\n\t\t<action android:name=\"android.intent.action.DIAL\" />\n\t\t<data android:scheme=\"tel\" />\n\t</intent>\n</queries>",
    "language": "xml"
  },
  "lr-app": {
    "code": "<Color x:Key=\"colorAplicacion\">#512BD4</Color>\n<x:Double x:Key=\"tamanoTitulo\">22</x:Double>\n<Style x:Key=\"estiloAviso\" TargetType=\"Label\">\n    <Setter Property=\"TextColor\" Value=\"{StaticResource colorAplicacion}\" />\n    <Setter Property=\"FontSize\" Value=\"{StaticResource tamanoTitulo}\" />\n</Style>",
    "language": "xml"
  },
  "lr-comparar": {
    "code": "private bool alterno = false;\n\nprivate void AlternarClick(object? sender, EventArgs e)\n{\n    if (Application.Current is null)\n    {\n        return;\n    }\n    alterno = !alterno;\n    // Se cambia el diccionario de la aplicación, no cada control.\n    Application.Current.Resources[\"colorAplicacion\"] = alterno ? Colors.Red : Color.FromArgb(\"#512BD4\");\n}",
    "language": "csharp"
  },
  "lr-dinamico": {
    "code": "private void ClaroClick(object? sender, EventArgs e)\n{\n    Resources[\"fgColor\"] = Colors.Black;\n    Resources[\"bgColor\"] = Colors.White;\n}\n\nprivate void OscuroClick(object? sender, EventArgs e)\n{\n    // Se sustituyen solo dos valores; las etiquetas se actualizan solas.\n    Resources[\"fgColor\"] = Colors.White;\n    Resources[\"bgColor\"] = Colors.Black;\n}",
    "language": "csharp"
  },
  "lr-pagina": {
    "code": "<ContentPage.Resources>\n    <Color x:Key=\"fgColor\">DarkSlateBlue</Color>\n    <Color x:Key=\"bgColor\">Lavender</Color>\n    <x:Double x:Key=\"tamanoTexto\">20</x:Double>\n</ContentPage.Resources>",
    "language": "xml"
  },
  "lr-style": {
    "code": "<Style x:Key=\"infoLabelStyle\" TargetType=\"Label\">\n    <Setter Property=\"TextColor\" Value=\"{StaticResource fgColor}\" />\n    <Setter Property=\"FontSize\" Value=\"{StaticResource tamanoTexto}\" />\n    <Setter Property=\"FontAttributes\" Value=\"Italic\" />\n</Style>",
    "language": "xml"
  },
  "lx-errores": {
    "code": "private async void GuardarClick(object? sender, EventArgs e)\n{\n    string destino = Path.Combine(FileSystem.AppDataDirectory, \"notas-protegidas.txt\");\n    string temporal = destino + \".tmp\";\n    try\n    {\n        // Primero un archivo temporal: si falla aquí, la nota anterior sigue intacta.\n        File.WriteAllText(temporal, editor.Text ?? \"\");\n        File.Move(temporal, destino, true);\n    }\n    catch (IOException ex)\n    {\n        await DisplayAlertAsync(\"No se pudo guardar\", ex.Message, \"Aceptar\");\n    }\n    catch (UnauthorizedAccessException ex)\n    {\n        await DisplayAlertAsync(\"Sin permiso para guardar\", ex.Message, \"Aceptar\");\n    }\n}",
    "language": "csharp"
  },
  "lx-eventos": {
    "code": "private static readonly string RutaNota = Path.Combine(FileSystem.AppDataDirectory, \"notas.txt\");\n\nprivate void GuardarClick(object? sender, EventArgs e)\n{\n    File.WriteAllText(RutaNota, editor.Text ?? \"\");\n}\n\nprivate void BorrarClick(object? sender, EventArgs e)\n{\n    if (File.Exists(RutaNota))\n    {\n        File.Delete(RutaNota);\n    }\n    editor.Text = \"\";\n}",
    "language": "csharp"
  },
  "lx-onplatform": {
    "code": "<Editor Placeholder=\"Altura según plataforma\"\n        HeightRequest=\"{OnPlatform WinUI=100, Android=220, iOS=220, Default=140}\" />",
    "language": "xml"
  },
  "lx-static": {
    "code": "public static class SharedResources\n{\n    public static readonly Color ColorFondo = Colors.WhiteSmoke;\n    public static readonly Color ColorTexto = Colors.DarkSlateBlue;\n    public static readonly Color ColorEditor = Colors.LightYellow;\n    public static readonly Color ColorBoton = Colors.MediumSeaGreen;\n}",
    "language": "csharp"
  },
  "lx-xaml": {
    "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\">\n    <Label Text=\"Notas\" FontSize=\"22\" />\n    <Editor x:Name=\"editor\" Placeholder=\"Escribe una nota\" HeightRequest=\"140\" />\n    <Grid ColumnDefinitions=\"*,*\" ColumnSpacing=\"10\">\n        <Button Text=\"Guardar\" Grid.Column=\"0\" />\n        <Button Text=\"Borrar\" Grid.Column=\"1\" />\n    </Grid>\n</VerticalStackLayout>",
    "language": "xml"
  },
  "matricula-aviso": {
    "code": "private void MostrarError(string mensaje)\n{\n    etiquetaInfo.Text = mensaje;\n    etiquetaInfo.BackgroundColor = Colors.Yellow;\n}\n\nprivate void LimpiarError()\n{\n    // Hay que deshacer las dos cosas: el texto y el fondo.\n    etiquetaInfo.Text = \"\";\n    etiquetaInfo.BackgroundColor = Colors.Transparent;\n}\n\nprivate void TextoCambiado(object? sender, TextChangedEventArgs e)\n{\n    string texto = e.NewTextValue ?? \"\";\n    if (Regex.IsMatch(texto.ToUpperInvariant(), \"^[0-9]{4}-[BCDFGHJKLMNÑPQRSTVWXYZ]{3}$\"))\n    {\n        LimpiarError();\n    }\n    else\n    {\n        MostrarError(\"Formato esperado: 0000-BBB, sin vocales.\");\n    }\n}",
    "language": "csharp"
  },
  "matricula-formato": {
    "code": "private static bool EsMatriculaValida(string texto)\n{\n    // Cuatro dígitos, un guion y tres letras que no sean vocales: 8 caracteres.\n    if (texto.Length != 8 || texto[4] != '-')\n    {\n        return false;\n    }\n    for (int posicion = 0; posicion < 4; posicion++)\n    {\n        if (!char.IsDigit(texto[posicion]))\n        {\n            return false;\n        }\n    }\n    for (int posicion = 5; posicion < 8; posicion++)\n    {\n        char letra = char.ToUpperInvariant(texto[posicion]);\n        if (!char.IsLetter(letra) || \"AEIOU\".Contains(letra))\n        {\n            return false;\n        }\n    }\n    return true;\n}\n\nprivate void ComprobarClick(object? sender, EventArgs e)\n{\n    string texto = entradaMatricula.Text ?? \"\";\n    etiquetaResultado.Text = EsMatriculaValida(texto) ? \"Formato correcto\" : \"Formato incorrecto\";\n}",
    "language": "csharp"
  },
  "matricula-propiedad": {
    "code": "public string Matricula\n{\n    get => matricula;\n    set\n    {\n        // Se valida antes de almacenar y antes de tocar el Entry.\n        if (!Regex.IsMatch(value, \"^[0-9]{4}-[BCDFGHJKLMNÑPQRSTVWXYZ]{3}$\"))\n        {\n            throw new ArgumentException(\"La matrícula debe tener el formato 0000-BBB.\");\n        }\n        matricula = value;\n        entradaMatricula.Text = value;\n    }\n}",
    "language": "csharp"
  },
  "nav-integrar": {
    "code": "<FlyoutItem Title=\"Integración\">\n    <ShellContent Title=\"Verificar destino\" ContentTemplate=\"{DataTemplate local:NavVerificar}\" />\n    <ShellContent Title=\"Tablero\" ContentTemplate=\"{DataTemplate local:TableroCicloColor}\" />\n</FlyoutItem>",
    "language": "xml"
  },
  "nav-verificar": {
    "code": "private void ComprobarClick(object? sender, EventArgs e)\n{\n    // CurrentPage es la ContentPage que Shell ha creado para este destino.\n    Page? actual = Shell.Current.CurrentPage;\n    string nombre = actual is null ? \"ninguna\" : actual.GetType().Name;\n    int destinos = Shell.Current.Items.Count;\n    etiquetaPagina.Text = $\"Página mostrada: {nombre}. Entradas de menú: {destinos}.\";\n}",
    "language": "csharp"
  },
  "rec-ambito": {
    "code": "<ContentView>\n    <ContentView.Resources>\n        <ResourceDictionary>\n            <Color x:Key=\"colorEtiqueta\">DarkGreen</Color>\n            <Color x:Key=\"colorEntrada\">DarkRed</Color>\n            <x:Double x:Key=\"tamanoEtiqueta\">20</x:Double>\n        </ResourceDictionary>\n    </ContentView.Resources>\n    <VerticalStackLayout Spacing=\"8\">\n        <Label Text=\"Etiqueta con recursos del ContentView\"\n               TextColor=\"{StaticResource colorEtiqueta}\"\n               FontSize=\"{StaticResource tamanoEtiqueta}\" />\n        <Entry Text=\"Entrada con otra clave\" TextColor=\"{StaticResource colorEntrada}\" />\n    </VerticalStackLayout>\n</ContentView>",
    "language": "xml"
  },
  "rec-estilos": {
    "code": "<Style TargetType=\"Label\">\n    <Setter Property=\"FontSize\" Value=\"16\" />\n</Style>\n<Style x:Key=\"estiloAviso\" TargetType=\"Label\">\n    <Setter Property=\"TextColor\" Value=\"DarkRed\" />\n    <Setter Property=\"FontAttributes\" Value=\"Bold\" />\n    <Setter Property=\"BackgroundColor\" Value=\"LightYellow\" />\n</Style>",
    "language": "xml"
  },
  "rec-verificar": {
    "code": "private void CambiarClick(object? sender, EventArgs e)\n{\n    // Sustituir el valor de la clave: solo el consumidor dinámico se entera.\n    Resources[\"colorTexto\"] = Colors.Red;\n}",
    "language": "csharp"
  },
  "tablero-ciclo-color": {
    "code": "public enum EstadoColor { Original, Verde, Rojo }\n\npublic class BotonCiclico : Button\n{\n    private EstadoColor estado = EstadoColor.Original;\n    private readonly Color colorOriginal = Colors.SteelBlue;\n\n    public BotonCiclico()\n    {\n        BackgroundColor = colorOriginal;\n        Clicked += AlPulsar;\n    }\n\n    private void AlPulsar(object? sender, EventArgs e)\n    {\n        // El estado es un campo de este botón: pulsar otro no lo altera.\n        estado = estado switch\n        {\n            EstadoColor.Original => EstadoColor.Verde,\n            EstadoColor.Verde => EstadoColor.Rojo,\n            _ => EstadoColor.Original\n        };\n        BackgroundColor = estado switch\n        {\n            EstadoColor.Verde => Colors.Green,\n            EstadoColor.Rojo => Colors.Red,\n            _ => colorOriginal\n        };\n    }\n}",
    "language": "csharp"
  },
  "tablero-sender-text": {
    "code": "private void GenerarTablero()\n{\n    for (int indice = 0; indice < 5; indice++)\n    {\n        tablero.RowDefinitions.Add(new RowDefinition());\n        tablero.ColumnDefinitions.Add(new ColumnDefinition());\n    }\n    for (int fila = 0; fila < 5; fila++)\n    {\n        for (int columna = 0; columna < 5; columna++)\n        {\n            Button boton = new Button { Text = (fila * 5 + columna + 1).ToString() };\n            boton.Clicked += BotonPulsado;\n            tablero.Add(boton, columna, fila);\n        }\n    }\n}\n\nprivate void BotonPulsado(object? sender, EventArgs e)\n{\n    // sender es el botón que disparó el evento; su Text ya está fijado.\n    if (sender is not Button boton)\n    {\n        return;\n    }\n    etiquetaMensaje.Text = $\"Has pulsado el botón {boton.Text}\";\n}",
    "language": "csharp"
  },
  "xl-boxview-slider": {
    "code": "private void ValorCambiado(object? sender, ValueChangedEventArgs e)\n{\n    // NewValue es un double dentro del intervalo Minimum..Maximum.\n    rectangulo.WidthRequest = e.NewValue;\n    etiquetaValor.Text = $\"Ancho: {e.NewValue:F0}\";\n}",
    "language": "csharp"
  },
  "xl-controles": {
    "code": "<Label x:Name=\"etiquetaSaludo\" Text=\"Escribe tu nombre\" FontSize=\"18\" TextColor=\"DarkSlateBlue\" HorizontalTextAlignment=\"Center\" />\n<Entry x:Name=\"entradaNombre\" Placeholder=\"Nombre\" />\n<Entry x:Name=\"entradaClave\" Placeholder=\"Contraseña\" IsPassword=\"True\" />\n<Button Text=\"Saludar\" Clicked=\"SaludarClick\" />",
    "language": "xml"
  },
  "xl-espaciado": {
    "code": "<VerticalStackLayout BackgroundColor=\"LightBlue\" Padding=\"30\" Spacing=\"20\">\n    <Label Text=\"Padding 30: espacio dentro de la pila\" BackgroundColor=\"White\" />\n    <Label Text=\"Spacing 20: separa los hijos entre sí\" BackgroundColor=\"White\" />\n    <Label Text=\"Margin 15: espacio fuera de esta etiqueta\" BackgroundColor=\"White\" Margin=\"15\" />\n</VerticalStackLayout>",
    "language": "xml"
  },
  "xl-stack": {
    "code": "<StackLayout Orientation=\"Vertical\" Padding=\"20\" Spacing=\"10\">\n    <Label Text=\"Nombre\" />\n    <StackLayout Orientation=\"Horizontal\" Spacing=\"8\">\n        <Entry Placeholder=\"Nombre\" WidthRequest=\"140\" />\n        <Button Text=\"Aceptar\" />\n    </StackLayout>\n    <Label Text=\"Cada StackLayout ordena en una sola dirección.\" />\n</StackLayout>",
    "language": "xml"
  }
};
