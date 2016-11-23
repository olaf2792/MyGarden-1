var App = angular.module('app.controllers', ['chart.js']);
App.controller('MyCtrl',function($scope, $ionicHistory) {

})

App.controller('homeCtrl', function ($scope, $http) {



})

App.controller('statistikCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

App.controller('verlaufCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])

App.controller('menuCtrl', function ($scope) {


})

App.controller('sensorCtrl', function ($scope, $stateParams, $http, $ionicHistory,sensor) {
 $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  var load_data = function () {
    var id = $stateParams.id;
    sensor.getSensor(id).success(function(response) {
      $scope.data = response;

    });
  }
  load_data();

  $scope.labels = ["Bodenfeuchtikeit", "abs. Luftfeuchtigkeit", "rel. Luftfeuchtigkeit"];

})

App.controller('GridCtrl', function ($scope, sensor) {
  $scope.images = [];
  sensor.getAll()
    .success(function(data){
    $scope.sensoren = data;
    for(var i = 0; i < $scope.sensoren.length; i++) {



      $scope.images.push({id: $scope.sensoren[i].sensor_id, src: "http://placehold.it/150x150"});
    }
  });


})

App.controller('pflanzenSucheCtrl', function ($scope, plants) {
  $scope.query = {name: ""};
  $scope.sort = {predicate: "name", reverse: false};


  plants.getAll()
    .success(function(data){
      $scope.pflanzen = data;
    });

})


App.controller('pflanzenCtrl', function ($scope, $stateParams, $ionicHistory, plants) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.query = {name: ""};
  $scope.sort = {predicate: "name", reverse: false};
  var id = $stateParams.id;

  plants.getPlant(id)
    .success(function(data){
      $scope.pflanze = data[0];
    });

});
