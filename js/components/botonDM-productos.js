const colorModeButton = document.querySelector ("#color-mode")

const body = document.body
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const tituloProductos = document.querySelector ('h2')
const aviso = document.querySelector ('#aviso')
const titulo = document.querySelector ('#titulo')

let darkMode = localStorage.getItem ("dark-mode")


// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    tituloProductos.classList.add ("dark-mode")
    aviso.classList.add ("dark-mode")
    titulo.classList.add ("dark-mode")

    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}


// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    tituloProductos.classList.remove ("dark-mode")
    aviso.classList.remove ("dark-mode")
    titulo.classList.remove ("dark-mode")

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