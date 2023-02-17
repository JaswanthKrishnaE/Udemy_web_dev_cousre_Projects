const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); 

app.get("/",function(req,res){
// res.send("connected");
    var today = new Date();
    // if (today.getDay()===0){
    //     // res.send("today is sunday " + today.getDate())
    //     res.sendFile(__dirname + "/index.html");
    //     var day= today.getDate();
    // }else {
    //     res.send("today is not sunday")

    // }
    var currentDay=today.getDay();
    switch (currentDay) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    res.render("index", {KindOfDay: day});

});

app.listen(8000,function(){
    console.log("server started at locahost:3000")
});
