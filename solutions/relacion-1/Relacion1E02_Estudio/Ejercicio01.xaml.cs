namespace Estudio;
public partial class Ejercicio01 : ContentPage { public Ejercicio01() { InitializeComponent(); }
private async void Acceder(object sender, EventArgs e) {
            try { var usuario = new Usuario(nombre.Text, apellidos.Text, edad.Text); resultado.Text = usuario.Mensaje; }
            catch (ArgumentException ex) { resultado.Text = ""; await DisplayAlertAsync("Error", ex.Message, "Aceptar"); }
        }
}
