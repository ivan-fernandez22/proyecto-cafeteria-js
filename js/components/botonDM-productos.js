// DARK MODE BUTTON PAGE PRODUCTOS

const colorModeButton = document.querySelector ("#color-mode")

const body = document.body
const leParadis = document.querySelector ('#h1-link')
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const tituloProductos = document.querySelector ('h2')
const aviso = document.querySelector ('#aviso')
const titulo1 = document.querySelector ('#titulo1')
const tarjetaChessecakeFr = document.querySelector ('#tarjeta-chessecakeFr')
const tarjetaChessecakeMaracuya = document.querySelector ('#tarjeta-chessecakeMaracuya')
const tarjetaTortaChocolate = document.querySelector ('#tarjeta-tortaChocolate')
const tarjetaLemonPie = document.querySelector ('#tarjeta-lemonPie')
const tarjetaTortaOreo= document.querySelector ('#tarjeta-tortaOreo')
const tarjetaChocotorta = document.querySelector ('#tarjeta-chocotorta')
const tarjetaCarrotCake = document.querySelector ('#tarjeta-carrotCake')
const titulo2 = document.querySelector ('#titulo2')
const tarjetaTostadoJYQ = document.querySelector ('#tarjeta-tostadoJYQ')
const tarjetaTostada= document.querySelector ('#tarjeta-tostada')
const tarjetaSandwichMediterraneo = document.querySelector ('#tarjeta-sandwichMediterraneo')
const tarjetaHamburguesaVeggie = document.querySelector ('#tarjeta-hamburguesaVeggie')


let darkMode = localStorage.getItem ("dark-mode")

// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    leParadis.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    tituloProductos.classList.add ("dark-mode")
    aviso.classList.add ("dark-mode")
    titulo1.classList.add ("dark-mode")
    tarjetaChessecakeFr.classList.add ("dark-mode")
    tarjetaChessecakeMaracuya.classList.add ("dark-mode")
    tarjetaTortaChocolate.classList.add ("dark-mode")
    tarjetaLemonPie.classList.add ("dark-mode")
    tarjetaTortaOreo.classList.add ("dark-mode")
    tarjetaChocotorta.classList.add ("dark-mode")
    tarjetaCarrotCake.classList.add ("dark-mode")
    titulo2.classList.add ("dark-mode")
    tarjetaTostadoJYQ.classList.add ("dark-mode")
    tarjetaTostada.classList.add ("dark-mode")
    tarjetaSandwichMediterraneo.classList.add ("dark-mode")
    tarjetaHamburguesaVeggie.classList.add ("dark-mode")


    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}


// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    leParadis.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    tituloProductos.classList.remove ("dark-mode")
    aviso.classList.remove ("dark-mode")
    titulo1.classList.remove ("dark-mode")
    tarjetaChessecakeFr.classList.remove ("dark-mode")
    tarjetaChessecakeMaracuya.classList.remove ("dark-mode")
    tarjetaTortaChocolate.classList.remove ("dark-mode")
    tarjetaLemonPie.classList.remove ("dark-mode")
    tarjetaTortaOreo.classList.remove ("dark-mode")
    tarjetaChocotorta.classList.remove ("dark-mode")
    tarjetaCarrotCake.classList.remove ("dark-mode")
    titulo2.classList.remove ("dark-mode")
    tarjetaTostadoJYQ.classList.remove ("dark-mode")
    tarjetaTostada.classList.remove ("dark-mode")
    tarjetaSandwichMediterraneo.classList.remove ("dark-mode")
    tarjetaHamburguesaVeggie.classList.remove ("dark-mode")

    localStorage.setItem ("dark-mode", "desactivado")
    colorModeButton.innerText = "Dark Mode"
}

if (darkMode === "activado") {
    activarDarkMode ()
} else {
    desactivarDarkMode ()
}


// FUNCION DEL BOTON
colorModeButton.addEventListener ("click", () => {
    darkMode = localStorage.getItem ("dark-mode")

    if (darkMode === "activado") {
        desactivarDarkMode ()
    } else {
        activarDarkMode ()
    }
})