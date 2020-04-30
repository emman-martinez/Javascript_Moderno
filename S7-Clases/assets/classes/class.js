console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%c7.4 Clases básicas en Javascript', 'color:cornflowerblue; font-weight: bold;');
console.log('');

class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Yeah!');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman!');
console.log({spiderman, ironman});

//  spiderman.quienSoy();
spiderman.miFrase();
//  ironman.quienSoy();
ironman.miFrase();

