"""Genera las soluciones didácticas de las relaciones; no toca los originales.
Requiere la plantilla oficial en .study-cache/maui-template (dotnet new maui).
"""
from pathlib import Path
import shutil
import json

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / 'solutions'
TEMPLATE = ROOT / '.study-cache/maui-template'
TFM = 'net10.0-windows10.0.19041.0'

def put(folder, name, text):
    target = folder / name
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(text.strip() + '\n', encoding='utf-8')

RULES = r'''
namespace Estudio;
public static class Reglas
{
    public static string Texto(string? valor, int minimo, int maximo, string campo)
    {
        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)
            throw new ArgumentException($"{campo}: entre {minimo} y {maximo} caracteres.");
        return valor;
    }
    public static int EdadEntrada(string? texto)
    {
        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)
            throw new ArgumentException("La edad debe ser un entero entre 5 y 70.");
        return edad;
    }
    public static string NombreUsuario(string? texto)
    {
        string valor = Texto(texto, 5, 15, "Usuario");
        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.
        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))
            throw new ArgumentException("Usuario: solo letras A-Z sin acentos.");
        return valor;
    }
    public static string Contrasenia(string? texto)
    {
        string valor = Texto(texto, 10, 10, "Contraseña");
        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit)
            || !valor.Any(c => ".,:;".Contains(c)))
            throw new ArgumentException("La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;");
        return valor;
    }
    public static int Operar(int a, int b, char op) => op switch
    {
        '+' => checked(a + b), '-' => checked(a - b), '*' => checked(a * b),
        '/' => a / b, '%' => a % b,
        _ => throw new ArgumentException("Operación no válida.")
    };
    public static int SiguienteEstado(int estado) => (estado + 1) % 3;
    public static string Matricula(string? valor)
    {
        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.
        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @"\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\z"))
            throw new ArgumentException("Formato requerido: 0000-BBB, sin vocales.");
        return valor;
    }
    public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException("El límite debe ser superior a 12.");
    public static int Edad(DateTime nacimiento, DateTime hoy)
    {
        nacimiento = nacimiento.Date; hoy = hoy.Date;
        if (nacimiento > hoy) throw new ArgumentException("La fecha no puede ser futura.");
        int edad = hoy.Year - nacimiento.Year;
        if (nacimiento.AddYears(edad) > hoy) edad--;
        return edad;
    }
}
'''

def app(package, name):
    folder = BASE / package / name
    shutil.copytree(TEMPLATE, folder, dirs_exist_ok=True,
                    ignore=shutil.ignore_patterns('bin', 'obj', '.vs', '.git', '*.csproj'))
    csproj = (TEMPLATE / 'Estudio.csproj').read_text(encoding='utf-8-sig')
    csproj = csproj.replace('<MauiXamlInflator>SourceGen</MauiXamlInflator>', '')
    csproj = csproj.replace('<ApplicationTitle>Estudio</ApplicationTitle>', f'<ApplicationTitle>{name}</ApplicationTitle>')
    put(folder, name + '.csproj', csproj)
    put(folder, 'App.xaml', '''<Application xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" x:Class="Estudio.App"><Application.Resources><ResourceDictionary /></Application.Resources></Application>''')
    # MainPage de la plantilla se conserva solo si el ejercicio la utiliza.
    return folder

def library(package, name):
    folder = BASE / package / name
    put(folder, name + '.csproj', '''<Project Sdk="Microsoft.NET.Sdk"><PropertyGroup><TargetFrameworks>net10.0-android;net10.0-ios;net10.0-maccatalyst;net10.0-windows10.0.19041.0</TargetFrameworks><UseMaui>true</UseMaui><SingleProject>true</SingleProject><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable></PropertyGroup><ItemGroup><PackageReference Include="Microsoft.Maui.Controls" Version="10.0.110" /></ItemGroup></Project>''')
    return folder

