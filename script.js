// Cambia questa password con quella che vuoi usare
const PASSWORD = "Radio2026";

function login() {
    const passwordInserita = document.getElementById("password").value;
    const errore = document.getElementById("errore");

    if (passwordInserita === PASSWORD) {
        window.location.href = "portal.html";
    } else {
        errore.textContent = "Password non corretta";
    }
}
