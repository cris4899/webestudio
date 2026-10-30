namespace Estudio;

public class CuerpoDetalle : ContentPage
{
    public CuerpoDetalle(string cuerpo)
    {
        Title = cuerpo;
        Content = new VerticalStackLayout
        {
            Padding = 20,
            Children = { new Label { Text = $"Detalle de {cuerpo}", FontSize = 22 } }
        };
    }
}
