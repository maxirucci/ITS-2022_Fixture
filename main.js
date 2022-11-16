import { guardarUsuarioDB } from './shared/firebase.service.js'; 
import { bdUsuario } from './shared/firebase.service.js'; 

//Creamos un array con usuarios random
// const usuarios = [{
//         id: 1,
//         name: "juan",
//         password: "123",
//     },
//     {
//         id: 2,
//         name: "pedro",
//         password: "1234",
//     },
//     {
//         id: 3,
//         name: "pablo",
//         password: "12345",
//     },
//     {
//         id: 4,
//         name: "esteban",
//         password: "12",
//     },
// ];

//Metodo que verifica los datos y si son correctos redirecciona al fixture
const btnVerificarDatos = document.getElementById('btnVerificarDatos');
btnVerificarDatos.addEventListener('click', async () => {

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
        }
    }
})
    

//     console.log("verificarDatos");
//     var usuarioLogin = document.getElementById("user").value;
//     let pass = document.getElementById("pass").value;

//     if (usuarioLogin == '') {
//         alert("Ops! Te falta el usuario crack");
//     }
//     if (pass == '') {
//         alert("Ops! Te falta  el pass crack");
//     }
//     const resultName = usuarios.find(usuario => usuario.name == usuarioLogin);
//     console.log(usuarios);

//     if(!resultName){
//         alert("Ops! Usuario inexistente, por favor ingresa uno veridico masa o create uno");
//     }

//     if(!!resultName){
//         if (resultName.password != pass) {
//             alert("Ops! PASS INCORRECTA");
//         }
//         if (resultName.password == pass) {
//             location.href = "home.html";
//         }
//     }
// }

// var goToCrear = function(){
//     location.href = "crearUser.html";
// }

// var goToBack = function(){
//     location.href = "index.html";
// }

const btnRegistrar = document.getElementById('btn-registrar');
btnRegistrar.addEventListener('click', () => {
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
            alert("User creado: " + usuarios.length);
            location.href = "index.html";
        })
        .catch((error) => {
            alert("Algo salio mal!");
            console.log(error);
        })
})

// var verificarCreacion = function(){
//     var usuarioLoginC = document.getElementById("userC").value;
//     var passC = document.getElementById("passC").value;
//     var passC_repeat = document.getElementById("passC-repeat").value;
//     var puedeavanzar = true;

//     if (usuarioLoginC == '') {
//         alert("Ops! Te falta el usuario");
//     }
//     if (passC == '') {
//         alert("Ops! Te falta el pass");
//     }

//     if (passC !== passC_repeat)
//         return alert("Las contraseñas no coinciden")

//     const resultName = usuarios.find(usuario => usuario.name === usuarioLoginC);
//     console.log(resultName);
//     if (!!resultName) {
//         alert("Ops! USUARIO EXISTENTE");
//         puedeavanzar = false;
//     }

//     ///! Que raaaaaro!
//     // const resultPass = usuarios.find(usuario => usuario.password === passC);
//     // if (!!resultPass) {
//     //     alert("Ops! PASSWORD EXISTENTE");  
//     //     puedeavanzar = false;
//     // }

//     if(!!puedeavanzar){
//         alert("User creado: "+usuarios.length);  
//         var usuarioNew = {
//             id: usuarios.length + 1,
//             name: usuarioLoginC,
//             password: passC
//         }
//         usuarios.push(usuarioNew);
//         console.log(usuarios);
//     }
    
// }