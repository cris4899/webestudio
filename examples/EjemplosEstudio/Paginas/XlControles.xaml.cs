namespace Estudio;

public partial class XlControles : ContentPage
{
    public XlControles()
    {
        InitializeComponent();

    }

    private void SaludarClick(object? sender, EventArgs e)
    {
        string nombre = entradaNombre.Text ?? "";
        etiquetaSaludo.Text = nombre.Length == 0 ? "Escribe tu nombre" : $"Hola, {nombre}";
    }
}
