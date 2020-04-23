console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.3 Valor-Referencia', 'color:cornflowerblue; font-weight: bold;');
console.log('');

let a = 10;
let b = a;
a = 30;
console.log({ a, b });

let juan = {
    nombre: 'juan',
};
let ana = {...juan };
ana.nombre = 'Ana';
console.log({ juan, ana });

const cambiaNombre = ({...persona }) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);
console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
otrasFrutas2.push('Mango');
console.table({ frutas, otrasFrutas, otrasFrutas2 });