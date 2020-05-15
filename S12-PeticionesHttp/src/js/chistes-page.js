import { obtenerChiste } from "./http.provider";

const body = document.querySelector('body'); // document.body;
let btnOtro, olList;

const crearChistesHtml = () => {

    const html = `<h1 class="mt-5">Chistes</h1>
                    <hr>
                    <button class="btn btn-primary">Otro chiste</button>
                    <ol class="mt-3 list-group"></ol>
                `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

};

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        const chiste = await obtenerChiste();
        dibujarChiste(chiste);
        btnOtro.disabled = false;
    });

};

const dibujarChiste = (chiste) => { // Chiste { icon_url, id, value }

    const { id, value } = chiste;
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${id}</b>: ${value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

};

const init = () => {
    crearChistesHtml();
    eventos();
}

export {
    init
}