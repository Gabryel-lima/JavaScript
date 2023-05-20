function input(message) {
    var prompt = require('prompt-sync')();
    
    if (typeof message !== 'string' && typeof message !== 'number') {
        console.error('\nNenhum parâmetro de mensagem foi fornecido!\n');
    }
    return message;
    /* console.log(message); */
}

//Funciona em var, let e const

const a = input()

console.log(a)






