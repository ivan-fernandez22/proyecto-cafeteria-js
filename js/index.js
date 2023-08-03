// // IDEA GENERAL DEL PROYECTO: 
// // Agregarle a mi pagina web (cafetería) funcionalidad: Que tenga carrito de compras, simulador de envios, simulador de reservas, etc.


// PRIMERA ENTREGA:

// Simulador interactivo que dependiendo de mi zona de residencia, me dice 
// cuanto es el total de lo que compramos + el envio aproximadamente

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




// // SEGUNDA ENTREGA: Simulador de carrito de compras

// // Idea general: Mediante un prompt preguntarle al usuario si desea comprar, en caso de que seleccione 'no', lo redigiremos a la pagina principal. Si selecciona 'si', le mostraremos un listado 
// // con los productos disponibles, a continuacion le pediremos que escriba el nombre del producto que quiere comprar. Luego le pediremos la cantidad de unidades que desea llevar. Por ultimo le 
// // preguntamos si quiere seguir comprando, en caso de que no, le mostraremos un listado por consola con sus productos seleccionados. Finalizando, le mostraremos el total a pagar y le pediremos que 
// // escriba 'pagar' para finalizar la compra.

// // Por el momento solo usaré algunos productos. Los cuales los tengo en un array.

// const productos = [
//     { nombre: "chessecake de frutos rojos", precio: 1000 },
//     { nombre: "chocotorta", precio: 1100 },
//     { nombre: "lemon pie", precio: 950 },
//     { nombre: "tostadas le paradis", precio: 1450 },
//     { nombre: "sandwichs mediterraneo", precio: 1700 },
//     { nombre: "croissant", precio: 350 },
//     { nombre: "roll de canela", precio: 300 }
// ]

// let carrito = [] // También declaro mi array de carrito

// let comprar = prompt("Hola! Ústed desea comprar? Escriba si para continuar, si desea ir a la pagina escriba la opcion no")

// while (comprar !== "si" && comprar !== "no") { // Hago un ciclo para que el usuario seleccione unicamente si o no
//     alert("Por favor seleccione si o no")
//     comprar = prompt("¿Desea comprar algo? Seleccione unicamente si o no")
// }

// if (comprar == "si") { // Si el usuario selecciona si, podrá ver la lista de productos
//     let productosDisponibles = productos.map((producto) => producto.nombre + " $" + producto.precio + " ") // Mapeo el array productos para poder mostrarlos
//     alert("Los productos disponibles son: " + productosDisponibles.join(" / ")) // Uso el join para separar los productos y que me quede mas prolijo
// } else if (comprar == "no") {
//     alert("Ústed sera redirigido a la pagina principal. Si desea comprar solo refresque la pagina, muchas gracias!") // En caso de que seleccione no, será enviado a la pagina principal
// }


// function quererComprar () {
//     while (comprar != "no") {
//         let producto = prompt("Por favor agregue un producto al carrito escribiendo el nombre de dicho producto") // Le pido al usuario que escriba el nombre del producto
//         let precio = 0
    
//         if (producto === "chessecake de frutos rojos" || producto === "chocotorta" || producto === "lemon pie" || producto === "tostadas le paradis"
//         || producto === "sandwich mediterraneo" || producto === "croissant" || producto === "roll de canela") {
//             switch (producto) {
//                 case "chessecake de frutos rojos":
//                     precio = 1000;
//                     break;
//                 case "chocotorta":
//                     precio = 1100;
//                     break;
//                 case "lemon pie":
//                     precio = 950;
//                     break;
//                 case "tostadas le paradis":
//                     precio = 1450;
//                     break;
//                 case "sandwich mediterraneo":
//                     precio = 1700;
//                     break;
//                 case "croissant":
//                     precio = 350;
//                     break;
//                 case "roll de canela":
//                     precio = 300;
//                     break;
//                 default:
//                     break;
//             }

//         let cantidad = parseInt(prompt("¿Cuantas unidades desea comprar?")) //Uso parseInt para que el usuario ingrese un valor de tipo numero entero
//         carrito.push({ producto, cantidad, precio })
//         } else {
//             alert("El producto que ingresó no se encuentra en stock o no existe, lo sentimos!")
//         }

//         comprar = prompt("¿Quiere seguir comprando? Ingrese si o no")

//         while (comprar === "no") {
//             alert("Por favor, revise la consola para ver una lista con sus productos")
//             carrito.forEach((carritoFinal) => {
//                 console.log(`Producto: ${carritoFinal.producto}, Cantidad: ${carritoFinal.cantidad}, 
//                 Total a abonar por producto: $${carritoFinal.cantidad * carritoFinal.precio}`) // Uso backsticks que vi en la clase 09
//             })

//             const total = carrito.reduce((acu, el) => acu + el.precio * el.cantidad, 0) // Con el metodo reduce me da un unico valor que es el total de lo que selecciona el usuario
//             alert(`El total a pagar por su compra es de $${total} pesos`)

//             let diaDeHoy = new Date() // Utilizo la fecha del dia de hoy
//             pagar = prompt("Ingrese la palabra: 'pagar' para finalizar la compra")
//             if (pagar != "pagar") {
//                 alert("Por favor, escriba 'pagar'")
//                 pagar = prompt("Ingrese la palabra 'pagar' para finalizar la compra")
//             } else if (pagar === "pagar") {
//                 alert(`Su compra realizada en el dia ${diaDeHoy.toLocaleDateString()} se ha realizado con exito!`) // Modifico la fecha para que me de en formato local
//             }
//         break;
//         }
//     }
// }

// quererComprar ()