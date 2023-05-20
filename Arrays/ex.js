function input(message) {
    var prompt = require('prompt-sync')();
    
    if (typeof message !== 'string' && typeof message !== 'number') {
        console.error('\nNenhum parâmetro de mensagem foi fornecido!\n');
        return;
    }
    /* console.log(message); */
}

input()






