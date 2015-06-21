
function MusicController($http, $scope) {
	$http.get('/lista').success(function(data){
		$scope.musics = data.musics;
	});


	function Music(){
		this.name = undefined;
		this.author = undefined;
		this.year = undefined;
	}

	$scope.music = new Music();

	$scope.adicionarMusic = function() {
		$http.post('/gravar', $scope.music)
		.success(function(data){
			console.log(data);
		});	
	}

	
}
