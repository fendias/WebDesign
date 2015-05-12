angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('EventsCtrl', function ($scope, $http) {
        $scope.events = [];
        $http.get("http://meetup.superfriends.co/api/meetup/events/", {cache:true})
            .then(function(response){
                $scope.events = response.data.results;
                //console.log(response);
            });
    })

.controller('EventCtrl', function($scope, $http, $stateParams) {
        $scope.event = {};
        $http.get("http://meetup.superfriends.co/api/meetup/events/"+$stateParams.eventId, {cache:true})
            .then(function(response){
                $scope.event = response.data;
                //console.log(response);
            });
});
