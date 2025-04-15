//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();
let numero =  prompt("Olá, digite um numero:");

if(numero % 2 == 0){
    console.log("Esse número é par")
}else{
    console.log("Esse numero é impar")
};