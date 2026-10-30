namespace Estudio;

public partial class EspValidarAlPulsar : ContentPage
{
    public EspValidarAlPulsar()
    {
        InitializeComponent();

    }

    // ejemplo:esp-validar-al-pulsar
    private bool ValidarUsuario()
    {
        bool valido = entradaUsuario.EsValido();
        etiquetaError.Text = valido ? "" : "Usuario no válido: de 5 a 15 letras sin acentos.";
        return valido;
    }

    private void UsuarioSinFoco(object? sender, FocusEventArgs e)
    {
        ValidarUsuario();
    }

    private void EntrarClick(object? sender, EventArgs e)
    {
        // El usuario puede pulsar sin haber pasado antes por el campo.
        if (!ValidarUsuario())
        {
            return;
        }
        etiquetaError.Text = "Acceso correcto";
    }
    // fin:esp-validar-al-pulsar
}
