// // CLASE 05: OBJETOS

// const persona = {
//     nombre: "Iván",
//     apellido: "Fernandez",
//     edad: 19,
//     pais: "Argentina"
// }

// console.log (persona)
// console.log (persona.nombre) // Del objeto persona me muestra el nombre
// console.log (persona ["pais"]) // Del objeto persona me muestra el pais / Otra forma para llamar al valor del objeto con [] y ""

// persona.nombre = "Agustina" // Redefino el valor "Ivan" por uno nuevo: "Agustina"
// persona.edad = 13

// console.warn (persona)
// console.warn (persona.nombre)


// // FUNCION CONSTRUCTORA
// function Producto (nombre, categoria, precio) {
//     this.nombre = nombre
//     this.categoria = categoria
//     this.precio = precio
// }

// const producto1 = new Producto ("Chessecake de frutos rojos", "Cakes", 7000)

// console.log (producto1)


// // Otro metodo para declarar funcion constructora (que se llaman en realidad "Metodo constructor")
// function Persona (algo, algo1) {
//     this.nombre = algo.nombre
//     this.apellido = algo.apellido
//     this.edad = algo.edad
//     // Se puede agregar 2 parametros en un constructor
//     this.hobbies = algo1.hobbies
//     this.nacionalidad = algo1.nacionalidad

//     // Metodos
//     this.presentacion = function () {
//         console.info ("Hola, me llamo " + this.nombre)
//     }
// }

// const persona1 = new Persona (
//     {
//     nombre: "Lionel",
//     apellido: "Messi",
//     edad: 36
//     },
//     {
//     hobbies: "futbol",
//     nacionalidad: "Argentina"
//     }
//     )

// console.log (persona1)
// persona1.presentacion ()


// // CLASES Y METODOS
// class Auto {
//     constructor (modelo, marca, anio) {
//         this.modelo = modelo;
//         this.marca = marca;
//         this.anio = anio;

//         // Metodo
//         this.descripcion = function () {
//             console.log ("Vendo: " + this.marca + " " + this.modelo + " del año " + this.anio)
//         }
//     }
// }

// const auto1 = new Auto ("Gol Trend", "Volkswagen", 2022)

// console.log (auto1)
// auto1.descripcion ()


// // IN
// console.log ("nombre" in persona1) //In nos devuelve True o False (valor booleano)

// if ("nombre" in persona1) {
//     console.log (persona1.nombre)
// } else {
//     console.log ("No hay nombre")
// }


// // FOR...IN
// for (const propiedad in persona1) {
//     console.log (propiedad)
// }

// // Se pueden usar funciones y variables externas (global) 
// // como propiedades adentro de los objetos



// // CLASE 06: ARRAYS

// const arrayUno = [
//     "hola", "como", "estas"
// ] 

// console.log (arrayUno)
// console.log (arrayUno.length) //Se usa length para saber la cantidad de elementos de un array
// console.log (arrayUno[0]) //Consologear un elemento especifico del array dependiendo su indice


// // Ciclo for que me imprime los elementos dependiendo del indice que le indico
// for (let i = 0; i < 3; i++) {
//     console.log (arrayUno [i])
// }

// for (let i = 0; i < arrayUno.length; i++) {
//     console.log (arrayUno [i])
// } //con el .length permite agregar todos los elementos que quiera en el array sin hacer ninguna modificacion


// // Agregar un elemento al array en el último indice (.push)
// arrayUno.push ("Ivan")
// console.log (arrayUno)

// // Agregar un elemento al array en el primer indice (.unshift)
// arrayUno.unshift ("Primero")
// console.log (arrayUno)

// // Eliminar el primer elemento del array (.shift)
// arrayUno.shift ()
// console.log (arrayUno)

// // Eliminar el último elemento del array (.pop)
// arrayUno.pop ()
// console.log (arrayUno)

// // Eliminar varios elementos consecutivos (.splice)
// arrayUno.splice (0,1) 
// console.log (arrayUno)

