var App = angular.module('app.controllers', ['chart.js']);

App.controller('loaditemCtrl', function ($scope, $http) {

  var load_data = function (id) {
    sensor.one(id).success(function(response) {
      $scope.data = response;


    });
  }
  //load_data(id);

  $scope.labels = ["Bodenfeuchtikeit", "abs. Luftfeuchtigkeit", "rel. Luftfeuchtigkeit"];

});

App.controller('homeCtrl', function ($scope, $http) {



});
App.controller('GridCtrl', function ($scope, almostConstant) {
  $scope.images = [];
  almostConstant.success(function(data){
    $scope.almostConstant = data;
    for(var i = 0; i < $scope.almostConstant.length; i++) {
      $scope.images.push({id: i, src: "http://placehold.it/150x150"});
    }
  });


});

App.controller('statistikCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

App.controller('verlaufCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])

App.controller('menuCtrl', function ($scope) {


})

App.controller('pflanzenSucheCtrl', function ($scope, $http) {
  $scope.query = {name: ""};
  $scope.sort = {predicate: "name", reverse: false};


  $http.get('http://mygarden.zapto.org/pflanzen.php')
    .success(function(data){
      $scope.pflanzen = data;
    });

});
