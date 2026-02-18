let depositarButton = document.getElementById("depositar");

depositarButton.addEventListener("click", function() {
    let monto = document.getElementById("monto").value;
    if (monto === "" || isNaN(monto) || Number(monto) <= 0) {
        alert("Por favor, ingrese un monto válido para depositar.");
        return;
    }

    alert("Has depositado: $" + monto);
    // actualizar saldo
    let saldoActual = localStorage.getItem("saldo") ? parseFloat(localStorage.getItem("saldo")) : 0;
    let nuevoSaldo = saldoActual + parseFloat(monto);
    localStorage.setItem("saldo", nuevoSaldo);

    let historial = localStorage.getItem("historial") ? JSON.parse(localStorage.getItem("historial")) : [];
    historial.push({
        tipo: "depósito",
        monto: parseFloat(monto),
        fecha: new Date().toLocaleString()
    });
    localStorage.setItem("historial", JSON.stringify(historial));
});

// Botones de montos rápidos
document.getElementById("5k-quickbtn").addEventListener("click", function() {
    document.getElementById("monto").value = 5000;
});

document.getElementById("10k-quickbtn").addEventListener("click", function() {
    document.getElementById("monto").value = 10000;
});

document.getElementById("20k-quickbtn").addEventListener("click", function() {
    document.getElementById("monto").value = 20000;
});