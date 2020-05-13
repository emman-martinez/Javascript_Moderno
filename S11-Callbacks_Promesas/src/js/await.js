import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async () => {

    return await Promise.all(heroesIds.map(buscarHeroe));

    // const heroesArr = [];

    // for(const id of heroesIds) {
    //     // buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    //     heroesArr.push(buscarHeroe(id));
    // }
    
    // return await Promise.all(heroesArr);

};

export const obtenerHeroesAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);  // Se obtiene el valor de una promesa que se resuelve eventualmente.
        return heroe;
    } catch(err) {
        console.log('catch!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder',
        }
    }

    
};