# Relación 7 · cuatro variantes de personalización

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. Comparar BAccesoPropias y BAccesoStatic: ProvideValue frente a x:Static.
2. Leer la tabla Valores y los tipos devueltos.
3. Comparar recursos estáticos y dinámicos dentro de ContentView.
4. Usar el botón de recurso antes de personalizar directamente.
5. Modificar espaciado, relleno, margen, fondo y fuente desde cada anfitrión.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Extensiones propias / x:Static | Las cinco propiedades se asignan con el mecanismo de esa variante. |
| Windows frente a Android | Valores definidos distintos para plataforma y tipo de View; Android requiere comprobación allí. |
| Reemplazar FondoLayout en estática | No actualiza automáticamente el color inicial. |
| Reemplazar FondoLayout en dinámica | Actualiza el fondo mientras sigue vinculado a la clave. |
| Personalizar desde anfitrión | Los cambios públicos se ven en los elementos internos. |

## Procedencia y decisiones

Las cifras y paleta de R7 son elecciones didácticas, no valores impuestos por el PDF. Una asignación directa puede sustituir la referencia previa; reinicia la variante antes de comparar el reemplazo de recurso.

UD3-4/Relacion07_MAUI_2627.pdf · páginas 1

## Proyectos y comprobación Windows

- BAccesoPropias/BAccesoPropias.csproj: compilación Windows superada
- BAccesoRecursosDinamicos/BAccesoRecursosDinamicos.csproj: compilación Windows superada
- BAccesoRecursosEstaticos/BAccesoRecursosEstaticos.csproj: compilación Windows superada
- BAccesoStatic/BAccesoStatic.csproj: compilación Windows superada
- BLoginViews_Estudio/BLoginViews_Estudio.csproj: compilación Windows superada
- PruebasPropias/PruebasPropias.csproj: compilación Windows superada
- PruebasRecursosDinamicos/PruebasRecursosDinamicos.csproj: compilación Windows superada
- PruebasRecursosEstaticos/PruebasRecursosEstaticos.csproj: compilación Windows superada
- PruebasStatic/PruebasStatic.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