def reference(folder, name):
    path = next(folder.glob('*.csproj'))
    text = path.read_text(encoding='utf-8')
    text = text.replace('</Project>', f'<ItemGroup><ProjectReference Include="../{name}/{name}.csproj" /></ItemGroup></Project>')
    put(folder, path.name, text)

def page(folder, name, title, body, code=''):
    put(folder, name + '.xaml', f'''<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:local="clr-namespace:Estudio" x:Class="Estudio.{name}" Title="{title}">{body}</ContentPage>''')
    put(folder, name + '.xaml.cs', f'''namespace Estudio;\npublic partial class {name} : ContentPage {{ public {name}() {{ InitializeComponent(); }}\n{code}\n}}''')

def shell(folder, entries, tabs=False):
    nodes = ''.join(f'<FlyoutItem Title="{title}"><ShellContent ContentTemplate="{{DataTemplate local:{name}}}" /></FlyoutItem>' for title, name in entries)
    if tabs:
        nodes = '<TabBar>' + ''.join(f'<ShellContent Title="{title}" ContentTemplate="{{DataTemplate local:{name}}}" />' for title, name in entries) + '</TabBar>'
    put(folder, 'AppShell.xaml', f'''<Shell xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:local="clr-namespace:Estudio" x:Class="Estudio.AppShell" FlyoutBehavior="Flyout">{nodes}</Shell>''')

USER = r'''
namespace Estudio;
public class Usuario
{
    public string Nombre { get; }
    public string Apellidos { get; }
    public int Edad { get; }
    public Usuario(string? nombre, string? apellidos, string? edad)
    {
        Nombre = Reglas.Texto(nombre, 3, 20, "Nombre");
        Apellidos = Reglas.Texto(apellidos, 4, 40, "Apellidos");
        Edad = Reglas.EdadEntrada(edad);
    }
    public string Mensaje => $"{Apellidos}, {Nombre}:\n" + (Edad >= 18 ? "Tiene acceso al sistema" : "No tiene acceso al sistema");
}
'''
def forms(folder, names=('Ejercicio01', 'Ejercicio02')):
    put(folder, 'Reglas.cs', RULES)
    put(folder, 'Usuario.cs', USER)
    for index, name in enumerate(names):
        fields = [('nombre', 'Introduzca su nombre'), ('apellidos', 'Introduzca sus apellidos'), ('edad', 'Introduzca su edad')]
        items = []
        for field, label in fields:
            entry = f'<Entry x:Name="{field}" ' + ('Keyboard="Numeric"' if field == 'edad' else f'MaxLength="{20 if field == "nombre" else 40}"') + ' />'
            items.append(f'<VerticalStackLayout><Label Text="{label}" HorizontalOptions="Center" />{entry}</VerticalStackLayout>' if index == 0 else f'<Grid ColumnDefinitions="Auto,*"><Label Text="{label}" VerticalOptions="Center" />{entry.replace("<Entry", "<Entry Grid.Column=\"1\"")}</Grid>')
        body = '<VerticalStackLayout Padding="20" Spacing="12">' + ''.join(items) + '<Button Text="Acceder" Clicked="Acceder" HorizontalOptions="Center" /><Label x:Name="resultado" HorizontalTextAlignment="Center" /></VerticalStackLayout>'
        code = '''private async void Acceder(object sender, EventArgs e) {
            try { Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text); resultado.Text = usuario.Mensaje; }
            catch (ArgumentException ex) { resultado.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
        }'''
        page(folder, name, 'Acceso Vertical' if index == 0 else 'Acceso Mixto', body, code)

