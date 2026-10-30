namespace Estudio;

public partial class App : Application
{
    public App()
    {
        InitializeComponent();
    }

    // ejemplo:lp-arquitectura
    protected override Window CreateWindow(IActivationState? activationState)
    {
        // App crea la ventana y la ventana aloja el Shell.
        return new Window(new AppShell());
    }
    // fin:lp-arquitectura
}
