// Array para guardar mis productos

const productos = [];

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
const cards = document.getElementById("card");
const botonAnimal = document.querySelectorAll(".boton-animal");
const botonCategoria = document.querySelectorAll(".boton-categoria");

//Function de cargar productos

function cargarProductos(productosElegidos) {
  productosElegidos.forEach((x) => {
    let div = document.createElement("div");
    div.classList = "py-2 d-flex justify-content-center";
    div.innerHTML = `<div id="card" class="row border border-2 border-grey rounded w-100 p-2 align-self-center">
               <div id="card-img" class="col-4 align-self-center">
               <img src="${x.img}" class="img-fluid rounded align-middle"/>
               </div>
               <div class="col-8 d-flex justify-content-center text-center">
               <div id="card-body" class="card-body">
                  <h5 class="card-title fw-bolder fs-4">${x.nombre}</h5>
                 <div class="col-12 d-flex gap-3 fw-bold">
                   <p>Edad: ${x.edad}</p>
                   <p>Sexo: ${x.sexo}</p>
                 </div>
                 <p class="card-text fs-5 fw-bold">
                   Precio: <button class="btn btn-dark">${x.precio}</button>
                  </p>
               </div>
              </div>
              </div>
              </div>`;
    cards.appendChild(div);
  });
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
