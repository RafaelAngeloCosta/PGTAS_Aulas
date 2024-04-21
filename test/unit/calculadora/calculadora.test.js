const {Calculadora} = require("../../../src/calculadora/calculadora")
const assert = require("node:assert");


describe("Calculadora", () => {

    describe("#somar", () => {
        it("Validar a soma de dois números", () => {
            const calculadora = new Calculadora();
            const soma = calculadora.somar(5, 10)
            assert.equal(soma, 15);
        });
    });

    describe("#dividir", () => {
        const calculadora = new Calculadora();
        it("Validar a divisão de dois números", () => {
            const divisao = calculadora.dividir(10, 2)
            assert.equal(divisao, 5);
        });
    
        it("Validar se a divisão de 0 por 0 não resulta em um número", () => {
            const divisao = calculadora.dividir(0, 0)
            assert.equal(divisao, NaN);
        });        

    });    

});