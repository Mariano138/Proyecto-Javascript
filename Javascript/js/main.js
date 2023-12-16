// Array para guardar mis productos

const productos = [];
let productosEnCarrito =
  JSON.parse(localStorage.getItem("productosEnCarrito")) || [];

//Llmado de mi Json

fetch("./js/productos.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      productos.push({
        img: x.img,
        nombre: x.nombre,
        edad: x.edad,
        sexo: x.sexo,
        categoria: x.categoria,
        cantidad: x.cantidad,
        todo: x.todo,
        subcategoria: x.subcategoria,
        precio: x.precio,
        id: x.id,
      });
    });
    localStorage.setItem("productos", JSON.stringify(productos));
  });
const productoEnLs = JSON.parse(localStorage.getItem("productos"));

//Manejo de DOOOOM
const cards = document.getElementById("card-body");
const botonAnimal = document.querySelectorAll(".boton-animal");
const botonCategoria = document.querySelectorAll(".boton-categoria");
let agregarAlCarrito = document.querySelectorAll(".agregar-carrito");
const numeroCarrito = document.getElementById("numero-carrito");

// BOTONES DE AÑADIR AL CARRITO

function actualizarBotones() {
  agregarAlCarrito = document.querySelectorAll(".agregar-carrito");
  agregarAlCarrito.forEach((botonAgregar) => {
    botonAgregar.addEventListener("click", agregar);
  });
}

//Function de cargar productos

function cargarProductos(productosElegidos) {
  productosElegidos.forEach((x) => {
    let div = document.createElement("div");
    div.classList =
      "col-5 col-md-4 col-lg-3 text-center border border-5 rounded-4 p-2 bg-dark text-white";
    div.innerHTML = `<img src="${x.img}" class="rounded-3" height="150" width="100"/>
                     <h5>${x.nombre}</h5>
                     <p>Precio:${x.precio}</p>
                     <p>Sexo:${x.sexo}</p>
                     <button id="${x.id}" class="btn btn-success agregar-carrito">Agregar al carrito</button>`;
    cards.appendChild(div);
  });
  actualizarBotones(productosElegidos);
}

cargarProductos(productoEnLs);

//Funcionalidad de mis botones (perros,gatos,etc)

let subcategoriaSeleccionada = "";

botonAnimal.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonAnimal.forEach((b) => b.classList.remove("activo"));
    e.currentTarget.classList.add("activo");

    subcategoriaSeleccionada = e.currentTarget.id;
    const productosFiltrados = productoEnLs.filter(
      (x) => x.id == subcategoriaSeleccionada
    );
    cargarProductos(productosFiltrados);
  });
});

//Funcionalidad de mis botones (todo,animal,etc)

botonCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonCategoria.forEach((b) => b.classList.remove("activado"));
    e.currentTarget.classList.add("activado");
    cards.innerHTML = "";

    const categoriaSeleccionada = e.currentTarget.id;

    if (categoriaSeleccionada != "todo") {
      const productosFiltrados = productoEnLs.filter(
        (x) =>
          x.categoria == categoriaSeleccionada &&
          x.subcategoria == subcategoriaSeleccionada
      );

      cargarProductos(productosFiltrados);
    } else {
      const todo = productoEnLs.filter(
        (x) =>
          x.todo == categoriaSeleccionada &&
          x.subcategoria == subcategoriaSeleccionada
      );
      cargarProductos(todo);
    }
  });
});

//funcion de mis botones agregar al carrito

function agregar(e) {
  if (e.currentTarget) {
    const productoId = e.currentTarget.id;

    const productoSeleccionado = productoEnLs.find((x) => x.id == productoId);
    const productoYaExiste = productosEnCarrito.find((x) => x.id == productoId);

    if (productoYaExiste) {
      console.log("el producto ya existe en el carrito");
      Toastify({
        text: "Este producto ya existe en el carrito.",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#242323",
        },
        onClick: function () {},
      }).showToast();
    } else {
      //pusheo las cosas a mi array de carrito
      productosEnCarrito.push(productoSeleccionado);
      //guardo en local storage mi carrito
      localStorage.setItem(
        "productosEnCarrito",
        JSON.stringify(productosEnCarrito)
      );
      Toastify({
        text: "Agregado al carrito",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#242323",
        },
        onClick: function () {},
      }).showToast();
      actualizarNumero();
    }
  } else {
    console.error("e.currentTarget es nulo o indefinido");
  }
}

//NUMERO DEL CARRITO

function actualizarNumero() {
  const numero = productosEnCarrito.reduce(
    (acumulador, x) => acumulador + x.cantidad,
    0
  );

  numeroCarrito.innerText = ` ${numero}`;
}

actualizarNumero();
