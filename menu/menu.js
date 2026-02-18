

const btnDepositar = document.getElementById("btn-deposit");
const btnEnviar = document.getElementById("btn-send");
const btnMovimientos = document.getElementById("btn-transactions");

let saldo = 0;

function actualizarSaldo() {
    const saldoElem = document.getElementById("saldo");
    const saldo = localStorage.getItem("saldo") ? parseFloat(localStorage.getItem("saldo")) : 0;
    saldoElem.textContent = `$${Math.floor(saldo).toLocaleString("es-CL")}`;
}

btnDepositar.addEventListener("click", function() {
    alert("Redirigiendo a pantalla de depósito");
    window.location.href = "../depositar/depositar.html";
});

btnEnviar.addEventListener("click", function() {
    alert("Redirigiendo a pantalla de enviar dinero");
    window.location.href = "../enviar-dinero/enviar.html";
});

btnMovimientos.addEventListener("click", function() {
    alert("Redirigiendo a pantalla de últimos movimientos");
    window.location.href = "../historial/historial.html";
});

window.addEventListener("load", actualizarSaldo);

