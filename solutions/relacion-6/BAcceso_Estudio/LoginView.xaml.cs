namespace Estudio;
public partial class LoginView : ContentView
{
    public LoginView()
    {
        InitializeComponent();
    }

    public string UserName => usuario.Usuario;
    public string PassWord => password.Password;
}
