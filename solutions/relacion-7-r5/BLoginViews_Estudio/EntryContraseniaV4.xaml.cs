namespace BLoginViews_Estudio;
public partial class EntryContraseniaV4 : ContentView
{
    const int LONGITUD = 10;
    // MIEMBROS PRIVADOS
    // Flags de control de requisitos de la contraseña
    bool _minuscula;
    bool _mayuscula;
    bool _digito;
    bool _signosPuntuacion;
    // Flag que controla si la contraseña es válida
    bool esValido;
    public EntryContraseniaV4()
    {
        InitializeComponent();
        // Incicialización de estado del view
        esValido = false;
        // Inicialización de los Flags de Control
        _minuscula = false;
        _mayuscula = false;
        _digito = false;
        _signosPuntuacion = false;
    }

    // PROPIEDADES
    public string Password
    {
        get
        {
            // Comprobar la validez de la Contraseña
            ValidarContrasenia(eContrasenia.Text);
            return eContrasenia.Text;
        }
    }

    // MANEJADORES DE EVENTOS
    /// <summary>
    /// 
    /// </summary>
    /// <param name = "sender"></param>
    /// <param name = "e"></param>
    private void ContraseniaPierdeFoco(object sender, FocusEventArgs e)
    {
        // Inicialización del Flag de Estado del View
        esValido = true;
        // Recursos
        string mensaje = "";
        try
        {
            // Validación del usuario introducido
            ValidarContrasenia(eContrasenia.Text);
        }
        catch (Exception ex)
        {
            // Detección del Error
            esValido = false;
            mensaje = ex.Message;
        }
        finally
        {
            if (!esValido)
            {
                // Retroalimentación
                lContrasenia.Text = mensaje;
                lContrasenia.BackgroundColor = Colors.Red;
            }
            else
            {
                // Restablecer color del view
                lContrasenia.BackgroundColor = Colors.White;
            }
        }
    }

    // MÉTODOS PRIVADOS
    /// <summary>
    /// 
    /// </summary>
    /// <param name = "pass"></param>
    /// <exception cref = "Exception"></exception>
    private void ValidarContrasenia(string pass)
    {
        // Inicialización de los Flags de Control
        _signosPuntuacion = _digito = _mayuscula = _minuscula = false;
        // Detección de si se ha introducido el usuario
        if (string.IsNullOrEmpty(pass))
            throw new Exception("Debe introducir la Contraseña");
        // Detección de si cumple con la longitud mínima
        if (pass.Length != LONGITUD)
            throw new Exception($"La Contraseña tiene que tener {LONGITUD} caracteres");
        // Detección de si cumple con las características de la Contraseña
        foreach (char letra in pass)
        {
            if (Char.IsUpper(letra))
                _mayuscula = true;
            if (Char.IsLower(letra))
                _minuscula = true;
            if (Char.IsDigit(letra))
                _digito = true;
            if (Char.IsPunctuation(letra))
                _signosPuntuacion = true;
        }

        // Si está en Mayúscula
        if (!_mayuscula)
            throw new Exception("La contraseña debe contener al menos una letra mayúscula");
        if (!_minuscula)
            throw new Exception("La contraseña debe contener al menos una letra minúscula");
        if (!_digito)
            throw new Exception("La contraseña debe contener al menos un dígito");
        if (!_signosPuntuacion)
            throw new Exception("La contraseña debe contener al menos un signo de puntuación");
    }
}
