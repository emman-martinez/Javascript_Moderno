/* **** => PATRÓN MÓDULO <= **** */
(() => {

    'use strict'
     
    console.log('%cBlack Jack', 'color: green; font-weight: bold;');

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    /* **** => REFERENCIAS DEL HTML <= **** */

    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugador = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'),
          puntosHTML = document.querySelectorAll('small');

    /* **** => FUNCIONES <= **** */

    const inicializarJuego = (numJujadores = 2) => { // Está función inicializa el juego
        deck = crearDeck();
        for (let i = 0; i < numJujadores; i++) {
            puntosJugadores.push(0);
        }
        console.log({puntosJugadores});
    };

    const crearDeck = () => { // Esta función crea un nuevo deck

        deck = [];

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
        
        return _.shuffle(deck);
    };

    const pedirCarta = () => { // Esta función me permite tomar una carta

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    };

    const valorCarta = (carta) => { // Esta función me da el valor de la carta

        // Extraer el valor de la carta
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            ((valor === 'A') ? 11 : 10) :
            valor * 1;

    };

    const acumularPuntos = () => {

    };

    const turnoComputadora = (puntosMinimos) => {
        
        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
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
        
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
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

        //  console.log({carta, puntos, puntosJugador});

    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        
        // deck = [];
        // deck = crearDeck();

        inicializarJuego();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        
        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });

})();