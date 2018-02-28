const express = require('express');
const router = express.Router();
const Portfolio = require('../controllers/portfolio');

router.route('/')
  .get(Portfolio.getAllPortfolio)
router.route('/new')
  .post(Portfolio.addPortfolio)
router.route('/:id')
  .get(Portfolio.showPortfolio)
  .post(Portfolio.updatePortfolio)
  .delete(Portfolio.deletePortfolio)

module.exports = router
