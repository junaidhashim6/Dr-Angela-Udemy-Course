const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs')
app.get("/", function(req,res){
    var today = new Date();

    if(today.getDay() === 1){
        var day = "Monday";
    } 
    else if(today.getDay() === 2){
        var day = "Tuesday";
    }
    else if(today.getDay() === 3){
        var day = "Wednesday";
    }
    else if(today.getDay() === 4){
        var day = "Thursday";
    }
    else if(today.getDay() === 5){
        var day = "Friday";
    }
    else if(today.getDay() === 6){
        var day = "Saturday";
    }        
    else {
        var day = "Sunday";
    }
    res.render('list', {currentDay : day})
})

app.listen(3000,function(){
    console.log("server started on port 3000")
})