// Importar o EXPRESS (CommonJS Modules)
const express = require("express")

// Iniciando Express na variavel app
const app = express()

// Criando a primeira rota (Principal) 
app.get("/", (req, res)=>{
    res.send("<h1>Bem vindoao meu site! ;)</h1>")
})

// Rota Perfil
app.get("/Perfil", (req, res)=>{
    res.send("<h1>Perfil do usuário</h1>")
})

// req = requisição do usuario
// res = resposta


// Iniciando o servidor
app.listen(8080, function (erro) {
    if (erro) {
        console.log(`Ocorreu um erro!`)
    } else {
        console.log(`Servidor Iniciado com sucesso!`)
    }
})
