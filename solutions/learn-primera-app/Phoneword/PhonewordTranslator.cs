namespace Estudio;
public static class PhonewordTranslator {
    public static string? ToNumber(string? texto) {
        if(string.IsNullOrWhiteSpace(texto))return null;
        string[] grupos={"ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ"};
        var salida=new System.Text.StringBuilder();
        foreach(char letra in texto.ToUpperInvariant()){
            if(" -0123456789".Contains(letra))salida.Append(letra);
            else {int grupo=Array.FindIndex(grupos,g=>g.Contains(letra));if(grupo<0)return null;salida.Append(grupo+2);}
        }
        return salida.ToString();
    }
}
