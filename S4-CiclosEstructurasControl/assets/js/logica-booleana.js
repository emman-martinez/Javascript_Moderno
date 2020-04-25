console.log('%cSección 4: Ciclos y estructuras de control', 'color:green; font-weight: bold;');
console.log('');

console.log('%c4.5 Lógica Booleana', 'color:cornflowerblue; font-weight: bold;');
console.log('');

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('c%Not o la negación', 'color:cornflowerblue; font-weight: bold;');

console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaTrue());
console.log(!regresaFalse());
console.log('');

console.warn('%cOperador AND', 'color:cornflowerblue; font-weight: bold;');

console.log(true && true);
console.log(true && false);
console.log(true && !false);
console.warn('%c&&1', 'color:cornflowerblue; font-weight: bold;');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());
console.warn('%c&&2', 'color:cornflowerblue; font-weight: bold;');
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue()
console.log('');

console.warn('%cOperador OR', 'color:cornflowerblue; font-weight: bold;');

console.log(true || false);
console.log(false || false);
console.warn('%c||', 'color:cornflowerblue; font-weight: bold;');
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());
console.log('');

console.warn('%cPro-Tip: Asignaciones con operadores', 'color:cornflowerblue; font-weight: bold;');

const soyNull = null;
const soyFalso = false;
const soyUndefined = undefined;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5= soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5}); 