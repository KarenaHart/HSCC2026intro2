var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register' });
});
router.post('/', function(req, res, next) {
 // res.send('Form submitted succesfully! Hello + req.body.username);');

console.log(req.body);
});


module.exports = router;
