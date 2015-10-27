/***
 ***
 DATABASE_URL=$(heroku config:get DATABASE_URL -a student-meme-generator) node app.js
 ***
 ***/

var express = require('express');
var app     = express();
var http    = require('http');
var db = require('./models');
//var routes = require('./routes/index');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});

// define the home page route
// used the router just like any other middleware. passed / as the first argument to app.use() so that the route middleware is mapped to /
//app.use('/', routes);


// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});
