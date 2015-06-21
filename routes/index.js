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