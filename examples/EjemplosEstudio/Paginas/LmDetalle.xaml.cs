namespace Estudio;

public partial class LmDetalle : ContentPage
{
    public LmDetalle()
    {
        InitializeComponent();

    }

    // ejemplo:lm-detalle
    private async void CuerpoClick(object? sender, EventArgs e)
    {
        if (sender is not Button boton)
        {
            return;
        }
        // La página de detalle se apila sobre la lista; Atrás vuelve a ella.
        await Navigation.PushAsync(new CuerpoDetalle(boton.Text));
    }
    // fin:lm-detalle
}
