using Estudio;
static void Igual<T>(T esperado,T actual){if(!Equals(esperado,actual))throw new Exception($"Esperado {esperado}; recibido {actual}");}
static void Falla(Action accion){try{accion();}catch(Exception e)when(e is ArgumentException or ArithmeticException){return;}throw new Exception("Se esperaba rechazo");}
foreach(int edad in new[]{5,17,18,70}) Igual(edad,new Usuario("Ana","Perez",edad.ToString()).Edad);
foreach(string edad in new[]{"4","71","abc",""}) Falla(()=>new Usuario("Ana","Perez",edad));
Falla(()=>new Usuario("An","Perez","18"));Falla(()=>new Usuario("Ana","Per","18"));
Igual(true,new Usuario("Ana","Perez","18").Mensaje.Contains("Tiene acceso"));
Igual(true,new Usuario("Ana","Perez","17").Mensaje.Contains("No tiene acceso"));
Igual("abcde",Reglas.NombreUsuario("abcde"));Falla(()=>Reglas.NombreUsuario("ábcde"));Falla(()=>Reglas.NombreUsuario("abcd1"));Falla(()=>Reglas.NombreUsuario(new string('a',16)));
Igual("Abcdef1.;Z",Reglas.Contrasenia("Abcdef1.;Z"));foreach(string x in new[]{"abcdefghij","ABCDEFGHIJ","Abcdefghij","Abcdefgh1Z","Ab1."})Falla(()=>Reglas.Contrasenia(x));
Igual(3,Reglas.Operar(7,2,'/'));Igual(1,Reglas.Operar(7,2,'%'));Falla(()=>Reglas.Operar(1,0,'/'));Falla(()=>Reglas.Operar(int.MaxValue,1,'+'));Falla(()=>Reglas.Operar(1,2,'?'));
var calc=new Calculadora();calc.Digito("7");calc.Operacion('/');calc.Digito("2");calc.Operacion('=');Igual("3",calc.Visor);calc.Digito("4");Igual("4",calc.Visor);calc.Limpiar();Falla(()=>calc.Operacion('='));
int uno=0,dos=0;uno=Reglas.SiguienteEstado(uno);dos=Reglas.SiguienteEstado(dos);Igual(1,uno);Igual(1,dos);uno=Reglas.SiguienteEstado(uno);Igual(2,uno);Igual(1,dos);uno=Reglas.SiguienteEstado(uno);Igual(0,uno);
Igual("0000-BBB",Reglas.Matricula("0000-BBB"));foreach(string x in new[]{"0000-BAA","000-BBB","0000-BBBB","0000-bbb","0000-BBB\n"})Falla(()=>Reglas.Matricula(x));
var hoy=new DateTime(2026,10,28);Igual(18,Reglas.Edad(new DateTime(2008,10,28),hoy));Igual(17,Reglas.Edad(new DateTime(2008,10,29),hoy));Falla(()=>Reglas.Edad(hoy.AddDays(1),hoy));Falla(()=>Reglas.Limite(12));Igual(13,Reglas.Limite(13));Igual(21,Reglas.Edad(new DateTime(2004,2,29),new DateTime(2025,2,28)));
Igual("222",PhonewordTranslator.ToNumber("CAB"));Igual("1-555-6386284",PhonewordTranslator.ToNumber("1-555-NETMAUI"));Igual<string?>(null,PhonewordTranslator.ToNumber("?"));Igual<string?>(null,PhonewordTranslator.ToNumber(""));
Console.WriteLine("Validaciones, operaciones, estado, fechas y Phoneword: comprobaciones superadas.");
