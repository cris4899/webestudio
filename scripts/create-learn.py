"""Adapta los ejercicios oficiales enlazados por el profesor; conserva licencias."""
from pathlib import Path
import importlib.util
import shutil
import re
import xml.etree.ElementTree as ET

spec=importlib.util.spec_from_file_location('relations',Path(__file__).with_name('create-relations.py'))
r=importlib.util.module_from_spec(spec);spec.loader.exec_module(r)
ROOT=r.ROOT

def upstream(package, variant, repo, relative, ns):
    folder=r.BASE/package/variant
    source=ROOT/'.study-cache'/('upstream-'+repo)/relative
    assert source.is_dir(), source
    shutil.copytree(r.TEMPLATE,folder,dirs_exist_ok=True,ignore=shutil.ignore_patterns('bin','obj','.git','*.csproj','MainPage*','AppShell*'))
    shutil.copytree(source,folder,dirs_exist_ok=True,ignore=shutil.ignore_patterns('bin','obj','.git','*.sln','*.csproj','*.csproj.user'))
    duplicate = folder/'Resources/Images/dotnet_bot.png'
    if (folder/'Resources/Images/dotnet_bot.svg').exists() and duplicate.exists():
        duplicate.unlink()
    project=(r.TEMPLATE/'Estudio.csproj').read_text(encoding='utf-8-sig').replace('Estudio',ns).replace('<MauiXamlInflator>SourceGen</MauiXamlInflator>','')
    if not (folder/'Resources/Images/dotnet_bot.png').exists():
        project=re.sub(r'<MauiImage Update="Resources\\Images\\dotnet_bot.png"[^>]*/>','',project)
    r.put(folder,ns+'.csproj',project)
    # Los recursos de arranque de plantilla necesitan el namespace de la aplicación importada.
    for p in (folder/'Platforms').rglob('*'):
        if p.is_file() and p.suffix in ('.cs','.xaml'):
            p.write_text(p.read_text(encoding='utf-8-sig').replace('Estudio',ns),encoding='utf-8')
    for name in ('LICENSE','LICENSE-CODE'):
        shutil.copyfile(ROOT/'.study-cache'/('upstream-'+repo)/name,r.BASE/package/(repo+'-'+name))
    return folder

def phone():
    f=r.app('learn-primera-app','Phoneword')
    # Conservamos MainPage del contador como primer ejercicio, con paso +5 del módulo.
    p=f/'MainPage.xaml.cs';r.put(f,p.name,p.read_text(encoding='utf-8-sig').replace('count++;','count += 5;'))
    r.put(f,'PhonewordTranslator.cs',r'''namespace Estudio;
public static class PhonewordTranslator {
    public static string? ToNumber(string? texto) {
        if(string.IsNullOrWhiteSpace(texto))return null;
        string[] grupos={"ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ"};
        var salida=new System.Text.StringBuilder();
        foreach(char letra in texto.ToUpperInvariant()){
            if(" -0123456789".Contains(letra))salida.Append(letra);
            else {int grupo=Array.FindIndex(grupos,g=>g.Contains(letra));if(grupo<0)return null;salida.Append(grupo+2);}
        }
        return salida.ToString();
    }
}''')
    r.page(f,'PhonePage','Phoneword','''<VerticalStackLayout Padding="20" Spacing="15"><Label Text="Enter a Phoneword" FontSize="20" /><Entry x:Name="entrada" Text="1-555-NETMAUI" TextChanged="Invalidar" /><Button Text="Translate" Clicked="Traducir" /><Button x:Name="llamar" Text="Call" IsEnabled="False" Clicked="Llamar" /></VerticalStackLayout>''',r'''
private string? numero;
private void Invalidar(object sender,TextChangedEventArgs e){numero=null;if(llamar is not null){llamar.IsEnabled=false;llamar.Text="Call";}}
private void Traducir(object sender,EventArgs e){numero=PhonewordTranslator.ToNumber(entrada.Text);llamar.IsEnabled=!string.IsNullOrWhiteSpace(numero);llamar.Text=numero is null?"Call":"Call "+numero;}
private async void Llamar(object sender,EventArgs e){if(numero is null)return;if(!await DisplayAlertAsync("Dial a Number","Would you like to call "+numero+"?","Yes","No"))return;try{if(Microsoft.Maui.ApplicationModel.Communication.PhoneDialer.Default.IsSupported)Microsoft.Maui.ApplicationModel.Communication.PhoneDialer.Default.Open(numero);else await DisplayAlertAsync("Phoneword","No hay marcador compatible en este dispositivo.","OK");}catch(Exception ex){await DisplayAlertAsync("Unable to dial",ex.Message,"OK");}}
''')
    r.shell(f,[('Primera aplicación (+5)','MainPage'),('Traductor telefónico','PhonePage')])
    p=f/'Platforms/Android/AndroidManifest.xml';text=p.read_text(encoding='utf-8-sig');r.put(f,p.relative_to(f),text.replace('</manifest>','<queries><intent><action android:name="android.intent.action.DIAL" /><data android:scheme="tel" /></intent></queries></manifest>'))