// // Agregar caracteres en el medio de los elementos (.join)
// console.log (arrayUno.join (" "))
// console.log (arrayUno.join (", "))
// console.log (arrayUno.join (" 1 "))

// // Concatenar arrays (.concat)
// const arrayDos = [
//     1, 2, 3, 4, 5
// ]

// const arrayTres = arrayUno.concat(arrayDos)
// console.log (arrayTres)

// // Tomar partes de un array para poner en otro array (.slice)
// const arrayCuatro = arrayTres.slice (2, 7)
// console.log (arrayCuatro)

// // Metodo que me permite saber el indice que tiene cualquier elemento del array (indexOf)
// console.log (arrayCuatro.indexOf (1))

// // Metodo que me permite saber si un elemento esta en el array (.includes)
// console.log (arrayCuatro.includes ("estas"))
// console.log (arrayCuatro.includes ("hola"))
// console.log (arrayCuatro.includes (2))

// // Dar vuelta todo el array (.reverse)
// console.log (arrayCuatro.reverse ()) //Es muy peligroso porque me cambia todo


// // ARRAYS CON OBJETOS
// const objeto1 = {
//     id: 1,
//     producto: "Croissant"
// }

// const objeto2 = {
//     id: 2,
//     producto: "Tostado de jamon y queso"
// }

// const arrayCinco = [
//     objeto1,
//     objeto2
// ]

// console.log (arrayCinco)

// // Se pueden usar los comandos de arrays tambien con objetos
// arrayCinco.push (
//     {
//         id: 3,
//         producto: "Chipa"
//     }
// )

// console.log (arrayCinco)

// // Tomar el id y producto de todos los objetos
// for (const i of arrayCinco) {
//     console.log (i.id)
//     console.log (i.producto)
// }

// // Uso de clases
// class Producto {
//     constructor (id, nombre, precio, stock) {
//         this.id = id
//         this.nombre = nombre.toUpperCase () //Convierte todo a mayuscula
//         this.precio = parseFloat (precio) //Parseo el precio (me da con coma)
//         this.stock = stock
//     }
//     obtenerPrecio () {
//         console.log ("El precio del producto: " + this.nombre + " es: " + this.precio + "$ ARS")
//     }
//     obtenerStock () {
//         if (this.stock === true) {
//             console.log ("Hay stock de: " + this.nombre)
//         } else {
//             console.log ("No hay stock de: " + this.nombre)
//         }
//     }
//     calcularPrecioConIVA () {
//         const precioConIVA = this.precio * 1.21
//         return precioConIVA.toFixed (2)
//     }
// } 

// const productos = []

// productos.push (
//     new Producto (1, "croissant", 500, true)
// )

// productos.push (
//     new Producto (2, "Porcion de chessecake", 1000, false)
// )

// console.log (productos)

// // Obtener el precio de todos los productos
// for (const prod of productos) {
//     prod.obtenerPrecio ()
// }

// // Obtener el stock de todos los productos 
// for (const prod of productos) {
//     prod.obtenerStock ()
// }

// // Obtener el precio con IVA 
// for (const prod of productos) {
//     const precioConIVA = prod.calcularPrecioConIVA();
//     console.log("El precio con IVA del producto " + prod.nombre + " es: $" + precioConIVA + " ARS");
// }



// // CLASE 07: FUNCIONES DE ORDEN SUPERIOR 

// // Abstraccion

// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }

// console.log (total)


// // Retornar funciones

// function esMayorQue (numero) {
//     return (mayor) => mayor > numero //Retorna una funcion anonima que define por true o false si el numero ingresado es mayor que "numero"
// }

// let mayorQueNumero = esMayorQue (20)

// console.log (mayorQueNumero(21))


// function asignarOperacion (operacion) {
//     if (operacion == "sumar") {
//         return (a,b) => a + b
//     } else if (operacion == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion ("sumar")
// let resta = asignarOperacion ("restar")

