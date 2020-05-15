import { obtenerUsuarios } from './js/http.provider';

obtenerUsuarios()
    .then(usuarios => console.log(usuarios));

const init = async() => {
    const usuarios = await obtenerUsuarios();
    console.log(usuarios);
};

init();

//  import { init } from "./js/chistes-page";
//  init();