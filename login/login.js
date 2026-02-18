const botonLogin = document.getElementById("btn-login")
const usuarioCorrecto = "admin@123.cl";
const passwordCorrecta = "1234";

botonLogin.addEventListener("click", function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const modalBody = document.getElementById("modalBody");
    if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        modalBody.textContent = "Inicio de sesión exitoso";
        $('#mensajeModal').modal('show');  // Muestra el modal
        setTimeout(function () {
            window.location.href = "../menu/menu.html";
        }, 1000);
    } else {
        modalBody.textContent = "Credenciales incorrectas";
        $('#mensajeModal').modal('show');  // Muestra el modal
    }
});
