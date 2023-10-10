/* const botonGoId = document.getElementById("botonCardGo");
const botonGoClass = document.getElementsByClassName("botonGoClass");
const botonGoTags = document.getElementsByTagName("a");
const botonGo = document.querySelectorAll(".botonGoClass");
const titulo = document.getElementById("tituloH2");
const divPrincipal = document.getElementById("div-principal"); */

const botonRegistro =
  document.getElementById("botonRegistro"); /* Obtengo el boton de registro */

const inputUsuario =
  document.getElementById("inputUsuario"); /* obtengo el input del usuario */
const inputContrasenia =
  document.getElementById(
    "inputContrasenia"
  ); /* obtengo el input de la contraseña */
const inputRepetirContrasenia = document.getElementById(
  "inputRepetirContrasenia"
); /* obtengo el input del repetir contraseña */

const errorUsuario =
  document.getElementById(
    "errorUsuario"
  ); /* Obtengo los divs de los mensajes de errores */
const errorContrasenia = document.getElementById("errorContrasenia");
const errorRepetirContrasenia = document.getElementById(
  "errorRepetirContrasenia"
);
/* Ocultamos los divs de mensajes de errores */
errorUsuario.classList.add("d-none");
errorContrasenia.classList.add("d-none");
errorRepetirContrasenia.classList.add("d-none");

const objUsuario = {
  usuario: "",
  contrasenia: "",
  repetirContrasenia: "",
};

const cambiosInputs = (evento) => {
  const { name, value } = evento.target;
  objUsuario[name] = value;

  if (name === "usuario" && value !== "") {
    inputUsuario.classList.remove("is-invalid");
    errorUsuario.classList.add("d-none");
  } else if (name === "contrasenia" && value !== "") {
    errorContrasenia.classList.add("d-none");
  } else if (name === "repetirContrasenia" && value !== "") {
    errorRepetirContrasenia.classList.add("d-none");
  }
};

const enviarRegistro = (ev) => {
  ev.preventDefault();
  const { usuario, contrasenia, repetirContrasenia } = objUsuario;

  if (!usuario && !contrasenia && !repetirContrasenia) {
    errorUsuario.classList.remove("d-none");
    errorContrasenia.classList.remove("d-none");
    errorRepetirContrasenia.classList.remove("d-none");
  }
  if (!usuario) {
    inputUsuario.classList.add("is-invalid");
    errorUsuario.classList.remove("d-none");
  }
  if (!contrasenia) {
    errorContrasenia.classList.remove("d-none");
  }
  if (!repetirContrasenia) {
    errorRepetirContrasenia.classList.remove("d-none");
  }

  if (usuario && contrasenia && repetirContrasenia) {
    if (contrasenia === repetirContrasenia) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

      const newUser = {
        id,
        usuario,
        contrasenia,
        role: "admin",
        login: true,
        deleted: false,
      };

      users.push(newUser);
      inputUsuario.value = "";
      inputContrasenia.value = "";
      inputRepetirContrasenia.value = "";

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(newUser));

      Swal.fire(
        "Registro Exitoso!",
        "te redireccionaremos en 1 segundo!",
        "success"
      );

      setTimeout(() => {
        location.href = "../html/user.html";
      }, 1000);

      console.log(users);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las Contraseñas no coinciden!",
      });
    }
  }
};

inputUsuario.addEventListener("input", cambiosInputs);
inputContrasenia.addEventListener("input", cambiosInputs);
inputRepetirContrasenia.addEventListener("input", cambiosInputs);

botonRegistro.addEventListener("click", enviarRegistro);
/* 123456789 - 2#asd54as5d$$$a6d54a8as9d */
/* setTimeout(() => {
  titulo.innerText = "Hola Mundo";
}, 3000);

const p = document.createElement("p");
p.innerText = "Soy un parrafo desde JS";
divPrincipal.appendChild(p);

const funcionBoton = () => {
  alert("Click");
};

const funcionEjecutadaHtml = () => {
  console.log("html");
};

botonGoId.addEventListener("click", funcionBoton); */
