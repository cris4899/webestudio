using ObjCRuntime;
using UIKit;

namespace R07E01R05App_Estudio;
public class Program
{
    // Este es el punto de entrada principal de la aplicación.
    static void Main(string[] args)
    {
        // Si quieres usar una clase delegada distinta de "AppDelegate",
        // puedes indicarla aquí.
        UIApplication.Main(args, null, typeof(AppDelegate));
    }
}
