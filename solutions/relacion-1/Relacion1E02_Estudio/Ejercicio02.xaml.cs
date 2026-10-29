namespace Estudio;
public partial class Ejercicio02 : ContentPage
{
    public Ejercicio02()
    {
        InitializeComponent();
    }

    private async void Acceder(object sender, EventArgs e)
    {
        try
        {
            Usuario usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text);
            resultado.Text = usuario.Mensaje;
        }
        catch (ArgumentException ex)
        {
            resultado.Text = "";
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }
}
