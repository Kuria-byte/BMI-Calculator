// jshint esversion:6

// Require express in your calculator.js
// Express is a Node.JS FRAMEWORK
const express = require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Create a calculator route get method with app.get()
app.get("/", function(req,res){
res.sendFile(__dirname +"/index.html");
});

// Use postmethod to get and return result to the user
// body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
  app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result=num1 + num2;

  res.send("Your Answer is"+ result);
});

// create get method for bmiCalculator
app.get("/bmiCalculator",function(req,res){
res.sendFile(__dirname +"/bodyIndex.html");
});


// post method for bmiCalculator route
app.post("/bmiCalculator",function(req,res){
var weight=Number(req.body.weight);
var height=Number(req.body.height);

var bmi=weight/(height*height);

res.send("Your BMI is" + bmi);

});




// Spin up our server on port 3000 with app.listen
app.listen(3000 , function(){
  console.log("Server startred on port 3000");
});
