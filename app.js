// Variables
let amigos = [];
let amigoSecreto = '';

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    
    //Comprobar si input amigo está vacío.
    if (!inputAmigo) {
        alert('Debe ingresar un amigo');
    } else {
        //Agrega amigo al array, muestra el array en lista html y limpia el input con el nombre.
        amigos.push(inputAmigo);
        asignarAmigoLista();
        limpiarInput();
    }
}

//Limpia el nombre del amigo ingresado.
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Muestra el array en la lista html.
function asignarAmigoLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Obtiene un amigo aleatorio del array.
function obtenerAmigoSecreto() {
    amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    return amigoSecreto;
}

//Muestra el amigo secreto en el html.
function sortearAmigo() {
    //Comprueba si el array tiene al menos 2 amigos.
    if (amigos.length < 2) {
        alert('Ingresa 2 o mas amigos para poder sortear');
    } else { 
        let inputSorteo = document.getElementById('resultado');
        inputSorteo.innerHTML = obtenerAmigoSecreto();
    }
}