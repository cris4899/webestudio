namespace Estudio;
public class CalculadoraStackCS : ContentPage { private readonly Entry visor=new() { IsReadOnly=true }; public CalculadoraStackCS() { Title="Calculadora Stack C#";var root = new StackLayout { Padding=20, Spacing=6, Orientation=StackOrientation.Vertical }; root.Children.Add(visor);
var fila0=new StackLayout { Orientation=StackOrientation.Horizontal, Spacing=6 }; root.Children.Add(fila0);
var b00=new Button { Text="7", WidthRequest=65 }; b00.Clicked += Digito;
fila0.Children.Add(b00);
var b01=new Button { Text="8", WidthRequest=65 }; b01.Clicked += Digito;
fila0.Children.Add(b01);
var b02=new Button { Text="9", WidthRequest=65 }; b02.Clicked += Digito;
fila0.Children.Add(b02);
var b03=new Button { Text="×", WidthRequest=65 }; b03.Clicked += Operacion;
fila0.Children.Add(b03);
var fila1=new StackLayout { Orientation=StackOrientation.Horizontal, Spacing=6 }; root.Children.Add(fila1);
var b10=new Button { Text="4", WidthRequest=65 }; b10.Clicked += Digito;
fila1.Children.Add(b10);
var b11=new Button { Text="5", WidthRequest=65 }; b11.Clicked += Digito;
fila1.Children.Add(b11);
var b12=new Button { Text="6", WidthRequest=65 }; b12.Clicked += Digito;
fila1.Children.Add(b12);
var b13=new Button { Text="+", WidthRequest=65 }; b13.Clicked += Operacion;
fila1.Children.Add(b13);
var fila2=new StackLayout { Orientation=StackOrientation.Horizontal, Spacing=6 }; root.Children.Add(fila2);
var b20=new Button { Text="1", WidthRequest=65 }; b20.Clicked += Digito;
fila2.Children.Add(b20);
var b21=new Button { Text="2", WidthRequest=65 }; b21.Clicked += Digito;
fila2.Children.Add(b21);
var b22=new Button { Text="3", WidthRequest=65 }; b22.Clicked += Digito;
fila2.Children.Add(b22);
var b23=new Button { Text="÷", WidthRequest=65 }; b23.Clicked += Operacion;
fila2.Children.Add(b23);
var fila3=new StackLayout { Orientation=StackOrientation.Horizontal, Spacing=6 }; root.Children.Add(fila3);
var b30=new Button { Text="0", WidthRequest=65 }; b30.Clicked += Digito;
fila3.Children.Add(b30);
var b31=new Button { Text="%", WidthRequest=65 }; b31.Clicked += Operacion;
fila3.Children.Add(b31);
var b32=new Button { Text="-", WidthRequest=65 }; b32.Clicked += Operacion;
fila3.Children.Add(b32);
var b33=new Button { Text="=", WidthRequest=65 }; b33.Clicked += Operacion;
fila3.Children.Add(b33);
var limpiar=new Button { Text="C" }; limpiar.Clicked+=Operacion;
root.Children.Add(limpiar);
Content=root;}

private readonly Calculadora modelo = new();
private void Digito(object? sender, EventArgs e) { if (sender is Button b) { modelo.Digito(b.Text); visor.Text = modelo.Visor; } }
private async void Operacion(object? sender, EventArgs e) {
    if (sender is not Button b) return;
    try { if (b.Text == "C") modelo.Limpiar(); else modelo.Operacion(b.Text[0] switch { '×' => '*', '÷' => '/', var op => op }); visor.Text = modelo.Visor; }
    catch (Exception ex) when (ex is ArgumentException or ArithmeticException) { modelo.Limpiar(); visor.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
}
}
