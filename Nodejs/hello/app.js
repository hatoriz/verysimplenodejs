var express = require("express");
var app = express();

app.get("/",function(req,res) {
  res.send("Hello World, from Hatoriz");
});

app.get("/greeting", function(req,res){
  res.send("greeting has been returned !");
});

app.listen("3001");
