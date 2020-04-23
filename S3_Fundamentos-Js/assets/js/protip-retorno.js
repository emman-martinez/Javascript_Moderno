console.log('%cS3 => ProTip-Retorno', 'color: green; font-weight: bold;');
console.log('');

function crearPersona(nombre, apellido) {
    return { nombre,apellido, }
}
const persona = crearPersona('Emmanuel', 'Martínez');
console.log(persona);

const crearPersona2 = (nombre, apellido) => { ( nombre, apellido ) };
const persona2 = crearPersona('Emmanuel', 'Martínez');
console.log(persona2);

function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'Emmanuel', 'Hola');

const imprimeArgumentos2 = (edad, ...args) => { 
    // console.log(edad, args);
    return args;
} 
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Emmanuel', 'Hola');
console.log({casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona('Emmanuel', 'Martínez');
console.log({nuevoApellido});

// Destructuring
const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
};

// const imprimePropiedades = (personaje) => {
//     console.log('nombre: ', personaje.nombre);
//     console.log('codeName: ', personaje.codeName);
//     console.log('vivo: ', personaje.vivo);
//     console.log('edad: ', personaje.edad);
//     console.log('trajes: ', personaje.trajes);
// };

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {
    console.log( { nombre } );
    console.log( { codeName } );
    console.log( { vivo } );
    console.log( { edad } );
    console.log( { trajes } );
};

imprimePropiedades(tony);
