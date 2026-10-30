namespace Estudio;

public partial class LlAlineacion : ContentPage
{
    public LlAlineacion()
    {
        InitializeComponent();

    }

    // ejemplo:ll-alineacion
    private void AlinearClick(object? sender, EventArgs e)
    {
        if (sender is not Button boton)
        {
            return;
        }
        LayoutOptions opcion = boton.Text switch
        {
            "Start" => LayoutOptions.Start,
            "Center" => LayoutOptions.Center,
            "End" => LayoutOptions.End,
            _ => LayoutOptions.Fill
        };
        // Cambia la posición de la Label dentro de su celda, no la del texto dentro de la Label.
        etiquetaObjetivo.HorizontalOptions = opcion;
    }
    // fin:ll-alineacion
}
