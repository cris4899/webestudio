# Relación 7 · ejercicio 1 · Espaciado de la contraseña (V0 y V1)

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Leer EntryContraseniaV1: la base de V0, sin ninguna personalización.
2. Leer EntryContraseniaV2: EspaciadoExtension como extensión de marcado propia.
3. Comparar V3, V4 y V5: x:Static, StaticResource y DynamicResource dentro de OnPlatform.
4. Leer las propiedades EspaciadoAndroid y EspaciadoWindows de V5 y su efecto desde el anfitrión.
5. Comprobar en la aplicación anfitriona que solo cambia el espaciado de la contraseña.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| V1: contraseña sin personalización | El StackLayout usa el espaciado predeterminado; es el punto de partida de V0. |
| V2, V3, V4 y V5 en Windows | Spacing recibe 20 unidades. |
| V2, V3, V4 y V5 en Android | Spacing recibe 10 unidades; la comprobación en Android no se ha ejecutado aquí. |
| V5: asignar EspaciadoWindows desde el anfitrión | El espaciado se actualiza porque DynamicResource sigue vinculado a la clave. |
| EntryNombreUsuario | No cambia entre V0 y V1: no recibe personalización. |

## Procedencia y decisiones

V1 resuelve solo el espaciado de EntryContrasenia. Relleno, margen, color de fondo y tamaño de fuente siguen pendientes en V1 y este paquete no los resuelve. El MainPage del RAR es la plantilla sin usar los controles, por eso se añade una aplicación anfitriona mínima. En iOS y MacCatalyst, EspaciadoExtension devuelve 0 porque solo contempla WinUI y Android.

UD3-4/Relacion07_MAUI_2627.pdf · páginas 1
UD3-4/R07E01R05_V0_JesusCG.rar
UD3-4/R07E01R05_V1_JesusCG.rar

## Proyectos y comprobación Windows

- BLoginViews_Estudio/BLoginViews_Estudio.csproj: compilación Windows superada
- R07E01R05App_Estudio/R07E01R05App_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
