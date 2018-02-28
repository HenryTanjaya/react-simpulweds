const express = require('express');
const router = express.Router();
const Landing = require('../controllers/landing');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt',{session:false});

router.route('/')
  .get(Landing.getLanding)
router.route('/')
  .post(requireAuth,Landing.updateLanding)
router.route('/form')
  .post(Landing.sendForm)


module.exports = router
