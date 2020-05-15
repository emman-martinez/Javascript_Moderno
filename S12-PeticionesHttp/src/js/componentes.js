import './../css/componentes.css';

export const layOutHtml = () => {

    const body = document.querySelector('body');
    const divContainer = document.createElement('div');
    const img = document.createElement('img');

    body.append(divContainer);
    divContainer.classList.add('container');
    img.src = './assets/img/webpack.png';
    img.alt = 'Webpack logo'; 
    img.classList.add("imagen");
    divContainer.append(img);
    
};
 