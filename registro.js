import { guardarUsuarioDB } from './shared/firebase.service.js';

//Volver a página index
const btnGoIndex = document.getElementById('btn-volver');
btnGoIndex.addEventListener('click', () => {
  location.href = "index.html";
})

// Regsitrar usuario
const btnRegistrar = document.getElementById('btn-registrar');
btnRegistrar.addEventListener('click', () => {
  console.log("Registrando usuario...")
  //Datos
  var usuarioLoginC = document.getElementById("userC").value;
  var passC = document.getElementById("passC").value;
  var passC_repeat = document.getElementById("passC-repeat").value;

  //Verificaciones
  if (usuarioLoginC === '') {
    alert("Ops! Te falta el usuario");
  }
  if (passC === '' || passC_repeat === '') {
    alert("Ops! Te falta el pass");
  }

  if (passC !== passC_repeat)
    return alert("Las contraseñas no coinciden")

  //Si esta todo => Registramos el usuario.
  guardarUsuarioDB('nombre', usuarioLoginC, passC)
    .then(() => {
      alert("Usuario registrado correctamente");
      location.href = "index.html";
    })
    .catch((error) => {
      alert("Algo salio mal!");
      console.log(error);
    })
})