// console.log (suma(4,5))
// console.log (resta(8,3))


// // Recibir otra funcion como parametro

// function porCadaUno (myArray, myFuncion) { //recibe un array y una funcion como parametro
//     for (const i of myArray) {
//         myFuncion (i)
//     }
// }

// const arrayNumeros = [1, 45, 32, 47, 59]

// porCadaUno (arrayNumeros, console.log)

// // Me acumula los numeros del array 
// let total = 0
// function acumular (numero) {
//     total += numero
// }

// porCadaUno (arrayNumeros, acumular)
// console.log (total)

// // Funcion que me duplica todos los valores del array numeros y me genere un nuevo array
// let arrayDuplicado = []

// porCadaUno (arrayNumeros, (num) => { // le paso una funcion anónima
//     arrayDuplicado.push (num * 2)
// })

// console.log (arrayNumeros)
// console.log (arrayDuplicado)

// // Aplicando la funcion acumular al array duplicado
// porCadaUno (arrayDuplicado, acumular)
// console.log (total)


// // Métodos de búsqueda y transformación 

// // Metodo forEach (): Itera sobre el array y por cada elemento ejecuta la funcion que enviemos 
// // por parametro, la cual recibe a su vez el elemento del array que se está recorriendo.
// const numeros = [1, 2, 3, 4, 5]

// numeros.forEach ((numero) => {console.log (numero)})

// // Método find (): Recibe una funcion de comparación por parámetro. Captura el elemento que se está recorriendo y retorna 
// // true o false segun la comparacion ejecutada. El metodo retorna el primer elemento que cumpla con esa condicion.
// const productos = [
//     { nombre: "Harina", precio: 400},
//     { nombre: "Azucar", precio: 500},
//     { nombre: "Queso", precio: 3000}
// ]

// const busqueda1 = productos.find (
//     (siSu) => siSu.nombre === "Harina" // pongo siSu pero puedo poner lo que quiera
// )

// const busqueda2 = productos.find (
//     (siSu) => siSu.precio > 400
// )

// const busqueda3 = productos.find ((siSu) => siSu.precio < 200)

// console.log (busqueda1)
// console.log (busqueda2)
// console.log (busqueda3) // undefined

// // Método filter (): Igual que find (), recibe una funcion comparadora por parametro, y retorna un NUEVO array con todos
// // los elementos que cumplan esa condición. Si no hay coincidencias, retorna un array vacío.
// const resultado1 = productos.filter (
//     (siSu) => siSu.nombre.includes ("a")
// )

// const resultado2 = productos.filter (
//     (siSu) => siSu.precio > 2000
// )

// console.log (resultado1)
// console.log (resultado2)

// // Método some (): Funciona igual que el find () recibiendo una funcion de busqueda. En vez de retornar el elemento
// // encontrado, some () retorna TRUE o FALSE segun el resultado de la iteracion de busqueda
// const seEncuentra = productos.some (
//     (siSu) => siSu.nombre.includes ("Az")
// )

// const seEncuentra2 = productos.some (
//     (siSu) => siSu.precio > 5000
// )

// console.log (seEncuentra)
// console.log (seEncuentra2)

// // Método map (): Crea un NUEVO ARRAY con todos los elementos del original transformados segun las operaciones de la funcion
// // enviada por parametro. Tiene la misma cantidad de elementos pero los almacenados son el return de la funcion. 
// const nombresProductos = productos.map ( (soloEl) => soloEl.nombre )

// console.log (nombresProductos)

// const actualizarPrecios = productos.map ( 
//     (si) => {
//         return {
//             nombre: si.nombre,
//             precio: si.precio * 1.30
//         }
//     } 
// )

// console.log (actualizarPrecios)

// // Metodo reduce (): Nos permite obtener un unico valor tras iterar sobre el array. Funciona como un metodo que resume 
// // el array a un único valor de retorno. Me podria servir para un simulador de compras, al sumar el precio de todos los productos elegidos.
// const totalArrayNumeros = numeros.reduce ((ac, el) => ac + el, 0)

