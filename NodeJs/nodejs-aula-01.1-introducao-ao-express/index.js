// Importar o EXPRESS (CommonJS Modules)
const express = require("express")

// Iniciando Express na variavel app
const app = express()

// Iniciando o servidor
app.listen(8080, function (erro) {
    if (erro) {
        console.log(`Ocorreu um erro!`)
    } else {
        console.log(`Servidor Iniciado com sucesso!`)
    }
})
