namespace Estudio;

public partial class XlBoxSlider : ContentPage
{
    public XlBoxSlider()
    {
        InitializeComponent();

    }

    // ejemplo:xl-boxview-slider
    private void ValorCambiado(object? sender, ValueChangedEventArgs e)
    {
        // NewValue es un double dentro del intervalo Minimum..Maximum.
        rectangulo.WidthRequest = e.NewValue;
        etiquetaValor.Text = $"Ancho: {e.NewValue:F0}";
    }
    // fin:xl-boxview-slider
}
