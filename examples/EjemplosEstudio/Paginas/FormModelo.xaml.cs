namespace Estudio;

public partial class FormModelo : ContentPage
{
    public FormModelo()
    {
        InitializeComponent();

    }

    private void CrearClick(object? sender, EventArgs e)
    {
        Usuario usuario = new Usuario();
        try
        {
            usuario.Nombre = entradaNombre.Text ?? "";
            etiquetaResultado.Text = $"Usuario creado: {usuario.Nombre}";
        }
        catch (ArgumentException ex)
        {
            etiquetaResultado.Text = ex.Message;
        }
    }
}

// ejemplo:formulario-modelo
public class Usuario
{
    private string? nombre;

    public string Nombre
    {
        // Leer un nombre que nunca se estableció es un error de uso.
        get => nombre ?? throw new InvalidOperationException("El nombre no se ha establecido.");
        set
        {
            if (value.Length < 3 || value.Length > 20)
            {
                throw new ArgumentException("El nombre debe tener entre 3 y 20 caracteres.");
            }
            nombre = value;
        }
    }
}
// fin:formulario-modelo
