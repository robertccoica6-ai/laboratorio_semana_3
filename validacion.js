document.getElementById("contactoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = parseInt(document.getElementById("edad").value);

    if (nombre === "" || correo === "" || isNaN(edad)) {
        alert("Todos los campos deben ser completados correctamente.");
        return;
    }

    if (edad < 18) {
        alert("Debes tener al menos 18 años para enviar el formulario.");
        return;
    }

    alert("Formulario enviado correctamente. ¡Gracias por participar!");
});