def layouts():
    repo='customize-xaml-pages-layout'
    upstream('learn-layouts','01-Alineacion',repo,'exercise1/Alignment','Alignment')
    for n,kind in [(2,'Stack'),(3,'Grid')]:
        f=upstream('learn-layouts',f'0{n}-{kind}',repo,f'exercise{n}/TipCalculator','TipCalculator')
        if kind=='Stack':
            body='''<VerticalStackLayout Padding="40" Spacing="10"><HorizontalStackLayout Spacing="10"><Label Text="Bill" /><Entry x:Name="billInput" Placeholder="Enter Amount" Keyboard="Numeric" WidthRequest="180" /></HorizontalStackLayout><HorizontalStackLayout Spacing="10"><Label Text="Tip" /><Label x:Name="tipOutput" Text="0.00" /></HorizontalStackLayout><HorizontalStackLayout Spacing="10"><Label Text="Total" /><Label x:Name="totalOutput" Text="0.00" /></HorizontalStackLayout><HorizontalStackLayout Spacing="10"><Label Text="Tip Percentage" /><Label x:Name="tipPercent" Text="15%" /></HorizontalStackLayout><Slider x:Name="tipPercentSlider" Minimum="0" Maximum="100" Value="15" /><HorizontalStackLayout Spacing="10"><Button Text="15%" Clicked="OnNormalTip" /><Button Text="20%" Clicked="OnGenerousTip" /></HorizontalStackLayout><HorizontalStackLayout Spacing="10"><Button x:Name="roundDown" Text="Round Down" /><Button x:Name="roundUp" Text="Round Up" /></HorizontalStackLayout></VerticalStackLayout>'''
        else:
            body='''<Grid Padding="40" RowDefinitions="Auto,Auto,Auto,*,Auto,Auto,Auto" ColumnDefinitions="*,*" RowSpacing="10" ColumnSpacing="10"><Label Text="Bill" /><Entry Grid.Column="1" x:Name="billInput" Placeholder="Enter Amount" Keyboard="Numeric" /><Label Grid.Row="1" Text="Tip" /><Label Grid.Row="1" Grid.Column="1" x:Name="tipOutput" Text="0.00" /><Label Grid.Row="2" Text="Total" /><Label Grid.Row="2" Grid.Column="1" x:Name="totalOutput" Text="0.00" /><Label Grid.Row="3" Text="Tip Percentage" VerticalOptions="End" /><Label Grid.Row="3" Grid.Column="1" x:Name="tipPercent" Text="15%" VerticalOptions="End" HorizontalOptions="End" /><Slider Grid.Row="4" Grid.ColumnSpan="2" x:Name="tipPercentSlider" Minimum="0" Maximum="100" Value="15" /><Button Grid.Row="5" Text="15%" Clicked="OnNormalTip" /><Button Grid.Row="5" Grid.Column="1" Text="20%" Clicked="OnGenerousTip" /><Button Grid.Row="6" x:Name="roundDown" Text="Round Down" /><Button Grid.Row="6" Grid.Column="1" x:Name="roundUp" Text="Round Up" /></Grid>'''
        r.put(f,'MainPage.xaml',f'<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" x:Class="TipCalculator.MainPage">{body}</ContentPage>')

