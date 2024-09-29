var express = require('express'); 
var router = express.Router(); 
var ctrlLocations = require('../controllers/locations'); 
var ctrlOthers = require('../controllers/others'); 
var ctrlMain = require('../controllers/main'); 
 
router.get('/', ctrlLocations.homelist); 
router.get('/airlines', ctrlLocations.locationInfo); 
router.get('/airline1', ctrlLocations.locationInfo1); 
router.get('/airline2', ctrlLocations.locationInfo2); 
router.get('/review', ctrlLocations.addReview); 
 
router.get('/about', ctrlOthers.about); 
 
router.get('/signin', ctrlMain.signin); 
router.get('/review', ctrlMain.review); 
router.get('/register', function(req, res, next) { 
    res.render('register', { title: 'Register Airline' }); 
}); 
 
module.exports = router;
