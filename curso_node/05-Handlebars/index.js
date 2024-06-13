const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');

//Configuração do handlebars
    
//Template Engine
app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Conexão com o banco de dados


const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
})

//Rotas

app.get('/cadastro',function(req,res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send("Texto: " + req.body.titulo + "Conteúdo: " + req.body.conteudo)
})

app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})


/* 

app.get("/",function(req,res){
    res.sendFile(__dirname + "/paginas/index.html" )
})

app.get("/sobre",function(req,res){
    res.send("Página sobre")
})

app.get("/blog",function(req,res){
    res.send("Página do blog")
})

app.get("/ola/:nome",function(req,res){
    res.send("Ola")
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send(req.params)
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("Olá, " + req.params.nome)
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("<h1>Olá, " + req.params.nome + "</h1><h2> Seu cargo é: " + req.params.cargo + "</h2>")
})

app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})
*/