def notes():
    for n in (1,2):
        f=upstream('learn-xaml',f'0{n}-Notes','create-user-interface-xaml','exercise2/Notes','Notes')
        # El ejercicio 1 parte de la UI C# de exercise1; entregamos su conversión XAML completa.
        if n==2:
            r.put(f,'SharedResources.cs','''namespace Notes; public static class SharedResources { public static readonly Color FontColor=Colors.Blue; public static readonly Color BackgroundColor=Color.FromRgb(255,240,173); }''')
            p=f/'MainPage.xaml';s=p.read_text(encoding='utf-8-sig').replace('xmlns:x=', 'xmlns:local="clr-namespace:Notes" xmlns:x=')
            s=s.replace('<Label ', '<Label TextColor="{x:Static local:SharedResources.FontColor}" BackgroundColor="{x:Static local:SharedResources.BackgroundColor}" ')
            s=s.replace('<Button ', '<Button TextColor="{x:Static local:SharedResources.FontColor}" BackgroundColor="{x:Static local:SharedResources.BackgroundColor}" ')
            s=s.replace('<Editor ', '<Editor TextColor="{x:Static local:SharedResources.FontColor}" BackgroundColor="{x:Static local:SharedResources.BackgroundColor}" ')
            s=s.replace('HeightRequest="100"','HeightRequest="{OnPlatform WinUI=100, Android=200, iOS=200, Default=100}"')
            r.put(f,'MainPage.xaml',s)
        # No perder el contenido anterior si falla el acceso al archivo; informar en UI.
        r.put(f,'MainPage.xaml.cs',r'''namespace Notes;
public partial class MainPage : ContentPage {
    private readonly string archivo=Path.Combine(FileSystem.AppDataDirectory,"notes.txt");
    public MainPage(){InitializeComponent();}
    protected override async void OnAppearing(){base.OnAppearing();try{editor.Text=File.Exists(archivo)?await File.ReadAllTextAsync(archivo):"";}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("Lectura",ex.Message,"OK");}}
    private async void OnSaveButtonClicked(object sender,EventArgs e){try{string temporal=archivo+".tmp";await File.WriteAllTextAsync(temporal,editor.Text??"");File.Move(temporal,archivo,true);}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("No se pudo guardar",ex.Message,"OK");}}
    private async void OnDeleteButtonClicked(object sender,EventArgs e){try{if(File.Exists(archivo))File.Delete(archivo);editor.Text="";}catch(Exception ex)when(ex is IOException or UnauthorizedAccessException){await DisplayAlertAsync("No se pudo borrar",ex.Message,"OK");}}
}''')

def astronomy():
    for n in (1,2,3):
        f=upstream('learn-multipagina',f'0{n}-Astronomy','create-multi-page-apps',f'exercise{3 if n==3 else 1}/start/Astronomy/Astronomy','Astronomy')
        if n==1:
            nodes='''<FlyoutItem Title="Astronomy" Icon="moon.png"><ShellContent Title="Moon" ContentTemplate="{DataTemplate p:MoonPhasePage}" /><ShellContent Title="Daylight" ContentTemplate="{DataTemplate p:SunrisePage}" /></FlyoutItem><FlyoutItem Title="About" Icon="question.png"><ShellContent ContentTemplate="{DataTemplate p:AboutPage}" /></FlyoutItem>'''
        elif n==2:
            nodes='''<FlyoutItem Title="Astronomy" Icon="moon.png"><Tab Title="Moon" Icon="moon.png"><ShellContent ContentTemplate="{DataTemplate p:MoonPhasePage}" /></Tab><Tab Title="Daylight" Icon="sun.png"><ShellContent ContentTemplate="{DataTemplate p:SunrisePage}" /></Tab></FlyoutItem><FlyoutItem Title="About"><ShellContent ContentTemplate="{DataTemplate p:AboutPage}" /></FlyoutItem>'''
        else:
            nodes='''<FlyoutItem Title="Astronomy" Icon="moon.png"><Tab Title="Moon"><ShellContent ContentTemplate="{DataTemplate p:MoonPhasePage}" /></Tab><Tab Title="Daylight"><ShellContent ContentTemplate="{DataTemplate p:SunrisePage}" /></Tab><Tab Title="Bodies"><ShellContent ContentTemplate="{DataTemplate p:AstronomicalBodiesPage}" /></Tab></FlyoutItem><FlyoutItem Title="About"><ShellContent ContentTemplate="{DataTemplate p:AboutPage}" /></FlyoutItem>'''
            p=f/'Pages/AstronomicalBodiesPage.xaml.cs';s=p.read_text(encoding='utf-8-sig').replace('InitializeComponent();','''InitializeComponent();
                btnEarth.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("earth"));
                btnMoon.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("moon"));
                btnSun.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("sun"));
                btnComet.Clicked+=async (_,_)=>await Navigation.PushAsync(new AstronomicalBodyPage("comet"));''');r.put(f,p.relative_to(f),s)
            p=f/'Pages/AstronomicalBodyPage.xaml.cs';s=p.read_text(encoding='utf-8-sig').replace('public AstronomicalBodyPage()','public AstronomicalBodyPage(string astroName)').replace('InitializeComponent();','InitializeComponent();\n        UpdateAstroBodyUI(astroName);');r.put(f,p.relative_to(f),s)
        r.put(f,'AppShell.xaml','<Shell xmlns="http://schemas.microsoft.com/dotnet/2021/maui" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns:p="clr-namespace:Astronomy.Pages" x:Class="Astronomy.AppShell" FlyoutBehavior="Flyout"><Shell.FlyoutHeader><Grid HeightRequest="100" BackgroundColor="DarkSlateBlue"><Image Source="moon.png" /></Grid></Shell.FlyoutHeader>'+nodes+'</Shell>')

