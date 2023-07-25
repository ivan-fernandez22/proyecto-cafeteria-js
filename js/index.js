// // IDEA GENERAL DEL PROYECTO: 
// // Agregarle a mi pagina web (cafetería) funcionalidad: Que tenga carrito de compras, simulador de envios, simulador de reservas, etc.


// // PRIMERA ENTREGA:

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




// // SEGUNDA ENTREGA:


// // INSERTANDO OBJETOS Y ARRAYS: Guardando productos para un futuro carrito

//  Seccion "Cakes|porciones" de la page Tienda de productos 

class Cakes {
    constructor (nombre, precio, stock) {
        this.nombre = nombre.toUpperCase () //Convierte todo a mayuscula
        this.precio = parseFloat (precio) //Parseo el precio (me da con coma)
        this.stock = stock
    }
    obtenerPrecio () {
        console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
    obtenerStock () {
        if (this.stock === true) {
            console.log ("Hay stock de: " + this.nombre)
        } else {
            console.log ("No hay stock de: " + this.nombre)
        }
    }
} 

const arrayDeCakes = []

arrayDeCakes.push (new Cakes ("Porción de chessecake de frutos rojos", 1000, true))

arrayDeCakes.push (new Cakes ("Porción de chessecake de maracuya", 1000, true))

arrayDeCakes.push (new Cakes ("Porción de torta de chocolate", 900, false))

arrayDeCakes.push (new Cakes ("Tarta individual de lemon pie", 950, true))

arrayDeCakes.push (new Cakes ("Porción de torta oreo", 1100, true))

arrayDeCakes.push (new Cakes ("Porción de chocotorta", 1100, true))

arrayDeCakes.push (new Cakes ("Porción de carrot cake", 950, false))

console.log (arrayDeCakes)


//  Seccion "Sandwichs y salados" de la page Tienda de productos 

class SandwichsYSalados {
    constructor (nombre, precio, stock) {
        this.nombre = nombre.toUpperCase ()
        this.precio = parseFloat (precio)
        this.stock = stock
    }
    obtenerPrecio () {
        console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
    obtenerStock () {
        if (this.stock === true) {
            console.log ("Hay stock de: " + this.nombre)
        } else {
            console.log ("No hay stock de: " + this.nombre)
        }
    }
} 

const arrayDeSandwichsYSalados = [] 

arrayDeSandwichsYSalados.push (new SandwichsYSalados("Tostados de jamon y queso", 1300, true))

arrayDeSandwichsYSalados.push (new SandwichsYSalados("Tostadas Le Paradis", 1450, true))

arrayDeSandwichsYSalados.push (new SandwichsYSalados("Sandwich mediterraneo", 1700, false))

arrayDeSandwichsYSalados.push (new SandwichsYSalados("Sandwich veggie", 1600, true))

console.log (arrayDeSandwichsYSalados)


// Seccion "Rolls y croissants" de la page Tienda de productos

class RollsYCroissants {
    constructor (nombre, precio, stock) {
        this.nombre = nombre.toUpperCase ()
        this.precio = parseFloat (precio)
        this.stock = stock
    }
    obtenerPrecio () {
        console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
    obtenerStock () {
        if (this.stock === true) {
            console.log ("Hay stock de: " + this.nombre)
        } else {
            console.log ("No hay stock de: " + this.nombre)
        }
    }
} 

const arrayDeRollsYCroissants = []

arrayDeRollsYCroissants.push (new RollsYCroissants ("Roll de canela", 300, true))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Roll de canela y manzana", 400, true))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Roll de canela y chocolate", 400, false))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Croissant", 350, true))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Croissant de chocolate", 450, true))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Croissant de frutos rojos", 450, false))

arrayDeRollsYCroissants.push (new RollsYCroissants ("Croissant de oreo", 500, true))

console.log (arrayDeRollsYCroissants)

for (const prod of arrayDeRollsYCroissants) {
    prod.obtenerStock ()
}


// // HACIENDO USO DE DATE:
const diaDeHoy = new Date ()

// Agregando copyright en el footer (en un futuro se verá en el html, por el momento lo consologeo)
console.log ("Todos los derechos reservados | Le paradis | Año: " + diaDeHoy.getFullYear ())


// // HACIENDO EL SIMULADOR DEL CARRITO:
// IDEA: Hacer con prompt un mensaje que diga "IR A LA CATEGORIA DESEADA: CAKES, SANDWICHS O ROLLS" luego con un if, mostrar la lista de los productos de 
// dicha seccion que escogimos, en el mismo prompt pedir que el usuario ingrese el nombre de los productos que quiere llevar y la cantidad (tener en cuenta productos en stock). Despues mostrar
// un alert que diga el precio total del carrito. Mostrar otro prompt que pregunte si queremos saber cuantos nos sale el envio + el precio total del carrito
// (hago uso del primer simulador interactivo). Con un if, si el usuario desea saberlo, mostrarle con alert el precio final con el envio incluido. 
