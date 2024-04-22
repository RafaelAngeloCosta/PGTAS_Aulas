const webDriver = require("selenium-webdriver");
const assert = require("node:assert");

describe("Login da Lojinha", () => {
    it("Validar que é possível logar usando credenciais válidas", async () => {
        //Abrir o Navegador
        const navegador = new webDriver.Builder().forBrowser(webDriver.Browser.CHROME).build();

        //Navegador para a URL da Lojinha -> http://165.227.93.41/lojinha-web/v2/
       await navegador.get("http://165.227.93.41/lojinha-web/v2/");


        //Preencher o campo usuário   --- teste
        await navegador.findElement(webDriver.By.id("usuario")).sendKeys("admin");

        //Preencher a Senha
        await navegador.findElement(webDriver.By.id("senha")).sendKeys("admin");

        //clicar em entrar
        await navegador.findElement(webDriver.By.css(".btn")).click();

        //Verificar se a URL  -> http://165.227.93.41/lojinha-web/v2/produto
        const urlEsperada = "http://165.227.93.41/lojinha-web/v2/produto";
        const urlAtual = await navegador.getCurrentUrl();
        assert.equal(urlAtual, urlEsperada);

        //Fechar navegador
        await navegador.quit();

    });

});