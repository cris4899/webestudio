# Learn · cuatro etapas de recursos

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. 01: claves y valores de página.
2. 02: referencias dinámicas y botones Light/Dark.
3. 03: Style con Setter.
4. 04: recursos de Application compartidos por StandardTipPage y CustomTipPage.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Cuenta 100 y porcentaje 15 | Propina 15; total 115. |
| Light / Dark en variante dinámica | Cambian las claves de color y se actualiza la presentación. |
| Aplicar estilos | Agrupa las propiedades sin cambiar el cálculo. |
| Abrir CustomTipPage en variante de aplicación | Comparte las claves y estilos globales. |

## Procedencia y decisiones

Base oficial MicrosoftDocs con licencia incluida. Los recursos globales de este módulo no sustituyen el ámbito ContentView pedido en la relación 7.

https://learn.microsoft.com/es-es/training/modules/use-shared-resources/

## Proyectos y comprobación Windows

- 01-TipCalculator/TipCalculator.csproj: compilación Windows superada
- 02-TipCalculator/TipCalculator.csproj: compilación Windows superada
- 03-TipCalculator/TipCalculator.csproj: compilación Windows superada
- 04-TipCalculator/TipCalculator.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
