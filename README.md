Pasos Realizados
1. Estructura Inicial del Proyecto
Se crearon los archivos base:

✅ inicio.html: Estructura semántica de la calculadora.

✅ style.css: Diseño responsive y estilos visuales.

✅ script.js: Lógica de operaciones y eventos.

2. Desarrollo y Correcciones
Problema Detectado	Solución Implementada
La tecla × (multiplicación) no era interpretada por JavaScript.	Se reemplazó × por * internamente usando replace().
Entradas como 3..5 o */ causaban errores.	Se añadió try-catch para mostrar "Error" en pantalla.
El botón = ejecutaba operaciones incompletas (ej: 5+).	Validación de la expresión antes de usar eval().
3. Mejoras Adicionales
Consolidación de funciones:

Unificación de la lógica en agregar(), calcular() y limpiar().

Experiencia de usuario:

Color de botones cambia al hover (:hover en CSS).
