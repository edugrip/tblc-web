var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('site/index');
});
router.get('/contact', function(req, res, next) {
  res.render('site/contact');
});
router.get('/about', function(req, res, next) {
  res.render('site/about');
});
router.get('/features', function(req, res, next) {
  res.render('site/features');
});
router.get('/', function(req, res, next) {
  res.render('site/index');
});
<<<<<<< HEAD
router.get('/test', function(req, res, next) {
  res.render('site/soon');
});
=======
router.get('/TBLC.pdf', function(req, res, next) {
  res.render('site/TBLC.pdf');
});
router.get('/login', function(req, res, next) {
  res.render('site/login');
});
router.get('/test', function(req, res, next) {
  res.render('site/soon');
});

>>>>>>> deccafe (design)
module.exports = router;
