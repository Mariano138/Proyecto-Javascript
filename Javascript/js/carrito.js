productosEnCarrito =
  JSON.parse(localStorage.getItem("productosEnCarrito")) || [];

// DOM
const contenedorCarrito = document.getElementById("carrito-container");
const cuerpoCarrito = document.getElementById("cuerpo-carrito");
const eliminarComprar = document.getElementById("comprar-eliminar");
const mensajeCarrito = document.getElementById("mensaje-carrito");
const botonComprar = document.getElementById("boton-comprar");
const botonBorrar = document.getElementById("boton-borrar");
const agradecer = document.getElementById("agradecimiento-carrito");

//BORRAR TODO EL CARRITO
botonBorrar.addEventListener("click", borrarCarrito);

function borrarCarrito() {
  productosEnCarrito = [];

  localStorage.removeItem("productosEnCarrito");

  botonesComprarEliminar();
}

//BOTON COMPRAR CARRITO

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
  Swal.fire({
    title: "¿Desea confirmar la compra?",
    showCancelButton: true,
    confirmButtonText: "Comprar",
    confirmButtonColor: "#198754",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#dc3545",
  }).then((result) => {
    if (result.isConfirmed) {
      productosEnCarrito = [];

      localStorage.removeItem("productosEnCarrito");

      agradecimiento();
    }
  });
}

//

function agradecimiento() {
  contenedorCarrito.innerHTML = "";
  cuerpoCarrito.classList.add("d-none");
  agradecer.classList.remove("d-none");
  eliminarComprar.classList.add("d-none");
}

// Itera sobre los productos en el carrito y crea elementos HTML
productosEnCarrito.forEach((producto) => {
  const productoDiv = document.createElement("div");
  productoDiv.classList =
    "bg-dark p-3 border border-5 rounded-4 col-5 col-md-4 col-lg-3";
  productoDiv.innerHTML = `
  <img src="${producto.img}" width="100" height="150" class="rounded-3"/>
  <p>${producto.nombre}</p>
  <p>Precio:$${producto.precio}</p>
  <button id="${producto.id}" class="btn btn-danger boton-eliminar">
  Eliminar
  </button>`;
  contenedorCarrito.appendChild(productoDiv);
});

function botonesComprarEliminar() {
  if (productosEnCarrito.length == 0) {
    contenedorCarrito.innerHTML = "";
    eliminarComprar.classList.add("d-none");
    cuerpoCarrito.classList.add("d-none");
    mensajeCarrito.classList.remove("d-none");

    //TOASTIFY
    Toastify({
      text: "Carrito vacio.",
      duration: 1500,
      destination: "./index.html",
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#d90429",
      },
      onClick: function () {},
    }).showToast();
  }
}
botonesComprarEliminar();

//Funcionamiento de mis botones eliminar del carrito

const botonEliminar = document.querySelectorAll(".boton-eliminar");

botonEliminar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Obtengo el ID del producto a eliminar desde el botón o cualquier atributo relevante
    const productoIdAEliminar = e.currentTarget.id;

    // Encuentro el índice del producto en el array de productosEnCarrito
    const indiceAEliminar = productosEnCarrito.findIndex(
      (producto) => producto.id === productoIdAEliminar
    );

    // Verifico si se encontró el producto
    if (indiceAEliminar !== -1) {
      // Elimino el producto del array utilizando splice
      productosEnCarrito.splice(indiceAEliminar, 1);
      calcularTotal();

      //TOASTIFY

      Toastify({
        text: "Producto eliminado.",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#d90429",
        },
        onClick: function () {},
      }).showToast();

      // Actualizo el localStorage con el nuevo array de productosEnCarrito
      localStorage.setItem(
        "productosEnCarrito",
        JSON.stringify(productosEnCarrito)
      );
      // Accedo al contenedor del producto y elimínalo visualmente del DOM
      const contenedorProducto = e.currentTarget.closest(".container-fluid");

      //Actualizo la pagina si mi carrito esta vacio
      botonesComprarEliminar();

      if (contenedorProducto) {
        contenedorProducto.remove();
      }
    } else {
      console.log("No se encontró el producto en el carrito");
    }
  });
});

// Función para calcular el total de productos en el carrito
function calcularTotal() {
  // Recorro todos los productos en el carrito y sumo sus precios
  const total = productosEnCarrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );

  // Actualizo la interfaz de usuario con el total
  document.getElementById("total-carrito").innerText = `Total: $${total} ARS`;
}

calcularTotal();
