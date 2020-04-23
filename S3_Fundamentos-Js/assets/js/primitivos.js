console.log('%cPrimitivos', 'color: green; font-weight: bold;');
console.log('');

/* **** => String <= **** */
console.log('%cString', 'color: cornflowerblue; font-weight: bold;');
let nombre = 'Peter Parker';
console.log(typeof(nombre), nombre);

nombre = 'Ben Parker';
console.log(typeof(nombre), nombre);

nombre = "Tía May";
nombre = `Tía May`;
console.log(typeof(nombre), nombre);

nombre = 123;
console.log(typeof(nombre), nombre);
console.log('')

/* **** => Booleano <= **** */
console.log('%cBooleano', 'color: cornflowerblue; font-weight: bold;');
let esMarvel = true;
console.log(typeof(esMarvel), esMarvel);
console.log('');

/* **** => Number <= **** */
console.log('%cNumber', 'color: cornflowerblue; font-weight: bold;');
let edad = 33;
console.log(typeof(edad), edad);

edad = 33.001;
console.log(typeof(edad), edad);
console.log('');

/* **** => Number <= **** */
console.log('%cUndefined', 'color: cornflowerblue; font-weight: bold;');
let superPoder;
console.log(typeof(superPoder), superPoder);
console.log('');

/* **** => Number <= **** */
console.log('%cNull', 'color: cornflowerblue; font-weight: bold;');
let soyNull = null;
console.log(typeof(soyNull), soyNull);
console.log('');

/* **** => Symbol <= **** */
console.log('%cSymbol', 'color: cornflowerblue; font-weight: bold;');
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof(symbol1), symbol1);
console.log(typeof(symbol2), symbol2);
console.log(symbol1 === symbol2);
