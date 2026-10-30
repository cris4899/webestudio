namespace Estudio;

public partial class LpContador : ContentPage
{
    public LpContador()
    {
        InitializeComponent();

    }

    // ejemplo:lp-contador
    private int cuenta = 0;

    private void ContarClick(object? sender, EventArgs e)
    {
        // El incremento original era 1; el ejercicio lo cambia a 5.
        cuenta += 5;
        etiquetaCuenta.Text = $"Valor: {cuenta}";
    }
    // fin:lp-contador
}
