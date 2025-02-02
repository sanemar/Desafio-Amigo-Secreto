let listaDeAmigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;

    if (nome.trim() === '') { 
        alert('Por favor, insira um nome.'); 
        return false; 
    } 
    if (listaDeAmigos.includes(nome)) {
        limparCampoNome();        
        return false;
    } else {        
        listaDeAmigos.push(nome);
        limparCampoNome();
        console.log(listaDeAmigos);
        atualizarListaDeAmigos(listaDeAmigos); 
        return listaDeAmigos;
    }
}

function atualizarListaDeAmigos(listaDeAmigos) {
    let lista = document.getElementById("listaAmigos");   

    lista.innerHTML = '';
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let novoNome = document.createElement("li");
        novoNome.textContent = listaDeAmigos[i];        
        lista.appendChild(novoNome);
    }     
}   

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia. Insira alguns nomes.');
        return null; 
    }

    let numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    console.log(numeroAleatorio);
    return listaDeAmigos[numeroAleatorio];    
}

function exibirNomeAmigo(){
    let amigoSorteado = sortearAmigo();
    exibirAmigoSorteado(amigoSorteado);
}
  
function exibirAmigoSorteado(amigoSorteado){
    const nomeDoAmigo = document.getElementById("resultado"); 

    if (nomeDoAmigo) {
        nomeDoAmigo.textContent = amigoSorteado ? amigoSorteado : "Nenhum amigo sorteado (lista vazia).";
    }
}

function limparCampoNome(){
    let nome = document.querySelector('input');
    nome.value = '';
}

