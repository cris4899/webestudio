namespace Estudio;

public partial class CvAgrupar : ContentPage
{
    public CvAgrupar()
    {
        InitializeComponent();

    }

}

// ejemplo:cv-agrupar
public class LoginView : ContentView
{
    private readonly Entry entradaUsuario = new Entry { Placeholder = "Usuario" };
    private readonly Entry entradaClave = new Entry { Placeholder = "Contraseña", IsPassword = true };

    public LoginView()
    {
        // La aplicación solo coloca un LoginView; no ve cómo se reparten sus hijos.
        Content = new VerticalStackLayout { Spacing = 6, Children = { entradaUsuario, entradaClave } };
    }
}
// fin:cv-agrupar
