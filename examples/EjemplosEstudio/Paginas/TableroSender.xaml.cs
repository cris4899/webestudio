namespace Estudio;

public partial class TableroSender : ContentPage
{
    public TableroSender()
    {
        InitializeComponent();
        GenerarTablero();
    }

    // ejemplo:tablero-sender-text
    private void GenerarTablero()
    {
        for (int indice = 0; indice < 5; indice++)
        {
            tablero.RowDefinitions.Add(new RowDefinition());
            tablero.ColumnDefinitions.Add(new ColumnDefinition());
        }
        for (int fila = 0; fila < 5; fila++)
        {
            for (int columna = 0; columna < 5; columna++)
            {
                Button boton = new Button { Text = (fila * 5 + columna + 1).ToString() };
                boton.Clicked += BotonPulsado;
                tablero.Add(boton, columna, fila);
            }
        }
    }

    private void BotonPulsado(object? sender, EventArgs e)
    {
        // sender es el botón que disparó el evento; su Text ya está fijado.
        if (sender is not Button boton)
        {
            return;
        }
        etiquetaMensaje.Text = $"Has pulsado el botón {boton.Text}";
    }
    // fin:tablero-sender-text
}
