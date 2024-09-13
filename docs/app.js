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
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongo = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongo.db("briscola1").collection("briscola_data");

    const teammate1 = document.getElementById("teammate1").value;
    const opponent1 = document.getElementById("opponent1").value;
    const opponent2 = document.getElementById("opponent2").value;
    const team_points = parseInt(document.getElementById("team_points").value);
    const opponent_points = parseInt(document.getElementById("opponent_points").value);

    const result = team_points > opponent_points ? "VITTORIA" : team_points === opponent_points ? "PATTA" : "SCONFITTA";

    let documentToInsert = {
        "Number": 1,
        "Date": new Date().toLocaleDateString(),
        "Opponent1": opponent1,
        "TeamPoints": team_points,
        "OpponentPoints1": opponent_points,
        "Result": result,
        "Type": 1
    };

    if (teammate1) { documentToInsert.Teammate1 = teammate1; }
    if (opponent2) { documentToInsert.Opponent2 = opponent2; }

    await collection.insertOne(documentToInsert);

    document.getElementById("result").textContent = "Dati inseriti correttamente!";
}
