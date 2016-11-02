var express = require('express');

var app = express();

var contacts = [{
		name:'Abhishek'
	}, {
		name:'Arvind'
	}];

app.get('/contacts', function(req, res){
	res.status(200).json(contacts);
});

app.listen(9001);

console.info('backend server started on port 9001');