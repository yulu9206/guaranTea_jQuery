var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.sendFile( __dirname + "/" + "layout.html" );
});
// router.get('/tea1', function(req, res){
// 	res.sendFile( __dirname + "/" + "tea1.html" );
// });
// router.get('/tea2', function(req, res){
// 	res.sendFile( __dirname + "/" + "tea2.html" );
// });
// router.get('/tea3', function(req, res){
// 	res.sendFile( __dirname + "/" + "tea3.html" );
// });
// router.get('/tea4', function(req, res){
// 	res.sendFile( __dirname + "/" + "tea4.html" );
// });

// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 	}
// }

module.exports = router;