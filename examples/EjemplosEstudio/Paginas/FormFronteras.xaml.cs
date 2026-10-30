using System.Text;

namespace Estudio;

public partial class FormFronteras : ContentPage
{
    public FormFronteras()
    {
        InitializeComponent();

    }

    // ejemplo:formulario-fronteras
    private static bool EstaEnRango(int valor, int minimo, int maximo)
    {
        return valor >= minimo && valor <= maximo;
    }

    private void ProbarClick(object? sender, EventArgs e)
    {
        int[] longitudes = { 2, 3, 20, 21 };
        int[] edades = { 4, 5, 17, 18, 70, 71 };
        StringBuilder tabla = new StringBuilder();
        foreach (int longitud in longitudes)
        {
            tabla.AppendLine($"Nombre de {longitud} caracteres: {(EstaEnRango(longitud, 3, 20) ? "válido" : "no válido")}");
        }
        foreach (int edad in edades)
        {
            tabla.AppendLine($"Edad {edad}: {(EstaEnRango(edad, 5, 70) ? "válida" : "no válida")}");
        }
        etiquetaTabla.Text = tabla.ToString();
    }
    // fin:formulario-fronteras
}