CALCULATOR = r'''
namespace Estudio;
public class Calculadora
{
    public string Visor { get; private set; } = "";
    private int? primero;
    private char? operador;
    private bool resultado;
    public void Digito(string valor)
    {
        if (resultado) Limpiar();
        if (valor.Length != 1 || valor[0] < '0' || valor[0] > '9') throw new ArgumentException("Dígito no válido.");
        Visor += valor;
    }
    public void Limpiar() { Visor = ""; primero = null; operador = null; resultado = false; }
    public void Operacion(char tecla)
    {
        if (!int.TryParse(Visor, out int numero)) throw new ArgumentException("Introduce un entero dentro del rango de int.");
        if (tecla == '=')
        {
            if (primero is null || operador is null) throw new ArgumentException("Falta la operación.");
            Visor = Reglas.Operar(primero.Value, numero, operador.Value).ToString();
            primero = null; operador = null; resultado = true;
        }
        else
        {
            if (operador is not null) throw new ArgumentException("Ya has seleccionado una operación.");
            primero = numero; operador = tecla; Visor = ""; resultado = false;
        }
    }
}
'''
CALC_EVENTS = r'''
private readonly Calculadora modelo = new();
private void Digito(object? sender, EventArgs e) { if (sender is Button b) { modelo.Digito(b.Text); visor.Text = modelo.Visor; } }
private async void Operacion(object? sender, EventArgs e) {
    if (sender is not Button b) return;
    try { if (b.Text == "C") modelo.Limpiar(); else modelo.Operacion(b.Text[0] switch { '×' => '*', '÷' => '/', char op => op }); visor.Text = modelo.Visor; }
    catch (Exception ex) when (ex is ArgumentException or ArithmeticException) { modelo.Limpiar(); visor.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
}
'''
KEYS = [['7','8','9','×'], ['4','5','6','+'], ['1','2','3','÷'], ['0','%','-','=']]
def calculators(folder, names=('Ejercicio01','Ejercicio02','Ejercicio03','Ejercicio04')):
    put(folder, 'Reglas.cs', RULES)
    put(folder, 'Calculadora.cs', CALCULATOR)
    for variant, name in enumerate(names):
        isgrid = variant % 2 == 1
        if variant < 2:
            if isgrid:
                body = '<Grid Padding="20" RowDefinitions="Auto,*,*,*,*,Auto" ColumnDefinitions="*,*,*,*" RowSpacing="6" ColumnSpacing="6"><Entry x:Name="visor" IsReadOnly="True" Grid.ColumnSpan="4" />'
                for r, row in enumerate(KEYS):
                    for c, k in enumerate(row): body += f'<Button Grid.Row="{r+1}" Grid.Column="{c}" Text="{k}" Clicked="{"Digito" if k.isdigit() else "Operacion"}" />'
                body += '<Button Text="C" Clicked="Operacion" Grid.Row="5" Grid.ColumnSpan="4" /></Grid>'
            else:
                body = '<StackLayout Orientation="Vertical" Padding="20" Spacing="6"><Entry x:Name="visor" IsReadOnly="True" />'
                for row in KEYS: body += '<StackLayout Orientation="Horizontal" Spacing="6">' + ''.join(f'<Button Text="{k}" WidthRequest="65" Clicked="{"Digito" if k.isdigit() else "Operacion"}" />' for k in row) + '</StackLayout>'
                body += '<Button Text="C" Clicked="Operacion" /></StackLayout>'
            page(folder, name, 'Calculadora Grid XAML' if isgrid else 'Calculadora Stack XAML', body, CALC_EVENTS)
        else:
            create = 'Grid root = new Grid { Padding = 20, RowSpacing = 6, ColumnSpacing = 6 }; for(int i=0;i<6;i++) root.RowDefinitions.Add(new RowDefinition { Height = i==0 || i==5 ? GridLength.Auto : GridLength.Star }); for(int i=0;i<4;i++) root.ColumnDefinitions.Add(new ColumnDefinition { Width=GridLength.Star }); root.Add(visor,0,0); Grid.SetColumnSpan(visor,4);' if isgrid else 'StackLayout root = new StackLayout { Padding=20, Spacing=6, Orientation=StackOrientation.Vertical }; root.Children.Add(visor);'
            lines = [create]
            for r, row in enumerate(KEYS):
                if not isgrid: lines.append(f'StackLayout fila{r}=new StackLayout {{ Orientation=StackOrientation.Horizontal, Spacing=6 }}; root.Children.Add(fila{r});')
                for c, k in enumerate(row):
                    lines.append(f'Button b{r}{c}=new Button {{ Text="{k}", WidthRequest=65 }}; b{r}{c}.Clicked += {"Digito" if k.isdigit() else "Operacion"};')
                    lines.append(f'root.Add(b{r}{c},{c},{r+1});' if isgrid else f'fila{r}.Children.Add(b{r}{c});')
            lines += ['Button limpiar=new Button { Text="C" }; limpiar.Clicked+=Operacion;', 'root.Add(limpiar,0,5); Grid.SetColumnSpan(limpiar,4);' if isgrid else 'root.Children.Add(limpiar);', 'Content=root;']
            put(folder, name+'.cs', 'namespace Estudio;\npublic class '+name+' : ContentPage { private readonly Entry visor=new() { IsReadOnly=true }; public '+name+'() { Title="Calculadora '+('Grid' if isgrid else 'Stack')+' C#";'+ '\n'.join(lines)+'}\n'+CALC_EVENTS+'}')

