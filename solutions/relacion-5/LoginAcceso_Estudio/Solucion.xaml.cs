namespace Estudio;
public partial class Solucion : ContentPage
{
    public Solucion()
    {
        InitializeComponent();
    }

    private async void Mostrar(object sender, EventArgs e)
    {
        try
        {
            await DisplayAlertAsync("Prueba académica", $"Usuario: {usuario.Usuario}\nContraseña: {password.Password}", "Aceptar");
        }
        catch (ArgumentException ex)
        {
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }
}
