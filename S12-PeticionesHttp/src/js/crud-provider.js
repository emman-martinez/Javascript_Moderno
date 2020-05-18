const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {

    try {

        const resp = await fetch(`${urlCRUD}/${id}`);
        if (!resp.ok) throw 'No se pudo realizar la petición';
        const { data } = await resp.json();

        return data;

    } catch(err) {

        throw err;

    }

};

const crearUsuario = async(usuario) => {

    try {

        const resp = await fetch(urlCRUD, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'                                
            }
        });

        return (await resp.json());
        

    } catch (err) {

        throw err;

    }

}

const actualizarUsuario = async(id, usuario) => {

    try {

        const resp = await fetch(`${urlCRUD}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'                                
            }
        });

        return (await resp.json());
        

    } catch (err) {

        throw err;

    }

}

const borrarUsuario = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'  
    });

    return (resp.ok) ? 'Usuario Eliminado' : 'No se pudo eliminar el usuario';
};

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}