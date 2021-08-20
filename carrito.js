function renderizarProductos() {
  const productos = JSON.parse(localStorage.getItem("productos"));

  console.log(productos);

  var contenedor = $("#productos")[0];

  for (let i = 0; i < productos.length; i++) {
    const producto = $("<div>").prop({
      className: "card",
    });
    console.log(productos[0].nombre)
    console.log(productos)
    const nombre = $("<h3>").prop({
      innerHTML: productos[i].nombre,
      className: "card-title",
    });

    const tipo = $("<p>").prop({
      innerHTML: productos[i].tipo,
      className: "card-description",
    });

    const precio = $("<p>").prop({
      innerHTML: productos[i].precio,
      className: "card-price",
    });

    const img = $("<img>")
    img.attr("src", productos[i].img)
    



    nombre.appendTo(producto);
    tipo.appendTo(producto);
    precio.appendTo(producto);
    img.appendTo(producto);

    producto.appendTo(contenedor);
  }
}

renderizarProductos();

 function removerItems (){
  let arrayVacio=[]

  console.log("entre al remover items")
localStorage.setItem("productos", JSON.stringify(arrayVacio))
var contenedor = $("#productos").html('')


}

$("#btn1").click(removerItems) 

function sumaTotal(){

  const productos = JSON.parse(localStorage.getItem("productos"));

  let suma = productos.reduce((acc,elem)=>{
    return acc + Number(elem.precio)
  },0)
  
  return suma
}

let newA = document.createElement("a")
newA.textContent = `La suma es ${sumaTotal()}`
$("#mostrarSuma")[0].appendChild(newA)

function evento1 (){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px',
  });
}

function evento2 (){
  $("#box").hide()
}


$("#btn1").on("animate", evento1)

// $("#btn2").on("click", evento2)

// $("btn1").click(function(){
//   $("div").animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px',
//       width: '150px',
//     });
//   });