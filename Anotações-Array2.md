# Métodos em arrays


* * ém começa do último elemento, não no primeiro.
* `forEach()`

  * Executa uma função em cada elemento do array de forma individual.
  * Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
* `pop()`

  * Retira o último elemento do array.
  * Altera o array original removendo o elemento.
* `shift()`

  * Retira o primeiro elemento do array.
  * Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
* `push()`

  * Adiciona o elemento passado como parâmetro do array, porém na última posição.
  * Altera o array original com o novo valor.
* `unshift()`

  * Funciona igual ao `push()`, porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
  * Altera o array original com o novo valor.
* `reduce()`

  * Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
* `reduceRight()`

  * Funciona igual o `reduce()` porém começa do final do array e segue até o início.
* `reverse()`

  * Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
* `slice()`

  * Copia uma parte do array para outro array.
* `sort()`

  * Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
* `splice()`

  * Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

  ---



  Em caso de dúvidas sobre como funciona um método de array, você sempre pode consultá-lo na [documentação oficial da MDN](https://developer.mozilla.org/pt-BR/), como por exemplo os métodos [push](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push) e [slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

  Por exemplo, na página do método `push`, vemos a seguinte descrição:

  > O método **push()** adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
  >

  Exatamente como vimos em aula, a documentação diz que o método `push` altera o array original, além de informar seu valor de retorno (que não foi necessário para nós no desafio).

  Na página do método `slice`, vemos a seguinte descrição:

  > O método `slice()` retorna uma cópia de parte de um array a partir de um subarray criado entre as posições `início` e `fim` (`fim` não é necessário) de um array original. O array original não é modificado.
  >

  Novamente, podemos consultar rapidamente o que o método faz, seu valor de retorno e se ele altera o array original.

  ---
