## Variáveis

Quando um programa precisa reter um valor para uso futuro, ele atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis têm **nomes** e permitem o uso desses nomes em nossos programas para se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação.

Os tipos de JavaScript podem ser divididos em duas categorias: tipos **primitivos** e tipos de  **objetos** . Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como  **strings** ) e valores booleanos (conhecidos como  **booleanos** ).

## Tipos numéricos

Como vimos em aula, podemos armazenar números de diferentes formas:

```cpp
const idade = 28
const pi = 3.14
```

> Dica: podemos utilizar o número [PI](https://pt.wikipedia.org/wiki/Pi) através do código `Math.PI`.

O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais. Um valor real é representado como a parte integral do número, seguido por um ponto decimal e a parte fracionária do número.

Pontos flutuantes também podem ser representados usando notação exponencial: um número real seguido pela letra e (ou E), seguido por um sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente.

> Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “ *Infinity* ”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

```javascript
var a = 10
var b = 0
console.log(a/b) // Infinity
```

```javascript
var a = 0
var b = 0
console.log(a/b) // NaN
```

---

## Introdução: arredondamento e formatação no JavaScript

Precisei entender as diferentes formas de **arredondar** e **formatar** números no [JavaScript](https://www.alura.com.br/artigos/javascript) quando prestei serviço a uma empresa que gostaria de saber quanto está pagando por hora de salário. Para isso, existe uma função que pega o salário do mês e calcula o custo hora:

```javascript
functionganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  return salarioHora;
}
```

Resultado da função:

```javascript
ganhoPorHora(3000,176); 
```

O valor por hora do salário seria: `17.045454545454547`. Mas, como estamos falando de um valor monetário, esse número deveria ter apenas duas casas decimais. Isto é, o que queremos é **arredondar esse resultado** para  **reduzir as casas decimais** .

Como estamos utilizando o JavaScript, já existe um **método** da classe `Math` que arredonda os números, a  **Math.round()** .

## Usando Math.round()

```javascript
functionganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  return Math.round(salarioHora);

}
```

Resultado da função, agora utilizando `Math.round()`

```javascript
ganhoPorHora(3000,176); 
```

O valor da resposta foi 17, já resolvemos o problema das várias casas decimais , mas ainda não está muito preciso.

Isso ocorre porque o método `Math.round()` retorna o valor de um número arredondado para o inteiro mais próximo.

## Formatando o resultado com ajuda do método toFixed()

Como estamos trabalhando com dinheiro é importante saber também os centavos, com o auxílio do método **.toFixed()** eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.

Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamos `toFixed(2)`, um ponto importante de se observar é que o método `.toFixed()` arredonda o  **número para cima** , isto é, se temos, por exemplo `11.123`, o valor fica `11.12`, já se temos `20.555`, o valor fica `20.56`. Outro ponto importante de se observar é que seu retorno será uma **string** representando o número.

```javascript
functionganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const total = salarioHora.toFixed(2);

  return total;

};
```

Agora que deixamos o resultado da função com duas casas decimais, que tal deixar o resultado formatado na nossa moeda, o real ?

## Formatando o resultado para Real

No JavaScript temos um método chamado `toLocaleString()` que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

O método **toLocaleString()** recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

* `style` : Que é o estilo do formato a ser utilizado, aqui é permitido usar:
  * `decimal` para representar números simples.
  * `currency` que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
  * `percent` para formato percentual.
* `currency`: A moeda para usar na formatação monetária

```javascript
functionganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return formatado;

}
```

Utilizando a formatação do `toLocaleString` o resultado ficaria assim:

```javascript
ganhoPorHora(3000,176); //'R$ 17,05'
```

## Para saber mais

No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

* **Math.ceil()** que retorna o maior número inteiro que é maior que o número passado, por exemplo `Math.ceil(11.123`), o valor fica `12`
* **Math.floor()** que retorna o menor número inteiro que é menor que o número passado, por exemplo `Math.floor(11.789)`, o valor fica `11`

---

# Ordenação numérica

## Introdução

![Imagem de destaque #cover](https://www.alura.com.br/artigos/assets/uploads/2017/05/cube-2031512_1920.jpg)

Digamos que você tem um array de números em JavaScript:

```javascript
var lista = [10,1, 5, 9, 8, 12, 15];
```

E queremos ordená-lo. O que fazer? Usar a função `sort()` claro!

```javascript
lista.sort(); // [1, 10, 12, 15, 5, 8, 9]
```

Repare no resultado: não está na ordem esperada. Essa questão foi trazida ao [fórum da Alura](https://cursos.alura.com.br/forum/topico-as-funcoes-sort-e-reverse-nao-organizam-da-forma-esperada-31723) pelo Jean Cesar Batista.

A grande questão é que a função `sort()` usa por padrão a ordenação alfabética baseada na tabela Unicode. Apesar de inesperado isso está [documentado](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). A solução é  **usar a nossa própria função de comparação** .

## Implementando função de comparação

O `sort` recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

* Se for `0` indica que são iguais
* Se for `-1` indica que o primeiro valor é menor
* Se for `1`, o segundo é menor.

Podemos criar essa função:

```javascript
functioncomparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
```

E chamamos o `sort` passando a função:

```javascript
lista.sort(comparaNumeros); // [1, 5, 8, 9, 10, 12, 15]
```

Funciona!

## Simplicando a implementação

E, claro, podemos **simplificar bastante** esse código.

É possível trocar a função nomeada pra ser anônima. E trocar os três IFs por uma conta simples: `a - b`.

Repare que o resultado dessa conta é sempre `0` se forem iguais, `-1` se `a` é menor e `1` se `b` é menor. Exatamente o que precisamos.

Juntanto tudo isso com a sintaxe de *arrow functions* do ES6 pra escrever menos, podemos simplesmente fazer:

```javascript
lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]
```

---

# Métodos de string

| Codigo | Saida                 |
| :----- | --------------------- |
| \0     | o caractere NULL      |
| \'     | aspas simples         |
| \"     | aspas duplas          |
| \\     | barra invertida       |
| \n     | nova linha            |
| \r     | carriage return       |
| \v     | tab vertical          |
| \t     | tab                   |
| \b     | backspace             |
| \f     | form feed             |
| \uXXXX | unicode codepoint     |
| \xXX   | the Latin-1 character |

O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

```cpp
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
```

Nós, como pessoas, conseguimos perceber o valor das variáveis `cidade` e `input` como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos,  **o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos** .

Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

```cpp
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
```

Acima, vemos um dos **métodos de string nativos do JavaScript** em ação, o `toLowerCase()` que converte todos os caracteres da string informada (no caso, `input`) para letras minúsculas (se forem algarismos, nada é convertido). Você pode conferir mais sobre este método no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade `length` pode ser utilizada para sabermos quantos caracteres uma string contém:

```cpp
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
```

A propriedade `length` é muito usada no dia a dia do desenvolvimento web. Você pode descobrir mais sobre ela [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length).

> Percebeu que `length` não leva parênteses no final da palavra? Há uma diferença entre **métodos** e **propriedades** que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)

Você pode conferir a lista completa de [métodos de string do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos) (são vários), com a descrição de cada um, e praticar com os exemplos.


## O que é uma String?

Por definição, strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. Em Javascript, uma string sempre estará entre aspas.

```javascript
const frase = "Mergulhando em tecnologia com Alura";
```

ou

```javascript
const frase = ‘Mergulhando em tecnologia com Alura’;
```

ou ainda

```javascript
console.log('Mergulhando em tecnologia com Alura')
```

Espere! Mas eu declaro minhas strings com aspas duplas ou simples?

Podemos colocar nossas strings entre aspas duplas ou simples. Para o JavaScript, não há diferença, já que ele considera as duas formas de declaração válidas. Mas, atenção, essa regra pode não se aplicar a outras linguagens. No Java ou C#, por exemplo, aspas simples são usadas para definir um caractere.

Em alguns momentos, a string poderá ser um texto que contém aspas. Nesses casos, é preciso combinar a utilização das aspas simples com aspas duplas e vice-versa, porque um texto como: `“Ela disse: “Adeus””`, não funciona corretamente.

Vamos ao exemplo:

```javascript
console.log('Ela disse: “Adeus!”')
```

ou

```javascript
console.log(“Ela disse: 'Adeus!' ”)
```

É importante ressaltar que, depois que a sequência de caracteres for definida, a string é imutável, ou seja, não poderá ter seu valor alterado. Então, como manipular a string?

Sempre que manipulamos uma string, é criada uma nova instância dela por baixo dos panos, o que significa que será gerado um novo espaço na memória com uma cópia do valor da string. Por isso, temos que utilizar uma variável para armazená-la.

### Objeto String

A linguagem JavaScript traz ainda como recurso um objeto global `String` que nos permite criar ou converter um tipo em uma string, veja o exemplo abaixo:

```javascript
const numero = 256
const convertidoEmString = new String(numero)
```

A saída após exibirmos a variável `convertidoEmString` usando o método `console.log()` é `[String: '256']`. Na construção do objeto usando `new String(parâmetro)`, o parâmetro pode ser qualquer elemento do nosso código que queiramos transformar em string.

Também é possível converter outros tipos primitivos (por exemplo, números e booleanos) em strings com o método `toString()`:

```javascript
const num = 500
console.log(num.toString()) //'500'
```

## Usando Strings

É possível interpolar, concatenar, checar posições de caracteres ou ainda substituir partes de strings. Vamos ver algumas dessas utilizações com o JavaScript?

### Concatenando strings

Quando falamos em concatenar strings, quer dizer que vamos juntar duas ou mais strings e formar uma nova. Observe o exemplo abaixo:

```javascript
let nome = "André"
let sobreNome ="Silva"
let nomeCompleto = "Meu nome completo é : " + nome + sobreNome
```

Para concatenar as strings `nome` e `sobreNome` com a string de texto que é o valor de `nomeCompleto`, usamos o operador de adição (`+`). Podemos usar também `+=`, como no exemplo abaixo:

```javascript
let nome = "André"
let saudacoes = "Seja bem-vindo "
saudacoes += nome
```

Dessa forma, temos a saída `Seja bem-vindo André`

### Interpolando strings (template strings)

A interpolação de strings é um recurso bem interessante, presente em diversas linguagens. No JavaScript, é uma alternativa mais prática para manipular string sem a necessidade de fazer concatenação, porque para textos maiores, concatenar pode ser um pouco trabalhoso.

Usando as chamadas *template strings* ou templates literais, a pessoa desenvolvedora consegue ter uma flexibilidade maior no trabalho com strings, além de facilitar a escrita e leitura do código.

Retomando o exemplo da mensagem de boas vindas, veja abaixo a utilização de  *template strings* :

```javascript
let nome = "André"
let saudacoes =`Seja bem-vindo ${nome}`
```

Veja como exemplo o poema “E agora, José?” de Carlos Drummond de Andrade:

```javascript
let nome = "André"
let poema = `
   E agora, ${nome}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome}?
`
```

Observe que, para a utilização da  *template string* , ela deve estar entre acentos graves (``) e, para fazer a interpolação, o valor ou variável deve estar dentro da estrutura `${valor}`. Vale ressaltar que usando *template strings* temos a opção de utilizar a quebra de linha normalmente, sem caracteres de escape para isso, como `\n`.

### Métodos para strings

Antes de começarmos, é importante ressaltar que o JavaScript diferencia strings como tipos primitivos (com aspas duplas ou simples) de objetos Strings (quando usamos a palavra reservada `new`). Mas, por baixo dos panos toda string, mesmo as que criamos com a chamada “forma literal”, por exemplo `const texto = “Alura”`, acaba convertida para um objeto do tipo `String`. Por isso, temos acesso a uma série de métodos e propriedades deste objeto.

Agora que entendemos isso, vamos ver algumas propriedades e métodos úteis e bem práticos para trabalhar com strings em nossas aplicações.

**`.length`**

A propriedade `length` serve para nos informar o tamanho de uma string. E por que isso é útil?

Caso sua aplicação tenha como uma das regras para criação de senhas (que em geral são alfanuméricas) o tamanho de 8 caracteres, usar `length` será uma boa opção, pois ajudará a contar a quantidade de caracteres da string.

Para testar a propriedade `length`, vamos usar a string `alura`, que retornará o tamanho 5.

```javascript
const palavra="alura";
console.log(palavra.length) //5
```

Veja que `length` é exatamente a mesma propriedade que acessamos quando queremos descobrir o comprimento (ou seja, a quantidade de elementos) em um array.

**`charAt()`**

Com o método `charAt()` conseguimos acessar um caractere de uma string. Lembre-se que, por baixo dos panos, strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string.

Veja o exemplo abaixo:

```javascript
console.log("alura".charAt(3)) //r
```

Após a execução do método `charAt()`, ela retornará o caractere `r`, que é o valor que consta na posição 3 da string - lembrando que arrays em JavaScript começam na posição 0 (zero).

Outra alternativa será usar a notação de colchetes para encontrar um caractere da string, da seguinte forma:

```javascript
const palavra="Alura"
console.log(palavra[0]) //A
```

Será exibido o caractere `A`, ou seja, o que está na primeira posição da string. O resultado da execução do `charAt()` é uma string.

Mas e se quisermos saber qual a posição de um caractere dentro da string?

**`indexOf()`**

Respondendo a pergunta anterior, existe a função `indexOf()`, que retorna a posição de um caractere dentro da string.

Por exemplo:

```javascript
const palavra="Alura"
console.log(palavra.indexOf("a")) //4
```

O resultado é a posição 4. Porém, na utilização do `indexOf()`, fique atento caso o caractere que se busca na string seja encontrado em mais de uma posição, pois será retornada somente a primeira ocorrência. veja o código abaixo:

```javascript
const palavra="Divertidamente"
console.log(palavra.indexOf("e")) //3
```

O resultado da execução do `indexOf()` é um valor numérico.

**`toUpperCase()` e `toLowerCase()`**

São duas funções bastante utilizadas quando estamos trabalhando com string e precisamos deixar o texto todo em letras minúsculas ( *lower case* ) ou todo em maiúsculas ( *upper case* ). Vamos ver o código abaixo:

```javascript
const palavra="alura";
console.log(palavra.toUpperCase()) //ALURA
console.log(palavra.toLowerCase()) //alura
```

Após a execução do código, o console irá exibir `ALURA` e `alura` respectivamente. O resultado da execução dos métodos `toUpperCase()` e `toLowerCase()` é uma nova string .

**`substr()`**

Outra função muito interessante é a `substr()` ( *substring* ), que permite que façamos a extração de parte de uma string, conforme o código abaixo:

```javascript
let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11)) // Mergulhando
```

A função recebe como parâmetro o início e o fim da nova string a ser retirada da string principal. Na execução do código acima, temos como resultado a palavra `Mergulhando`. Bem útil, né?

O resultado da execução do método `substr()` é uma nova string .

**`slice()`**

Podemos utilizar também o método `slice()`, que usamos com arrays. Ele é similar ao `substring()` e retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim. Veja abaixo:

```javascript
let frase= "Mergulhando em tecnologia."
console.log(frase.slice(0,11)) // Mergulhando
```

O resultado da execução do método `slice()` é uma nova string .

**`replace()`**

Com a função `replace()` temos a possibilidade de substituir parte de uma string por outra. Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar. Olhe o exemplo abaixo, em que precisamos substituir a string `nomeusuario` no texto padrão de `comunicacao`.

```javascript
let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));
```

Na execução deste exemplo, a string `nomeusuario` será substituída pelo conteúdo da variável `nome`. Como resultado da execução do método `replace()` teremos uma nova string.

**`concat()`**

O método `concat()` é uma opção para concatenar strings sem a utilização do operador de adição (`+`). Ele concatena duas strings, adicionando a nova string ao fim da anterior.

Observe uma utilização do `concat()`:

```javascript
let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))
```

O resultado obtido será: `Programe nas principais linguagens e plataformas. Explore linguagens como [JavaScript](https://www.alura.com.br/artigos/javascript), [Python](https://www.alura.com.br/artigos/python), e C#.`

Para a execução do método `replace()` teremos como resultado uma nova string.

**`split()`**

O método `split()` é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro.

Vamos ver um exemplo:

```javascript
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)
```

Quando trabalhamos com o `split()`, devemos nos atentar, pois a execução gerará como resultado um array de strings com os elementos que foram separados com base no separador desejado. Portanto a execução do código resulta em um array como mostrado a seguir:

```javascript
[ 'JavaScript',
  'Java',
  'C#',
  'PHP',
  'Python',
  'Go',
  'Vb',
  'SQL',
  'C',
  'C++' ]
```

Lembre-se que o resultado da execução do método `split()` é um array de strings.

**`trim()`**

O `trim()` remove os espaços em branco **no início ou fim** de uma string. Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços, faremos;

```javascript
let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com
```

A variável `loginSemEspaco` conterá uma nova string, sem os espaços em branco no início ou fim que podem ter sido digitados. Então, quando executado o método `trim()`, o resultado é uma nova string.

No JavaScript ainda temos algumas variações desta função como: `trimEnd()`,`trimStart()`,`trimLeft()` e `trimRight()`, teste também estas variantes e veja o resultado obtido, ok?

## Conclusão

Neste artigo, vimos o que são strings e como podemos manipulá-las usando métodos do Javascript.

---

Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que  **cada linguagem possui seus próprios padrões** . Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

A primeira coisa que precisamos ter em mente é que  **o JavaScript é  *case-sensitive* , ou seja, diferencia maiúsculas e minúsculas** . Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como `console.log`) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

