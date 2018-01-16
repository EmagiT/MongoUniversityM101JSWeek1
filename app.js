var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');



MongoClient.connect('mongodb://localhost:27017/video', function (err, db) {


    //route handler for route
    app.get('/', function (req, res) {
        res.render('Hello', { 'name': 'Templates' });
    })


    //404 response default
    app.use(function (req, res) {
        res.sendStatus(404);
    })


})
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Express Server Listening on port %s', port);
})