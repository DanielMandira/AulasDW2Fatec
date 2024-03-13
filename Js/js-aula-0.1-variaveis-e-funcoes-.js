// Declaração de Variaveis
// Const x Let x Var
const nome = "Daniel"
console.log(nome)

// typeof

console.log(typeof (nome))

// Novo modo de declarar Variaveis Template Strings
console.log(`O nome do aluno é ${nome}.`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funcoes
function minhaFuncao() {

}
console.log(typeof (minhaFuncao))

// Tipos de Funcao
// Funcao Simples 
function funcaoSimples() {
    console.log("Ola, Bem vindo!")
}
funcaoSimples()

// Funcao Com Parametros/Argumentos
function funcaoComParametros(nome) {
    console.log(`Ola, Bem Vindo ${nome}!`)
}
funcaoComParametros("Diego")

// Funcao com mais de 1 parametros / Argumentos

function soma(n1, n2) {
    let res = n1 + n2
    console.log(`${n1} + ${n2} = ${res}`)
}
soma(1, 2)

//Funcao com Retorno
function somaComRetorno(n1, n2) {
    return n1 + n2
}
console.log(`O valor da soma é ${somaComRetorno(5, 10)}`)


// Funcao com mais de 1 Retorno
function parImpar(n) {
    if (n % 2 == 0) {
        return "Par"
    } else {
        return "impar"
    }
}
console.log(`O numero é ${parImpar(9)}!`)

// Funcao Anonima
let dobro = function (x) {
    return x * 2
}
console.log(dobro(15))

// Arrow Function (Com mais de um Parametro)
// Funcao Anonima
const calc = function (num1, operador, num2) {
    return eval(`${num1}${operador}${num2}`)
}
console.log(`O Resultado da operação é ${calc(5, '*', 5)}`)

// Arrow Function =>
const calcArrow = (num1, operador, num2) => {
    return eval(`${num1}${operador}${num2}`)
}
console.log(`O Resultado da operação é ${calc(5, '*', 15)}`)

// Arrow Function com parametro unico
const dobroArrow = x => {
    return x * 2
}
console.log(`O dobro é ${dobroArrow(5)}`)

// IIFE (Funcao Imediata)
const iife = (function(){
    console.log("Executando imediatamente!")
})()

// IIFE Com parametro
const start =(function(app){
    console.log(`Executando Imediatamente o App ${app}.`)
})("Whatsapp")
