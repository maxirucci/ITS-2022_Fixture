//Creamos un array con usuarios random
const usuarios = [{
        id: 1,
        name: "juan",
        password: "123",
    },
    {
        id: 2,
        name: "pedro",
        password: "1234",
    },
    {
        id: 3,
        name: "pablo",
        password: "12345",
    },
    {
        id: 4,
        name: "esteban",
        password: "12",
    },
];

//Metodo que verifica los datos y si son correctos redirecciona al fixture
var verificarDatos = function() {
    console.log("verificarDatos");
    var usuarioLogin = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    var sigue = true;
    var i = 0;

    if (usuarioLogin == '') {
        alert("Ops! Te falta el usuario crack");
    }
    if (pass == '') {
        alert("Ops! Te falta  el pass crack");
    }
    const resultName = usuarios.find(usuario => usuario.name == usuarioLogin);
    console.log(resultName);

    if (resultName.password != pass) {
        alert("Ops! PASS INCORRECTA");
    }

    if (resultName.password == pass) {
        location.href = "home.html";
    }

}