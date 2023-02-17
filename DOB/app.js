const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get("/",function(req,res){
    res.send("connected");    
    });


app.listen(3000,function(){
    console.log("server started at locahost:3000")
});


mongoose.connect("mongodb+srv://jaswanthkrishna:Test123@cluster0.aedvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/DOB");