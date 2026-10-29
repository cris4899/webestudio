namespace Estudio;
public class Calculadora
{
    public string Visor { get; private set; } = "";
    private int? primero;
    private char? operador;
    private bool resultado;
    public void Digito(string valor)
    {
        if (resultado) Limpiar();
        if (valor.Length != 1 || valor[0] < '0' || valor[0] > '9') throw new ArgumentException("Dígito no válido.");
        Visor += valor;
    }
    public void Limpiar() { Visor = ""; primero = null; operador = null; resultado = false; }
    public void Operacion(char tecla)
    {
        if (!int.TryParse(Visor, out int numero)) throw new ArgumentException("Introduce un entero dentro del rango de int.");
        if (tecla == '=')
        {
            if (primero is null || operador is null) throw new ArgumentException("Falta la operación.");
            Visor = Reglas.Operar(primero.Value, numero, operador.Value).ToString();
            primero = null; operador = null; resultado = true;
        }
        else
        {
            if (operador is not null) throw new ArgumentException("Ya has seleccionado una operación.");
            primero = numero; operador = tecla; Visor = ""; resultado = false;
        }
    }
}
