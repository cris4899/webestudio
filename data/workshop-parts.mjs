// Generado desde los archivos de los ZIP: no editar a mano.
export default {
  "relacion-1/Relacion1E01_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-1/Relacion1E01_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Ejercicio01.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio01",
      "kind": "clase",
      "code": "public partial class Ejercicio01 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio01",
      "kind": "constructor",
      "code": "public Ejercicio01()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Ejercicio02.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio02",
      "kind": "clase",
      "code": "public partial class Ejercicio02 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio02",
      "kind": "constructor",
      "code": "public Ejercicio02()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-1/Relacion1E01_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-1/Relacion1E01_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Usuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Usuario",
      "kind": "clase",
      "code": "public class Usuario\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Nombre",
      "kind": "propiedad",
      "code": "public string Nombre { get; }",
      "context": "",
      "line": 4
    },
    {
      "name": "Apellidos",
      "kind": "propiedad",
      "code": "public string Apellidos { get; }",
      "context": "",
      "line": 5
    },
    {
      "name": "Edad",
      "kind": "propiedad",
      "code": "public int Edad { get; }",
      "context": "",
      "line": 6
    },
    {
      "name": "Usuario",
      "kind": "constructor",
      "code": "public Usuario(string? nombre, string? apellidos, string? edad)\n    {\n        Nombre = Reglas.Texto(nombre, 3, 20, \"Nombre\");\n        Apellidos = Reglas.Texto(apellidos, 4, 40, \"Apellidos\");\n        Edad = Reglas.EdadEntrada(edad);\n    }",
      "context": "",
      "line": 8
    },
    {
      "name": "Mensaje",
      "kind": "propiedad",
      "code": "public string Mensaje => $\"{Apellidos}, {Nombre}:\\n\" + (Edad >= 18 ? \"Tiene acceso al sistema\" : \"No tiene acceso al sistema\");",
      "context": "",
      "line": 15
    }
  ],
  "relacion-1/Relacion1E02_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-1/Relacion1E02_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Ejercicio01.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio01",
      "kind": "clase",
      "code": "public partial class Ejercicio01 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio01",
      "kind": "constructor",
      "code": "public Ejercicio01()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Ejercicio02.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio02",
      "kind": "clase",
      "code": "public partial class Ejercicio02 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio02",
      "kind": "constructor",
      "code": "public Ejercicio02()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-1/Relacion1E02_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-1/Relacion1E02_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Usuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Usuario",
      "kind": "clase",
      "code": "public class Usuario\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Nombre",
      "kind": "propiedad",
      "code": "public string Nombre { get; }",
      "context": "",
      "line": 4
    },
    {
      "name": "Apellidos",
      "kind": "propiedad",
      "code": "public string Apellidos { get; }",
      "context": "",
      "line": 5
    },
    {
      "name": "Edad",
      "kind": "propiedad",
      "code": "public int Edad { get; }",
      "context": "",
      "line": 6
    },
    {
      "name": "Usuario",
      "kind": "constructor",
      "code": "public Usuario(string? nombre, string? apellidos, string? edad)\n    {\n        Nombre = Reglas.Texto(nombre, 3, 20, \"Nombre\");\n        Apellidos = Reglas.Texto(apellidos, 4, 40, \"Apellidos\");\n        Edad = Reglas.EdadEntrada(edad);\n    }",
      "context": "",
      "line": 8
    },
    {
      "name": "Mensaje",
      "kind": "propiedad",
      "code": "public string Mensaje => $\"{Apellidos}, {Nombre}:\\n\" + (Edad >= 18 ? \"Tiene acceso al sistema\" : \"No tiene acceso al sistema\");",
      "context": "",
      "line": 15
    }
  ],
  "relacion-2/Relacion2_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-2/Relacion2_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-2/Relacion2_Estudio/Calculadora.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Calculadora",
      "kind": "clase",
      "code": "public class Calculadora\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Visor",
      "kind": "propiedad",
      "code": "public string Visor { get; private set; } = \"\";",
      "context": "",
      "line": 4
    },
    {
      "name": "primero",
      "kind": "campo",
      "code": "private int? primero;",
      "context": "",
      "line": 6
    },
    {
      "name": "operador",
      "kind": "campo",
      "code": "private char? operador;",
      "context": "",
      "line": 7
    },
    {
      "name": "resultado",
      "kind": "campo",
      "code": "private bool resultado;",
      "context": "",
      "line": 8
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "public void Digito(string valor)\n    {\n        if (resultado)\n            Limpiar();\n        if (valor.Length != 1 || valor[0] < '0' || valor[0] > '9')\n            throw new ArgumentException(\"Dígito no válido.\");\n        Visor += valor;\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Limpiar",
      "kind": "método",
      "code": "public void Limpiar()\n    {\n        Visor = \"\";\n        primero = null;\n        operador = null;\n        resultado = false;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (!int.TryParse(Visor, out int numero))\n            throw new ArgumentException(\"Introduce un entero dentro del rango de int.\");",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 28
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "if (tecla == '=')\n        {\n            if (primero is null || operador is null)\n                throw new ArgumentException(\"Falta la operación.\");\n            Visor = Reglas.Operar(primero.Value, numero, operador.Value).ToString();\n            primero = null;\n            operador = null;\n            resultado = true;\n        }\n        else\n        {\n            if (operador is not null)\n                throw new ArgumentException(\"Ya has seleccionado una operación.\");\n            primero = numero;\n            operador = tecla;\n            Visor = \"\";\n            resultado = false;\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio01.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio01",
      "kind": "clase",
      "code": "public partial class Ejercicio01 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio01",
      "kind": "constructor",
      "code": "public Ejercicio01()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 9
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 10
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio02.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio02",
      "kind": "clase",
      "code": "public partial class Ejercicio02 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio02",
      "kind": "constructor",
      "code": "public Ejercicio02()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 9
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 10
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio03.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio03",
      "kind": "clase",
      "code": "public class Ejercicio03 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "visor",
      "kind": "campo",
      "code": "private readonly Entry visor = new()\n    {\n        IsReadOnly = true\n    };",
      "context": "",
      "line": 4
    },
    {
      "name": "Ejercicio03 · operación 1",
      "kind": "constructor",
      "code": "Title = \"Calculadora Stack C#\";",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 10
    },
    {
      "name": "Ejercicio03 · root",
      "kind": "constructor",
      "code": "StackLayout root = new StackLayout\n        {\n            Padding = 20,\n            Spacing = 6,\n            Orientation = StackOrientation.Vertical\n        };\n        root.Children.Add(visor);",
      "context": "Dentro de Ejercicio03: crea y configura root antes de continuar.",
      "line": 11
    },
    {
      "name": "Ejercicio03 · operación 2",
      "kind": "constructor",
      "code": "StackLayout fila0 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 18
    },
    {
      "name": "Ejercicio03 · operación 3",
      "kind": "constructor",
      "code": "root.Children.Add(fila0);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    },
    {
      "name": "Ejercicio03 · b00",
      "kind": "constructor",
      "code": "Button b00 = new Button\n        {\n            Text = \"7\",\n            WidthRequest = 65\n        };\n        b00.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b00 antes de continuar.",
      "line": 24
    },
    {
      "name": "Ejercicio03 · operación 4",
      "kind": "constructor",
      "code": "fila0.Children.Add(b00);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    },
    {
      "name": "Ejercicio03 · b01",
      "kind": "constructor",
      "code": "Button b01 = new Button\n        {\n            Text = \"8\",\n            WidthRequest = 65\n        };\n        b01.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b01 antes de continuar.",
      "line": 31
    },
    {
      "name": "Ejercicio03 · operación 5",
      "kind": "constructor",
      "code": "fila0.Children.Add(b01);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 37
    },
    {
      "name": "Ejercicio03 · b02",
      "kind": "constructor",
      "code": "Button b02 = new Button\n        {\n            Text = \"9\",\n            WidthRequest = 65\n        };\n        b02.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b02 antes de continuar.",
      "line": 38
    },
    {
      "name": "Ejercicio03 · operación 6",
      "kind": "constructor",
      "code": "fila0.Children.Add(b02);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 44
    },
    {
      "name": "Ejercicio03 · b03",
      "kind": "constructor",
      "code": "Button b03 = new Button\n        {\n            Text = \"×\",\n            WidthRequest = 65\n        };\n        b03.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b03 antes de continuar.",
      "line": 45
    },
    {
      "name": "Ejercicio03 · operación 7",
      "kind": "constructor",
      "code": "fila0.Children.Add(b03);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 51
    },
    {
      "name": "Ejercicio03 · operación 8",
      "kind": "constructor",
      "code": "StackLayout fila1 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 52
    },
    {
      "name": "Ejercicio03 · operación 9",
      "kind": "constructor",
      "code": "root.Children.Add(fila1);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 57
    },
    {
      "name": "Ejercicio03 · b10",
      "kind": "constructor",
      "code": "Button b10 = new Button\n        {\n            Text = \"4\",\n            WidthRequest = 65\n        };\n        b10.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b10 antes de continuar.",
      "line": 58
    },
    {
      "name": "Ejercicio03 · operación 10",
      "kind": "constructor",
      "code": "fila1.Children.Add(b10);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 64
    },
    {
      "name": "Ejercicio03 · b11",
      "kind": "constructor",
      "code": "Button b11 = new Button\n        {\n            Text = \"5\",\n            WidthRequest = 65\n        };\n        b11.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b11 antes de continuar.",
      "line": 65
    },
    {
      "name": "Ejercicio03 · operación 11",
      "kind": "constructor",
      "code": "fila1.Children.Add(b11);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 71
    },
    {
      "name": "Ejercicio03 · b12",
      "kind": "constructor",
      "code": "Button b12 = new Button\n        {\n            Text = \"6\",\n            WidthRequest = 65\n        };\n        b12.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b12 antes de continuar.",
      "line": 72
    },
    {
      "name": "Ejercicio03 · operación 12",
      "kind": "constructor",
      "code": "fila1.Children.Add(b12);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 78
    },
    {
      "name": "Ejercicio03 · b13",
      "kind": "constructor",
      "code": "Button b13 = new Button\n        {\n            Text = \"+\",\n            WidthRequest = 65\n        };\n        b13.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b13 antes de continuar.",
      "line": 79
    },
    {
      "name": "Ejercicio03 · operación 13",
      "kind": "constructor",
      "code": "fila1.Children.Add(b13);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 85
    },
    {
      "name": "Ejercicio03 · operación 14",
      "kind": "constructor",
      "code": "StackLayout fila2 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 86
    },
    {
      "name": "Ejercicio03 · operación 15",
      "kind": "constructor",
      "code": "root.Children.Add(fila2);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 91
    },
    {
      "name": "Ejercicio03 · b20",
      "kind": "constructor",
      "code": "Button b20 = new Button\n        {\n            Text = \"1\",\n            WidthRequest = 65\n        };\n        b20.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b20 antes de continuar.",
      "line": 92
    },
    {
      "name": "Ejercicio03 · operación 16",
      "kind": "constructor",
      "code": "fila2.Children.Add(b20);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 98
    },
    {
      "name": "Ejercicio03 · b21",
      "kind": "constructor",
      "code": "Button b21 = new Button\n        {\n            Text = \"2\",\n            WidthRequest = 65\n        };\n        b21.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b21 antes de continuar.",
      "line": 99
    },
    {
      "name": "Ejercicio03 · operación 17",
      "kind": "constructor",
      "code": "fila2.Children.Add(b21);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 105
    },
    {
      "name": "Ejercicio03 · b22",
      "kind": "constructor",
      "code": "Button b22 = new Button\n        {\n            Text = \"3\",\n            WidthRequest = 65\n        };\n        b22.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b22 antes de continuar.",
      "line": 106
    },
    {
      "name": "Ejercicio03 · operación 18",
      "kind": "constructor",
      "code": "fila2.Children.Add(b22);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 112
    },
    {
      "name": "Ejercicio03 · b23",
      "kind": "constructor",
      "code": "Button b23 = new Button\n        {\n            Text = \"÷\",\n            WidthRequest = 65\n        };\n        b23.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b23 antes de continuar.",
      "line": 113
    },
    {
      "name": "Ejercicio03 · operación 19",
      "kind": "constructor",
      "code": "fila2.Children.Add(b23);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 119
    },
    {
      "name": "Ejercicio03 · operación 20",
      "kind": "constructor",
      "code": "StackLayout fila3 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 120
    },
    {
      "name": "Ejercicio03 · operación 21",
      "kind": "constructor",
      "code": "root.Children.Add(fila3);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 125
    },
    {
      "name": "Ejercicio03 · b30",
      "kind": "constructor",
      "code": "Button b30 = new Button\n        {\n            Text = \"0\",\n            WidthRequest = 65\n        };\n        b30.Clicked += Digito;",
      "context": "Dentro de Ejercicio03: crea y configura b30 antes de continuar.",
      "line": 126
    },
    {
      "name": "Ejercicio03 · operación 22",
      "kind": "constructor",
      "code": "fila3.Children.Add(b30);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 132
    },
    {
      "name": "Ejercicio03 · b31",
      "kind": "constructor",
      "code": "Button b31 = new Button\n        {\n            Text = \"%\",\n            WidthRequest = 65\n        };\n        b31.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b31 antes de continuar.",
      "line": 133
    },
    {
      "name": "Ejercicio03 · operación 23",
      "kind": "constructor",
      "code": "fila3.Children.Add(b31);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 139
    },
    {
      "name": "Ejercicio03 · b32",
      "kind": "constructor",
      "code": "Button b32 = new Button\n        {\n            Text = \"-\",\n            WidthRequest = 65\n        };\n        b32.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b32 antes de continuar.",
      "line": 140
    },
    {
      "name": "Ejercicio03 · operación 24",
      "kind": "constructor",
      "code": "fila3.Children.Add(b32);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 146
    },
    {
      "name": "Ejercicio03 · b33",
      "kind": "constructor",
      "code": "Button b33 = new Button\n        {\n            Text = \"=\",\n            WidthRequest = 65\n        };\n        b33.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura b33 antes de continuar.",
      "line": 147
    },
    {
      "name": "Ejercicio03 · operación 25",
      "kind": "constructor",
      "code": "fila3.Children.Add(b33);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 153
    },
    {
      "name": "Ejercicio03 · limpiar",
      "kind": "constructor",
      "code": "Button limpiar = new Button\n        {\n            Text = \"C\"\n        };\n        limpiar.Clicked += Operacion;",
      "context": "Dentro de Ejercicio03: crea y configura limpiar antes de continuar.",
      "line": 154
    },
    {
      "name": "Ejercicio03 · operación 26",
      "kind": "constructor",
      "code": "root.Children.Add(limpiar);",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 159
    },
    {
      "name": "Ejercicio03 · operación 27",
      "kind": "constructor",
      "code": "Content = root;",
      "context": "Dentro de Ejercicio03, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 160
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 163
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 164
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 175
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 177
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio04.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio04",
      "kind": "clase",
      "code": "public class Ejercicio04 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "visor",
      "kind": "campo",
      "code": "private readonly Entry visor = new()\n    {\n        IsReadOnly = true\n    };",
      "context": "",
      "line": 4
    },
    {
      "name": "Ejercicio04 · operación 1",
      "kind": "constructor",
      "code": "Title = \"Calculadora Grid C#\";",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 10
    },
    {
      "name": "Ejercicio04 · operación 2",
      "kind": "constructor",
      "code": "Grid root = new Grid\n        {\n            Padding = 20,\n            RowSpacing = 6,\n            ColumnSpacing = 6\n        };",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 11
    },
    {
      "name": "Ejercicio04 · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 6; i++)\n            root.RowDefinitions.Add(new RowDefinition { Height = i == 0 || i == 5 ? GridLength.Auto : GridLength.Star });",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    },
    {
      "name": "Ejercicio04 · operación 4",
      "kind": "constructor",
      "code": "for (int i = 0; i < 4; i++)\n            root.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "Ejercicio04 · operación 5",
      "kind": "constructor",
      "code": "root.Add(visor, 0, 0);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "Ejercicio04 · operación 6",
      "kind": "constructor",
      "code": "Grid.SetColumnSpan(visor, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 22
    },
    {
      "name": "Ejercicio04 · b00",
      "kind": "constructor",
      "code": "Button b00 = new Button\n        {\n            Text = \"7\",\n            WidthRequest = 65\n        };\n        b00.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b00 antes de continuar.",
      "line": 23
    },
    {
      "name": "Ejercicio04 · operación 7",
      "kind": "constructor",
      "code": "root.Add(b00, 0, 1);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 29
    },
    {
      "name": "Ejercicio04 · b01",
      "kind": "constructor",
      "code": "Button b01 = new Button\n        {\n            Text = \"8\",\n            WidthRequest = 65\n        };\n        b01.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b01 antes de continuar.",
      "line": 30
    },
    {
      "name": "Ejercicio04 · operación 8",
      "kind": "constructor",
      "code": "root.Add(b01, 1, 1);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 36
    },
    {
      "name": "Ejercicio04 · b02",
      "kind": "constructor",
      "code": "Button b02 = new Button\n        {\n            Text = \"9\",\n            WidthRequest = 65\n        };\n        b02.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b02 antes de continuar.",
      "line": 37
    },
    {
      "name": "Ejercicio04 · operación 9",
      "kind": "constructor",
      "code": "root.Add(b02, 2, 1);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 43
    },
    {
      "name": "Ejercicio04 · b03",
      "kind": "constructor",
      "code": "Button b03 = new Button\n        {\n            Text = \"×\",\n            WidthRequest = 65\n        };\n        b03.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b03 antes de continuar.",
      "line": 44
    },
    {
      "name": "Ejercicio04 · operación 10",
      "kind": "constructor",
      "code": "root.Add(b03, 3, 1);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 50
    },
    {
      "name": "Ejercicio04 · b10",
      "kind": "constructor",
      "code": "Button b10 = new Button\n        {\n            Text = \"4\",\n            WidthRequest = 65\n        };\n        b10.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b10 antes de continuar.",
      "line": 51
    },
    {
      "name": "Ejercicio04 · operación 11",
      "kind": "constructor",
      "code": "root.Add(b10, 0, 2);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 57
    },
    {
      "name": "Ejercicio04 · b11",
      "kind": "constructor",
      "code": "Button b11 = new Button\n        {\n            Text = \"5\",\n            WidthRequest = 65\n        };\n        b11.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b11 antes de continuar.",
      "line": 58
    },
    {
      "name": "Ejercicio04 · operación 12",
      "kind": "constructor",
      "code": "root.Add(b11, 1, 2);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 64
    },
    {
      "name": "Ejercicio04 · b12",
      "kind": "constructor",
      "code": "Button b12 = new Button\n        {\n            Text = \"6\",\n            WidthRequest = 65\n        };\n        b12.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b12 antes de continuar.",
      "line": 65
    },
    {
      "name": "Ejercicio04 · operación 13",
      "kind": "constructor",
      "code": "root.Add(b12, 2, 2);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 71
    },
    {
      "name": "Ejercicio04 · b13",
      "kind": "constructor",
      "code": "Button b13 = new Button\n        {\n            Text = \"+\",\n            WidthRequest = 65\n        };\n        b13.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b13 antes de continuar.",
      "line": 72
    },
    {
      "name": "Ejercicio04 · operación 14",
      "kind": "constructor",
      "code": "root.Add(b13, 3, 2);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 78
    },
    {
      "name": "Ejercicio04 · b20",
      "kind": "constructor",
      "code": "Button b20 = new Button\n        {\n            Text = \"1\",\n            WidthRequest = 65\n        };\n        b20.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b20 antes de continuar.",
      "line": 79
    },
    {
      "name": "Ejercicio04 · operación 15",
      "kind": "constructor",
      "code": "root.Add(b20, 0, 3);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 85
    },
    {
      "name": "Ejercicio04 · b21",
      "kind": "constructor",
      "code": "Button b21 = new Button\n        {\n            Text = \"2\",\n            WidthRequest = 65\n        };\n        b21.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b21 antes de continuar.",
      "line": 86
    },
    {
      "name": "Ejercicio04 · operación 16",
      "kind": "constructor",
      "code": "root.Add(b21, 1, 3);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 92
    },
    {
      "name": "Ejercicio04 · b22",
      "kind": "constructor",
      "code": "Button b22 = new Button\n        {\n            Text = \"3\",\n            WidthRequest = 65\n        };\n        b22.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b22 antes de continuar.",
      "line": 93
    },
    {
      "name": "Ejercicio04 · operación 17",
      "kind": "constructor",
      "code": "root.Add(b22, 2, 3);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 99
    },
    {
      "name": "Ejercicio04 · b23",
      "kind": "constructor",
      "code": "Button b23 = new Button\n        {\n            Text = \"÷\",\n            WidthRequest = 65\n        };\n        b23.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b23 antes de continuar.",
      "line": 100
    },
    {
      "name": "Ejercicio04 · operación 18",
      "kind": "constructor",
      "code": "root.Add(b23, 3, 3);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 106
    },
    {
      "name": "Ejercicio04 · b30",
      "kind": "constructor",
      "code": "Button b30 = new Button\n        {\n            Text = \"0\",\n            WidthRequest = 65\n        };\n        b30.Clicked += Digito;",
      "context": "Dentro de Ejercicio04: crea y configura b30 antes de continuar.",
      "line": 107
    },
    {
      "name": "Ejercicio04 · operación 19",
      "kind": "constructor",
      "code": "root.Add(b30, 0, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 113
    },
    {
      "name": "Ejercicio04 · b31",
      "kind": "constructor",
      "code": "Button b31 = new Button\n        {\n            Text = \"%\",\n            WidthRequest = 65\n        };\n        b31.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b31 antes de continuar.",
      "line": 114
    },
    {
      "name": "Ejercicio04 · operación 20",
      "kind": "constructor",
      "code": "root.Add(b31, 1, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 120
    },
    {
      "name": "Ejercicio04 · b32",
      "kind": "constructor",
      "code": "Button b32 = new Button\n        {\n            Text = \"-\",\n            WidthRequest = 65\n        };\n        b32.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b32 antes de continuar.",
      "line": 121
    },
    {
      "name": "Ejercicio04 · operación 21",
      "kind": "constructor",
      "code": "root.Add(b32, 2, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 127
    },
    {
      "name": "Ejercicio04 · b33",
      "kind": "constructor",
      "code": "Button b33 = new Button\n        {\n            Text = \"=\",\n            WidthRequest = 65\n        };\n        b33.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura b33 antes de continuar.",
      "line": 128
    },
    {
      "name": "Ejercicio04 · operación 22",
      "kind": "constructor",
      "code": "root.Add(b33, 3, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 134
    },
    {
      "name": "Ejercicio04 · limpiar",
      "kind": "constructor",
      "code": "Button limpiar = new Button\n        {\n            Text = \"C\"\n        };\n        limpiar.Clicked += Operacion;",
      "context": "Dentro de Ejercicio04: crea y configura limpiar antes de continuar.",
      "line": 135
    },
    {
      "name": "Ejercicio04 · operación 23",
      "kind": "constructor",
      "code": "root.Add(limpiar, 0, 5);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 140
    },
    {
      "name": "Ejercicio04 · operación 24",
      "kind": "constructor",
      "code": "Grid.SetColumnSpan(limpiar, 4);",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 141
    },
    {
      "name": "Ejercicio04 · operación 25",
      "kind": "constructor",
      "code": "Content = root;",
      "context": "Dentro de Ejercicio04, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 142
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 145
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 146
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 157
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 159
    }
  ],
  "relacion-2/Relacion2_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-2/Relacion2_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-2/Relacion2_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-3/Relacion3_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-3/Relacion3_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-3/Relacion3_Estudio/Ejercicio01.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio01",
      "kind": "clase",
      "code": "public class Ejercicio01 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio01 · operación 1",
      "kind": "constructor",
      "code": "Title = \"Tablero dinámico\";",
      "context": "Dentro de Ejercicio01, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 6
    },
    {
      "name": "Ejercicio01 · operación 2",
      "kind": "constructor",
      "code": "Grid grid = new Grid\n        {\n            Padding = 10,\n            RowSpacing = 5,\n            ColumnSpacing = 5\n        };",
      "context": "Dentro de Ejercicio01, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 7
    },
    {
      "name": "Ejercicio01 · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 5; i++)\n        {\n            grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Star });\n            grid.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\n        }",
      "context": "Dentro de Ejercicio01, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 13
    },
    {
      "name": "Ejercicio01 · operación 4",
      "kind": "constructor",
      "code": "for (int fila = 0; fila < 5; fila++)\n            for (int col = 0; col < 5; col++)\n            {\n                Button b = new Button\n                {\n                    Text = (fila * 5 + col + 1).ToString()\n                };\n                b.Clicked += async (_, _) => await DisplayAlertAsync(\"Tablero\", $\"Has pulsado el botón {b.Text}\", \"Aceptar\");\n                grid.Add(b, col, fila);\n            }",
      "context": "Dentro de Ejercicio01, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "Ejercicio01 · operación 5",
      "kind": "constructor",
      "code": "Content = grid;",
      "context": "Dentro de Ejercicio01, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    }
  ],
  "relacion-3/Relacion3_Estudio/Ejercicio02.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Ejercicio02",
      "kind": "clase",
      "code": "public class Ejercicio02 : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Ejercicio02 · operación 1",
      "kind": "constructor",
      "code": "Title = \"Tablero dinámico color\";",
      "context": "Dentro de Ejercicio02, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 6
    },
    {
      "name": "Ejercicio02 · operación 2",
      "kind": "constructor",
      "code": "Grid grid = new Grid\n        {\n            Padding = 10,\n            RowSpacing = 5,\n            ColumnSpacing = 5\n        };",
      "context": "Dentro de Ejercicio02, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 7
    },
    {
      "name": "Ejercicio02 · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 5; i++)\n        {\n            grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Star });\n            grid.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\n        }",
      "context": "Dentro de Ejercicio02, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 13
    },
    {
      "name": "Ejercicio02 · operación 4",
      "kind": "constructor",
      "code": "for (int fila = 0; fila < 5; fila++)\n            for (int col = 0; col < 5; col++)\n            {\n                MiBoton b = new MiBoton\n                {\n                    Text = (fila * 5 + col + 1).ToString()\n                };\n                grid.Add(b, col, fila);\n            }",
      "context": "Dentro de Ejercicio02, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "Ejercicio02 · operación 5",
      "kind": "constructor",
      "code": "Content = grid;",
      "context": "Dentro de Ejercicio02, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 29
    }
  ],
  "relacion-3/Relacion3_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-3/Relacion3_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-3/Relacion3_Estudio/MiBoton.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MiBoton",
      "kind": "clase",
      "code": "public class MiBoton : Button\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "estado",
      "kind": "campo",
      "code": "private int estado;",
      "context": "",
      "line": 4
    },
    {
      "name": "original",
      "kind": "campo",
      "code": "private readonly Color original = Colors.Blue;",
      "context": "",
      "line": 5
    },
    {
      "name": "MiBoton",
      "kind": "constructor",
      "code": "public MiBoton()\n    {\n        BackgroundColor = original;\n        Clicked += (_, _) =>\n        {\n            estado = Reglas.SiguienteEstado(estado);\n            BackgroundColor = estado == 1 ? Colors.Green : estado == 2 ? Colors.Red : original;\n        };\n    }",
      "context": "",
      "line": 6
    }
  ],
  "relacion-3/Relacion3_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AccesoMixto.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AccesoMixto",
      "kind": "clase",
      "code": "public partial class AccesoMixto : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AccesoMixto",
      "kind": "constructor",
      "code": "public AccesoMixto()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AccesoVertical.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AccesoVertical",
      "kind": "clase",
      "code": "public partial class AccesoVertical : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AccesoVertical",
      "kind": "constructor",
      "code": "public AccesoVertical()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Acceder",
      "kind": "método",
      "code": "private async void Acceder(object sender, EventArgs e)\n    {\n        try\n        {\n            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);\n            resultado.Text = usuario.Mensaje;\n        }\n        catch (ArgumentException ex)\n        {\n            resultado.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-4/Ejercicio1_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-4/Ejercicio1_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-4/Ejercicio1_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-4/Ejercicio1_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-4/Ejercicio1_Estudio/Usuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Usuario",
      "kind": "clase",
      "code": "public class Usuario\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Nombre",
      "kind": "propiedad",
      "code": "public string Nombre { get; }",
      "context": "",
      "line": 4
    },
    {
      "name": "Apellidos",
      "kind": "propiedad",
      "code": "public string Apellidos { get; }",
      "context": "",
      "line": 5
    },
    {
      "name": "Edad",
      "kind": "propiedad",
      "code": "public int Edad { get; }",
      "context": "",
      "line": 6
    },
    {
      "name": "Usuario",
      "kind": "constructor",
      "code": "public Usuario(string? nombre, string? apellidos, string? edad)\n    {\n        Nombre = Reglas.Texto(nombre, 3, 20, \"Nombre\");\n        Apellidos = Reglas.Texto(apellidos, 4, 40, \"Apellidos\");\n        Edad = Reglas.EdadEntrada(edad);\n    }",
      "context": "",
      "line": 8
    },
    {
      "name": "Mensaje",
      "kind": "propiedad",
      "code": "public string Mensaje => $\"{Apellidos}, {Nombre}:\\n\" + (Edad >= 18 ? \"Tiene acceso al sistema\" : \"No tiene acceso al sistema\");",
      "context": "",
      "line": 15
    }
  ],
  "relacion-4/Ejercicio2_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-4/Ejercicio2_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-4/Ejercicio2_Estudio/Calculadora.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Calculadora",
      "kind": "clase",
      "code": "public class Calculadora\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Visor",
      "kind": "propiedad",
      "code": "public string Visor { get; private set; } = \"\";",
      "context": "",
      "line": 4
    },
    {
      "name": "primero",
      "kind": "campo",
      "code": "private int? primero;",
      "context": "",
      "line": 6
    },
    {
      "name": "operador",
      "kind": "campo",
      "code": "private char? operador;",
      "context": "",
      "line": 7
    },
    {
      "name": "resultado",
      "kind": "campo",
      "code": "private bool resultado;",
      "context": "",
      "line": 8
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "public void Digito(string valor)\n    {\n        if (resultado)\n            Limpiar();\n        if (valor.Length != 1 || valor[0] < '0' || valor[0] > '9')\n            throw new ArgumentException(\"Dígito no válido.\");\n        Visor += valor;\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Limpiar",
      "kind": "método",
      "code": "public void Limpiar()\n    {\n        Visor = \"\";\n        primero = null;\n        operador = null;\n        resultado = false;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (!int.TryParse(Visor, out int numero))\n            throw new ArgumentException(\"Introduce un entero dentro del rango de int.\");",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 28
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "if (tecla == '=')\n        {\n            if (primero is null || operador is null)\n                throw new ArgumentException(\"Falta la operación.\");\n            Visor = Reglas.Operar(primero.Value, numero, operador.Value).ToString();\n            primero = null;\n            operador = null;\n            resultado = true;\n        }\n        else\n        {\n            if (operador is not null)\n                throw new ArgumentException(\"Ya has seleccionado una operación.\");\n            primero = numero;\n            operador = tecla;\n            Visor = \"\";\n            resultado = false;\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraGridCS.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "CalculadoraGridCS",
      "kind": "clase",
      "code": "public class CalculadoraGridCS : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "visor",
      "kind": "campo",
      "code": "private readonly Entry visor = new()\n    {\n        IsReadOnly = true\n    };",
      "context": "",
      "line": 4
    },
    {
      "name": "CalculadoraGridCS · operación 1",
      "kind": "constructor",
      "code": "Title = \"Calculadora Grid C#\";",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 10
    },
    {
      "name": "CalculadoraGridCS · operación 2",
      "kind": "constructor",
      "code": "Grid root = new Grid\n        {\n            Padding = 20,\n            RowSpacing = 6,\n            ColumnSpacing = 6\n        };",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 11
    },
    {
      "name": "CalculadoraGridCS · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 6; i++)\n            root.RowDefinitions.Add(new RowDefinition { Height = i == 0 || i == 5 ? GridLength.Auto : GridLength.Star });",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    },
    {
      "name": "CalculadoraGridCS · operación 4",
      "kind": "constructor",
      "code": "for (int i = 0; i < 4; i++)\n            root.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "CalculadoraGridCS · operación 5",
      "kind": "constructor",
      "code": "root.Add(visor, 0, 0);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "CalculadoraGridCS · operación 6",
      "kind": "constructor",
      "code": "Grid.SetColumnSpan(visor, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 22
    },
    {
      "name": "CalculadoraGridCS · b00",
      "kind": "constructor",
      "code": "Button b00 = new Button\n        {\n            Text = \"7\",\n            WidthRequest = 65\n        };\n        b00.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b00 antes de continuar.",
      "line": 23
    },
    {
      "name": "CalculadoraGridCS · operación 7",
      "kind": "constructor",
      "code": "root.Add(b00, 0, 1);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 29
    },
    {
      "name": "CalculadoraGridCS · b01",
      "kind": "constructor",
      "code": "Button b01 = new Button\n        {\n            Text = \"8\",\n            WidthRequest = 65\n        };\n        b01.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b01 antes de continuar.",
      "line": 30
    },
    {
      "name": "CalculadoraGridCS · operación 8",
      "kind": "constructor",
      "code": "root.Add(b01, 1, 1);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 36
    },
    {
      "name": "CalculadoraGridCS · b02",
      "kind": "constructor",
      "code": "Button b02 = new Button\n        {\n            Text = \"9\",\n            WidthRequest = 65\n        };\n        b02.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b02 antes de continuar.",
      "line": 37
    },
    {
      "name": "CalculadoraGridCS · operación 9",
      "kind": "constructor",
      "code": "root.Add(b02, 2, 1);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 43
    },
    {
      "name": "CalculadoraGridCS · b03",
      "kind": "constructor",
      "code": "Button b03 = new Button\n        {\n            Text = \"×\",\n            WidthRequest = 65\n        };\n        b03.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b03 antes de continuar.",
      "line": 44
    },
    {
      "name": "CalculadoraGridCS · operación 10",
      "kind": "constructor",
      "code": "root.Add(b03, 3, 1);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 50
    },
    {
      "name": "CalculadoraGridCS · b10",
      "kind": "constructor",
      "code": "Button b10 = new Button\n        {\n            Text = \"4\",\n            WidthRequest = 65\n        };\n        b10.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b10 antes de continuar.",
      "line": 51
    },
    {
      "name": "CalculadoraGridCS · operación 11",
      "kind": "constructor",
      "code": "root.Add(b10, 0, 2);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 57
    },
    {
      "name": "CalculadoraGridCS · b11",
      "kind": "constructor",
      "code": "Button b11 = new Button\n        {\n            Text = \"5\",\n            WidthRequest = 65\n        };\n        b11.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b11 antes de continuar.",
      "line": 58
    },
    {
      "name": "CalculadoraGridCS · operación 12",
      "kind": "constructor",
      "code": "root.Add(b11, 1, 2);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 64
    },
    {
      "name": "CalculadoraGridCS · b12",
      "kind": "constructor",
      "code": "Button b12 = new Button\n        {\n            Text = \"6\",\n            WidthRequest = 65\n        };\n        b12.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b12 antes de continuar.",
      "line": 65
    },
    {
      "name": "CalculadoraGridCS · operación 13",
      "kind": "constructor",
      "code": "root.Add(b12, 2, 2);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 71
    },
    {
      "name": "CalculadoraGridCS · b13",
      "kind": "constructor",
      "code": "Button b13 = new Button\n        {\n            Text = \"+\",\n            WidthRequest = 65\n        };\n        b13.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b13 antes de continuar.",
      "line": 72
    },
    {
      "name": "CalculadoraGridCS · operación 14",
      "kind": "constructor",
      "code": "root.Add(b13, 3, 2);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 78
    },
    {
      "name": "CalculadoraGridCS · b20",
      "kind": "constructor",
      "code": "Button b20 = new Button\n        {\n            Text = \"1\",\n            WidthRequest = 65\n        };\n        b20.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b20 antes de continuar.",
      "line": 79
    },
    {
      "name": "CalculadoraGridCS · operación 15",
      "kind": "constructor",
      "code": "root.Add(b20, 0, 3);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 85
    },
    {
      "name": "CalculadoraGridCS · b21",
      "kind": "constructor",
      "code": "Button b21 = new Button\n        {\n            Text = \"2\",\n            WidthRequest = 65\n        };\n        b21.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b21 antes de continuar.",
      "line": 86
    },
    {
      "name": "CalculadoraGridCS · operación 16",
      "kind": "constructor",
      "code": "root.Add(b21, 1, 3);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 92
    },
    {
      "name": "CalculadoraGridCS · b22",
      "kind": "constructor",
      "code": "Button b22 = new Button\n        {\n            Text = \"3\",\n            WidthRequest = 65\n        };\n        b22.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b22 antes de continuar.",
      "line": 93
    },
    {
      "name": "CalculadoraGridCS · operación 17",
      "kind": "constructor",
      "code": "root.Add(b22, 2, 3);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 99
    },
    {
      "name": "CalculadoraGridCS · b23",
      "kind": "constructor",
      "code": "Button b23 = new Button\n        {\n            Text = \"÷\",\n            WidthRequest = 65\n        };\n        b23.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b23 antes de continuar.",
      "line": 100
    },
    {
      "name": "CalculadoraGridCS · operación 18",
      "kind": "constructor",
      "code": "root.Add(b23, 3, 3);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 106
    },
    {
      "name": "CalculadoraGridCS · b30",
      "kind": "constructor",
      "code": "Button b30 = new Button\n        {\n            Text = \"0\",\n            WidthRequest = 65\n        };\n        b30.Clicked += Digito;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b30 antes de continuar.",
      "line": 107
    },
    {
      "name": "CalculadoraGridCS · operación 19",
      "kind": "constructor",
      "code": "root.Add(b30, 0, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 113
    },
    {
      "name": "CalculadoraGridCS · b31",
      "kind": "constructor",
      "code": "Button b31 = new Button\n        {\n            Text = \"%\",\n            WidthRequest = 65\n        };\n        b31.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b31 antes de continuar.",
      "line": 114
    },
    {
      "name": "CalculadoraGridCS · operación 20",
      "kind": "constructor",
      "code": "root.Add(b31, 1, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 120
    },
    {
      "name": "CalculadoraGridCS · b32",
      "kind": "constructor",
      "code": "Button b32 = new Button\n        {\n            Text = \"-\",\n            WidthRequest = 65\n        };\n        b32.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b32 antes de continuar.",
      "line": 121
    },
    {
      "name": "CalculadoraGridCS · operación 21",
      "kind": "constructor",
      "code": "root.Add(b32, 2, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 127
    },
    {
      "name": "CalculadoraGridCS · b33",
      "kind": "constructor",
      "code": "Button b33 = new Button\n        {\n            Text = \"=\",\n            WidthRequest = 65\n        };\n        b33.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura b33 antes de continuar.",
      "line": 128
    },
    {
      "name": "CalculadoraGridCS · operación 22",
      "kind": "constructor",
      "code": "root.Add(b33, 3, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 134
    },
    {
      "name": "CalculadoraGridCS · limpiar",
      "kind": "constructor",
      "code": "Button limpiar = new Button\n        {\n            Text = \"C\"\n        };\n        limpiar.Clicked += Operacion;",
      "context": "Dentro de CalculadoraGridCS: crea y configura limpiar antes de continuar.",
      "line": 135
    },
    {
      "name": "CalculadoraGridCS · operación 23",
      "kind": "constructor",
      "code": "root.Add(limpiar, 0, 5);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 140
    },
    {
      "name": "CalculadoraGridCS · operación 24",
      "kind": "constructor",
      "code": "Grid.SetColumnSpan(limpiar, 4);",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 141
    },
    {
      "name": "CalculadoraGridCS · operación 25",
      "kind": "constructor",
      "code": "Content = root;",
      "context": "Dentro de CalculadoraGridCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 142
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 145
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 146
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 157
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 159
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraGridX.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "CalculadoraGridX",
      "kind": "clase",
      "code": "public partial class CalculadoraGridX : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "CalculadoraGridX",
      "kind": "constructor",
      "code": "public CalculadoraGridX()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 9
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 10
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraStackCS.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "CalculadoraStackCS",
      "kind": "clase",
      "code": "public class CalculadoraStackCS : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "visor",
      "kind": "campo",
      "code": "private readonly Entry visor = new()\n    {\n        IsReadOnly = true\n    };",
      "context": "",
      "line": 4
    },
    {
      "name": "CalculadoraStackCS · operación 1",
      "kind": "constructor",
      "code": "Title = \"Calculadora Stack C#\";",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 10
    },
    {
      "name": "CalculadoraStackCS · root",
      "kind": "constructor",
      "code": "StackLayout root = new StackLayout\n        {\n            Padding = 20,\n            Spacing = 6,\n            Orientation = StackOrientation.Vertical\n        };\n        root.Children.Add(visor);",
      "context": "Dentro de CalculadoraStackCS: crea y configura root antes de continuar.",
      "line": 11
    },
    {
      "name": "CalculadoraStackCS · operación 2",
      "kind": "constructor",
      "code": "StackLayout fila0 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 18
    },
    {
      "name": "CalculadoraStackCS · operación 3",
      "kind": "constructor",
      "code": "root.Children.Add(fila0);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    },
    {
      "name": "CalculadoraStackCS · b00",
      "kind": "constructor",
      "code": "Button b00 = new Button\n        {\n            Text = \"7\",\n            WidthRequest = 65\n        };\n        b00.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b00 antes de continuar.",
      "line": 24
    },
    {
      "name": "CalculadoraStackCS · operación 4",
      "kind": "constructor",
      "code": "fila0.Children.Add(b00);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    },
    {
      "name": "CalculadoraStackCS · b01",
      "kind": "constructor",
      "code": "Button b01 = new Button\n        {\n            Text = \"8\",\n            WidthRequest = 65\n        };\n        b01.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b01 antes de continuar.",
      "line": 31
    },
    {
      "name": "CalculadoraStackCS · operación 5",
      "kind": "constructor",
      "code": "fila0.Children.Add(b01);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 37
    },
    {
      "name": "CalculadoraStackCS · b02",
      "kind": "constructor",
      "code": "Button b02 = new Button\n        {\n            Text = \"9\",\n            WidthRequest = 65\n        };\n        b02.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b02 antes de continuar.",
      "line": 38
    },
    {
      "name": "CalculadoraStackCS · operación 6",
      "kind": "constructor",
      "code": "fila0.Children.Add(b02);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 44
    },
    {
      "name": "CalculadoraStackCS · b03",
      "kind": "constructor",
      "code": "Button b03 = new Button\n        {\n            Text = \"×\",\n            WidthRequest = 65\n        };\n        b03.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b03 antes de continuar.",
      "line": 45
    },
    {
      "name": "CalculadoraStackCS · operación 7",
      "kind": "constructor",
      "code": "fila0.Children.Add(b03);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 51
    },
    {
      "name": "CalculadoraStackCS · operación 8",
      "kind": "constructor",
      "code": "StackLayout fila1 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 52
    },
    {
      "name": "CalculadoraStackCS · operación 9",
      "kind": "constructor",
      "code": "root.Children.Add(fila1);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 57
    },
    {
      "name": "CalculadoraStackCS · b10",
      "kind": "constructor",
      "code": "Button b10 = new Button\n        {\n            Text = \"4\",\n            WidthRequest = 65\n        };\n        b10.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b10 antes de continuar.",
      "line": 58
    },
    {
      "name": "CalculadoraStackCS · operación 10",
      "kind": "constructor",
      "code": "fila1.Children.Add(b10);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 64
    },
    {
      "name": "CalculadoraStackCS · b11",
      "kind": "constructor",
      "code": "Button b11 = new Button\n        {\n            Text = \"5\",\n            WidthRequest = 65\n        };\n        b11.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b11 antes de continuar.",
      "line": 65
    },
    {
      "name": "CalculadoraStackCS · operación 11",
      "kind": "constructor",
      "code": "fila1.Children.Add(b11);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 71
    },
    {
      "name": "CalculadoraStackCS · b12",
      "kind": "constructor",
      "code": "Button b12 = new Button\n        {\n            Text = \"6\",\n            WidthRequest = 65\n        };\n        b12.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b12 antes de continuar.",
      "line": 72
    },
    {
      "name": "CalculadoraStackCS · operación 12",
      "kind": "constructor",
      "code": "fila1.Children.Add(b12);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 78
    },
    {
      "name": "CalculadoraStackCS · b13",
      "kind": "constructor",
      "code": "Button b13 = new Button\n        {\n            Text = \"+\",\n            WidthRequest = 65\n        };\n        b13.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b13 antes de continuar.",
      "line": 79
    },
    {
      "name": "CalculadoraStackCS · operación 13",
      "kind": "constructor",
      "code": "fila1.Children.Add(b13);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 85
    },
    {
      "name": "CalculadoraStackCS · operación 14",
      "kind": "constructor",
      "code": "StackLayout fila2 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 86
    },
    {
      "name": "CalculadoraStackCS · operación 15",
      "kind": "constructor",
      "code": "root.Children.Add(fila2);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 91
    },
    {
      "name": "CalculadoraStackCS · b20",
      "kind": "constructor",
      "code": "Button b20 = new Button\n        {\n            Text = \"1\",\n            WidthRequest = 65\n        };\n        b20.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b20 antes de continuar.",
      "line": 92
    },
    {
      "name": "CalculadoraStackCS · operación 16",
      "kind": "constructor",
      "code": "fila2.Children.Add(b20);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 98
    },
    {
      "name": "CalculadoraStackCS · b21",
      "kind": "constructor",
      "code": "Button b21 = new Button\n        {\n            Text = \"2\",\n            WidthRequest = 65\n        };\n        b21.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b21 antes de continuar.",
      "line": 99
    },
    {
      "name": "CalculadoraStackCS · operación 17",
      "kind": "constructor",
      "code": "fila2.Children.Add(b21);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 105
    },
    {
      "name": "CalculadoraStackCS · b22",
      "kind": "constructor",
      "code": "Button b22 = new Button\n        {\n            Text = \"3\",\n            WidthRequest = 65\n        };\n        b22.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b22 antes de continuar.",
      "line": 106
    },
    {
      "name": "CalculadoraStackCS · operación 18",
      "kind": "constructor",
      "code": "fila2.Children.Add(b22);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 112
    },
    {
      "name": "CalculadoraStackCS · b23",
      "kind": "constructor",
      "code": "Button b23 = new Button\n        {\n            Text = \"÷\",\n            WidthRequest = 65\n        };\n        b23.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b23 antes de continuar.",
      "line": 113
    },
    {
      "name": "CalculadoraStackCS · operación 19",
      "kind": "constructor",
      "code": "fila2.Children.Add(b23);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 119
    },
    {
      "name": "CalculadoraStackCS · operación 20",
      "kind": "constructor",
      "code": "StackLayout fila3 = new StackLayout\n        {\n            Orientation = StackOrientation.Horizontal,\n            Spacing = 6\n        };",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 120
    },
    {
      "name": "CalculadoraStackCS · operación 21",
      "kind": "constructor",
      "code": "root.Children.Add(fila3);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 125
    },
    {
      "name": "CalculadoraStackCS · b30",
      "kind": "constructor",
      "code": "Button b30 = new Button\n        {\n            Text = \"0\",\n            WidthRequest = 65\n        };\n        b30.Clicked += Digito;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b30 antes de continuar.",
      "line": 126
    },
    {
      "name": "CalculadoraStackCS · operación 22",
      "kind": "constructor",
      "code": "fila3.Children.Add(b30);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 132
    },
    {
      "name": "CalculadoraStackCS · b31",
      "kind": "constructor",
      "code": "Button b31 = new Button\n        {\n            Text = \"%\",\n            WidthRequest = 65\n        };\n        b31.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b31 antes de continuar.",
      "line": 133
    },
    {
      "name": "CalculadoraStackCS · operación 23",
      "kind": "constructor",
      "code": "fila3.Children.Add(b31);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 139
    },
    {
      "name": "CalculadoraStackCS · b32",
      "kind": "constructor",
      "code": "Button b32 = new Button\n        {\n            Text = \"-\",\n            WidthRequest = 65\n        };\n        b32.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b32 antes de continuar.",
      "line": 140
    },
    {
      "name": "CalculadoraStackCS · operación 24",
      "kind": "constructor",
      "code": "fila3.Children.Add(b32);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 146
    },
    {
      "name": "CalculadoraStackCS · b33",
      "kind": "constructor",
      "code": "Button b33 = new Button\n        {\n            Text = \"=\",\n            WidthRequest = 65\n        };\n        b33.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura b33 antes de continuar.",
      "line": 147
    },
    {
      "name": "CalculadoraStackCS · operación 25",
      "kind": "constructor",
      "code": "fila3.Children.Add(b33);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 153
    },
    {
      "name": "CalculadoraStackCS · limpiar",
      "kind": "constructor",
      "code": "Button limpiar = new Button\n        {\n            Text = \"C\"\n        };\n        limpiar.Clicked += Operacion;",
      "context": "Dentro de CalculadoraStackCS: crea y configura limpiar antes de continuar.",
      "line": 154
    },
    {
      "name": "CalculadoraStackCS · operación 26",
      "kind": "constructor",
      "code": "root.Children.Add(limpiar);",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 159
    },
    {
      "name": "CalculadoraStackCS · operación 27",
      "kind": "constructor",
      "code": "Content = root;",
      "context": "Dentro de CalculadoraStackCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 160
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 163
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 164
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 175
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 177
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraStackX.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "CalculadoraStackX",
      "kind": "clase",
      "code": "public partial class CalculadoraStackX : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "CalculadoraStackX",
      "kind": "constructor",
      "code": "public CalculadoraStackX()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "modelo",
      "kind": "campo",
      "code": "private readonly Calculadora modelo = new();",
      "context": "",
      "line": 9
    },
    {
      "name": "Digito",
      "kind": "método",
      "code": "private void Digito(object? sender, EventArgs e)\n    {\n        if (sender is Button b)\n        {\n            modelo.Digito(b.Text);\n            visor.Text = modelo.Visor;\n        }\n    }",
      "context": "",
      "line": 10
    },
    {
      "name": "Operacion · operación 1",
      "kind": "método",
      "code": "if (sender is not Button b)\n            return;",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 21
    },
    {
      "name": "Operacion · operación 2",
      "kind": "método",
      "code": "try\n        {\n            if (b.Text == \"C\")\n                modelo.Limpiar();\n            else\n                modelo.Operacion(b.Text[0] switch\n                {\n                    '×' => '*',\n                    '÷' => '/',\n                    char op => op\n                });\n            visor.Text = modelo.Visor;\n        }\n        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)\n        {\n            modelo.Limpiar();\n            visor.Text = \"\";\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }",
      "context": "Dentro de Operacion, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 23
    }
  ],
  "relacion-4/Ejercicio2_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-4/Ejercicio2_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-4/Ejercicio2_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-4/Ejercicio3_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-4/Ejercicio3_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-4/Ejercicio3_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-4/Ejercicio3_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-4/Ejercicio3_Estudio/MiBoton.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MiBoton",
      "kind": "clase",
      "code": "public class MiBoton : Button\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "estado",
      "kind": "campo",
      "code": "private int estado;",
      "context": "",
      "line": 4
    },
    {
      "name": "original",
      "kind": "campo",
      "code": "private readonly Color original = Colors.Blue;",
      "context": "",
      "line": 5
    },
    {
      "name": "MiBoton",
      "kind": "constructor",
      "code": "public MiBoton()\n    {\n        BackgroundColor = original;\n        Clicked += (_, _) =>\n        {\n            estado = Reglas.SiguienteEstado(estado);\n            BackgroundColor = estado == 1 ? Colors.Green : estado == 2 ? Colors.Red : original;\n        };\n    }",
      "context": "",
      "line": 6
    }
  ],
  "relacion-4/Ejercicio3_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-4/Ejercicio3_Estudio/TableroColorCS.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "TableroColorCS",
      "kind": "clase",
      "code": "public class TableroColorCS : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "TableroColorCS · operación 1",
      "kind": "constructor",
      "code": "Title = \"Tablero dinámico color\";",
      "context": "Dentro de TableroColorCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 6
    },
    {
      "name": "TableroColorCS · operación 2",
      "kind": "constructor",
      "code": "Grid grid = new Grid\n        {\n            Padding = 10,\n            RowSpacing = 5,\n            ColumnSpacing = 5\n        };",
      "context": "Dentro de TableroColorCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 7
    },
    {
      "name": "TableroColorCS · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 5; i++)\n        {\n            grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Star });\n            grid.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\n        }",
      "context": "Dentro de TableroColorCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 13
    },
    {
      "name": "TableroColorCS · operación 4",
      "kind": "constructor",
      "code": "for (int fila = 0; fila < 5; fila++)\n            for (int col = 0; col < 5; col++)\n            {\n                MiBoton b = new MiBoton\n                {\n                    Text = (fila * 5 + col + 1).ToString()\n                };\n                grid.Add(b, col, fila);\n            }",
      "context": "Dentro de TableroColorCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "TableroColorCS · operación 5",
      "kind": "constructor",
      "code": "Content = grid;",
      "context": "Dentro de TableroColorCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 29
    }
  ],
  "relacion-4/Ejercicio3_Estudio/TableroCS.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "TableroCS",
      "kind": "clase",
      "code": "public class TableroCS : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "TableroCS · operación 1",
      "kind": "constructor",
      "code": "Title = \"Tablero dinámico\";",
      "context": "Dentro de TableroCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 6
    },
    {
      "name": "TableroCS · operación 2",
      "kind": "constructor",
      "code": "Grid grid = new Grid\n        {\n            Padding = 10,\n            RowSpacing = 5,\n            ColumnSpacing = 5\n        };",
      "context": "Dentro de TableroCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 7
    },
    {
      "name": "TableroCS · operación 3",
      "kind": "constructor",
      "code": "for (int i = 0; i < 5; i++)\n        {\n            grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Star });\n            grid.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });\n        }",
      "context": "Dentro de TableroCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 13
    },
    {
      "name": "TableroCS · operación 4",
      "kind": "constructor",
      "code": "for (int fila = 0; fila < 5; fila++)\n            for (int col = 0; col < 5; col++)\n            {\n                Button b = new Button\n                {\n                    Text = (fila * 5 + col + 1).ToString()\n                };\n                b.Clicked += async (_, _) => await DisplayAlertAsync(\"Tablero\", $\"Has pulsado el botón {b.Text}\", \"Aceptar\");\n                grid.Add(b, col, fila);\n            }",
      "context": "Dentro de TableroCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 19
    },
    {
      "name": "TableroCS · operación 5",
      "kind": "constructor",
      "code": "Content = grid;",
      "context": "Dentro de TableroCS, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 30
    }
  ],
  "relacion-5/BLoginViews_Estudio/EntryContrasenia.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryContrasenia",
      "kind": "clase",
      "code": "public class EntryContrasenia : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryContrasenia",
      "kind": "constructor",
      "code": "public EntryContrasenia()\n    {\n        Placeholder = \"Contraseña (10 caracteres)\";\n        IsPassword = true;\n        MaxLength = 10;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Password",
      "kind": "propiedad",
      "code": "public string Password { get => Reglas.Contrasenia(Text); set => Text = Reglas.Contrasenia(value); }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-5/BLoginViews_Estudio/EntryNombreUsuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "clase",
      "code": "public class EntryNombreUsuario : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "constructor",
      "code": "public EntryNombreUsuario()\n    {\n        Placeholder = \"Usuario (5-15 letras)\";\n        MaxLength = 15;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Usuario",
      "kind": "propiedad",
      "code": "public string Usuario { get => Reglas.NombreUsuario(Text); set => Text = Reglas.NombreUsuario(value); }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-5/BLoginViews_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-5/LoginAcceso_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-5/LoginAcceso_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-5/LoginAcceso_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-5/LoginAcceso_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-5/LoginAcceso_Estudio/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"Usuario: {usuario.Usuario}\\nContraseña: {password.Password}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-6/BAcceso_Estudio/LoginView.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "LoginView",
      "kind": "clase",
      "code": "public partial class LoginView : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "LoginView",
      "kind": "constructor",
      "code": "public LoginView()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "UserName",
      "kind": "propiedad",
      "code": "public string UserName => usuario.Usuario;",
      "context": "",
      "line": 9
    },
    {
      "name": "PassWord",
      "kind": "propiedad",
      "code": "public string PassWord => password.Password;",
      "context": "",
      "line": 10
    }
  ],
  "relacion-6/BLoginViews_Estudio/EntryContrasenia.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryContrasenia",
      "kind": "clase",
      "code": "public class EntryContrasenia : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryContrasenia",
      "kind": "constructor",
      "code": "public EntryContrasenia()\n    {\n        Placeholder = \"Contraseña (10 caracteres)\";\n        IsPassword = true;\n        MaxLength = 10;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Password",
      "kind": "propiedad",
      "code": "public string Password { get => Reglas.Contrasenia(Text); set => Text = Reglas.Contrasenia(value); }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-6/BLoginViews_Estudio/EntryNombreUsuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "clase",
      "code": "public class EntryNombreUsuario : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "constructor",
      "code": "public EntryNombreUsuario()\n    {\n        Placeholder = \"Usuario (5-15 letras)\";\n        MaxLength = 15;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Usuario",
      "kind": "propiedad",
      "code": "public string Usuario { get => Reglas.NombreUsuario(Text); set => Text = Reglas.NombreUsuario(value); }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-6/BLoginViews_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"Usuario: {login.UserName}\\nContraseña: {login.PassWord}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    }
  ],
  "relacion-7/BAccesoPropias/LoginView.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "LoginView",
      "kind": "clase",
      "code": "public partial class LoginView : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "LoginView",
      "kind": "constructor",
      "code": "public LoginView()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "UserName",
      "kind": "propiedad",
      "code": "public string UserName => usuario.Usuario;",
      "context": "",
      "line": 9
    },
    {
      "name": "PassWord",
      "kind": "propiedad",
      "code": "public string PassWord => password.Password;",
      "context": "",
      "line": 10
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 12
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno { get => layout.Padding; set => layout.Padding = value; }",
      "context": "",
      "line": 23
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public Thickness Margen { get => layout.Margin; set => layout.Margin = value; }",
      "context": "",
      "line": 24
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo { get => layout.BackgroundColor; set => layout.BackgroundColor = value; }",
      "context": "",
      "line": 25
    },
    {
      "name": "Fuente",
      "kind": "propiedad",
      "code": "public double Fuente\n    {\n        get => usuario.FontSize;\n        set\n        {\n            if (value <= 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            usuario.FontSize = password.FontSize = titulo.FontSize = value;\n        }\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "ReemplazarRecurso",
      "kind": "método",
      "code": "public void ReemplazarRecurso()\n    {\n        Resources[\"FondoLayout\"] = Colors.LightSkyBlue;\n    }",
      "context": "",
      "line": 38
    }
  ],
  "relacion-7/BAccesoPropias/Valores.cs": [
    {
      "name": "Microsoft.Maui.Devices",
      "kind": "importación",
      "code": "using Microsoft.Maui.Devices;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "Valores",
      "kind": "clase",
      "code": "public static class Valores\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Android",
      "kind": "propiedad",
      "code": "private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;",
      "context": "",
      "line": 7
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public static double Espaciado => Android ? 12 : 10;",
      "context": "",
      "line": 8
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public static Thickness Relleno => new(Android ? 14 : 10);",
      "context": "",
      "line": 9
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public static Thickness Margen => new(Android ? 8 : 5);",
      "context": "",
      "line": 10
    },
    {
      "name": "FondoLayout",
      "kind": "propiedad",
      "code": "public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;",
      "context": "",
      "line": 11
    },
    {
      "name": "FondoEntry",
      "kind": "propiedad",
      "code": "public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;",
      "context": "",
      "line": 12
    },
    {
      "name": "FondoLabel",
      "kind": "propiedad",
      "code": "public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;",
      "context": "",
      "line": 13
    },
    {
      "name": "FuenteEntry",
      "kind": "propiedad",
      "code": "public static double FuenteEntry => Android ? 20 : 16;",
      "context": "",
      "line": 14
    },
    {
      "name": "FuenteLabel",
      "kind": "propiedad",
      "code": "public static double FuenteLabel => Android ? 22 : 18;",
      "context": "",
      "line": 15
    }
  ],
  "relacion-7/BAccesoPropias/ValorExtension.cs": [
    {
      "name": "Microsoft.Maui.Controls.Xaml",
      "kind": "importación",
      "code": "using Microsoft.Maui.Controls.Xaml;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "ValorExtension",
      "kind": "clase",
      "code": "[AcceptEmptyServiceProvider]\npublic class ValorExtension : IMarkupExtension\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Propiedad",
      "kind": "propiedad",
      "code": "public string Propiedad { get; set; } = \"\";",
      "context": "",
      "line": 7
    },
    {
      "name": "ProvideValue",
      "kind": "método",
      "code": "public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch\n    {\n        \"Espaciado\" => Valores.Espaciado,\n        \"Relleno\" => Valores.Relleno,\n        \"Margen\" => Valores.Margen,\n        \"FondoLayout\" => Valores.FondoLayout,\n        \"FondoEntry\" => Valores.FondoEntry,\n        \"FondoLabel\" => Valores.FondoLabel,\n        \"FuenteEntry\" => Valores.FuenteEntry,\n        \"FuenteLabel\" => Valores.FuenteLabel,\n        _ => throw new ArgumentException(\"Propiedad de extensión no reconocida.\")};",
      "context": "",
      "line": 9
    }
  ],
  "relacion-7/BAccesoRecursosDinamicos/LoginView.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "LoginView",
      "kind": "clase",
      "code": "public partial class LoginView : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "LoginView",
      "kind": "constructor",
      "code": "public LoginView()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "UserName",
      "kind": "propiedad",
      "code": "public string UserName => usuario.Usuario;",
      "context": "",
      "line": 9
    },
    {
      "name": "PassWord",
      "kind": "propiedad",
      "code": "public string PassWord => password.Password;",
      "context": "",
      "line": 10
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 12
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno { get => layout.Padding; set => layout.Padding = value; }",
      "context": "",
      "line": 23
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public Thickness Margen { get => layout.Margin; set => layout.Margin = value; }",
      "context": "",
      "line": 24
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo { get => layout.BackgroundColor; set => layout.BackgroundColor = value; }",
      "context": "",
      "line": 25
    },
    {
      "name": "Fuente",
      "kind": "propiedad",
      "code": "public double Fuente\n    {\n        get => usuario.FontSize;\n        set\n        {\n            if (value <= 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            usuario.FontSize = password.FontSize = titulo.FontSize = value;\n        }\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "ReemplazarRecurso",
      "kind": "método",
      "code": "public void ReemplazarRecurso()\n    {\n        Resources[\"FondoLayout\"] = Colors.LightSkyBlue;\n    }",
      "context": "",
      "line": 38
    }
  ],
  "relacion-7/BAccesoRecursosDinamicos/Valores.cs": [
    {
      "name": "Microsoft.Maui.Devices",
      "kind": "importación",
      "code": "using Microsoft.Maui.Devices;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "Valores",
      "kind": "clase",
      "code": "public static class Valores\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Android",
      "kind": "propiedad",
      "code": "private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;",
      "context": "",
      "line": 7
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public static double Espaciado => Android ? 12 : 10;",
      "context": "",
      "line": 8
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public static Thickness Relleno => new(Android ? 14 : 10);",
      "context": "",
      "line": 9
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public static Thickness Margen => new(Android ? 8 : 5);",
      "context": "",
      "line": 10
    },
    {
      "name": "FondoLayout",
      "kind": "propiedad",
      "code": "public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;",
      "context": "",
      "line": 11
    },
    {
      "name": "FondoEntry",
      "kind": "propiedad",
      "code": "public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;",
      "context": "",
      "line": 12
    },
    {
      "name": "FondoLabel",
      "kind": "propiedad",
      "code": "public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;",
      "context": "",
      "line": 13
    },
    {
      "name": "FuenteEntry",
      "kind": "propiedad",
      "code": "public static double FuenteEntry => Android ? 20 : 16;",
      "context": "",
      "line": 14
    },
    {
      "name": "FuenteLabel",
      "kind": "propiedad",
      "code": "public static double FuenteLabel => Android ? 22 : 18;",
      "context": "",
      "line": 15
    }
  ],
  "relacion-7/BAccesoRecursosDinamicos/ValorExtension.cs": [
    {
      "name": "Microsoft.Maui.Controls.Xaml",
      "kind": "importación",
      "code": "using Microsoft.Maui.Controls.Xaml;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "ValorExtension",
      "kind": "clase",
      "code": "[AcceptEmptyServiceProvider]\npublic class ValorExtension : IMarkupExtension\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Propiedad",
      "kind": "propiedad",
      "code": "public string Propiedad { get; set; } = \"\";",
      "context": "",
      "line": 7
    },
    {
      "name": "ProvideValue",
      "kind": "método",
      "code": "public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch\n    {\n        \"Espaciado\" => Valores.Espaciado,\n        \"Relleno\" => Valores.Relleno,\n        \"Margen\" => Valores.Margen,\n        \"FondoLayout\" => Valores.FondoLayout,\n        \"FondoEntry\" => Valores.FondoEntry,\n        \"FondoLabel\" => Valores.FondoLabel,\n        \"FuenteEntry\" => Valores.FuenteEntry,\n        \"FuenteLabel\" => Valores.FuenteLabel,\n        _ => throw new ArgumentException(\"Propiedad de extensión no reconocida.\")};",
      "context": "",
      "line": 9
    }
  ],
  "relacion-7/BAccesoRecursosEstaticos/LoginView.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "LoginView",
      "kind": "clase",
      "code": "public partial class LoginView : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "LoginView",
      "kind": "constructor",
      "code": "public LoginView()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "UserName",
      "kind": "propiedad",
      "code": "public string UserName => usuario.Usuario;",
      "context": "",
      "line": 9
    },
    {
      "name": "PassWord",
      "kind": "propiedad",
      "code": "public string PassWord => password.Password;",
      "context": "",
      "line": 10
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 12
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno { get => layout.Padding; set => layout.Padding = value; }",
      "context": "",
      "line": 23
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public Thickness Margen { get => layout.Margin; set => layout.Margin = value; }",
      "context": "",
      "line": 24
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo { get => layout.BackgroundColor; set => layout.BackgroundColor = value; }",
      "context": "",
      "line": 25
    },
    {
      "name": "Fuente",
      "kind": "propiedad",
      "code": "public double Fuente\n    {\n        get => usuario.FontSize;\n        set\n        {\n            if (value <= 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            usuario.FontSize = password.FontSize = titulo.FontSize = value;\n        }\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "ReemplazarRecurso",
      "kind": "método",
      "code": "public void ReemplazarRecurso()\n    {\n        Resources[\"FondoLayout\"] = Colors.LightSkyBlue;\n    }",
      "context": "",
      "line": 38
    }
  ],
  "relacion-7/BAccesoRecursosEstaticos/Valores.cs": [
    {
      "name": "Microsoft.Maui.Devices",
      "kind": "importación",
      "code": "using Microsoft.Maui.Devices;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "Valores",
      "kind": "clase",
      "code": "public static class Valores\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Android",
      "kind": "propiedad",
      "code": "private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;",
      "context": "",
      "line": 7
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public static double Espaciado => Android ? 12 : 10;",
      "context": "",
      "line": 8
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public static Thickness Relleno => new(Android ? 14 : 10);",
      "context": "",
      "line": 9
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public static Thickness Margen => new(Android ? 8 : 5);",
      "context": "",
      "line": 10
    },
    {
      "name": "FondoLayout",
      "kind": "propiedad",
      "code": "public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;",
      "context": "",
      "line": 11
    },
    {
      "name": "FondoEntry",
      "kind": "propiedad",
      "code": "public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;",
      "context": "",
      "line": 12
    },
    {
      "name": "FondoLabel",
      "kind": "propiedad",
      "code": "public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;",
      "context": "",
      "line": 13
    },
    {
      "name": "FuenteEntry",
      "kind": "propiedad",
      "code": "public static double FuenteEntry => Android ? 20 : 16;",
      "context": "",
      "line": 14
    },
    {
      "name": "FuenteLabel",
      "kind": "propiedad",
      "code": "public static double FuenteLabel => Android ? 22 : 18;",
      "context": "",
      "line": 15
    }
  ],
  "relacion-7/BAccesoRecursosEstaticos/ValorExtension.cs": [
    {
      "name": "Microsoft.Maui.Controls.Xaml",
      "kind": "importación",
      "code": "using Microsoft.Maui.Controls.Xaml;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "ValorExtension",
      "kind": "clase",
      "code": "[AcceptEmptyServiceProvider]\npublic class ValorExtension : IMarkupExtension\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Propiedad",
      "kind": "propiedad",
      "code": "public string Propiedad { get; set; } = \"\";",
      "context": "",
      "line": 7
    },
    {
      "name": "ProvideValue",
      "kind": "método",
      "code": "public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch\n    {\n        \"Espaciado\" => Valores.Espaciado,\n        \"Relleno\" => Valores.Relleno,\n        \"Margen\" => Valores.Margen,\n        \"FondoLayout\" => Valores.FondoLayout,\n        \"FondoEntry\" => Valores.FondoEntry,\n        \"FondoLabel\" => Valores.FondoLabel,\n        \"FuenteEntry\" => Valores.FuenteEntry,\n        \"FuenteLabel\" => Valores.FuenteLabel,\n        _ => throw new ArgumentException(\"Propiedad de extensión no reconocida.\")};",
      "context": "",
      "line": 9
    }
  ],
  "relacion-7/BAccesoStatic/LoginView.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "LoginView",
      "kind": "clase",
      "code": "public partial class LoginView : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "LoginView",
      "kind": "constructor",
      "code": "public LoginView()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "UserName",
      "kind": "propiedad",
      "code": "public string UserName => usuario.Usuario;",
      "context": "",
      "line": 9
    },
    {
      "name": "PassWord",
      "kind": "propiedad",
      "code": "public string PassWord => password.Password;",
      "context": "",
      "line": 10
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 12
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno { get => layout.Padding; set => layout.Padding = value; }",
      "context": "",
      "line": 23
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public Thickness Margen { get => layout.Margin; set => layout.Margin = value; }",
      "context": "",
      "line": 24
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo { get => layout.BackgroundColor; set => layout.BackgroundColor = value; }",
      "context": "",
      "line": 25
    },
    {
      "name": "Fuente",
      "kind": "propiedad",
      "code": "public double Fuente\n    {\n        get => usuario.FontSize;\n        set\n        {\n            if (value <= 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            usuario.FontSize = password.FontSize = titulo.FontSize = value;\n        }\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "ReemplazarRecurso",
      "kind": "método",
      "code": "public void ReemplazarRecurso()\n    {\n        Resources[\"FondoLayout\"] = Colors.LightSkyBlue;\n    }",
      "context": "",
      "line": 38
    }
  ],
  "relacion-7/BAccesoStatic/Valores.cs": [
    {
      "name": "Microsoft.Maui.Devices",
      "kind": "importación",
      "code": "using Microsoft.Maui.Devices;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "Valores",
      "kind": "clase",
      "code": "public static class Valores\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Android",
      "kind": "propiedad",
      "code": "private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;",
      "context": "",
      "line": 7
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public static double Espaciado => Android ? 12 : 10;",
      "context": "",
      "line": 8
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public static Thickness Relleno => new(Android ? 14 : 10);",
      "context": "",
      "line": 9
    },
    {
      "name": "Margen",
      "kind": "propiedad",
      "code": "public static Thickness Margen => new(Android ? 8 : 5);",
      "context": "",
      "line": 10
    },
    {
      "name": "FondoLayout",
      "kind": "propiedad",
      "code": "public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;",
      "context": "",
      "line": 11
    },
    {
      "name": "FondoEntry",
      "kind": "propiedad",
      "code": "public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;",
      "context": "",
      "line": 12
    },
    {
      "name": "FondoLabel",
      "kind": "propiedad",
      "code": "public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;",
      "context": "",
      "line": 13
    },
    {
      "name": "FuenteEntry",
      "kind": "propiedad",
      "code": "public static double FuenteEntry => Android ? 20 : 16;",
      "context": "",
      "line": 14
    },
    {
      "name": "FuenteLabel",
      "kind": "propiedad",
      "code": "public static double FuenteLabel => Android ? 22 : 18;",
      "context": "",
      "line": 15
    }
  ],
  "relacion-7/BAccesoStatic/ValorExtension.cs": [
    {
      "name": "Microsoft.Maui.Controls.Xaml",
      "kind": "importación",
      "code": "using Microsoft.Maui.Controls.Xaml;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "ValorExtension",
      "kind": "clase",
      "code": "[AcceptEmptyServiceProvider]\npublic class ValorExtension : IMarkupExtension\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Propiedad",
      "kind": "propiedad",
      "code": "public string Propiedad { get; set; } = \"\";",
      "context": "",
      "line": 7
    },
    {
      "name": "ProvideValue",
      "kind": "método",
      "code": "public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch\n    {\n        \"Espaciado\" => Valores.Espaciado,\n        \"Relleno\" => Valores.Relleno,\n        \"Margen\" => Valores.Margen,\n        \"FondoLayout\" => Valores.FondoLayout,\n        \"FondoEntry\" => Valores.FondoEntry,\n        \"FondoLabel\" => Valores.FondoLabel,\n        \"FuenteEntry\" => Valores.FuenteEntry,\n        \"FuenteLabel\" => Valores.FuenteLabel,\n        _ => throw new ArgumentException(\"Propiedad de extensión no reconocida.\")};",
      "context": "",
      "line": 9
    }
  ],
  "relacion-7/BLoginViews_Estudio/EntryContrasenia.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryContrasenia",
      "kind": "clase",
      "code": "public class EntryContrasenia : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryContrasenia",
      "kind": "constructor",
      "code": "public EntryContrasenia()\n    {\n        Placeholder = \"Contraseña (10 caracteres)\";\n        IsPassword = true;\n        MaxLength = 10;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Password",
      "kind": "propiedad",
      "code": "public string Password { get => Reglas.Contrasenia(Text); set => Text = Reglas.Contrasenia(value); }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-7/BLoginViews_Estudio/EntryNombreUsuario.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "clase",
      "code": "public class EntryNombreUsuario : Entry\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "EntryNombreUsuario",
      "kind": "constructor",
      "code": "public EntryNombreUsuario()\n    {\n        Placeholder = \"Usuario (5-15 letras)\";\n        MaxLength = 15;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Usuario",
      "kind": "propiedad",
      "code": "public string Usuario { get => Reglas.NombreUsuario(Text); set => Text = Reglas.NombreUsuario(value); }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-7/BLoginViews_Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-7/PruebasPropias/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-7/PruebasPropias/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-7/PruebasPropias/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-7/PruebasPropias/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-7/PruebasPropias/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"{login.UserName} / {login.PassWord}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Cambiar",
      "kind": "método",
      "code": "private void Cambiar(object sender, EventArgs e)\n    {\n        login.Espaciado = 20;\n        login.Relleno = new Thickness(20);\n        login.Margen = new Thickness(10);\n        login.Fondo = Colors.LightPink;\n        login.Fuente = 22;\n    }",
      "context": "",
      "line": 21
    },
    {
      "name": "Recurso",
      "kind": "método",
      "code": "private void Recurso(object sender, EventArgs e)\n    {\n        login.ReemplazarRecurso();\n    }",
      "context": "",
      "line": 30
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"{login.UserName} / {login.PassWord}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Cambiar",
      "kind": "método",
      "code": "private void Cambiar(object sender, EventArgs e)\n    {\n        login.Espaciado = 20;\n        login.Relleno = new Thickness(20);\n        login.Margen = new Thickness(10);\n        login.Fondo = Colors.LightPink;\n        login.Fuente = 22;\n    }",
      "context": "",
      "line": 21
    },
    {
      "name": "Recurso",
      "kind": "método",
      "code": "private void Recurso(object sender, EventArgs e)\n    {\n        login.ReemplazarRecurso();\n    }",
      "context": "",
      "line": 30
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"{login.UserName} / {login.PassWord}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Cambiar",
      "kind": "método",
      "code": "private void Cambiar(object sender, EventArgs e)\n    {\n        login.Espaciado = 20;\n        login.Relleno = new Thickness(20);\n        login.Margen = new Thickness(10);\n        login.Fondo = Colors.LightPink;\n        login.Fuente = 22;\n    }",
      "context": "",
      "line": 21
    },
    {
      "name": "Recurso",
      "kind": "método",
      "code": "private void Recurso(object sender, EventArgs e)\n    {\n        login.ReemplazarRecurso();\n    }",
      "context": "",
      "line": 30
    }
  ],
  "relacion-7/PruebasStatic/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-7/PruebasStatic/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-7/PruebasStatic/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-7/PruebasStatic/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-7/PruebasStatic/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Prueba académica\", $\"{login.UserName} / {login.PassWord}\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Cambiar",
      "kind": "método",
      "code": "private void Cambiar(object sender, EventArgs e)\n    {\n        login.Espaciado = 20;\n        login.Relleno = new Thickness(20);\n        login.Margen = new Thickness(10);\n        login.Fondo = Colors.LightPink;\n        login.Fuente = 22;\n    }",
      "context": "",
      "line": 21
    },
    {
      "name": "Recurso",
      "kind": "método",
      "code": "private void Recurso(object sender, EventArgs e)\n    {\n        login.ReemplazarRecurso();\n    }",
      "context": "",
      "line": 30
    }
  ],
  "relacion-8/BRelacion07Estudio/AspectoExtension.cs": [
    {
      "name": "Microsoft.Maui.Controls.Xaml",
      "kind": "importación",
      "code": "using Microsoft.Maui.Controls.Xaml;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "AspectoExtension",
      "kind": "clase",
      "code": "[AcceptEmptyServiceProvider]\npublic class AspectoExtension : IMarkupExtension\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "Tipo",
      "kind": "propiedad",
      "code": "public string Tipo { get; set; } = \"Espacio\";",
      "context": "",
      "line": 7
    },
    {
      "name": "ProvideValue",
      "kind": "método",
      "code": "public object ProvideValue(IServiceProvider serviceProvider) => Tipo switch\n    {\n        \"Espacio\" => 10d,\n        \"Relleno\" => new Thickness(10),\n        \"Matricula\" => Colors.Green,\n        \"Edad\" => Colors.Blue,\n        _ => throw new ArgumentException(\"Tipo de aspecto desconocido.\")};",
      "context": "",
      "line": 9
    }
  ],
  "relacion-8/BRelacion07Estudio/Reglas.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Reglas",
      "kind": "clase",
      "code": "public static class Reglas\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Texto",
      "kind": "método",
      "code": "public static string Texto(string? valor, int minimo, int maximo, string campo)\n    {\n        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)\n            throw new ArgumentException($\"{campo}: entre {minimo} y {maximo} caracteres.\");\n        return valor;\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "EdadEntrada",
      "kind": "método",
      "code": "public static int EdadEntrada(string? texto)\n    {\n        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)\n            throw new ArgumentException(\"La edad debe ser un entero entre 5 y 70.\");\n        return edad;\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "NombreUsuario",
      "kind": "método",
      "code": "public static string NombreUsuario(string? texto)\n    {\n        string valor = Texto(texto, 5, 15, \"Usuario\");\n        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.\n        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))\n            throw new ArgumentException(\"Usuario: solo letras A-Z sin acentos.\");\n        return valor;\n    }",
      "context": "",
      "line": 18
    },
    {
      "name": "Contrasenia",
      "kind": "método",
      "code": "public static string Contrasenia(string? texto)\n    {\n        string valor = Texto(texto, 10, 10, \"Contraseña\");\n        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit) || !valor.Any(c => \".,:;\".Contains(c)))\n            throw new ArgumentException(\"La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;\");\n        return valor;\n    }",
      "context": "",
      "line": 27
    },
    {
      "name": "Operar",
      "kind": "método",
      "code": "public static int Operar(int a, int b, char op) => op switch\n    {\n        '+' => checked(a + b),\n        '-' => checked(a - b),\n        '*' => checked(a * b),\n        '/' => a / b,\n        '%' => a % b,\n        _ => throw new ArgumentException(\"Operación no válida.\")};",
      "context": "",
      "line": 35
    },
    {
      "name": "SiguienteEstado",
      "kind": "método",
      "code": "public static int SiguienteEstado(int estado) => (estado + 1) % 3;",
      "context": "",
      "line": 43
    },
    {
      "name": "Matricula",
      "kind": "método",
      "code": "public static string Matricula(string? valor)\n    {\n        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.\n        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @\"\\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\\z\"))\n            throw new ArgumentException(\"Formato requerido: 0000-BBB, sin vocales.\");\n        return valor;\n    }",
      "context": "",
      "line": 44
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException(\"El límite debe ser superior a 12.\");",
      "context": "",
      "line": 52
    },
    {
      "name": "Edad",
      "kind": "método",
      "code": "public static int Edad(DateTime nacimiento, DateTime hoy)\n    {\n        nacimiento = nacimiento.Date;\n        hoy = hoy.Date;\n        if (nacimiento > hoy)\n            throw new ArgumentException(\"La fecha no puede ser futura.\");\n        int edad = hoy.Year - nacimiento.Year;\n        if (nacimiento.AddYears(edad) > hoy)\n            edad--;\n        return edad;\n    }",
      "context": "",
      "line": 53
    }
  ],
  "relacion-8/BRelacion07Estudio/ViewMatriculaEstudio.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "ViewMatriculaEstudio",
      "kind": "clase",
      "code": "public partial class ViewMatriculaEstudio : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "ViewMatriculaEstudio",
      "kind": "constructor",
      "code": "public ViewMatriculaEstudio()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Matricula",
      "kind": "propiedad",
      "code": "public string Matricula\n    {\n        get => Reglas.Matricula(entrada.Text);\n        set\n        {\n            try\n            {\n                string validada = Reglas.Matricula(value);\n                entrada.Text = validada;\n                Mensaje(\"\");\n            }\n            catch (ArgumentException ex)\n            {\n                Mensaje(ex.Message);\n                throw;\n            }\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Cambio",
      "kind": "método",
      "code": "private void Cambio(object sender, TextChangedEventArgs e)\n    {\n        try\n        {\n            _ = Reglas.Matricula(entrada.Text);\n            Mensaje(\"\");\n        }\n        catch (ArgumentException ex)\n        {\n            Mensaje(ex.Message);\n        }\n    }",
      "context": "",
      "line": 28
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = fila.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 41
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno\n    {\n        get => layout.Padding;\n        set\n        {\n            layout.Padding = fila.Padding = value;\n        }\n    }",
      "context": "",
      "line": 52
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo\n    {\n        get => layout.BackgroundColor;\n        set\n        {\n            layout.BackgroundColor = fila.BackgroundColor = value;\n        }\n    }",
      "context": "",
      "line": 61
    },
    {
      "name": "Mensaje",
      "kind": "método",
      "code": "private void Mensaje(string texto)\n    {\n        error.Text = texto;\n        error.BackgroundColor = texto.Length == 0 ? Colors.Transparent : Colors.Yellow;\n    }",
      "context": "",
      "line": 70
    }
  ],
  "relacion-8/BRelacion07Estudio/ViewMayorEdadEstudio.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "ViewMayorEdadEstudio",
      "kind": "clase",
      "code": "public partial class ViewMayorEdadEstudio : ContentView\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "limite",
      "kind": "campo",
      "code": "private int limite = 18;",
      "context": "",
      "line": 4
    },
    {
      "name": "ViewMayorEdadEstudio",
      "kind": "constructor",
      "code": "public ViewMayorEdadEstudio()\n    {\n        InitializeComponent();\n        Actualizar();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "FechaNacimiento",
      "kind": "propiedad",
      "code": "public DateTime FechaNacimiento\n    {\n        get => fecha.Date ?? DateTime.Today;\n        set\n        {\n            if (value.Date > DateTime.Today)\n            {\n                Mensaje(\"La fecha no puede ser futura.\");\n                throw new ArgumentException(\"La fecha no puede ser futura.\");\n            }\n\n            fecha.Date = value.Date;\n            Actualizar();\n        }\n    }",
      "context": "",
      "line": 11
    },
    {
      "name": "Edad",
      "kind": "propiedad",
      "code": "public int Edad => Reglas.Edad(FechaNacimiento, DateTime.Today);",
      "context": "",
      "line": 27
    },
    {
      "name": "MayoriaEdad",
      "kind": "propiedad",
      "code": "public int MayoriaEdad\n    {\n        get => limite;\n        set\n        {\n            limite = Reglas.Limite(value);\n            Actualizar();\n        }\n    }",
      "context": "",
      "line": 29
    },
    {
      "name": "CambioFecha",
      "kind": "método",
      "code": "private void CambioFecha(object? sender, DateChangedEventArgs e)\n    {\n        if (error is not null)\n            Actualizar();\n    }",
      "context": "",
      "line": 39
    },
    {
      "name": "Actualizar",
      "kind": "método",
      "code": "private void Actualizar()\n    {\n        try\n        {\n            int anos = Edad;\n            edad.Text = anos.ToString();\n            Mensaje(anos < limite ? \"No eres mayor de edad\" : \"\");\n        }\n        catch (ArgumentException ex)\n        {\n            edad.Text = \"\";\n            Mensaje(ex.Message);\n        }\n    }",
      "context": "",
      "line": 45
    },
    {
      "name": "Espaciado",
      "kind": "propiedad",
      "code": "public double Espaciado\n    {\n        get => layout.Spacing;\n        set\n        {\n            if (value < 0)\n                throw new ArgumentOutOfRangeException(nameof(value));\n            layout.Spacing = fila.Spacing = value;\n        }\n    }",
      "context": "",
      "line": 60
    },
    {
      "name": "Relleno",
      "kind": "propiedad",
      "code": "public Thickness Relleno\n    {\n        get => layout.Padding;\n        set\n        {\n            layout.Padding = fila.Padding = value;\n        }\n    }",
      "context": "",
      "line": 71
    },
    {
      "name": "Fondo",
      "kind": "propiedad",
      "code": "public Color Fondo\n    {\n        get => layout.BackgroundColor;\n        set\n        {\n            layout.BackgroundColor = fila.BackgroundColor = value;\n        }\n    }",
      "context": "",
      "line": 80
    },
    {
      "name": "Mensaje",
      "kind": "método",
      "code": "private void Mensaje(string texto)\n    {\n        error.Text = texto;\n        error.BackgroundColor = texto.Length == 0 ? Colors.Transparent : Colors.Yellow;\n    }",
      "context": "",
      "line": 89
    }
  ],
  "relacion-8/PruebasR07_Estudio/App.xaml.cs": [
    {
      "name": "Microsoft.Extensions.DependencyInjection",
      "kind": "importación",
      "code": "using Microsoft.Extensions.DependencyInjection;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "App",
      "kind": "clase",
      "code": "public partial class App : Application\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "App",
      "kind": "constructor",
      "code": "public App()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 6
    },
    {
      "name": "CreateWindow",
      "kind": "método",
      "code": "protected override Window CreateWindow(IActivationState? activationState)\n    {\n        return new Window(new AppShell());\n    }",
      "context": "",
      "line": 11
    }
  ],
  "relacion-8/PruebasR07_Estudio/AppShell.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "AppShell",
      "kind": "clase",
      "code": "public partial class AppShell : Shell\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "AppShell",
      "kind": "constructor",
      "code": "public AppShell()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    }
  ],
  "relacion-8/PruebasR07_Estudio/MainPage.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "MainPage",
      "kind": "clase",
      "code": "public partial class MainPage : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "count",
      "kind": "campo",
      "code": "int count = 0;",
      "context": "",
      "line": 4
    },
    {
      "name": "MainPage",
      "kind": "constructor",
      "code": "public MainPage()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 5
    },
    {
      "name": "OnCounterClicked",
      "kind": "método",
      "code": "private void OnCounterClicked(object? sender, EventArgs e)\n    {\n        count++;\n        if (count == 1)\n            CounterBtn.Text = $\"Clicked {count} time\";\n        else\n            CounterBtn.Text = $\"Clicked {count} times\";\n        SemanticScreenReader.Announce(CounterBtn.Text);\n    }",
      "context": "",
      "line": 10
    }
  ],
  "relacion-8/PruebasR07_Estudio/MauiProgram.cs": [
    {
      "name": "Microsoft.Extensions.Logging",
      "kind": "importación",
      "code": "using Microsoft.Extensions.Logging;",
      "context": "",
      "line": 1
    },
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 3
    },
    {
      "name": "MauiProgram",
      "kind": "clase",
      "code": "public static class MauiProgram\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 4
    },
    {
      "name": "CreateMauiApp · builder",
      "kind": "método",
      "code": "MauiAppBuilder builder = MauiApp.CreateBuilder();\n        builder.UseMauiApp<App>().ConfigureFonts(fonts =>\n        {\n            fonts.AddFont(\"OpenSans-Regular.ttf\", \"OpenSansRegular\");\n            fonts.AddFont(\"OpenSans-Semibold.ttf\", \"OpenSansSemibold\");\n        });",
      "context": "Dentro de CreateMauiApp: crea y configura builder antes de continuar.",
      "line": 8
    },
    {
      "name": "CreateMauiApp · operación 1",
      "kind": "método",
      "code": "return builder.Build();",
      "context": "Dentro de CreateMauiApp, en el orden indicado. No sustituye la declaración del método ni sus llaves.",
      "line": 17
    }
  ],
  "relacion-8/PruebasR07_Estudio/Solucion.xaml.cs": [
    {
      "name": "Estudio",
      "kind": "namespace",
      "code": "namespace Estudio;",
      "context": "Al principio del archivo, antes de declarar la clase.",
      "line": 1
    },
    {
      "name": "Solucion",
      "kind": "clase",
      "code": "public partial class Solucion : ContentPage\n{",
      "context": "Cabecera de la clase: los miembros siguientes van dentro de sus llaves. Conserva el cierre del archivo completo.",
      "line": 2
    },
    {
      "name": "Solucion",
      "kind": "constructor",
      "code": "public Solucion()\n    {\n        InitializeComponent();\n    }",
      "context": "",
      "line": 4
    },
    {
      "name": "Asignar",
      "kind": "método",
      "code": "private async void Asignar(object sender, EventArgs e)\n    {\n        try\n        {\n            matricula.Matricula = valorMatricula.Text ?? \"\";\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 9
    },
    {
      "name": "Limite",
      "kind": "método",
      "code": "private async void Limite(object sender, EventArgs e)\n    {\n        try\n        {\n            if (!int.TryParse(valorLimite.Text, out int valor))\n                throw new ArgumentException(\"Introduce un entero.\");\n            persona.MayoriaEdad = valor;\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 21
    },
    {
      "name": "Mostrar",
      "kind": "método",
      "code": "private async void Mostrar(object sender, EventArgs e)\n    {\n        try\n        {\n            await DisplayAlertAsync(\"Datos\", $\"{matricula.Matricula} / {persona.FechaNacimiento:d} / {persona.Edad} años\", \"Aceptar\");\n        }\n        catch (ArgumentException ex)\n        {\n            await DisplayAlertAsync(\"Error\", ex.Message, \"Aceptar\");\n        }\n    }",
      "context": "",
      "line": 35
    },
    {
      "name": "Aspecto",
      "kind": "método",
      "code": "private void Aspecto(object sender, EventArgs e)\n    {\n        matricula.Espaciado = persona.Espaciado = 20;\n        matricula.Relleno = persona.Relleno = new Thickness(20);\n        matricula.Fondo = Colors.DarkGreen;\n        persona.Fondo = Colors.DarkBlue;\n    }",
      "context": "",
      "line": 47
    }
  ],
  "relacion-1/Relacion1E01_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E01_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso Vertical\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso Vertical\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Ejercicio01.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio01\" Title=\"Acceso Vertical\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio01\"\n    Title=\"Acceso Vertical\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su nombre\" HorizontalOptions=\"Center\" /><Entry x:Name=\"nombre\" MaxLength=\"20\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su nombre\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca sus apellidos\" HorizontalOptions=\"Center\" /><Entry x:Name=\"apellidos\" MaxLength=\"40\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca sus apellidos\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su edad\" HorizontalOptions=\"Center\" /><Entry x:Name=\"edad\" Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su edad\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Ejercicio02.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio02\" Title=\"Acceso Mixto\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio02\"\n    Title=\"Acceso Mixto\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su nombre\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"nombre\" MaxLength=\"20\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su nombre\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca sus apellidos\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"apellidos\" MaxLength=\"40\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca sus apellidos\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su edad\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"edad\" Keyboard=\"Numeric\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su edad\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E01_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-1/Relacion1E01_Estudio/Relacion1E01_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-1/Relacion1E02_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E02_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso Mixto\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso Mixto\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Ejercicio01.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio01\" Title=\"Acceso Vertical\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio01\"\n    Title=\"Acceso Vertical\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su nombre\" HorizontalOptions=\"Center\" /><Entry x:Name=\"nombre\" MaxLength=\"20\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su nombre\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca sus apellidos\" HorizontalOptions=\"Center\" /><Entry x:Name=\"apellidos\" MaxLength=\"40\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca sus apellidos\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su edad\" HorizontalOptions=\"Center\" /><Entry x:Name=\"edad\" Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su edad\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Ejercicio02.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio02\" Title=\"Acceso Mixto\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio02\"\n    Title=\"Acceso Mixto\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su nombre\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"nombre\" MaxLength=\"20\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su nombre\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca sus apellidos\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"apellidos\" MaxLength=\"40\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca sus apellidos\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su edad\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"edad\" Keyboard=\"Numeric\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su edad\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-1/Relacion1E02_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-1/Relacion1E02_Estudio/Relacion1E02_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-2/Relacion2_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-2/Relacion2_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Stack XAML\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Stack XAML\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Grid XAML\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Grid XAML\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Stack C#\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio03}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Stack C#\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio03}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Grid C#\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio04}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Grid C#\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio04}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio01.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio01\" Title=\"Calculadora Stack XAML\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio01\"\n    Title=\"Calculadora Stack XAML\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Vertical\" Padding=\"20\" Spacing=\"6\">",
      "display": "<StackLayout\n    Orientation=\"Vertical\"\n    Padding=\"20\"\n    Spacing=\"6\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Entry",
      "kind": "etiqueta",
      "code": "<Entry x:Name=\"visor\" IsReadOnly=\"True\" />",
      "display": "<Entry\n    x:Name=\"visor\"\n    IsReadOnly=\"True\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"7\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"8\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"9\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"×\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"7\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"8\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"9\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"×\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"4\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"5\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"6\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"+\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"4\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"5\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"6\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"+\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"1\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"2\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"3\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"÷\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"1\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"2\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"3\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"÷\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"0\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"%\" WidthRequest=\"65\" Clicked=\"Operacion\" /><Button Text=\"-\" WidthRequest=\"65\" Clicked=\"Operacion\" /><Button Text=\"=\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"0\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"%\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /><Button\n    Text=\"-\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /><Button\n    Text=\"=\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"C\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Text=\"C\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-2/Relacion2_Estudio/Ejercicio02.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Ejercicio02\" Title=\"Calculadora Grid XAML\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Ejercicio02\"\n    Title=\"Calculadora Grid XAML\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid Padding=\"20\" RowDefinitions=\"Auto,*,*,*,*,Auto\" ColumnDefinitions=\"*,*,*,*\" RowSpacing=\"6\" ColumnSpacing=\"6\">",
      "display": "<Grid\n    Padding=\"20\"\n    RowDefinitions=\"Auto,*,*,*,*,Auto\"\n    ColumnDefinitions=\"*,*,*,*\"\n    RowSpacing=\"6\"\n    ColumnSpacing=\"6\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Entry",
      "kind": "etiqueta",
      "code": "<Entry x:Name=\"visor\" IsReadOnly=\"True\" Grid.ColumnSpan=\"4\" />",
      "display": "<Entry\n    x:Name=\"visor\"\n    IsReadOnly=\"True\"\n    Grid.ColumnSpan=\"4\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 1",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"1\" Grid.Column=\"0\" Text=\"7\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"1\" Text=\"8\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"2\" Text=\"9\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"3\" Text=\"×\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"1\"\n    Grid.Column=\"0\"\n    Text=\"7\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"1\"\n    Text=\"8\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"2\"\n    Text=\"9\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"3\"\n    Text=\"×\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 2",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"2\" Grid.Column=\"0\" Text=\"4\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"1\" Text=\"5\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"2\" Text=\"6\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"3\" Text=\"+\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"2\"\n    Grid.Column=\"0\"\n    Text=\"4\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"1\"\n    Text=\"5\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"2\"\n    Text=\"6\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"3\"\n    Text=\"+\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 3",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"3\" Grid.Column=\"0\" Text=\"1\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"1\" Text=\"2\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"2\" Text=\"3\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"3\" Text=\"÷\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"3\"\n    Grid.Column=\"0\"\n    Text=\"1\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"1\"\n    Text=\"2\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"2\"\n    Text=\"3\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"3\"\n    Text=\"÷\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 4",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"4\" Grid.Column=\"0\" Text=\"0\" Clicked=\"Digito\" /><Button Grid.Row=\"4\" Grid.Column=\"1\" Text=\"%\" Clicked=\"Operacion\" /><Button Grid.Row=\"4\" Grid.Column=\"2\" Text=\"-\" Clicked=\"Operacion\" /><Button Grid.Row=\"4\" Grid.Column=\"3\" Text=\"=\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"4\"\n    Grid.Column=\"0\"\n    Text=\"0\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"1\"\n    Text=\"%\"\n    Clicked=\"Operacion\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"2\"\n    Text=\"-\"\n    Clicked=\"Operacion\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"3\"\n    Text=\"=\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"C\" Clicked=\"Operacion\" Grid.Row=\"5\" Grid.ColumnSpan=\"4\" />",
      "display": "<Button\n    Text=\"C\"\n    Clicked=\"Operacion\"\n    Grid.Row=\"5\"\n    Grid.ColumnSpan=\"4\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-2/Relacion2_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-2/Relacion2_Estudio/Relacion2_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-3/Relacion3_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-3/Relacion3_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Tablero Dinámico\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Tablero Dinámico\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio01}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Tablero Dinámico Color\"><ShellContent ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Tablero Dinámico Color\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Ejercicio02}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-3/Relacion3_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-3/Relacion3_Estudio/Relacion3_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AccesoMixto.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AccesoMixto\" Title=\"Acceso Mixto\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AccesoMixto\"\n    Title=\"Acceso Mixto\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su nombre\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"nombre\" MaxLength=\"20\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su nombre\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca sus apellidos\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"apellidos\" MaxLength=\"40\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca sus apellidos\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid ColumnDefinitions=\"Auto,*\"><Label Text=\"Introduzca su edad\" VerticalOptions=\"Center\" /><Entry Grid.Column=\"1\" x:Name=\"edad\" Keyboard=\"Numeric\" /></Grid>",
      "display": "<Grid\n    ColumnDefinitions=\"Auto,*\"><Label\n    Text=\"Introduzca su edad\"\n    VerticalOptions=\"Center\" /><Entry\n    Grid.Column=\"1\"\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></Grid>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AccesoVertical.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AccesoVertical\" Title=\"Acceso Vertical\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AccesoVertical\"\n    Title=\"Acceso Vertical\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"12\">",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"12\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su nombre\" HorizontalOptions=\"Center\" /><Entry x:Name=\"nombre\" MaxLength=\"20\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su nombre\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"nombre\"\n    MaxLength=\"20\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca sus apellidos\" HorizontalOptions=\"Center\" /><Entry x:Name=\"apellidos\" MaxLength=\"40\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca sus apellidos\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"apellidos\"\n    MaxLength=\"40\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout><Label Text=\"Introduzca su edad\" HorizontalOptions=\"Center\" /><Entry x:Name=\"edad\" Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout><Label\n    Text=\"Introduzca su edad\"\n    HorizontalOptions=\"Center\" /><Entry\n    x:Name=\"edad\"\n    Keyboard=\"Numeric\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"Acceder\" Clicked=\"Acceder\" HorizontalOptions=\"Center\" />",
      "display": "<Button\n    Text=\"Acceder\"\n    Clicked=\"Acceder\"\n    HorizontalOptions=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"resultado\" HorizontalTextAlignment=\"Center\" />",
      "display": "<Label\n    x:Name=\"resultado\"\n    HorizontalTextAlignment=\"Center\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio1_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio1_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso Vertical\"><ShellContent ContentTemplate=\"{DataTemplate local:AccesoVertical}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso Vertical\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:AccesoVertical}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso Mixto\"><ShellContent ContentTemplate=\"{DataTemplate local:AccesoMixto}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso Mixto\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:AccesoMixto}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio1_Estudio/Ejercicio1_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-4/Ejercicio1_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-4/Ejercicio2_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio2_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Stack XAML\"><ShellContent ContentTemplate=\"{DataTemplate local:CalculadoraStackX}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Stack XAML\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:CalculadoraStackX}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Grid XAML\"><ShellContent ContentTemplate=\"{DataTemplate local:CalculadoraGridX}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Grid XAML\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:CalculadoraGridX}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Stack C#\"><ShellContent ContentTemplate=\"{DataTemplate local:CalculadoraStackCS}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Stack C#\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:CalculadoraStackCS}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Calculadora Grid C#\"><ShellContent ContentTemplate=\"{DataTemplate local:CalculadoraGridCS}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Calculadora Grid C#\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:CalculadoraGridCS}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraGridX.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.CalculadoraGridX\" Title=\"Calculadora Grid XAML\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.CalculadoraGridX\"\n    Title=\"Calculadora Grid XAML\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Grid",
      "kind": "etiqueta",
      "code": "<Grid Padding=\"20\" RowDefinitions=\"Auto,*,*,*,*,Auto\" ColumnDefinitions=\"*,*,*,*\" RowSpacing=\"6\" ColumnSpacing=\"6\">",
      "display": "<Grid\n    Padding=\"20\"\n    RowDefinitions=\"Auto,*,*,*,*,Auto\"\n    ColumnDefinitions=\"*,*,*,*\"\n    RowSpacing=\"6\"\n    ColumnSpacing=\"6\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Entry",
      "kind": "etiqueta",
      "code": "<Entry x:Name=\"visor\" IsReadOnly=\"True\" Grid.ColumnSpan=\"4\" />",
      "display": "<Entry\n    x:Name=\"visor\"\n    IsReadOnly=\"True\"\n    Grid.ColumnSpan=\"4\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 1",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"1\" Grid.Column=\"0\" Text=\"7\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"1\" Text=\"8\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"2\" Text=\"9\" Clicked=\"Digito\" /><Button Grid.Row=\"1\" Grid.Column=\"3\" Text=\"×\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"1\"\n    Grid.Column=\"0\"\n    Text=\"7\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"1\"\n    Text=\"8\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"2\"\n    Text=\"9\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"1\"\n    Grid.Column=\"3\"\n    Text=\"×\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 2",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"2\" Grid.Column=\"0\" Text=\"4\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"1\" Text=\"5\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"2\" Text=\"6\" Clicked=\"Digito\" /><Button Grid.Row=\"2\" Grid.Column=\"3\" Text=\"+\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"2\"\n    Grid.Column=\"0\"\n    Text=\"4\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"1\"\n    Text=\"5\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"2\"\n    Text=\"6\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"2\"\n    Grid.Column=\"3\"\n    Text=\"+\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 3",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"3\" Grid.Column=\"0\" Text=\"1\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"1\" Text=\"2\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"2\" Text=\"3\" Clicked=\"Digito\" /><Button Grid.Row=\"3\" Grid.Column=\"3\" Text=\"÷\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"3\"\n    Grid.Column=\"0\"\n    Text=\"1\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"1\"\n    Text=\"2\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"2\"\n    Text=\"3\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"3\"\n    Grid.Column=\"3\"\n    Text=\"÷\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Fila de botones 4",
      "kind": "etiqueta",
      "code": "<Button Grid.Row=\"4\" Grid.Column=\"0\" Text=\"0\" Clicked=\"Digito\" /><Button Grid.Row=\"4\" Grid.Column=\"1\" Text=\"%\" Clicked=\"Operacion\" /><Button Grid.Row=\"4\" Grid.Column=\"2\" Text=\"-\" Clicked=\"Operacion\" /><Button Grid.Row=\"4\" Grid.Column=\"3\" Text=\"=\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Grid.Row=\"4\"\n    Grid.Column=\"0\"\n    Text=\"0\"\n    Clicked=\"Digito\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"1\"\n    Text=\"%\"\n    Clicked=\"Operacion\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"2\"\n    Text=\"-\"\n    Clicked=\"Operacion\" /><Button\n    Grid.Row=\"4\"\n    Grid.Column=\"3\"\n    Text=\"=\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"C\" Clicked=\"Operacion\" Grid.Row=\"5\" Grid.ColumnSpan=\"4\" />",
      "display": "<Button\n    Text=\"C\"\n    Clicked=\"Operacion\"\n    Grid.Row=\"5\"\n    Grid.ColumnSpan=\"4\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio2_Estudio/CalculadoraStackX.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.CalculadoraStackX\" Title=\"Calculadora Stack XAML\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.CalculadoraStackX\"\n    Title=\"Calculadora Stack XAML\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Vertical\" Padding=\"20\" Spacing=\"6\">",
      "display": "<StackLayout\n    Orientation=\"Vertical\"\n    Padding=\"20\"\n    Spacing=\"6\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Entry",
      "kind": "etiqueta",
      "code": "<Entry x:Name=\"visor\" IsReadOnly=\"True\" />",
      "display": "<Entry\n    x:Name=\"visor\"\n    IsReadOnly=\"True\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"7\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"8\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"9\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"×\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"7\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"8\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"9\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"×\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"4\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"5\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"6\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"+\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"4\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"5\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"6\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"+\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"1\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"2\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"3\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"÷\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"1\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"2\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"3\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"÷\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "StackLayout",
      "kind": "etiqueta",
      "code": "<StackLayout Orientation=\"Horizontal\" Spacing=\"6\"><Button Text=\"0\" WidthRequest=\"65\" Clicked=\"Digito\" /><Button Text=\"%\" WidthRequest=\"65\" Clicked=\"Operacion\" /><Button Text=\"-\" WidthRequest=\"65\" Clicked=\"Operacion\" /><Button Text=\"=\" WidthRequest=\"65\" Clicked=\"Operacion\" /></StackLayout>",
      "display": "<StackLayout\n    Orientation=\"Horizontal\"\n    Spacing=\"6\"><Button\n    Text=\"0\"\n    WidthRequest=\"65\"\n    Clicked=\"Digito\" /><Button\n    Text=\"%\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /><Button\n    Text=\"-\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /><Button\n    Text=\"=\"\n    WidthRequest=\"65\"\n    Clicked=\"Operacion\" /></StackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button Text=\"C\" Clicked=\"Operacion\" />",
      "display": "<Button\n    Text=\"C\"\n    Clicked=\"Operacion\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio2_Estudio/Ejercicio2_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-4/Ejercicio2_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-4/Ejercicio3_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio3_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Tablero Dinámico\"><ShellContent ContentTemplate=\"{DataTemplate local:TableroCS}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Tablero Dinámico\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:TableroCS}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Tablero Dinámico Color\"><ShellContent ContentTemplate=\"{DataTemplate local:TableroColorCS}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Tablero Dinámico Color\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:TableroColorCS}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-4/Ejercicio3_Estudio/Ejercicio3_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    }
  ],
  "relacion-4/Ejercicio3_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-5/BLoginViews_Estudio/BLoginViews_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-5/LoginAcceso_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-5/LoginAcceso_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-5/LoginAcceso_Estudio/LoginAcceso_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-5/LoginAcceso_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-5/LoginAcceso_Estudio/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:views=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"Prueba de biblioteca\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:views=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"Prueba de biblioteca\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><views:EntryNombreUsuario x:Name=\"usuario\" /><views:EntryContrasenia x:Name=\"password\" /><Button Text=\"Mostrar datos de prueba\" Clicked=\"Mostrar\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><views:EntryNombreUsuario\n    x:Name=\"usuario\" /><views:EntryContrasenia\n    x:Name=\"password\" /><Button\n    Text=\"Mostrar datos de prueba\"\n    Clicked=\"Mostrar\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/BAcceso_Estudio/BAcceso_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/BAcceso_Estudio/LoginView.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:views=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" x:Class=\"Estudio.LoginView\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:views=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    x:Class=\"Estudio.LoginView\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Spacing=\"10\" Padding=\"10\"><views:EntryNombreUsuario x:Name=\"usuario\" /><views:EntryContrasenia x:Name=\"password\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Spacing=\"10\"\n    Padding=\"10\"><views:EntryNombreUsuario\n    x:Name=\"usuario\" /><views:EntryContrasenia\n    x:Name=\"password\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/BLoginViews_Estudio/BLoginViews_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Acceso\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Acceso\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/LoginAccesoV2_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BAcceso_Estudio/BAcceso_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BAcceso_Estudio/BAcceso_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-6/LoginAccesoV2_Estudio/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:views=\"clr-namespace:Estudio;assembly=BAcceso_Estudio\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"Prueba de biblioteca\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:views=\"clr-namespace:Estudio;assembly=BAcceso_Estudio\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"Prueba de biblioteca\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><views:LoginView x:Name=\"login\" /><Button Text=\"Mostrar datos de prueba\" Clicked=\"Mostrar\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><views:LoginView\n    x:Name=\"login\" /><Button\n    Text=\"Mostrar datos de prueba\"\n    Clicked=\"Mostrar\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoPropias/BAccesoPropias.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoPropias/LoginView.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" x:Class=\"Estudio.LoginView\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    x:Class=\"Estudio.LoginView\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{local:Valor Propiedad=Espaciado}\" Padding=\"{local:Valor Propiedad=Relleno}\" Margin=\"{local:Valor Propiedad=Margen}\" BackgroundColor=\"{local:Valor Propiedad=FondoLayout}\">",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{local:Valor\n    Propiedad=Espaciado}\"\n    Padding=\"{local:Valor\n    Propiedad=Relleno}\"\n    Margin=\"{local:Valor\n    Propiedad=Margen}\"\n    BackgroundColor=\"{local:Valor\n    Propiedad=FondoLayout}\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"titulo\" TextColor=\"Black\" Text=\"Acceso\" FontSize=\"{local:Valor Propiedad=FuenteLabel}\" BackgroundColor=\"{local:Valor Propiedad=FondoLabel}\" />",
      "display": "<Label\n    x:Name=\"titulo\"\n    TextColor=\"Black\"\n    Text=\"Acceso\"\n    FontSize=\"{local:Valor\n    Propiedad=FuenteLabel}\"\n    BackgroundColor=\"{local:Valor\n    Propiedad=FondoLabel}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryNombreUsuario",
      "kind": "etiqueta",
      "code": "<v:EntryNombreUsuario x:Name=\"usuario\" TextColor=\"Black\" FontSize=\"{local:Valor Propiedad=FuenteEntry}\" BackgroundColor=\"{local:Valor Propiedad=FondoEntry}\" />",
      "display": "<v:EntryNombreUsuario\n    x:Name=\"usuario\"\n    TextColor=\"Black\"\n    FontSize=\"{local:Valor\n    Propiedad=FuenteEntry}\"\n    BackgroundColor=\"{local:Valor\n    Propiedad=FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryContrasenia",
      "kind": "etiqueta",
      "code": "<v:EntryContrasenia x:Name=\"password\" TextColor=\"Black\" FontSize=\"{local:Valor Propiedad=FuenteEntry}\" BackgroundColor=\"{local:Valor Propiedad=FondoEntry}\" />",
      "display": "<v:EntryContrasenia\n    x:Name=\"password\"\n    TextColor=\"Black\"\n    FontSize=\"{local:Valor\n    Propiedad=FuenteEntry}\"\n    BackgroundColor=\"{local:Valor\n    Propiedad=FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoRecursosDinamicos/BAccesoRecursosDinamicos.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoRecursosDinamicos/LoginView.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" x:Class=\"Estudio.LoginView\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    x:Class=\"Estudio.LoginView\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "ContentView.Resources",
      "kind": "etiqueta",
      "code": "<ContentView.Resources>",
      "display": "<ContentView.Resources>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"Espaciado\">10</x:Double>",
      "display": "<x:Double\n    x:Key=\"Espaciado\">10</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Thickness",
      "kind": "etiqueta",
      "code": "<Thickness x:Key=\"Relleno\">10</Thickness>",
      "display": "<Thickness\n    x:Key=\"Relleno\">10</Thickness>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Thickness",
      "kind": "etiqueta",
      "code": "<Thickness x:Key=\"Margen\">5</Thickness>",
      "display": "<Thickness\n    x:Key=\"Margen\">5</Thickness>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoLayout\">LightGray</Color>",
      "display": "<Color\n    x:Key=\"FondoLayout\">LightGray</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoEntry\">White</Color>",
      "display": "<Color\n    x:Key=\"FondoEntry\">White</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoLabel\">Beige</Color>",
      "display": "<Color\n    x:Key=\"FondoLabel\">Beige</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"FuenteEntry\">16</x:Double>",
      "display": "<x:Double\n    x:Key=\"FuenteEntry\">16</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"FuenteLabel\">18</x:Double>",
      "display": "<x:Double\n    x:Key=\"FuenteLabel\">18</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{DynamicResource Espaciado}\" Padding=\"{DynamicResource Relleno}\" Margin=\"{DynamicResource Margen}\" BackgroundColor=\"{DynamicResource FondoLayout}\">",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{DynamicResource Espaciado}\"\n    Padding=\"{DynamicResource Relleno}\"\n    Margin=\"{DynamicResource Margen}\"\n    BackgroundColor=\"{DynamicResource FondoLayout}\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"titulo\" TextColor=\"Black\" Text=\"Acceso\" FontSize=\"{DynamicResource FuenteLabel}\" BackgroundColor=\"{DynamicResource FondoLabel}\" />",
      "display": "<Label\n    x:Name=\"titulo\"\n    TextColor=\"Black\"\n    Text=\"Acceso\"\n    FontSize=\"{DynamicResource FuenteLabel}\"\n    BackgroundColor=\"{DynamicResource FondoLabel}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryNombreUsuario",
      "kind": "etiqueta",
      "code": "<v:EntryNombreUsuario x:Name=\"usuario\" TextColor=\"Black\" FontSize=\"{DynamicResource FuenteEntry}\" BackgroundColor=\"{DynamicResource FondoEntry}\" />",
      "display": "<v:EntryNombreUsuario\n    x:Name=\"usuario\"\n    TextColor=\"Black\"\n    FontSize=\"{DynamicResource FuenteEntry}\"\n    BackgroundColor=\"{DynamicResource FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryContrasenia",
      "kind": "etiqueta",
      "code": "<v:EntryContrasenia x:Name=\"password\" TextColor=\"Black\" FontSize=\"{DynamicResource FuenteEntry}\" BackgroundColor=\"{DynamicResource FondoEntry}\" />",
      "display": "<v:EntryContrasenia\n    x:Name=\"password\"\n    TextColor=\"Black\"\n    FontSize=\"{DynamicResource FuenteEntry}\"\n    BackgroundColor=\"{DynamicResource FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoRecursosEstaticos/BAccesoRecursosEstaticos.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoRecursosEstaticos/LoginView.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" x:Class=\"Estudio.LoginView\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    x:Class=\"Estudio.LoginView\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "ContentView.Resources",
      "kind": "etiqueta",
      "code": "<ContentView.Resources>",
      "display": "<ContentView.Resources>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"Espaciado\">10</x:Double>",
      "display": "<x:Double\n    x:Key=\"Espaciado\">10</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Thickness",
      "kind": "etiqueta",
      "code": "<Thickness x:Key=\"Relleno\">10</Thickness>",
      "display": "<Thickness\n    x:Key=\"Relleno\">10</Thickness>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Thickness",
      "kind": "etiqueta",
      "code": "<Thickness x:Key=\"Margen\">5</Thickness>",
      "display": "<Thickness\n    x:Key=\"Margen\">5</Thickness>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoLayout\">LightGray</Color>",
      "display": "<Color\n    x:Key=\"FondoLayout\">LightGray</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoEntry\">White</Color>",
      "display": "<Color\n    x:Key=\"FondoEntry\">White</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "Color",
      "kind": "etiqueta",
      "code": "<Color x:Key=\"FondoLabel\">Beige</Color>",
      "display": "<Color\n    x:Key=\"FondoLabel\">Beige</Color>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"FuenteEntry\">16</x:Double>",
      "display": "<x:Double\n    x:Key=\"FuenteEntry\">16</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "x:Double",
      "kind": "etiqueta",
      "code": "<x:Double x:Key=\"FuenteLabel\">18</x:Double>",
      "display": "<x:Double\n    x:Key=\"FuenteLabel\">18</x:Double>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{StaticResource Espaciado}\" Padding=\"{StaticResource Relleno}\" Margin=\"{StaticResource Margen}\" BackgroundColor=\"{StaticResource FondoLayout}\"><Label x:Name=\"titulo\" TextColor=\"Black\" Text=\"Acceso\" FontSize=\"{StaticResource FuenteLabel}\" BackgroundColor=\"{StaticResource FondoLabel}\" /><v:EntryNombreUsuario x:Name=\"usuario\" TextColor=\"Black\" FontSize=\"{StaticResource FuenteEntry}\" BackgroundColor=\"{StaticResource FondoEntry}\" /><v:EntryContrasenia x:Name=\"password\" TextColor=\"Black\" FontSize=\"{StaticResource FuenteEntry}\" BackgroundColor=\"{StaticResource FondoEntry}\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{StaticResource Espaciado}\"\n    Padding=\"{StaticResource Relleno}\"\n    Margin=\"{StaticResource Margen}\"\n    BackgroundColor=\"{StaticResource FondoLayout}\"><Label\n    x:Name=\"titulo\"\n    TextColor=\"Black\"\n    Text=\"Acceso\"\n    FontSize=\"{StaticResource FuenteLabel}\"\n    BackgroundColor=\"{StaticResource FondoLabel}\" /><v:EntryNombreUsuario\n    x:Name=\"usuario\"\n    TextColor=\"Black\"\n    FontSize=\"{StaticResource FuenteEntry}\"\n    BackgroundColor=\"{StaticResource FondoEntry}\" /><v:EntryContrasenia\n    x:Name=\"password\"\n    TextColor=\"Black\"\n    FontSize=\"{StaticResource FuenteEntry}\"\n    BackgroundColor=\"{StaticResource FondoEntry}\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoStatic/BAccesoStatic.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BLoginViews_Estudio/BLoginViews_Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BAccesoStatic/LoginView.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\" x:Class=\"Estudio.LoginView\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BLoginViews_Estudio\"\n    x:Class=\"Estudio.LoginView\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{x:Static local:Valores.Espaciado}\" Padding=\"{x:Static local:Valores.Relleno}\" Margin=\"{x:Static local:Valores.Margen}\" BackgroundColor=\"{x:Static local:Valores.FondoLayout}\">",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{x:Static local:Valores.Espaciado}\"\n    Padding=\"{x:Static local:Valores.Relleno}\"\n    Margin=\"{x:Static local:Valores.Margen}\"\n    BackgroundColor=\"{x:Static local:Valores.FondoLayout}\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label x:Name=\"titulo\" TextColor=\"Black\" Text=\"Acceso\" FontSize=\"{x:Static local:Valores.FuenteLabel}\" BackgroundColor=\"{x:Static local:Valores.FondoLabel}\" />",
      "display": "<Label\n    x:Name=\"titulo\"\n    TextColor=\"Black\"\n    Text=\"Acceso\"\n    FontSize=\"{x:Static local:Valores.FuenteLabel}\"\n    BackgroundColor=\"{x:Static local:Valores.FondoLabel}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryNombreUsuario",
      "kind": "etiqueta",
      "code": "<v:EntryNombreUsuario x:Name=\"usuario\" TextColor=\"Black\" FontSize=\"{x:Static local:Valores.FuenteEntry}\" BackgroundColor=\"{x:Static local:Valores.FondoEntry}\" />",
      "display": "<v:EntryNombreUsuario\n    x:Name=\"usuario\"\n    TextColor=\"Black\"\n    FontSize=\"{x:Static local:Valores.FuenteEntry}\"\n    BackgroundColor=\"{x:Static local:Valores.FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "v:EntryContrasenia",
      "kind": "etiqueta",
      "code": "<v:EntryContrasenia x:Name=\"password\" TextColor=\"Black\" FontSize=\"{x:Static local:Valores.FuenteEntry}\" BackgroundColor=\"{x:Static local:Valores.FondoEntry}\" />",
      "display": "<v:EntryContrasenia\n    x:Name=\"password\"\n    TextColor=\"Black\"\n    FontSize=\"{x:Static local:Valores.FuenteEntry}\"\n    BackgroundColor=\"{x:Static local:Valores.FondoEntry}\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/BLoginViews_Estudio/BLoginViews_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasPropias/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasPropias/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Login Propias\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Login Propias\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasPropias/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-7/PruebasPropias/PruebasPropias.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BAccesoPropias/BAccesoPropias.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BAccesoPropias/BAccesoPropias.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-7/PruebasPropias/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoPropias\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"R7 Propias\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoPropias\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"R7 Propias\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><v:LoginView x:Name=\"login\" /><Button Text=\"Mostrar datos\" Clicked=\"Mostrar\" /><Button Text=\"Personalizar desde anfitrión\" Clicked=\"Cambiar\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><v:LoginView\n    x:Name=\"login\" /><Button\n    Text=\"Mostrar datos\"\n    Clicked=\"Mostrar\" /><Button\n    Text=\"Personalizar desde anfitrión\"\n    Clicked=\"Cambiar\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Login RecursosDinamicos\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Login RecursosDinamicos\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/PruebasRecursosDinamicos.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BAccesoRecursosDinamicos/BAccesoRecursosDinamicos.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BAccesoRecursosDinamicos/BAccesoRecursosDinamicos.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-7/PruebasRecursosDinamicos/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoRecursosDinamicos\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"R7 RecursosDinamicos\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoRecursosDinamicos\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"R7 RecursosDinamicos\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><v:LoginView x:Name=\"login\" /><Button Text=\"Mostrar datos\" Clicked=\"Mostrar\" /><Button Text=\"Personalizar desde anfitrión\" Clicked=\"Cambiar\" /><Button Text=\"Reemplazar recurso FondoLayout\" Clicked=\"Recurso\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><v:LoginView\n    x:Name=\"login\" /><Button\n    Text=\"Mostrar datos\"\n    Clicked=\"Mostrar\" /><Button\n    Text=\"Personalizar desde anfitrión\"\n    Clicked=\"Cambiar\" /><Button\n    Text=\"Reemplazar recurso FondoLayout\"\n    Clicked=\"Recurso\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Login RecursosEstaticos\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Login RecursosEstaticos\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/PruebasRecursosEstaticos.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BAccesoRecursosEstaticos/BAccesoRecursosEstaticos.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BAccesoRecursosEstaticos/BAccesoRecursosEstaticos.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-7/PruebasRecursosEstaticos/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoRecursosEstaticos\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"R7 RecursosEstaticos\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoRecursosEstaticos\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"R7 RecursosEstaticos\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><v:LoginView x:Name=\"login\" /><Button Text=\"Mostrar datos\" Clicked=\"Mostrar\" /><Button Text=\"Personalizar desde anfitrión\" Clicked=\"Cambiar\" /><Button Text=\"Reemplazar recurso FondoLayout\" Clicked=\"Recurso\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><v:LoginView\n    x:Name=\"login\" /><Button\n    Text=\"Mostrar datos\"\n    Clicked=\"Mostrar\" /><Button\n    Text=\"Personalizar desde anfitrión\"\n    Clicked=\"Cambiar\" /><Button\n    Text=\"Reemplazar recurso FondoLayout\"\n    Clicked=\"Recurso\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasStatic/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasStatic/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Login Static\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Login Static\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-7/PruebasStatic/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-7/PruebasStatic/PruebasStatic.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BAccesoStatic/BAccesoStatic.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BAccesoStatic/BAccesoStatic.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-7/PruebasStatic/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoStatic\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"R7 Static\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BAccesoStatic\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"R7 Static\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout Padding=\"20\" Spacing=\"10\"><v:LoginView x:Name=\"login\" /><Button Text=\"Mostrar datos\" Clicked=\"Mostrar\" /><Button Text=\"Personalizar desde anfitrión\" Clicked=\"Cambiar\" /></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><v:LoginView\n    x:Name=\"login\" /><Button\n    Text=\"Mostrar datos\"\n    Clicked=\"Mostrar\" /><Button\n    Text=\"Personalizar desde anfitrión\"\n    Clicked=\"Cambiar\" /></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/BRelacion07Estudio/BRelacion07Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/BRelacion07Estudio/ViewMatriculaEstudio.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.ViewMatriculaEstudio\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.ViewMatriculaEstudio\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{local:Aspecto Tipo=Espacio}\" Padding=\"{local:Aspecto Tipo=Relleno}\" BackgroundColor=\"{local:Aspecto Tipo=Matricula}\"><Label Text=\"Matrícula del Vehículo\" TextColor=\"White\" /><HorizontalStackLayout x:Name=\"fila\" Spacing=\"{local:Aspecto Tipo=Espacio}\" Padding=\"{local:Aspecto Tipo=Relleno}\" BackgroundColor=\"{local:Aspecto Tipo=Matricula}\"><Entry x:Name=\"entrada\" TextColor=\"White\" PlaceholderColor=\"WhiteSmoke\" Placeholder=\"0000-BBB\" TextChanged=\"Cambio\" /><Label x:Name=\"error\" BackgroundColor=\"Transparent\" TextColor=\"Black\" /></HorizontalStackLayout></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{local:Aspecto\n    Tipo=Espacio}\"\n    Padding=\"{local:Aspecto\n    Tipo=Relleno}\"\n    BackgroundColor=\"{local:Aspecto\n    Tipo=Matricula}\"><Label\n    Text=\"Matrícula del Vehículo\"\n    TextColor=\"White\" /><HorizontalStackLayout\n    x:Name=\"fila\"\n    Spacing=\"{local:Aspecto\n    Tipo=Espacio}\"\n    Padding=\"{local:Aspecto\n    Tipo=Relleno}\"\n    BackgroundColor=\"{local:Aspecto\n    Tipo=Matricula}\"><Entry\n    x:Name=\"entrada\"\n    TextColor=\"White\"\n    PlaceholderColor=\"WhiteSmoke\"\n    Placeholder=\"0000-BBB\"\n    TextChanged=\"Cambio\" /><Label\n    x:Name=\"error\"\n    BackgroundColor=\"Transparent\"\n    TextColor=\"Black\" /></HorizontalStackLayout></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/BRelacion07Estudio/ViewMayorEdadEstudio.xaml": [
    {
      "name": "ContentView",
      "kind": "etiqueta",
      "code": "<ContentView xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.ViewMayorEdadEstudio\">",
      "display": "<ContentView\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.ViewMayorEdadEstudio\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout x:Name=\"layout\" Spacing=\"{local:Aspecto Tipo=Espacio}\" Padding=\"{local:Aspecto Tipo=Relleno}\" BackgroundColor=\"{local:Aspecto Tipo=Edad}\"><Label Text=\"Fecha Nacimiento\" TextColor=\"White\" /><HorizontalStackLayout x:Name=\"fila\" Spacing=\"{local:Aspecto Tipo=Espacio}\" Padding=\"{local:Aspecto Tipo=Relleno}\" BackgroundColor=\"{local:Aspecto Tipo=Edad}\"><DatePicker x:Name=\"fecha\" TextColor=\"White\" DateSelected=\"CambioFecha\" /><Label x:Name=\"edad\" TextColor=\"White\" /><Label x:Name=\"error\" BackgroundColor=\"Transparent\" TextColor=\"Black\" /></HorizontalStackLayout></VerticalStackLayout>",
      "display": "<VerticalStackLayout\n    x:Name=\"layout\"\n    Spacing=\"{local:Aspecto\n    Tipo=Espacio}\"\n    Padding=\"{local:Aspecto\n    Tipo=Relleno}\"\n    BackgroundColor=\"{local:Aspecto\n    Tipo=Edad}\"><Label\n    Text=\"Fecha Nacimiento\"\n    TextColor=\"White\" /><HorizontalStackLayout\n    x:Name=\"fila\"\n    Spacing=\"{local:Aspecto\n    Tipo=Espacio}\"\n    Padding=\"{local:Aspecto\n    Tipo=Relleno}\"\n    BackgroundColor=\"{local:Aspecto\n    Tipo=Edad}\"><DatePicker\n    x:Name=\"fecha\"\n    TextColor=\"White\"\n    DateSelected=\"CambioFecha\" /><Label\n    x:Name=\"edad\"\n    TextColor=\"White\" /><Label\n    x:Name=\"error\"\n    BackgroundColor=\"Transparent\"\n    TextColor=\"Black\" /></HorizontalStackLayout></VerticalStackLayout>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/PruebasR07_Estudio/App.xaml": [
    {
      "name": "Application",
      "kind": "etiqueta",
      "code": "<Application xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" x:Class=\"Estudio.App\">",
      "display": "<Application\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.App\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "Application.Resources",
      "kind": "etiqueta",
      "code": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "display": "<Application.Resources><ResourceDictionary /></Application.Resources>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/PruebasR07_Estudio/AppShell.xaml": [
    {
      "name": "Shell",
      "kind": "etiqueta",
      "code": "<Shell xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.AppShell\" FlyoutBehavior=\"Flyout\">",
      "display": "<Shell\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.AppShell\"\n    FlyoutBehavior=\"Flyout\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "FlyoutItem",
      "kind": "etiqueta",
      "code": "<FlyoutItem Title=\"Views personalizados\"><ShellContent ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "display": "<FlyoutItem\n    Title=\"Views personalizados\"><ShellContent\n    ContentTemplate=\"{DataTemplate local:Solucion}\" /></FlyoutItem>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ],
  "relacion-8/PruebasR07_Estudio/MainPage.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n             xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n             x:Class=\"Estudio.MainPage\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    x:Class=\"Estudio.MainPage\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 2
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView>",
      "display": "<ScrollView>",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 6
    },
    {
      "name": "VerticalStackLayout",
      "kind": "etiqueta",
      "code": "<VerticalStackLayout\n            Padding=\"30,0\"\n            Spacing=\"25\">",
      "display": "<VerticalStackLayout\n    Padding=\"30,0\"\n    Spacing=\"25\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 7
    },
    {
      "name": "Image",
      "kind": "etiqueta",
      "code": "<Image\n                Source=\"dotnet_bot.png\"\n                HeightRequest=\"185\"\n                Aspect=\"AspectFit\"\n                SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "display": "<Image\n    Source=\"dotnet_bot.png\"\n    HeightRequest=\"185\"\n    Aspect=\"AspectFit\"\n    SemanticProperties.Description=\"dot net bot in a submarine number ten\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 10
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Hello, World!\"\n                Style=\"{StaticResource Headline}\"\n                SemanticProperties.HeadingLevel=\"Level1\" />",
      "display": "<Label\n    Text=\"Hello, World!\"\n    Style=\"{StaticResource Headline}\"\n    SemanticProperties.HeadingLevel=\"Level1\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 16
    },
    {
      "name": "Label",
      "kind": "etiqueta",
      "code": "<Label\n                Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n                Style=\"{StaticResource SubHeadline}\"\n                SemanticProperties.HeadingLevel=\"Level2\"\n                SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "display": "<Label\n    Text=\"Welcome to &#10;.NET Multi-platform App UI\"\n    Style=\"{StaticResource SubHeadline}\"\n    SemanticProperties.HeadingLevel=\"Level2\"\n    SemanticProperties.Description=\"Welcome to dot net Multi platform App U I\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 21
    },
    {
      "name": "Button",
      "kind": "etiqueta",
      "code": "<Button\n                x:Name=\"CounterBtn\"\n                Text=\"Click me\" \n                SemanticProperties.Hint=\"Counts the number of times you click\"\n                Clicked=\"OnCounterClicked\"\n                HorizontalOptions=\"Fill\" />",
      "display": "<Button\n    x:Name=\"CounterBtn\"\n    Text=\"Click me\"\n    SemanticProperties.Hint=\"Counts the number of times you click\"\n    Clicked=\"OnCounterClicked\"\n    HorizontalOptions=\"Fill\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 27
    }
  ],
  "relacion-8/PruebasR07_Estudio/PruebasR07_Estudio.csproj": [
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "display": "<TargetFrameworks>net10.0-android</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 4
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"!$([MSBuild]::IsOSPlatform('linux'))\">$(TargetFrameworks);net10.0-ios;net10.0-maccatalyst</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 5
    },
    {
      "name": "TargetFrameworks",
      "kind": "etiqueta",
      "code": "<TargetFrameworks Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "display": "<TargetFrameworks\n    Condition=\"$([MSBuild]::IsOSPlatform('windows'))\">$(TargetFrameworks);net10.0-windows10.0.19041.0</TargetFrameworks>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 6
    },
    {
      "name": "OutputType",
      "kind": "etiqueta",
      "code": "<OutputType>Exe</OutputType>",
      "display": "<OutputType>Exe</OutputType>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 15
    },
    {
      "name": "UseMaui",
      "kind": "etiqueta",
      "code": "<UseMaui>true</UseMaui>",
      "display": "<UseMaui>true</UseMaui>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 17
    },
    {
      "name": "SingleProject",
      "kind": "etiqueta",
      "code": "<SingleProject>true</SingleProject>",
      "display": "<SingleProject>true</SingleProject>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 18
    },
    {
      "name": "ProjectReference",
      "kind": "etiqueta",
      "code": "<ProjectReference Include=\"../BRelacion07Estudio/BRelacion07Estudio.csproj\" />",
      "display": "<ProjectReference\n    Include=\"../BRelacion07Estudio/BRelacion07Estudio.csproj\" />",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 73
    }
  ],
  "relacion-8/PruebasR07_Estudio/Solucion.xaml": [
    {
      "name": "ContentPage",
      "kind": "etiqueta",
      "code": "<ContentPage xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\" xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns:v=\"clr-namespace:Estudio;assembly=BRelacion07Estudio\" xmlns:local=\"clr-namespace:Estudio\" x:Class=\"Estudio.Solucion\" Title=\"Relación 8\">",
      "display": "<ContentPage\n    xmlns=\"http://schemas.microsoft.com/dotnet/2021/maui\"\n    xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\"\n    xmlns:v=\"clr-namespace:Estudio;assembly=BRelacion07Estudio\"\n    xmlns:local=\"clr-namespace:Estudio\"\n    x:Class=\"Estudio.Solucion\"\n    Title=\"Relación 8\">",
      "context": "Etiqueta de apertura: conserva los hijos y el cierre del archivo.",
      "line": 1
    },
    {
      "name": "ScrollView",
      "kind": "etiqueta",
      "code": "<ScrollView><VerticalStackLayout Padding=\"20\" Spacing=\"10\"><v:ViewMatriculaEstudio x:Name=\"matricula\" /><v:ViewMayorEdadEstudio x:Name=\"persona\" /><Entry x:Name=\"valorMatricula\" Placeholder=\"Matrícula desde anfitrión\" /><Button Text=\"Asignar matrícula\" Clicked=\"Asignar\" /><Entry x:Name=\"valorLimite\" Placeholder=\"Mayoría de edad (&gt;12)\" Keyboard=\"Numeric\" /><Button Text=\"Configurar mayoría\" Clicked=\"Limite\" /><Button Text=\"Mostrar datos\" Clicked=\"Mostrar\" /><Button Text=\"Cambiar aspecto\" Clicked=\"Aspecto\" /></VerticalStackLayout></ScrollView>",
      "display": "<ScrollView><VerticalStackLayout\n    Padding=\"20\"\n    Spacing=\"10\"><v:ViewMatriculaEstudio\n    x:Name=\"matricula\" /><v:ViewMayorEdadEstudio\n    x:Name=\"persona\" /><Entry\n    x:Name=\"valorMatricula\"\n    Placeholder=\"Matrícula desde anfitrión\" /><Button\n    Text=\"Asignar matrícula\"\n    Clicked=\"Asignar\" /><Entry\n    x:Name=\"valorLimite\"\n    Placeholder=\"Mayoría de edad (&gt;12)\"\n    Keyboard=\"Numeric\" /><Button\n    Text=\"Configurar mayoría\"\n    Clicked=\"Limite\" /><Button\n    Text=\"Mostrar datos\"\n    Clicked=\"Mostrar\" /><Button\n    Text=\"Cambiar aspecto\"\n    Clicked=\"Aspecto\" /></VerticalStackLayout></ScrollView>",
      "context": "Elemento XAML dentro de su contenedor; no sustituye el archivo completo.",
      "line": 1
    }
  ]
};
