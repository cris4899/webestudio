namespace Estudio;

public partial class LxEventos : ContentPage
{
    public LxEventos()
    {
        InitializeComponent();
        if (File.Exists(RutaNota))
        {
            editor.Text = File.ReadAllText(RutaNota);
        }
    }

    // ejemplo:lx-eventos
    private static readonly string RutaNota = Path.Combine(FileSystem.AppDataDirectory, "notas.txt");

    private void GuardarClick(object? sender, EventArgs e)
    {
        File.WriteAllText(RutaNota, editor.Text ?? "");
    }

    private void BorrarClick(object? sender, EventArgs e)
    {
        if (File.Exists(RutaNota))
        {
            File.Delete(RutaNota);
        }
        editor.Text = "";
    }
    // fin:lx-eventos
}
