const express = require("express")
const app = express()

app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu app // testando alteração com o nodemon")
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

// app.get("/ola/:cargo/:nome",function(req,res){
//     res.send(req.params)
// })

// app.get("/ola/:cargo/:nome",function(req,res){
//     res.send("Olá, " + req.params.nome)
// })

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("<h1>Olá, " + req.params.nome + "</h1><h2> Seu cargo é: " + req.params.cargo + "</h2>")
})

app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})