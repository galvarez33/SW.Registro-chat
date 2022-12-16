var express = require('express');
var router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('registro.ejs', { title: 'Armazón', user: req.session.user });
});

router.post("/", function (req, res, next) {

  console.log(req.session.user);
  const user = req.body.user;
  const pass = req.body.pass; //agarrar name de input
  const pass1 = req.body.pass1;
  
  if (!users[user]) {
    req.session.user = users[user];
    if (pass != pass1) {
      req.session.error = "Passwords don't match";
      res.redirect("/registro");
    } else if (pass.length < 8 && pass1.length < 8) {
      req.session.error = "Passwords need to be 8 characters long";
      res.redirect("/registro");
    } else if (pass === pass1) {
      users.register(user, pass, function () {
        console.log("Se ha registrado con exito");
        req.session.message = "You have just registered please enter new account to log in!";
        res.redirect("/login");
      });
    }
  } else {
    req.session.error = "User already exists";
    res.redirect("/registro");
  }

});

module.exports = router;