// DARK MODE BUTTON PAGE RESERVAS

const colorModeButton = document.querySelector ("#color-mode")

const body = document.body
const leParadis = document.querySelector ('#h1-link')
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const tituloReservas = document.querySelector ('h2')
const reservas = document.querySelector ('#reservas')
const divConfirmacion = document.querySelector ('#div-confirmacion')

let darkMode = localStorage.getItem ("dark-mode")


// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    leParadis.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    tituloReservas.classList.add ("dark-mode")
    reservas.classList.add ("dark-mode")
    divConfirmacion.classList.add ("dark-mode")

    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}

// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    leParadis.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    tituloReservas.classList.remove ("dark-mode")
    reservas.classList.remove ("dark-mode")
    divConfirmacion.classList.remove ("dark-mode")

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