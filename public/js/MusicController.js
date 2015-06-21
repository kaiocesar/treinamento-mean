
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
			$scope.musics.push(data);
			$scope.music = new Music();
		});	
	}


	$scope.deleteMusic = function(music){
		$http.delete('/music/' + music._id)
		.success(function(data){
			var index = $scope.musics.indexOf(music);
			$scope.musics.splice(index, 1);

			if (data.status == true) {
				alertify.notify('Delete succefully', 'success', 3, function() { console.log('dismissed'); });
			} else {
				alert("Error delete");
			}
		});
	}

	
}
