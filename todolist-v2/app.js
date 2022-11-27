//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/todoDB",{useNewUrlParser:true})
const itemsSchema = {
  name: String
};
const Item = mongoose.model("Item",itemsSchema);
const item1 =new Item({
  name: "Welcom to our todolist"
});
const item2 =new Item({
  name: "Press Enter to add anything in the list"
});
const item3 =new Item({
  name: "Hit the delete button to delete anything from the list"
});
const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Default items are added to DB");
  }
});

app.get("/", function(req, res) {



  res.render("list", {listTitle: "Today", newListItems:items });

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
