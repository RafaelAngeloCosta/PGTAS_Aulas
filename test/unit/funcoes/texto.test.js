const {existeTexto} = require("../../../src/funcoes/texto")
const assert = require("node:assert");


describe("Texto", () => {
    const vetor = ["Selenium", "Cypress"];

    describe("#exixteTexto", () => {
        it("Validar quando exist um texto", () => {
            //Arrange
            const textoEsperado = "Selenium";

            //Act
            const resultado = existeTexto(vetor, textoEsperado);

            //Assert
            assert.ok(resultado)
        });

        it("Validar que não é possível encontrar um valor no vetor", () => {
            const resultado = existeTexto(vetor, "Seleniun"); //palavra Seleniun esta escrito errada --correto Selenium
            assert.equal(resultado, false, `O valor Selenium foi encontrado mas não deveria estar no ${vetor}`);
        })
    });
});