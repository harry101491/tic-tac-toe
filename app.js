var config = require("./config");
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.listen(port, function(){
    console.log("the app is listening on port:"+port);
});