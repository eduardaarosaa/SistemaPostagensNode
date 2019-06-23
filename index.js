const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sistemaDeCadastro","root","",{
    host:"localhost",
    dialect:'mysql'
})

//template handlebars

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//rotas

app.get('/card', function(req,res){
    res.render('layouts/form');
})


app.listen(8081,function(){
    console.log("Servidor rodaando");
})