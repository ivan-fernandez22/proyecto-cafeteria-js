const myFormulario = document.getElementById ('formulario')
myFormulario.addEventListener ('submit', validarFormulario)

function validarFormulario(e){
    e.preventDefault()
    let form = e.target
    console.log(form.children[2].value)
    console.log(form.children[6].value)
    console.log(form.children[10].value)
    console.log(form.children[14].value)
    console.log(form.children[18].value)
    console.log(form.children[22].value)
    console.log(form.children[26].value)
    alert (`Reserva realizada con exito! Te esperamos el dia ${fecha.value}`)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});

