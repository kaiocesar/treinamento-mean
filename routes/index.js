exports.index = function(req, res) {
	res.render('index');
}


exports.lista = function(req, res) {
	res.json({
		name: "Gaster paradise",
		author: "Coolio",
		year: 1995 
	});
}

exports.gravar = function(req, res) {
	var music = req.body;
	console.log(music);
	res.send('Music ' + music.name + ' recebido no servidor');
}