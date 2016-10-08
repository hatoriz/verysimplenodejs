var express = require("express");
var app = express();

app.get("/",function(req,res) {
  res.send("Hello World, this is Hatoriz");
});

app.get("/greeting", function(req,res){
  res.send("greeting returned !");
});

app.listen("8899");