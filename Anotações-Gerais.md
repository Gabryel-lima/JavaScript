# Fazendo entrada de dados no node

## Certifique-se de ter instalado o módulo 'prompt-sync' executando o comando `npm i prompt-sync` antes de executar esse código.

### Se executa no terminal na pasta que está manipulando com o node:

O código que você forneceu está utilizando o módulo 'prompt-sync' para obter entrada do usuário em um ambiente de linha de comando. O comando 'npm i prompt-sync' instala o módulo 'prompt-sync'.

Após instalar o módulo, você pode usá-lo para solicitar ao usuário uma entrada utilizando o objeto `terminal`. No seu código, você está pedindo ao usuário para digitar um nome a ser pesquisado e armazenando a entrada na variável `pesquisa`.

Aqui está um exemplo de como você pode usar o módulo 'prompt-sync' para isso:

var prompt = require('prompt-sync')();

console.log("Informe um nome a pesquisar: ");
var pesquisa = prompt();

console.log("Você digitou: " + pesquisa);

No código acima, a função `prompt()` é utilizada para obter a entrada do usuário. O valor digitado é então armazenado na variável `pesquisa`, que pode ser utilizada posteriormente no seu código. Por fim, o código exibe o valor digitado no console.

# Função

functioninput(message) {

    var prompt =require('prompt-sync')();

    if (typeof message !=='string'&&typeof message !=='number') {

    console.error('\nNenhum parâmetro de mensagem foi fornecido!\\n');

    return;

    }

    /* console.log(message); */

}

input()

---
