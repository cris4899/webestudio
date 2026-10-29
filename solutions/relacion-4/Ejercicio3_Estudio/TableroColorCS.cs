namespace Estudio;
public class TableroColorCS : ContentPage
{
    public TableroColorCS()
    {
        Title = "Tablero dinámico color";
        Grid grid = new Grid
        {
            Padding = 10,
            RowSpacing = 5,
            ColumnSpacing = 5
        };
        for (int i = 0; i < 5; i++)
        {
            grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Star });
            grid.ColumnDefinitions.Add(new ColumnDefinition { Width = GridLength.Star });
        }

        for (int fila = 0; fila < 5; fila++)
            for (int col = 0; col < 5; col++)
            {
                MiBoton b = new MiBoton
                {
                    Text = (fila * 5 + col + 1).ToString()
                };
                grid.Add(b, col, fila);
            }

        Content = grid;
    }
}
