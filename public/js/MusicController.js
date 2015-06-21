
function MusicController($http, $scope) {
	$http.get('/lista').success(function(data){
		$scope.musics = data;
	});

	$http.post('/gravar', {name:"Jesus chorou", author: "Racionais mcs", year: 2008}).success(function(data){
		console.log(data);
	});
}
