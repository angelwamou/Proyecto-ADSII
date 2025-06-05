// Variables globales
const pantalla = document.getElementById('pantalla');
const operadores = ['+', '-', '*', '/', '×'];
let ultimoResultado = null;

// Función principal para agregar valores
function agregar(valor) {
    if (!validarEntrada(valor)) return;
    
    // Si hay un resultado previo y se pulsa un número, limpiar pantalla
    if (ultimoResultado !== null && !isNaN(valor)) {
        limpiar();
        ultimoResultado = null;
    }
    
    // Reemplazar × por * internamente (para la operación)
    const valorMostrado = valor === '*' ? '×' : valor;
    pantalla.value += valorMostrado;
}

// Función para limpiar la pantalla
function limpiar() {
    pantalla.value = '';
    ultimoResultado = null;
}

// Función para calcular el resultado
function calcular() {
    try {
        if (!pantalla.value) return;
        
        // Reemplazar × por * y cualquier otro símbolo visual
        let expresion = pantalla.value.replace(/×/g, '*');
        
        // Validaciones adicionales
        if (!validarExpresion(expresion)) {
            pantalla.value = 'Error';
            return;
        }
        
        // Calcular y formatear resultado
        const resultado = eval(expresion);
        pantalla.value = formatearResultado(resultado);
        ultimoResultado = pantalla.value;
        
    } catch (error) {
        pantalla.value = 'Error';
    }
}

// Función para validar entradas
function validarEntrada(valor) {
    const currentValue = pantalla.value;
    const ultimoCaracter = currentValue.slice(-1);
    
    // Evitar múltiples puntos decimales
    if (valor === '.' && (currentValue.includes('.') || 
                         currentValue.split(/[\+\-\*\/]/).pop().includes('.'))) {
        return false;
    }
    
    // Evitar múltiples operadores consecutivos
    if (operadores.includes(valor) {
        if (currentValue === '' && valor !== '-') return false; // No empezar con operador (excepto negativo)
        if (operadores.includes(ultimoCaracter)) return false;
    }
    
    return true;
}

// Función para validar la expresión completa
function validarExpresion(expresion) {
    // No permitir que termine con operador
    if (operadores.some(op => expresion.endsWith(op.replace('×', '*')))) {
        return false;
    }
    
    // Validar división por cero
    if (expresion.includes('/0') && !expresion.includes('/0.')) {
        return false;
    }
    
    return true;
}

// Función para formatear el resultado
function formatearResultado(num) {
    // Redondear a 8 decimales y eliminar ceros innecesarios
    return parseFloat(num.toFixed(8)).toString();
}

// Soporte para teclado
document.addEventListener('keydown', function(e) {
    const tecla = e.key;
    
    // Mapeo de teclas
    const teclasValidas = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '.': '.', '+': '+', '-': '-', '*': '*', '/': '/',
        'Enter': '=', 'Backspace': 'C', 'Delete': 'C',
        'Escape': 'C'
    };
    
    if (teclasValidas[tecla]) {
        e.preventDefault();
        if (tecla === 'Enter') {
            calcular();
        } else if (tecla === 'Backspace' || tecla === 'Delete' || tecla === 'Escape') {
            limpiar();
        } else {
            agregar(tecla === '*' ? '×' : tecla);
        }
    }
});
