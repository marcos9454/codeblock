var express = require('express');

var router = express.Router();
var mongojs = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

router.get('/tasks',function(req, res, next){
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

module.exports = router;