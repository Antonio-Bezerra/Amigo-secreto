//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo === ''){
        alert('Por favor, adicionar um nome!');
        return;
    }
    amigos.push(nomeAmigo);

    atualizarLista();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarLista(){
    const listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigo.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Não tem amigos para sortear. Adicione nomes primeiros.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigosSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    resultado.innerHTML = `<li>O amigo secreto é: ${amigosSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adicionarAmigo').addEventListener('click', adicionarAmigo);
    document.getElementById('sortearAmigo').addEventListener('click', sortearAmigo);
});