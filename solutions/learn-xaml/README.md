# Learn · Notes en XAML

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. 01-Notes: conversión completa de la UI descrita en C#.
2. MainPage.xaml.cs: lectura, guardado y borrado.
3. 02-Notes: SharedResources y OnPlatform.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Guardar una nota y reabrir | Se recupera notes.txt. |
| Borrar | Se elimina el archivo de nota y se limpia Editor. |
| Fallo de escritura temporal | Se informa sin truncar la nota guardada previa. |
| Altura por plataforma | 100 en Windows, 200 en Android/iOS en la variante de comportamiento. |

## Procedencia y decisiones

Base oficial MicrosoftDocs con licencia incluida. La adaptación completa manejo de errores y escritura temporal antes de sustituir. Las notas de la aplicación son independientes del progreso del navegador.

https://learn.microsoft.com/es-es/training/modules/create-user-interface-xaml/

## Proyectos y comprobación Windows

- 01-Notes/Notes.csproj: compilación Windows superada
- 02-Notes/Notes.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
