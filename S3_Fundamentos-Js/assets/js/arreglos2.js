console.log('%cArreglos2', 'color: green; font-weight: bold;');
console.log('');

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
console.log(primero);
let ultimo = juegos[juegos.length - 1];
console.log(ultimo);
console.log({primero, ultimo});

/* **** => forEach <= **** */
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

/* **** => push: Agregar nuevo elemento al array(último) <= **** */
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

/* **** => unshift: Agregar nuevo elemento al array(primero) <= **** */
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

/* **** => pop: Elimina elemento del array(ultimo) <= **** */
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});