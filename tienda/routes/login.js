const express = require('express');
const router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', user: req.session.user});
});

router.post('/', function(req, res, next){
    let user = req.body.user;
    if(users[user]){
        users.comparePass(req.body.pass, users[user].hash, function(err, result){
            if(result){
                req.session.user = users[user];
                req.session.message = "Welcome!"
                res.redirect("/chat");
            } else {
                req.session.error = "Incorrect user or password1";
                res.redirect("/login");
            }
        });
    } else {
        req.session.error = "Incorrect user or password2";
        res.redirect("/registro");
    }
});

module.exports = router;
