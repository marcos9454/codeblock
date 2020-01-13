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
router.get('/tasks/one',function(req, res, next){
	mongojs.connect(url	,function(err,out){
		if(err)
			res.send(err);

		var dbs = out.db('cron');
		var out = dbs.collection("user").find({"_id":ObjectId("5e1b563d5bc40e21d8626820")});
		res.send(out);
	});
});

router.get('/tasks/insertOne',function(req, res, inp){
	mongojs.connect(url, function(err, conn){
		if(err)
			res.send(err);

		var dbs= conn.db('cron');
		dbs.collection('user').insertOne({"name":"Anjali"});
		res.send('inserted');
	})
});

router.get('/tasks/updateOne', function(req, res, inp){
	mongojs.connect(url, function(err, conn){
		if(err)
			res.send(err);
		var dbs = conn.db('cron');
		dbs.collection('user').updateOne({'name':'Anjali'},{$set:{'name':'Anjani'}});
		res.send('updated');
	});
});

router.get('/tasks/deleteOne', function(req, res, inp){
	mongojs.connect(url, function(err, conn){
		if(err)
			res,send(err);
		var dbs = conn.db('cron');

		dbs.collection('user'). deleteOne({'name':'Anjani'});
		res.send('deleted');
	});
});

module.exports = router;