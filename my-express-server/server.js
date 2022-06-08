const express = require("express");
const app = express();
app.get("/",function(req, res){
    res.send("Hello world");
});
app.get("/contact",function(req, res){
    res.send("contact me at junaidhashim6@gmail.con");
});
app.get("/about",function(req, res){
    res.send("My name is junaid and I'm learning Web Dev");
});
app.get("/hobbies",function(req, res){
    res.send("<ul><li>Cricket</li><li>football</li><li>going gym</li></ul>");
});
app.listen(3000, function(){
    console.log("server started at port 3000")
});
