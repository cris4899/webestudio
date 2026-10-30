namespace Estudio;

public partial class EdadContrato : ContentPage
{
    public EdadContrato()
    {
        InitializeComponent();
        MostrarLimite();
    }

    // ejemplo:edad-contrato
    private int mayoriaEdad = 18;

    public int MayoriaEdad
    {
        get => mayoriaEdad;
        set
        {
            // La configuración debe ser superior a 12: el propio 12 no vale.
            if (value <= 12)
            {
                throw new ArgumentOutOfRangeException(nameof(value), "La mayoría de edad debe ser superior a 12.");
            }
            mayoriaEdad = value;
        }
    }
    // fin:edad-contrato

    private void Fijar21Click(object? sender, EventArgs e) => Fijar(21);

    private void Fijar12Click(object? sender, EventArgs e) => Fijar(12);

    private void Fijar(int valor)
    {
        try
        {
            MayoriaEdad = valor;
        }
        catch (ArgumentOutOfRangeException)
        {
            etiquetaResultado.Text = $"Valor {valor} rechazado. ";
            etiquetaResultado.Text += $"Límite actual: {MayoriaEdad}";
            return;
        }
        MostrarLimite();
    }

    private void MostrarLimite() => etiquetaResultado.Text = $"Límite actual: {MayoriaEdad}";
}