// console.log (totalArrayNumeros)

// // Metodo sort (): Nos permite REORDENAR un array según un criterio que definamos. Recibe una funcion de comparacion por parametro que, a la vez,
// // recibe dos elementos del array. La funcion retorna un valor númerico (1, -1, 0), que indica qué elemento se posiciona antes o despues.
// const arrayNumeros = [1, 80, 45, 18, 134]

// arrayNumeros.sort ( (a, b) => a - b ) // Orden creciente

// console.log (arrayNumeros) // TENER CUIDADO: me cambia el orden del array

// arrayNumeros.sort ( (a, b) => b - a ) // Orden descendente 

// console.log (arrayNumeros) // TENER CUIDADO: me cambia el orden del array




// // CLASE 08: FUNCIONES DE ORDEN SUPERIOR II

// // MATH: El objeto Math funcionacomo un contenedor de herramientas y métodos paraa realizar operaciones matematicas

// console.log (Math.E)
// console.log (Math.PI)

// const arrayNumber = [1, 2, 5, 56, 9]

// console.log (Math.max(1, 2, 5, 56, 9))
// console.log (Math.min (1, 2, -5, 56, 9))

// console.log (Math.max(1, 2, 5, Infinity, 56, 9))
// console.log (Math.min (1, 2, -5, -Infinity, 56, 9))


// // Ceil, floor y round (sirven para redondear un valor numerico a un valor entero)

// const pi = Math.PI

// console.log (Math.ceil (pi)) // ceil devuelve el entero mayor o igual mas proximo
// console.log (Math.floor (pi)) // floor devuelve el entero mas cercano redondeado hacia abajo
// console.log (Math.round (pi)) // round retorna el valor de un numero redondeado al entero mas cercano

// const x = 1.24353453

// console.log (Math.ceil (x))
// console.log (Math.floor (x))
// console.log (Math.round (x))


// // Square root: Retorna la raiz cuadrada de un numero.

// const raizCuadrada = 16 ** (1/2) //Calcular raices cuadradas a la vieja usanza
// console.log (raizCuadrada)

// //Usando Math:
// console.log (Math.sqrt (16))
// console.log (Math.sqrt (0))
// console.log (Math.sqrt (-9))


// // Random: genera un numero pseudo-aleatorio entre 0 y 1

// console.log (Math.random())
// console.log (Math.random())
// console.log (Math.random())

// // Se puede generar numeros aleatorios en otro rango deseado, multiplicando
// // su resultado por el rango esperado. A la vez podemos sumar el limite inferior.
// console.log (Math.random () * 10) // De 0 a 10
// console.log (Math.random () * 40) // De 0 a 40
// console.log (Math.random () * 20 + 5) // De 5 a 20

// const generadorNumero = () => {
//     return Math.round (Math.random () * 100) //Usando Math.round retorna numeros en el rango de 0-100.
// }

// console.log (generadorNumero ()) 


// // CLASE DATE: 

// // Instanciar un objeto Date nos genera la fecha y el tiempo actual

// const diaDeHoy = new Date ()
// console.log (diaDeHoy)

// console.log (new Date (1992, 1, 22)) // Los meses los toma de 0 a 11

// const miFechaDeNacimiento = new Date (2003, 10, 22)
// console.log (miFechaDeNacimiento)

// console.log (new Date (2023, 11, 24, 23, 59, 59)) // 1 seg antes de navidad


// // Obtener un valor singular de la fecha

// // getMonth (): nos retornará el number que representa el mes (entre 0 y 11)
// console.log (miFechaDeNacimiento.getMonth())

// // getFullYear (): nos devolverá el number que representa el año creado
// console.log (miFechaDeNacimiento.getFullYear())

// // getDay (): nos retornará el number que representa el día creado (1=lunes, 7=domingo)
// console.log (miFechaDeNacimiento.getDay())

