// let nombre = "ivan"
// let apellido = "fernandez"

// let usuario = prompt ("ingrese un nombre de usuario")
// console.log (usuario)

// alert ("Su nombre de usuario " + usuario + "se ha guardado con exito!")
// console.log (alert)


// De 3 numeros que le doy, me imprime el mas grande
let t
let mayor
let numero1 = prompt ("ingrese un numero")
let numero2 = prompt ("ingrese otro numero")
let numero3 = prompt ("ingrese un ultimo numero")

if (numero1 > numero2) {
    t = numero1
} else {
    t = numero2
}

if (t > numero3) {
    mayor = t
} else {
    mayor = numero3
}

console.log ("el Numero mayor es " + mayor)
