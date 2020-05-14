import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroe(id));


export const obtenerHeroesArr = async() => {

    return await Promise.all(heroesIds.map(buscarHeroe));

    // const heroesArr = [];

    // for(const id of heroesIds) {
    //     // buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    //     heroesArr.push(buscarHeroe(id));
    // }

    // return await Promise.all(heroesArr);

};

export const obtenerHeroesAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id); // Se obtiene el valor de una promesa que se resuelve eventualmente.
        return heroe;
    } catch (err) {
        console.log('catch!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder',
        }
    }


};

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    // heroesPromesas.forEach(async(p) => console.log(await p));

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach((heroe) => console.log(heroe));

};

export const heroeIfAwait = async(id) => {

    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaa');
    }

};