def resources():
    for n in (1,2,3,4):
        f=upstream('learn-recursos',f'0{n}-TipCalculator','use-shared-resources',f'exercise{n}/TipCalculator','TipCalculator')
        p=f/'StandardTipPage.xaml';s=p.read_text(encoding='utf-8-sig')
        if n==1:
            s=s.replace('    <Grid ','''    <ContentPage.Resources><Color x:Key="bgColor">Silver</Color><Color x:Key="fgColor">Navy</Color><x:Double x:Key="fontSize">22</x:Double></ContentPage.Resources>\n    <Grid ''',1)
            s=s.replace('FontSize="22"','FontSize="{StaticResource fontSize}"').replace('BackgroundColor="Silver"','BackgroundColor="{StaticResource bgColor}"').replace('TextColor="Navy"','TextColor="{StaticResource fgColor}"')
        else:
            s=s.replace('{StaticResource fgColor}','{DynamicResource fgColor}').replace('{StaticResource bgColor}','{DynamicResource bgColor}')
            pcode=f/'StandardTipPage.xaml.cs';code=pcode.read_text(encoding='utf-8-sig')
            for method,fg,bg in [('OnLight','Navy','Silver'),('OnDark','Silver','Navy')]:
                code=re.sub(r'void '+method+r'\(object sender, EventArgs e\)\s*\{[^}]*\}',f'void {method}(object sender, EventArgs e) {{ Resources["fgColor"]=Colors.{fg}; Resources["bgColor"]=Colors.{bg}; }}',code)
            r.put(f,pcode.relative_to(f),code)
        if n==3:
            if 'infoLabelStyle' not in s:
                s=s.replace('</ResourceDictionary>','<Style x:Key="infoLabelStyle" TargetType="Label"><Setter Property="FontSize" Value="{StaticResource fontSize}" /><Setter Property="FontAttributes" Value="Bold" /></Style></ResourceDictionary>',1)
            s=re.sub(r'FontSize="\{StaticResource fontSize\}"\s+FontAttributes="Bold"','Style="{StaticResource infoLabelStyle}"',s)
        if n==4:
            # El punto de partida ya contiene estilos locales; se trasladan a Application.
            block=re.search(r'<ContentPage.Resources>(.*?)</ContentPage.Resources>',s,re.S)
            if block:
                contents=block.group(1).replace('<ResourceDictionary>','').replace('</ResourceDictionary>','')
                app=f/'App.xaml';apptext=app.read_text(encoding='utf-8-sig').replace('</ResourceDictionary>',contents+'</ResourceDictionary>');r.put(f,'App.xaml',apptext)
                s=s[:block.start()]+s[block.end():]
            custom=f/'CustomTipPage.xaml';cs=custom.read_text(encoding='utf-8-sig').replace('FontSize="22" FontAttributes="Bold"','Style="{StaticResource infoLabelStyle}"').replace('FontSize="22"','Style="{StaticResource baseLabelStyle}"')
            cs=cs.replace('<Grid ', '<Grid BackgroundColor="{DynamicResource bgColor}" ',1).replace('<Label ', '<Label TextColor="{DynamicResource fgColor}" ').replace('<Entry ', '<Entry TextColor="{DynamicResource fgColor}" ')
            r.put(f,'CustomTipPage.xaml',cs)
            pcode=f/'StandardTipPage.xaml.cs';r.put(f,pcode.name,pcode.read_text(encoding='utf-8-sig').replace('Resources["', 'Application.Current!.Resources["'))
            s=s.replace('TextColor="Navy"','TextColor="{DynamicResource fgColor}"')
        r.put(f,'StandardTipPage.xaml',s)

if __name__=='__main__':
    phone();layouts();notes();astronomy();resources()
    print('5 paquetes Learn generados con sus ejercicios y licencias.')
