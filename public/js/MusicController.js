
function MusicController($http, $scope) {
	// $http.get('/lista').success(function(data){
	// 	$scope.musics = data;
	// });

	$http({
		method: 'GET', 
		url: '/lista'
	}).success(function(data){
		$scope.musics = data;
	});

}