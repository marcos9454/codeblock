var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

router.get('/users',function(req, res){

	mongodb.connect(url, function(err, conn){
		if(err)
			res.send(err);
		var dbs = conn.db('cron');
		var n = dbs.collection('user').find({}).toArray();
		res.send(n);
	});
});


module.exports = router;