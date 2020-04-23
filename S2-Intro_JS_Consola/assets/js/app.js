console.log('Hola Mundo en Consola');
console.log('%c Mis variables', 'color: green; font-weight: bold;');

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spider-Man',
    x = a + b;

const saludo = c + d;
c = 'Hola de Nuevo';

console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });
console.log({ x });

console.table({ a, b, c, d, x, saludo });

console.log(miNuevoNombre);

let miNuevoNombre = 'Emmanuel Martínez';