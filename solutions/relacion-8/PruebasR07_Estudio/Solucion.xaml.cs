namespace Estudio;
public partial class Solucion : ContentPage
{
    public Solucion()
    {
        InitializeComponent();
    }

    private async void Asignar(object sender, EventArgs e)
    {
        try
        {
            matricula.Matricula = valorMatricula.Text ?? "";
        }
        catch (ArgumentException ex)
        {
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }

    private async void Limite(object sender, EventArgs e)
    {
        try
        {
            if (!int.TryParse(valorLimite.Text, out int valor))
                throw new ArgumentException("Introduce un entero.");
            persona.MayoriaEdad = valor;
        }
        catch (ArgumentException ex)
        {
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }

    private async void Mostrar(object sender, EventArgs e)
    {
        try
        {
            await DisplayAlertAsync("Datos", $"{matricula.Matricula} / {persona.FechaNacimiento:d} / {persona.Edad} años", "Aceptar");
        }
        catch (ArgumentException ex)
        {
            await DisplayAlertAsync("Error", ex.Message, "Aceptar");
        }
    }

    private void Aspecto(object sender, EventArgs e)
    {
        matricula.Espaciado = persona.Espaciado = 20;
        matricula.Relleno = persona.Relleno = new Thickness(20);
        matricula.Fondo = Colors.DarkGreen;
        persona.Fondo = Colors.DarkBlue;
    }
}
