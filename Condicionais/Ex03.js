//Verificar se um número é par ou ímpar


var prompt = require ('prompt-sync')();

let numero = prompt("Digite um numero: ");

if(numero % 2 == 0){
    console.log("O numero eh par")
}else{
    console.log("O numero eh impar")
}
