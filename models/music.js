var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean');


var musicSchema = new mongoose.Schema({
	name: { type: String, required: true},
	author: { type: String, required: true},
	year: { type: String}
});

var Musics = mongoose.model('music', musicSchema);


module.exports = Musics;