using Microsoft.Maui.Controls.Xaml;

namespace Estudio;
[AcceptEmptyServiceProvider]
public class ValorExtension : IMarkupExtension
{
    public string Propiedad { get; set; } = "";

    public object ProvideValue(IServiceProvider serviceProvider) => Propiedad switch
    {
        "Espaciado" => Valores.Espaciado,
        "Relleno" => Valores.Relleno,
        "Margen" => Valores.Margen,
        "FondoLayout" => Valores.FondoLayout,
        "FondoEntry" => Valores.FondoEntry,
        "FondoLabel" => Valores.FondoLabel,
        "FuenteEntry" => Valores.FuenteEntry,
        "FuenteLabel" => Valores.FuenteLabel,
        _ => throw new ArgumentException("Propiedad de extensión no reconocida.")};
}
