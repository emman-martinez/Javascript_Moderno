console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%c7.3 Problemática y necesidad de clases', 'color:cornflowerblue; font-weight: bold;');
console.log('');

const emar = {
    nombre: 'Emmanuel',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// emar.imprimir();

function Persona(nombre, edad) { // Clase porque es llamada con la primer letra en mayúscula
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);
maria.imprimir();
melissa.imprimir();