def boards(folder, names=('Ejercicio01','Ejercicio02')):
    put(folder,'Reglas.cs',RULES)
    put(folder,'MiBoton.cs',r'''namespace Estudio;
public class MiBoton : Button {
    private int estado;
    private readonly Color original = Colors.Blue;
    public MiBoton() { BackgroundColor=original; Clicked+=(_,_)=>{estado=Reglas.SiguienteEstado(estado); BackgroundColor=estado==1?Colors.Green:estado==2?Colors.Red:original;}; }
}''')
    for i,name in enumerate(names):
        put(folder,name+'.cs',f'''namespace Estudio;
public class {name} : ContentPage {{
    public {name}() {{ Title="Tablero dinámico{' color' if i else ''}"; Grid grid=new Grid {{ Padding=10, RowSpacing=5, ColumnSpacing=5 }};
        for(int i=0;i<5;i++) {{ grid.RowDefinitions.Add(new RowDefinition {{ Height=GridLength.Star }}); grid.ColumnDefinitions.Add(new ColumnDefinition {{ Width=GridLength.Star }}); }}
        for(int fila=0;fila<5;fila++) for(int col=0;col<5;col++) {{ {'MiBoton' if i else 'Button'} b=new {'MiBoton' if i else 'Button'} {{ Text=(fila*5+col+1).ToString() }};
        {'b.Clicked+=async (_,_)=>await DisplayAlertAsync("Tablero",$"Has pulsado el botón {b.Text}","Aceptar");' if not i else ''}
        grid.Add(b,col,fila); }} Content=grid;
    }}
}}''')

def login_library(package):
    lib = library(package,'BLoginViews_Estudio')
    put(lib,'Reglas.cs',RULES)
    put(lib,'EntryNombreUsuario.cs',r'''namespace Estudio;
public class EntryNombreUsuario : Entry {
    public EntryNombreUsuario() { Placeholder="Usuario (5-15 letras)"; MaxLength=15; }
    public string Usuario { get => Reglas.NombreUsuario(Text); set => Text=Reglas.NombreUsuario(value); }
}''')
    put(lib,'EntryContrasenia.cs',r'''namespace Estudio;
public class EntryContrasenia : Entry {
    public EntryContrasenia() { Placeholder="Contraseña (10 caracteres)"; IsPassword=true; MaxLength=10; }
    public string Password { get => Reglas.Contrasenia(Text); set => Text=Reglas.Contrasenia(value); }
}''')
    return lib

def login_view(package):
    lib=library(package,'BAcceso_Estudio'); reference(lib,'BLoginViews_Estudio')
    put(lib,'LoginView.xaml','''<ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:views="clr-namespace:Estudio;assembly=BLoginViews_Estudio" x:Class="Estudio.LoginView"><VerticalStackLayout Spacing="10" Padding="10"><views:EntryNombreUsuario x:Name="usuario" /><views:EntryContrasenia x:Name="password" /></VerticalStackLayout></ContentView>''')
    put(lib,'LoginView.xaml.cs','''namespace Estudio; public partial class LoginView : ContentView { public LoginView(){InitializeComponent();} public string UserName=>usuario.Usuario; public string PassWord=>password.Password; }''')
    return lib

