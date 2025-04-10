//g. Mostrar tabuada de um número(Use o for)

var prompt = require ('prompt-sync')();

let num = prompt ("Digite um numero: ")


for (let n  = 0; n  <= 10.; n ++) {
    console.log(num, "X", n, "=", (num * n)) 
}