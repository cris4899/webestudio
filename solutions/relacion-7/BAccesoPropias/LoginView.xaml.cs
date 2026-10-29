namespace Estudio;
public partial class LoginView : ContentView
{
    public LoginView()
    {
        InitializeComponent();
    }

    public string UserName => usuario.Usuario;
    public string PassWord => password.Password;

    public double Espaciado
    {
        get => layout.Spacing;
        set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value));
            layout.Spacing = value;
        }
    }

    public Thickness Relleno { get => layout.Padding; set => layout.Padding = value; }
    public Thickness Margen { get => layout.Margin; set => layout.Margin = value; }
    public Color Fondo { get => layout.BackgroundColor; set => layout.BackgroundColor = value; }

    public double Fuente
    {
        get => usuario.FontSize;
        set
        {
            if (value <= 0)
                throw new ArgumentOutOfRangeException(nameof(value));
            usuario.FontSize = password.FontSize = titulo.FontSize = value;
        }
    }

    public void ReemplazarRecurso()
    {
        Resources["FondoLayout"] = Colors.LightSkyBlue;
    }
}
