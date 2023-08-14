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
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            text: 'Por favor, complete todos los campos del formulario!',
            position: 'center'
        })
    } else {
        sessionStorage.setItem('Reservado', JSON.stringify(reserva)) //Con STRINGIFY transformo un objeto a un string en formato JSON
        Swal.fire({
            icon: 'success',
            title: 'Reserva confirmada!',
            text: 'Felicidades, su reserva fue confirmada con exito!!!',
            position: 'center'
        })
    } 

    const reservaConfirmada = sessionStorage.getItem('Reservado')
    const reservaParseada = JSON.parse(reservaConfirmada)

    const confirmacion = document.getElementById('p-reserva')
    const divConfirmacion = document.getElementById('div-confirmacion')

    confirmacion.innerHTML = `
    ${reservaParseada.nombre} le informamos que su reserva fue confirmada con exito!
    Lo esperamos el día ${reservaParseada.fecha}.
    `

    divConfirmacion.classList.add ("cambiar-div-confirmacion")
    divConfirmacion.prepend(confirmacion)
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});
