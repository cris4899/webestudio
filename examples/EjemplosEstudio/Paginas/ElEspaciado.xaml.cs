namespace Estudio;

public partial class ElEspaciado : ContentPage
{
    public ElEspaciado()
    {
        InitializeComponent();

    }

}

// ejemplo:el-espaciado
public class EntryContraseniaV1 : ContentView
{
    private readonly VerticalStackLayout pila = new VerticalStackLayout { Spacing = 4 };
    private readonly Entry entrada = new Entry { IsPassword = true, Placeholder = "Contraseña" };
    private readonly Label error = new Label { TextColor = Colors.Red, Text = "Debe tener 10 caracteres." };

    public EntryContraseniaV1()
    {
        pila.Children.Add(entrada);
        pila.Children.Add(error);
        Content = pila;
    }

    // Única propiedad personalizable en esta variante: el espaciado.
    public double Separacion
    {
        get => pila.Spacing;
        set => pila.Spacing = value;
    }
}
// fin:el-espaciado
