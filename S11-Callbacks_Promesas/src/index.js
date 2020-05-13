import { obtenerHeroesArr, obtenerHeroesAwait } from './js/await';
import './styles.css';

console.time('await');

// obtenerHeroesArr()
//     .then(heroes => {
//             console.table(heroes);
//             console.timeEnd('await');
//         }
//     );

obtenerHeroesAwait('capi2')
    .then( heroe => {
            console.log(heroe);
            console.timeEnd('await');
        }
    )
    .catch(err => console.warn(err));