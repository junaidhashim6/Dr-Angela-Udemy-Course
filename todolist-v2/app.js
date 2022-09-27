//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { text } = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});
const itemsSchema ={
  name: String
};
const Item = mongoose.model("Item",itemsSchema);
const item1 = new Item({
  name : "Hit the + button to add a new item"
});
const item2 = new Item({
  name : "<-- Hit this to delete an item."
});
const item3 = new Item({
  name : "Welcome to your todolist!"
});
const defaultItems = [item1, item2, item3];

const listSchema = {
  name : String,
  items : [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {

  

  Item.find({}, function(err,foundItems){
    if (foundItems.length === 0){
      Item.insertMany(defaultItems, function(err){
        if (err){
          console.log(err);
        } else{
          console.log("Succesfuly saved default items to DB")
        }
      });
      res.redirect("/");
    } else{
      res.render("list", {listTitle: "Today", newListItems: foundItems});
  
    }
  });
});

app.get("/:customListName", function(req,res){
  customListName = req.params.customListName;
  List.findOne({name: customListName}, function(err,foundList){
    if(!err){
      if(!foundList){
        // Create a new List
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      }else{
        // Show existing list
        res.render("list",{listTitle: foundList.name, newListItems:foundList.items});
      }
    }
  });
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName
  });
  item.save()
  res.redirect("/");
});
app.post("/delete", function(req,res){
  const checkedItem= req.body.checkbox;
  Item.findByIdAndRemove(checkedItem,function(err){
    console.log("Succesfully removed checked Item from the todo list")
  });
  res.redirect("/");
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
