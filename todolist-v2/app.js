//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todoDB", {useNewUrlParser:true})
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

const listSchema = {
  name : String,
  items: [itemsSchema]
};
const List = mongoose.model("List",listSchema);

app.get("/", function(req, res) {

Item.find({},function(err,foundItems){
  if(foundItems.length === 0){
    Item.insertMany(defaultItems, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Default items are added to DB");
      }
    });
    res.redirect("/");
  }else{
    res.render("list", {listTitle: "Today", newListItems:foundItems});
  }
})
});
app.get("/:customListName",function(req,res){
  const customListName = req.params.customListName;
  List.findOne({name:customListName},function(err,foundlist){
    if(!err){
      if(!foundlist){
        const list = new List({
          name: customListName,
          items:defaultItems
        });
        list.save();
        res.redirect("/");
      }else{
        res.render("list",{listTitle:foundlist.name, newListItems:foundlist.items});
      }
    }
  })
 
})

app.post("/delete", function(req,res) {
  const itemId = req.body.checkbox;
  Item.findByIdAndRemove(itemId,function(err){
    if(!err){
      res.redirect("/");
    }else{
      console.log(err);
    }
  });
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name:itemName
  });
  if(listName === "Today"){
    item.save();
    res.redirect("/");
  }else{
    List.findOne({name: listName},function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
  
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
