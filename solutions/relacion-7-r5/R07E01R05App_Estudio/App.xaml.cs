using Microsoft.Extensions.DependencyInjection;

namespace R07E01R05App_Estudio;
public partial class App : Application
{
    public App()
    {
        InitializeComponent();
    }

    protected override Window CreateWindow(IActivationState? activationState)
    {
        return new Window(new AppShell());
    }
}
