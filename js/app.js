import { data } from "./data.js";

let ranking = [];
let user = '';
let numberQuestion = 0;
let level = 1;
let score = 0;
let scoreRound = new Map();
scoreRound.set(1, 100);
scoreRound.set(2, 300);
scoreRound.set(3, 500);
scoreRound.set(4, 800);
scoreRound.set(5, 1000);
let jugador;

loadHomePage();

function blankPage() {
    const body = document.querySelector('body');
    body.innerHTML = "";
}

function loadHomePage() {
    const body = document.querySelector('body');

    const containerHome = document.createElement('div');
    containerHome.className = 'container-home';

    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome';
    const WelcomeTitle = document.createElement('h3');
    WelcomeTitle.textContent = 'Diviértete Respondiendo Preguntas';
    welcomeContainer.appendChild(WelcomeTitle);

    const usernameContainer = document.createElement('div');
    usernameContainer.className = 'username';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username';
    usernameInput.placeholder = 'Ingresa tu nombre de usuario';
    const br = document.createElement('br');
    const buttonGame = document.createElement('button');
    buttonGame.className = 'btn-game';
    buttonGame.textContent = 'Jugar';
    usernameContainer.appendChild(usernameInput);
    usernameContainer.appendChild(br);
    usernameContainer.appendChild(buttonGame);

    const tablePlayers = document.createElement('div');
    tablePlayers.className = "table-players";
    const buttonViewTablePlayers = document.createElement('button');
    buttonViewTablePlayers.className = 'btn-view-table-players';
    buttonViewTablePlayers.textContent = 'Ver Tabla de Jugadores';
    tablePlayers.appendChild(buttonViewTablePlayers);

    containerHome.appendChild(welcomeContainer);
    containerHome.appendChild(usernameContainer);
    containerHome.appendChild(tablePlayers);

    body.appendChild(containerHome);
    goToTheGamePage();
    goToThePlayersPage();
}

function loadThanksPage() {
    const body = document.querySelector('body');

    const containerThanks = document.createElement('div');
    containerThanks.className = 'container-game';
    
    const thankYouContainer = document.createElement('div');
    thankYouContainer.className = 'thank-you';
    const titleThankYou = document.createElement('h2');
    titleThankYou.textContent = '¡Gracias por Participar!';
    thankYouContainer.appendChild(titleThankYou);

    const scoreParcial = document.createElement('div');
    scoreParcial.className = 'score';
    const titleScore = document.createElement('span');
    titleScore.textContent = 'Puntos Ganados:';
    const inputScore = document.createElement('input');
    inputScore.type = 'text';
    inputScore.id = 'score';
    inputScore.name = 'score';
    inputScore.value = score;
    inputScore.disabled = true;
    const br = document.createElement('br');
    const buttonReturnIndex = document.createElement('button');
    buttonReturnIndex.className = 'btn-score';
    buttonReturnIndex.textContent = 'Volver al Inicio';
    scoreParcial.appendChild(titleScore);
    scoreParcial.appendChild(inputScore);
    scoreParcial.appendChild(br);
    scoreParcial.appendChild(buttonReturnIndex);

    containerThanks.appendChild(thankYouContainer);
    containerThanks.appendChild(scoreParcial);

    body.appendChild(containerThanks);
    goToTheHomePage();
}

function loadPlayersPage() {
    const body = document.querySelector('body');

    const containerPlayers = document.createElement('div');
    containerPlayers.className = 'container-players';

    const tablePlayers = document.createElement('table');
    tablePlayers.className = 'tabla-players';
    tablePlayers.border = '2';

    const tableHeader = document.createElement('tr');

    const nombreUsuario = document.createElement('th');
    nombreUsuario.textContent = 'Nombre de Usuario';
    const puntajeLogrado = document.createElement('th');
    puntajeLogrado.textContent = 'Puntaje Logrado';

    tableHeader.appendChild(nombreUsuario);
    tableHeader.appendChild(puntajeLogrado);
    tablePlayers.appendChild(tableHeader);

    ranking.forEach(dato => { 
    const tr = document.createElement("tr");
    const tdJugador = document.createElement("td");
    const tdPuntaje = document.createElement("td");

    tdJugador.textContent = dato.usuario;
    tdPuntaje.textContent = dato.puntaje;

    tr.appendChild(tdJugador);
    tr.appendChild(tdPuntaje);

    tablePlayers.appendChild(tr);
    
    });

    const buttonReturnIndex = document.createElement('button');
    buttonReturnIndex.className = 'btn-score';
    buttonReturnIndex.textContent = 'Volver al Inicio';

    containerPlayers.appendChild(buttonReturnIndex);
    containerPlayers.appendChild(tablePlayers);

    body.appendChild(containerPlayers);
    goToTheHomePage();
}

