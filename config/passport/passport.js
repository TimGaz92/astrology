var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
	var User = user;
	var localStrategy = require('passport-local').Strategy;

	// local sign-up strategy
	passport.use('local-signup', new localStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, username, password, done) {

		var generateHash = function(password) {
			return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
		};

		User.findOne({
			where: {
				username: username
			}
		}).then(function(user) {
			if (user) {
				return done(null, false, { message: 'That username is already taken' });
			} else {
				var userPassword = generateHash(password);
                ///////////
                var birthdate= req.body.birthdate;
                var birthmonth= req.body.birthmonth;
                console.log("my birthmonth: "+ birthmonth);
                var zodiacSign = "";
switch(1)
{
	case 0: {//January
			 if(day < 20)
		 		zodiacSign = zod_signs[0];
			 else
		 		zodiacSign = zod_signs[1];
		    }break;
	case 1: {//February
			 if(day < 19)
		 		zodiacSign = zod_signs[1];
			 else
		 		zodiacSign = zod_signs[2];
			}break;
	case 2: {//March
			 if(day < 21)
			 	zodiacSign = zod_signs[2];
			 else
			 	zodiacSign = zod_signs[3];
			}break;
	case 3: {//April
			 if(day < 20)
		 		zodiacSign = zod_signs[3];
			 else
		 		zodiacSign = zod_signs[4];
			}break;
	case 4: {//May
			 if(day < 21)
		 		zodiacSign = zod_signs[4];
			 else
		 		zodiacSign = zod_signs[5];
			}break;
	case 5: {//June
			 if(day < 21)
		 		zodiacSign = zod_signs[5];
			 else
		 		zodiacSign = zod_signs[6];
			}break;
	case 6: {//July
			 if(day < 23)
		 		zodiacSign = zod_signs[6];
			 else
		 		zodiacSign = zod_signs[7];
			}break;
 	case 7: {//August
			 if(day < 23)
		 		zodiacSign = zod_signs[7];
			 else
		 		zodiacSign = zod_signs[8];
			}break;
	case 8: {//September
			 if(day < 23)
		 		zodiacSign = zod_signs[8];
			 else
		 		zodiacSign = zod_signs[9];
			}break;
	case 9: {//October
			 if(day < 23)
		 		zodiacSign = zod_signs[9];
			 else
		 		zodiacSign = zod_signs[10];
			}break;
	case 10: {//November
			 if(day < 22)
		 		zodiacSign = zod_signs[10];
			 else
		 		zodiacSign = zod_signs[11];
			}break;
	case 11: {//December
			 if(day < 22)
		 		zodiacSign = zod_signs[11];
			 else
		 		zodiacSign = zod_signs[0];
			}break;
		console.log(" this is my sign: " +zodiacSign);	
 }
    console.log(" this is my sign: " +zodiacSign);

///////

				var userData = {
					username: username,
					password: userPassword,
					email: req.body.email,
					gender: req.body.gender,
					sign_1: req.body.sign_1,
					// zodiacsign: zodiacSign,
					birthmonth: birthmonth,
					birthdate: birthdate
				};
                 console.log(userData);
				User.create(userData).then(function(newUser, created) {
					if (!newUser) {
						return done(null, false);
					}

					if (newUser) {
						return done(null, newUser);
					}
				});
			}
		});
	}));

	// serialize user
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// deserialize user
	passport.deserializeUser(function(id, done) {
		User.findById(id).then(function(user) {
			if (user) {
				done(null, user.get());
			} else {
				done(user.errors, null);
			}
		});
	});

	// local login strategy
	passport.use('local-login', new localStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, username, password, done) {
		var User = user;

		var isValidPassword = function(userPass, password) {
			return bCrypt.compareSync(password, userPass);
		}

		User.findOne({
			where: {
				username: username
			}
		}).then(function(user) {
			if (!user) {
				return done(null, false, { message: 'Username does not exist.' });
			}

			if (!isValidPassword(user.password, password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}

			var userInfo = user.get();
			return done(null, userInfo);

		}).catch(function(err) {
			console.log('Error: ' + err);
			return done(null, false, { message: 'Something went wrong with your login.' });
		});
	}));
}