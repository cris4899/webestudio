namespace Estudio;
public partial class CalculadoraStackX : ContentPage { public CalculadoraStackX() { InitializeComponent(); }

private readonly Calculadora modelo = new();
private void Digito(object? sender, EventArgs e) { if (sender is Button b) { modelo.Digito(b.Text); visor.Text = modelo.Visor; } }
private async void Operacion(object? sender, EventArgs e) {
    if (sender is not Button b) return;
    try { if (b.Text == "C") modelo.Limpiar(); else modelo.Operacion(b.Text[0] switch { '×' => '*', '÷' => '/', var op => op }); visor.Text = modelo.Visor; }
    catch (Exception ex) when (ex is ArgumentException or ArithmeticException) { modelo.Limpiar(); visor.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
}

}
