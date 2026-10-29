namespace Estudio;
public partial class PhonePage : ContentPage { public PhonePage() { InitializeComponent(); }

private string? numero;
private void Invalidar(object sender,TextChangedEventArgs e){numero=null;if(llamar is not null){llamar.IsEnabled=false;llamar.Text="Call";}}
private void Traducir(object sender,EventArgs e){numero=PhonewordTranslator.ToNumber(entrada.Text);llamar.IsEnabled=!string.IsNullOrWhiteSpace(numero);llamar.Text=numero is null?"Call":"Call "+numero;}
private async void Llamar(object sender,EventArgs e){if(numero is null)return;if(!await DisplayAlertAsync("Dial a Number","Would you like to call "+numero+"?","Yes","No"))return;try{if(Microsoft.Maui.ApplicationModel.Communication.PhoneDialer.Default.IsSupported)Microsoft.Maui.ApplicationModel.Communication.PhoneDialer.Default.Open(numero);else await DisplayAlertAsync("Phoneword","No hay marcador compatible en este dispositivo.","OK");}catch(Exception ex){await DisplayAlertAsync("Unable to dial",ex.Message,"OK");}}

}
