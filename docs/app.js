function showInsertOptions() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("insert-options-section").style.display = "flex";
    document.getElementById("subtitle").textContent = "Seleziona il tipo di briscola della partita da inserire:";
    history.pushState({page: "insert-options"}, "Insert Options", "?page=insert-options");
}

function showStats() {
    alert("Pagina delle statistiche ancora in sviluppo!");
    // In futuro puoi gestire la navigazione o l'apertura della pagina statistica qui
}

function showForm(gameType) {
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
            document.getElementById("subtitle").textContent = "Gestisci e visualizza le statistiche delle tue partite di Briscola";
        }
    }
};
