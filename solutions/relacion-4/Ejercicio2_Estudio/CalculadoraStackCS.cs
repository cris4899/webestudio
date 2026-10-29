namespace Estudio;
public class CalculadoraStackCS : ContentPage
{
    private readonly Entry visor = new()
    {
        IsReadOnly = true
    };
    public CalculadoraStackCS()
    {
        Title = "Calculadora Stack C#";
        StackLayout root = new StackLayout
        {
            Padding = 20,
            Spacing = 6,
            Orientation = StackOrientation.Vertical
        };
        root.Children.Add(visor);
        StackLayout fila0 = new StackLayout
        {
            Orientation = StackOrientation.Horizontal,
            Spacing = 6
        };
        root.Children.Add(fila0);
        Button b00 = new Button
        {
            Text = "7",
            WidthRequest = 65
        };
        b00.Clicked += Digito;
        fila0.Children.Add(b00);
        Button b01 = new Button
        {
            Text = "8",
            WidthRequest = 65
        };
        b01.Clicked += Digito;
        fila0.Children.Add(b01);
        Button b02 = new Button
        {
            Text = "9",
            WidthRequest = 65
        };
        b02.Clicked += Digito;
        fila0.Children.Add(b02);
        Button b03 = new Button
        {
            Text = "×",
            WidthRequest = 65
        };
        b03.Clicked += Operacion;
        fila0.Children.Add(b03);
        StackLayout fila1 = new StackLayout
        {
            Orientation = StackOrientation.Horizontal,
            Spacing = 6
        };
        root.Children.Add(fila1);
        Button b10 = new Button
        {
            Text = "4",
            WidthRequest = 65
        };
        b10.Clicked += Digito;
        fila1.Children.Add(b10);
        Button b11 = new Button
        {
            Text = "5",
            WidthRequest = 65
        };
        b11.Clicked += Digito;
        fila1.Children.Add(b11);
        Button b12 = new Button
        {
            Text = "6",
            WidthRequest = 65
        };
        b12.Clicked += Digito;
        fila1.Children.Add(b12);
        Button b13 = new Button
        {
            Text = "+",
            WidthRequest = 65
        };
        b13.Clicked += Operacion;
        fila1.Children.Add(b13);
        StackLayout fila2 = new StackLayout
        {
            Orientation = StackOrientation.Horizontal,
            Spacing = 6
        };
        root.Children.Add(fila2);
        Button b20 = new Button
        {
            Text = "1",
            WidthRequest = 65
        };
        b20.Clicked += Digito;
        fila2.Children.Add(b20);
        Button b21 = new Button
        {
            Text = "2",
            WidthRequest = 65
        };
        b21.Clicked += Digito;
        fila2.Children.Add(b21);
        Button b22 = new Button
        {
            Text = "3",
            WidthRequest = 65
        };
        b22.Clicked += Digito;
        fila2.Children.Add(b22);
        Button b23 = new Button
        {
            Text = "÷",
            WidthRequest = 65
        };
        b23.Clicked += Operacion;
        fila2.Children.Add(b23);
        StackLayout fila3 = new StackLayout
        {
            Orientation = StackOrientation.Horizontal,
            Spacing = 6
        };
        root.Children.Add(fila3);
        Button b30 = new Button
        {
            Text = "0",
            WidthRequest = 65
        };
        b30.Clicked += Digito;
        fila3.Children.Add(b30);
        Button b31 = new Button
        {
            Text = "%",
            WidthRequest = 65
        };
        b31.Clicked += Operacion;
        fila3.Children.Add(b31);
        Button b32 = new Button
        {
            Text = "-",
            WidthRequest = 65
        };
        b32.Clicked += Operacion;
        fila3.Children.Add(b32);
        Button b33 = new Button
        {
            Text = "=",
            WidthRequest = 65
        };
        b33.Clicked += Operacion;
        fila3.Children.Add(b33);
        Button limpiar = new Button
        {
            Text = "C"
        };
        limpiar.Clicked += Operacion;
        root.Children.Add(limpiar);
        Content = root;
    }

    private readonly Calculadora modelo = new();
    private void Digito(object? sender, EventArgs e)
    {
        if (sender is Button b)
        {
            modelo.Digito(b.Text);
            visor.Text = modelo.Visor;
        }
    }

    private async void Operacion(object? sender, EventArgs e)
    {
        if (sender is not Button b)
            return;
        try
        {
            if (b.Text == "C")
                modelo.Limpiar();
            else
                modelo.Operacion(b.Text[0] switch
                {
                    '×' => '*',
                    '÷' => '/',
                    char op => op
                });
            visor.Text = modelo.Visor;
        }
        catch (Exception ex)when (ex is ArgumentException or ArithmeticException)
        {
            modelo.Limpiar();
            visor.Text = "";
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }
}
