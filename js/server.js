const express = require("express");

const app = express();

app.get("/", function(request , response){
response.send("<h1> kafgkaf</h1>");
});
app.get("/contact",function(request , response){
  response.send("<h1> 9959433158 </h1>");

});
app.get("/about",function(request , response){
  response.send("<h1> jfwdkwefklweruklwefjkweflwefkjwefkjwe636464646464663366 </h1>");

});
app.listen(3000 , function(){
  console.log("Server started in locap host 3000");
});

