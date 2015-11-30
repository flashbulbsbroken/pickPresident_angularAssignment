var express= require('express');

var repubData = require('../models/republicanData');
var demData = require('../models/democraticData');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    console.log('Empty Route');
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getRepublicanData', function(request, response) {
    console.log('Republican Route');
    response.send(repubData);
});

app.get('/getDemocraticData', function(request, response) {
    console.log('Democratic Route');
    response.send(demData);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;