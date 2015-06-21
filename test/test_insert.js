var Music = require('../models/music.js');

var music = new Music({
	name: "Jesus Chorou",
	author: "Racionais MC",
	year: '2008'
});

music.save(function(erro, music){
	if (erro){
		console.log(erro);
	}

	console.log('Successsfully...' + music.name);

});