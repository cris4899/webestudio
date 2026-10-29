namespace Estudio;
public partial class ViewMatriculaEstudio : ContentView {
    public ViewMatriculaEstudio(){InitializeComponent();}
    public string Matricula {get=>Reglas.Matricula(entrada.Text);set { try {string validada=Reglas.Matricula(value);entrada.Text=validada;Mensaje("");}catch(ArgumentException ex){Mensaje(ex.Message);throw;} }}
    private void Cambio(object sender,TextChangedEventArgs e){try{_ = Reglas.Matricula(entrada.Text);Mensaje("");}catch(ArgumentException ex){Mensaje(ex.Message);}}

public double Espaciado {get=>layout.Spacing;set{if(value<0)throw new ArgumentOutOfRangeException(nameof(value));layout.Spacing=fila.Spacing=value;}}
public Thickness Relleno {get=>layout.Padding;set{layout.Padding=fila.Padding=value;}}
public Color Fondo {get=>layout.BackgroundColor;set{layout.BackgroundColor=fila.BackgroundColor=value;}}
private void Mensaje(string texto){error.Text=texto;error.BackgroundColor=texto.Length==0?Colors.Transparent:Colors.Yellow;}
}
