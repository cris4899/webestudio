namespace Estudio;

public partial class LmComprobar : ContentPage
{
    public LmComprobar()
    {
        InitializeComponent();

    }

    // ejemplo:lm-comprobar
    private void EstadoClick(object? sender, EventArgs e)
    {
        // Location es la ruta actual dentro del Shell; la pila cuenta las páginas apiladas.
        string ubicacion = Shell.Current.CurrentState.Location.ToString();
        int apiladas = Navigation.NavigationStack.Count;
        etiquetaEstado.Text = $"Ruta: {ubicacion}. Páginas en la pila: {apiladas}.";
    }
    // fin:lm-comprobar
}
