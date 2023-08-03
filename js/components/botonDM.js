// DARK MODE BUTTON

const colorModeButton = document.querySelector ("#color-mode")
const body = document.body
const leParadis = document.querySelector ('#h1-link')
const presentacion = document.querySelector ('#presentacion-texto')
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const header = document.querySelector ('header')

colorModeButton.addEventListener ("click", cambiarModoColor)

function cambiarModoColor () {
    body.classList.toggle ("dark-mode")
    leParadis.classList.toggle ("dark-mode")
    presentacion.classList.toggle ("dark-mode")
    botonHamburguesa.classList.toggle ("dark-mode")
    header.classList.toggle ("dark-mode")

    if (body.classList.contains ("dark-mode")) {
        colorModeButton.innerText = "Light Mode"
    } else {
        colorModeButton.innerText = "Dark Mode"
    }
}