namespace Estudio;
public static class Reglas
{
    public static string Texto(string? valor, int minimo, int maximo, string campo)
    {
        if (string.IsNullOrWhiteSpace(valor) || valor.Length < minimo || valor.Length > maximo)
            throw new ArgumentException($"{campo}: entre {minimo} y {maximo} caracteres.");
        return valor;
    }
    public static int EdadEntrada(string? texto)
    {
        if (!int.TryParse(texto, out int edad) || edad < 5 || edad > 70)
            throw new ArgumentException("La edad debe ser un entero entre 5 y 70.");
        return edad;
    }
    public static string NombreUsuario(string? texto)
    {
        string valor = Texto(texto, 5, 15, "Usuario");
        // Convención didáctica: A-Z/a-z; el PDF no aclara el tratamiento de ñ.
        if (!valor.All(c => c is >= 'A' and <= 'Z' or >= 'a' and <= 'z'))
            throw new ArgumentException("Usuario: solo letras A-Z sin acentos.");
        return valor;
    }
    public static string Contrasenia(string? texto)
    {
        string valor = Texto(texto, 10, 10, "Contraseña");
        if (!valor.Any(char.IsUpper) || !valor.Any(char.IsLower) || !valor.Any(char.IsDigit)
            || !valor.Any(c => ".,:;".Contains(c)))
            throw new ArgumentException("La contraseña necesita mayúscula, minúscula, dígito y un signo . , : ;");
        return valor;
    }
    public static int Operar(int a, int b, char op) => op switch
    {
        '+' => checked(a + b), '-' => checked(a - b), '*' => checked(a * b),
        '/' => a / b, '%' => a % b,
        _ => throw new ArgumentException("Operación no válida.")
    };
    public static int SiguienteEstado(int estado) => (estado + 1) % 3;
    public static string Matricula(string? valor)
    {
        // Convención: patrón literal en mayúsculas A-Z; sin reglas administrativas extra.
        if (valor is null || !System.Text.RegularExpressions.Regex.IsMatch(valor, @"\A[0-9]{4}-[B-DF-HJ-NP-TV-Z]{3}\z"))
            throw new ArgumentException("Formato requerido: 0000-BBB, sin vocales.");
        return valor;
    }
    public static int Limite(int valor) => valor > 12 ? valor : throw new ArgumentException("El límite debe ser superior a 12.");
    public static int Edad(DateTime nacimiento, DateTime hoy)
    {
        nacimiento = nacimiento.Date; hoy = hoy.Date;
        if (nacimiento > hoy) throw new ArgumentException("La fecha no puede ser futura.");
        int edad = hoy.Year - nacimiento.Year;
        if (nacimiento.AddYears(edad) > hoy) edad--;
        return edad;
    }
}
