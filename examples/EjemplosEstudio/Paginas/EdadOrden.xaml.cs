namespace Estudio;

public partial class EdadOrden : ContentPage
{
    public EdadOrden()
    {
        InitializeComponent();
        selectorFecha.Date = new DateTime(2000, 1, 1);
    }

    // ejemplo:edad-orden
    private static string Evaluar(DateTime nacimiento, DateTime hoy, int mayoria, out bool hayError)
    {
        // 1. Una fecha futura tiene su propio mensaje.
        if (nacimiento.Date > hoy.Date)
        {
            hayError = true;
            return "La fecha de nacimiento está en el futuro.";
        }
        // 2. Solo entonces se calculan los años cumplidos.
        int edad = hoy.Year - nacimiento.Year;
        if (nacimiento.Date > hoy.Date.AddYears(-edad))
        {
            edad--;
        }
        // 3. Y por último se compara con el límite configurado.
        hayError = edad < mayoria;
        return hayError ? "No eres mayor de edad" : $"Edad: {edad} años";
    }

    private void FechaCambiada(object? sender, DateChangedEventArgs e)
    {
        DateTime fecha = e.NewDate ?? DateTime.Today;
        string mensaje = Evaluar(fecha, DateTime.Today, 18, out bool hayError);
        etiquetaInfo.Text = mensaje;
        etiquetaInfo.BackgroundColor = hayError ? Colors.Yellow : Colors.Transparent;
    }
    // fin:edad-orden
}
