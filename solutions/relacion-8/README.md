# Relación 8 · matrícula y mayoría de edad

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Leer Reglas.Matricula, Edad y Limite.
2. Revisar el XAML de ambos Views y AspectoExtension.
3. Seguir el setter y TextChanged de matrícula.
4. Seguir fecha, umbral y Actualizar.
5. Probar PruebasR07: datos y personalización.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| 0000-BBB | Matrícula válida; fondo informativo transparente. |
| 0000-BAA o cadena más larga | Error y etiqueta amarilla. |
| Asignar matrícula inválida por propiedad | Se rechaza antes de sustituir el valor anterior. |
| Fecha futura | Error específico de futuro. |
| Hoy es el cumpleaños número 18 | Edad 18, mayor bajo límite por defecto. |
| Límite 12 | Rechazado; se conserva el límite anterior. |
| Cambiar a límite válido >12 | Se recalcula el estado actual. |

## Procedencia y decisiones

A-Z en mayúsculas y AddYears para 29 de febrero son convenciones identificadas. No se añaden otras exclusiones de matrículas reales. Se conservan BRelacion07 y PruebasR07 tal como aparecen en el documento de R8.

UD3-4/Relacion08_MAUI_2627.pdf · páginas 1,2,3

## Proyectos y comprobación Windows

- BRelacion07Estudio/BRelacion07Estudio.csproj: compilación Windows superada
- PruebasR07_Estudio/PruebasR07_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
