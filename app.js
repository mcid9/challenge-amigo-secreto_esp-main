// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    
    //Comprobar si input amigo está vacío.
    if (!inputAmigo) {
        alert('Debe ingresar un amigo');
    } else {
        amigos.push(inputAmigo);
        //console.log(amigos);
        limpiarInput();
    }
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}