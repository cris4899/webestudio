# Relación 1 · acceso vertical y mixto

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Leer Usuario.cs y Reglas.cs: contrato del modelo.
2. Comparar Ejercicio01.xaml con Ejercicio02.xaml.
3. Seguir Acceder desde la lectura hasta Mensaje y la alerta.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Nombre de 2 caracteres | Error de longitud. |
| Nombre de 3 y apellidos de 4; edad 17 | Datos válidos; No tiene acceso al sistema. |
| Datos válidos; edad 18 | Tiene acceso al sistema, con apellidos y nombre. |
| Edad 4, 71 o texto | Alerta y etiqueta de resultado vacía. |

## Procedencia y decisiones

Los límites de nombre y apellidos se comprueban en el modelo. El sufijo Estudio sustituye a Alumn@. El recorte de espacios no se impone como requisito nuevo.

UD2/Relacion01_MAUI.pdf · páginas 1,2,3
UD2/Relacion1E01_JesusCG.rar

## Proyectos y comprobación Windows

- Relacion1E01_Estudio/Relacion1E01_Estudio.csproj: compilación Windows superada
- Relacion1E02_Estudio/Relacion1E02_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
