let nome = "Rafael";
nome = "Angelo";
let sobrenome = "Costa"

console.log(nome);

const idade = 19;
console.log(idade);

let salario = 5000;

salario += 1000.00;
//salario = salario + 1000
console.log(salario);

salario -= 1000.00;
//salario = salario - 1000
console.log(salario);

salario++
console.log(salario);
//console.log(++salario);
//console.log(salario);

console.log(--salario);
//console.log(salario);

/*
= substitui
+= incrementa do valor já existente
-= decrementa do valor já existente
o que atribui é o = 
o += significa que vc quer adicionar algo (salario = salario + 10)
o -= significa que vc quer diminuir algo (salario = salario - 10)
o mais += e -= só está reduzindo o código.
*/

const possuiVistoDeTrabalho = true;
console.log(possuiVistoDeTrabalho);

const linguagensDeProgramacao = ["JS","php","java","ruby"];
console.log(linguagensDeProgramacao[0])
console.log(linguagensDeProgramacao[1])
console.log(linguagensDeProgramacao[2])
console.log(linguagensDeProgramacao[3])

let indice = 3;
console.log(linguagensDeProgramacao[indice])
console.log(linguagensDeProgramacao[--indice])
console.log(linguagensDeProgramacao.join(" e "))
console.log("******************************************************");
/* 
    Crie uma variável que possui o valor 5. 
    Depois crie um vetor que possui 2 itens: 
        1) soma de 5 + a variável
        2) subtração de 5,99 menos a variável
    Apresente o valor dos itens do vetor no Console.
    Depois some os dois itens
    Depois apresente um texto dizendo:
        O resultados final é [resultado]
*/

const valor = 5;
const vetorCriado = [(5 + valor),(5.99 - valor)];

console.log(vetorCriado[0]);
console.log(vetorCriado[1]);

const somaDosItensDoVetor = vetorCriado[0] + vetorCriado[1];

//console.log()
//console.log()
console.log(`O resultados final é ${somaDosItensDoVetor}`);