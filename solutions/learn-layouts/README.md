# Learn · Alignment y TipCalculator

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. 01-Alineacion: cambiar las opciones del target.
2. 02-Stack: seguir las pilas anidadas.
3. 03-Grid: siete filas y dos columnas.
4. Comparar el cálculo original sin reescribirlo.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Cuenta 100, porcentaje 15 | Propina 15; total 115 en ambas variantes. |
| Botón 20% | Propina 20; total 120. |
| Cambiar alineación | Se modifica target, no los botones de selección. |
| Entrada no numérica después de un resultado | Limitación heredada: el ejemplo puede conservar una salida anterior. |

## Procedencia y decisiones

Fuentes base MicrosoftDocs, licencia MIT incluida. Se adapta el layout y el destino .NET 10. Se conserva y señala la limitación de entrada del cálculo original; no es una aplicación de cobros.

https://learn.microsoft.com/es-es/training/modules/customize-xaml-pages-layout/
UD2/MSLearn02DisenioIUJesusCG.rar

## Proyectos y comprobación Windows

- 01-Alineacion/Alignment.csproj: compilación Windows superada
- 02-Stack/TipCalculator.csproj: compilación Windows superada
- 03-Grid/TipCalculator.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
