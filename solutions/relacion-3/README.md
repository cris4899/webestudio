# Relación 3 · tableros dinámicos

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Leer los bucles del constructor de Ejercicio01.cs.
2. Relacionar número con fila y columna.
3. Leer MiBoton y la transición de estado de Reglas.
4. Comparar dos botones distintos.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Inicio | 25 botones numerados 1–25. |
| Clic en 25 en primera versión | Has pulsado el botón 25. |
| Tres clics en un mismo botón de color | Verde → rojo → original. |
| Un clic en 1 y un clic en 2 | Los dos verdes; estados independientes. |

## Procedencia y decisiones

El fondo original azul reproduce la elección de MiBoton del RAR; la condición del PDF es volver al color original.

UD2/Relacion03_MAUI.pdf · páginas 1
UD2/Relacion03E02_JesusCG.rar

## Proyectos y comprobación Windows

- Relacion3_Estudio/Relacion3_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
