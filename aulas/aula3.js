const almocos = [
    ["Salada", "Carne","Bolo"],
    ["Arroz", "Frango","Feijão"],
    ["Salada", "Fricassê","Batata Palha"]
]

//console.log(`O que eu mais gostei foi ${almocos[2]}`);
console.log(almocos[1][1])

almocos [2][0] = "Lasanha"; // Neste item vai substituir o falor da matiz pelo que vem apos o sinal de =
console.log(`${almocos[2][0]}`)

console.log("******************************************************");

/****************************************************************/

/*
    1. Crie um vetor com suas 3 comidas favoritas
    2. Crie uma matriz que represente a tabela abaixo:

    | 7 | 8 | 9 |
    | 4 | 5 | 6 |
    | 1 | 2 | 3 |
    | # | 0 | * |

    3. Escreva no console a seguinte frase:
       Eu gosto muito de: comida 1, comida 2 e comida 3
    
    4. Escreva os números contidos na coluna do meio da matriz
       Os números são: 8, 5, 2 e 0
*/

const comidas = [
    "Batata Frita",
     "Pizza",
     "Churrasco"    
]
console.log(`Eu gosto muito de: ${comidas[0]}, ${comidas[1]}, e ${comidas[2]} `)

const tecladoTelefone = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["#", 0, "*"]
]

console.log(`Os números são: ${tecladoTelefone[0][1]}, ${tecladoTelefone[1][1]}, ${tecladoTelefone[2][1]}, e ${tecladoTelefone[3][1]},`)

console.log("******************************************************");

const pessoas = [
    {
        nome:"Rafael Angelo",
        idade: 38,
        comidasFavoritas: [ "Batata Frita", "Pizza", "Churrasco"  ]

    },
    {
        nome:"Anna Clara",
        idade: 15,
        comidasFavoritas: [ "Salgadinho Frita", "Pizza", "Pudim"  ]

    }
];

console.log(pessoas[1])
//console.log(pessoas[1].nome)

console.log("******************************************************");

/*
    Construa um vetor com 5 objetos que estão na sala onde você está agora
    cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc.)
    Depois disso, escreva no console quais são as informações relacionadas a 
    cada um dos objetos que você colocou no vetor.
*/

const objetos = [
    {        
        nome:"Cadeira",
        tamanho:"Grande",
        cor: "Preta",
        resistencia: "Resistente"

    },
    {        
        nome:"Teclado",
        tamanho:"Medio",
        cor: "Preto",
        resistencia: "Fragil"

    },
    {        
        nome:"Monitor",
        tamanho:"Grande",
        cor: "Preta",
        resistencia: "Fragil"

    },
    {        
        nome:"Notbook",
        tamanho:"Pequeno",
        cor: "Preto",
        resistencia: "Fragil"

    },    {        
        nome:"Mesa",
        tamanho:"Media",
        cor: "Marrom",
        resistencia: "Resistente"

    }
];

// Primeiro objeto
console.log(`O Nome é ${objetos[0].nome}, o Tamanho é ${objetos[0].tamanho}, e a cor é ${objetos[0].cor}, e a resistencia é ${objetos[0].resistencia},`)

// Segundo objeto
console.log(`O Nome é ${objetos[1].nome}, o Tamanho é ${objetos[1].tamanho}, e a cor é ${objetos[1].cor}, e a resistencia é ${objetos[1].resistencia},`)

// Terceiro objeto
console.log(`O Nome é ${objetos[2].nome}, o Tamanho é ${objetos[2].tamanho}, e a cor é ${objetos[2].cor}, e a resistencia é ${objetos[2].resistencia},`)

// Quarto objeto
console.log(`O Nome é ${objetos[3].nome}, o Tamanho é ${objetos[3].tamanho}, e a cor é ${objetos[3].cor}, e a resistencia é ${objetos[3].resistencia},`)

// Quinto objeto
console.log(`O Nome é ${objetos[4].nome}, o Tamanho é ${objetos[4].tamanho}, e a cor é ${objetos[4].cor}, e a resistencia é ${objetos[4].resistencia},`)


//console.log(pessoas[1].nome)