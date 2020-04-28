console.log('%cBlack Jack', 'color: green; font-weight: bold;');
/*
    2C = Two of Clubs    (Tréboles)
    2D = Two of Diamonds (Diamantes)
    2H = Two of Hearts   (Corazones)
    2S = Two of Spades   (Espadas)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

/* **** => REFERENCIAS DEL HTML <= **** */

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

/* **** => FUNCIONES <= **** */

const crearDeck = () => { // Esta función crea un nuevo deck

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
};

crearDeck();

const pedirCarta = () => { // Esta función me permite tomar una carta

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    // console.log(deck);
    // console.log({ carta });
    return carta;
};


const valorCarta = (carta) => { // Esta función me da el valor de la carta

    // Extraer el valor de la carta
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        ((valor === 'A') ? 11 : 10) :
        valor * 1;

};

const turnoComputadora = (puntosMinimos) => {
    
    do {
        const carta = pedirCarta();
        const puntos = valorCarta(carta);
        puntosComputadora = puntosComputadora + puntos;
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)); 

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }

    }, 125);

};

/* **** => EVENTOS <= **** */

btnPedir.addEventListener('click', () => {
    // console.log('click');
    const carta = pedirCarta();
    const puntos = valorCarta(carta);
    puntosJugador = puntosJugador + puntos;
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21) {

        console.warn('%cLo siento mucho, perdiste', 'color: red; font-weight: bold;');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }   else if (puntosJugador === 21) {

            console.warn('%c21, Genial!', 'color:green; font-weight: bold;');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

    }

    console.log({carta, puntos, puntosJugador});

});

btnDetener.addEventListener('click', () => {
    // console.log('btnDetener');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {
    // console.log('btnNuevo');

    console.clear();
    
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    
    btnPedir.disabled = false;
    btnDetener.disabled = false;

});