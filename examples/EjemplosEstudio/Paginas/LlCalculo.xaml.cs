namespace Estudio;

public partial class LlCalculo : ContentPage
{
    public LlCalculo()
    {
        InitializeComponent();
        Recalcular();
    }

    private void DatoCambiado(object? sender, TextChangedEventArgs e) => Recalcular();

    private void DeslizadorCambiado(object? sender, ValueChangedEventArgs e) => Recalcular();

    private void RedondearAbajoClick(object? sender, EventArgs e) => Redondear(false);

    private void RedondearArribaClick(object? sender, EventArgs e) => Redondear(true);

    private void Recalcular()
    {
        decimal porcentaje = (decimal)Math.Round(deslizador.Value);
        etiquetaPorcentaje.Text = $"Propina: {porcentaje} %";
        if (!decimal.TryParse(entradaCuenta.Text, out decimal cuenta))
        {
            // Una entrada no numérica no debe dejar visible un resultado antiguo.
            etiquetaPropina.Text = "";
            etiquetaTotal.Text = "";
            return;
        }
        (decimal propina, decimal total) = CalculoPropina.Calcular(cuenta, porcentaje);
        etiquetaPropina.Text = $"Propina: {propina:F2}";
        etiquetaTotal.Text = $"Total: {total:F2}";
    }

    private void Redondear(bool arriba)
    {
        if (!decimal.TryParse(entradaCuenta.Text, out decimal cuenta))
        {
            return;
        }
        decimal porcentaje = (decimal)Math.Round(deslizador.Value);
        (decimal propina, decimal total) = CalculoPropina.Calcular(cuenta, porcentaje);
        (propina, total) = CalculoPropina.RedondearTotal(cuenta, total, arriba);
        etiquetaPropina.Text = $"Propina: {propina:F2}";
        etiquetaTotal.Text = $"Total: {total:F2}";
    }
}

// ejemplo:ll-calculo
public static class CalculoPropina
{
    public static (decimal Propina, decimal Total) Calcular(decimal cuenta, decimal porcentaje)
    {
        decimal propina = Math.Round(cuenta * porcentaje / 100, 2, MidpointRounding.AwayFromZero);
        return (propina, cuenta + propina);
    }

    public static (decimal Propina, decimal Total) RedondearTotal(decimal cuenta, decimal total, bool arriba)
    {
        decimal nuevoTotal = arriba ? Math.Ceiling(total) : Math.Floor(total);
        // La propina pasa a ser la diferencia con la cuenta original.
        return (nuevoTotal - cuenta, nuevoTotal);
    }
}
// fin:ll-calculo
