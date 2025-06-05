function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        // Reemplaza × por * para la evaluación
        const expresion = pantalla.value.replace(/×/g, '*');
        pantalla.value = eval(expresion);
    } catch (error) {
        pantalla.value = 'Error';
    }
}