def login_host(package,name,composed):
    host=app(package,name); reference(host,'BAcceso_Estudio' if composed else 'BLoginViews_Estudio')
    controls = '<views:LoginView x:Name="login" />' if composed else '<views:EntryNombreUsuario x:Name="usuario" /><views:EntryContrasenia x:Name="password" />'
    body=f'<VerticalStackLayout Padding="20" Spacing="10">{controls}<Button Text="Mostrar datos de prueba" Clicked="Mostrar" /></VerticalStackLayout>'
    page(host,'Solucion','Prueba de biblioteca',body,'''private async void Mostrar(object sender,EventArgs e) { try { await DisplayAlertAsync("Prueba académica", ''' + ('$"Usuario: {login.UserName}\\nContraseña: {login.PassWord}"' if composed else '$"Usuario: {usuario.Usuario}\\nContraseña: {password.Password}"') + ''', "Aceptar"); } catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");} }''')
    xaml=host/'Solucion.xaml';put(host,xaml.name,xaml.read_text(encoding='utf-8-sig').replace('xmlns:local=',f'xmlns:views="clr-namespace:Estudio;assembly={"BAcceso_Estudio" if composed else "BLoginViews_Estudio"}" xmlns:local='))
    shell(host,[('Acceso','Solucion')]); return host

def extensions(folder):
    put(folder,'Valores.cs',r'''using Microsoft.Maui.Devices;
namespace Estudio;
public static class Valores {
    // Valores de diseño elegidos para demostrar la distinción de plataformas de R7.
    private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;
    public static double Espaciado => Android ? 12 : 10;
    public static Thickness Relleno => new(Android ? 14 : 10);
    public static Thickness Margen => new(Android ? 8 : 5);
    public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;
    public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;
    public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;
    public static double FuenteEntry => Android ? 20 : 16;
    public static double FuenteLabel => Android ? 22 : 18;
}
''')
    put(folder,'ValorExtension.cs',r'''using Microsoft.Maui.Controls.Xaml;
namespace Estudio;
[AcceptEmptyServiceProvider]
public class ValorExtension : IMarkupExtension {
    public string Propiedad { get; set; } = "";
    public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch {
        "Espaciado"=>Valores.Espaciado, "Relleno"=>Valores.Relleno, "Margen"=>Valores.Margen,
        "FondoLayout"=>Valores.FondoLayout,"FondoEntry"=>Valores.FondoEntry,"FondoLabel"=>Valores.FondoLabel,
        "FuenteEntry"=>Valores.FuenteEntry,"FuenteLabel"=>Valores.FuenteLabel,
        _=>throw new ArgumentException("Propiedad de extensión no reconocida.")
    };
}
''')

