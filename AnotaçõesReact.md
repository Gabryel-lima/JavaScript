# Introduzindo JSX

> Esses documentos são antigos e não serão atualizados. Vá para [react.dev](https://pt-br.react.dev/) para os novos documentos do React.
>
> Estas novas páginas de documentação ensinam React moderno e incluem exemplos ao vivo:
>
> * [Escrevendo marcação com JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)
> * [JavaScript em JSX com chaves](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)

Considere esta declaração de variável:

```
const element = <h1>Hello, world!</h1>;
```

Esta sintaxe estranha de tags não é uma string, nem HTML.

É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.

JSX produz “elementos” do React. Nós iremos explorar a renderização para o DOM na [próxima seção](https://pt-br.legacy.reactjs.org/docs/rendering-elements.html). Abaixo você descobrirá o básico de JSX necessário para começar.

### Por que JSX?

O React adota o fato de que a lógica de renderização é inerentemente acoplada com outras lógicas de UI: como eventos são manipulados, como o state muda com o tempo e como os dados são preparados para exibição.

Ao invés de separar *tecnologias* artificialmente colocando markup e lógica em arquivos separados, o React [separa *conceitos*](https://pt.wikipedia.org/wiki/Separa%C3%A7%C3%A3o_de_conceitos) com unidades pouco acopladas chamadas “componentes” que contém ambos. Voltaremos aos componentes em [outra seção](https://pt-br.legacy.reactjs.org/docs/components-and-props.html). Mas, se você ainda não está confortável em usar markup em JS, [esta palestra](https://www.youtube.com/watch?v=x7cQ3mrcKaY) pode convencer você do contrário.

O React [não requer](https://pt-br.legacy.reactjs.org/docs/react-without-jsx.html) o uso do JSX. Porém, a maioria das pessoas acha prático como uma ajuda visual quando se está trabalhando com uma UI dentro do código em JavaScript. Ele permite ao React mostrar mensagens mais úteis de erro e aviso.

Com isso fora do caminho, vamos começar!

### Incorporando Expressões em JSX

No exemplo abaixo, declaramos uma variável chamada `name` e então a usamos dentro do JSX ao envolvê-la com chaves:

```
const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;
```

Você pode inserir qualquer [expressão JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) válida dentro das chaves em JSX. Por exemplo, `2 + 2`, `user.firstName`, ou `formatName(user)` são todas expressões JavaScript válidas.

No exemplo abaixo, incorporamos o resultado da chamada de uma função JavaScript, `formatName(user)`, dentro de um elemento `<h1>`.

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!</h1>
);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/PGEjdG?editors=1010)**

Separamos o JSX em múltiplas linhas para melhorar a legibilidade. Mesmo que não seja obrigatório, quando fizer isso, também recomendamos colocar dentro de parênteses para evitar as armadilhas da [inserção automática de ponto-e-vírgula](https://stackoverflow.com/q/2846283).

### JSX Também é uma Expressão

Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript.

Isto significa que você pode usar JSX dentro de condições `if` e laços `for`, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções:

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```

### Especificando Atributos com JSX

Você pode usar aspas para especificar strings literais como atributos:

```
const element = <a href="https://www.reactjs.org"> link </a>;
```

Você também pode usar chaves para incorporar uma expressão JavaScript em um atributo:

```
const element = <img src={user.avatarUrl}></img>;
```

Não envolva chaves com aspas quando estiver incorporando uma expressão JavaScript em um atributo. Você deveria ou usar aspas (para valores em string) ou chaves (para expressões), mas não ambos no mesmo atributo.

> **Atenção:**
>
> Como JSX é mais próximo de JavaScript que do HTML, o React DOM usa `camelCase` como convenção para nomes de propriedades ao invés dos nomes de atributos do HTML.
>
> Por exemplo, `class` se transforma em [`className`](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/className) em JSX, e `tabindex` se transforma em [`tabIndex`](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/tabIndex).

### Especificando Elementos Filhos com JSX

Se uma tag está vazia, você pode fechá-la imediatamente com `/>`, como XML:

```
const element = <img src={user.avatarUrl} />;
```

Tags JSX podem conter elementos filhos:

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX Previne Ataques de Injeção

É seguro incorporar entradas de usuário em JSX:

```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

Por padrão, o React DOM [escapa](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) quaisquer valores incorporados no JSX antes de renderizá-los. Assim, assegura que você nunca injete algo que não esteja explicitamente escrito na sua aplicação. Tudo é convertido para string antes de ser renderizado. Isso ajuda a prevenir ataques [XSS (cross-site-scripting)](https://pt.wikipedia.org/wiki/Cross-site_scripting).

### JSX Representa Objetos

O Babel compila JSX para chamadas `React.createElement()`.

Estes dois exemplos são idênticos:

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` realiza algumas verificações para ajudar você a criar um código sem bugs, mas, essencialmente, cria um objeto como este:

```
// Nota: esta estrutura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

Estes objetos são chamados “Elementos React”. Você pode imaginá-los como descrições do que você quer ver na tela. O React lê esses objetos e os usa para construir o DOM e deixá-lo atualizado.

Exploraremos a renderização de elementos React no DOM na [próxima seção](https://pt-br.legacy.reactjs.org/docs/rendering-elements.html).

> **Dica:**
>
> Recomendamos o uso da [definição de linguagem “Babel”](https://babeljs.io/docs/en/next/editors) no seu editor preferido para que ambos os códigos em ES6 e JSX sejam devidamente realçados.
>
> ---
>
> Vamos executar o comando `npx create-react-app .`, que criará nossa aplicação *React* e, com o `.`, cria na pasta que está aberta. No caso, a pasta "alura-books":
>
> ```lua
> npx create-react-app .
> ```
>
> Para fazer isso, basta voltar ao terminal de rodar o comando `npm start`, que dará início à nossa aplicação:
>
> ```sql
> npm start
> ```


---



## O caso mais comum: `export default`

No caso abaixo, sempre que criarmos um arquivo (módulo), e quisermos exportar algum dado dele para acessar em outro, vamos fazer um código bem similar com o exemplo abaixo:

```
// ## ex01/moduloA.js

const variavel = 'Valor';
const variavel2 = 'Outro Valor';

export default variavel;
```

```
// ## ex01/moduloB.js

import Modulo;

console.log(Modulo); // => 'Valor'
```

É importante reforçar que nesse caso a `variavel2` **não está disponível** como um valor acessível em `ex01/moduloB.js`

> Repare também que na hora de importar, não precisamos passar o nome `variavel`, o nome é um apelido (ou alias) e você pode escolher o que fizer mais sentido dentro do contexto da importação, lembrando que, é uma boa prática fazer o import com o nome do arquivo na maioria das vezes, ficando algo como moduloA.

```
// ## ex01/moduloB.js

import ModuloA;

console.log(ModuloA); // => 'Valor'
```

## Como exportar multiplos valores de um arquivo?

A primeira opção, em cima do que vimos anteriormente é exportar um objeto com os dados que queremos acessar em outro arquivo:

```
// ## ex01/moduloA.js

const variavel = 'Valor';
const variavel2 = 'Outro Valor';

export default {
   variavel: variavel,
   variavel2: variavel2,
};
```

```
// ## ex01/moduloB.js

import Modulo;

console.log(Modulo); // { variavel: 'Valor', variavel2: 'Outro Valor' }
```

Uma forma alternativa a que vimos agora é fazer na hora que declaramos uma variável ou função, colocar um `export` atrás, como no exemplo abaixo:

```
// ## ex01/moduloA.js

export const variavel = 'Valor';
export const variavel2 = 'Outro Valor';
```

```
// ## ex01/moduloB.js

import { variavel, variavel2 };

console.log(variavel, ' e ' ,variavel2); // 'Valor e Outro Valor'
```

Repare que agora, não estamos mais utilizando o `import Modulo` e sim fazendo um [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), e acessando cada valor individualmente, poderiamos também fazer o import como `import * as Modulo`, assim cada valor que exportamos seria agrupado dentro de um módulo.

## Da pra misturar tudo?

Sim! Você consegue, basta se baseaer no exemplo abaixo:

```
// ## ex01/moduloA.js

export const variavel = 'Valor';
export const variavel2 = 'Outro Valor';

export default 'Valor default do módulo';
```

```
// ## ex01/moduloB.js

import ValorDoModulo, { variavel, variavel2 };

console.log(variavel, ' e ' ,variavel2); // 'Valor e Outro Valor'
console.log(ValorDoModulo); // Valor default do módulo'
```

---
