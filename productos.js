console.log("Estamos en la pagina de productos!");

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
    alert(
      `Elegiste ${this.nombre} es una ${this.tipo} y cuesta ${this.precio} pesos`
    );
  }
}

const Conserva1 = new Producto("Pepinos agridulces", 1, "conserva", 250);
const Conserva2 = new Producto("Ajos confitados", 2, "conserva", 330);
const Conserva3 = new Producto("Berenjenas al escabeche", 3, "conserva", 375);
const Comida1 = new Producto("Guiso de lentejas", 4, "plato", 350);
const Comida2 = new Producto("Paella", 5, "plato", 420);
const Comida3 = new Producto("Entraña con arroz Indio", 6, "plato", 400);

let Productos = [];
Productos.push(Conserva1);
Productos.push(Conserva2);
Productos.push(Conserva3);
Productos.push(Comida1);
Productos.push(Comida2);
Productos.push(Comida3);

function mostrarProducto(eleccion) {
  for (let Producto of Productos) {
    if (eleccion == Producto.id) {
      Producto.describirProducto();
      return;
    } else {
      console.log("id equivoco");
    }
  }
}

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);

  let card = cards[i];

  const posicion = i + 1;

  card.onclick = function (e) {
    mostrarProducto(posicion);
  };
}