def relation7():
    package='relacion-7';login_library(package)
    for variant in ['Propias','Static','RecursosEstaticos','RecursosDinamicos']:
        libname='BAcceso'+variant
        lib=library(package,libname);reference(lib,'BLoginViews_Estudio');extensions(lib)
        dynamic=variant=='RecursosDinamicos'
        def val(name):
            return '{local:Valor Propiedad='+name+'}' if variant=='Propias' else '{x:Static local:Valores.'+name+'}' if variant=='Static' else '{'+('DynamicResource' if dynamic else 'StaticResource')+' '+name+'}'
        resources = '''<ContentView.Resources><x:Double x:Key="Espaciado">10</x:Double><Thickness x:Key="Relleno">10</Thickness><Thickness x:Key="Margen">5</Thickness><Color x:Key="FondoLayout">LightGray</Color><Color x:Key="FondoEntry">White</Color><Color x:Key="FondoLabel">Beige</Color><x:Double x:Key="FuenteEntry">16</x:Double><x:Double x:Key="FuenteLabel">18</x:Double></ContentView.Resources>''' if 'Recursos' in variant else ''
        put(lib,'LoginView.xaml',f'''<ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:local="clr-namespace:Estudio" xmlns:v="clr-namespace:Estudio;assembly=BLoginViews_Estudio" x:Class="Estudio.LoginView">{resources}<VerticalStackLayout x:Name="layout" Spacing="{val('Espaciado')}" Padding="{val('Relleno')}" Margin="{val('Margen')}" BackgroundColor="{val('FondoLayout')}"><Label x:Name="titulo" TextColor="Black" Text="Acceso" FontSize="{val('FuenteLabel')}" BackgroundColor="{val('FondoLabel')}" /><v:EntryNombreUsuario x:Name="usuario" TextColor="Black" FontSize="{val('FuenteEntry')}" BackgroundColor="{val('FondoEntry')}" /><v:EntryContrasenia x:Name="password" TextColor="Black" FontSize="{val('FuenteEntry')}" BackgroundColor="{val('FondoEntry')}" /></VerticalStackLayout></ContentView>''')
        put(lib,'LoginView.xaml.cs',r'''namespace Estudio;
public partial class LoginView : ContentView {
    public LoginView(){InitializeComponent();}
    public string UserName=>usuario.Usuario;
    public string PassWord=>password.Password;
    public double Espaciado { get=>layout.Spacing; set { if(value<0)throw new ArgumentOutOfRangeException(nameof(value)); layout.Spacing=value; } }
    public Thickness Relleno { get=>layout.Padding; set=>layout.Padding=value; }
    public Thickness Margen { get=>layout.Margin; set=>layout.Margin=value; }
    public Color Fondo { get=>layout.BackgroundColor; set=>layout.BackgroundColor=value; }
    public double Fuente { get=>usuario.FontSize; set { if(value<=0)throw new ArgumentOutOfRangeException(nameof(value)); usuario.FontSize=password.FontSize=titulo.FontSize=value; } }
    public void ReemplazarRecurso() { Resources["FondoLayout"]=Colors.LightSkyBlue; }
}''')
        host=app(package,'Pruebas'+variant);reference(host,libname)
        page(host,'Solucion','R7 '+variant,'<VerticalStackLayout Padding="20" Spacing="10"><v:LoginView x:Name="login" /><Button Text="Mostrar datos" Clicked="Mostrar" /><Button Text="Personalizar desde anfitrión" Clicked="Cambiar" />'+('<Button Text="Reemplazar recurso FondoLayout" Clicked="Recurso" />' if 'Recursos' in variant else '')+'</VerticalStackLayout>',r'''
private async void Mostrar(object sender,EventArgs e) {try{await DisplayAlertAsync("Prueba académica",$"{login.UserName} / {login.PassWord}","Aceptar");}catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");}}
private void Cambiar(object sender,EventArgs e){login.Espaciado=20;login.Relleno=new Thickness(20);login.Margen=new Thickness(10);login.Fondo=Colors.LightPink;login.Fuente=22;}
private void Recurso(object sender,EventArgs e){login.ReemplazarRecurso();}
''')
        xp=host/'Solucion.xaml';put(host,xp.name,xp.read_text(encoding='utf-8-sig').replace('xmlns:local=',f'xmlns:v="clr-namespace:Estudio;assembly={libname}" xmlns:local='));shell(host,[('Login '+variant,'Solucion')])

