namespace Estudio;
public partial class Solucion : ContentPage { public Solucion() { InitializeComponent(); }

private async void Mostrar(object sender,EventArgs e) {try{await DisplayAlertAsync("Prueba académica",$"{login.UserName} / {login.PassWord}","Aceptar");}catch(ArgumentException ex){await DisplayAlertAsync("Error",ex.Message,"Aceptar");}}
private void Cambiar(object sender,EventArgs e){login.Espaciado=20;login.Relleno=new Thickness(20);login.Margen=new Thickness(10);login.Fondo=Colors.LightPink;login.Fuente=22;}
private void Recurso(object sender,EventArgs e){login.ReemplazarRecurso();}

}
