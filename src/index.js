const {concatenarPalavras, darBoasVindas} = require("./funcoes/texto")
const {mediaEntreDoisNumeros} = require("./funcoes/calculos")
const {listarItens} = require("./funcoes/vetores")

//const nomeConcatenado = concatenarPalavras("Rafael", "Angelo")
//console.log(nomeConcatenado)

console.log(concatenarPalavras("Rafael", "Angelo"));
darBoasVindas();
console.log(mediaEntreDoisNumeros(12,15));

//FAZENDO A CHAMADA DE VETORES
const tecnologias = ["Cypress", "Selenium", "Playwright"];
console.log(tecnologias.length)

listarItens(tecnologias)