def relation8():
    package='relacion-8';lib=library(package,'BRelacion07Estudio');put(lib,'Reglas.cs',RULES)
    put(lib,'AspectoExtension.cs',r'''using Microsoft.Maui.Controls.Xaml;
namespace Estudio;
[AcceptEmptyServiceProvider]
public class AspectoExtension : IMarkupExtension {
    public string Tipo {get;set;}="Espacio";
    public object ProvideValue(IServiceProvider serviceProvider)=>Tipo switch {
        "Espacio"=>10d,"Relleno"=>new Thickness(10),"Matricula"=>Colors.Green,"Edad"=>Colors.Blue,
        _=>throw new ArgumentException("Tipo de aspecto desconocido.")
    };
}''')
    for view,title,color,controls in [('ViewMatriculaEstudio','Matrícula del Vehículo','Matricula','<Entry x:Name="entrada" TextColor="White" PlaceholderColor="WhiteSmoke" Placeholder="0000-BBB" TextChanged="Cambio" />'),('ViewMayorEdadEstudio','Fecha Nacimiento','Edad','<DatePicker x:Name="fecha" TextColor="White" DateSelected="CambioFecha" /><Label x:Name="edad" TextColor="White" />')]:
        put(lib,view+'.xaml',f'''<ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:local="clr-namespace:Estudio" x:Class="Estudio.{view}"><VerticalStackLayout x:Name="layout" Spacing="{{local:Aspecto Tipo=Espacio}}" Padding="{{local:Aspecto Tipo=Relleno}}" BackgroundColor="{{local:Aspecto Tipo={color}}}"><Label Text="{title}" TextColor="White" /><HorizontalStackLayout x:Name="fila" Spacing="{{local:Aspecto Tipo=Espacio}}" Padding="{{local:Aspecto Tipo=Relleno}}" BackgroundColor="{{local:Aspecto Tipo={color}}}">{controls}<Label x:Name="error" BackgroundColor="Transparent" TextColor="Black" /></HorizontalStackLayout></VerticalStackLayout></ContentView>''')
    shared=r'''
public double Espaciado {get=>layout.Spacing;set{if(value<0)throw new ArgumentOutOfRangeException(nameof(value));layout.Spacing=fila.Spacing=value;}}
public Thickness Relleno {get=>layout.Padding;set{layout.Padding=fila.Padding=value;}}
public Color Fondo {get=>layout.BackgroundColor;set{layout.BackgroundColor=fila.BackgroundColor=value;}}
private void Mensaje(string texto){error.Text=texto;error.BackgroundColor=texto.Length==0?Colors.Transparent:Colors.Yellow;}
'''
    put(lib,'ViewMatriculaEstudio.xaml.cs',r'''namespace Estudio;
public partial class ViewMatriculaEstudio : ContentView {
    public ViewMatriculaEstudio(){InitializeComponent();}
    public string Matricula {get=>Reglas.Matricula(entrada.Text);set { try {string validada=Reglas.Matricula(value);entrada.Text=validada;Mensaje("");}catch(ArgumentException ex){Mensaje(ex.Message);throw;} }}
    private void Cambio(object sender,TextChangedEventArgs e){try{_ = Reglas.Matricula(entrada.Text);Mensaje("");}catch(ArgumentException ex){Mensaje(ex.Message);}}
'''+shared+'}')
    put(lib,'ViewMayorEdadEstudio.xaml.cs',r'''namespace Estudio;
public partial class ViewMayorEdadEstudio : ContentView {
    private int limite=18;
    public ViewMayorEdadEstudio(){InitializeComponent();Actualizar();}
    public DateTime FechaNacimiento {get=>fecha.Date ?? DateTime.Today;set {if(value.Date>DateTime.Today) {Mensaje("La fecha no puede ser futura.");throw new ArgumentException("La fecha no puede ser futura.");}fecha.Date=value.Date;Actualizar();}}
    public int Edad=>Reglas.Edad(FechaNacimiento,DateTime.Today);
    public int MayoriaEdad {get=>limite;set{limite=Reglas.Limite(value);Actualizar();}}
    private void CambioFecha(object? sender,DateChangedEventArgs e){if(error is not null)Actualizar();}
    private void Actualizar(){try{int anos=Edad;edad.Text=anos.ToString();Mensaje(anos<limite?"No eres mayor de edad":"");}catch(ArgumentException ex){edad.Text="";Mensaje(ex.Message);}}
'''+shared+'}')
    host=app(package,'PruebasR07_Estudio');reference(host,'BRelacion07Estudio')
    page(host,'Solucion','Relación 8','''<ScrollView><VerticalStackLayout Padding="20" Spacing="10"><v:ViewMatriculaEstudio x:Name="matricula" /><v:ViewMayorEdadEstudio x:Name="persona" /><Entry x:Name="valorMatricula" Placeholder="Matrícula desde anfitrión" /><Button Text="Asignar matrícula" Clicked="Asignar" /><Entry x:Name="valorLimite" Placeholder="Mayoría de edad (&gt;12)" Keyboard="Numeric" /><Button Text="Configurar mayoría" Clicked="Limite" /><Button Text="Mostrar datos" Clicked="Mostrar" /><Button Text="Cambiar aspecto" Clicked="Aspecto" /></VerticalStackLayout></ScrollView>''',r'''
private async void Asignar(object sender,EventArgs e){try{matricula.Matricula=valorMatricula.Text??"";}catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");}}
private async void Limite(object sender,EventArgs e){try{if(!int.TryParse(valorLimite.Text,out int valor))throw new ArgumentException("Introduce un entero.");persona.MayoriaEdad=valor;}catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");}}
private async void Mostrar(object sender,EventArgs e){try{await DisplayAlertAsync("Datos",$"{matricula.Matricula} / {persona.FechaNacimiento:d} / {persona.Edad} años", "Aceptar");}catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");}}
private void Aspecto(object sender,EventArgs e){matricula.Espaciado=persona.Espaciado=20;matricula.Relleno=persona.Relleno=new Thickness(20);matricula.Fondo=Colors.DarkGreen;persona.Fondo=Colors.DarkBlue;}
''')
    xp=host/'Solucion.xaml';put(host,xp.name,xp.read_text(encoding='utf-8-sig').replace('xmlns:local=','xmlns:v="clr-namespace:Estudio;assembly=BRelacion07Estudio" xmlns:local='));shell(host,[('Views personalizados','Solucion')])

