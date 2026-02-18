// cargar el historial

window.addEventListener("load", function() {
    let historial = localStorage.getItem("historial");
    
    if (historial) {
        historial = JSON.parse(historial);
        let container = document.getElementById("transactions-container");
        container.innerHTML = "";
        
        historial.forEach(function(transaccion) {
            let isDeposito = transaccion.tipo === "depósito";
            let cardClass = isDeposito ? "received" : "sent";
            let icon = isDeposito ? "fa-arrow-down" : "fa-arrow-up";
            let amountClass = isDeposito ? "positive" : "negative";
            let sign = isDeposito ? "+" : "-";
            
            let transactionHtml = `
                <div class="transaction-card ${cardClass}">
                    <div class="transaction-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="transaction-info">
                        <h4>${isDeposito ? "Depósito" : "Envío"}</h4>
                        <p>${transaccion.fecha}</p>
                    </div>
                    <div class="transaction-amount ${amountClass}">
                        ${sign}$${transaccion.monto}
                    </div>
                </div>
            `;
            
            container.innerHTML += transactionHtml;
        });
    }
});