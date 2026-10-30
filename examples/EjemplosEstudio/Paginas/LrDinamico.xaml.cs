namespace Estudio;

public partial class LrDinamico : ContentPage
{
    public LrDinamico()
    {
        InitializeComponent();

    }

    // ejemplo:lr-dinamico
    private void ClaroClick(object? sender, EventArgs e)
    {
        Resources["fgColor"] = Colors.Black;
        Resources["bgColor"] = Colors.White;
    }

    private void OscuroClick(object? sender, EventArgs e)
    {
        // Se sustituyen solo dos valores; las etiquetas se actualizan solas.
        Resources["fgColor"] = Colors.White;
        Resources["bgColor"] = Colors.Black;
    }
    // fin:lr-dinamico
}
