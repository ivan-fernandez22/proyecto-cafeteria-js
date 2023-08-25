// HEADER
const body = document.body
const header = document.createElement ('header')

body.prepend (header)

header.innerHTML = `
    <div>
        <img src="../imgs/logo ivan le paradis_230810_163216.jpg" alt="Logo de la cafetería" class="logo">
        <h1><a href="../index.html" id="h1-link">Le Paradis</a></h1>
    </div>

    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <button id="boton-hamburguesa" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
                    <a class="nav-link" href="./productos.html">Tienda de productos</a>
                    <a class="nav-link" href="./reservas.html">Reservas</a>
                    <a class="nav-link" href="./contacto.html">Contacto</a>
                    <a class="nav-link" href="./carrito.html">Carrito <i class="bi bi-cart-fill"></i></a>
                </div>
                <button id="color-mode" class="btn btn-dark">Dark Mode</button>
            </div>
        </div>
    </nav>
`

// FORMULARIO TRABAJO
const main = document.createElement ('main')
const seccionTrabajo = document.createElement ('section')
const contenedorDivTrabajo = document.createElement ('div')
const tituloTrabajo = document.createElement ('h2')
const textoTrabajo = document.createElement ('p')
const formularioTrabajo =document.createElement ('form')

body.append (main)
main.append (seccionTrabajo)
seccionTrabajo.append (contenedorDivTrabajo)
contenedorDivTrabajo.append (tituloTrabajo)
contenedorDivTrabajo.append (textoTrabajo)
contenedorDivTrabajo.append (formularioTrabajo)

contenedorDivTrabajo.classList = 'contenedor-trabajo'
tituloTrabajo.id = 'titulo-trabajo'
textoTrabajo.classList = 'texto-trabajo'
textoTrabajo.id = 'trabajo-texto'
formularioTrabajo.id = 'formulario-trabajo'

tituloTrabajo.innerHTML = `
    ¿Quieres unirte al equipo Le Paradis?
`
textoTrabajo.innerHTML = 'Rellená el siguiente formulario para mandarnos tu solicitud de empleo!'

formularioTrabajo.classList = 'formulario-trabajo'
formularioTrabajo.innerHTML = `
            <label for="nombre">Nombre</label><br>
            <input id="nombre" name="nombre" type="text" /><br>
            <label for="apellido" class="label-f">Apellido</label><br>
            <input id="apellido" name="apellido" type="text" /><br>
            <label for="DNI" class="label-f">DNI</label><br>
            <input id="dni" name="dni" type="number" /><br>
            <label for="direccion" class="label-f">Direccion y entre calles</label><br>
            <input id="direccion" name="direccion" type="text" /><br>
            <label for="nacimiento" class="label-f">Fecha de nacimiento</label><br>
            <input id="nacimiento" name="nacimiento" type="date"/><br>
            <label for="email" class="label-f">Email</label><br>
            <input id="email" name="email" type="email" /><br>
            <label for="telefono" class="label-f">Numero de telefono</label><br>
            <input id="telefono" name="telefono" type="tel" /><br>
            <input id="btn-enviar" type="submit" value="Enviar" class="btn btn-dark">
`


// EVENTO DEL FORMULARIO TRABAJO

formularioTrabajo.addEventListener ('submit', enviarFormularioTrabajo) 

function enviarFormularioTrabajo (e) {
    e.preventDefault()
    let form = e.target
    let inputNombre = form.children[2].value;
    let inputApellido = form.children[6].value;
    let postulado = {
        nombre: inputNombre,
        apellido: inputApellido,
    }

    if ((inputNombre && inputApellido) === '') {
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            text: 'Por favor, complete todos los campos del formulario!',
            position: 'center'
        })
    } else {
        localStorage.setItem('Postulado', JSON.stringify(postulado))
        const postulacionConfirmada = localStorage.getItem('Postulado')
        const postulacionParseada = JSON.parse(postulacionConfirmada)
        Swal.fire({
            icon: 'success',
            title: 'Postulacion enviada',
            text: `Estimado ${postulacionParseada.nombre} ${postulacionParseada.apellido} le informamos que su solicitud fue enviada con exito, cualquier noticia se le será enviada a su email!`,
            position: 'center'
        })
    } 
}


// SECCION CONTACTO 
const seccionContacto = document.createElement ('section')
const divContenedorContacto = document.createElement ('div')
const tituloContacto = document.createElement ('h2')
const textoContacto = document.createElement ('p')
const UlRedes = document.createElement ('ul')

main.append (seccionContacto)
seccionContacto.append (divContenedorContacto)
divContenedorContacto.append (tituloContacto)
divContenedorContacto.append (textoContacto)
divContenedorContacto.append (UlRedes)

divContenedorContacto.classList = 'contenedor-contacto'
textoContacto.classList = 'texto-contacto'
textoContacto.id = 'contacto-texto'
tituloContacto.id = 'titulo-contacto'

tituloContacto.innerHTML = `
    ¿Buscas contactarte con nosotros?
`
textoContacto.innerHTML = 'Para contactarte con nosotros para reclamos, preguntas u otras cuestiones, mandar mensaje a nuestras redes sociales'

UlRedes.classList = 'redes-lista-contacto'

UlRedes.innerHTML = `
    <li class="redes-ig-contacto"><i class="bi bi-instagram"></i></li>
    <li class="redes-fb-contacto"><i class="bi bi-facebook"></i></li>
    <li class="redes-tw-contacto"><i class="bi bi-twitter"></i></li>
`


// FOOTER 

const footer = document.createElement ('footer') 

body.append (footer)

footer.innerHTML = `
<section class="footer-nav">
<h2 class="footer-nav-titulo">Navegacion</h2>
<ul class="footer-nav-lista">
    <li><a href="../index.html" class="footer-nav-links link-in">Inicio</a></li>
    <li><a href="../pages/productos.html" class="footer-nav-links link-pr">Tienda de productos</a></li>
    <li><a href="../pages/reservas.html" class="footer-nav-links link-re">Reservas</a></li>
    <li><a href="../pages/contacto.html" class="footer-nav-links link-co">Contacto</a></li>
</ul>
</section>

<section class="footer-redes">
<h2 class="redes-titulo">Redes sociales</h2>
<ul class="redes-lista">
    <li class="redes-ig">Instagram <i class="bi bi-instagram"></i></li>
    <li class="redes-fb">Facebook <i class="bi bi-facebook"></i></li>
    <li class="redes-tw">Twitter <i class="bi bi-twitter"></i></li>
</ul>
</section>

<section class="footer-pagos">
<h2 class="pagos-titulo">Medios de pago</h2>
<img src="../imgs/pngegg.png" class="pagos-img" alt="tarjetas que se aceptan">
</section>

<section class="footer-email">
<h2 class="email-titulo">Ingresa tu mail para recibir descuentos únicos</h2>
<div class="email-div-formulario">
    <form id="formulario-email">
        <input type="email" id="email-recuadro">
        <input id="email-enviar" type="submit" value="Enviar" />
    </form>
</div>
</section>

<section class="footer-ubicacion">
<h2 class="ubicacion-titulo">Ubicación</h2>
<a href="https://goo.gl/maps/ZBA6aTaa8zn1xEaW8" class="ubicacion-link" target="_blank">
    <i class="bi bi-pin-angle"></i> Del Valle Iberlucea 3312 <i class="bi bi-pin-angle"></i>
</a>
</section>

<section class="footer-copyright">
<p class="copyright-texto">
    <i class="bi bi-c-circle"></i> Todos los derechos reservados LeParadis
</p>
</section>
`