using Microsoft.Maui.Controls.Xaml;

namespace Estudio;
[AcceptEmptyServiceProvider]
public class AspectoExtension : IMarkupExtension
{
    public string Tipo { get; set; } = "Espacio";

    public object ProvideValue(IServiceProvider serviceProvider) => Tipo switch
    {
        "Espacio" => 10d,
        "Relleno" => new Thickness(10),
        "Matricula" => Colors.Green,
        "Edad" => Colors.Blue,
        _ => throw new ArgumentException("Tipo de aspecto desconocido.")};
}
