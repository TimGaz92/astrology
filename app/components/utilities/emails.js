
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var testUser = {
    name: "test user",
    email: '',
    sign: {
        horoscope: "test horoscope"
    }
}

    var from = "Astrology Match Maker";
    var message = testUser.sign.horoscope;
    var to = testUser.email;
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail', 
          auth: {
            password: "",
            user: "matchmakerastrology@gmail.com"
          }
    });           
    var mailOptions = {
        from: from,
        to: testUser.email, 
        subject: testUser.name+' | new horoscope matches!',
        text: message
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
