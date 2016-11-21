angular.module('app.services', [])

  .factory('almostConstant', function ($http) {
return{
  getAll: function(){
    return $http.get('http://mygarden.zapto.org/loadall.php');
    },
    getSensor: function(id){
      var url_detail = 'http://mygarden.zapto.org/connect.php/?id='+id;
      return $http.get(url_detail);
    }
  }

   // var getSensor = function (id) {
      //var url_detail = 'http://mygarden.zapto.org/connect.php/id='+id;
     // return $http.get(url_detail);
    //}

  })



  .service('BlankService', [function(){

  }]);
