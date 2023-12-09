//////////// Clase 1 /////////

// let nombre = "CHELCHI";

// console.log(nombre);

// let numeroA = 1;
// let numeroB = 2;
// let numeroC = 3;

// let suma = numeroA + numeroB;
// console.log(suma);

// let resta = numeroA - numeroB;
// console.log(resta);

// let multi = numeroB * numeroC;
// console.log(multi);

// let textoA = "Coder";
// let textoB = "House";

// let resultadoA = textoA + textoB;
// console.log(resultadoA);

// let resultadoB = textoA + " " +textoB;
// console.log(resultadoB);

// let resultadoC = "Bienvenido a " + textoA + " " + textoB;
// console.log(resultadoC);

// let nombre = prompt("Porfavor Ingrese su nombre")
// console.log(nombre);

// alert("Hola " + nombre)

////////// ACTIVIDAD ////////////

// let numero1 = parseInt(prompt("Ingrese un numero"));

// let numero2 = parseInt(prompt("Porfavor ingrese otro numero"))

// let resultado = numero1 * numero2;

// alert("resultado de su multiplicacion es " + resultado)

//////////// CLASE 2 ////////////////////

// let numero = 4;

// if(numero == 4) {
//     console.log("Es verdadero");
// }

// if(numero == 5){
//     console.log("es falso");
// }

// let nombre = prompt("Ingrese su nombre");

// if(nombre == "") {
//     console.log("Porfavor ingrese un nombre");
// } else {
//     console.log("bienvenido " + nombre);
// }

// let precio = 70;

// if (precio < 20) {
//     console.log("El precio es menor a 20");
// } else if(precio < 50) { console.log("El precio es menor a 50");
// } else if(precio < 100) {
//     console.log("El precio es menor a 100");
// } else {
//     console.log("El precio es mayor a 150");
// }

//// Operador &&

// let ingreseNombre = prompt("Nombre")

// let apellido = prompt("apellido")

// if ( (ingreseNombre != "") && (apellido != "")) {
//      console.log("Hola " + ingreseNombre + " " + apellido);
// } else {
//     console.log("Porfavor complete los campos");
// }

/////// Operador or

// let color = "rojo";

// if((color == "rojo") || (color == "azul")) {
//     console.log("Verdadero");
// } else {
//     console.log("Falso");
// }

//////// OR Y && combinados

// let nombreUsuario = prompt("Ingrese su nombre de usuario");

// if((nombreUsuario != "") && (nombreUsuario == "Ema") || (nombreUsuario == "ema") || (nombreUsuario == "EMA")) {
//     console.log("Hola Ema");a
// } else {
//     console.log("Ingrese un usuario valido");
// }

/// desafio

// let numero = parseInt(prompt("Ingrese un numero"));

// if(numero >= 1000) {
//     console.log("su numero es mayor a 1000");
// } else {
//     console.log("Su numero es menor a 1000");
// }

// let numero = parseInt(prompt("Ingrese un numero"));

// if( (numero >= 20) && (numero <= 50)) {
//     console.log("su numero esta entre 20-50");
// } else {
//     console.log("falso");
// }

// let saludar = prompt("salude");

// if ((saludar == "hola") || (saludar == "Hola") && (saludar != "")) {
//     console.log("Hola");
// } else {
//     console.log("falso");
// }

// let usuario1 = "Michi";
// let usuario2 = "Chelchi";

// let nombreUsuario = prompt("");

// if ((nombreUsuario == usuario1) || (nombreUsuario == usuario2)) {
//     console.log("Bienvenido " + nombreUsuario);
// } else {
//     console.log("Nombre incorrecto");
// }

/////////////// Clase 3 ///////////////////////]

// FOR

// for (i = 0; i <= 10; i++) {
//     console.log("Contador " + i);
// }

// let numeroIngresado = parseInt(prompt("Ingrese un numero"));

// for (i = 0; i <= 10; i++) {
//     resultado = numeroIngresado * i;
//     console.log(numeroIngresado + " X " + i + " = " + resultado);
// }

// for (i = 1; i <= 5; i++) {
//     let nombre = prompt("Porfavor Ingrese su nombre");
//     console.log(" Turno  N° "+i+" Nombre: "+nombre);
// }

