namespace Estudio;

public partial class FormComprobaciones : ContentPage
{
    public FormComprobaciones()
    {
        InitializeComponent();

    }

    // ejemplo:formulario-comprobaciones
    private static string? ComprobarDatos(string nombre, string apellidos, string textoEdad)
    {
        if (nombre.Length < 3 || nombre.Length > 20)
        {
            return "El nombre debe tener entre 3 y 20 caracteres.";
        }
        if (apellidos.Length < 4 || apellidos.Length > 40)
        {
            return "Los apellidos deben tener entre 4 y 40 caracteres.";
        }
        if (!int.TryParse(textoEdad, out int edad) || edad < 5 || edad > 70)
        {
            return "La edad debe ser un número entre 5 y 70.";
        }
        return null;
    }

    private async void AccederClick(object? sender, EventArgs e)
    {
        string? error = ComprobarDatos(entradaNombre.Text ?? "", entradaApellidos.Text ?? "", entradaEdad.Text ?? "");
        if (error is not null)
        {
            await DisplayAlertAsync("Datos no válidos", error, "Aceptar");
            return;
        }
        int edad = int.Parse(entradaEdad.Text!);
        etiquetaResultado.Text = edad >= 18 ? "Bienvenido al sistema" : "No tiene acceso al sistema";
    }
    // fin:formulario-comprobaciones
}
