angular.module('app.services', [])

  .factory('sensor', function ($http) {
return{
  getAll: function(){
    return $http.get('http://mygarden.zapto.org/loadall.php');
    },
    getSensor: function(id){
      var url_detail = 'http://mygarden.zapto.org/connect.php/?id='+id;
      return $http.get(url_detail);
    }
  }

  })

  .factory('plants', function ($http) {
    return{
      getAll: function(){
        return $http.get('http://mygarden.zapto.org/pflanzen.php');
      },
      getPlant: function(id){
        var url_detail = 'http://mygarden.zapto.org/pflanzen.php/?id='+id;
        return $http.get(url_detail);
      }
    }

  })


  .service('BlankService', [function(){

  }]);
