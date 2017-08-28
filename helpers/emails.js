
var nodemailer = require('nodemailer');

var testUser = {
	email: 'timgaziano@gmail.com',
	sign: {
		horoscope: "test horoscope"
	}
}

nodemailer.createTestAccount(err, account){
	var transporter = nodemailer.createTransport({
		host:'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: account.user,
			pass: account.pass
		}
	});
	var mailOptions = {
		from: 'onlineAstrologer',
		to: testUser.email,
		subject: 'your daily horoscope',
		text: testUser.sign.horoscope,
		html: testUser.sign.horoscope
	};
	transporter.sendMail(mailOptions, error, info){
		if (error) {
			return console.log(error);
		}
		console.log('message sent: ' + info.messageId);
		console.log('message sent to: ' + user.email);
		console.log(nodemailer.getTestMessageUrl(info));
	}	

};

