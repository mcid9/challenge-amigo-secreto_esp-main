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
        asignarAmigoLista();
        limpiarInput();
    }
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    document.querySelector('#listaAmigos')
}

function asignarAmigoLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
