namespace Notes;
public partial class MainPage : ContentPage {
    private readonly string archivo=Path.Combine(FileSystem.AppDataDirectory,"notes.txt");
    public MainPage(){InitializeComponent();}
    protected override async void OnAppearing(){base.OnAppearing();try{editor.Text=File.Exists(archivo)?await File.ReadAllTextAsync(archivo):"";}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("Lectura",ex.Message,"OK");}}
    private async void OnSaveButtonClicked(object sender,EventArgs e){try{string temporal=archivo+".tmp";await File.WriteAllTextAsync(temporal,editor.Text??"");File.Move(temporal,archivo,true);}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("No se pudo guardar",ex.Message,"OK");}}
    private async void OnDeleteButtonClicked(object sender,EventArgs e){try{if(File.Exists(archivo))File.Delete(archivo);editor.Text="";}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("No se pudo borrar",ex.Message,"OK");}}
}
