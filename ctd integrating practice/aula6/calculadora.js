// Calc nível 1 e 2
function adicionar(num1, num2){
    return (num1 + num2)
}

function subtracao(num1, num2){
    return (num1 - num2)
}

function multiplicacao(num1, num2){
    return (num1 * num2)
    // return "Multiplicação: " + (num1 * num2)
}

function divisao(num1, num2){
    return (num1 / num2)
}

console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar(10, 10))
console.log(subtracao(10, 2))
console.log(multiplicacao(10, 2))
console.log(divisao(10, 0))

// Calc nível 3

// 1 Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero(numeroQuad){
    return multiplicacao(numeroQuad, numeroQuad)
}

console.log(quadradoDoNumero(4));

// 2 Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro

function mediaDeTresNumeros(num1, num2, num3){
    let soma = adicionar(num1,adicionar(num2, num3))
    let media = divisao(soma, 3)
    return media
}

console.log(mediaDeTresNumeros(8, 1, 5))

// 3 Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.

function calculaPorcentagem(valor, porcentagem){
    let percent = valor * porcentagem / 100
    return percent
}

console.log(calculaPorcentagem(200, 50))