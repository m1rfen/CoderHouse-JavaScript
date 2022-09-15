let Formulario = document.querySelector("#Formulario");

Formulario.addEventListener("submit", validarContacto);

function validarContacto(e) {
  e.preventDefault();

  let Contact = e.target;
  let Nombre = Contact[0];
  let Mail = Contact[1];
  let Telefono = Contact[2];
  let Asunto = Contact[3];
  let Mensaje = Contact[4];
  let Error = document.getElementById("Error");

  if (!Nombre.value) {
    
    //Validación si el nombre está vacío
    Error.innerText = "Error!\nEl nombre no puede estar vacío";
    Error.style.color = "red";

  } else if (!Mail.value) {

    //Validación si el mail está vacío
    Error.innerText = "Error!\nEl mail no puede estar vacío";
    Error.style.color = "red";

  } else if (!Telefono.value) {

    //Validación si el telefono está vacío
    Error.innerText = "Error!\nEl teléfono no puede estar vacío";
    Error.style.color = "red";

  } else if (isNaN(Telefono.value)) {

    //Validación si el telefono contiene letras
    Error.innerText = "Error!\nEl teléfono no puede contener carácteres inválidos";
    Error.style.color = "red";

  } else if (Telefono.value.length <= 8 || Telefono.value.length >= 14) {

    //Validación si el largo del teléfono es válido
    Error.innerText = "Error!\nEl teléfono es inválido";
    Error.style.color = "red";

  } else if (!Asunto.value) {

    //Validación si el asunto está vacío
    Error.innerText = "Error!\nEl asunto no puede estar vacío";
    Error.style.color = "red";

  } else if (!Mensaje.value) {

    //Validación si el mensaje está vacío
    Error.innerText = "Error!\nEl mensaje no puede estar vacío";
    Error.style.color = "red";

  } else {

    swal("El mensaje ha sido enviado!", "Responderemos a la brevedad!", "success");

  }
}
