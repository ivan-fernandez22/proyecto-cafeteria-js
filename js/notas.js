// // CLASE 05: OBJETOS

// const persona = {
//     nombre: "Iván",
//     apellido: "Fernandez",
//     edad: 19,
//     pais: "Argentina"
// }

// console.log (persona)
// console.log (persona.nombre) // Del objeto persona me muestra el nombre
// console.log (persona ["pais"]) // Del objeto persona me muestra el pais / Otra forma para llamar al valor del objeto con [] y ""

// persona.nombre = "Agustina" // Redefino el valor "Ivan" por uno nuevo: "Agustina"
// persona.edad = 13

// console.warn (persona)
// console.warn (persona.nombre)


// // FUNCION CONSTRUCTORA
// function Producto (nombre, categoria, precio) {
//     this.nombre = nombre
//     this.categoria = categoria
//     this.precio = precio
// }

// const producto1 = new Producto ("Chessecake de frutos rojos", "Cakes", 7000)

// console.log (producto1)


// // Otro metodo para declarar funcion constructora (que se llaman en realidad "Metodo constructor")
// function Persona (algo, algo1) {
//     this.nombre = algo.nombre
//     this.apellido = algo.apellido
//     this.edad = algo.edad
//     // Se puede agregar 2 parametros en un constructor
//     this.hobbies = algo1.hobbies
//     this.nacionalidad = algo1.nacionalidad

//     // Metodos
//     this.presentacion = function () {
//         console.info ("Hola, me llamo " + this.nombre)
//     }
// }

// const persona1 = new Persona (
//     {
//     nombre: "Lionel",
//     apellido: "Messi",
//     edad: 36
//     },
//     {
//     hobbies: "futbol",
//     nacionalidad: "Argentina"
//     }
//     )

// console.log (persona1)
// persona1.presentacion ()


// // CLASES Y METODOS
// class Auto {
//     constructor (modelo, marca, anio) {
//         this.modelo = modelo;
//         this.marca = marca;
//         this.anio = anio;

//         // Metodo
//         this.descripcion = function () {
//             console.log ("Vendo: " + this.marca + " " + this.modelo + " del año " + this.anio)
//         }
//     }
// }

// const auto1 = new Auto ("Gol Trend", "Volkswagen", 2022)

// console.log (auto1)
// auto1.descripcion ()


// // IN
// console.log ("nombre" in persona1) //In nos devuelve True o False (valor booleano)

// if ("nombre" in persona1) {
//     console.log (persona1.nombre)
// } else {
//     console.log ("No hay nombre")
// }


// // FOR...IN
// for (const propiedad in persona1) {
//     console.log (propiedad)
// }

// // Se pueden usar funciones y variables externas (global) 
// // como propiedades adentro de los objetos



// // CLASE 06: ARRAYS

// const arrayUno = [
//     "hola", "como", "estas"
// ] 

// console.log (arrayUno)
// console.log (arrayUno.length) //Se usa length para saber la cantidad de elementos de un array
// console.log (arrayUno[0]) //Consologear un elemento especifico del array dependiendo su indice


// // Ciclo for que me imprime los elementos dependiendo del indice que le indico
// for (let i = 0; i < 3; i++) {
//     console.log (arrayUno [i])
// }

// for (let i = 0; i < arrayUno.length; i++) {
//     console.log (arrayUno [i])
// } //con el .length permite agregar todos los elementos que quiera en el array sin hacer ninguna modificacion


// // Agregar un elemento al array en el último indice (.push)
// arrayUno.push ("Ivan")
// console.log (arrayUno)

// // Agregar un elemento al array en el primer indice (.unshift)
// arrayUno.unshift ("Primero")
// console.log (arrayUno)

// // Eliminar el primer elemento del array (.shift)
// arrayUno.shift ()
// console.log (arrayUno)

// // Eliminar el último elemento del array (.pop)
// arrayUno.pop ()
// console.log (arrayUno)

// // Eliminar varios elementos consecutivos (.splice)
// arrayUno.splice (0,1) 
// console.log (arrayUno)

// // Agregar caracteres en el medio de los elementos (.join)
// console.log (arrayUno.join (" "))
// console.log (arrayUno.join (", "))
// console.log (arrayUno.join (" 1 "))

// // Concatenar arrays (.concat)
// const arrayDos = [
//     1, 2, 3, 4, 5
// ]

// const arrayTres = arrayUno.concat(arrayDos)
// console.log (arrayTres)

// // Tomar partes de un array para poner en otro array (.slice)
// const arrayCuatro = arrayTres.slice (2, 7)
// console.log (arrayCuatro)

// // Metodo que me permite saber el indice que tiene cualquier elemento del array (indexOf)
// console.log (arrayCuatro.indexOf (1))

// // Metodo que me permite saber si un elemento esta en el array (.includes)
// console.log (arrayCuatro.includes ("estas"))
// console.log (arrayCuatro.includes ("hola"))
// console.log (arrayCuatro.includes (2))

// // Dar vuelta todo el array (.reverse)
// console.log (arrayCuatro.reverse ()) //Es muy peligroso porque me cambia todo


// // ARRAYS CON OBJETOS
// const objeto1 = {
//     id: 1,
//     producto: "Croissant"
// }

// const objeto2 = {
//     id: 2,
//     producto: "Tostado de jamon y queso"
// }

// const arrayCinco = [
//     objeto1,
//     objeto2
// ]

// console.log (arrayCinco)

// // Se pueden usar los comandos de arrays tambien con objetos
// arrayCinco.push (
//     {
//         id: 3,
//         producto: "Chipa"
//     }
// )

// console.log (arrayCinco)

// // Tomar el id y producto de todos los objetos
// for (const i of arrayCinco) {
//     console.log (i.id)
//     console.log (i.producto)
// }

// // Uso de clases
// class Producto {
//     constructor (id, nombre, precio) {
//         this.id = id
//         this.nombre = nombre.toUpperCase () //Convierte todo a mayuscula
//         this.precio = parseFloat (precio) //Parseo el precio (me da con coma)
//         this.stock = true
//     }
//     obtenerPrecio () {
//         console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
//     }
//     obtenerStock () {
//         if (this.stock == true) {
//             console.log ("Hay stock de: " + this.nombre)
//         } else {
//             console.log ("No hay stock de: " + this.nombre)
//         }
//     }
//     CalcularPrecioConIVA () {
//         this.precio = this.precio * 1.21
//     }
// } 

// const productos = []

// productos.push (
//     new Producto (1, "croissant", 500)
// )

// productos.push (
//     new Producto (2, "Porcion de chessecake", 1000, false)
// )

// console.log (productos)

// // Obtener el precio de todos los productos
// for (const prod of productos) {
//     prod.obtenerPrecio ()
// }

// // Obtener el stock de todos los productos 
// for (const prod of productos) {
//     prod.obtenerStock ()
// }

