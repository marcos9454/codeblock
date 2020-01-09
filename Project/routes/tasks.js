var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
// var db = mongojs('localhost:27017');


router.get('/tasks',function(req, res, next){
	res.send('TASKS API');
});

module.exports = router;