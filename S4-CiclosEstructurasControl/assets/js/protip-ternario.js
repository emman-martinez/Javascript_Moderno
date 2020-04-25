console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.7 Pro-Tip: Otros usos del Operador Ternario', 'color:cornflowerblue; font-weight: bold;');
console.log('');

const elMayor = (a,b) => ( a > b ) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Extrange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),  // Función Anónima Autoinvocada 
    elMayor(10, 15),
];
console.log(amigosArr);

const nota = 82.5; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';
console.log({nota, grado});
