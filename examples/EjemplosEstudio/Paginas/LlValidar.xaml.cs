using System.Text;

namespace Estudio;

public partial class LlValidar : ContentPage
{
    public LlValidar()
    {
        InitializeComponent();

    }

    // ejemplo:ll-validar
    private void ComprobarClick(object? sender, EventArgs e)
    {
        // (cuenta, porcentaje, propina esperada, total esperado) calculados a mano.
        (decimal Cuenta, decimal Porcentaje, decimal Propina, decimal Total)[] casos =
        {
            (100m, 15m, 15m, 115m),
            (80m, 20m, 16m, 96m),
            (45.50m, 10m, 4.55m, 50.05m)
        };
        StringBuilder tabla = new StringBuilder();
        foreach ((decimal cuenta, decimal porcentaje, decimal propinaEsperada, decimal totalEsperado) in casos)
        {
            (decimal propina, decimal total) = CalculoPropina.Calcular(cuenta, porcentaje);
            bool correcto = propina == propinaEsperada && total == totalEsperado;
            tabla.AppendLine($"{cuenta} al {porcentaje}%: {(correcto ? "correcto" : "FALLO")}");
        }
        etiquetaTabla.Text = tabla.ToString();
    }
    // fin:ll-validar
}