//Sentencia Break y continue
// for ( i = 1; i <= 10; i++) {

//     if( i == 5) {
//         break;
//         continue;
//     }
//     console.log(i);

// }

//WHILE

// let dato = prompt("Porfavor ingrese un dato.")

// while ( dato != "ESC") {
//    console.log("el usuario ingreso " + dato);
//    dato = prompt("Dato")

// }

// DO...WHILE

// let numero = 0;

// do {
//     numero = prompt("Ingrese un numero")
//     console.log(numero);
// } while(parseInt(numero))

//SWITCH

// let nombre = prompt("Ingrese su nombre");

// switch(nombre) {
//     case "michifus":
//         console.log("Bienvenida " + nombre);
//         break;

//     default:
//         console.log("Ingrese un nombre valido");
//         break;
// }

//switch y while combinados

// let nombre = prompt("Ingrese su nombre");

// while(nombre != "esc"){
//     switch(nombre){
//         case "Ana":
//             console.log("Hola Ana");
//             break;
//         case "Elis":
//             console.log("Hola Elis");
//             break;
//         default:
//             console.log("Nombre incorrecto.");
//             break;
//     }
//     nombre = prompt("Ingrese su nombre");
// }

// desafio

// let numeroIngresado = parseInt(prompt("Ingrese un numero"));
// for(i = 1; i < 10; i++){
//     resultado = numeroIngresado + i;
//     console.log(resultado);

// }

// let nombre = prompt("Nombre")

// for( i = 1; i < 10; i++) {
//     resultado = nombre + i;
//     nombre = prompt("Nombre")
//     console.log("su numero de turno es " + i + " Nombre " + nombre);
// }

/////////////clase 4////////////////

//Funciones

// function saludar() {
//     console.log("Hola");
// }

// saludar();

// function pedirNombre() {
//     let nombreIngresado = prompt("Porfavor ingrese su nombre.");
//     console.log("Hola " + nombreIngresado);
// }

// pedirNombre();
// pedirNombre();

////Parametros///

// function parametros(parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2);
// }

// parametros("Hola", "Michi");
// parametros("Hola", "ELIS");

//////// Ejemplo con sumar y mostrar /////////

// let resultado = 0;

// function suma(numero1, numero2){
//     resultado = numero1 + numero2;
// }

// //Funcion de mostrar

// function mostrar(mensaje){
//     console.log(mensaje);
// }

// suma(5, 5);
// mostrar(resultado);

//// RETURN ////

// //creo mi funcion de sumar
// function sumar(numero1, numero2){
//     //pido que me retorne la operacion deseada
//     return numero1 + numero2;
// }
// //declaro mi variable de suma
// let resultado = sumar(6, 6);
// console.log(resultado);

////Calculadora////

// function calculadora(primerNumero, segundoNumero, operacion){
//     switch(operacion){
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;

//     }
// }

// console.log(calculadora(6, 6, "*"));

///////////Scope//////////
//Puedo repetir variables en ambos casos porque son locales y no globales
// function sumar(num1, num2){
//     let resultado = num1 + num2;
//     return resultado
// }

// function restar(num1, num2){
//     let resultado = num1 - num2;
//     return resultado;
// }

// console.log(sumar(10, 10))
// console.log(restar(10, 10))

//FUNCIONES ANONIMAS//

// const suma = function(a, b) {return a+b }
// const resta = function(a, b){ return a-b}

// console.log(suma(10, 10));
// console.log(resta(10, 10));

//FUNCIONES FLECHA//

// const suma = (a, b) => {return a + b};
// const resta = (a, b) => {return a - b}

// console.log(suma(10, 10));
// console.log(resta(10, 10));

//CALCULO EL PRECIO FINAL DE UN PRODUCTO//

// const suma = (a, b) => {return a + b};
// const resta = (a, b) => {return a - b};
// const IVA = (a) => {return a * 0,21};

// let precioProducto = 500;
// let descuento = 50;

// console.log(resta(suma(precioProducto, IVA(precioProducto)), descuento));

///////CLASE 5 Objetos///////////

// const persona1 = {
//     nombre: "homero",
//     edad: 39,
//     direccion: "Av Siempreviva"
// }

