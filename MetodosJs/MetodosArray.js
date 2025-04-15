//.length() => tamanho

// let frutas = ["Maca", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Roma", "Seriguela", "Embu", "Caqui", "Uva verde", "Uva roxa"];

// console.log(frutas.length);

// let numero = [20, 5 ,3]
// console.log(numero.length)


//------------------------------------------------------------

//.reverse() => reverter o nosso array
// let numeros = [70,100,120,1000];
// numeros.reverse();
// console.log(numeros);


//------------------------------------------------------------

// let nomes = ["Valdemir", "Edson", "Anna", "Ana"];

// //.push() => adiciona no final
// nomes.push("Matheus");

// //.unshift() => adiciona no inicio
// nomes.unshift("Sofia");


// //.pop() => remover no final
// nomes.pop();
// // console.log(nomes.pop()); => returna o valor apagado

// //.shift() => Remover no inicio
// nomes.shift();

// //.splice() => adiciona ou removo elementos do array
// nomes.splice(2, 1); 


// console.log(nomes);


//-------------------------------------------------------------

// let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", "Lolla", "Sol"];

// //.includes() => Se existe no array, se existir ele retornara true, se nao, ele retornara false
// console.log(nomesAnimais.includes("bob"));


//-------------------------------------------------------------

// let valores = [30, 55, 90, 66];

// //Qro os valores maiores que 50
// const maiores = valores.filter(num => num > 50);

// console.log(maiores);


//-------------------------------------------------------------

//.map => Definicao: Metodo usado em arrays que permite trasformar os elementos do array original em novos valores, criando um novo array, sem modificar o original.

// //lista de nomes de alunos e notas

// let alunos = [
//     {nome: "Clara", nota: 10 },
//     {nome: "Laura", nota: 10},
//     {nome: "Brenda", nota: 10}
// ];

// //lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);
// console.log(alunoNomes);


//2. Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// //ola caio
// //ola dani

// let mensagem = nomes.map(itemDoArraysNomes => `Ola, ${itemDoArraysNomes}`);
// //let mensagem = nomes.map(itemDoArrysNomes => "Ola," + itemDoArraysNomes);
// console.log(mensagem);



//3.Pegar apenas os primeiros caracteres de nomes
// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];
// let inicial = nomes.map(element => element[0]);

// console.log(inicial);


//4. lista de email

let emails= [
    "kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
]

let dominios = emails.map(element => element.split("@")[1])

console.log(dominios);
