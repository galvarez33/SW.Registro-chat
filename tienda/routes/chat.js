const express = require('express');
const router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Chat', user: req.session.user});
});



module.exports = router;
