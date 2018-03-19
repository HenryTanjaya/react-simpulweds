const Landing = require('../models/landing');
const keys = require('../config/keys');
const nodemailer = require('nodemailer');

// SHOW Landing
exports.getLanding = function(req,res,next){
  Landing.findOne({title:'Simpulweds'},function(err,Landing){
    if(err){return next(err)}
    res.status(200).json({Landing})
  })
}

exports.updateLanding = function(req,res,next){
  Landing.findOneAndUpdate({title:'Simpulweds'},req.body, function(err, updatedLanding){
        if(err){
            res.status(400).json({message:err});
        } else {
            res.status(200).json({Landing:req.body});
        }
    });
}

exports.sendForm = function(req,res,next){
  var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:465,
      secure:true,
      auth: {
          type:'OAuth2',
          user: 'alderbeagle@gmail.com',
          clientID: keys.clientID,
          clientSecret: keys.clientSecret,
          refreshToken: keys.refreshToken,
          accessToken:keys.accessToken,
          expires:123123123
          // pass: keys.googlePassword
      }
    });

    var mailOptions = {
      from: 'alderbeagle@gmail.com',
      to: 'simpulweds@gmail.com',
      subject: 'Form',
      html: '<b>Name : </b>'+req.body.name +
            '<br><b>Email : </b>'+req.body.email +
            '<br><b>Country : </b>'+req.body.country +
            '<br><b>Message : </b>'+req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(200).json({message:error})
        console.log(error)
      } else {
        res.status(200).json({message:"email sent"})
      }
      transporter.close();
    });
}


module.exports= exports;