// // console.log(persona1.nombre);
// // console.log(persona1.edad);
// // console.log(persona1.direccion);

// persona1.nombre = "marge";

// console.log(persona1.nombre);

///////Constructores

// function persona(nombre, edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }

// const homero = new persona("homero", 39, "Av.Siempreviva" )
// const marge = new persona("marge", 36, "Av.Siempreviva" )

// console.log(homero);
// console.log(marge);

///METODOS

// let saludo = "Hola coders"

// console.log(saludo.toUpperCase());

// function persona(nombre, edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//     this.hablar = function () {console.log("Hola soy " + this.nombre);}

// }

// let persona1 = new persona("Homero", 39, "Av.Siempreviva")
// persona1.hablar();

// const persona = {nombre:"Homero", edad:39, calle:"Av.Siempreviva"}

// console.log("nombre" in persona);
// console.log("nacionalidad" in persona);
// for (const propiedad in persona){
//     console.log(persona[propiedad]);
// }

// class persona{
//     constructor(nombre, edad,calle){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;
//     }
//     hablar(){
//         console.log("Hola soy " + this.nombre);
//     }
// }

// const persona1 = new persona("Homero", 39, "Av.Siempreviva")

// console.log(persona1);
// persona1.hablar()

// class producto {
//     constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase(),
//         this. precio = parseFloat(precio)
//         this.vendido = false
//     }
//     IVA(){
//         console.log(this.precio = this.precio * 0.21 + this.precio);
//     }
//     vender(){
//         this.vendido = true
//     }
// }

// let producto1 = new producto("arroz", "350")
// let producto2 = new producto("fideos", "200")

// producto1.IVA()
// producto1.vender()

/////////////// ARRAYS ///////////////////

// //Declaro mi primer array

// const array = [
//     //puede tener strings
//     "A",
//     "B",
//     "C",
//     //pueden ser numeros
//     1,
//     2,
//     3,
//     //pueden tener booleanos
//     vendido = true,
//     vendido = false,
//     //pueden ser listas
//     pasatiempos = {
//        hobby1: "futból",
//     }
//     //pueden ser mixtos
// ]

//Accedo a mi array

// console.log(array[0]);

//Pueden realizarse operaciones matematicas con los elementos de un array

// let resultado = array[3] + array[5];

// console.log(resultado);

//Accedo a mi array con un for

// for (index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

//Metodos y propiedades de arrays

//lenght, me permite ver el numero de objetos en mi array

// console.log(array.length);

//push para agregar mas elementos a mi array

//array.push("Otro elemento agregado con push")

// push agrega elementos al final de array si se quiere agregar al principio se usa unshift

//array.unshift("Otro elemento pero agregado un unshift para ponerlo en primer lugar")

// Eliminar objetos de mi array, puedo eliminar objetos de mi array con pop, para eliminar el ultimo elemento en el array o shift para eliminar el primer elemento de mi array.

//array.pop();

//array.shift();

//Splice para eliminar objetos de mi array en cualquier parte, pasamos como primer parametro la posicion desde la que queremos eliminar y como segundo parametro hasta donde queremos eliminar

//array.splice(0, 3);

// Join para generar un string con todos los elementos de mi array, tenemos que pasar como parametro un caracter con el que queremos separarlos

//console.log(array.join(","));

//Concat para unir dos arrays

//const perros = ["Chapalin", "Chelchi", "Teté", "Chichelita", "Hachi"];

// const gatos = ["Mishifus"];

// let mascotas = perros.concat(gatos);

// console.log(mascotas);

// Slice devuelve un array de nuestro array sin modificar el original, pasamos como parametro desde donde queremos que comience el nuevo array hasta donde como segundo parametro.

// const hembras = perros.slice(1,4)

// console.log(hembras);

//IndexOF nos permite saber donde esta posicionado el elemento que le pasemos en el parametro.

// let chelsea = perros.indexOf("Hachi");

// console.log(chelsea);

// Includes sirve para saber si un elemento existe dentro de un array devolviendo un booleano como respuesta

//console.log(perros.includes("Chelchi"));

//REVERSE como dice el nombre sirve para invertir un array modifica el array original

// perros.reverse();

// console.log(perros);

// Practica con arrays

