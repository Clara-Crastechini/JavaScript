
var prompt = require ('prompt-sync')();


let numero = prompt ("Digite um numero: ");

if (numero > 0){
    console.log("positivo")
}else if(numero == 0){
    console.log("o numero eh zero")
}else{
    console.log("negativo")
}