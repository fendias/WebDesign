var myNameSpace = angular.module('myApp', []);
myNameSpace.controller('MyController', 
	['$scope','$http', function ($scope, $http) {
		$http.get('js/data.json').success(function(data){
			$scope.artists = data;
			console.log(data);
		});
}]);
