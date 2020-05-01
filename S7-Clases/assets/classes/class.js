console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%c7.4 Clases básicas en Javascript', 'color:cornflowerblue; font-weight: bold;');
console.log('');

class Persona {

    static _conteo = 0;
    static get get_Conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    set setComida(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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
// console.log({spiderman, ironman});

spiderman.miFrase();
//ironman.miFrase();

/* **** => SETS y GETS <= **** */
spiderman.setComida = 'El pie de cereza de la tía May';
// console.log(spiderman.getComida);
// console.log(spiderman);

/* **** => PROPIEDADES ESTÁTICAS <= **** */ // Son Métodos y objetos que se pueden usar sin necesidad de instanciarlos
// Persona._conteo = 2;
console.log('Conteo estático: ',Persona._conteo); // Forma de saber cuantas instancias se han hecho de la clase
console.log(Persona.get_Conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona);
console.log(Persona.propiedadExterna);