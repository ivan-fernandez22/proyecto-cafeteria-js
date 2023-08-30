//  Declaracion de cakes

class Cakes {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre.toUpperCase()
        this.descripcion = descripcion
        this.precio = parseFloat(precio)
        this.imagen = imagen
    }
    obtenerPrecio() {
        console.log("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
}

const arrayDeCakes = []

arrayDeCakes.push (new Cakes 
    ("Porción de chessecake de frutos rojos", 
    "Base con galletitas, queso crema, crema y frutos rojos (sin gelatina y horneado, 100% natural)", 
    1000, 
    "../imgs/chessecakeTH.jpg")
)

arrayDeCakes.push (new Cakes 
    ("Porción de chessecake de maracuya", 
    "Base con galletitas, queso crema, crema y maracuya (sin gelatina y horneado, 100% natural)", 
    1000,
    "../imgs/maracuya3.jpg")
)

arrayDeCakes.push (new Cakes 
    ("Porción de torta de chocolate", 
    "Bizcocho humedo de chocolate con dulce de leche",
    900, 
    "../imgs/torta-choc-manjar-editada.jpg")
)

arrayDeCakes.push (new Cakes 
    ("Tarta individual de lemon pie",
    "Una masa casera con una deliciosa crema de limon y un exquisito merengue italiano",
    950,
    "../imgs/individual_lemon_pie_1.jpg")
)

arrayDeCakes.push (new Cakes 
    ("Porción de torta oreo",
    "Base con galletitas, queso crema, crema, dulce de leche y galletitas oreo (sin gelatina y horneado, 100% natural)", 
    1100,
    "../imgs/doble-oreo_landscapeThumbnail_es (1) (1).jpeg")
)

arrayDeCakes.push (new Cakes 
    ("Porción de chocotorta", 
    "Base con galletitas chocolinas, queso crema, crema, dulce de leche y más chocolinas", 
    1100, 
    "../imgs/chocotorta.jpg")
)

arrayDeCakes.push (new Cakes 
    ("Porción de carrot cake", 
    "Bizcocho con zanahoria y nuez, butter cream y ralladura de zanahoria (horneado y sin conservantes, 100% natural)", 
    950, 
    "../imgs/carrot-cake.jpg")
)



// Declaracion de sandwichs y salados 

class Sandwichs {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre.toUpperCase()
        this.descripcion = descripcion
        this.precio = parseFloat(precio)
        this.imagen = imagen
    }
    obtenerPrecio() {
        console.log("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
}

const arrayDeSandwichs = []

arrayDeSandwichs.push (new Sandwichs 
    ("Tostados de jamon y queso", 
    "cuatro tostados triangulares de jamon y queso", 
    1300, 
    "../imgs/tostado-jyq.jpg")
)

arrayDeSandwichs.push (new Sandwichs 
    ("Tostadas Le Paradis", 
    "Dos tostadas con palta, albahaca, tomate y huevo", 
    1450, 
    "../imgs/tostada.jpg")
)

arrayDeSandwichs.push (new Sandwichs
    ("Sandwich mediterraneo", 
    "Baguette, jamon crudo, rucula, tomates secos y burrata", 
    1700, 
    "../imgs/sandwich-mediterraneo (1) (1).jpg")
)

arrayDeSandwichs.push (new Sandwichs 
    ("Sandwich veggie", 
    "Hamburguesa de soja, queso vegano, cebolla morada, tomates y mix de verdes (100% natutal)", 
    1600, 
    "../imgs/hamburguesa-veggie (1).jpg")
)



// Declaracion de rolls y croissants

class Rolls {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre.toUpperCase()
        this.descripcion = descripcion
        this.precio = parseFloat(precio)
        this.imagen = imagen
    }
    obtenerPrecio() {
        console.log("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
}

const arrayDeRolls = []

arrayDeRolls.push (new Rolls 
    ("Roll de canela", 
    "Esponjoso y con un delicioso glaseado", 
    300, 
    "../imgs/rollitos-canela.jpg")
)

arrayDeRolls.push (new Rolls 
    ("Roll de canela y manzana", 
    "Con manzanas rojas y nuez", 
    400, 
    "../imgs/rollosManzanCanelaNuez.jpg")
)

arrayDeRolls.push (new Rolls 
    ("Roll de canela y chocolate", 
    "Con chocolate suizo",
    400, 
    "../imgs/rollChocolate (1) (1).jpg")
)

arrayDeRolls.push (new Rolls 
    ("Croissant", 
    "Sin relleno",
    350, 
    "../imgs/croissants-img1.jpg")
)

arrayDeRolls.push (new Rolls 
    ("Croissant de chocolate", 
    "Relleno de chocolate suizo",
    450, 
    "../imgs/croissant-chocolate.jpg")
)

arrayDeRolls.push (new Rolls 
    ("Croissant de frutos rojos", 
    "con frutos rojos (moras, frutillas y cerezas)", 
    450, 
    "../imgs/croissants-bicolor-relleno.jpg")
)

arrayDeRolls.push (new Rolls 
    ("Croissant de oreo", 
    "con relleno de oreo y galletitas por encima", 
    500, 
    "../imgs/croissant-oreo.jpg")
    )



// Declaracion de panadería

class Panaderia {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre.toUpperCase()
        this.descripcion = descripcion
        this.precio = parseFloat(precio)
        this.imagen = imagen
    }
    obtenerPrecio() {
        console.log("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
    }
}

const arrayDePanaderia = []

arrayDePanaderia.push (new Panaderia 
    ("Medialuna", 
    "De manteca",
    150, 
    "../imgs/medialunas (1).jpg")
)

arrayDePanaderia.push (new Panaderia 
    ("Chipas (1/4 kg)", 
    "Con 3 tipos de quesos, 100% natural",
    600, 
    "../imgs/chipa.jpg")
)

arrayDePanaderia.push (new Panaderia 
    ("Scone", 
    "De queso",
    300, 
    "../imgs/scones.jpg")
)

arrayDePanaderia.push (new Panaderia 
    ("Dona de chocolate", 
    "Glaseado de chocolate con chispitas",
    250, 
    "../imgs/donas (1).jpg")
)

arrayDePanaderia.push (new Panaderia 
    ("Dona Le Paradis", 
    "Glaseado rosa con chispitas", 
    250, 
    "../imgs/dona-rosa.jpg")
)



// // Cargando los productos al HTML 

const contenedorCakes = document.querySelector("#contenedor-cakes")
const contenedorSandwichs = document.querySelector ("#contenedor-sandwichs")
const contenedorRolls = document.querySelector ("#contenedor-rolls")
const contenedorPanaderia = document.querySelector ("#contenedor-panaderia")

// Cargando cakes
function cargarCakes () {
    arrayDeCakes.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <div class="producto-div-contenedor">
            <h4 class="producto-titulo">${producto.nombre}</h4>
            <p class="producto-texto">${producto.descripcion}</p>
            <p class="producto-precio"><b>$${producto.precio}</b></p>
            <button class="producto-carrito">Agregar al carrito <i class="bi bi-cart-plus-fill"></i></button>
        </div>

        <div class="producto-div-img">
            <img src="${producto.imagen}" class="producto-img" alt="${producto.nombre}}">
        </div>
        `

        contenedorCakes.append (div)
    })
}


// Cargando Sandwichs 
function cargarSandwichs () {
    arrayDeSandwichs.forEach(producto => {
        const div2 = document.createElement("div")
        div2.classList.add("producto")
        div2.innerHTML = `
        <div class="producto-div-contenedor">
            <h4 class="producto-titulo">${producto.nombre}</h4>
            <p class="producto-texto">${producto.descripcion}</p>
            <p class="producto-precio"><b>$${producto.precio}</b></p>
            <button class="producto-carrito">Agregar al carrito <i class="bi bi-cart-plus-fill"></i></button>
        </div>

        <div class="producto-div-img">
            <img src="${producto.imagen}" class="producto-img" alt="${producto.nombre}}">
        </div>
        `

        contenedorSandwichs.append (div2)
    })
}


// Cargando rolls y croissants
function cargarRolls () {
    arrayDeRolls.forEach(producto => {
        const div3 = document.createElement("div")
        div3.classList.add("producto")
        div3.innerHTML = `
        <div class="producto-div-contenedor">
            <h4 class="producto-titulo">${producto.nombre}</h4>
            <p class="producto-texto">${producto.descripcion}</p>
            <p class="producto-precio"><b>$${producto.precio}</b></p>
            <button class="producto-carrito">Agregar al carrito <i class="bi bi-cart-plus-fill"></i></button>
        </div>

        <div class="producto-div-img">
            <img src="${producto.imagen}" class="producto-img" alt="${producto.nombre}}">
        </div>
        `

        contenedorRolls.append (div3)
    })
}


// Cargando panadería
function cargarPanaderia () {
    arrayDePanaderia.forEach(producto => {
        const div4 = document.createElement("div")
        div4.classList.add("producto")
        div4.innerHTML = `
        <div class="producto-div-contenedor">
            <h4 class="producto-titulo">${producto.nombre}</h4>
            <p class="producto-texto">${producto.descripcion}</p>
            <p class="producto-precio"><b>$${producto.precio}</b></p>
            <button class="producto-carrito">Agregar al carrito <i class="bi bi-cart-plus-fill"></i></button>
        </div>

        <div class="producto-div-img">
            <img src="${producto.imagen}" class="producto-img" alt="${producto.nombre}}">
        </div>
        `

        contenedorPanaderia.append (div4)
    })
}

cargarCakes ()
cargarSandwichs ()
cargarRolls ()
cargarPanaderia () 