# Learn · Astronomy completo

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. 01-Astronomy: menú y encabezado.
2. 02-Astronomy: agrupar con Tab.
3. 03-Astronomy: seleccionar cuerpo y abrir detalle.
4. Volver con Atrás y comprobar pestaña de origen.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Menú Astronomy / About | Carga sus páginas. |
| Pestañas Moon y Daylight | Cambian entre destinos del grupo. |
| Bodies: Earth, Moon, Sun y Halley | Cada botón abre su dato correspondiente. |
| Atrás desde un detalle | Vuelve a Bodies. |
| Sin conexión al servicio de amanecer | La función de datos puede fallar; no demuestra fallo de Shell. |

## Procedencia y decisiones

Se conservan los datos e imágenes de MicrosoftDocs y su licencia. Sunrise depende del servicio de red del ejemplo oficial. Las tres variantes muestran los ejercicios completados; no se añaden cálculos astronómicos propios.

https://learn.microsoft.com/es-es/training/modules/create-multi-page-apps/

## Proyectos y comprobación Windows

- 01-Astronomy/Astronomy.csproj: compilación Windows superada
- 02-Astronomy/Astronomy.csproj: compilación Windows superada
- 03-Astronomy/Astronomy.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
