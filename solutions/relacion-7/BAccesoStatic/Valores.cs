using Microsoft.Maui.Devices;

namespace Estudio;
public static class Valores
{
    // Valores de diseño elegidos para demostrar la distinción de plataformas de R7.
    private static bool Android => DeviceInfo.Current.Platform == DevicePlatform.Android;
    public static double Espaciado => Android ? 12 : 10;
    public static Thickness Relleno => new(Android ? 14 : 10);
    public static Thickness Margen => new(Android ? 8 : 5);
    public static Color FondoLayout => Android ? Colors.LightGreen : Colors.LightGray;
    public static Color FondoEntry => Android ? Colors.LightCyan : Colors.White;
    public static Color FondoLabel => Android ? Colors.LightYellow : Colors.Beige;
    public static double FuenteEntry => Android ? 20 : 16;
    public static double FuenteLabel => Android ? 22 : 18;
}
