namespace Estudio;

public partial class ElAnfitrion : ContentPage
{
    public ElAnfitrion()
    {
        InitializeComponent();

    }

    // ejemplo:el-anfitrion
    private void AlternarClick(object? sender, EventArgs e)
    {
        // El anfitrión usa la propiedad pública; no toca los controles internos.
        contrasena.Separacion = contrasena.Separacion == 4 ? 24 : 4;
        etiquetaValor.Text = $"Separación actual: {contrasena.Separacion}";
    }
    // fin:el-anfitrion
}
