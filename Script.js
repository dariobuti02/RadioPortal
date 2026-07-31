// ================================
// OPSNET LOGIN
// ================================

// ================================
// FIREBASE CONFIGURAZIONE
// ================================

const firebaseConfig = {
  apiKey: "AIzaSyCNlLl9cp7m0ZjlsLWBGmsq5XW8cjIYcGU",
  authDomain: "opsnet-801c4.firebaseapp.com",
  databaseURL: "https://opsnet-801c4-default-rtdb.firebaseio.com",
  projectId: "opsnet-801c4",
  storageBucket: "opsnet-801c4.firebasestorage.app",
  messagingSenderId: "1004654981773",
  appId: "1:1004654981773:web:4567b072b212592ad368c4"
};

const PASSWORD = "Opsnet";


function login() {

    let passwordInserita = document.getElementById("password").value;
    let errore = document.getElementById("errore");

    if (passwordInserita === PASSWORD) {

        window.location.href = "portal.html";

    } else {

        errore.textContent = "Password non corretta";

    }

}



// ================================
// APERTURA SETTORI
// ================================

function apriSettore(settore) {

    switch (settore) {

        case "vvf":
            window.location.href = "vvf.html";
            break;

        case "polizia":
            window.location.href = "polizia.html";
            break;

        case "carabinieri":
            window.location.href = "carabinieri.html";
            break;

        case "protezione":
            window.location.href = "protezione_civile.html";
            break;

        case "copass":
            window.location.href = "copass.html";
            break;

        case "aib":
            window.location.href = "aib.html";
            break;

        case "aerea":
            window.location.href = "banda_aerea.html";
            break;

        case "pmr":
            window.location.href = "pmr446.html";
            break;

        case "lpd":
            window.location.href = "lpd.html";
            break;

        case "radioamatori":
            window.location.href = "radioamatori.html";
            break;

        case "nautica":
            window.location.href = "nautica.html";
            break;

        case "118":
            window.location.href = "118.html";
            break;

        default:
            alert("Settore non disponibile");

    }

}



// ================================
// DATABASE FREQUENZE
// ================================

let settoreCorrente = "vvf";


function caricaFrequenze(settore) {

    settoreCorrente = settore;

    let lista = JSON.parse(localStorage.getItem(settore)) || [];


    let tabella = document.getElementById("tabellaFrequenze");

    if (!tabella) return;


    tabella.innerHTML = "";


    lista.forEach((f, indice) => {


        tabella.innerHTML += `

        <tr>

        <td>${f.nome}</td>
        <td>${f.rx}</td>
        <td>${f.tx}</td>
        <td>${f.banda}</td>
        <td>${f.mod}</td>
        <td>${f.toni}</td>
        <td>${f.note}</td>

        <td>

        <button onclick="modificaFrequenza(${indice})">
        ✏️
        </button>

        <button onclick="eliminaFrequenza(${indice})">
        🗑️
        </button>

        </td>

        </tr>

        `;

    });

}




function aggiungiFrequenza() {


   let lista = JSON.parse(localStorage.getItem(settoreCorrente)) || [];


lista.push({
    nome,
    rx,
    tx,
    banda,
    mod,
    toni,
    note
});


localStorage.setItem(
    settoreCorrente,
    JSON.stringify(lista)
);


    caricaFrequenze(settoreCorrente);

}





function eliminaFrequenza(id) {


    let lista = JSON.parse(localStorage.getItem(settoreCorrente)) || [];


    lista.splice(id,1);


    localStorage.setItem(
        settoreCorrente,
        JSON.stringify(lista)
    );


    caricaFrequenze(settoreCorrente);

}





function modificaFrequenza(id) {


    let lista = JSON.parse(localStorage.getItem(settoreCorrente)) || [];


    let f = lista[id];


    f.nome = prompt("Nome:", f.nome);
    f.rx = prompt("RX:", f.rx);
    f.tx = prompt("TX:", f.tx);
    f.banda = prompt("Banda:", f.banda);
    f.mod = prompt("Modalità:", f.mod);
    f.toni = prompt("Toni:", f.toni);
    f.note = prompt("Note:", f.note);



    localStorage.setItem(
        settoreCorrente,
        JSON.stringify(lista)
    );


    caricaFrequenze(settoreCorrente);

}
console.log("OPSNET SCRIPT CARICATO");
