using System.Text.RegularExpressions;

namespace Estudio;

public partial class MatPropiedad : ContentPage
{
    public MatPropiedad()
    {
        InitializeComponent();

    }

    private string matricula = "";

    // ejemplo:matricula-propiedad
    public string Matricula
    {
        get => matricula;
        set
        {
            // Se valida antes de almacenar y antes de tocar el Entry.
            if (!Regex.IsMatch(value, "^[0-9]{4}-[BCDFGHJKLMNÑPQRSTVWXYZ]{3}$"))
            {
                throw new ArgumentException("La matrícula debe tener el formato 0000-BBB.");
            }
            matricula = value;
            entradaMatricula.Text = value;
        }
    }
    // fin:matricula-propiedad

    private void AsignarBuenaClick(object? sender, EventArgs e) => Asignar("1234-BCD");

    private void AsignarMalaClick(object? sender, EventArgs e) => Asignar("12-A");

    private void Asignar(string valor)
    {
        try
        {
            Matricula = valor;
            etiquetaResultado.Text = $"Guardada: {Matricula}";
        }
        catch (ArgumentException ex)
        {
            etiquetaResultado.Text = $"Rechazada: {ex.Message} Se conserva '{Matricula}'.";
        }
    }
}
