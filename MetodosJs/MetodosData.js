let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
console.log(horaBrasilia);


//pegar somente o ano
console.log(agora.getFullYear());

//pegar somente o mes
console.log(agora.getMonth());

//pegar somente o dia
console.log(agora.getDate());
