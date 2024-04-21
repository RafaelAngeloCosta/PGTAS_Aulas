/*
    [ "Cypress", "Selenium", "Playwright" ]

    "Cypress é um item"
    "Selenium é um item"
    "Playwright é um item"
*/

const listarItens = (itens) =>{
    const quantidadeDeItens = itens.length;

          // iniciação       // condição            //incremento
    for (let indice = 0; indice < quantidadeDeItens; indice++ ){
        console.log(`${itens[indice]} é um item`)
    }

}

module.exports = {
    listarItens
}


// existeTexto