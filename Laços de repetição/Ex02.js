//Somar números até que o usuário digite 0(Use o While)

var prompt = require ('prompt-sync')();

let soma = 0;
let numero = Number(prompt("Digite um numero: "));

while (numero !== 0) {
    soma += numero;
    numero = Number(prompt("Digite um numero: (caso queira sair digite 0)"));
} 

console.log(soma);