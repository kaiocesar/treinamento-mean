var Music = require('../models/music.js');


Music.find({id: '5586dbfee56504e61ed7a5b1'}, function(error, music){
	if(! error) {
		console.log(music);
	} else {
		console.log(error);
	}
});



// var music = new Music({
// 	name: "Jesus Chorou",
// 	author: "Racionais MC",
// 	year: '2008'
// });

// music.save(function(erro, music){
// 	if (erro){
// 		console.log(erro);
// 	}

// 	console.log('Successsfully...' + music.name);

// });