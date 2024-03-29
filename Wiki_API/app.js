//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", { useNewUrlParser: true });
const articleSchema = {
  title: String,
  content: String,
};
const Article = mongoose.model("Article", articleSchema);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/form", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});
app.get("/delete", function (res) {
  res.sendFile(__dirname + "/delete.html");
});
app
  .route("/articles")
  //get all the articles
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  // post a new article
  .post(function (req, res) {
    const newArtticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArtticle.save(function (err) {
      if (!err) {
        // res.send("Article saved succesfully");
        res.send("Article added succefully")
      } else {
        res.send(err);
      }
    });
  })
  // delete all the aricles
  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (!err) {
        res.send("Deleted all the articles");
      } else {
        res.status(500).send(err);
      }
    });
  });
//find a particular article
app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No article was found with this title or id");
        }
      }
    );
  })
  .put(function (req, res) {
    Article.replaceOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Succesfully updated the article!");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send("Succesfully updated article");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send("Successfully deleted the article");
      } else {
        res.send(err);
      }
    });
  });

//TODO

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
