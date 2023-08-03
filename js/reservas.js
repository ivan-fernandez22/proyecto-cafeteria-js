// FORMULARIO RESERVAS
const myFormulario = document.getElementById('formulario')
myFormulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault()
    let form = e.target
    let inputNombre = form.children[2].value;
    let inputApellido = form.children[6].value;
    let inputFecha = form.children[26].value
    let boton = form.children[28]
    let reserva = {
        nombre: inputNombre,
        apellido: inputApellido,
        fecha: inputFecha
    }

    if ((inputNombre && inputApellido && inputFecha) === '') {
        alert('Todos los campos son obligatorios!!')
    } else {
        sessionStorage.setItem('Reservado', JSON.stringify(reserva)) //Con STRINGIFY transformo un objeto a un string en formato JSON
    }

    const reservaConfirmada = sessionStorage.getItem('Reservado')
    const reservaParseada = JSON.parse(reservaConfirmada)
    // console.log ("Bienvenido " + reservaParseada.nombre)

    const confirmacion = document.getElementById('p-reserva')
    const divConfirmacion = document.getElementById('div-confirmacion')

    confirmacion.innerHTML = `
        ${reservaParseada.nombre} le informamos que su reserva para la fecha ${reservaParseada.fecha} fue confirmada con exito!
    `

    divConfirmacion.prepend(confirmacion)

    // console.log(form.children[2].value)
    // console.log(form.children[6].value)
    // console.log(form.children[10].value)
    // console.log(form.children[14].value)
    // console.log(form.children[18].value)
    // console.log(form.children[22].value)
    // console.log(form.children[26].value)

    // alert (`Reserva realizada con exito! Te esperamos el dia ${fecha.value}`)
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});
