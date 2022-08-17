const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const items =["Buy Food", "Cook Food", "Eat Food"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs')
app.get("/", function(req,res){
    const today = new Date();

    const options = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"

    };
    let day = today.toLocaleDateString("en-us",options)
    res.render("list", {currentDay : day, newListItems: items})
})

app.post("/",function(req,res){
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server started on port 3000")
})