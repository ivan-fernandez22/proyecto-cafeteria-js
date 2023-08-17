// DARK MODE BUTTON PAGE RESERVAS

const colorModeButton = document.querySelector ('#color-mode')

const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const trabajoTitulo = document.querySelector ('#titulo-trabajo')
const trabajoTexto = document.querySelector ('#trabajo-texto')
const trabajoFormulario = document.querySelector ('#formulario-trabajo')
const contactoTitulo = document.querySelector ('#titulo-contacto')
const contactoTexto = document.querySelector ('#contacto-texto')

let darkMode = localStorage.getItem ("dark-mode")


// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    trabajoTitulo.classList.add ("dark-mode")
    trabajoTexto.classList.add ("dark-mode")
    trabajoFormulario.classList.add ("dark-mode")
    contactoTitulo.classList.add ("dark-mode")
    contactoTexto.classList.add ("dark-mode")

    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}

// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    trabajoTitulo.classList.remove ("dark-mode")
    trabajoTexto.classList.remove ("dark-mode")
    trabajoFormulario.classList.remove ("dark-mode")
    contactoTitulo.classList.remove ("dark-mode")
    contactoTexto.classList.remove ("dark-mode")

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