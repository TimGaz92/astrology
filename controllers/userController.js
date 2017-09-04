// node packages
var express = require('express');
var passport = require('passport');
var fs = require("fs");


// setup router
var router = express.Router();

var request = require('request');

var server = require("../server.js");

router.route('/sign-up')
	.get(function(req, res) {
		res.render('sign-up', { title: 'Astrology - Sign Up' });
	})
	.post(passport.authenticate('local-signup'), function(req, res){
		console.log("in route signup req.user -");
		// console.log(req);
		// pass the current user object to the server
		server.getCurrentUser(req.user);
		res.redirect ('/horoscope');
		// failureRedirect: '/sign-up'
	});

router.route('/login')
	.get(function(req, res) {
		res.render('login', { title: 'Astrology - Login' });
	})
	.post(passport.authenticate('local-login'), function(req, res){
		console.log(req.user);
		// pass the current user object to the server
		server.getCurrentUser(req.user);
		res.redirect( '/horoscope')
	});

function showCurrentStuff(){
		console.log("we're in the login route");
		console.log(res);
		failureRedirect: '/login'
};


router.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
});

router.get('/user', isLoggedIn, function(req, res) {

	res.render('user', { title: 'MovieGoers - '+req.user.username, username: req.user.username })

});


module.exports = router;

// module.exports = function Routes(currentUser){};

// function to test if user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}