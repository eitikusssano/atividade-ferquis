//Exercício 3.
//Um ano é bissexto se for divisível por 4, exceto os divisíveis por 100 — a não ser que também sejam divisíveis por 400. Peça um ano e mostre se eleé bissexto usando uma única expressão lógica. Teste com 2024, 1900 , 2000 e 2026
let ano = Number(prompt("Digite um ano:"));

let resultado = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log("O ano " + ano + (resultado ? " é bissexto." : " não é bissexto."));