// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
//var mongoose = require("mongoose");
var request = require("request");
// var cheerio = require("cheerio");

var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');
var path = require('path');
//var request = require("request");

// var jsdom = require("jsdom"); 
var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var window = doc.defaultView;
var $ = require('jquery')(window);

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`<!DOCTYPE html>`);
// const $ = require('jQuery')(window);

// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

// $ = require("jquery")(jsdom.jsdom().createWindow());

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

// --------------------
// global variable for the current user
var currentUser = {};
var currentAPIResults = {};
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

// routes
app.use('/', userRoutes);
//app.use('/api', apiRoutes);

// passport strategy
require('./config/passport/passport.js')(passport, models.user);

//--------------------------------

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/horoscope", function(req, res) {
  res.sendFile(__dirname + "/public/horoscope.html");
});


// THis function takes the sign from current user, submits the API
// then sends the result back to the front end
app.get("/api", function(req, res) {
    console.log("we got get/api - get a new reading");
    var signToGet = currentUser.sign_1;
    console.log(signToGet);

    var options = {
        url: 'https://aztro.herokuapp.com/?sign=' + signToGet + '&day=today',
        method: 'POST'
    };
 
    request(options, function(error, response, body){
      // currentAPIResults = body;
      console.log("body", body);
      currentAPIResults = $.parseJSON( body );
      console.log("un json");
      console.log(currentAPIResults);
      console.log("body mood", currentAPIResults.mood);
        if (!error && response.statusCode == 200){
            // console.log(body);
            // console.log(response.json());
            res.send(currentAPIResults);
        }
    })
});

// 

app.get("/match", function(req, res){
  console.log("in get new match");
  // build a database search here

  console.log(currentAPIResults);
  console.log(currentAPIResults.compatibility)
  models.user.findAll({
      where: {
        sign_1: 'leo'
      }
      }).then(function(matches) {
        console.log("got back from the query");
        console.log(matches.length);
        console.log(matches);
        for (var i=0; i<matches.length; i++){
          console.log(matches[i].username);
        };
        res.send(matches);
              // res.render(dbBurger);
              // res.json(dbBurger);
        });

});

// this function gets the current user object from the userControllers file
exports.getCurrentUser = function(userFromControler){
  currentUser = userFromControler;
  return
};


//------------------------------------------

// setup server to sync models and listen
models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server listening on PORT ' + PORT);
  });
});