// // Mas ejemplos:

// console.log (diaDeHoy.toDateString()) // Me retorna la fecha sin la hora 
// console.log (diaDeHoy.toLocaleString()) // Me retorna la fecha y la hora en formato local (de Arg)
// console.log (diaDeHoy.toLocaleDateString()) // Me retorna solamente la fecha en formato local
// console.log (diaDeHoy.toTimeString()) // Me retorna solamente la hora en formato local

// console.log ("Copyright - CoderHouse - Todos los derechos reservados | año: " + diaDeHoy.getFullYear ())


// // Calculando cuantos dias faltan para navidad

// const navidad = new Date (2023, 11, 25)
// console.log (navidad)

// console.log (navidad - diaDeHoy) // Nos da en milisegundos

// const milisegundos = 1 * 24 * 60 * 60 * 1000 // 86400000 milisegundos tiene un dia
// console.log (milisegundos)

// console.log ("Para navidad faltan " + Math.round((navidad - diaDeHoy) / milisegundos) + " dias") // Cantidad de días


// // Me calcula cuanto tardó un proceso (consologear algo x veces)
// const inicio = new Date ()

// for (let i = 0; i < 50; i++) {
//     console.log (" console logs")
// }

// const final = new Date ()

// console.log ("El proceso tardó: " + (final - inicio)/1000 + " segundos")




// // CLASE 09: DOM

// console.log (document) // Me muestra todo el documento

// const doc = document // Se le pueden asignar elementos a variables y constantes
// const cuerpo = document.body
// const cabeza = document.head
// const titulo = document.createElement ('title') // Creo el elemento 'titulo'
// titulo.innerText = 'Reservas' // innerText nos permite modificar el texto de los elementos

// cabeza.appendChild (titulo) // Le agrego el elemento titulo como hijo del Head (que lo tengo asignado a la constante 'cabeza')

// console.log (titulo)


// // Accesos al DOM:

// // .getElementById (): Sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificacion.
// const tituloPrincipal = document.getElementById ('h1') 
// tituloPrincipal.innerHTML = 'Reservas' //innerHTML en vez de solo texto modifica la estructura HTML
// console.log (tituloPrincipal)

// // .getElementsByClassName (): Sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias.
// const parrafo = document.getElementsByClassName ("parrafo") [0] // Siempre que llamo a una clase debo indicarle a cual quiero que me seleccione, mediante []
// parrafo.innerHTML = `<strong>Seleccionar fecha y hora</strong>` // Backsticks => Introduce literalmente lo que le agregue
// console.log (parrafo)

// // .getElementsByTagName (): Sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificacion. Esta opcion es la menos especifica de todas ya que es muy probable que las etiquetas se repitan en el codigo HTML.
// const tituloSecundario = document.getElementsByTagName ('h2') [0]
// tituloSecundario.innerHTML = 'Sucursal'
// console.log (tituloSecundario)


// // Meterle estilos a los elementos:

// tituloPrincipal.style.color = 'violet'

// tituloSecundario.style.color = 'black'


// // Eiminar un elemento (remove):

// tituloSecundario.remove () 


// // Creando botones:

// const comprar = document.getElementById ('comprar')
// const cantidad = document.getElementById ('cantidad')

// comprar.innerText = 'Comprar'
// cantidad.innerText = 'Cantidad'

// comprar.style.backgroundColor = 'green'
// cantidad.style.backgroundColor = 'red'

// comprar.style.color = 'black'
// cantidad.style.color = 'white'


// // Concatenacion

// const articulo2 = document.getElementById ('articulo2')

// const productos = {
//     id: 1,
//     nombre: 'Queso',
//     precio: 3000
// }

// const concatenado1 = "Su id es: " + productos.id + ", es el producto: " + productos.nombre +
// " y vale: $" + productos.precio 

// console.log (concatenado1)

