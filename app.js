var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', routes.index); 
app.get('/lista', routes.lista);
app.post('/gravar', routes.gravar);
app.delete('/music/:id', routes.deleta);
app.put('/music', routes.atualizar);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
	console.log('Server run on port: ' + app.get('port'));
});
