
var prompt = require('prompt-sync')();

let nomes = [];

while (true) {
    let nome = prompt("Digite um nome (ou 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === 'sair') {
        break;
    }

    let existe = nomes.some(n => n.toLowerCase() === nome.toLowerCase());

    if (existe) {
        console.log("Nome já está na lista.");
    } else {
        nomes.push(nome);
        console.log("Nome cadastrado.");
    }
}

console.log("\nNomes cadastrados:");
nomes.forEach(n => console.log("- " + n));
rCase() === nome.toLowerCase
