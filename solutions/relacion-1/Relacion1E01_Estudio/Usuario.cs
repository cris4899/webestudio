namespace Estudio;
public class Usuario
{
    public string Nombre { get; }
    public string Apellidos { get; }
    public int Edad { get; }
    public Usuario(string? nombre, string? apellidos, string? edad)
    {
        Nombre = Reglas.Texto(nombre, 3, 20, "Nombre");
        Apellidos = Reglas.Texto(apellidos, 4, 40, "Apellidos");
        Edad = Reglas.EdadEntrada(edad);
    }
    public string Mensaje => $"{Apellidos}, {Nombre}:\n" + (Edad >= 18 ? "Tiene acceso al sistema" : "No tiene acceso al sistema");
}
