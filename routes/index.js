var Music = require('../models/music.js');

exports.index = function(req, res) {
	res.render('index');
}


exports.lista = function(req, res) {
	
	Music.find({}, function(erro, musics){
		res.json({ musics: musics });	
	});
	
}

exports.gravar = function(req, res) {
	var music_post = req.body;
	console.log(music);

	var music = new Music({
		name:  music_post.name,
		author: music_post.author,
		year: music_post.year
	});

	music.save(function(erro, music){
		if (erro) {
			console.log(error);
		}
		res.send('Music ' + music.name + ' recebido no servidor');
	});
}