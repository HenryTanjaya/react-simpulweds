const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local Strategy
const localOption = {usernameField:'email'}
const localLogin = new LocalStrategy(localOption,function(email,password,done){
  User.findOne({email:email},function(err,user){
    if(err){return done(err);}
    if(!user){return done(null,false);}
    //compare password is password with user.password
    user.comparedPassword(password,function(err,isMatch){
      if(err){return done(err);}
      if(!isMatch){return done(null,false);}
      return done(null,user);
    })
  })
})

//setup jwt Strategy
const jwtOption = {
  jwtFromRequest:ExtractJwt.fromHeader('authorization'),
  secretOrKey:config.secret

};
//create jwt Strategy
const jwtLogin = new JwtStrategy(jwtOption,function(payload,done){
//see if user id exist in database
//if does call done
//if not call done without user object
User.findById(payload.sub,function(err,user){
  if(err){return done(err,false)}
  if(user){
    done(null,user);
  } else {
    done(null,false);
  }

})
})
//tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
