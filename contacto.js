
// Usuarios

class Usuario {
    constructor(email, nombre, direccion, direccion2, ciudad, provincia, cp){
    this.email = email;
    this.nombre = nombre;
    this.direccion = direccion;
    this.direccion2 = direccion2;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.cp = cp;
    }

}

// Array de Usuarios

let usuarios = [];

// Selectores 

let btnEnviar = document.getElementById("enviar");

// GuardarDatos

function guardarUsuarios () {
    let email = document.getElementById("email").value 
    let nombre = document.getElementById("nombre").value
    let direccion = document.getElementById("direccion").value
    let direccion2 = document.getElementById("direccion2").value
    let ciudad = document.getElementById("ciudad").value
    let provincia = document.getElementById("provincia").value
    let cp = document.getElementById("cp").value

    let usuario = new Usuario(email, nombre, direccion, direccion2, ciudad, provincia, cp)

    usuarios.push(usuario)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    let enunciado = document.createElement("p");
    enunciado.innerHTML = `<p>Gracias ${nombre} por completar el formulario</p>`

}


function imprimirUsuarios () {
    let imprimir = JSON.parse(localStorage.getItem("usuarios"))
    console.log(imprimir)
    alert("Gracias por completar el formulario")

}

imprimirUsuarios();

let botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", imprimirUsuarios);


function movMouse () {
    console.log("movimiento del mouse")
}

let botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("mouseover", movMouse);






    // imprimir.forEach(element => {


//     }

//     array.forEach(element => {
        
//     });
// }



// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);


// function validarFormulario(e) {
//     e.preventDefault();

//     let formulario = e.target;

//     console.log(formulario.children[0].value);  //email
//     console.log(formulario.children[1].value);  //nombre completo
//     console.log(formulario.children[2].value);  //direccion
//     console.log(formulario.children[3].value);  //direccion#2
//     console.log(formulario.children[4].value);  //ciudad
//     console.log(formulario.children[5].value);  //provincia
//     console.log(formulario.children[6].value);  //codigo postal 

