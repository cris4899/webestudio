namespace Estudio;

public partial class LrComparar : ContentPage
{
    public LrComparar()
    {
        InitializeComponent();

    }

    // ejemplo:lr-comparar
    private bool alterno = false;

    private void AlternarClick(object? sender, EventArgs e)
    {
        if (Application.Current is null)
        {
            return;
        }
        alterno = !alterno;
        // Se cambia el diccionario de la aplicación, no cada control.
        Application.Current.Resources["colorAplicacion"] = alterno ? Colors.Red : Color.FromArgb("#512BD4");
    }
    // fin:lr-comparar
}
