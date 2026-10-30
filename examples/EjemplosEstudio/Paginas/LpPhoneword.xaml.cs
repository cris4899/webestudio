using System.Text;

namespace Estudio;

public partial class LpPhoneword : ContentPage
{
    public LpPhoneword()
    {
        InitializeComponent();

    }

    private void TraducirClick(object? sender, EventArgs e)
    {
        string? numero = TraductorTelefono.ANumero(entradaTexto.Text);
        etiquetaNumero.Text = numero ?? "Texto no válido";
    }
}

// ejemplo:lp-phoneword
public static class TraductorTelefono
{
    private static readonly string[] Grupos = { "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ" };

    public static string? ANumero(string? texto)
    {
        if (string.IsNullOrWhiteSpace(texto))
        {
            return null;
        }
        StringBuilder resultado = new StringBuilder();
        foreach (char caracter in texto.ToUpperInvariant())
        {
            if (char.IsDigit(caracter) || caracter == ' ' || caracter == '-')
            {
                resultado.Append(caracter);
                continue;
            }
            int grupo = Array.FindIndex(Grupos, g => g.Contains(caracter));
            if (grupo < 0)
            {
                return null;
            }
            // El grupo 0 (ABC) corresponde al dígito 2.
            resultado.Append(grupo + 2);
        }
        return resultado.ToString();
    }
}
// fin:lp-phoneword
