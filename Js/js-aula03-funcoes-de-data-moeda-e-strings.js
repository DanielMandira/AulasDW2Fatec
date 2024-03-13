// Funçoes de DATA, MOEDA e STRINGS

// Objeto LITERAL
const carro = {
    // Atributos
    marca: "Ford",
    modelo: "Focus",
    ano: 2014,
    // Metodos
    buzinar() {
        return "beep! Beep!"
    }
}
console.log(`${carro.marca} ${carro.modelo}, \n${carro.buzinar()}`)

console.log('\n')
//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//

// Classe 
class Carro {
    // Atributos
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    // Métodos
    buzinar() {
        return "beep! Beep!"
    }
}

// Criando uma Instância (objeto) da classe Carro
// Carro Popular
const carroPopular = new Carro()
carroPopular.marca = "Fiat"
carroPopular.modelo = "Uno"
carroPopular.ano = "2012"
console.log(`${carroPopular.marca} ${carroPopular.modelo}, ${carroPopular.ano}\n${carroPopular.buzinar()}`)

// Carro Esportivo
const carroEsportivo = new Carro("Ferrari", "F355", 1998)
console.log(`${carroEsportivo.marca} ${carroEsportivo.modelo}, ${carroEsportivo.ano}\n${carroEsportivo.buzinar()} `)

console.log('\n')
//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//

// Manipulando DATAS no JS
const dataAtual = new Date()
// Pegando o dia atual
const dia =  dataAtual.getDate()
console.log(`Hoje é dia: ${dia}`)
// Pegando o mes atual
const mes = dataAtual.getMonth() + 1
console.log(`Estamos no Mês: ${mes}`)
// Pegando o ano atual
const ano = dataAtual.getUTCFullYear()
console.log(`Estamos no ano: ${ano}`)
console.log(`hoje é: ${dia}/${mes}/${ano}`)

console.log('\n')
//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//

// Manipulando MOEDA no JS
let salario = 2500.30
console.log(salario)
console.log(salario.toFixed(2))
console.log(salario.toFixed(2).replace('.',','))
console.log(salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))
console.log(salario.toLocaleString('en-us', {style:'currency', currency:'USD'}))
console.log(salario.toLocaleString('en-us', {style:'currency', currency:'EUR'}))

console.log('\n')
//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//.//

// Formatando STRINGS no JS
const nome = "Daniel Mandira"
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.length)

// PODEMOS USAR O LENGTH TAMBÉM PARA ARRAYS
const lista =["Maçã", "Banana", "Morango"]
console.log(lista.length)