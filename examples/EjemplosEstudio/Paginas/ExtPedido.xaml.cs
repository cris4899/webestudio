namespace Estudio;

public partial class ExtPedido : ContentPage
{
    public ExtPedido()
    {
        InitializeComponent();

    }

}

public static class Medidas
{
    public static readonly double Separacion = 12;
    public static readonly Thickness Relleno = new Thickness(20);
    public static readonly Thickness Margen = new Thickness(8);
    public static readonly Color Fondo = Colors.LightYellow;
    public static readonly double TamanoFuente = 18;
}
