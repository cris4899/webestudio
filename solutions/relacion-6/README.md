# Relación 6 · LoginView compuesto

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Abrir BLoginViews y BAcceso.
2. Leer LoginView.xaml y los nombres de sus hijos.
3. Seguir UserName y PassWord hasta las propiedades validadas.
4. Probar LoginAccesoV2.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Dos datos válidos | El anfitrión puede leer UserName y PassWord. |
| Campo vacío y clic directo en botón | Error aunque no se haya disparado Unfocused. |
| Biblioteca sin referencia | No debe considerarse resuelta la integración. |

## Procedencia y decisiones

Las bibliotecas y referencias locales están incluidas. El control compuesto mantiene las reglas de sus controles hijos.

UD2/Relacion06_MAUI.pdf · páginas 1

## Proyectos y comprobación Windows

- BAcceso_Estudio/BAcceso_Estudio.csproj: compilación Windows superada
- BLoginViews_Estudio/BLoginViews_Estudio.csproj: compilación Windows superada
- LoginAccesoV2_Estudio/LoginAccesoV2_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
