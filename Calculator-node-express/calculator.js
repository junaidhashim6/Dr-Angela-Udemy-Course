const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmi", function(req,res){
    res.sendFile(__dirname +"/bmi.html");
});
app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Your calculated results is " +  result);
});
app.post("/bmi.html",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI = weight/(height * height);
    res.send("Your BMI is " + BMI);
})
app.listen(3000,function(){
    console.log("Server is runing at port 3000")
});
