 angular.module('app.services', [])

.factory('sensor', function ($http) {
return{
  getAll: function(){
    return $http.get('http://192.168.178.37/connect.php');
    //return $http.get('http://mygarden.zapto.org/loadall.php');
    },
    getSensor: function(id){
      var url_detail = 'http://192.168.178.37/connect.php/?method=GET&id='+id;
      //var url_detail = 'http://mygarden.zapto.org/connect.php/?id='+id;
      return $http.get(url_detail);
    },
    setPlant: function(id,pfid){
      var url_detail = 'http://192.168.178.37/connect.php/?method=POST&id='+id+'&pfid='+pfid;
      //var url_detail = 'http://mygarden.zapto.org/connect.php/?id='+id;
      return $http.get(url_detail);
    },
    setName: function(name,id){
      var url_detail = 'http://192.168.178.37/connect.php/?method=POST&name='+name+'&id='+id;
      //var url_detail = 'http://mygarden.zapto.org/connect.php/?id='+id;
      return $http.get(url_detail);
    }
  }
})
.factory('plants', function ($http) {
    return{
      getAll: function(){
        return $http.get('http://192.168.178.37/pflanzen.php');
       //return $http.get('http://mygarden.zapto.org/pflanzen.php');
      },
      getPlant: function(id){
        //var url_detail = 'http://mygarden.zapto.org/pflanzen.php/?id='+id;
        var url_detail = 'http://192.168.178.37/pflanzen.php/?id='+id;
        return $http.get(url_detail);
      }
    }
})
.factory('history', function ($http) {
     return{
       getWeek: function(id,kw){
         return $http.get('http://192.168.178.37/history.php?id='+id+'&kw='+kw);
         //return $http.get('http://mygarden.zapto.org/pflanzen.php');
       }
     }
   })
.factory('verlauf', function ($http) {
     return{
       getYear: function(){
         return $http.get('http://192.168.178.37/verlauf.php');
         //return $http.get('http://mygarden.zapto.org/pflanzen.php');
       },
       getfdff: function(id,kw){
         return $http.get('http://192.168.178.37/history.php?id='+id+'&kw='+kw);
         //return $http.get('http://mygarden.zapto.org/pflanzen.php');
       }
     }
   })
.service('PushNotificationService', function($q, $ionicUser, $ionicPush) {
    var PushNotificationService = this;

    PushNotificationService.identifyUser  = function(){
      var user = $ionicUser.get();
      if(!user.user_id) {
        // Set your user_id here, or generate a random one.
        user.user_id = $ionicUser.generateGUID();
      };

      // Add some metadata to your user object.
      angular.extend(user, {
        name: 'Technews',
        bio: 'Hardcoded for now'
      });

      // Identify your user with the Ionic User Service
      $ionicUser.identify(user).then(function(){
        //alert('Identified user ' + user.name + '\n ID ' + user.user_id);
        PushNotificationService.pushRegister();
        return true;
      });
    },

      PushNotificationService.pushRegister = function(){
        // Register with the Ionic Push service.  All parameters are optional.
        $ionicPush.register({
          canShowAlert: true, //Can pushes show an alert on your screen?
          canSetBadge: true, //Can pushes update app icon badges?
          canPlaySound: true, //Can notifications play a sound?
          canRunActionsOnWake: true, //Can run actions outside the app,
          onNotification: function(notification) {
            // Handle new push notifications here
            // console.log(notification);
            alert(notification);
            return true;
          }
        });
      }
  })
.service('dataProviderService', function() {
    var store_id;
    var token;
    //return {
    var setStoreId = function(id){
      this.store_id = id;
      //alert("set"+this.store_id);
    }
    var getStoreId = function(){
      //alert("get"+this.store_id);
      return this.store_id;
    }
    var setToken = function(token){
      this.token = token;
      //alert("set"+this.store_id);
    }
    var getToken= function(){
      //alert("get"+this.store_id);
      return this.token;
    }
    return{
      setStoreId: setStoreId,
      getStoreId: getStoreId,

      setToken: setToken,
      getToken: getToken
    }
  })
.service('LoginService', function($q,$http,dataProviderService) {
    return {
      loginUser: function(name, pw) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var token ="";
        var email="name";
        var pass="pw";
        var url_login='http://192.168.178.37/userload.php';

        $http.post(url_login, {"name" : name, "pw" : pw})
          .success(function(data, status, headers,config){
            console.log(data);
            console.log(status);
            if (status == 200 && data.message == 'Auth success.') {
             // token = data.token;
              alert("loginservice erfolgreich" );
             // dataProviderService.setToken(token);

              deferred.resolve('Willkommen ' + name + '!');
            } else {
              alert("loginservice fehler" );
              deferred.reject('Interner Server Fehler');
            }

          })
          .error(function(data, status, headers,config){
            console.log('data error');
            deferred.reject('Falsche eingabe');
          });

        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  });



