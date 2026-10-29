namespace Astronomy.Pages;

public partial class AstronomicalBodiesPage : ContentPage
{
	public AstronomicalBodiesPage()
	{
		InitializeComponent();
                btnEarth.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("earth"));
                btnMoon.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("moon"));
                btnSun.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("sun"));
                btnComet.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("comet"));

    }
}
