const express = require('express');
const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});
const router = express.Router();

// router.route('/')
//   .get(function(req,res){
//     res.send({message:"super secret code is abc"})
//   })

router.route('/signup')
  .post(Authentication.signup)

router.route('/signin')
  .post(requireSignin,Authentication.signin)

// app.get('/',requireAuth,function(req,res){
//   res.send({message:"super secret code is abc"})
// })
// app.post('/signup',Authentication.signup);
// app.post('/signin',requireSignin,Authentication.signin);

module.exports = router;
