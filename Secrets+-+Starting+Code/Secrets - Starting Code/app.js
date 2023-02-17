const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var port=3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
extended: true,}));
app.set('view engine', 'ejs');      

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User",userSchema);

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});
app.get("/register", function(req, res) {
    res.render("register");
});

app.post("/register", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;


        const newUser = new User(
            {email: username,
             password: password}
        );
        newUser.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("secrets");
            }
        
      });

});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username, password: password}, function(err, user){
        if (err) {
            console.log(err);
        }
        else {
            res.render("secrets");
        }
    })
});


app.listen(port, function () {
    console.log("server started at locahost:"+port);
  });