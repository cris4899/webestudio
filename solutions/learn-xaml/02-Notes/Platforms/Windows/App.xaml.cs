using Microsoft.UI.Xaml;

// Para saber más sobre WinUI y la estructura de sus proyectos,
// y sobre las plantillas de proyecto, consulta http://aka.ms/winui-project-info.
namespace Notes.WinUI;
/// <summary>
/// Añade el comportamiento específico de esta aplicación a la clase Application predeterminada.
/// </summary>
public partial class App : MauiWinUIApplication
{
    /// <summary>
    /// Inicializa la instancia única de la aplicación. Esta es la primera línea de código propio
    /// que se ejecuta; equivale lógicamente a main() o WinMain().
    /// </summary>
    public App()
    {
        this.InitializeComponent();
    }

    protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
