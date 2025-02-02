# Sorteio de Amigo Secreto

Este projeto implementa um sorteio de amigo secreto simples usando JavaScript. Permite adicionar nomes à lista, evitar nomes duplicados e sortear um nome aleatoriamente.

## Funcionalidades

*   **Adicionar Amigo:** Adiciona um nome à lista de amigos. Impede a adição de nomes vazios ou duplicados.
*   **Listar Amigos:** Exibe a lista de amigos cadastrados.
*   **Sortear Amigo:** Sorteia um amigo aleatoriamente da lista. Exibe uma mensagem se a lista estiver vazia.
*   **Exibir Amigo Sorteado:** Exibe o nome do amigo sorteado na tela.
*   **Limpar Campo:** Limpa o campo de input após adicionar um nome.

## Como usar

1.  **HTML:** Inclua o arquivo `index.html` no seu navegador.
2.  **JavaScript:** Certifique-se de que o arquivo `script.js` (contendo o código JavaScript) esteja incluído no seu HTML, preferencialmente antes do fechamento da tag `</body>`.

## Estrutura do HTML (exemplo)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sorteio de Amigo Secreto</title>
</head>
<body>
    <input type="text" id="amigo" placeholder="Digite um nome">
    <button onclick="adicionarAmigo()">Adicionar Amigo</button>

    <ul id="listaAmigos"></ul>

    <button onclick="exibirNomeAmigo()">Sortear Amigo</button>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
