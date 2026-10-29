# Relación 5 · biblioteca de entradas

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Revisar BLoginViews y su referencia desde LoginAcceso.
2. Leer las clases que heredan de Entry.
3. Seguir los getters y setters validados.
4. Probar el botón académico del anfitrión.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Usuario de 4 o 16 letras | Rechazado. |
| Usuario de 5–15 letras A-Z/a-z | Aceptado bajo la convención indicada. |
| Usuario con acento o dígito | Rechazado. |
| Abcdef1.;Z (10 caracteres) | Contraseña aceptada. |
| Contraseña sin una categoría o longitud distinta de 10 | Rechazada. |

## Procedencia y decisiones

El PDF pide especialización de Entry; el RAR usa ContentView. Esta solución sigue la base del PDF. A-Z/a-z es la convención del ejemplo: el PDF no aclara ñ. Mostrar contraseñas es solo la prueba académica del enunciado, no autenticación real.

UD2/Relacion05_MAUI.pdf · páginas 1
UD2/Relacion05_JesusCG.rar

## Proyectos y comprobación Windows

- BLoginViews_Estudio/BLoginViews_Estudio.csproj: compilación Windows superada
- LoginAcceso_Estudio/LoginAcceso_Estudio.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
