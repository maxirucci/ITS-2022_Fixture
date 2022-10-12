//Creamos un array con usuarios random
const usuarios = [
    {
      id: 1,
      name: "Juan",
      password: "123",
    },
    {
      id: 2,
      name: "Pedro",
      password: "1234",
    },
    {
      id: 3,
      name: "Pablo",
      password: "12345",
    },
    {
      id: 4,
      name: "Esteban",
      password: "12",
    },
  ];

//Metodo que verifica los datos y si son correctos redirecciona al fixture
var verificarDatos = function(){
    let usuario = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    var sigue = true;
    var i = 0;

    if (usuario == ''){
        alert("Ops! Te falta el usuario crack"); 
    }
    if(pass == ''){
        alert("Ops! Te falta  el pass crack");  
    }
    const resultName = usuarios.find( usuarios => usuarios.name === usuario);

    if(resultName.password != pass ){
      alert("Ops! PASS INCORRECTA");
    } 

    if(resultName.password == pass){
      location.href ="index.html";
    }
    
    }
    


