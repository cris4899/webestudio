namespace Estudio;

// ejemplo:entorno-arranque
public partial class EntornoArranque : ContentPage
{
    public EntornoArranque()
    {
        // Carga el árbol declarado en el XAML y crea los campos con x:Name.
        InitializeComponent();
        // Solo a partir de aquí etiquetaEstado deja de ser null.
        etiquetaEstado.Text = "InitializeComponent ya ha construido la interfaz.";
    }
}
// fin:entorno-arranque
