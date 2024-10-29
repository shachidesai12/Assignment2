var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});




/* GET Project page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});



/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;

// www.ontariotech.ca - this is index
// www.ontariotech.ca/fbit - this is a route to the fbit page 
