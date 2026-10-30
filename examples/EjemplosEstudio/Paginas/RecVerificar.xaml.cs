namespace Estudio;

public partial class RecVerificar : ContentPage
{
    public RecVerificar()
    {
        InitializeComponent();

    }

    // ejemplo:rec-verificar
    private void CambiarClick(object? sender, EventArgs e)
    {
        // Sustituir el valor de la clave: solo el consumidor dinámico se entera.
        Resources["colorTexto"] = Colors.Red;
    }
    // fin:rec-verificar
}