function loadGamePage() {
    const body = document.querySelector('body');

    const containerGame = document.createElement('div');
    containerGame.className = 'container-game';

    const containerInfoGame = document.createElement('div');
    containerInfoGame.className = 'info-game';

    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    const br4 = document.createElement('br');
    const br5 = document.createElement('br');
    const br6 = document.createElement('br');
    const br7 = document.createElement('br');
    const br8 = document.createElement('br');

    const lbNombreUsuario = document.createElement('label');
    lbNombreUsuario.textContent = 'Nombre de Usuario';
    const inputNombreUsuario = document.createElement('input');
    inputNombreUsuario.type = 'text';
    inputNombreUsuario.disabled = true;
    inputNombreUsuario.value = user;

    const lbNivel = document.createElement('label');
    lbNivel.textContent = 'Nivel';
    const inputNivel = document.createElement('input');
    inputNivel.type = 'text';
    inputNivel.disabled = true;
    inputNivel.value = level;

    const lbPuntosObtenidos = document.createElement('label');
    lbPuntosObtenidos.textContent = 'Puntos Obtenidos';
    const inputPuntosObtenidos = document.createElement('input');
    inputPuntosObtenidos.type = 'text';
    inputPuntosObtenidos.disabled = true;
    inputPuntosObtenidos.value = score;

    const lbPuntosRonda = document.createElement('label');
    lbPuntosRonda.textContent = 'Puntos de la Ronda';
    const inputPuntosRonda = document.createElement('input');
    inputPuntosRonda.type = 'text';
    inputPuntosRonda.disabled = true;
    inputPuntosRonda.value = scoreRound.get(level);

    containerInfoGame.appendChild(lbNombreUsuario);
    containerInfoGame.appendChild(inputNombreUsuario);
    containerInfoGame.appendChild(br1);
    containerInfoGame.appendChild(lbNivel);
    containerInfoGame.appendChild(inputNivel);
    containerInfoGame.appendChild(br2);
    containerInfoGame.appendChild(lbPuntosObtenidos);
    containerInfoGame.appendChild(inputPuntosObtenidos);
    containerInfoGame.appendChild(br3);
    containerInfoGame.appendChild(lbPuntosRonda);
    containerInfoGame.appendChild(inputPuntosRonda);

    const containerCuestions = document.createElement('div');
    containerCuestions.className = 'container-questions';

    const formCuestions = document.createElement('form');
    formCuestions.className = 'form-questions';

    if (level === 1) {
        numberQuestion = Math.floor((Math.random() * (4 - 0 + 1)) + 0);
    } else if (level === 2) {
        numberQuestion = Math.floor((Math.random() * (9 - 5 + 1)) + 5);
    } else if (level === 3) {
        numberQuestion = Math.floor((Math.random() * (14 - 10 + 1)) + 10);
    } else if (level === 4) {
        numberQuestion = Math.floor((Math.random() * (19 - 15 + 1)) + 15);
    } else if (level === 5) {
        numberQuestion = Math.floor((Math.random() * (24 - 20 + 1)) + 20);
    }

    console.log(numberQuestion);

    const cuestion = document.createElement('p');
    cuestion.textContent = data[numberQuestion].pregunta;

    const inputOption1 = document.createElement('input');
    inputOption1.type = 'radio';
    inputOption1.id = 'opcionA';
    inputOption1.name = 'opciones';
    inputOption1.value = data[numberQuestion].opciones.a;
    const lbOption1 = document.createElement('label');
    lbOption1.for = 'opcionA';
    lbOption1.textContent = data[numberQuestion].opciones.a;

    const inputOption2 = document.createElement('input');
    inputOption2.type = 'radio';
    inputOption2.id = 'opcionB';
    inputOption2.name = 'opciones';
    inputOption2.value = data[numberQuestion].opciones.b;
    const lbOption2 = document.createElement('label');
    lbOption2.for = 'opcionB';
    lbOption2.textContent = data[numberQuestion].opciones.b;

    const inputOption3 = document.createElement('input');
    inputOption3.type = 'radio';
    inputOption3.id = 'opcionC';
    inputOption3.name = 'opciones';
    inputOption3.value = data[numberQuestion].opciones.c;
    const lbOption3 = document.createElement('label');
    lbOption3.for = 'opcionC';
    lbOption3.textContent = data[numberQuestion].opciones.c;

    const inputOption4 = document.createElement('input');
    inputOption4.type = 'radio';
    inputOption4.id = 'opcionD';
    inputOption4.name = 'opciones';
    inputOption4.value = data[numberQuestion].opciones.d;
    const lbOption4 = document.createElement('label');
    lbOption4.for = 'opcionD';
    lbOption4.textContent = data[numberQuestion].opciones.d;

    const btnResponder = document.createElement('button');
    btnResponder.className = 'btn-responder';
    btnResponder.textContent = 'Responder';

    const btnRetirarse = document.createElement('button');
    btnRetirarse.className = 'btn-retirarse';
    btnRetirarse.textContent = 'Retirarse';

    formCuestions.appendChild(cuestion);
    formCuestions.appendChild(inputOption1);
    formCuestions.appendChild(lbOption1);
    formCuestions.appendChild(br4);
    formCuestions.appendChild(inputOption2);
    formCuestions.appendChild(lbOption2);
    formCuestions.appendChild(br5);
    formCuestions.appendChild(inputOption3);
    formCuestions.appendChild(lbOption3);
    formCuestions.appendChild(br6);
    formCuestions.appendChild(inputOption4);
    formCuestions.appendChild(lbOption4);
    formCuestions.appendChild(br7);
    formCuestions.appendChild(br8);
    formCuestions.appendChild(btnResponder);
    formCuestions.appendChild(btnRetirarse);

    containerCuestions.appendChild(formCuestions);

    containerGame.appendChild(containerInfoGame);
    containerGame.appendChild(containerCuestions);

    body.appendChild(containerGame);
    responder();
    retirarse();
}

