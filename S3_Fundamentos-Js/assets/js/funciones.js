console.log('%cFunciones', 'color: green; font-weight: bold;');
console.log('');

// Procedimientos que se pueden reutilizar varias veces 

// 1 Función simple
function saludar() {
    // console.log('Hola Mundo desde una Función simple');
    return [1, 2, 3, 4, 5];
    // Esto nunca se va a ejecutar por estar después del return
    console.log('Soy un codigo que está después del return');
}
const retornoSaludar = saludar(); // 1
console.log(retornoSaludar[0], retornoSaludar[4]);

// 2 Función simple con argumentos
function saludar2(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre + ' desde una Función simple con argumentos');
}
saludar2('Emmanuel', 40, true, 'México');

// 3 Función Anónima
const saludar3 = function() {
    console.log('Hola Mundo desde una Función anónima');
};
saludar3();

// 4 Función Anónima con argumentos
const saludar4 = function(nombre) {
    console.log('Hola ' + nombre + ' desde una Función anónima con argumentos');
};
saludar4('Emmanuel');

// 5 Función Flecha(a)

const saludar5 = () => {
    console.log('Hola Mundo desde una Función flecha');
};
saludar5();

const saludar6 = (nombre) => {
    console.log('Hola ' + nombre + ' desde una Función flecha con argumentos');
};
saludar6('Emmanuel');


function sumar(a, b) {
    return a + b;
}
console.log('sumar: ', sumar(1,2));

const sumar2 = (a,b) => {
    return a + b;
};
console.log('sumar2: ', sumar2(1,2));

const sumar3 = (a,b) => a + b;
console.log('sumar3: ', sumar3(2,2));

function getAleatorio() {
    return Math.random();
}
console.log('getAleatorio: ', getAleatorio());

const getAleatorio2 = () => Math.random();
console.log('getAleatorio2: ', getAleatorio2()); 
