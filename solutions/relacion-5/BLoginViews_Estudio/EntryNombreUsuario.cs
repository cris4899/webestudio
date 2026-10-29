namespace Estudio;
public class EntryNombreUsuario : Entry {
    public EntryNombreUsuario() { Placeholder="Usuario (5-15 letras)"; MaxLength=15; }
    public string Usuario { get => Reglas.NombreUsuario(Text); set => Text=Reglas.NombreUsuario(value); }
}
