using System.Text.RegularExpressions;

namespace Estudio;

public partial class MatAviso : ContentPage
{
    public MatAviso()
    {
        InitializeComponent();

    }

    // ejemplo:matricula-aviso
    private void MostrarError(string mensaje)
    {
        etiquetaInfo.Text = mensaje;
        etiquetaInfo.BackgroundColor = Colors.Yellow;
    }

    private void LimpiarError()
    {
        // Hay que deshacer las dos cosas: el texto y el fondo.
        etiquetaInfo.Text = "";
        etiquetaInfo.BackgroundColor = Colors.Transparent;
    }

    private void TextoCambiado(object? sender, TextChangedEventArgs e)
    {
        string texto = e.NewTextValue ?? "";
        if (Regex.IsMatch(texto.ToUpperInvariant(), "^[0-9]{4}-[BCDFGHJKLMNÑPQRSTVWXYZ]{3}$"))
        {
            LimpiarError();
        }
        else
        {
            MostrarError("Formato esperado: 0000-BBB, sin vocales.");
        }
    }
    // fin:matricula-aviso
}
