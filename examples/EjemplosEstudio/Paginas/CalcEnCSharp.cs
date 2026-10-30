namespace Estudio;

public class CalcEnCSharp : ContentPage
{
    // ejemplo:calc-en-csharp
    private readonly Entry visor = new Entry { IsReadOnly = true, HorizontalTextAlignment = TextAlignment.End };

    public CalcEnCSharp()
    {
        Title = "Calculadora en C#";
        Grid teclado = new Grid { ColumnSpacing = 6, RowSpacing = 6 };
        for (int indice = 0; indice < 3; indice++)
        {
            teclado.ColumnDefinitions.Add(new ColumnDefinition());
        }
        for (int digito = 1; digito <= 6; digito++)
        {
            Button boton = new Button { Text = digito.ToString() };
            boton.Clicked += DigitosClick;
            teclado.Add(boton, (digito - 1) % 3, (digito - 1) / 3);
        }
        // Content debe recibir el contenedor raíz; sin esto no se ve nada.
        Content = new StackLayout { Padding = 20, Spacing = 8, Children = { visor, teclado } };
    }

    private void DigitosClick(object? sender, EventArgs e)
    {
        if (sender is Button boton)
        {
            visor.Text += boton.Text;
        }
    }
    // fin:calc-en-csharp
}
