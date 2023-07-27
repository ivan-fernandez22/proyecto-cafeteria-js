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

// for (const prod of arrayDeRollsYCroissants) {
//     prod.obtenerStock ()
// }


