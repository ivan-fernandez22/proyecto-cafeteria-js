// // Simulador interactivo que dependiendo de mi zona de residencia, me dice 
// // cuanto es el total de lo que compramos + el envio aproximadamente

// let precioProducto = Number (prompt ("Ingrese el precio total que figura en el carrito"))
// let envioProducto = prompt ("Ingrese la zona en donde vive, sus opciones son: zona sur, zona oeste, zona norte o capital")

// const envioZonaSur = Number (500)
// const envioCapital = Number (1000)
// const envioZonaOeste = Number (1000)
// const envioZonaNorte = Number (1500)

// function precioEnvio () {
//     while (envioProducto != "") {
//         switch (envioProducto) {
//             case "zona sur":
//                 alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaSur));
//                 break;
//             case "zona oeste":
//                 alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaOeste));
//                 break;
//             case "zona norte":
//                 alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaNorte));
//                 break;
//             case "capital":
//                 alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioCapital));
//                 break;
//             default:
//                 alert ("Usted no ingresó una zona valida")
//             }
//         break
//     }
// }

// precioEnvio ()


// // Introduciendo arrays
// class Cakes {
//     constructor (nombre, precio, stock) {
//         this.nombre = nombre.toUpperCase () //Convierte todo a mayuscula
//         this.precio = parseFloat (precio) //Parseo el precio (me da con coma)
//         this.stock = stock
//     }
//     obtenerPrecio () {
//         console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
//     }
//     obtenerStock () {
//         if (this.stock === true) {
//             console.log ("Hay stock de: " + this.nombre)
//         } else {
//             console.log ("No hay stock de: " + this.nombre)
//         }
//     }
// } 

// const arrayDeCakes = []

// arrayDeCakes.push (
//     new Cakes ("Chessecake de frutos rojos", 1000, true)
// )

// arrayDeCakes.push (
//     new Cakes ("Chessecake de maracuya", 1000, true)
// )

// arrayDeCakes.push (
//     new Cakes ("Torta de chocolate", 900, false)
// )

// console.log (arrayDeCakes)

// for (const prod of arrayDeCakes) {
//     prod.obtenerPrecio ()
// }

// for (const prod of arrayDeCakes) {
//     prod.obtenerStock ()
// }
