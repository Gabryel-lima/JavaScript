* **Clicando no botão** :

Conhecemos a tag `audio` do HTML e como ela funciona, também como adicionar código JavaScript *inline* a partir do atributo `onclick` na tag `button`, e também como é a função `alert()` do JavaScript.

* **Conectar JS com HTML** :

Aprendemos porque devemos ter arquivos dedicados para cada linguagem, e a extensão **.js** para arquivos com JavaScript, porque chamamos o nosso arquivo principal de JavaScript de `main.js`, e também, como fazemos para inserir um arquivo .js dentro de uma página HTML com a tag `script`.

* **Buscar um elemento** :

Aprendemos os tipos de seletores que podemos usar no JavaScript (elemento, classe e id), como utilizar a função **querySelector** para selecionar os elementos da nossa página HTML. Vimos nesta aula a referência `document`, que representa o documento HTML dentro do JavaScript, e o que significa o *Reference Error* e como solucionar, além de entender que o JavaScript é uma linguagem  *case sensitive* , e uso do operador ponto final para entrar dentro de referências como o `document`, e que o ponto e virgula é opcional porém recomendado.

---

* **Play no JS** :

Como manipular a tag `<audio>` do HTML através do JavaScript, como selecionar um elemento a partir de um seletor de id e a reproduzir um som a partir da função `play()`. Além disso, viu também como os erros são apresentados na aba Console da ferramenta DevTools.

* **O que é uma função?** :

O que é uma função, para que servem, como declará-la e sua sintaxe básica. Além disso, viu que a ordem de execução de um código JavaScript importa, desde a inserção da tag `script` antes do fechamento da tag `</body>` no HTML até a ordem do código JavaScript dentro do seu próprio arquivo.

* **Clique no botão** :

A utilizar o `onclick` como atributo no JavaScript, e como atribuir uma função ao `onclick` sem que esta função seja invocada imediatamente.

---

* **Lista de elementos** :

O que são os **comentários** de código e como utilizá-los para auxiliar durante a escrita da nossa aplicação. Vimos também uma alternativa ao `querySelector` quando necessário buscar muitos elementos, que é o  **`querySelectorAll`** , que retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

* **Referências** :

Para que serve uma referência e como declaramos uma referência de valor **constante** no código.

* **Conhecendo listas** :

A estrutura de uma lista em JavaScript e como podemos acessar os elementos a partir dos **índices** com a sintaxe do colchetes.

---

* **Percorrendo uma lista** :

Como percorrer uma lista usando a estrutura de repetição  *`while`* , a criar referências variáveis com `let`, e como incrementar o valor de uma variável, e criar uma condição para evitar o loop infinito, também conhecemos o atributo *`length`* contido nas listas que nos ajudou a obter dinamicamente o valor do tamanho de uma lista.

* **Função com parâmetros** :

Como declarar e utilizar **parâmetros** dentro de uma função que criamos, e o que é uma **função anônima** e o retorno *`undefined`* de uma função.

* **Textos dinâmicos** :

Como criar textos dinâmicos utilizando *`template string`* e como acessar as classes de um elemento através do atributo  *`classList`* .

* **Repetição otimizada com For** :

Como é a estrutura de repetição *`for`* e como ela pode nos ajudar com um código mais limpo, além da forma de incrementar um valor de variável com o operador `++`.

---

* **Eventos no teclado:**

O que são eventos do teclado e como usá-los: `onkeydown`e `onkeyup`. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções `add` e `remove` do `classList`.

* **Condições no código e operadores lógicos:**

O que é o objeto `event`, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento. A estrutura condicional `if` e para que ele serve, além de conhecer o operador de igualdade `==`, estritamente igual (`===`), e o operador **or** (`||`).

* **Mais condições:**

A estruturas condicionais `if` e `else` juntas. O operador *not equals* (`!=`), operador lógico **and** (`&&`) e o valor `null`.

---

O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo possível, por exemplo:

* Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
* Alterar estilos CSS da página.
* Criar novos eventos HTML.

Vamos conferir formas de realizar os itens listados acima.

**Métodos para selecionar elementos no HTML**

* `document.getElementByID(id)` - Recupera um elemento pelo ID.
* `document.getElementsByTagName(name)` - Recupera um elemento pelo nome.
* `document.getElementsByClassName(name)` - Recupera um elemento pelo nome da classe.

**Propriedades e métodos para alterar elementos no HTML**

* `element.innerHTML` - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
* `element.innerText` - Esta propriedade permite inserir textos no HTML.
* `element.attribute` - Esta propriedade altera o valor de um elemento HTML
* `element.setAttribute(atributo, valor)` - Este método altera o valor de um atributo de um elemento HTML.

**Adicionando e excluindo elementos**

* `document.write()` - Escreve no fluxo de saída do HTML.
* `document.appendChild()` - Adiciona um elemento HTML.
* `document.removeChild()` - Remove um elemento HTML.
* `document.replaceChild()` - Substitui um elemento HTML.
* `document.createElement()` - Cria um elemento HTML.

---

