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