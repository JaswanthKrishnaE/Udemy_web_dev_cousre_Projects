const mysql = require('mysql');

// code to connect data to mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jashu1234"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  
