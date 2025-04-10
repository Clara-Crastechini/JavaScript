//02. Verificar se o usuario pode tirar carteira de motorista

// Qual a sua idade?
//Se voce eh maior de idade, entao, pode tirar a carteira
//senao voce nao pode tirar a carteira de motorista

var prompt = require ('prompt-sync')();

let idade = prompt("Digite sua idade: ")


if(idade >= 18){
    console.log("Voce pode tirar sua carteira de motorista")
}else if(idade < 18){
    console.log("Voce nao tem idade suficiente para tirar a carteira")
}else{

    console.log("Essa informacao nao eh valida")
}