// Importar o EXPRESS (CommonJS Modules)
const express = require("express")

// Iniciando Express na variavel app
const app = express()

// Definindo o EJS para renderizar páginas HTML
app.set('view engine', 'ejs')
app.use(express.static('views'));

// Criando a primeira rota (Principal) 
app.get("/", (req, res)=>{
    res.render('index')
})

// Rota Perfil
app.get("/perfil", (req, res)=>{
   res.render('perfil')
})

// Rota Video
app.get("/Videos",(req, res)=>{
   res.render('videos')
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
