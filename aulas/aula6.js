const { calcularIMC } = require("./calculos")

const meuIMC = calcularIMC(1.80,87)

console.log(meuIMC)

console.log(calcularIMC(1.80,87).toFixed(2)) //Faz a mesma coisa que a o console da linha 7 e const meuIMC da linha 6