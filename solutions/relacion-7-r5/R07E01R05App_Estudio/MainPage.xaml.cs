namespace R07E01R05App_Estudio;
public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
    }

    private async void Mostrar(object? sender, EventArgs e)
    {
        try
        {
            string datos = $"{usuario.Usuario} / {clave2.Password}";
            await DisplayAlertAsync("Prueba académica", datos, "Aceptar");
        }
        catch (Exception ex)
        {
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }

    private void CambiarEspaciadoV5(object? sender, EventArgs e)
    {
        // Las propiedades de V5 sustituyen la clave del diccionario; DynamicResource actualiza el espaciado.
        clave5.EspaciadoWindows = 40;
        clave5.EspaciadoAndroid = 30;
    }
}
