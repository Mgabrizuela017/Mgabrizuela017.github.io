 document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const interes = document.getElementById("interes");
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const email = document.getElementById("email");
      const telefono = document.getElementById("telefono");
      const provincia = document.getElementById("provincia");
      const localidad = document.getElementById("localidad");
      const mensaje = document.getElementById("mensaje");

      let errores = [];

      if (interes.value === "") errores.push("Seleccioná un tipo de evento.");
      if (nombre.value.trim() === "") errores.push("Completá el nombre.");
      if (apellido.value.trim() === "") errores.push("Completá el apellido.");
      if (!validarEmail(email.value)) errores.push("Ingresá un email válido.");
      if (telefono.value.trim() === "") errores.push("Completá el teléfono.");
      if (provincia.value === "") errores.push("Seleccioná una provincia.");
      if (localidad.value.trim() === "") errores.push("Completá la localidad.");
      if (mensaje.value.trim() === "") errores.push("Completá el mensaje.");

      if (errores.length > 0) {
        alert("Por favor corregí los siguientes errores:\n\n" + errores.join("\n"));
      } else {
        alert("Formulario enviado correctamente.");
        form.reset(); // opcional
        // Podés enviar el formulario con fetch/AJAX si lo necesitás
      }
    });

    function validarEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });