// Importar o EXPRESS (CommonJS Modules)
const express = require("express")

// Iniciando Express na variavel app
const app = express()



// Criando a primeira rota (Principal) 
app.get("/", (req, res)=>{
    res.send("<h1>Bem vindoao meu site! ;)</h1>")
})

// Rota Perfil
app.get("/perfil/:nome?", (req, res)=>{
    // :nome -> Parametro obrigatório
    const nome = req.params.nome
    // Coletando o parametro da rota e gravando na variavel nome
    if(nome){
        res.send(`<h2 style='text-align:center; color: #ffffff; background-color:404040'>Olá, <span style='color: #0025a3'>${nome}</span>. Seja bem-vindo ao seu perfil!</h2>`)
    }else{
        res.send(`<h2 style='text-align:center; color: #ffffff; background-color:404040'>Faça login para acessar o seu perfil</h2>`)
    }
})

// Rota Video com varios parametros obrigatorios
app.get("/Videos/:playlist/:video",(req, res)=>{
    const playlist = req.params.playlist
    const video = req.params.video
    res.send(`<h2 style='text-align:center; color: #ffffff; background-color:404040'>Você está na playlist de ${playlist}. </h2><br>
    Reproduzindo o vídeo <strong>${video}...</strong>`)
})

// Rota Produtos
app.get("/Produtos/:produto?",(req,res)=>{
    let produto = req.params.produto
    if(produto){
        res.send(`<h1 style='text-align:center;'>${produto}</h1>`)
    }else{
        res.send(`<h1 style='text-align:center;'>Bem-vindo a Pagina de Produtos</h1>`)
    }
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
