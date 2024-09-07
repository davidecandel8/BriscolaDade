
function showInsertOptions() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("insert-options-section").style.display = "flex";
}

function showStats() {
    alert("Pagina delle statistiche ancora in sviluppo!");
}

function showForm(gameType) {
    document.getElementById("insert-options-section").style.display = "none";
    document.getElementById("form-section").style.display = "block";
    document.getElementById("form-title").textContent = "Inserisci dati per " + gameType;
}


async function submitForm() {
    const app = new Realm.App({ id: "briscoladade-hggbttk" });
    // Autenticazione anonima
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);

    // Connessione al client MongoDB Atlas
    const mongo = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongo.db("briscola1").collection("briscola_data");

    // Prendi i valori dal form
    const subtype = document.getElementById("tipo_briscola").value;
    const teammate1 = document.getElementById("teammate1").value;
    const teammate2 = ""; // Puoi cambiare se necessario
    const opponent1 = document.getElementById("opponent1").value;
    const opponent2 = document.getElementById("opponent2").value;
    const opponent3 = ""; // Puoi cambiare se necessario
    const team_points = parseInt(document.getElementById("team_points").value);
    const opponent_points = parseInt(document.getElementById("opponent_points").value);
    const opponent_points2 = -1; // Puoi cambiare se necessario
    const audiction = -1; // Puoi cambiare se necessario
    const result = team_points > opponent_points ? "VITTORIA" : team_points === opponent_points ? "PATTA" : "SCONFITTA";

    // Crea l'oggetto con i campi obbligatori
    let documentToInsert = {
        "Number": 1, // Gestisci il numero manualmente o programmaticamente
        "Date": new Date().toLocaleDateString(), // Usa la data corrente
        "Opponent1": opponent1, // Campo obbligatorio
        "TeamPoints": team_points, // Campo obbligatorio
        "OpponentPoints1": opponent_points, // Campo obbligatorio
        "Result": result, // Campo obbligatorio
        "Type": 1 // Puoi modificare in base alle esigenze
    };

    // Aggiungi i campi opzionali solo se sono valorizzati
    if (subtype) {documentToInsert.Subtype = subtype;}

    if (teammate1) {documentToInsert.Teammate1 = teammate1;}

    if (teammate2) {documentToInsert.Teammate2 = teammate2;}

    if (opponent2) {documentToInsert.Opponent2 = opponent2;}

    if (opponent3) {documentToInsert.Opponent3 = opponent3;}

    if (opponent_points2 !== -1) {
        console.log(opponent_points2)
        opponent_points2 == -1 ? console.log(true) : console.log(false);
        documentToInsert.OpponentPoints2 = opponent_points2;
    }

    if (audiction !== -1) {
        console.log(audiction)
        audiction == -1 ? console.log(true) : console.log(false);
        documentToInsert.Audiction = audiction;
    }

    // Inserisci l'oggetto nel database
    await collection.insertOne(documentToInsert);

    // Mostra un messaggio di successo
    document.getElementById("result").textContent = "Dati inseriti correttamente!";
}

function showFields() {
    var tipoBriscola = document.getElementById("tipo_briscola").value;
    if (tipoBriscola === "Briscola a 2") {
        document.getElementById("player_fields").style.display = "block";
    } else {
        document.getElementById("player_fields").style.display = "none";
    }
}
