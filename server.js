// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
//call in ALL of the dependencies from the last scraper

var app = express();

var PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// MongoDB configuration 
mongoose.connect("mongodb://localhost/astrologyDB");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