function validarRespuesta() {
    let verifica = false;
    if (document.getElementById('opcionA').checked && document.getElementById('opcionA').value == data[numberQuestion].respuesta) {
        verifica = true;
    }else if (document.getElementById('opcionB').checked && document.getElementById('opcionB').value == data[numberQuestion].respuesta) {
        verifica = true;
    }else if (document.getElementById('opcionC').checked && document.getElementById('opcionC').value == data[numberQuestion].respuesta) {
        verifica = true;
    }else if (document.getElementById('opcionD').checked && document.getElementById('opcionD').value == data[numberQuestion].respuesta) {
        verifica = true;
    } 
    return verifica;
}

function responder() {
    const botonResponder = document.querySelector('.btn-responder');
    botonResponder.addEventListener('click', () => {
        if (validarRespuesta()) {
            alert("Respuesta correcta");
            score += scoreRound.get(level);
            if (level !== 5) {
                level++;
                blankPage();
                loadGamePage();
            } else {
                blankPage();
                loadThanksPage();
                alert("¡Felicidades, has respondido todas las preguntas correctamente!");
                jugador = {
                    usuario: user,
                    puntaje: score
                };
                ranking.push(jugador);
                score = 0;
                level = 1;
            }
        } else {
            score = 0;
            alert("Respuesta incorrecta, has perdido todos tus puntos lastimosamente");
            level = 1;
            jugador = {
                usuario: user,
                puntaje: score
            };
            ranking.push(jugador);
            blankPage();
            loadThanksPage();
        }
    });
}

function retirarse() {
    const botonRetirarse = document.querySelector('.btn-retirarse');
    botonRetirarse.addEventListener('click', () => {
        jugador = {
            usuario: user,
            puntaje: score
        };
        ranking.push(jugador);
        blankPage();
        loadThanksPage();
        level = 1;
        alert('¡Has tomado la decisión de retirarte, si ganaste puntos no los perderás!');
    });
}

function goToTheGamePage() {
    const gameButton = document.querySelector('.btn-game');
    gameButton.addEventListener('click', () => {
        user = document.getElementById('username').value;
        if (user == '') {
            alert('Por favor ingresa un nombre de usuario');
        } else {
            blankPage();
            loadGamePage();
        }
    });
}

function goToTheHomePage() {
    const homeButton = document.querySelector('.btn-score');
    homeButton.addEventListener('click', () => {
        score = 0;
        blankPage();
        loadHomePage();
    });
}

function goToThePlayersPage() {
    const playersButton = document.querySelector('.btn-view-table-players');
    playersButton.addEventListener('click', () => {
        blankPage();
        loadPlayersPage();
    });
}

