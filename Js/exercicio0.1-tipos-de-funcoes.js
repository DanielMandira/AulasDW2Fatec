// Atividade 1
function sobreMim() {
    console.log(`Ola, Meu nome é Daniel \nTenho 26 anos \nMoro na cidade de Jacupiranga`)
}
sobreMim()

// Atividade 2
function divisao(num1, num2) {
    let result = num1 / num2
    console.log(`\nO Resultado da Divisão é de: ${result}`)
}
divisao(5, 2)

// Exercicio 3
function multi(num1, num2, num3) {
    return num1 * num2 * num3
}
console.log(`\nO resultado da Multiplicação dos 3 numeros é de: ${multi(5, 4, 3)}`)

// Exercicio 4
function maioridade(idade) {
    if (idade >= 18) {
        return `Maior de Idade`
    } else {
        return `Menor de idade`
    }
}
let idade = 8
console.log(`\nVocê é ${maioridade(idade)}`)

// Exercicio 5

const media = function (nota1, nota2) {
    if ((nota1 + nota2) / 2 <= 5) {
        return `Reprovado`
    } else {
        return `Aprovado`
    }
}
console.log(`\nVocê foi ${media(6,5)}`)

// Exercicio 6
const triplo = n =>{
    return n*3
}
console.log(`\nO triplo do numero é ${triplo(2)}`)

// Exercicio 7
const soma = (n1, n2, n3, n4) =>{
    return n1+ n2 + n3 + n4
}
console.log(`\nA soma dos Quatro Numeros é ${soma(1,4,7,8)}`)

// Exercicio 8
let nome = "Bruin"
const saudacao = (function(nome){
    console.log(`\nOla, Seja Bem Vindo! ${nome}`)
})(nome)