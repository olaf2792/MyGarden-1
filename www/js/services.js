angular.module('app.services', [])

  .factory('almostConstant', function ($http) {
    return $http.get('http://mygarden.zapto.org/loadall.php');
  })



  .service('BlankService', [function(){

  }]);
