
var nodemailer = require('nodemailer');

var testUser = {
	email: 'timgaziano@gmail.com',
	sign: {
		horoscope: "test horoscope"
	}
}


var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
        user: account.user,
        pass: account.pass
    }
});

// setup e-mail data
var mailOptions = {
    from: '"test" <myemail@gmail.com>', // sender address (who sends)
    to: testUser.email, // list of receivers (who receives)
    subject: 'your horoscope', // Subject line
    text: testUser.sign.horoscope, // plaintext body
    html: testUser.sign.horoscope
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});

