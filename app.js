var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', routes.index); 

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
	console.log('server run on port: ' + app.get('port'));
});
