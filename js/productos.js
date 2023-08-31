//  Declaracion del array de productos

const productos = [
    {
        nombre: "Porción de chessecake de frutos rojos", 
        descripcion: "Base con galletitas, queso crema, crema y frutos rojos (sin gelatina y horneado, 100% natural)", 
        precio: 1000,
        id: 1,
        imagen: "../imgs/chessecakeTH.jpg"
    },
    {
        nombre: "Porción de chessecake de maracuya", 
        descripcion: "Base con galletitas, queso crema, crema y maracuya (sin gelatina y horneado, 100% natural)", 
        precio: 1000,
        id: 2,
        imagen: "../imgs/maracuya3.jpg"
    },
    {
        nombre: "Porción de torta de chocolate", 
        descripcion: "Bizcocho humedo de chocolate con dulce de leche",
        precio: 900, 
        id: 3,
        imagen: "../imgs/torta-choc-manjar-editada.jpg"
    },
    {
        nombre: "Tarta individual de lemon pie",
        descripcion: "Una masa casera con una deliciosa crema de limon y un exquisito merengue italiano",
        precio: 950,
        id: 4,
        imagen: "../imgs/individual_lemon_pie_1.jpg"
    },
    {
        nombre: "Porción de torta oreo",
        descripcion: "Base con galletitas, queso crema, crema, dulce de leche y galletitas oreo (sin gelatina y horneado, 100% natural)", 
        precio: 1100,
        id: 5,
        imagen: "../imgs/doble-oreo_landscapeThumbnail_es (1) (1).jpeg"
    },
    {
        nombre: "Porción de chocotorta", 
        descripcion: "Base con galletitas chocolinas, queso crema, crema, dulce de leche y más chocolinas", 
        precio: 1100, 
        id: 6,
        imagen: "../imgs/chocotorta.jpg"
    },
    {
        nombre: "Porción de carrot cake", 
        descripcion: "Bizcocho con zanahoria y nuez, butter cream y ralladura de zanahoria (horneado y sin conservantes, 100% natural)", 
        precio: 950, 
        id: 7,
        imagen: "../imgs/carrot-cake.jpg"
    },
    {
        nombre: "Tostados de jamon y queso", 
        descripcion: "cuatro tostados triangulares de jamon y queso", 
        precio: 1300, 
        id: 8,
        imagen: "../imgs/tostado-jyq.jpg"
    },
    {
        nombre: "Tostadas Le Paradis", 
        descripcion: "Dos tostadas con palta, albahaca, tomate y huevo", 
        precio: 1450, 
        id: 9,
        imagen: "../imgs/tostada.jpg"
    },
    {
        nombre: "Sandwich mediterraneo", 
        descripcion: "Baguette, jamon crudo, rucula, tomates secos y burrata", 
        precio:1700, 
        id: 10,
        imagen: "../imgs/sandwich-mediterraneo (1) (1).jpg"
    },
    {
        nombre:"Sandwich veggie", 
        descripcion: "Hamburguesa de soja, queso vegano, cebolla morada, tomates y mix de verdes (100% natutal)", 
        precio: 1600, 
        id: 11,
        imagen: "../imgs/hamburguesa-veggie (1).jpg"
    },
    {
        nombre: "Roll de canela", 
        descripcion: "Esponjoso y con un delicioso glaseado", 
        precio: 300, 
        id: 12,
        imagen: "../imgs/rollitos-canela.jpg"
    },
    {
        nombre: "Roll de canela y manzana", 
        descripcion: "Con manzanas rojas y nuez", 
        precio: 400, 
        id: 13,
        imagen: "../imgs/rollosManzanCanelaNuez.jpg"
    },
    {
        nombre: "Roll de canela y chocolate", 
        descripcion: "Con chocolate suizo",
        precio: 400, 
        id: 14,
        imagen: "../imgs/rollChocolate (1) (1).jpg"
    },
    {
        nombre: "Croissant", 
        descripcion: "Sin relleno",
        precio: 350, 
        id: 15,
        imagen: "../imgs/croissants-img1.jpg"
    },
    {
        nombre: "Croissant de chocolate", 
        descripcion: "Relleno de chocolate suizo",
        precio: 450, 
        id: 16,
        imagen: "../imgs/croissant-chocolate.jpg"
    },
    {
        nombre: "Croissant de frutos rojos", 
        descripcion: "con frutos rojos (moras, frutillas y cerezas)", 
        precio: 450, 
        id: 17,
        imagen: "../imgs/croissants-bicolor-relleno.jpg"
    },
    {
        nombre: "Croissant de oreo", 
        descripcion: "con relleno de oreo y galletitas por encima", 
        precio: 500, 
        id: 18,
        imagen: "../imgs/croissant-oreo.jpg"
    },
    {
        nombre: "Medialuna", 
        descripcion: "De manteca",
        precio: 150, 
        id: 19,
        imagen: "../imgs/medialunas (1).jpg"
    },
    {
        nombre: "Chipas (1/4 kg)", 
        descripcion: "Con 3 tipos de quesos, 100% natural",
        precio: 600, 
        id: 20,
        imagen: "../imgs/chipa.jpg"
    },
    {
        nombre: "Scone", 
        descripcion: "De queso",
        precio: 300, 
        id: 21,
        imagen: "../imgs/scones.jpg"
    },
    {
        nombre: "Dona de chocolate", 
        descripcion: "Glaseado de chocolate con chispitas",
        precio: 250, 
        id: 22,
        imagen: "../imgs/donas (1).jpg"
    },
    {
        nombre: "Dona Le Paradis", 
        descripcion: "Glaseado rosa con chispitas", 
        precio: 250, 
        id: 23,
        imagen: "../imgs/dona-rosa.jpg"
    }
]



// // Cargando los productos al HTML 

const contenedorProductos = document.querySelector("#contenedor-productos")
let botonesAgregar = document.querySelectorAll (".producto-carrito")
const numeroCarrito = document.querySelector ("#numero-carrito")

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <div class="producto-div-contenedor">
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

cargarProductos ()


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
}

function actualizarNumeroCarrito () {
    nuevoNumero = arrayProductosCarrito.reduce ((acc, prod) => acc + prod.cantidad, 0)
    numeroCarrito.innerText = nuevoNumero
}