if __name__=='__main__':
    # Cada carpeta es independiente; las variantes se eligen desde Shell.
    for n in (1,2):
        f=app('relacion-1',f'Relacion1E0{n}_Estudio'); forms(f);shell(f,[('Acceso Vertical' if n==1 else 'Acceso Mixto',f'Ejercicio0{n}')])
    f=app('relacion-2','Relacion2_Estudio');calculators(f);shell(f,list(zip(['Calculadora Stack XAML','Calculadora Grid XAML','Calculadora Stack C#','Calculadora Grid C#'],['Ejercicio01','Ejercicio02','Ejercicio03','Ejercicio04'])))
    f=app('relacion-3','Relacion3_Estudio');boards(f);shell(f,[('Tablero Dinámico','Ejercicio01'),('Tablero Dinámico Color','Ejercicio02')])
    f=app('relacion-4','Ejercicio1_Estudio');forms(f,('AccesoVertical','AccesoMixto'));shell(f,[('Acceso Vertical','AccesoVertical'),('Acceso Mixto','AccesoMixto')])
    f=app('relacion-4','Ejercicio2_Estudio'); names=('CalculadoraStackX','CalculadoraGridX','CalculadoraStackCS','CalculadoraGridCS');calculators(f,names);shell(f,list(zip(['Calculadora Stack XAML','Calculadora Grid XAML','Calculadora Stack C#','Calculadora Grid C#'],names)))
    f=app('relacion-4','Ejercicio3_Estudio');boards(f,('TableroCS','TableroColorCS'));shell(f,[('Tablero Dinámico','TableroCS'),('Tablero Dinámico Color','TableroColorCS')])
    login_library('relacion-5');login_host('relacion-5','LoginAcceso_Estudio',False)
    login_library('relacion-6');login_view('relacion-6');login_host('relacion-6','LoginAccesoV2_Estudio',True)
    relation7();relation8()
    print('Relaciones 1–8 generadas.')
