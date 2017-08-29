// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
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
//sample route 
app.get("/aries/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/aries/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=1", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/taurus/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/taurus/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=2", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/gemini/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/gemini/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=3", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/cancer/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/cancer/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=4", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////
app.get("/leo/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/leo/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=5", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////
app.get("/virgo/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/virgo/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=6", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////
app.get("/libra/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/libra/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=7", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////
app.get("/scorpio/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/scorpio/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=8", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////
app.get("/sagittarius/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/sagittarius/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=8", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////

app.get("/capricorn/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/capricorn/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=10", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////


app.get("/aquarius/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/aquarius/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=11", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});
////////////////////////////////////////////////////////////

app.get("/pisces/daily", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

app.get("/pisces/weekly", function(req, res){
	request("https://www.horoscope.com/us/horoscopes/general/horoscope-general-weekly.aspx?sign=12", function(error, response, html) {
  		var $ = cheerio.load(html);
  		var results = [];
  		$("div.horoscope-content").each(function(i, element) {
    	var horoscope = $(element).text();
    		results.push({
      		horoscope: horoscope
    		});
  		});
  	console.log(results);
	});
	res.redirect('/');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
