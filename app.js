const listadoProductos = [
  {
    id: 1,
    nombre: "Guiso de lentejas",
    precio: 350,
    tipo: "plato",
  },
  {
    id: 2,
    nombre: "Paella",
    precio: 420,
    tipo: "plato",
  },
  {
    id: 3,
    nombre: "Entraña con arroz Indio",
    precio: 400,
    tipo: "plato",
  },
  {
    id: 4,
    nombre: "Pepinos agridulces",
    precio: 250,
    tipo: "conserva",
  },
  {
    id: 5,
    nombre: "Ajos confitados",
    precio: 330,
    tipo: "conserva",
  },
  {
    id: 6,
    nombre: "Berenjenas al escabeche",
    precio: 375,
    tipo: "conserva",
  },
];

function saludoCompleto(nombre) {
  return alert(
    `Hola ${nombre}, esperamos te tientes con todos nuestros productos!`
  );
}

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

// const Comida1 = new Producto("Guiso de lentejas", 1, "plato", 350);
// const Comida2 = new Producto("Paella", 2, "plato", 420);
// const Comida3 = new Producto("Entraña con arroz Indio", 3, "plato", 400);

// const Conserva1 = new Producto("Pepinos agridulces", 4, "conserva", 250);
// const Conserva2 = new Producto("Ajos confitados", 5, "conserva", 330);
// const Conserva3 = new Producto("Berenjenas al escabeche", 6, "conserva", 375);

// let Productos = [];

// Productos.push(Comida1);
// Productos.push(Comida2);
// Productos.push(Comida3);
// Productos.push(Conserva1);
// Productos.push(Conserva2);
// Productos.push(Conserva3);

// console.log(Productos);

// const guardarComidas = ("Comida", Comida) => { localStorage.setItem("Comida", Comida)};

// for (const Comida of Comidas) {
//     guardarComidas(Comida.id, JSON.stringify(Comidas));
// }

// console.log(Comidas);

// console.log(Comidas.find(Comida => Comida.id == eleccion));

// console.log(Comidas.sort(Comida => Comida.tipo));

function filtrarProductosPorTipo(tipoProductoElegido) {
  let productosFiltrados = Productos.filter(
    (producto) => producto.tipo == tipoProductoElegido
  );
  return productosFiltrados;
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
};

/*



console.log(Productos);


alert(
  "Antes de proseguir, nos gustaría contar con tu correo electrónico para poder enviarte novedades y promociones, estas de acuerdo?"
);

alert(
  "A continuacion, te mostraremos nuestras opciones de platos y de conservas"
);



*/

const botonesDeComprar = $(".add-to-cart");

botonesDeComprar.click(function (event) {
  event.preventDefault();

  const elementId = $(event.target).parents(".card")[0].id;

  for (let i = 0; i < listadoProductos.length; i++) {
    if (listadoProductos[i].id === Number(elementId)) {
      console.log("aca es donde tengo que agregar al local storage :)");
      console.log(listadoProductos[i]);

      let productosAgregados = JSON.parse(localStorage.getItem("productos"));

      if (productosAgregados) {
        productosAgregados.push(listadoProductos[i]);
      } else {
        productosAgregados = [listadoProductos[i]];
      }

      localStorage.setItem("productos", JSON.stringify(productosAgregados));
    }
  }
});

console.log(botonesDeComprar);
