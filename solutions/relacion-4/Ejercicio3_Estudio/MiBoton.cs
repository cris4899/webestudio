namespace Estudio;
public class MiBoton : Button {
    private int estado;
    private readonly Color original = Colors.Blue;
    public MiBoton() { BackgroundColor=original; Clicked+=(_,_)=>{estado=Reglas.SiguienteEstado(estado); BackgroundColor=estado==1?Colors.Green:estado==2?Colors.Red:original;}; }
}
