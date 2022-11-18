const tituloModal = document.getElementById('titulo-modal');
const mostrarUsuario = document.getElementById('btn-mostrar-usuario');

mostrarUsuario.addEventListener('click', () => {
  tituloModal.innerText = (localStorage.getItem('usuario')).toUpperCase();
})

const btnEnviarContacto = document.getElementById('btn-enviar-contacto');
btnEnviarContacto.addEventListener('click', () => {
  alert("Gracias por tu comentario.");
  location.href = "home.html";
})

const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
btnCerrarSesion.addEventListener('click', () => {
  location.href = "index.html";
  localStorage.clear();
})