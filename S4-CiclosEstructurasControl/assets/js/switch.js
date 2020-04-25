console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.8 Switch', 'color:cornflowerblue; font-weight: bold;');
console.log('');

const dia = 1;

switch(dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4: 
        console.log('Jueves');
        break;
    case 5:
        console.log('Vienes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('No sé encontro el día especificado');
}