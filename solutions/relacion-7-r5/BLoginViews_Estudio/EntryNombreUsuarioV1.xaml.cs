namespace BLoginViews_Estudio;
public partial class EntryNombreUsuarioV1 : ContentView
{
    // CONSTANTES
    private const int LONG_MIN = 5;
    private const int LONG_MAX = 15;
    // MIEMBROS PRIVADOS
    private bool esValido;
    public EntryNombreUsuarioV1()
    {
        InitializeComponent();
    }

    // PROPIEDADES
    /// <summary>
    /// Usuario - Acceso al dato (solo lectura)
    /// </summary>
    public string Usuario
    {
        get
        {
            // Comprobación de si el dato es válido
            if (!esValido)
                throw new Exception(lUsuario.Text);
            return eUsuario.Text;
        }
    }

    // MANEJADORES DE EVENTOS
    /// <summary>
    /// Evento que se produce cuando pierde el foco el view
    /// </summary>
    /// <param name = "sender"></param>
    /// <param name = "e"></param>
    private void UsuarioPierdeFoco(object sender, FocusEventArgs e)
    {
        esValido = true;
        // Recursos
        string mensaje = "";
        try
        {
            // Validación del usuario introducido
            ValidarUsuario(eUsuario.Text);
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
                lUsuario.Text = mensaje;
                lUsuario.BackgroundColor = Colors.Red;
            }
            else
            {
                // Restablecer color del view
                lUsuario.BackgroundColor = Colors.White;
            }
        }
    }

#region METODOS PRIVADOS
    /// <summary>
    /// Validación del usuario
    /// </summary>
    /// <param name = "usuario">Usuario Introducido</param>
    /// <exception cref = "Exception"></exception>
    private void ValidarUsuario(string usuario)
    {
        // Detección de si se ha introducido el usuario
        if (string.IsNullOrEmpty(usuario))
            throw new Exception("Debe introducir el nombre del usuario");
        // Detección de si cumple con la longitud mínima
        if (usuario.Length < LONG_MIN)
            throw new Exception($"El nombre del usuario tiene que tener al menos {LONG_MIN} caracteres");
        // Detección de si hay caracteres incorrectos
        foreach (char letra in usuario)
        {
            if (!Char.IsLetter(letra))
                throw new Exception("El nombre del usuario contiene caracteres no válidos");
        }
    }
#endregion
}
