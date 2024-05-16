// Solicitando um módulo interno do node http
var http = require("http")

// Abrindo um servidor http
http.createServer(function(req,res){
    res.end("Oi ETEC MCM!")
}).listen(8081)

console.log("Servidor rodando!!")