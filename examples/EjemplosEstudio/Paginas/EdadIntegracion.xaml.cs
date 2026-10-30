namespace Estudio;

public partial class EdadIntegracion : ContentPage
{
    public EdadIntegracion()
    {
        InitializeComponent();

    }

    private int limite = 18;

    // ejemplo:edad-integracion
    private void AsignarLimite(int nuevo)
    {
        // Se rechaza antes de sustituir el valor anterior.
        if (nuevo <= 12)
        {
            etiquetaResultado.Text = $"Límite {nuevo} rechazado. Sigue valiendo {limite}.";
            return;
        }
        limite = nuevo;
        etiquetaResultado.Text = $"Límite: {limite}";
    }

    private void AspectoClick(object? sender, EventArgs e)
    {
        contenedor.Spacing = 30;
        contenedor.Padding = new Thickness(40);
        contenedor.BackgroundColor = Colors.Blue;
    }
    // fin:edad-integracion

    private void LimiteMaloClick(object? sender, EventArgs e) => AsignarLimite(10);

    private void LimiteBuenoClick(object? sender, EventArgs e) => AsignarLimite(16);
}
