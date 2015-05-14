var myNameSpace = angular.module('myApp', []);
myNameSpace.controller('MyController', 
	['$scope', function ($scope, $http) {
		$http.get(js/data.json).success(function(data){
			$scope.artist = data;			
		});
}]);
