console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.9 While, Do While', 'color:cornflowerblue; font-weight: bold;');
console.log('');

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

// undefined, null y false
console.log('%cWhile', 'color:cornflowerblue; font-weight: bold;');
while (carros[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}
console.log('%cDo While', 'color:cornflowerblue; font-weight: bold;');
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);