// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
//var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');
var path = require('path');
//var request = require("request");
//call in ALL of the dependencies from the last scraper

var app = express();

var PORT = process.env.PORT || 3000;

// imported files
var userRoutes = require('./controllers/userController.js');
var models = require('./models');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// global variable for new reading
var reading = {};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// passport
app.use(session({
  secret: 'super secret',
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// static folder
app.use(express.static(path.join(__dirname + '/public')));
// app.use('/api', express.static(path.join(__dirname + '/public')));
// routes
app.use('/', userRoutes);
//app.use('/api', apiRoutes);

// passport strategy
require('./config/passport/passport.js')(passport, models.user);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/horoscope", function(req, res) {
  res.sendFile(__dirname + "/public/horoscope.html");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/api", function(req, res) {
  debugger
    console.log("we got get/api - get a new reading");
    var options = {
        url: 'https://aztro.herokuapp.com/?sign=aries&day=today',
        method: 'POST'
    };
 
    request(options, function(error, response, body){
      console.log("body", body);
        if (!error && response.statusCode == 200){
            // console.log(body);
            // console.log(response.json());
            res.send(body);
        }
    })

});



// function getNewReading(){
//     var options = {
//         url: 'https://aztro.herokuapp.com/?sign=aries&day=today',
//         method: 'POST'
//     };
//     function callback(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             reading = body;
//             return;
//         }
//     }
//     request(options, callback);
//     return;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setup server to sync models and listen
models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server listening on PORT ' + PORT);
  });
});
