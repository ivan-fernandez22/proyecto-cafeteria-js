let productos = []

fetch ("../js/arrayProductos.json")
    .then (response => response.json())
    .then (data => {
        productos = data 
        cargarProductos (productos)
    })

const contenedorProductos = document.querySelector("#contenedor-productos")
let botonesAgregar = document.querySelectorAll (".producto-carrito")
const numeroCarrito = document.querySelector ("#numero-carrito")

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <div class="producto-div-contenedor" id="producto-div-contenedor">
                <h4 class="producto-titulo">${producto.nombre}</h4>
                <p class="producto-texto">${producto.descripcion}</p>
                <p class="producto-precio"><b>$${producto.precio}</b></p>
                <button class="producto-carrito" id="${producto.id}" >Agregar al carrito <i class="bi bi-cart-plus-fill"></i></button>
            </div>

            <div class="producto-div-img">
                <img src="${producto.imagen}" class="producto-img" alt="${producto.nombre}">
            </div>
        `

        contenedorProductos.append (div)
    })

    actualizarBotonesAgregar()
}


// // Funcion de agregar productos al carrito

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-carrito")
    botonesAgregar.forEach (boton => {
        boton.addEventListener ("click", agregarAlCarrito)
    })
}

let arrayProductosCarrito

let ArrayProductosCarritoLS = localStorage.getItem ("productos-carrito")

if (ArrayProductosCarritoLS) {
    arrayProductosCarrito = JSON.parse (ArrayProductosCarritoLS)
    actualizarNumeroCarrito ()
} else {
    arrayProductosCarrito = []
}

function agregarAlCarrito(e) {
    const botonId = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id == botonId)

    if (arrayProductosCarrito.some (producto => producto.id == botonId)) {
        const index = arrayProductosCarrito.findIndex (producto => producto.id == botonId)
        arrayProductosCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        arrayProductosCarrito.push (productoAgregado)
    }

    actualizarNumeroCarrito ()

    localStorage.setItem ("productos-carrito", JSON.stringify (arrayProductosCarrito))

    Toastify({
        text: "Producto agregado!",
        duration: 1000,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #163c37, #16453F)",
        borderRadius: "1rem"
        },
        offset: {
            x: '0',
            y: '3rem'
        },
        onClick: function(){}
    }).showToast();
}

function actualizarNumeroCarrito () {
    nuevoNumero = arrayProductosCarrito.reduce ((acc, prod) => acc + prod.cantidad, 0)
    numeroCarrito.innerText = nuevoNumero
}