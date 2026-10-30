namespace Estudio;

public partial class CvBiblioteca : ContentPage
{
    public CvBiblioteca()
    {
        InitializeComponent();

    }

    // ejemplo:cv-biblioteca
    private void MostrarClick(object? sender, EventArgs e)
    {
        Type tipo = typeof(LoginView);
        string ensamblado = tipo.Assembly.GetName().Name ?? "desconocido";
        // Solo los tipos públicos pueden usarse desde otro proyecto que referencie el ensamblado.
        etiquetaInfo.Text = $"{tipo.Name} está en el ensamblado {ensamblado}. ¿Público? {tipo.IsPublic}";
    }
    // fin:cv-biblioteca
}
