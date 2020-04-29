/* **** => PATRÓN MÓDULO <= **** */
const miModulo = (() => {

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

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    /* **** => FUNCIONES <= **** */
    /* *********************************************************************************************************** */
    const inicializarJuego = (numJujadores = 2) => { // Está función inicializa el juego

        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numJujadores; i++) {
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    };
    /* *********************************************************************************************************** */
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
    /* *********************************************************************************************************** */
    const pedirCarta = () => { // Esta función me permite tomar una carta

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    };
    /* *********************************************************************************************************** */
    const valorCarta = (carta) => { // Esta función me da el valor de la carta

        // Extraer el valor de la carta
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            ((valor === 'A') ? 11 : 10) :
            valor * 1;

    };
    /* *********************************************************************************************************** */
    const acumularPuntos = (carta, turno) => { // Turno: 0 = primer jugador y el último será la computadora

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    };
    /* *********************************************************************************************************** */
    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    };
    /* *********************************************************************************************************** */
    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

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
    /* *********************************************************************************************************** */
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

    };
    /* *********************************************************************************************************** */
    /* **** => EVENTOS <= **** */
    btnPedir.addEventListener('click', () => { // Botón Pedir Carta

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if (puntosJugador > 21) {

            console.warn('%cLo siento mucho, perdiste', 'color: red; font-weight: bold;');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21) {

            console.warn('%c21, Genial!', 'color:green; font-weight: bold;');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        }

    });
    /* *********************************************************************************************************** */
    btnDetener.addEventListener('click', () => { // Botóm Detener

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);

    });
    /* *********************************************************************************************************** */
    btnNuevo.addEventListener('click', () => { // Botón Nuevo Juego

        inicializarJuego();

    });
    /* *********************************************************************************************************** */

    return {
        nuevoJuego: inicializarJuego
    };

})();