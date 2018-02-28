const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({sub:user._id,iat:timestamp},config.secret)
}

exports.signin = function(req,res,next){
  res.send({token:tokenForUser(req.user)})
}

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
  if(!email || !password){
    return res.status(422).send({error:'provide email and password'})
  }

  //if user email exist
  User.findOne({email:email},function(err,existingUser){
    if(err){return next(err);}
    //exist return error
    if(existingUser){
      res.status(422).send({error:'Email is in use'})
    }
    //not exist create and save
    const user = new User({
      email:email,
      password:password
    });
    user.save(function(err){
      if(err){
        return next(err);
      }
      res.json({token:tokenForUser(user)});
    });
    //respond after create
  })


}
