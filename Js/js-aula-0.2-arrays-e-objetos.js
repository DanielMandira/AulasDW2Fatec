// ARRAYS (VETORES OU LISTAS)
let produto = "notebook"
console.log(typeof (produto))

console.log(`\n`)
let produtos = ["Computador", "notebook", "Celular", "tablet"]
console.log(typeof (produtos))


console.log(`\n`)
for (let c in produtos) {
    console.log(`${Number(c) + 1} - ${produtos[c]}`)
}

console.log(`\n`)
for (let c in produtos) {
    console.log(`${c++ + 1} - ${produtos[c-- - 1]}`)
}

console.log(`\n`)
console.log(`Exibindo o Array no ForEach com indices: `)
produtos.forEach((produtos, i) => {
    console.log(i, produtos)
})

console.log(`\n`)
console.log(`Exibindo o Array no ForEach sem indices: `)
produtos.forEach(produtos => {
    console.log(produtos)
})

////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS

console.log(`\n`)
const product = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho Roda Crysis",
    comprar() {
        console.log("Comprado KRAI!!")
    }
}
console.log(typeof (product))
console.log(`\n`)

console.log(`O ${product.nome} da marca ${product.marca} custa apenas ${product.preco}. ${product.descricao}`)
product.comprar()

// Array de Objetos
console.log(`\n`)

const plist = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho.",
    },
    {

        nome: "Tablet",
        marca: "Samsung",
        preco:2000,
        descricao: "Ótima velocidade de processamento.",
    },
    {
        nome:"Celular",
        marca:"Apple",
        preco:12000,
        descricao:"Ultra Resistente.",
    }
    ]

    plist.forEach(product=>{
        console.log(`Produto: ${product.nome}`)
        console.log(`Marca: ${product.marca}`)
        console.log(`Preço: ${product.preco}`)
        console.log(`Descriçã0: ${product.descricao}\n`)
    })