const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request , response){
    response.sendFile(__dirname + "/index.html");
    });
app.post("/", function(request , response){
    var n1=Number(request.body.num1);
    // console.log(n1);
    var n2=Number(request.body.num2);
    var sum=n1+n2;

        response.send("The sum of the 2 numbers is "+ sum);
        });

app.listen(3000 , function(){
    console.log("started in port 3000");
  });
  