// const nombres = [];

// for(cantidad = 0; cantidad < 2; cantidad++) {
//     let nombre = prompt("Ingrese un nombre");
//     nombres.push(nombre.toUpperCase());
// }

// const nuevalista = nombres.concat("Ana", "ELIS")

// alert(nuevalista.join("..."));

//eliminar elementos de un array

//creo mi array
//const nombres = ["Chelchi", "Michi", "Elis"]

// //funcion que busca el index en el array y elimina
// const eliminar = nombre => {
//     //pido por prompt el nombre a borrar y lo guardo en una variable
//     let index = nombres.indexOf(prompt());
//     //si el nombre existe lo elimino con splice
//     if(index != -1){
//         nombres.splice(index,1)
//     }

// }
// //llamo a la funcion
// eliminar()

// objetos y arrays conbinados

// const objeto1 = {nombre: "Arroz"}

// const array = [objeto1]
// array.push({nombre: "Fideos"})
// console.log(array);

// Sentencia for of para recorrer un array
//creo mi array
// const productos = [
//     {Nombre: "Arroz", id: 1},
//     {Nombre: "Fideos", id: 2},
//     {Nombre: "Porotos", id: 3},
// ];
// //for of de productos
// for(const producto of productos){
//     console.log(producto.Nombre);
//     console.log(producto.id);
// }

// constructor para productos

// class producto {
//     constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     //sumador de IVA
//     sumarIva(){
//         this.precio = this.precio * 1.21;
//     }
// }

// const productos = [];
// //pusheo mis productos
// productos.push(new producto("arroz", 150))
// productos.push(new producto("fideos", 200))

// //For Of para sumar el iva a todos los productos del array

// for(const producto of productos){
//     producto.sumarIva();
// }

// console.log(productos);

////////////////////// FUNCIONES DE ORDEN SUPERIOR ////////////////

// function mayorQue(m){
//     return n => m < n;
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(9));

///

// function operacion(op){
//     if(op == "sumar"){
//         return (a, b) => a + b;
//     } else if(op == "restar"){
//         return (a, b) =>a - b;
//     }
// }

// let suma = operacion("sumar");
// let restar = operacion("restar");

// console.log(suma(5, 10));
// console.log(restar(5,10));

///

//const numeros = [1,2,3,4,5]

// function recorrerArray(array, log){
//     for(const el of array){
//         log(el)
//     }
// }

//recorrerArray(numeros, console.log)

// let total = 0;

// function acumulador(num){
//     total += num;
// }

// recorrerArray(numeros, acumulador)
// console.log(total);

//// Arrow functions

// const array2 = [];

// recorrerArray(numeros, (el) => {
//     array2.push(el * 2)
// })

// console.log(array2);

//For Each;

// numeros.forEach(num => {
//     console.log(num);
// });

// FIND

// const animales = [
//     {
//         nombre: "Lylia",
//         id: 1,
//         categoria:"conejos",
//         precio:1500
//     },
//     {
//         nombre: "Culiyo",
//         id: 2,
//         categoria:"conejos",
//         precio:1500
//     },
//     {
//         nombre: "Tiron de huevos",
//         id: 3,
//         categoria:"michis",
//         precio:1000
//     }
// ]

// const resultadoA = animales.find(cat => cat.categoria === "conejos");

// console.log(resultadoA);

///

//FILTER

// const resultadoA = animales.filter((x) => x.categoria.includes("conejos"))

// console.log(resultadoA);

// SOME

//console.log(animales.some((x) => x.nombre === "Tiron de huevos"));

//MAP

// const nombres = animales.map((x) => x.nombre)

// console.log(nombres);

// const actualizar = animales.map((x)=>{
//     return {
//     nombre: x.nombre,
//     precio: x.precio * 1.25
// }
// })

// console.log(actualizar);

//REDUCE

// const precioFinal = animales.map((x) => x.precio)

// const total = precioFinal.reduce((acumulador, elemento) => acumulador + elemento, 0)
// console.log(total);

// const numeros = [25,10,50,5,1];

// const resultado = numeros.sort((a,b) => a - b)

// console.log(resultado);

