namespace Estudio;
public class EntryContrasenia : Entry
{
    public EntryContrasenia()
    {
        Placeholder = "Contraseña (10 caracteres)";
        IsPassword = true;
        MaxLength = 10;
    }

    public string Password { get => Reglas.Contrasenia(Text); set => Text = Reglas.Contrasenia(value); }
}
