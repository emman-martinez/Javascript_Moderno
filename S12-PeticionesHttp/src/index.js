// (1)
//  import { init } from "./js/chistes-page";
//  init();

// (2)
//  import { init } from './js/usuarios-page';
//  init();

// (3)
import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then((usuario) => console.log(usuario));

CRUD.crearUsuario({
    name: 'Emmanuel',
    job: 'Chef'
}).then((usuario) => console.log(usuario));

CRUD.actualizarUsuario(1,{
    name: 'Emmanuel',
    job: 'Panadero'
}).then((usuario) => console.log(usuario));

CRUD.borrarUsuario(1).then((resp) => console.log(resp));

