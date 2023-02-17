// const express = require('express');
// const app = express();

// app.get("/",function(req,res){
//     res.send("connected");    
//     });


// app.listen(3000,function(){
//     console.log("server started at locahost:3000")
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitDB');
const fruitSchema = new mongoose.Schema({
    name: String,
    cgpa: Number,
    reviews: String
});

const fruit = mongoose.model("fruits",fruitSchema);
const Fruit = new fruit({

        name: 'mango',
        cgpa: 4,
        reviews: "good"
    
});
// Fruit.save();
