🧮 Calculadora Web Mejorada
Proyecto personal de refactorización y mantenimiento web
Una calculadora interactiva desarrollada con HTML, CSS y JavaScript, enfocada en aplicar buenas prácticas de ingeniería de software: validación robusta, diseño responsive y refactorización del código. Este proyecto fue utilizado como caso práctico para analizar el mantenimiento evolutivo y perfectivo de una aplicación sencilla.

🚀 Características Técnicas
✅ Validaciones de Entrada Avanzadas
Prevención de múltiples separadores decimales por número (Ej: 5.2.3 → Error).

Bloqueo automático de operadores aritméticos consecutivos (Ej: 5++3 → Error).

Manejo controlado de división por cero (Ej: 5/0 → "Error: Div/0").

🎨 Interfaz de Usuario Mejorada
Diseño responsive y accesible para dispositivos móviles y de escritorio.

Estilos modernos con efectos hover y retroalimentación visual inmediata al interactuar.

Botones claros y organizados para una experiencia de usuario fluida.

⌨️ Soporte para Entrada por Teclado
Compatibilidad completa con teclado físico:

Teclas numéricas (0–9) y operadores (+, -, *, /)

Enter: ejecutar operación

Backspace / Delete: eliminar último carácter

🔢 Cálculos y Resultados Precisos
Redondeo automático a 8 decimales para evitar errores de punto flotante (Ej: 0.1 + 0.2 → 0.3 en lugar de 0.30000000000000004).

Presentación clara de resultados sin notación científica para grandes valores (Ej: 1000000000 → 1000000000 y no 1e+9).

🔍 Enfoque de Refactorización y Mantenimiento
Modularización del código JavaScript: separación de lógica, eventos y validaciones.

Uso de control de versiones con Git: cada refactorización fue documentada con commits descriptivos.

Análisis de errores y pruebas manuales: monitoreo de logs en consola para detectar comportamientos anómalos.

Documentación clara del proceso de mejora: estructurado en este repositorio y acompañado de un informe técnico.


