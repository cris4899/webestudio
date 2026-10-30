namespace Estudio;

public partial class EspComponer : ContentPage
{
    public EspComponer()
    {
        InitializeComponent();

    }

}

// ejemplo:esp-componer
public class CampoConError : ContentView
{
    private readonly Entry entrada = new Entry { Placeholder = "Escribe algo" };
    private readonly Label error = new Label { TextColor = Colors.Red };

    public CampoConError()
    {
        // Es un ContentView que CONTIENE un Entry; no es un Entry.
        entrada.TextChanged += TextoCambiado;
        Content = new VerticalStackLayout { Spacing = 4, Children = { entrada, error } };
    }

    private void TextoCambiado(object? sender, TextChangedEventArgs e)
    {
        error.Text = string.IsNullOrEmpty(e.NewTextValue) ? "El campo no puede estar vacío." : "";
    }
}
// fin:esp-componer
