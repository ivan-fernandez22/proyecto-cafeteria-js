// // DARK MODE BUTTON INDEX

const colorModeButton = document.querySelector ("#color-mode")

const body = document.body
const presentacion = document.querySelector ('#presentacion-texto')
const botonHamburguesa = document.querySelector ('#boton-hamburguesa')
const presentacionTitulo = document.querySelector ('#presentacion-texto-bienvenida')
const sectionProductos = document.querySelector ('#section-productos')
const productosTitulo = document.querySelector ('#productos-titulo')
const productosTexto = document.querySelector ('#productos-texto')
const productosTexto2 = document.querySelector ('#productos-texto2')
const productosLink = document.querySelector ('#productos-link')
const sectionReservas = document.querySelector ('#section-reservas')
const reservasTitulo = document.querySelector ('#reservas-titulo')
const reservasTexto = document.querySelector ('#reservas-texto')
const reservasLink = document.querySelector ('#reservas-link')
const tarjeta1Contenedor = document.querySelector ('#tarjetas-contenedor')
const tarjeta2Contenedor = document.querySelector ('#tarjetas-contenedor2')
const tarjeta3Contenedor = document.querySelector ('#tarjetas-contenedor3')
const direccionTitulo = document.querySelector ('#direccion-titulo')
const direccionEnlace = document.querySelector ('#direccion-titulo-enlace')
const galeriaTitulo = document.querySelector ('#galeria-titulo')
const infoContenedor = document.querySelector ('#info-contenedor')
const infoEnviosDiv =  document.querySelector ('#info-envios-div')
const infoEnviosTitulo = document.querySelector ('#info-envios-titulo')
const infoEnviosTexto = document.querySelector ('#info-envios-texto')
const infoPagosDiv =  document.querySelector ('#info-pagos-div')
const infoPagosTitulo = document.querySelector ('#info-pagos-titulo')
const infoWsppDiv =  document.querySelector ('#info-wspp-div')
const infoWsppTitulo = document.querySelector ('#info-wspp-titulo')


let darkMode = localStorage.getItem ("dark-mode")

// ACTIVAR
function activarDarkMode () {
    body.classList.add ("dark-mode")
    presentacion.classList.add ("dark-mode")
    presentacionTitulo.classList.add ("dark-mode")
    botonHamburguesa.classList.add ("dark-mode")
    sectionProductos.classList.add ("dark-mode")
    productosTitulo.classList.add ("dark-mode")
    productosTexto.classList.add ("dark-mode")
    productosTexto2.classList.add ("dark-mode")
    productosLink.classList.add("dark-mode")
    sectionReservas.classList.add ("dark-mode")
    reservasTitulo.classList.add ("dark-mode")
    reservasTexto.classList.add ("dark-mode")
    reservasLink.classList.add ("dark-mode")
    tarjeta1Contenedor.classList.add ("dark-mode")
    tarjeta2Contenedor.classList.add ("dark-mode")
    tarjeta3Contenedor.classList.add ("dark-mode")
    direccionTitulo.classList.add ("dark-mode")
    direccionEnlace.classList.add ("dark-mode")
    galeriaTitulo.classList.add ("dark-mode")
    infoContenedor.classList.add ("dark-mode")
    infoEnviosDiv.classList.add ("dark-mode")
    infoEnviosTitulo.classList.add ("dark-mode")
    infoEnviosTexto.classList.add ("dark-mode")
    infoPagosDiv.classList.add ("dark-mode")
    infoPagosTitulo.classList.add ("dark-mode")
    infoWsppDiv.classList.add ("dark-mode")
    infoWsppTitulo.classList.add ("dark-mode")

    localStorage.setItem ("dark-mode", "activado")
    colorModeButton.innerText = "Light Mode"
}


// DESACTIVAR
function desactivarDarkMode () {
    body.classList.remove ("dark-mode")
    presentacion.classList.remove ("dark-mode")
    presentacionTitulo.classList.remove ("dark-mode")
    botonHamburguesa.classList.remove ("dark-mode")
    sectionProductos.classList.remove ("dark-mode")
    productosTitulo.classList.remove ("dark-mode")
    productosTexto.classList.remove ("dark-mode")
    productosTexto2.classList.remove ("dark-mode")
    productosLink.classList.remove ("dark-mode")
    sectionReservas.classList.remove ("dark-mode")
    reservasTitulo.classList.remove ("dark-mode")
    reservasTexto.classList.remove ("dark-mode")
    reservasLink.classList.remove ("dark-mode")
    tarjeta1Contenedor.classList.remove ("dark-mode")
    tarjeta2Contenedor.classList.remove ("dark-mode")
    tarjeta3Contenedor.classList.remove ("dark-mode")
    direccionTitulo.classList.remove ("dark-mode")
    direccionEnlace.classList.remove ("dark-mode")
    galeriaTitulo.classList.remove ("dark-mode")
    infoContenedor.classList.remove ("dark-mode")
    infoEnviosDiv.classList.remove ("dark-mode")
    infoEnviosTitulo.classList.remove ("dark-mode")
    infoEnviosTexto.classList.remove ("dark-mode")
    infoPagosDiv.classList.remove ("dark-mode")
    infoPagosTitulo.classList.remove ("dark-mode")
    infoWsppDiv.classList.remove ("dark-mode")
    infoWsppTitulo.classList.remove ("dark-mode")

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
