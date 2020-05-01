console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%cProTip - Constructores Múltiples', 'color:cornflowerblue; font-weight: bold;');
console.log('');

class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const nombre1 = 'Andrea',
    apellido1 = 'Flores',
    pais1 = 'México';

const emar = {
    nombre: 'Emmanuel',
    apellido: 'Martínez',
    pais: 'México',
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(emar);

persona1.getInfo();
persona2.getInfo();