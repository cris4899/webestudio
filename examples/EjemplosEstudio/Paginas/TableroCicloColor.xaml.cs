namespace Estudio;

public partial class TableroCicloColor : ContentPage
{
    public TableroCicloColor()
    {
        InitializeComponent();
        for (int indice = 0; indice < 5; indice++)
        {
            tablero.RowDefinitions.Add(new RowDefinition());
            tablero.ColumnDefinitions.Add(new ColumnDefinition());
        }
        for (int fila = 0; fila < 5; fila++)
        {
            for (int columna = 0; columna < 5; columna++)
            {
                BotonCiclico boton = new BotonCiclico { Text = (fila * 5 + columna + 1).ToString() };
                tablero.Add(boton, columna, fila);
            }
        }
    }

}

// ejemplo:tablero-ciclo-color
public enum EstadoColor { Original, Verde, Rojo }

public class BotonCiclico : Button
{
    private EstadoColor estado = EstadoColor.Original;
    private readonly Color colorOriginal = Colors.SteelBlue;

    public BotonCiclico()
    {
        BackgroundColor = colorOriginal;
        Clicked += AlPulsar;
    }

    private void AlPulsar(object? sender, EventArgs e)
    {
        // El estado es un campo de este botón: pulsar otro no lo altera.
        estado = estado switch
        {
            EstadoColor.Original => EstadoColor.Verde,
            EstadoColor.Verde => EstadoColor.Rojo,
            _ => EstadoColor.Original
        };
        BackgroundColor = estado switch
        {
            EstadoColor.Verde => Colors.Green,
            EstadoColor.Rojo => Colors.Red,
            _ => colorOriginal
        };
    }
}
// fin:tablero-ciclo-color
