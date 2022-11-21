import { bdUsuario } from './shared/firebase.service.js';

//Ir a página de registrar usuario
const btnGoRegistrar = document.getElementById('btn-registrar');
btnGoRegistrar.addEventListener('click', () => {
    location.href = "crearUser.html";
})


//Metodo que verifica los datos y si son correctos redirecciona al fixture
const btnVerificarDatos = document.getElementById('btnVerificarDatos');
btnVerificarDatos.addEventListener('click', async () => {
    console.log("Verificando datos...");

    var usuarioLogin = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    
    if (usuarioLogin == '') {
        return alert("Ops! Te falta el usuario crack");

    }
    if (pass == '') {
        return alert("Ops! Te falta  el pass crack");
    }

    let lista_usuarios = [];
    const usuarios = await bdUsuario();
    usuarios.forEach(element => {
        lista_usuarios.push(element.data());
    });

    const resultName = lista_usuarios.find(usuario => usuario.usuario == usuarioLogin);

    if(!resultName){
        return alert("Ops! Usuario inexistente, por favor ingresa uno veridico masa o create uno");
    }

    if(!!resultName){
        if (resultName.pass != pass) {
            return alert("Ops! PASS INCORRECTA");
        }
        if (resultName.pass == pass) {
            location.href = "home.html";
            localStorage.setItem('usuario', usuarioLogin);
        }
    }
})