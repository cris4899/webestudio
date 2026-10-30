namespace Estudio;

public partial class LpHabilitar : ContentPage
{
    public LpHabilitar()
    {
        InitializeComponent();

    }

    // ejemplo:lp-habilitar
    private string? numeroTraducido;

    private void TraducirClick(object? sender, EventArgs e)
    {
        numeroTraducido = TraductorTelefono.ANumero(entradaTexto.Text);
        botonLlamar.IsEnabled = numeroTraducido is not null;
        etiquetaEstado.Text = numeroTraducido ?? "Texto no válido";
    }

    private void TextoCambiado(object? sender, TextChangedEventArgs e)
    {
        // Si el texto cambia, el número traducido ya no corresponde a lo que se ve.
        numeroTraducido = null;
        botonLlamar.IsEnabled = false;
    }

    private async void LlamarClick(object? sender, EventArgs e)
    {
        if (numeroTraducido is null)
        {
            return;
        }
        bool confirmado = await DisplayAlertAsync("Llamar", $"¿Llamar al {numeroTraducido}?", "Llamar", "Cancelar");
        if (!confirmado)
        {
            return;
        }
        if (PhoneDialer.Default.IsSupported)
        {
            PhoneDialer.Default.Open(numeroTraducido);
        }
        else
        {
            etiquetaEstado.Text = "Este dispositivo no puede abrir el marcador.";
        }
    }
    // fin:lp-habilitar
}
