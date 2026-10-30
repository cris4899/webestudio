namespace Estudio;

public partial class LxErrores : ContentPage
{
    public LxErrores()
    {
        InitializeComponent();

    }

    // ejemplo:lx-errores
    private async void GuardarClick(object? sender, EventArgs e)
    {
        string destino = Path.Combine(FileSystem.AppDataDirectory, "notas-protegidas.txt");
        string temporal = destino + ".tmp";
        try
        {
            // Primero un archivo temporal: si falla aquí, la nota anterior sigue intacta.
            File.WriteAllText(temporal, editor.Text ?? "");
            File.Move(temporal, destino, true);
        }
        catch (IOException ex)
        {
            await DisplayAlertAsync("No se pudo guardar", ex.Message, "Aceptar");
        }
        catch (UnauthorizedAccessException ex)
        {
            await DisplayAlertAsync("Sin permiso para guardar", ex.Message, "Aceptar");
        }
    }
    // fin:lx-errores
}
