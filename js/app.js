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
    goToTheThanksPage();
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

function goToTheThanksPage() {
    const gameButton = document.querySelector('.btn-game');
    gameButton.addEventListener('click', () => {
        blankPage();
        loadThanksPage();
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