```cpp
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
```

Podemos ver que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

* `camelCase`: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: `minhaVar` ou `senhaDoUsuario`. **Esta é a convenção utilizada pelo JavaScript para variáveis e funções.**
* `snake_case`: Os espaços são substituídos pelo caractere `_` (underline), com todas as palavras em letra minúscula. Por exemplo: `minha_variavel` ou `senha_do_usuario`.
* `kebab-case`: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: `minha-var` ou `senha-do-usuario`. **Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.**
* `PascalCase`: Similar ao `CamelCase`, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: `MinhaVar` ou `SenhaDoCliente`.

> Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript (com exceção do padrão kebab-case), seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados **guias de estilo** definidos para um produto de código sejam seguidos.

Você pode ir aprendendo os detalhes aos poucos, enquanto estuda, e observá-los sendo aplicados nos códigos que vê por aí.

---

Nesta aula falamos sobre três tipos primitivos: `number`, `string` e `boolean`. Mas existem ainda mais dois tipos que não abordamos com profundidade: `null` e `undefined`.

O `null` é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

```javascript
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
```

Nesse caso, qual seria a diferença entre os dois casos abaixo?

```javascript
let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined
```

É aqui que entra o tipo `undefined`. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto `null` é um valor atribuído a uma variável que existe e foi iniciada, `undefined` se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

