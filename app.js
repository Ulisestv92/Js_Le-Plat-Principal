const listadoProductos = [
  {
    id: 1,
    nombre: "Guiso de lentejas",
    precio: 350,
    tipo: "Plato",
    img: "foodpics/lentil_stew.jpeg",
  },
  {
    id: 2,
    nombre: "Paella",
    precio: 420,
    tipo: "Plato",
    img: "foodpics/paella.jpg"
  },
  {
    id: 3,
    nombre: "Entraña con arroz Indio",
    precio: 400,
    tipo: "Plato",
    img: "foodpics/thinskirt_rice.jpg"
  },
  {
    id: 4,
    nombre: "Pepinos agridulces",
    precio: 250,
    tipo: "Conserva",
    img: "foodpics/pickled_cucumber1.jpeg",
  },
  {
    id: 5,
    nombre: "Ajos confitados",
    precio: 330,
    tipo: "Conserva",
    img: "foodpics/garlic_confit3.jpeg"
  },
  {
    id: 6,
    nombre: "Berenjenas al escabeche",
    precio: 375,
    tipo: "Conserva",
    img: "foodpics/eggplant_1.jpeg"
  },
];



// let consultaUsuario = confirm("Es tu primera vez en nuestro sitio web?");

// if (consultaUsuario == true) {
//     console.log(String(prompt("Por favor, ingresa tu correo electrónico así podemos enviarte nuestras novedades y promociones")));
// } else {
//         console.log(alert("Perfecto, confirmamos que te tenemos en nuestros registros del Newsletter!"));
//     }

class Producto {
  constructor(nombre, id, tipo, precio) {
    this.nombre = nombre;
    this.id = id;
    this.tipo = tipo;
    this.precio = precio;
  }

  iva() {
    let calculoDeIva = this.precio * 0.21;
    return calculoDeIva;
  }

  totalConIva() {
    let precioFinal = this.precio * 0.21 + this.precio;
    return precioFinal;
  }

  // cuotas (cantidad) {
  //     let resultado = ((this.precio * 1.21) / cantidad)
  //     return resultado;
  // }

  describirProducto() {
    console.log(
      `Elegiste ${this.nombre} es una ${this.tipo} y cuesta ${this.precio} pesos`
    );
  }
}

function guardarLocal() {
  let aJson = JSON.stringify(Productos);
  localStorage.setItem("productos", aJson);
}


function mostrarProducto(eleccion) {
  for (let Producto of Productos) {
    if (eleccion == Producto.id) {
      console.log(Producto.describirProducto());
      return;
    } else {
      console.log("id equivoco");
    }
  }
}

// DOM

let sumaHeader = document.getElementsByClassName("section__header1");
console.log(sumaHeader);
sumaHeader[0].innerHTML = "Disfruta la vida, es simplemente deliciosa!";

let sumaCardTitle = document.getElementsByClassName("card-title");
console.log(sumaCardTitle[10]);
sumaCardTitle[10].innerHTML = "Inspirate y dejate llevar";

let footerList = document.getElementsByClassName("footer__list")[0];
console.log(footerList);

let listItem = document.createElement("li");

listItem.textContent = "Aviso legal";
listItem.classList = "footer_item";

footerList.appendChild(listItem);

console.log(listItem);

/* llamados de funciones */

window.onload = function () {
};
  //alert("Bienvenid@ a Le Plat Principal");
  //Pedir y guardar nombre
  /*let nombre = String(
    prompt("Bienvenido a Le Plat Principal, como te llamas?")
  );
  localStorage.setItem("nombre", nombre);

  //Pedir y guardar Email
  let email = String(prompt("Ingresa tu correo electrónico"));
  localStorage.setItem("email", email);
  */
  //saludoCompleto(nombre);
  //guardarLocal();
  /*const tipoProductoElegido = prompt(
    "Que tipo de producto buscas, un plato o una conserva?"
  );*/
  /*const productofiltrados = filtrarProductosPorTipo(tipoProductoElegido);

  console.log(Productos);
  console.log(productofiltrados);
  */
  /*
  if (productofiltrados.length > 0) {
    alert("se encontraron " + productofiltrados.length + " productos.");
  } else {
    alert("No se encontraron productos del tipo " + tipoProductoElegido);
  }*/
  /*
  const eleccion = Number(
    prompt(
      "Se encontraron"
    )
  );

  mostrarProducto(eleccion)



  ;*/


let productos = [];
localStorage.setItem("productos",JSON.stringify(productos));
const botonesDeComprar = $(".add-to-cart");

botonesDeComprar.click(function (event) {
  event.preventDefault();

  const elementId = $(event.target).parents(".card")[0].id;

      let prod =  listadoProductos.filter((elem)=> elem.id == elementId)[0]
      
      console.log(prod);

      let productosAgregados = JSON.parse(localStorage.getItem("productos"));
      
      productosAgregados.push(prod)

      localStorage.setItem("productos", JSON.stringify(productosAgregados));
    
  
});

console.log(botonesDeComprar);



// Usuarios newsletter

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

let usuariosNewsletter = [];

// Selectores 

let btnEnviarNews = document.getElementById("enviarNews");

// GuardarDatos

function guardarUsuarios () {
  let email = document.getElementById("email").value 

  let usuario = new Usuario(email)

  usuariosNewsletter.push(usuario)

  localStorage.setItem("usuariosNewsletter", JSON.stringify(usuariosNewsletter))

}


function imprimirUsuarios () {
  let imprimir = JSON.parse(localStorage.getItem("usuariosNewsletter"))
  console.log(imprimir)
  guardarUsuarios ()
  alert("Gracias por suscribirte al newsletter!")

}

let botonEnviarNews = document.getElementById("enviarNews");
botonEnviarNews.addEventListener("click", imprimirUsuarios);



// function validarEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// function validar() {
//   const $result = $("#result");
//   const email = $("#email").val();
//   $result.text("");

//   if (validarEmail(email)) {
//     $result.text(email + " es valido :)");
//     $result.css("color", "verde");
//   } else {
//     $result.text(email + " no es valido :(");
//     $result.css("color", "rojo");
//   }
//   return false;
// }

// $("#email").on("input", validar);