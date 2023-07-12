// Condicional que me pide ser mayor para acceder al sitio

let edad = prompt("Ingrese su edad")
let mayorEdad = "Usted es mayor de edad, puede acceder al sitio"
let menorEdad = "Usted es menor de edad, no puede acceder al sitio"
let noIngresoNada = "Usted no ingresó una edad"

if (edad < 18) {
    console.log (menorEdad)
} else if (edad >= 18) {
    console.log (mayorEdad)
} else if (edad != isNaN) {
    console.log (noIngresoNada)
}



// Simulador interactivo que dependiendo de mi zona de residencia, me dice 
// cuanto es el total de lo que compramos + el envio aproximadamente

let precioProducto = Number (prompt ("Ingrese el precio total que figura en el carrito"))
let envioProducto = prompt ("Ingrese la zona en donde vive, sus opciones son: zona sur, zona oeste, zona norte o capital")

const envioZonaSur = Number (500)
const envioCapital = Number (1000)
const envioZonaOeste = Number (1000)
const envioZonaNorte = Number (1500)

function precioEnvio () {
    while (envioProducto != "") {
        switch (envioProducto) {
            case "zona sur":
                alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaSur));
                break;
            case "zona oeste":
                alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaOeste));
                break;
            case "zona norte":
                alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioZonaNorte));
                break;
            case "capital":
                alert ("El costo final (envio + producto) es: " + "$" + (precioProducto + envioCapital));
                break;
            default:
                alert ("Usted no ingresó una zona valida")
                break;
        }
        break
    }
}

precioEnvio ()
