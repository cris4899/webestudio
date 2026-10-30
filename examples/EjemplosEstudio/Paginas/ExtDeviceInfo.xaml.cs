namespace Estudio;

public partial class ExtDeviceInfo : ContentPage
{
    public ExtDeviceInfo()
    {
        InitializeComponent();
        AplicarSegunPlataforma();
    }

    // ejemplo:ext-deviceinfo
    private void AplicarSegunPlataforma()
    {
        DevicePlatform plataforma = DeviceInfo.Current.Platform;
        // Se compara la plataforma, no si el dispositivo es físico o virtual.
        if (plataforma == DevicePlatform.WinUI)
        {
            etiquetaPlataforma.Text = "Windows: fuente 14";
            etiquetaPlataforma.FontSize = 14;
        }
        else if (plataforma == DevicePlatform.Android)
        {
            etiquetaPlataforma.Text = "Android: fuente 18";
            etiquetaPlataforma.FontSize = 18;
        }
        else
        {
            etiquetaPlataforma.Text = $"Otra plataforma: {plataforma}";
        }
    }
    // fin:ext-deviceinfo
}
