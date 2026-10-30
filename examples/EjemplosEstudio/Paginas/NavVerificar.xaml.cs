namespace Estudio;

public partial class NavVerificar : ContentPage
{
    public NavVerificar()
    {
        InitializeComponent();

    }

    // ejemplo:nav-verificar
    private void ComprobarClick(object? sender, EventArgs e)
    {
        // CurrentPage es la ContentPage que Shell ha creado para este destino.
        Page? actual = Shell.Current.CurrentPage;
        string nombre = actual is null ? "ninguna" : actual.GetType().Name;
        int destinos = Shell.Current.Items.Count;
        etiquetaPagina.Text = $"Página mostrada: {nombre}. Entradas de menú: {destinos}.";
    }
    // fin:nav-verificar
}