Quando uma equipe trabalha em algum projeto, muito provavelmente o código será lido e alterado por diversas pessoas, dessa maneira, é necessário entender diferentes formas possíveis de escrever o mesmo código, obtendo uma boa produtividade na sua performance de desenvolvimento.

Contudo, é importante para uma **pessoa programadora** entender o **que é Hoisting** e como se comporta em diferentes casos nesta linguagem.

Vamos analisar este  **código de **function declaration**** , e o que retorna:

```
console.log(soma(2, 5))
function soma(a, b) {
return a + b
}
```

Este código retorna o valor: `7`

Repare que a função consegue ser chamada antes mesmo de ter sido declarada. **Hoisting** é o termo que explica essa situação, em português ele significa “içamento”, ou “elevação” e foi citado pela primeira vez no  **[ECMAScript® 2015 Language Specification](https://262.ecma-international.org/6.0/)** . O Hoisting permite que você execute funções antes das suas declarações. Na prática, inicialmente as **declarações de funções** são colocadas na memória durante a [fase de compilação](https://www.alura.com.br/artigos/o-que-e-compilacao) e, mesmo assim, permanecem no mesmo lugar que estão digitadas.

A razão pela qual o código anterior funciona é que os mecanismos [JavaScript](https://www.alura.com.br/artigos/javascript) movem a função soma para o início do escopo, como ilustra o código abaixo:

```
function soma(a,b){
    return a + b
}
console.log(soma(2,5))
```

Entretanto, será que Hoisting funciona em outros tipos de código? Vamos conferir!

```
console.log(alura)
var alura = ‘cursos’;
```

Este código retorna:

```
undefined
```

A utilização de  **Hoisting em var não é indicada** , pois a variável criada é elevada para o escopo, mas sem o seu valor, e com isso, retorna valor `undefined`.

O comportamento é parecido utilizando também var function:

```
function testaHoisting() {
    console.log(‘testaHoisting’, alura)
    var alura = ‘cursos’
}
```

Este código retorna: `undefined`.

 **Hoisting também não é indicado utilizando let** , pois acontece um outro tipo de **comportamento não desejado:**

```
console.log(alura)
let alura = ‘cursos’;
```

Este código retorna:

```
script.js:1 Uncaught ReferenceError: Cannot access 'alura' before initialization```
```

Esta mensagem em português significa “Não é possível acessar ‘alura’ antes de sua inicialização'', ou seja, a linguagem JavaScript reconhece que ‘let = alura’ existe, porém não consegue acessar sua declaração. Esse comportamento de Hoisting com `let` é o mesmo ao utilizar `const`.

---

Nesta aula, tivemos uma pequena introdução sobre Arrays. Quando aplicamos o código abaixo, uma lista é criada com todos os elementos HTML que possuem a classe `.controle-ajuste`:

```javascript
const controle = document.querySelectorAll(".controle-ajuste")
```

Esses elementos ficam guardados na const `controle`, e podem ser manipulados posteriormente ao avançarmos com o projeto  **Robotron 2000** .

Para um melhor entendimento do que são Arrays, e como manipulá-los, recomendo a leitura deste artigo escrito pelo instrutor Neilton Seguins:

---

## O que é um array?

Os arrays são estruturas que servem para  **guardar dados** , e  **organizá-los** . Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de  **índice** . Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que precisar de calças, chapéus ou meias vai saber em que gaveta buscar.

## Para que serve um array?

De forma mais robusta, um array é uma estrutura de dados que serve para guardar elementos em um espaço da memória. Estes espaços da memória são chamados de variáveis. [Aqui](https://alura.com.br/curso-online-javascript-introducao) você encontra mais conteúdos sobre variáveis, tipos e muito mais.

## Como funciona um Array em Javascript?

Pense agora que você precisa comprar frutas no supermercado. Você logo pega uma folha de papel e uma caneta e anota cada item um abaixo do outro da seguinte forma:

Lista de Frutas:

1. Maçãs
2. Uvas
3. Bananas
4. Abacaxi
5. Morangos

Se alguém perguntar qual a terceira coisa que você precisa comprar, logo você irá olhar sua lista e responder “Bananas”.

Em [Javascript](https://www.alura.com.br/artigos/javascript) os arrays se comportam de forma parecida ao buscar o item na lista, a diferença é que ele começa a contar do zero, assim:

Lista de Frutas:

| Número | Frutas   |
| ------- | -------- |
| 0       | Maçãs  |
| 1       | Uvas     |
| 2       | Bananas  |
| 3       | Abacaxi  |
| 4       | Morangos |

Cada item é um elemento, e cada elemento é acessado por um índice que começa do zero. Além disso, podemos trocar os elementos, acrescentar e remover como bem entendermos.

## Como declarar um Array em JavaScript?

Existem duas formas de declarar um array em Javascript, mas a mais comum delas é criando uma variável da seguinte forma:

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
```

Onde cada item da lista é separado por vírgulas e ocupa uma posição do array `listaDeFrutas` iniciando no  **índice zero** . Essa forma é chamada de  **método literal de array** .

### Acessando um elemento do array

Podemos acessar elementos de um array buscando por seu índice da seguinte forma:

```
var primeiroItem = listaDeFrutas[0]; // Pega o item 'Maçãs'
var segundoItem = listaDeFrutas[1]; // Pega o item 'Uvas'
var terceiroItem = listaDeFrutas[2]; // Pega o item 'Bananas'
```

Outra forma de acessar os elementos de um array é iterando sobre ele, ou seja, percorrendo todos os elementos através de [estruturas de repetição](https://alura.com.br/curso-online-javascript-introducao) como `while`, `for`, e `forEach()`.

```
listaDeFrutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçãs 0
// Uvas 1
// Bananas 2
// Abacaxi 3
// Morangos 3
```

Nem o tamanho e nem os tipos de elementos são fixos em um array, já que podemos acrescentar e remover os seus elementos. Vamos conhecer alguns métodos bastante utilizados no dia a dia de um programador ao lidar com arrays.

## Métodos de Array em JavaScript

Existem alguns [métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) muito usados por desenvolvedores e desenvolvedoras ao lidar com arrays.

### Acessando um elemento pelo seu índice

Podemos acessar o índice de um elemento com o `indexOf()` passando como parâmetro o elemento.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Bananas');
//pos = 2
```

### Adicionar elementos

Para adicionar um elemento ao final do array podemos usar o `push()`

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.push('Laranjas');
// ['Maçãs','Uvas','Bananas','Abacaxi','Morangos', 'Laranjas']
```

Para adicionar um elemento no início do array podemos usar o `unshift()`

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.unshift('Laranjas');
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]
```

Em ambos os métodos devemos **passar como parâmetro** o elemento que queremos adicionar.

### Remover elementos

Para remover um elemento do início de um array podemos usar o `shift()`

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']
```

Para remover um elemento do final de um array podemos usar o `pop()`

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.pop();
// ['Maçãs','Uvas','Bananas','Abacaxi']
```

Em ambos os métodos não é preciso passar o elemento como parâmetro.

Podemos também remover um item a partir de seu índice com o método `splice()`

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Abacaxi'); //pos = 3
listaDeFrutas.splice(pos, 1)
// ['Maçãs','Uvas','Bananas','Morangos']
```

No método `splice()` o primeiro parâmetro deve ser a posição a partir do qual queremos remover os elementos, e o segundo parâmetro é a quantidade que queremos remover.

## Conclusão

Vimos o que são arrays, e que eles servem para  **armazenar** , **agrupar** e **organizar** **dados** na memória do computador e que eles **não possuem tamanho nem tipo fixos** e devido a isso podemos acrescentar, remover e trocar os elementos de posição livremente. Vimos também que em Javascript a forma mais comum de declarar um array é usando o método de  **array literals** , que é uma sequência de elementos separados por vírgulas e entre colchetes. Por fim, conhecemos alguns métodos de array usados por desenvolvedores e desenvolvedoras ao lidar com arrays em programação.

Aqui na alura temos alguns cursos que te ajudam a entender os diferentes **tipos de variáveis** e como você pode guardar dados dentro delas.

---



`Data-attributes` são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu `data-attribute`. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

`Data-attributes` não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Sua estrutura é dividida em duas partes:

* A primeira parte é o identificador deste dado, que consiste em `data-` + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
* A segunda parte é o valor atribuído à este `data-attribute`, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma `string`.

Segue exemplo abaixo:

**HTML**

```xml
  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li data-cor="vermelho" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li data-cor="branco" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li data-cor="amarelo" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li data-cor="rosa" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>
```

No JavaScript, podemos criar uma função que recebe esses atributos, permitindo manipulá-los:

**JS**

```javascript
function mudaCores(elementos){
    var cores = elementos.getAttribute("[data-cor]");
    var tipoElemento = elementos.getAttribute("[data-tipo]");
  }
```

O prefixo `data-` não é obrigatório para definir um `data-attribute` personalizado, podemos alterar o código para a seguinte forma:

**HTML**

```xml
  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li cor="laranja" tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li cor="vermelho" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li cor="branco" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li cor="amarelo" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li cor="rosa" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>
```

**JS**

```javascript
function mudaCores(elementos){
    var cores = elementos.getAttribute("[cor]");
    var tipoElemento = elementos.getAttribute("[tipo]");
  }
```

---



```javascript
const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
```

**Explicação do código:**

A variável `lista`, serve para referenciar a `ul`, utilizando o método `querySelector`.

A segunda linha de código cria um evento de clique, referenciando o botão, pelo id `#botao`. Essa mesma linha poderia ser escrita da seguinte forma: `const botao = document.querySelector("#botao") botao.addEventListener("click", () =>`

No método `addEventListener`, é passado o que deve acontecer com o clique, que é alterar algum atributo, com o método `setAttribute`, de "data-lista", para "mostrar".

Esses são os data attributes no arquivo CSS:

`[data-lista="mostrar"] { display: block; }` `[data-lista="esconder"] { display: none; }`

O segundo bloco de código realiza a mesma operação de alteração dos `data-attributes`, só que alterando dessa vez a partir do clique no botão com a classe `.close`
