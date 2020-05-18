import { obtenerUsuarios } from './http.provider';

const body  = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?
    tbody = document.querySelector('tbody');

}



// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    if (!usuario) return;

    correlativo++;

    const { email, first_name: nombre, last_name: apellido, avatar: imagen} = usuario;

    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${nombre} ${apellido} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${imagen}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    console.log(tr);

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    tbody.appendChild(tr);

}


const init = async() => {

    crearHtml();

    const usuarios = await obtenerUsuarios(); // Obtener la lista de usuarios usando el servicio creado
    //console.log(usuarios);
    correlativo = 0;
    for(const usuario of usuarios) { // Por cada usuario, llamar la función crearFila (for, forEach)
        // console.log(usuario);
        crearFilaUsuario(usuario);
    }    

}

export {
    init
}
