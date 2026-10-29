namespace Estudio;
public class CalculadoraGridCS : ContentPage { private readonly Entry visor=new() { IsReadOnly=true }; public CalculadoraGridCS() { Title="Calculadora Grid C#";var root = new Grid { Padding = 20, RowSpacing = 6, ColumnSpacing = 6 }; for(int i=0;i<6;i++) root.RowDefinitions.Add(new RowDefinition { Height = i==0 || i==5 ? GridLength.Auto : GridLength.Star }); for(int i=0;i<4;i++) root.ColumnDefinitions.Add(new ColumnDefinition { Width=GridLength.Star }); root.Add(visor,0,0); Grid.SetColumnSpan(visor,4);
var b00=new Button { Text="7", WidthRequest=65 }; b00.Clicked += Digito;
root.Add(b00,0,1);
var b01=new Button { Text="8", WidthRequest=65 }; b01.Clicked += Digito;
root.Add(b01,1,1);
var b02=new Button { Text="9", WidthRequest=65 }; b02.Clicked += Digito;
root.Add(b02,2,1);
var b03=new Button { Text="×", WidthRequest=65 }; b03.Clicked += Operacion;
root.Add(b03,3,1);
var b10=new Button { Text="4", WidthRequest=65 }; b10.Clicked += Digito;
root.Add(b10,0,2);
var b11=new Button { Text="5", WidthRequest=65 }; b11.Clicked += Digito;
root.Add(b11,1,2);
var b12=new Button { Text="6", WidthRequest=65 }; b12.Clicked += Digito;
root.Add(b12,2,2);
var b13=new Button { Text="+", WidthRequest=65 }; b13.Clicked += Operacion;
root.Add(b13,3,2);
var b20=new Button { Text="1", WidthRequest=65 }; b20.Clicked += Digito;
root.Add(b20,0,3);
var b21=new Button { Text="2", WidthRequest=65 }; b21.Clicked += Digito;
root.Add(b21,1,3);
var b22=new Button { Text="3", WidthRequest=65 }; b22.Clicked += Digito;
root.Add(b22,2,3);
var b23=new Button { Text="÷", WidthRequest=65 }; b23.Clicked += Operacion;
root.Add(b23,3,3);
var b30=new Button { Text="0", WidthRequest=65 }; b30.Clicked += Digito;
root.Add(b30,0,4);
var b31=new Button { Text="%", WidthRequest=65 }; b31.Clicked += Operacion;
root.Add(b31,1,4);
var b32=new Button { Text="-", WidthRequest=65 }; b32.Clicked += Operacion;
root.Add(b32,2,4);
var b33=new Button { Text="=", WidthRequest=65 }; b33.Clicked += Operacion;
root.Add(b33,3,4);
var limpiar=new Button { Text="C" }; limpiar.Clicked+=Operacion;
root.Add(limpiar,0,5); Grid.SetColumnSpan(limpiar,4);
Content=root;}

private readonly Calculadora modelo = new();
private void Digito(object? sender, EventArgs e) { if (sender is Button b) { modelo.Digito(b.Text); visor.Text = modelo.Visor; } }
private async void Operacion(object? sender, EventArgs e) {
    if (sender is not Button b) return;
    try { if (b.Text == "C") modelo.Limpiar(); else modelo.Operacion(b.Text[0] switch { '×' => '*', '÷' => '/', var op => op }); visor.Text = modelo.Visor; }
    catch (Exception ex) when (ex is ArgumentException or ArithmeticException) { modelo.Limpiar(); visor.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
}
}
