import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';
const heroeId3 = 'iron';

// **** => CALLBACK <= **** //

// buscarHeroe(heroeId1, (err, heroe1) => {
//     if(err) { return console.error(err); } 
//     console.log(`Enviando a ${heroe1.nombre} a la misión`);
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err) { return console.error(err); }
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//         buscarHeroe(heroeId3, (err, heroe3) => {
//             if(err) { return console.error(err); }
//             console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`);
//         });
//     });
// });

// **** => PROMESAS <= **** //

// (1)
// buscarHeroe(heroeId1).then(heroe1 => {
//     //  console.log(`Enviando a ${heroe1.nombre} a la misión`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         //  console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//         buscarHeroe(heroeId3).then(heroe3 => {
//             console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`);
//         })
//     })
// });

// (2)
Promise.all(
    [
        buscarHeroe(heroeId1), 
        buscarHeroe(heroeId2), 
        buscarHeroe(heroeId3)
    ]).then( ([heroe1, heroe2, heroe3]) => {
        console.log('promise.all', {heroe1, heroe2, heroe3});
        console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión`);
    }).catch( (err) => {
        alert(err);
    }).finally(() => {
        console.log('Se terminó el promise.all');
    });



console.log('Fin del programa');