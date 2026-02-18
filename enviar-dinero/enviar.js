let addContactButton = document.getElementById("add-contact-btn");

addContactButton.addEventListener("click", function() {
    let name = document.querySelector(".i-name").value;
    let email = document.querySelector(".i-email").value;
    let alias = document.querySelector(".i-alias").value;
    let rut = document.querySelector(".i-ncuenta").value;

    if (name === "" || email === "" || alias === "" || rut === "") {
        alert("Por favor, complete todos los campos para agregar un contacto.");
        return;
    }

    alert("Contacto agregado:\nNombre: " + name + "\nCorreo: " + email + "\nAlias: " + alias + "\nRUT: " + rut);

    let contactos = localStorage.getItem("contactos") ? JSON.parse(localStorage.getItem("contactos")) : [];
    contactos.push({
        name: name,
        email: email,
        rut: rut
    });
    localStorage.setItem("contactos", JSON.stringify(contactos));

    // cerrar modal
    $('#addContactModal').modal('hide');

    // renderizar contacto en la lista
    let contactHtml = `
            <div class="contact-card">
                <div class="contact-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="contact-info">
                    <h4>${name} - ${rut}</h4>
                    <p>${email}</p>
                </div>
                <div class="contact-action">
                    <button id="sendmoney" class="btn-send-money" data-name="${name}" data-toggle="modal" data-target="#modalenviar"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;

    document.getElementById("contact-list").innerHTML += contactHtml;
});


// cargar contactos guardados al iniciar la página
window.addEventListener("load", function() {
    let contactos = localStorage.getItem("contactos");
    if (contactos) {
        contactos = JSON.parse(contactos);
        contactos.forEach(function(contacto) {
            let contactHtml = `
                <div class="contact-card">
                    <div class="contact-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="contact-info">
                        <h4>${contacto.name} - ${contacto.rut}</h4>
                        <p>${contacto.email}</p>
                    </div>
                    <div class="contact-action">
                        <button id="sendmoney" class="btn-send-money" data-name="${contacto.name}" data-toggle="modal" data-target="#modalenviar"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            `;
            document.getElementById("contact-list").innerHTML += contactHtml;
        });
    }
});



document.addEventListener("click", function(e) {
    if (e.target.closest(".btn-send-money")) {
        let contactName = e.target.closest(".btn-send-money").getAttribute("data-name");
        document.getElementById("contact-name-send").textContent = contactName;
        let saldoActual = localStorage.getItem("saldo") ? parseFloat(localStorage.getItem("saldo")) : 0;
        document.getElementById("available-balance").textContent = saldoActual;
    }
});

let sendMoneyButton = document.getElementById("send-money-btn");

sendMoneyButton.addEventListener("click", function() {
    let monto = document.getElementById("monto-enviar").value;
    let saldoActual = localStorage.getItem("saldo") ? parseFloat(localStorage.getItem("saldo")) : 0;
    
    if (monto === "" || isNaN(monto) || Number(monto) <= 0) {
        alert("Por favor, ingrese un monto válido para enviar.");
        return;
    }
    
    if (Number(monto) > saldoActual) {
        alert("No tienes saldo suficiente para realizar esta transferencia.");
        return;
    }
    
    alert("Has enviado: $" + monto);
    let nuevoSaldo = saldoActual - parseFloat(monto);
    localStorage.setItem("saldo", nuevoSaldo);
    
    document.getElementById("monto-enviar").value = "";
    $('#modalenviar').modal('hide');


    let historial = localStorage.getItem("historial") ? JSON.parse(localStorage.getItem("historial")) : [];
    historial.push({
        tipo: "envío",
        monto: parseFloat(monto),
        fecha: new Date().toLocaleString()
    });
    localStorage.setItem("historial", JSON.stringify(historial));
});

