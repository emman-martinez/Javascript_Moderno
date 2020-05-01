console.log('%cSección 7: Clases en Javascript y ESNext private properties', 'color:green; font-weight: bold;');
console.log('');

console.log('%cPropiedades Privadas', 'color:cornflowerblue; font-weight: bold;');
console.log('');

class Rectangulo {

    // #
    area = 0;

    constructor(base = 0, altura = 0) {

        this.base = base;
        this.altura = altura;
        this.#area = base * altura;

    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.#area = 100;
console.log(rectangulo);