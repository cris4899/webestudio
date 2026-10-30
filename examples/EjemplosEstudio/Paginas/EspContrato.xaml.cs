namespace Estudio;

public partial class EspContrato : ContentPage
{
    public EspContrato()
    {
        InitializeComponent();

    }

    private void ComprobarClick(object? sender, EventArgs e)
    {
        etiquetaResultado.Text = entradaUsuario.EsValido() ? "Nombre de usuario válido" : "Nombre de usuario no válido";
    }
}

// ejemplo:esp-contrato
public class EntryNombreUsuario : Entry
{
    public EntryNombreUsuario()
    {
        Placeholder = "Usuario (5 a 15 letras)";
        MaxLength = 15;
    }

    public bool EsValido()
    {
        string texto = Text ?? "";
        if (texto.Length < 5 || texto.Length > 15)
        {
            return false;
        }
        foreach (char letra in texto)
        {
            // Solo letras ASCII: sin acentos, dígitos ni signos.
            bool esLetra = (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z');
            if (!esLetra)
            {
                return false;
            }
        }
        return true;
    }
}
// fin:esp-contrato
