// 1- Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.
const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

estados.forEach(estados => {
    console.log(`Estado: ${estados}\n`)
})

// 2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exibida os valores das chaves na tela.
const pessoa = {
    nome: "Daniel",
    idade: 26,
    cidade: "Jacupiranga",
    hobby: "Automobilismo",
    musicaFavorita: "Time - Pink Floyd"
}
console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCidade: ${pessoa.cidade}\nHobby: ${pessoa.hobby}\nMusica Favorita: ${pessoa.musicaFavorita}\n`)


// 3 – Crie um array de objetos de filmes com no mínimo 3 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const filmes = [
    {
        titulo:"Mad Max",
        genero:"Sci-fi",
        ano:1979,
        classificacao:"16 anos",
    },
    {
        titulo:"Matrix",
        genero:"Sci-fi",
        ano:1999,
        classificacao:"12 anos",
    },
    {
        titulo:"Star Wars IV - Uma Nova Esperança",
        genero:"Sci-fi",
        ano:1977,
        classificacao: "Livre",
    }
]

filmes.forEach(filmes=>{
    console.log(`Titulo: ${filmes.titulo}`)
    console.log(`Genero: ${filmes.genero}`)
    console.log(`Ano: ${filmes.ano}`)
    console.log(`classificação: ${filmes.classificacao}\n`)
})