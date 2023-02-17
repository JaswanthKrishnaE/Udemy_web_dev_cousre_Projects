const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); 

app.get("/", function(request , response){
    response.sendFile(__dirname + "/view/index.ejs");
    });

    app.post("/",function(req,res){
        var fname=String(req.body.firstname);
        var lname=String(req.body.lastname);
        var mail =String(req.body.mail_id);

        //  res.send(fname +" " +lname + " "+mail);
        
        res.sendFile(__dirname+"/success.ejs");
        console.log(fname +" " +lname + " "+mail);

        res.render("success", {fname: fname});
        });
        //to connect
app.listen(4000,function(){
    console.log("server started at locahost:4000")
})
