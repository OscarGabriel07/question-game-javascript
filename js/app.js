import { data } from "./data.js";

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

    const score = document.createElement('div');
    score.className = 'score';
    const titleScore = document.createElement('span');
    titleScore.textContent = 'Puntos Ganados:';
    const inputScore = document.createElement('input');
    inputScore.type = 'text';
    inputScore.id = 'score';
    inputScore.name = 'score';
    inputScore.value = '1450';
    inputScore.disabled = true;
    const br = document.createElement('br');
    const buttonReturnIndex = document.createElement('button');
    buttonReturnIndex.className = 'btn-score';
    buttonReturnIndex.textContent = 'Volver al Inicio';
    score.appendChild(titleScore);
    score.appendChild(inputScore);
    score.appendChild(br);
    score.appendChild(buttonReturnIndex);

    containerThanks.appendChild(thankYouContainer);
    containerThanks.appendChild(score);

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

    const buttonReturnIndex = document.createElement('button');
    buttonReturnIndex.className = 'btn-score';
    buttonReturnIndex.textContent = 'Volver al Inicio';

    containerPlayers.appendChild(buttonReturnIndex);
    tableHeader.appendChild(nombreUsuario);
    tableHeader.appendChild(puntajeLogrado);
    tablePlayers.appendChild(tableHeader);
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
    inputNombreUsuario.readOnly = true;

    const lbNivel = document.createElement('label');
    lbNivel.textContent = 'Nivel';
    const inputNivel = document.createElement('input');
    inputNivel.type = 'text';
    inputNivel.readOnly = true;

    const lbPuntosObtenidos = document.createElement('label');
    lbPuntosObtenidos.textContent = 'Puntos Obtenidos';
    const inputPuntosObtenidos = document.createElement('input');
    inputPuntosObtenidos.type = 'text';
    inputPuntosObtenidos.readOnly = true;

    const lbPuntosRonda = document.createElement('label');
    lbPuntosRonda.textContent = 'Puntos de la Ronda';
    const inputPuntosRonda = document.createElement('input');
    inputPuntosRonda.type = 'text';
    inputPuntosRonda.readOnly = true;

    containerInfoGame.appendChild(lbNombreUsuario);
    containerInfoGame.appendChild(inputNombreUsuario);
    containerInfoGame.appendChild(br1);
    containerInfoGame.appendChild(lbNivel);
    containerInfoGame.appendChild(inputNivel);
    containerInfoGame.appendChild(br2);
    containerInfoGame.appendChild(lbPuntosObtenidos);
    containerInfoGame.appendChild(br3);
    containerInfoGame.appendChild(lbPuntosRonda);
    containerInfoGame.appendChild(inputPuntosRonda);

    const containerCuestions = document.createElement('div');
    containerCuestions.className = 'container-questions';

    const formCuestions = document.createElement('form');
    
    const cuestion = document.createElement('p');
    cuestion.textContent = '¿Cuál es la capital de Bogotá?';

    const inputOption1 = document.createElement('input');
    inputOption1.type = 'radio';
    inputOption1.id = 'bogota';
    inputOption1.name = 'nivel1';
    inputOption1.value = 'Bogotá';
    const lbOption1 = document.createElement('label');
    lbOption1.for = 'bogota';
    lbOption1.textContent = 'Bogotá';

    const inputOption2 = document.createElement('input');
    inputOption2.type = 'radio';
    inputOption2.id = 'cali';
    inputOption2.name = 'nivel1';
    inputOption2.value = 'Cali';
    const lbOption2 = document.createElement('label');
    lbOption2.for = 'cali';
    lbOption2.textContent = 'Cali';

    const inputOption3 = document.createElement('input');
    inputOption3.type = 'radio';
    inputOption3.id = 'medellin';
    inputOption3.name = 'nivel1';
    inputOption3.value = 'Medellín';
    const lbOption3 = document.createElement('label');
    lbOption3.for = 'medellin';
    lbOption3.textContent = 'Medellín';

    const inputOption4 = document.createElement('input');
    inputOption4.type = 'radio';
    inputOption4.id = 'barranquilla';
    inputOption4.name = 'nivel1';
    inputOption4.value = 'Barranquilla';
    const lbOption4 = document.createElement('label');
    lbOption4.for = 'barranquilla';
    lbOption4.textContent = 'Barranquilla';

    const btnResponder = document.createElement('input');
    btnResponder.type = 'submit';
    btnResponder.name = 'btn-responder';
    btnResponder.id = 'responder';
    btnResponder.value = 'Responder';

    const btnRetirarse = document.createElement('input');
    btnRetirarse.type = 'submit';
    btnRetirarse.name = 'btn-retirarse';
    btnRetirarse.id = 'retirarse';
    btnRetirarse.value = 'Retirarse';

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
}

function goToTheGamePage() {
    const gameButton = document.querySelector('.btn-game');
    gameButton.addEventListener('click', () => {
        blankPage();
        loadGamePage();
    });
}

function goToTheHomePage() {
    const homeButton = document.querySelector('.btn-score');
    homeButton.addEventListener('click', () => {
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

// function goToTheThanksPage() {
//     const playersButton = document.querySelector('.btn-view-table-players');
//     playersButton.addEventListener('click', () => {
//         blankPage();
//         loadPlayersPage();
//     });
// }