import { promesaLenta, 
    promesaMedia, 
    promesaRapida,
    buscarHeroe, 
    buscarHeroeAsync} 
from './js/promesas';
import './styles.css';

buscarHeroe('capi2').then((heroe) => console.log(heroe))
.catch((heroe) => console.warn(heroe));

buscarHeroeAsync('iron2').then((heroe) => console.log(heroe))
.catch((heroe) => console.warn(heroe));

// promesaLenta.then(mensaje => console.log(mensaje));
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaRapida.then(mensaje => console.log(mensaje));

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//         .then(mensaje => console.log(mensaje))
//         .catch(mensaje => console.warn(mensaje));