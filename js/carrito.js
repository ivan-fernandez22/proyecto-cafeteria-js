let productosEnCarrito = localStorage.getItem ("productos-carrito")
productosEnCarrito = JSON.parse (productosEnCarrito)

const carritoVacio = document.querySelector ("#carrito-vacio")
const carritoProductos = document.querySelector ("#carrito-productos")
const carritoInteracciones = document.querySelector ("#carrito-interacciones")
const carritoComprado = document.querySelector ("#carrito-comprado")
let botonesEliminar = document.querySelectorAll (".boton-eliminar")
const botonVaciar = document.querySelector ("#carrito-interaccion-vaciar")
const total = document.querySelector ("#total")
const comprar = document.querySelector ("#carrito-comprar-boton")

function cargarProductosEnCarrito () {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        carritoVacio.classList.add ("desabilitado")
        carritoProductos.classList.remove ("desabilitado")
        carritoInteracciones.classList.remove ("desabilitado")
        carritoComprado.classList.add ("desabilitado")
    
        carritoProductos.innerHTML = ""
    
        productosEnCarrito.forEach (producto => {
            const div = document.createElement ("div")
            div.classList.add ("carrito-producto")
            div.innerHTML = `
                <img class="img-producto" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <p>${producto.nombre}</p>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio (c/u)</small>
                    <p>$${producto.precio}</p>
                </div>
                <button class="boton-eliminar" id=${producto.id}><i class="bi bi-trash"></i></button>
            `
    
            carritoProductos.append (div)
        })
    
    } else {
        carritoVacio.classList.remove ("desabilitado")
        carritoProductos.classList.add ("desabilitado")
        carritoInteracciones.classList.add ("desabilitado")
        carritoComprado.classList.add ("desabilitado")
    }

    actualizarBotonesEliminar()
    actualizarTotal ()
}

cargarProductosEnCarrito ()


// BOTONES ELIMINAR
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".boton-eliminar")
    botonesEliminar.forEach (boton => {
        boton.addEventListener ("click", eliminarDeCarrito)
    })
}

function eliminarDeCarrito (e) {
    let botonId = e.currentTarget.id 
    let index = productosEnCarrito.findIndex (producto => producto.id == botonId)

    productosEnCarrito.splice (index, 1)
    cargarProductosEnCarrito ()
    localStorage.setItem ("productos-carrito", JSON.stringify (productosEnCarrito))

    Toastify({
        text: "Producto eliminado!",
        duration: 1000,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #2d111e, #541734)",
        borderRadius: "1rem"
        },
        offset: {
            x: '0',
            y: '3rem'
        },
        onClick: function(){}
    }).showToast();
}


// BOTON VACIAR CARRITO
botonVaciar.addEventListener ("click", vaciarCarrito)

function vaciarCarrito () {
    Swal.fire({
        title: '¿Deseas vaciar el carrito?',
        icon: 'question',
        text: 'Se borraran todos sus productos',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0
            localStorage.setItem ("productos-carrito", JSON.stringify (productosEnCarrito))
            cargarProductosEnCarrito ()
        }
    })
}


// TOTAL ACTUALIZADO
function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce ((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
    total.innerText = `$${totalCalculado}`
}


// BOTON COMPRAR
comprar.addEventListener ("click", finalizarCompra)

function finalizarCompra () {
    productosEnCarrito.length = 0
    localStorage.setItem ("productos-carrito", JSON.stringify (productosEnCarrito))

    carritoVacio.classList.add ("desabilitado")
    carritoProductos.classList.add ("desabilitado")
    carritoInteracciones.classList.add ("desabilitado")
    carritoComprado.classList.remove ("desabilitado")

    Swal.fire({
        icon: 'success',
        title: 'Compra realizada con exito!',
        text: `Felicidades, en los proximos 3 dias habiles recibirá sus productos!`,
        position: 'center'
    })
}