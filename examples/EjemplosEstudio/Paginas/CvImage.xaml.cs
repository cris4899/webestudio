namespace Estudio;

public partial class CvImage : ContentPage
{
    public CvImage()
    {
        InitializeComponent();

    }

    private void AjusteClick(object? sender, EventArgs e)
    {
        if (sender is Button boton && Enum.TryParse(boton.Text, out Aspect aspecto))
        {
            imagen.Aspect = aspecto;
        }
    }
}
