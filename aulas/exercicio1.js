//imc= peso / (alturx altura)
//PENSAMENTO COMPUTACIONAL
/*
Decomposição
- Saber a idade da pessoa
- saber o peso da pessoa
- saber se a pessoa é real
- calcular o IMC
- saber altura da pessoa
- classificar a pessoa
- verificar se a idade está no intervalo >=20 e <=60
- informar a pessoa que ela não tem a idade adequada quando não ira adequa quano não esta no intervalo definido

Reconhecimento de Padrões

- Somente pessoas de 20 a 60 anos
- Altura é sempre em metros
- Peso é sempre em kilos
- A classificação depende de um intervalo de IMC
- cada faixa de valor do IMC possui uma classificação
- Sempre precisa da altura e do peso para o cálculo
- Tem apenas 4 faixa de resultados para classificar

Abstração
- Calcular o IMC e classificar somente as pessoas que possuem idade entre 20 e 60 anos


Pensamento Algoritimico
1. Perguntar a idade da pessoa
2. Validar que a idade informada está entre o intervalo de 20 a 60 anos (inclusive)
3. Se não estiver dentro da faixa permitida de idade, informar a pessoa sobre isso e oarar a execução
4. Perguntar a altura da pessoa metros
5. Perguntar o peso da pessoa kilos
6. Calcular o IMC com base na fórmula peso / (altura x altura)
7.Se o IMC for menor que 18,5 então classificar como "Baixo peso"
8. Senão, verificar se o IMC estiver entre 18,5 e 24,99 então classificar como "Normal"
9. Senão, verificar se o IMC estiver entre 25 e 29,99 então classificar como "Sobrepeso"
10. Senão, verificar se o IMC é maior ou igual a 30 e então classificar como "Obesidade"
11. dizer a classificação que a pessoa teve
*/

// 1. Perguntar a idade da pessoa
const idade = 38;

// 2. Validar que a idade informada está entre o intervalo de 20 a 60 anos (inclusive)
if (idade <20 || idade >60) {
// 3. Se não estiver dentro da faixa permitida de idade, informar a pessoa sobre isso e oarar a execução
    console.log("Desculpe, sua idade não se enquadra para o cáculo do IMC")
}else{
// 4. Perguntar a altura da pessoa metros
const altura = 1.80;
// 5. Perguntar o peso da pessoa kilos
const peso = 80;
// 6. Calcular o IMC com base na fórmula peso / (altura x altura)
const imc = peso / (altura * altura);

let classificacao;

if (imc < 18.5) {
    // 7.Se o IMC for menor que 18,5 então classificar como "Baixo peso"
    classificacao = "Baixo Peso";
}   else if (imc >= 18.5 && imc < 24.99) {
    // 8. Senão, verificar se o IMC estiver entre 18,5 e 24,99 então classificar como "Normal"
    classificacao = "Normal";
}   else if (imc >= 25 && imc <= 29.99) {
    // 9. Senão, verificar se o IMC estiver entre 25 e 29,99 então classificar como "Sobrepeso"
    classificacao = "Sobrepeso";
} else {
    // 10. Senão, verificar se o IMC é maior ou igual a 30 e então classificar como "Obesidade"// 11. dizer a classificação que a pessoa teve
    classificacao = "Obesidade";
}
    //11. dizer a classificação que a pessoa teve
    console.log(`Seu IMC é classificado como: ${classificacao}`)
}