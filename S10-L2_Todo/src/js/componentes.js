import './../css/componentes.css';

export const saludar = (nombre) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

};

// document.querySelector('html').style.boxSizing = "border-box";
// document.querySelector('*').style.boxSizing = "inherit";
// document.querySelector('body').style.boxSizing = "border-box";
// document.querySelector('body').style.backgroundColor = "#D0D0D0";

// const body = document.querySelector('body');
// const divContainer = document.createElement('div');
// const divJavascript = document.createElement('div');
// const divSeccion = document.createElement('div');
// const divTexto = document.createElement('div');
// const h1 = document.createElement('h1');
// const h2 = document.createElement('h2');
// const h4 = document.createElement('h4');
// const hr = document.createElement('hr');
// const p = document.createElement('p');
// const q = document.createElement('q');

// body.append(divContainer);

// divContainer.classList.add('container');
// divContainer.append(divJavascript);
// divContainer.append(divSeccion);
// divContainer.style.maxWidth = "900px";
// divContainer.style.margin = "0 auto";

// divJavascript.classList.add('javascript');
// h1.innerText = 'Javascript Moderno';
// q.innerText = 'Guía para dominar el lenguaje';
// p.append(q);
// divJavascript.append(h1);
// divJavascript.append(p);
// divJavascript.style.padding = ".5rem";
// divJavascript.style.textAlign = "center";
// divJavascript.style.backgroundColor = "#F9E64F";
// divJavascript.style.borderRadius = "10px 10px 0 0";
// divJavascript.style.borderTop = "3px solid #118EE7";
// divJavascript.style.borderLeft = "3px solid #118EE7";
// divJavascript.style.borderRight = "3px solid #118EE7";

// divSeccion.classList.add('seccion');
// h2.innerText = 'Sección 8';
// divSeccion.append(h2);
// divSeccion.append(hr);
// hr.style.border = ".8px solid black";
// divSeccion.append(divTexto);
// divSeccion.style.padding = "1rem";
// divSeccion.style.backgroundColor = "#eeeeee";
// divSeccion.style.textAlign = "center";
// divSeccion.style.color = "black";
// divSeccion.style.textTransform = "uppercase";
// divSeccion.style.borderRadius = "0 0 10px 10px";
// divSeccion.style.border = "3px solid #118EE7";
// divSeccion.style.fontWeight = "500";

// divTexto.classList.add('texto');
// h4.innerText = 'Módulos y Webpack';
// divTexto.append(h4);
// divTexto.style.display = "flex";
// divTexto.style.justifyContent = "center";
// divTexto.style.alignItems = "center";
// divTexto.style.marginTop = "1rem";
// divTexto.style.color = "black";
// divTexto.style.textTransform = "uppercase";
// divTexto.style.fontWeight = "300";