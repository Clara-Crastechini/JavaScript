//Verificar se um aluno foi aprovado

var prompt = require ('prompt-sync')();

let nota = prompt("Digite sua nota: ")

if(nota >= 7){
    console.log("Aluno aprovado")
}else if(nota == 6){
    console.log("Aluno em recuperacao")
}else{
    console.log("Aluno reprovado")
}