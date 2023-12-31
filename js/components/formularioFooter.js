const emailFormulario = document.getElementById ('formulario-email')
const emailInput = document.getElementById ('email-recuadro')
const emailEnviar = document.getElementById ('email-enviar')

emailFormulario.addEventListener ('submit', mandarEmail)

function mandarEmail (e) {
    e.preventDefault () 
    let formularioEmail = e.target
    let inputEmail = formularioEmail.children[0].value;

    if (inputEmail === '') {
        Swal.fire({
            icon: 'error',
            title: 'Email incorrecto!',
            text: 'Por favor, ingrese un email valido!',
            position: 'center'
        })
    } else {
        localStorage.setItem('Mandado', JSON.stringify(inputEmail))
        const emailEnviado = localStorage.getItem('Mandado')
        const emailParseado = JSON.parse(emailEnviado)
        Swal.fire({
            icon: 'success',
            title: 'Email enviado!',
            text: `Se le enviaran las futuras ofertas al siguiente email: ${emailParseado}`,
            position: 'center'
        })
    }
}