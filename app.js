/***
 ***
 DATABASE_URL='YOUR_HEROKU_POSTGRES_URL?ssl=TURE' node app.js
 ***
 ***/

var express = require('express');
var app     = express();
var db = require("./db.js");
//var routes = require('./routes/index');

//create TABLE meme
app.get('/db/createtable', function(req,res){
    db.createTable(req,res);
});

// get all records from TABLE meme
app.get('/db/records', function(req,res){
    db.getRecords(req,res);
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});

// define the home page route
// used the router just like any other middleware. passed / as the first argument to app.use() so that the route middleware is mapped to /
//app.use('/', routes);



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
