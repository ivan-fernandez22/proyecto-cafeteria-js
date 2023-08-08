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
const titulo3 = document.querySelector ('#titulo3')
const tarjetaRollCanela = document.querySelector ('#tarjeta-rollCanela')
const tarjetaRollManzana = document.querySelector ('#tarjeta-rollManzana')
const tarjetaRollChocolate = document.querySelector ('#tarjeta-rollChocolate')
const tarjetaCroissant = document.querySelector ('#tarjeta-croissant')
const tarjetaCroissantChocolate = document.querySelector ('#tarjeta-croissantChocolate')
const tarjetaCroissantFR = document.querySelector ('#tarjeta-croissantFR')
const tarjetaCroissantOreo = document.querySelector ('#tarjeta-croissantOreo')
const titulo4 = document.querySelector ('#titulo4')
const tarjetaMedialuna = document.querySelector ('#tarjeta-medialuna')
const tarjetaChipa = document.querySelector ('#tarjeta-chipa')
const tarjetaScone = document.querySelector ('#tarjeta-scone')
const tarjetaDonaChocolate = document.querySelector ('#tarjeta-donaChocolate')
const tarjetaDonaLeParadis = document.querySelector ('#tarjeta-donaLeParadis')


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
    titulo3.classList.add ("dark-mode")
    tarjetaRollCanela.classList.add ("dark-mode")
    tarjetaRollManzana.classList.add ("dark-mode")
    tarjetaRollChocolate.classList.add ("dark-mode")
    tarjetaCroissant.classList.add ("dark-mode")
    tarjetaCroissantChocolate.classList.add ("dark-mode")
    tarjetaCroissantFR.classList.add ("dark-mode")
    tarjetaCroissantOreo.classList.add ("dark-mode")
    titulo4.classList.add ("dark-mode")
    tarjetaMedialuna.classList.add ("dark-mode")
    tarjetaChipa.classList.add ("dark-mode")
    tarjetaScone.classList.add ("dark-mode")
    tarjetaDonaChocolate.classList.add ("dark-mode")
    tarjetaDonaLeParadis.classList.add ("dark-mode")

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
    titulo3.classList.remove ("dark-mode")
    tarjetaRollCanela.classList.remove ("dark-mode")
    tarjetaRollManzana.classList.remove ("dark-mode")
    tarjetaRollChocolate.classList.remove ("dark-mode")
    tarjetaCroissant.classList.remove ("dark-mode")
    tarjetaCroissantChocolate.classList.remove ("dark-mode")
    tarjetaCroissantFR.classList.remove ("dark-mode")
    tarjetaCroissantOreo.classList.remove ("dark-mode")
    titulo4.classList.remove ("dark-mode")
    tarjetaMedialuna.classList.remove ("dark-mode")
    tarjetaChipa.classList.remove ("dark-mode")
    tarjetaScone.classList.remove ("dark-mode")
    tarjetaDonaChocolate.classList.remove ("dark-mode")
    tarjetaDonaLeParadis.classList.remove ("dark-mode")

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