// const porNombre = animales.sort((a , b) => {
//     if(a.nombre > b.nombre){
//         return 1;
//     }
//     if(a.nombre < b.nombre){
//         return -1;
//     }
//     return 0;
// })

// console.log(porNombre);

// Repaso aplicado a mi array

// const buscar = animales.find((animal) => animal.id === 3)
// console.log(buscar);

// const existe = animales.some((categoria) => categoria.categoria === "Caballo")
// console.log(existe);

// const barato = animales.filter((precio) => precio.precio < 1500)
// console.log(barato);

// const nombres = animales.map((nombre) => nombre.nombre)

// console.log(nombres);

////

//Objeto MATH

//Math.max/min

// console.log(Math.min(10, -5, 50, 20, 10));
// console.log(Math.max(10, -5, 50, 20, 10));

//Infinity

// console.log(Math.max(10, -5 , Infinity, 50));
// console.log(Math.min(10, 5, -Infinity, 50));

//CEIL, ROUND, FLOOR

// const pi = Math.PI;

// console.log(Math.ceil(pi));

// console.log(Math.floor(pi));

// console.log(Math.round(pi));

// SQUARE ROOT

// console.log(Math.sqrt(4));

//RANDOM

//console.log(Math.random());

// console.log(Math.random() * 50);

// console.log(Math.random() * 10 + 5);

/// Generador de numeros randoms

// function generarNumero() {
//     return Math.round(Math.random() * 100)
// }

// console.log(generarNumero());

///

//DATE

//console.log(Date());

// console.log(new Date ( 2002,1,15));

// console.log(new Date (2024, 11, 24, 23, 59, 59));

///

//const navidad = new Date("December, 24, 2024, 23:59:59")

// console.log(navidad);

// console.log(navidad.getFullYear());
// console.log(navidad.getDay());
// console.log(navidad.getMonth());

// const hoy = new Date("December 17, 2021")

// console.log( hoy.toDateString() )
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleDateString());
// console.log(hoy.toLocaleTimeString());

////////////// DOM //////////////

// //ELEMENT BY ID

// let parrafo = document.getElementById("parrafo1")

// console.log(parrafo.innerHTML);

// /// ELEMENT BY CLASSNAME

// let paises = document.getElementsByClassName("paises")

// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);

// // ELEMENT BY TAGNAME

// let contenedores = document.getElementsByTagName("div")

// console.log(contenedores[1].innerHTML);

// //For Of para recorrer mi HTML

// for(const pais of paises){
//     console.log(pais.innerHTML);
// }

// for(const divs of contenedores){
//     console.log(divs.innerHTML);
// }

// //INNERTEXT

// let cambioTitulo = document.getElementById("parrafo1");

// cambioTitulo.innerText = "Hola Mundo!"

// console.log(cambioTitulo.innerHTML);

// //INNERHTML DESDE STRINGS Y CLASSNAME PARA CAMBIAR SUS CLASES Y/O DEFINIRLAS

// let div1 = document.getElementById("animales");

// div1.innerHTML = `<p>Michifus</p><p>Lylio</p><p>Chelsea</p>`

// div1.className = "container"

// console.log(div1);

// //CREATEELEMENT

// let div2 = document.createElement("div")

// div2.innerHTML = "<h2>Hola Michis</h2>"

// document.body.append(div2);

// console.log(div2);

// //REMOVE PARA ELIMINAR NODOS NUEVO O EXISTENTES

// div2.remove();

// paises[1].remove();

//TEST

// let productos = document.getElementById("animales");

// const animales = ["Conejos", "Michis", "Perros"];

// for(const animal of animales) {
//     let li = document.createElement("li")
//     li.innerHTML = animal;
//     productos.appendChild(li);
// }

//PLANTILLAS LITERALES

//mi objeto
// let producto = {id:"1", nombre:"arroz", precio: 150};

// let plantilla = `ID: ${producto.id} - Nombre: ${producto.nombre} $${producto.precio}`;

// console.log(plantilla);

// PLANTILLAS Y INNERHTML

// let producto = {id:"1", nombre:"arroz", precio: 150};

// let container = document.createElement("div");

// container.innerHTML = `
// <h3>ID:${producto.id}</h3>
// <p>Nombre:${producto.nombre}</p>
// <b>Precio:${producto.precio}</b>
// `;

