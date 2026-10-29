# Learn · contador y Phoneword

Elaboración didáctica basada en las fuentes indicadas; no es una solución oficial del profesor. Los módulos Learn conservan código y licencia MicrosoftDocs, adaptados según se explica.

## Abrir y compilar

Requiere Visual Studio con .NET 10 y MAUI. Abre Soluciones.slnx; elige como inicio la aplicación que quieras estudiar (las bibliotecas no se ejecutan) y selecciona Máquina Windows. También puedes abrir cada .csproj.

Cada proyecto conserva los destinos de la plantilla. La verificación de esta entrega se limita a Windows. Para compilar únicamente ese destino:

```powershell
dotnet build RUTA_DEL_PROYECTO.csproj -p:TargetFrameworks=net10.0-windows10.0.19041.0 -f net10.0-windows10.0.19041.0
```

## Orden de lectura

1. MainPage: contador de plantilla e incremento +5.
2. PhonewordTranslator: función de traducción.
3. PhonePage: estado de Translate y Call.
4. Manifiesto Android y comprobación de PhoneDialer.

## Casos de comprobación

| Entrada / acción | Resultado esperado |
| --- | --- |
| Dos clics en contador | 10. |
| CAB | 222. |
| 1-555-NETMAUI | 1-555-6386284. |
| Texto con carácter no admitido | No hay número y Call está deshabilitado. |
| Editar después de traducir | Se invalida el resultado anterior. |
| Cancelar Call | No se abre el marcador. |

## Procedencia y decisiones

Adaptación didáctica de los ejercicios del módulo. No se realizan llamadas durante la verificación. Abrir marcador requiere soporte del dispositivo y configuración de plataforma.

https://learn.microsoft.com/es-es/training/modules/build-mobile-and-desktop-apps/

## Proyectos y comprobación Windows

- Phoneword/Phoneword.csproj: compilación Windows superada

No se afirma ejecución de Android/iOS ni pruebas reales de llamadas. Ver tabla de casos para la comprobación manual. Las fuentes externas de Astronomy requieren conectividad.
