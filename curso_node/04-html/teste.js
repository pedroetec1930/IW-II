const {type} = require('express/lib/response')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("CONECTADO COM SUCESSO!")
// }).catch(function(erro){
//     console.log("FALHA AO CONECTAR" + erro)
// })

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "UM TÍTULO QUALQUER",
    conteudo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum deleniti a placeat pariatur aut. Cumque similique laborum neque, eos perferendis quod quidem ipsa reprehenderit pariatur doloribus delectus a optio unde?'
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }

})

Usuario.create({
    nome: "PEDRO",
    sobrenome: "SENE",
    idade:16,
    email:"blabla@blabla.com"   
})

// Postagem.sync()
// Usuario.sync()