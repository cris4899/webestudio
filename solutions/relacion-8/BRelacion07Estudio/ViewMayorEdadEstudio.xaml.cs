namespace Estudio;
public partial class ViewMayorEdadEstudio : ContentView
{
    private int limite = 18;
    public ViewMayorEdadEstudio()
    {
        InitializeComponent();
        Actualizar();
    }

    public DateTime FechaNacimiento
    {
        get => fecha.Date ?? DateTime.Today;
        set
        {
            if (value.Date > DateTime.Today)
            {
                Mensaje("La fecha no puede ser futura.");
                throw new ArgumentException("La fecha no puede ser futura.");
            }

            fecha.Date = value.Date;
            Actualizar();
        }
    }

    public int Edad => Reglas.Edad(FechaNacimiento, DateTime.Today);

    public int MayoriaEdad
    {
        get => limite;
        set
        {
            limite = Reglas.Limite(value);
            Actualizar();
        }
    }

    private void CambioFecha(object? sender, DateChangedEventArgs e)
    {
        if (error is not null)
            Actualizar();
    }

    private void Actualizar()
    {
        try
        {
            int anos = Edad;
            edad.Text = anos.ToString();
            Mensaje(anos < limite ? "No eres mayor de edad" : "");
        }
        catch (ArgumentException ex)
        {
            edad.Text = "";
            Mensaje(ex.Message);
        }
    }

    public double Espaciado
    {
        get => layout.Spacing;
        set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value));
            layout.Spacing = fila.Spacing = value;
        }
    }

    public Thickness Relleno
    {
        get => layout.Padding;
        set
        {
            layout.Padding = fila.Padding = value;
        }
    }

    public Color Fondo
    {
        get => layout.BackgroundColor;
        set
        {
            layout.BackgroundColor = fila.BackgroundColor = value;
        }
    }

    private void Mensaje(string texto)
    {
        error.Text = texto;
        error.BackgroundColor = texto.Length == 0 ? Colors.Transparent : Colors.Yellow;
    }
}
