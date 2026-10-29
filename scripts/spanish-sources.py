"""Traduce comentarios y hace explícitos los tipos de las soluciones didácticas."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
TRANSLATIONS = {
    'length in days of a complete moon cycle': 'Duración en días de un ciclo lunar completo.',
    'This is the main entry point of the application.': 'Este es el punto de entrada principal de la aplicación.',
    'if you want to use a different Application Delegate class from "AppDelegate"': 'Si quieres usar una clase delegada distinta de "AppDelegate",',
    'you can specify it here.': 'puedes indicarla aquí.',
    'See https://aka.ms/maui-publish-app-store#add-entitlements for more information about adding entitlements.': 'Consulta https://aka.ms/maui-publish-app-store#add-entitlements para saber cómo añadir permisos de la aplicación.',
    'App Sandbox must be enabled to distribute a MacCatalyst app through the Mac App Store.': 'El aislamiento App Sandbox debe estar activado para distribuir una aplicación MacCatalyst mediante Mac App Store.',
    'When App Sandbox is enabled, this value is required to open outgoing network connections.': 'Con App Sandbox activado, este valor permite abrir conexiones de red salientes.',
    'The Mac App Store requires you specify if the app uses encryption.': 'Mac App Store exige indicar si la aplicación utiliza cifrado.',
    'Please consult ': 'Consulta ',
    'Please indicate <true/> or <false/> here.': 'Indica aquí <true/> o <false/>.',
    'Specify the category for your app here.': 'Indica aquí la categoría de la aplicación.',
    'YOUR-CATEGORY-HERE': 'TU-CATEGORIA-AQUI',
    'The combination of below two tags have the following effect:': 'La combinación de las dos etiquetas siguientes tiene este efecto:',
    'Per-Monitor for >= Windows 10 Anniversary Update': 'Configuración por monitor desde Windows 10 Anniversary Update',
    'System < Windows 10 Anniversary Update': 'Configuración del sistema en versiones anteriores a Windows 10 Anniversary Update',
    'To learn more about WinUI, the WinUI project structure,': 'Para saber más sobre WinUI y la estructura de sus proyectos,',
    'and more about our project templates, see: http://aka.ms/winui-project-info.': 'y sobre las plantillas de proyecto, consulta http://aka.ms/winui-project-info.',
    'Provides application-specific behavior to supplement the default Application class.': 'Añade el comportamiento específico de esta aplicación a la clase Application predeterminada.',
    'Initializes the singleton application object.  This is the first line of authored code': 'Inicializa la instancia única de la aplicación. Esta es la primera línea de código propio',
    'executed, and as such is the logical equivalent of main() or WinMain().': 'que se ejecuta; equivale lógicamente a main() o WinMain().',
    'Note for MacCatalyst:': 'Nota sobre MacCatalyst:',
    'The default runtime is maccatalyst-x64, except in Release config, in which case the default is maccatalyst-x64;maccatalyst-arm64.': 'El entorno de ejecución predeterminado es maccatalyst-x64; en Release se utilizan maccatalyst-x64;maccatalyst-arm64.',
    'When specifying both architectures, use the plural <RuntimeIdentifiers> instead of the singular <RuntimeIdentifier>.': 'Para indicar ambas arquitecturas, usa el plural <RuntimeIdentifiers> en vez de <RuntimeIdentifier>.',
    'The Mac App Store will NOT accept apps with ONLY maccatalyst-arm64 indicated;': 'Mac App Store NO acepta aplicaciones que indiquen SOLO maccatalyst-arm64;',
    'either BOTH runtimes must be indicated or ONLY macatalyst-x64.': 'debes indicar AMBOS entornos de ejecución o SOLO macatalyst-x64.',
    'For example:': 'Por ejemplo:',
    'Enable XAML source generation for faster build times and improved performance.': 'Activa la generación de código a partir de XAML para mejorar la compilación y el rendimiento.',
    'This generates C# code from XAML at compile time instead of runtime inflation.': 'Genera código C# desde XAML durante la compilación, en lugar de construirlo en ejecución.',
    'To disable, remove this line.': 'Para desactivarlo, elimina esta línea.',
    'For individual files, you can override by setting Inflator metadata:': 'Para modificar archivos concretos, establece sus metadatos Inflator:',
    '(reverts to defaults: Runtime for Debug, XamlC for Release)': '(restaura los valores predeterminados: Runtime en Debug y XamlC en Release)',
    '(force runtime inflation)': '(fuerza la construcción durante la ejecución)',
    'Display name': 'Nombre visible', 'App Identifier': 'Identificador de aplicación',
    'Versions': 'Versiones',
    'To develop, package, and publish an app to the Microsoft Store, see:': 'Para desarrollar, empaquetar y publicar en Microsoft Store, consulta:',
    'App Icon': 'Icono de la aplicación', 'Splash Screen': 'Pantalla de inicio',
    'Images': 'Imágenes', 'Custom Fonts': 'Fuentes personalizadas',
    'Raw Assets (also remove the "Resources\\Raw" prefix)': 'Recursos sin procesar (también se elimina el prefijo "Resources\\Raw")',
    'Note: For Android please see also Platforms\\Android\\Resources\\values\\colors.xml': 'Nota: para Android consulta también Platforms\\Android\\Resources\\values\\colors.xml',
    'Enable this value to use browser developer tools while debugging.': 'Activa este valor para usar las herramientas de desarrollo del navegador durante la depuración.',
    'See https://aka.ms/blazor-hybrid-developer-tools': 'Consulta https://aka.ms/blazor-hybrid-developer-tools',
    'Field is only set via JSON deserialization, so disable warning that the field is never set.': 'El campo se asigna mediante deserialización JSON; se desactiva la advertencia de campo sin asignación.',
    'Fields are only set via JSON deserialization, so disable warning that the fields are never set.': 'Los campos se asignan mediante deserialización JSON; se desactiva la advertencia de campos sin asignación.',
    'Left column = static labels': 'Columna izquierda: etiquetas fijas',
    'Right column = user input and calculated-value output': 'Columna derecha: entradas y resultados calculados',
    'Navigate to advanced-view page': 'Navega a la página de cálculo avanzado',
    'Swap the foreground/background colors of this page': 'Intercambia los colores del texto y del fondo de esta página',
}

def explicit_types(text):
    text = re.sub(r'\bvar (\w+)\s*=\s*new ([\w.]+(?:<[^>\r\n]+>)?)\s*([({])', r'\2 \1 = new \2\3', text)
    text = text.replace('var op => op', 'char op => op')
    types = {
        'builder': 'MauiAppBuilder', 'latLoc': 'double', 'longLoc': 'double',
        'status': 'PermissionStatus', 'location': 'Location?', 'query': 'string', 'json': 'string',
        'data': 'SunriseSunsetData?', 'phase': 'MoonPhaseCalculator.Phase',
        'sunriseSunsetData': '(DateTime, DateTime, TimeSpan)',
        'latLongData': '(double Latitude, double Longitude)',
        'sunData': '(DateTime Sunrise, DateTime Sunset)',
        'riseTime': 'DateTime', 'setTime': 'DateTime', 'span': 'TimeSpan',
    }
    for name, typename in types.items():
        text = re.sub(r'\bvar '+name+r'\s*=', typename+' '+name+' =', text)
    return text

def adapt(path):
    if path.suffix.lower() not in {'.cs','.xaml','.csproj','.xml','.plist','.manifest','.appxmanifest','.props','.targets','.xcprivacy','.svg'}:
        return
    original = path.read_text(encoding='utf-8-sig')
    text = original
    def translate(match):
        comment=match.group(0)
        for before, after in TRANSLATIONS.items():
            comment=comment.replace(before, after)
        return comment
    text = re.sub(r'<!--[\s\S]*?-->|/\*[\s\S]*?\*/|(?<!:)//[^\r\n]*', translate, text)
    if path.suffix=='.cs':
        text=explicit_types(text)
    if text != original:
        path.write_text(text, encoding='utf-8')

if __name__=='__main__':
    for path in (ROOT/'solutions').rglob('*'):
        if path.is_file() and not set(path.parts)&{'bin','obj','.vs','.git'}:
            adapt(path)
    print('Comentarios traducidos y tipos explícitos aplicados a las soluciones.')
