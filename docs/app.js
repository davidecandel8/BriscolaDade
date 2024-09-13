function showInsertOptions() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("insert-options-section").style.display = "flex";
    document.getElementById("form-section").style.display = "none";
    document.getElementById("subtitle").textContent = "Seleziona il tipo di briscola della partita da inserire:";
    history.pushState({page: "insert-options"}, "Insert Options", "?page=insert-options");
}

function showStats() {
    alert("Pagina delle statistiche ancora in sviluppo!");
    // In futuro puoi gestire la navigazione o l'apertura della pagina statistica qui
}

function showForm(gameType) {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("insert-options-section").style.display = "none";
    document.getElementById("form-section").style.display = "block";
    document.getElementById("form-title").textContent = "Inserisci dati per " + gameType;
    document.getElementById("subtitle").textContent = "Inserisci i dati della partita";
    history.pushState({page: "form"}, "Form", "?page=form");
}

window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        if (event.state.page === "insert-options") {
            document.getElementById("home-section").style.display = "none";
            document.getElementById("insert-options-section").style.display = "flex";
            document.getElementById("form-section").style.display = "none";
            document.getElementById("subtitle").textContent = "Seleziona il tipo di briscola della partita da inserire:";
        } else if (event.state.page === "form") {
            document.getElementById("home-section").style.display = "none";
            document.getElementById("insert-options-section").style.display = "none";
            document.getElementById("form-section").style.display = "block";
            document.getElementById("subtitle").textContent = "Inserisci i dati della partita";
        } else {
            document.getElementById("home-section").style.display = "flex";
            document.getElementById("insert-options-section").style.display = "none";
            document.getElementById("form-section").style.display = "none";
            document.getElementById("subtitle").textContent = "Tutte le partite e le statistiche di Briscola del 2024";
        }
    }
};

// Mostra il form specifico per "Briscola a 2"
function showForm(gameType) {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("insert-options-section").style.display = "none";
    document.getElementById("form-section").style.display = "block";
    document.getElementById("form-title").textContent = "Inserisci dati per " + gameType;
    document.getElementById("subtitle").textContent = "Inserisci i dati della partita";
    document.getElementById("game-date").valueAsDate = new Date(); // Imposta la data corrente
    history.pushState({ page: "form" }, "Form", "?page=form");
}

// Funzione per gestire l'aggiornamento dei punti
function updatePoints(inputField) {
    const teamPointsInput = document.getElementById('team_points');
    const opponentPointsInput = document.getElementById('opponent_points');

    if (inputField.id === 'team_points' && teamPointsInput.value) {
        opponentPointsInput.value = 120 - teamPointsInput.value;
    } else if (inputField.id === 'opponent_points' && opponentPointsInput.value) {
        teamPointsInput.value = 120 - opponentPointsInput.value;
    }
}

