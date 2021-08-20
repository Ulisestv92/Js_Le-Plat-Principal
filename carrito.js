function renderizarProductos() {
  const productos = JSON.parse(localStorage.getItem("productos"));

  console.log(productos);

  var contenedor = $("#productos ul")[0];

  for (let i = 0; i < productos.length; i++) {
    const producto = $("<div>").prop({
      className: "card",
    });

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

    nombre.appendTo(producto);
    tipo.appendTo(producto);
    precio.appendTo(producto);

    producto.appendTo(contenedor);
  }
}

renderizarProductos();




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