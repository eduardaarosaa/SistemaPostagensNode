const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sistemaDeCadastro","root","",{
    host:"localhost",
    dialect:'mysql'
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//template handlebars

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//rotas

app.get('/card', function(req,res){
    res.render('layouts/form');
})
app.post('/add',function(req,res){

    res.send("Texto:" + req.body.titulo+"Conteudo:"+req.body.conteudo);

})


app.listen(8081,function(){
    console.log("Servidor rodaando");
})