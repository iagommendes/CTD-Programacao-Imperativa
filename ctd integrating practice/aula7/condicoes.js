// Ex2. O que cada expressão retorna?

//1 
// let x = 10
// let y = "a"

// console.log(y==="b" || x>=10)
// true

// let x=3
// let y=8

// console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))
// // false

// let str = "" //false
// let msg = "haha!" // true
// let eBonito = "false" // true

// console.log(!((str || msg) && eBonito))


function calcIMCNovo(altura, peso){
    let imc =  peso / (altura * altura)

    if (imc < 18.5) {
        return "Você está abaixo do peso"
    }
    if(imc >= 18.5 && imc <= 24.9){
        return "Peso normal | " + "Seu IMC é: " + imc
    }
    if(imc >= 25 && imc <= 29.9){
        return "Sobrepeso | " + "Seu IMC é: " + imc
    }
    if(imc >= 30 && imc <= 34.9){
        return "Obesidade Grau 1 | " + "Seu IMC é: " + imc
    }
    if(imc >= 35 && imc <= 39.9){
        return "Obesidade Grau 2 | " + "Seu IMC é: " + imc
    }
    if(imc >= 40){
        return "Obesidade Grau 3 | " + "Seu IMC é: " + imc
    }
}

console.log(calcIMCNovo(1.83, 300))
