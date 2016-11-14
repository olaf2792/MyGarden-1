var App = angular.module('app.controllers', ['chart.js']);

App.controller('homeCtrl', function ($scope, $http) {

var load_data = function () {
  $http.get("http://mygarden.zapto.org/connect.php").success(function(response) {
   $scope.data = response[0];
    console.log(response);

  });
}
  load_data();

  $scope.labels = ["Bodenfeuchtikeit", "abs. Luftfeuchtigkeit", "rel. Luftfeuchtigkeit"];

});



App.controller('statistikCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

App.controller('verlaufCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

App.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

App.controller('pflanzenSucheCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
