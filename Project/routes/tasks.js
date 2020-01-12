var express = require('express');
var router = express.Router();

var mongojs = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url="mongodb://localhost:27017";

// GET ALL
router.get('/tasks/all',function(req, res, next){
	mongojs.connect(url	,function(err,out){
		if(err)
			res.send(err);

		var dbs = out.db('cron');

		dbs.collection("user").find({}).toArray(function (err,result){
			if(err)
				res.send(err);
			res.send(result);
		});
	});
});

//GET ONE
router.get('/tasks/one/:id',function(req, res, next){
	mongojs.connect(url	,function(err,out){
		if(err)
			res.send(err);

		var dbs = out.db('cron');

		dbs.collection("user").find({_id:ObjectId('5d9a2a0687d4dd24781c3b91')}, function (err,result){
			if(err)
				res.send(err);
			res.send('nudes');
			res.send(result.name);
		});
	});
});

module.exports = router;