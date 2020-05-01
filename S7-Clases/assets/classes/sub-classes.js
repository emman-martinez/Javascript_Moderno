console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%cSub-Clases', 'color:cornflowerblue; font-weight: bold;');
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

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Avenger';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.codigo}`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Yeah!');
//  const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();