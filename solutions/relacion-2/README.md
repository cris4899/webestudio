# Relación 2 · cuatro calculadoras de enteros

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Leer Calculadora.cs: estado entre teclas.
2. Leer Reglas.Operar: operaciones y errores.
3. Comparar Stack/Grid en XAML y C#.
4. Probar las cuatro páginas del menú.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| 7 / 2 = | 3, por división entera. |
| 8 / 0 = | Alerta y reinicio de la calculadora. |
| Igual sin operador | Error; no se muestra un cero ficticio. |
| Resultado seguido de un dígito | Comienza una nueva operación. |
| 2147483647 + 1 | Desbordamiento detectado. |

## Procedencia y decisiones

El botón C facilita reiniciar la implementación. No es un nuevo requisito del PDF. El estado se restablece después de éxito y error.

UD2/Relacion02_MAUI.pdf · páginas 1,2
UD2/Relacion02_JesusCG.rar

## Proyectos y comprobación Windows

- Relacion2_Estudio/Relacion2_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
