namespace Estudio;
public class Ejercicio01 : ContentPage {
    public Ejercicio01() { Title="Tablero dinámico"; var grid=new Grid { Padding=10, RowSpacing=5, ColumnSpacing=5 };
        for(int i=0;i<5;i++) { grid.RowDefinitions.Add(new RowDefinition { Height=GridLength.Star }); grid.ColumnDefinitions.Add(new ColumnDefinition { Width=GridLength.Star }); }
        for(int fila=0;fila<5;fila++) for(int col=0;col<5;col++) { var b=new Button { Text=(fila*5+col+1).ToString() };
        b.Clicked+=async (_,_)=>await DisplayAlertAsync("Tablero",$"Has pulsado el botón {b.Text}","Aceptar");
        grid.Add(b,col,fila); } Content=grid;
    }
}
