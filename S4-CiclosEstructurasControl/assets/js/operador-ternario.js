console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.6 Operador Ternario', 'color:cornflowerblue; font-weight: bold;');
console.log('');

/*
    Días de semana abrimos a las 11,
    pero los fines de semana abrimos a las 9
*/

// Entra un sitio web, para consular si está abierto hoy... 
const dia = 1; // 0: domingo, 1: Lunes...
const horaActual = 10;

let horaApertura;
let horaApertura2;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX
let mensaje2;

// Forma Tradicional
console.log('%cForma Tradicional', 'color:cornflowerblue; font-weight: bold;')
// if (dia === 0 || dia === 6) {
if ([0,6].includes(dia)) {
    console.log('Fin de Semana');
    horaApertura = 9;
} else {
    console.log('Día de la Semana');
    horaApertura = 11;
}

if (horaActual >= horaApertura) {
    mensaje = 'Esta Abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje});

// Operador Ternario
console.log('%cOperador Ternario', 'color:cornflowerblue; font-weight: bold;')
horaApertura2 = ([0,6].includes(dia)) ? 9 : 11;
mensaje2 = (horaActual >= horaApertura2) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura2}`;
console.log({horaApertura2, mensaje2})