// document.body.appendChild(container);

//TEST

// const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
//                   {  id: 2,  nombre: "Fideo", precio: 70 },
//                   {  id: 3,  nombre: "Pan"  , precio: 50},
//                   {  id: 4,  nombre: "Flan" , precio: 100}]
// for(const producto of productos){
//     let container = document.createElement("div");
//     container.innerHTML = `
//     <h3>ID:${producto.id}</h3>
//     <p>Nombre:${producto.nombre}</p>
//     <b>Precio:${producto.precio}</b>
//     `;
//     document.body.appendChild(container);
// }

// const container = document.querySelector("#WebApp");

// container.classList.add("aplicacionweb")

// container.classList.remove("aplicacionweb")

// console.log(container);

// const animales = [];

// const cantidad = 4;

// do{
//     let entrada = prompt("Ingrese el nombre de su bicho");
//     animales.push(entrada)
//     console.log(animales);
// } while(animales.length < cantidad)

// const nombres = ["Juan", "María", "Carlos", "Laura", "Pedro"]

// const eliminar = () => {
//     let entrada = prompt("Ingrese el nombre a eliminar")
//     if(nombres.includes(entrada)){
//         let index = nombres.indexOf(entrada);
//         nombres.splice(index, 1)
//         console.log(nombres);

//     } else {
//         console.log("El nombre Ingresado no existe");
//     }
// }

// eliminar();

// class producto{
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumarIva(){this.precio = this.precio * 1.25};
// }

// const productos = [];

// productos.push(new producto ("arroz", "150"));
// productos.push(new producto ("fideos", "250"));
// productos.push(new producto ("lentejas", "200"));

// for(const x of productos) {
//     x.sumarIva();
//     console.log(productos);
// }

// console.log(productos);

// function operacion (op) {
//     if (op == "sumar"){
//         return (a ,b) => a + b;
//     } else if (op == "restar") {
//         return (a ,b) => a - b;
//     } else {
//         console.log("Op invalida");
//     }
// }

// let suma = operacion("sumar");
// let resta = operacion("restar");

// console.log(suma(5, 10));
// console.log(resta(10, 5));

// const animales = [
//     {nombre:"AJompita", precio:3000, edad: "1 mes"},
//     {nombre:"BMichifus", precio:5000, edad: "12 meses"},
//     {nombre:"CChelchea", precio:50000, edad: "5 meses"}
// ];

// let resultado = animales.find((x) => x.nombre == "Jompita");

// console.log(resultado);

// let resultado2 = animales.filter((x) => x.precio < 6000);

// console.log(resultado2);

// let resultado3 = animales.some((x) => x.nombre === "Chelchea")

// console.log(resultado3);

// let resultado4 = animales.map((x) => {
//     return {
//         nombre: x.nombre,
//         precio: x.precio * 1.50
//     }
// })

// console.log(resultado4);

// let resultado5 = animales.reduce((acumulador, x) => acumulador + x.precio, 0)

// console.log(resultado5);

// let resultado6 = animales.sort((a , b) => {
//     if(a.nombre < b.nombre){
//         return 1;
//     }

// });

// console.log(resultado6);

// const generadorNumero = () => {
//     return Math.round(Math.random() * 100)
// }

// console.log(generadorNumero());

//DOOOOM

// const paises = document.getElementsByClassName("paises");

// for(const pais of paises) {
//     console.log(pais.innerHTML);
// }

// paises.innerText = "Hola Mundo";

// console.log(paises.innerText);

// const miContainer = document.getElementById("contenedor");

// miContainer.innerHTML = `<h2>Hola mundo</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`

// miContainer.className = "bg-white"

// const nombre = document.getElementById("nombre");
// const edad = document.getElementById("edad");

// nombre.onkeydown = () => {
//   console.log("keeydown");
// };

// edad.onkeyup = () => {
//   console.log("key up");
// };

// nombre.onchange = () => {
//   console.log("cambio");
// };

// nombre.addEventListener("input", escribiendo);

// function escribiendo() {
//   console.log("Hola mundo!");
// }

// const formulario = document.getElementById("miForm");
// formulario.addEventListener("submit", enviar);

