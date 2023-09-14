const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const Port=3000;
app.use(bodyParser.urlencoded({extended:true}))
const db=require('./config/mongoose');

// Routes
app.use('/',require('./routes/index'));


   
app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})