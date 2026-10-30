namespace Estudio;

public partial class CalcEventoCentralizado : ContentPage
{
    public CalcEventoCentralizado()
    {
        InitializeComponent();

    }

    // ejemplo:calc-evento-centralizado
    private void DigitoClick(object? sender, EventArgs e)
    {
        // sender identifica qué botón se pulsó; no hace falta un método por dígito.
        if (sender is not Button boton)
        {
            return;
        }
        visor.Text += boton.Text;
    }
    // fin:calc-evento-centralizado
}
