namespace Estudio;

public partial class MatFormato : ContentPage
{
    public MatFormato()
    {
        InitializeComponent();

    }

    // ejemplo:matricula-formato
    private static bool EsMatriculaValida(string texto)
    {
        // Cuatro dígitos, un guion y tres letras que no sean vocales: 8 caracteres.
        if (texto.Length != 8 || texto[4] != '-')
        {
            return false;
        }
        for (int posicion = 0; posicion < 4; posicion++)
        {
            if (!char.IsDigit(texto[posicion]))
            {
                return false;
            }
        }
        for (int posicion = 5; posicion < 8; posicion++)
        {
            char letra = char.ToUpperInvariant(texto[posicion]);
            if (!char.IsLetter(letra) || "AEIOU".Contains(letra))
            {
                return false;
            }
        }
        return true;
    }

    private void ComprobarClick(object? sender, EventArgs e)
    {
        string texto = entradaMatricula.Text ?? "";
        etiquetaResultado.Text = EsMatriculaValida(texto) ? "Formato correcto" : "Formato incorrecto";
    }
    // fin:matricula-formato
}
