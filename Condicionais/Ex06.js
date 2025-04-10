//Dia da semana por número(Switch case)

var prompt =  require ('prompt-sync')();

let dia = Number (prompt ("Digite um numero do dia da semana: "));

switch(dia){
    case 1: console.log ("O dia escolhido eh domingo")
    break;

    case 2: console.log ("O dia escolhido eh segunda")
    break;

    case 3: console.log ("O dia escolhido eh terca")
    break;

    case 4: console.log ("O dia escolhido eh quarta")
    break;

    case 5: console.log ("O dia escolhido eh quinta")
    break;

    case 6: console.log ("O dia escolhido eh sexta")
    break;

    case 7: console.log ("O dia escolhido eh sabado")
    break;

    default:
        console.log("Dado invalido")
}