> `undefined` também é o valor retornado por uma função que não tem cláusula `return`. Veremos mais sobre funções e `return` mais adiante no curso.

É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

No cotidiano é comum considerar `undefined` como uma ausência de valor “inesperada” (causada por um *bug* ou erro no código) e `null` como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor `null`.

---

Já aprendemos os tipos de variáveis que podemos utilizar, entre os quais temos os números, os textos e os booleanos. Porém, como podemos utilizar o valor de uma variável numérica em um texto, ou utilizar uma string que contenha apenas números para fazer contas?

Para estes casos, no JavaScript vamos utilizar `Number()` e `String()`, que vão nos permitir converter os dados para números ou textos.

## String()

Vamos fazer alguns exemplos de conversão de números e booleanos através de `String()`:

```js
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
```

Outra opção para transformarmos um valor em String é usar o `toString()`:

```js
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
```

```js
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
```

## Number()

Vamos fazer alguns exemplos de conversão de textos e booleanos através de `Number()`:

```js
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
```

Podemos usar o operador de soma **`+`** para fazer a conversão de textos para números, colocando-os antes das variáveis:

```js
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
```

```js
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
```

```js
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
```

> Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.
>
> ---
>
> Já aprendemos a declarar variáveis, sejam elas `let` ou `const`, utilizando a palavra-chave e um nome que escolhemos para a variável. Chamamos este nome justamente de  **identificador** , e o ideal é que sejam sempre o mais explicativos possível:
>
> ```bash
> let cpfUsuario = "12312312312"
> ```
> Mas o que acontece se tentarmos identificar uma variável com um termo que faça parte da linguagem, como nos casos abaixo?
>
> ```csharp
> let var = 0;
> let if = 0;
> let const = "Alura";
> ```
> Faça o teste para ver que o JavaScript não consegue reconhecer estas palavras-chave como identificadores e nem interpretar o que deve ser executado nestas linhas. Isso acontece porque `var`, `if` e `const` são **palavras reservadas** do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.
>
> Por outro lado, os exemplos abaixo são aceitáveis:
>
> ```bash
> let varInicial = 0;
> let ifFalse = 0;
> let constDeTexto = "Alura";
> ```
> No JavaScript, algumas palavras são totalmente reservadas (não podem ser utilizadas como identificador em nenhum caso), enquanto outras podem ser utilizadas dependendo do contexto, e ainda outras não podem ser consideradas totalmente reservadas por razões de compatibilidade com versões mais antigas da linguagem, como é o caso de `let` (lembrando que, até o ES6, só era possível declarar variáveis com `var`). A palavra `let` vem do verbo em inglês “permitir”, então não é possível deixá-la reservada pois pode já estar sendo usada como identificador em algum código mais antigo.
>
> A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. **As únicas exceções são `from`, `set` e `target`, que são seguras e comumente utilizadas.**
>
> ```javascript
> arguments
> as
> async
> await
> break
> case
> catch
> class
> const
> continue
> debugger
> default
> delete
> do
> else
> eval
> export
> extends
> false
> finally
> for
> from
> function
> get
> if
> import
> in
> instanceof
> let
> of
> new
> null
> return
> set
> static
> super
> switch
> target
> this
> throw
> true
> try
> typeof
> var
> void
> while
> with
> yield
> ```
> Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:
>
> ```kotlin
> enum
> implements
> interface
> package
> private
> protected
> public
> ```
>> Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais **semântica** possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.
>>
>> ---
>>
>> # Tipos de erros:
>>
>> Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:
>>
>> * `RangeError`: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe `-1`.
>> * `ReferenceError`: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.
>> * `SyntaxError`: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.
>> * `TypeError`: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
>>
>> ---
>>
>> Embora seja o mais utilizado, `.log()` é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra *log* significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.
>>
>> Entre os outros métodos, existem:
>>
>> * `console.error()` para exibir mensagens de erro;
>> * `console.table()` para visualizar de forma mais organizada informações tabulares;
>> * `console.time()` e `console.timeEnd()` para temporizar período que uma operação de código leva para ser iniciada e concluída;
>> * `console.trace()` para exibir a *stacktrace* de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
>>
>> A [documentação oficial do NodeJS](https://nodejs.org/api/console.html) dá exemplos sobre como utilizar cada um destes métodos e mais outros da lista. É uma documentação bastante extensa, mas não se preocupe! Você não precisa decorar a lista completa, já que ela está sempre disponível para consulta. Para a maior parte dos casos de exemplo, vamos continuar usando `console.log()`.
>>
>> ---
>>
>> Se você já tiver feito algum teste de `console.log()` utilizando o navegador, possivelmente já viu os métodos `console.error()` e `console.warn()` em ação, pois nos navegadores esses métodos são identificados com as cores vermelho e amarelo e emojis.
>>
>> Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método `console.error()`.
>>
>> Crie um arquivo `.js` em seu computador, escreva o seguinte código:
>>
>> ```javascript
>> console.log("deu erro");
>> console.error("deu erro");
>> ```
>> Se executarmos este código com `node script.js` (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é o mesmo para os dois comandos:
>>
>> ```undefined
>> deu erro
>> deu erro
>> ```
>> Então não faz diferença usar um ou outro?
>>
>> Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.
>>
>> Vamos tentar novamente, passando uma informação um pouco diferente para `console.error()`:
>>
>> ```javascript
>> console.log("deu erro");
>> console.error(new Error("deu erro"));
>> ```
>> Se executarmos este código, o resultado agora é diferente:
>>
>> ```vbnet
>> deu erro
>> Error: deu erro
>>     at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
>>     at Module._compile (internal/modules/cjs/loader.js:1076:30)
>>     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
>>     at Module.load (internal/modules/cjs/loader.js:941:32)
>>     at Function.Module._load (internal/modules/cjs/loader.js:782:14)
>>     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
>>     at internal/main/run_main_module.js:17:47
>> ```
>> O que vimos acima - a palavra-chave `new` seguida de `Error` com inicial maiúscula - é um gostinho de como trabalhamos com **classes** em JavaScript.
>>
>> ---
>>
>> # Ternário e templates
>>
>> Nesta aula vimos alguns conteúdos diversos sobre JavaScript, mas como podemos juntar tudo o que foi estudado?
>>
>> Retornando ao exemplo de bebidas para menores e maiores de idade, vamos criar algumas variáveis para identificar um cliente, sua idade e as opções de bebidas.
>>
>> ```cpp
>> const nome = "Leo";
>> const idade = 23;
>> const bebidaMaior = "cerveja";
>> const bebidaMenor = "suco";COPIAR CÓDIGO
>> ```
>> Os operadores - **entre outras coisas** - são usados para comparar condições, algo que é muito usado em lógica de programação. A notação `${}` permite a inserção de valores de variáveis dentro de uma string de texto, mas não somente isso; vamos testar uma coisa nova:
>>
>> ```javascript
>> const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
>> console.log(pedido)
>> ```
>> O resultado exibido no terminal é a frase completa:
>>
>> ```bash
>> Leo diz: "por favor, quero beber cerveja"
>> ```
>> Isso porque no início do código foi atribuída à variável `idade` um valor `23`, ou seja, maior do que `18`.
>>
>> Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:
>>
>> 1) O uso de operadores: `>=` como operador de comparação entre o valor da variável `idade` e `18` e também o operador ternário como condicional para retornar o valor da variável `bebidaMaior` ou `bebidaMenor` de acordo com o resultado da comparação.
>> 2) Template strings: Utilizamos a sintaxe do acento grave + `${}` em conjunto com as aspas duplas `””`. Teste também com aspas simples!
>> 3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o `${}`, mas também fazer operações com JavaScript - por exemplo, condicionais - e inserir o correspondente ao `true` ou `false` na string de texto.
>>
>> ---
>>
>> # Sobre funções
>>
>> As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:
>>
>> * `Math.round()`: Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
>>   * `Math.round(4.3)` retorna 4
>>   * `Math.round(3.85)` retorna 4
>>   * `Math.round(2.5)` retorna 3, quando o número termina com 0.5 a função arredonda para cima
>> * `Math.ceil()`: Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
>>   * `Math.ceil(5.2)` retorna 6
>> * `Math.floor()`: Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
>>   * `Math.floor(5.2)` retorna 5
>> * `Math.trunc()` : Desconsidera os números decimais, o que é conhecido como truncamento.
>>   * `Math.trunc(4.3)` retorna 4
>>   * `Math.trunc(4.8)` retorna 4
>> * `Math.pow()` : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
>>   * `Math.pow(4 , 2)` retorna 4^2 = 16
>>   * `Math.pow(2.5 , 1.5)` retorna 2.5^(3/2) = 3.9528 ...
>> * `Math.sqrt()` : Retorna a raiz quadrada de um número.
>>   * `Math.sqrt(64)` retorna 8
>> * `Math.min()`: Retorna o menor valor entre os argumentos.
>>   * `Math.min(0, 150, 30, 20, -8, -200)` retorna -200
>> * `Math.max()`: Retorna o maior valor entre os argumentos.
>>   * `Math.max(0, 150, 30, 20, -8, -200)` retorna 150
>> * `Math.random()`: Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
>>   * `Math.random()` retorna 0.7456916270759015
>>   * `Math.random()` retorna 0.15449802102729304
>>   * `Math.random()` retorna 0.4214269561951203
>>
>> Para ver mais funções matemáticas, basta acessar a [documentação do Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description).
>>
>> ---
>>
>> # Tipos de funções
>>
>> Os parâmetros e o retorno das funções são utilizados de acordo com cada caso específico. Isso significa que nem sempre todas as funções que escrevemos vão precisar de um ou de outro para fazer o que precisam. Abaixo temos mais exemplos para entender melhor algumas situações.
>>
>> **Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.**
>>
>> ```scss
>> function cumprimentar(){
>>  console.log('oi gente!')
>> }
>>
>> cumprimentar()
>> ```
>> **Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado `string`.**
>>
>> ```javascript
>> function cumprimentaPessoa(pessoa){
>>  console.log(`oi, ${pessoa}!`)
>> }
>>
>> cumprimentaPessoa('Helena')
>> ```
>> **Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.**
>>
>> No caso abaixo, a função `cumprimentar()` não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função `cumprimentaPessoa(nomePessoa)`.  **Isso significa que a string ”`Oi gente!`” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave `return`** .
>>
>> ```javascript
>> function cumprimentar(){
>>  return 'Oi gente!'
>> }
>>
>> function cumprimentaPessoa(nomePessoa) {
>>  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
>> }
>>
>> cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
>> ```
>> A função `cumprimentaPessoa(nomePessoa)` recebe como parâmetro uma string onde podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. Quando isso acontecer, a função `cumprimentar()` será executada também, e seu valor de retorno - a string `Oi gente!` - vai ocupar o lugar do `${}` onde a função está sendo chamada.
>>
>> **Função com `return` e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro `numero1` se refere a `15`, o parâmetro `numero2` se refere a `30` e o parâmetro `numero3` se refere a `45`. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.**
>>
>> ```scss
>> function operacaoMatematica(numero1, numero2, numero3) {
>>  return numero1 + numero2 + numero3
>> }
>>
>> operacaoMatematica(15, 30, 45) // 90
>> ```
>> **Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a *parâmetros* no momento em que a função é definida (no caso, `numero1`, `numero2`, etc) e *argumentos* como os dados que utilizamos para executar a função (ou seja, `30`, `45`, etc).**
>>
>> Ainda há muito o que estudar no tema de funções, então pratique bastante pois parâmetros e retorno são conceitos essenciais.
>>
>> ---
>>
>> # Condicionais diferentes do py
>>
>>
>> ## `else if`
>>
>> A condicional `if…else` vai executar um bloco de código entre duas possibilidades, dependendo do resultado da expressão que é passada como condição do `if`. Porém, em alguns casos é necessário mais de duas opções de fluxo para o código; para estes casos existe a cláusula `else if`:
>>
>> ```js
>> const num = 15;
>>
>> if (num >= 0 && num <= 10) {
>>   console.log('número entre zero e dez');
>> } else if (num > 10 && num <= 20) {
>>   console.log('número entre dez e vinte');
>> } else if (num > 20 && num <= 30) {
>>   console.log('número entre vinte e trinta');
>> } else {
>>   console.log('outro número');
>> }
>> ```
>>> Veja que a cláusula `else if` também precisa receber a condição (ou as condições) como parâmetros, ao contrário do `else`, que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado caso todas as outras condições anteriores falhem.
>>>
>>
>>> **IMPORTANTE** : Ao trabalhar com múltiplas condições e `else if`, lembre-se sempre que cada condição e cada bloco (`if`, `else if` e `else`) deve representar condições excludentes entre si! Ou seja, não pode haver ambiguidade entre as condições - uma mesma condição válida tanto no `if` quanto no `else if`, por exemplo.
>>>
>>> ---
>>>
>>> # Listas
>>>
>>>
>>> Como vimos na aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.
>>>
>>> ```js
>>> const numero1 = 50;
>>> const numero2 = 43;
>>> const numero3 = 12;
>>>
>>> // utilizando array
>>> const numeros = [50, 43, 12];
>>> ```
>>> Um array pode ser definido como **uma lista ordenada de valores enumerados em que cada valor é chamado de *elemento* ou  *item* , e cada elemento se localiza numa posição na lista chamada de  *índice* .** Vamos destrinchar essa explicação.
>>>
>>>  **Uma lista ordenada de valores enumerados** :
>>>
>>> Quando falamos de valores, estamos nos referindo a **dados** de algum tipo: string (texto), number (número), booleano (`true` ou `false`) ou outros dados reconhecidos pelo JavaScript.
>>>
>>> ```js
>>> const arrayDeNumeros = [50, 43, 12];
>>> const arrayDeStrings = ["banana", "alura", "Juliana"];
>>> ```
>>> Como uma  **lista ordenada** , entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão  **enumerados** , ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem: `[50, 43, 12]`, por exemplo.
>>>
>>>  **Cada valor é chamado de elemento ou item** :
>>>
>>> Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de **elemento** ou **item** cada um dos valores da lista.
>>>
>>> ```js
>>> // array com 1 elemento
>>> const numero = [5];
>>>
>>> // array com 3 elementos
>>> const nums = [50, 43, 12];
>>> ```
>>> Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.
>>>
>>>  **Cada elemento está localizado em uma posição na lista, chamada de índice** :
>>>
>>> Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos  **a posição dele na lista** . Por exemplo:
>>>
>>> ```js
>>> const nums = [50, 43, 12];
>>> // o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.
>>> ```
>>> Em programação, **chamamos de índice (em inglês,  *index* ) o número que identifica a posição de um valor em um array.**
>>>
>>> Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. Então, se quisermos acessar determinado valor pelo **número do índice** temos que levar isso em consideração:
>>>
>>> ```js
>>> // índice     0   1   2   3
>>> const nums = [50, 43, 12, 98];
>>> ```
>>> Sendo assim, o elemento de valor `43` está localizado no índice de número `1`.
>>>
>>> A imagem abaixo mostra um diagrama da representação de um array, nomeando seus recursos:
>>>
>>> ![Diagrama representando um array. Há um texto “notas” e ao lado direito do texto há 4 retângulos lado a lado. Cada retângulo contém um número dentro, que representa uma nota. Ao lado direito da fileira de retângulos, há um seta apontando para eles, com o texto “elementos / itens / valores”. Abaixo de cada retângulo, há um número, que começa à esquerda, do zero no primeiro retângulo e vai até o número três, mais à direita, no último retângulo. Ao lado dessa fileira de números, há uma seta apontando para eles, com o texto “índices / posições”.](https://caelum-online-public.s3.amazonaws.com/2758-javascript-arrays/01/imagem2.png)
>>>
>>> ### A propriedade `length`:
>>>
>>> Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o  **número de elementos** . É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:
>>>
>>> ```js
>>> // índice     0   1   2   3
>>> const nums = [50, 43, 12, 98];
>>> console.log(nums.length) //4
>>> ```
>>> Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por `length` sempre será 1 número a mais do que o valor de índice mais alto. Neste caso,  **o array `nums` é um array de 4 elementos e seus índices vão de 0 a 3** .
>>>
>>> A propriedade `length` é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.
>>>
>>> Esta é só uma pequena introdução! Ainda há muito o que estudar e aprender sobre arrays e como utilizar esta estrutura.
>>>
>>> ---
>>>
>>>
>>>
>>
