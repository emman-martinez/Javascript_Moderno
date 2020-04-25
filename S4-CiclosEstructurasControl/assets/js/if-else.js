console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.4 If-Else', 'color:cornflowerblue; font-weight: bold;');
console.log('');

let a = 5;

if (a >= 10) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes ...
console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     if (dia === 2) {
    //         console.log('Martes');
    //     } else {
    //         if (dia === 3) {
    //             console.log('Miércoles');
    //         }
    //     }
    // }
} else if (dia === 2) {
    console.log('Martes');
} else if (dia === 3) {
    console.log('Miércoles');
} else {
    console.log('No es Lunes, Martes, Miércoles o Domingo');
}

// Sin usar if else, o switch, únicamente con objetos
dia = 6; // 0: Domingo, 1: Lunes, 2: Martes ...

const diasLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado - 6',
};

console.log(diasLetras[dia]());

const diasLetras2 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

console.log(diasLetras2[dia])
