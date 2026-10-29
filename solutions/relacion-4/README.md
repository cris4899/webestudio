# Relación 4 · tres aplicaciones con menú

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Abrir Ejercicio1, Ejercicio2 y Ejercicio3 por separado.
2. Leer AppShell.xaml y relacionar cada plantilla con su página.
3. Seguir las dependencias del modelo al cambiar de anfitrión.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Ejercicio1 | Acceso Vertical y Acceso Mixto. |
| Ejercicio2 | Cuatro calculadoras con sus títulos. |
| Ejercicio3 | Tablero Dinámico y Tablero Dinámico Color. |
| Abrir un destino y utilizarlo | Conserva validaciones, eventos y resultados de la relación de origen. |

## Procedencia y decisiones

Los fuentes necesarios se incluyen dentro de este paquete; no se necesita descargar primero las relaciones anteriores.

UD2/Relacion04_MAUI.pdf · páginas 1

## Proyectos y comprobación Windows

- Ejercicio1_Estudio/Ejercicio1_Estudio.csproj: compilación Windows superada
- Ejercicio2_Estudio/Ejercicio2_Estudio.csproj: compilación Windows superada
- Ejercicio3_Estudio/Ejercicio3_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
