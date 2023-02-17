const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var port=3000;

const app = express();

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");
mongo

const articleSchema = {
  title: String,
  content: String,
};
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
  .get(function (req, res) {
    // res.send("connected");
    Article.find(function (err, foundaricles) {
      if (!err) {
        res.send(foundaricles);
      } else {
        console.log("err");
      }
      console.log(foundaricles);
    });
  })
  .post(function (req, res) {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (!err) {
        res.send("successfullly updated");
      } else {
        res.send("error");
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("successfully deleted all articles");
      } else {
        res.send("error");
      }
    });
  });

app.route("/articles/:articleTitle")
.get(function (req, res) {
Article.findOne({title: req.params.articleTitle},function (err,foudarticle){
if (foudarticle) {
    res.send(foudarticle);
}
else {
    res.send("noarticle found");
}
});
})
.put(function (req, res) {
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title,
        content: req.body.content},function (err){
            if (!err) {
                res.send("successfully updated");
            }
            else{
                res.send("err");
            }
        })
})
.delete(function (req, res) {
    Article.deleteOne(
        {title: req.params.articleTitle},
        function (err){
            if (!err) {
                res.send("successfully deleted");
            }
            else{
                res.send("err");
            }
        }
    )
});


//strating a server
app.listen(port, function () {
  console.log("server started at locahost:"+port);
});