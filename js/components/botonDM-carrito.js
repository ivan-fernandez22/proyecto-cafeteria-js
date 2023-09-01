const colorModeButton = document.querySelector ("#color-mode")

const body = document.body
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const tituloCarrito = document.querySelector ('h2')
const carroVacio = document.querySelector ("#carrito-vacio")
const carroComprado = document.querySelector ("#carrito-comprado")

let darkMode = localStorage.getItem ("dark-mode")


// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    tituloCarrito.classList.add ("dark-mode")
    carroVacio.classList.add ("dark-mode")
    carroComprado.classList.add ("dark-mode")

    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}


// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    tituloCarrito.classList.remove ("dark-mode")
    carroVacio.classList.remove ("dark-mode")
    carroComprado.classList.remove ("dark-mode")

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