var Music = require('../models/music.js');

exports.index = function(req, res) {
	res.render('index');
}


exports.lista = function(req, res) {
	
	Music.find({}, function(error, musics){
		res.json({ musics: musics });	
	});
	
}

exports.gravar = function(req, res) {
	var music_post = req.body;
	var music = new Music({
		name:  music_post.name,
		author: music_post.author,
		year: music_post.year
	});

	music.save(function(error, music){
		if (error) {
			console.log("Error: "+ error);
		}
		res.send(music);
	});
}


exports.deleta = function(req, res) {
	var id = req.params.id;

	Music.findByIdAndRemove(id, function(error, music){
		var response = true;

		if (error) {
			response = false;
		}

		res.json({status: response});

	});	
}