const {mediaEntreDoisNumeros} = require("../../../src/funcoes/calculos")
const assert = require("node:assert");

/*
T1 - primeiroNumero = 10, segundoNumero = 2, re = 6
T1 - primeiroNumero = "a", segundoNumero = "2", re = nan
T1 - primeiroNumero = 0, segundoNumero = 0, re = 0
*/

describe("Calculos", function(){
    //Tudo aqui é sobre Calculos
    describe("#mediaEntreDoisNumeros", function(){
        //Tudo aqui é sobre a função mediaEntreDoisNumeros
        it("Validar se a média entre 10 e 2 é igual a 6", function(){
            const resultadoDaMedia = mediaEntreDoisNumeros(10, 2);
            assert.equal(resultadoDaMedia, 6);
        });
        it("Validar se valores textuais retorna Nan", () => {
            const resultadoDaMedia = mediaEntreDoisNumeros("a", "");
            assert.equal(resultadoDaMedia, NaN);
        });
        it("Validar se a média entre 0 e 0 e igual a zero", () => {
           // const resultadoDaMedia = mediaEntreDoisNumeros(0, 0);
           // assert.equal(resultadoDaMedia, 0);
           
            //Arrange é Preparar
            const primeiroValor = 0;
            const segundoValor = 0;
            const resultadoEsperado = 0;

            //Act é executar
            const resultadoAtual = mediaEntreDoisNumeros(primeiroValor, segundoValor);

            //Assert é a comparação do Resultado Atual e do Esperado
            assert.equal(resultadoAtual, resultadoEsperado);

        })    
    });
});