// ================================
// OPSNET - Gestione accesso
// ================================

const PASSWORD = "Opsnet";


// Login principale
function login() {

    const passwordInserita = document.getElementById("password").value;
    const errore = document.getElementById("errore");

    if (passwordInserita === PASSWORD) {

        // Accesso al portale
        window.location.href = "portal.html";

    } else {

        errore.textContent = "Password non corretta";

    }

}


// ================================
// Apertura settori OPSNET
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
// DATABASE FREQUENZE VVF
// ================================


function caricaFrequenze() {

    let lista = JSON.parse(localStorage.getItem("vvf")) || [];

    let ricerca = document.getElementById("ricerca");

    let testo = ricerca ? ricerca.value.toLowerCase() : "";

    let tabella = document.getElementById("tabellaFrequenze");

    if (!tabella) return;

    tabella.innerHTML = "";


    lista.forEach((f, indice) => {

        if (
            f.nome.toLowerCase().includes(testo) ||
            f.rx.includes(testo)
        ) {

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

        }

    });

}



function aggiungiFrequenza() {


let nome = prompt("Nome canale:");

let rx = prompt("Frequenza RX:");

let tx = prompt("Frequenza TX:");

let banda = prompt("Banda (VHF/UHF):");

let mod = prompt("Modalità:");

let toni = prompt("CTCSS/DCS:");

let note = prompt("Note:");



let lista = JSON.parse(localStorage.getItem("vvf")) || [];


lista.push({

nome,
rx,
tx,
banda,
mod,
toni,
note

});


localStorage.setItem("vvf", JSON.stringify(lista));


caricaFrequenze();

}




function eliminaFrequenza(id) {


let lista = JSON.parse(localStorage.getItem("vvf")) || [];


lista.splice(id,1);


localStorage.setItem("vvf", JSON.stringify(lista));


caricaFrequenze();

}




function modificaFrequenza(id) {


let lista = JSON.parse(localStorage.getItem("vvf")) || [];


let f = lista[id];


f.nome = prompt("Nome:", f.nome);

f.rx = prompt("RX:", f.rx);

f.tx = prompt("TX:", f.tx);

f.banda = prompt("Banda:", f.banda);

f.mod = prompt("Modalità:", f.mod);

f.toni = prompt("Toni:", f.toni);

f.note = prompt("Note:", f.note);



localStorage.setItem("vvf", JSON.stringify(lista));


caricaFrequenze();

}