// const concatenadoTemplateString = `Su id es: ${productos.id}, es el producto: ${productos.nombre} y vale: $${productos.precio}`

// console.log (concatenadoTemplateString)

// // articulo2.innerHTML = ` 
// // <p>Id: ${productos.id}</p>
// // <p>Producto: ${productos.nombre}</p>
// // <p>Precio: $${productos.precio}</p>
// // `

// // 
// const articulo3 = document.getElementById ('articulo3')

// arrayDeProductos = [
//     {
//         id: 1,
//         nombre: 'Queso',
//         precio: 3000
//     },
//     {
//         id: 2,
//         nombre: 'Harina',
//         precio: 800
//     },
//     {
//         id: 3,
//         nombre: 'Leche',
//         precio: 1000
//     }
// ]

// let ul = document.createElement ('ul') //Creo un ul

// arrayDeProductos.forEach ((prod) => { // A ese ul le vamos a insertar un li por cada objeto del array, y ese li me va a decir su id, nombre y precio
//     ul.innerHTML += `<li>
//     <p>ID: ${prod.id}</p>
//     <p>Producto: ${prod.nombre}</p>
//     <p>Precio: $${prod.precio}</p>
//     </li>`
// })

// articulo3.appendChild (ul)


// // Query selector: Nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.

// let contenedorArticulo3 = document.querySelector ('#articulo3 p') // Accedo al elemento p[0] del articulo 3
// console.log (contenedorArticulo3)




// // CLASE 10: EVENTOS => Es cuando un usuario da una accion y la pagina le devuelve una reaccion.

// // DECLARAR EVENTOS: Primero defino una constante o variable y le asigno el elemento que quiero, en estos casos, botones. Luego con alguna
// // opcion para definir eventos le declaro un evento, con una accion por parte del usuario y una funcion que le será mostrada

// // OPCION  1: addEventListener () => Permite definir qué evento escuchar sobre cualquier elemento seleccionado.

// comprar.addEventListener ('click', clickComprar) // Uso el boton comprar de la clase anterior

// function clickComprar () {
//     alert ("Producto agregado al carrito")
// }


// // OPCION 2: Con el nombre del evento y el prefijo on.

// cantidad.onclick = () => { alert ("Usted hizo click en este boton!") }


// // OPCION 3: Sintaxis => Se determina el evento en el atributo de una etiqueta HTML.
// // La denominacion del atributo es identica al de la propiedad de la opcion 2 (prefijo on).
// // MIRAR LA PAGE RESERVAS / BOTON 3 


// // EVENTOS MAS COMUNES:

// // MOUSE:

// // onlick: Hacer click en el elemento activa el elemento

// // onmousemove: El movimiento del mouse sobre el elemento activa el evento.
// const boton4 = document.getElementById ('boton4')
// boton4.onmousemove = () => {console.log('El usuario movió el mouse sobre el boton')}


// // TECLADO:

// // onkeyup y onkeydown:
// let nombre = document.getElementById ('nombre')
// let edad = document.getElementById ('edad')
// let apellido = document.getElementById ('apellido')
// let contrasena = document.getElementById ('contrasena')

// nombre.onkeyup = () => {console.log ('keyUp')} // keyUp: Cuando se suelta una tecla.
// edad.onkeydown = () => {console.log ('keyDown')} // keyDown: Cuando se presiona.
// apellido.onchange = () => {console.log (apellido.value)} //onChange: Se activa cuando se detecta un cambio en el valor del elemento.
// contrasena.addEventListener ('input', () => {console.log (contrasena.value)}) // Elemento input: Se usa para ejecutar una funcion cada vez que se tipea sobre el campo.


// // FORMULARIO

// const myFormulario = document.getElementById ('formulario')
// myFormulario.addEventListener ('submit', validarFormulario)

// function validarFormulario(event){
//     event.preventDefault()
//     let form = event.target
//     console.log (form.children[1].value)
//     console.log (form.children[3].value)
// }