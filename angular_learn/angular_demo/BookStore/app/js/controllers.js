var bookStoreCtrls = angular.module('bookStoreCtrls', [])

bookStoreCtrls.controller('HelloCtrl', ['$scope', function ($scope) {
	$scope.greeting = {
		text: "Hello"
	};
}]);

bookStoreCtrls.controller('BookListCtrl', ['$scope', function ($scope) {
	$scope.books = [{
		title: "Java Web",
		author: "liulx"
	},
	{
		title: "Django",
		author: "liulx"
	},
	{
		title: "DotNet",
		author: "liulx"
	}]
}]);