// function enviar(e) {
//   e.preventDefault;
//   let formulario = e.target;
//   console.log(formulario.children[0].value);
//   console.log(formulario.children[1].value);
// }

// const botoncito = document.getElementById("boton");
// const body = document.body;
// botoncito.addEventListener("click", cambiarModo);

// function cambiarModo() {
//   body.classList.toggle("dark-mode");
//   if (body.classList.contains("dark-mode")) {
//     botoncito.innerText = "Cambiar a Light Mode";
//   } else {
//     botoncito.innerText = "Cambiar Dark Mode";
//   }
// }

// const miInput = document.getElementById("miInput");
// const textoAbajo = document.getElementById("texto-abajo");

// miInput.addEventListener("change", cuandoEscribo);

// function cuandoEscribo(e) {
//   e.preventDefault();
//   textoAbajo.innerText = miInput.value;
// }

// const botoncito = document.getElementById("boton");
// const form = document.getElementById("mi-form");
// const texto = document.getElementById("texto");

// botoncito.addEventListener("click", agregar);

// function agregar(e) {
//   e.preventDefault();
//   if (texto.value != "") {
//     let li = document.createElement("li");
//     li.innerText = texto.value;
//     li.classList.add("bg-primary");
//     form.appendChild(li);
//   } else {
//     console.log("Escriba algo porfavor");
//   }
//   form.reset();
//   texto.focus();
// }

// sessionStorage.setItem("bienvenida", "Hola Mundo!");
// sessionStorage.setItem("numeros", [1, 2, 3, 4, 5]);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   let llave = sessionStorage.getItem(clave);
//   console.log("clave: " + clave);
//   console.log("valor: " + llave);
// }

// sessionStorage.removeItem("bienvenida");
// sessionStorage.removeItem("numeros");

// sessionStorage.clear();

// console.log(sessionStorage.getItem("bienvenida"));
// console.log(sessionStorage.getItem("numeros"));

// const personas = [
//   { id: 1, nombre: "Homero", edad: 38 },
//   { id: 2, nombre: "Marge", edad: 36 },
//   { id: 3, nombre: "Bart", edad: 10 },
//   { id: 4, nombre: "Lisa", edad: 8 },
//   { id: 5, nombre: "Maggie", edad: 4 },
// ];

// const agregar = (a, b) => {
//   localStorage.setItem(a, b);
// };

// agregar("listaPersonas", JSON.stringify(personas));

// class objPersonajes {
//   constructor(obj) {
//     this.nombre = obj.nombre.toUpperCase();
//     this.edad = obj.edad;
//   }
//   sumarEdad() {
//     this.edad = this.edad + 1;
//   }
// }

// const miembros = JSON.parse(localStorage.getItem("listaPersonas"));

// const personajes = [];

// for (const persona of personas) {
//   personajes.push(new objPersonajes(persona));
// }

// console.log(personajes);

// const container = document.getElementById("personas");

// for (const persona of personajes) {
//   let li = document.createElement("li");
//   li.innerHTML = persona.nombre;
//   container.appendChild(li);
// }

// let informacionUsuario = prompt("Información a almacenar");

// localStorage.setItem(`informacio`, informacionUsuario);

// let informacionAlmacenada = localStorage.getItem(`informacio`);

// console.log(informacionAlmacenada);

//DAAAAAAAAAAAAAAAAAAAAAAAAARKKKKKKKKKKKKKK MODEEEEEEEEEEEEEE

// const botoncito = document.getElementById("boton");
// const cuerpo = document.body;
// let darkMode = localStorage.getItem("dark-mode");

// function activarDark() {
//   localStorage.setItem("dark-mode", "activado");
//   cuerpo.classList.add("dark-mode");
//   botoncito.innerText = "activar light mode";
// }

// function desactivarDark() {
//   localStorage.setItem("dark-mode", "desactivado");
//   cuerpo.classList.remove("dark-mode");
//   botoncito.innerText = "activar dark mode";
// }

// if (darkMode === "activado") {
//   activarDark();
// } else {
//   desactivarDark();
// }
// botoncito.addEventListener("click", () => {
//   darkMode = localStorage.getItem("dark-mode");
//   if (darkMode === "activado") {
//     desactivarDark();
//   } else {
//     activarDark();
//   }
// });
