//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});
const articleSchema = {
    title: String,
    content: String
}
const Article = mongoose.model("Article", articleSchema);
app.get("/articles",function(req,res){
  Article.find(function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }
    else{
      res.send(err);
    }
  });
});
app.post("/articles",function(req,res){
  const newArtticle = new Article({
    title: req.body.title,
    content:req.body.content
  });
  newArtticle.save(function(err){
    if(!err){
      res.send("Succesfully added new article")
    }
    else{
      res.send(err)
    }
  });
});
app.deleteMany("/articles",function(err){
  if(!err){
    res.send("Deleted all the articles")
  }
  else{
    res.send(err)
  }
});
//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});