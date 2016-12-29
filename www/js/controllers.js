angular.module('app.controllers', ['nvd3'])


.controller('MyCtrl',function($scope, $ionicHistory) {

})

.controller('statistikCtrl', function ($scope, $stateParams) {

})

  .controller('menuCtrl', function ($scope) {


  })
.controller('verlaufCtrl',function ($scope,$rootScope, history, verlauf) {
  $scope.sensor_id = '';
  $scope.jahr = '';
  $scope.kalenderwoche = '';

   verlauf.getYear()
    .success(function(response){
      $scope.jahreszahl = response;

  })
    $scope.range = function(n) {
      return new Array(n);
    };

    $scope.change_id = function () {
      $scope.sensor_id;
      $scope.load_stats();
    }

    $scope.load_jahr = function () {
      $scope.jahr;
      $scope.load_stats();
    }

  $scope.load_stats = function () {
    if ($scope.sensor_id == '' || $scope.jahr == '' || $scope.kalenderwoche == '')
        return 0;


    history.getWeek($scope.sensor_id, $scope.kalenderwoche)
      .success(function (response) {
        if (response == null) {
        alert("Keine aufzeichnungen!");
          return -1;
        }
        $scope.data = response;
        var min = new Array(0,0,0,0,0,0,0);
        var max = new Array(0,0,0,0,0,0,0);
        for (var i = 0; i <  $scope.data.length; i++) {
           min[i] = $scope.data[i].min_boden;
           max[i] = $scope.data[i].max_boden;

        }
        var data = {
          labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
          series: [min, max ]
        };

        var options = {
          seriesBarDistance: 50,
          height: '500px'
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 10,
            height: '500px',
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
      })

  };
 /* $scope.options = {
    chart: {
      type: 'cumulativeLineChart',
      height: 600,

      padding:{
        top: 300
      },
      margin : {
        top: 50,
        right: 20,
        bottom: 60,
        left: 65
      },
      x: function(d){ return d[0]; },
      y: function(d){ return d[1]/100; },
      average: function(d) { return d.mean/100; },

      color: d3.scale.category10().range(),
      duration: 800,
      useInteractiveGuideline: true,
      clipVoronoi: false,

      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d) {
          return d3.time.format('%m/%d/%y')(new Date(d))
        },
        showMaxMin: false,
        staggerLabels: false
      },

      yAxis: {
        axisLabel: 'Y Axis',
          tickFormat: function(d){
          return d3.format(',.1%')(d);
        },


      showControls: false
      }
    }
  };

  $scope.data = [
    {
      key: "Bodenfeuchtigkeit",
      values: [ [ 1083297600000 , 2.974623048543] , [ 1085976000000 , 1.7740300785979] , [ 1088568000000 , 4.4681318138177] , [ 1091246400000 , 7.0242541001353] , [ 1093924800000 , 7.5709603667586] , [ 1096516800000 , 20.612245065736] , [ 1099195200000 , 21.698065237316] , [ 1101790800000 , 40.501189458018] , [ 1104469200000 , 50.464679413194] , [ 1107147600000 , 48.917421973355] , [ 1109566800000 , 63.750936549160] , [ 1112245200000 , 59.072499126460] , [ 1351656000000 , 99.27872156161] , [ 1354251600000 , 100.45128876100]]
      ,
      mean: 250
    },
    {
      key: "Luftfeuchtigkeit",
      values: [ [ 1083297600000 , 0.77078283705125] , [ 1085976000000 , 1.8356366650335] , [ 1088568000000 , 5.3121322073127] , [ 1091246400000 , 4.9320975829662] , [ 1093924800000 , 3.9835408823225] , [ 1096516800000 , 6.8694685316805] , [ 1099195200000 , 8.4854877428545] , [ 1101790800000 , 15.933627197384] , [ 1104469200000 , 15.920980069544] , [ 1107147600000 , 12.478685045651] , [ 1109566800000 , 17.297761889305] , [ 1112245200000 , 15.247129891020] , [ 1114833600000 , 11.336459046839] , [ 1117512000000 , 13.298990907415] , [ 1120104000000 , 16.360027000056] , [ 1122782400000 , 18.527929522030] , [ 1125460800000 , 22.176516738685] , [ 1128052800000 , 23.309665368330] , [ 1130734800000 , 21.629973409748] , [ 1133326800000 , 24.186429093486] , [ 1136005200000 , 29.116707312531] , [ 1138683600000 , 37.188037874864] , [ 1141102800000 , 34.689264821198] , [ 1143781200000 , 39.505932105359] , [ 1146369600000 , 45.339572492759] , [ 1149048000000 , 43.849353192764] , [ 1151640000000 , 45.418353922571] , [ 1154318400000 , 44.579281059919] , [ 1156996800000 , 44.027098363370] , [ 1159588800000 , 41.261306759439] , [ 1162270800000 , 47.446018534027] , [ 1164862800000 , 53.413782948909] , [ 1167541200000 , 50.700723647419] , [ 1170219600000 , 56.374090913296] , [ 1172638800000 , 61.754245220322] , [ 1175313600000 , 66.246241587629] , [ 1177905600000 , 75.351650899999] , [ 1180584000000 , 81.699058262032] , [ 1183176000000 , 82.487023368081] , [ 1185854400000 , 86.230055113277] , [ 1188532800000 , 84.746914818507] , [ 1191124800000 , 100.77134971977] , [ 1193803200000 , 109.95435565947] , [ 1196398800000 , 99.605672965057] , [ 1199077200000 , 99.607249394382] , [ 1201755600000 , 94.874614950188] , [ 1204261200000 , 105.35899063105] , [ 1206936000000 , 106.01931193802] , [ 1209528000000 , 110.28883571771] , [ 1212206400000 , 119.60256203030] , [ 1214798400000 , 115.62201315802] , [ 1217476800000 , 106.63824185202] , [ 1220155200000 , 99.848746318951] , [ 1222747200000 , 85.631219602987] , [ 1225425600000 , 63.547909262067] , [ 1228021200000 , 59.753275364457] , [ 1230699600000 , 63.874977883542] , [ 1233378000000 , 56.865697387488] , [ 1235797200000 , 54.285579501988] , [ 1238472000000 , 56.474659581885] , [ 1241064000000 , 63.847137745644] , [ 1243742400000 , 68.754247867325] , [ 1246334400000 , 69.474257009155] , [ 1249012800000 , 75.084828197067] , [ 1251691200000 , 77.101028237237] , [ 1254283200000 , 80.454866854387] , [ 1256961600000 , 78.984349952220] , [ 1259557200000 , 83.041230807854] , [ 1262235600000 , 84.529748348935] , [ 1264914000000 , 83.837470195508] , [ 1267333200000 , 87.174487671969] , [ 1270008000000 , 90.342293007487] , [ 1272600000000 , 93.550928464991] , [ 1275278400000 , 85.833102140765] , [ 1277870400000 , 79.326501831592] , [ 1280548800000 , 87.986196903537] , [ 1283227200000 , 85.397862121771] , [ 1285819200000 , 94.738167050020] , [ 1288497600000 , 98.661952897151] , [ 1291093200000 , 99.609665952708] , [ 1293771600000 , 103.57099836183] , [ 1296450000000 , 104.04353411322] , [ 1298869200000 , 108.21382792587] , [ 1301544000000 , 108.74006900920] , [ 1304136000000 , 112.07766650960] , [ 1306814400000 , 109.63328199118] , [ 1309406400000 , 106.53578966772] , [ 1312084800000 , 103.16480871469] , [ 1314763200000 , 95.945078001828] , [ 1317355200000 , 81.226687340874] , [ 1320033600000 , 90.782206596168] , [ 1322629200000 , 89.484445370113] , [ 1325307600000 , 88.514723135326] , [ 1327986000000 , 93.381292724320] , [ 1330491600000 , 97.529705609172] , [ 1333166400000 , 99.520481439189] , [ 1335758400000 , 99.430184898669] , [ 1338436800000 , 93.349934521973] , [ 1341028800000 , 95.858475286491] , [ 1343707200000 , 95.522755836605] , [ 1346385600000 , 98.503848862036] , [ 1348977600000 , 101.49415251896] , [ 1351656000000 , 101.50099325672] , [ 1354251600000 , 99.487094927489]]
      ,
      mean: 60
    },
    {
      key: "Temperatur",
      mean: 125,
      values: [ [ 1083297600000 , 3.7454058855943] , [ 1085976000000 , 3.6096667436314] , [ 1088568000000 , 0.8440003934950] , [ 1091246400000 , 2.0921565171691] , [ 1093924800000 , 3.5874194844361] , [ 1096516800000 , 13.742776534056] , [ 1099195200000 , 13.212577494462] , [ 1101790800000 , 24.567562260634] , [ 1104469200000 , 34.543699343650] , [ 1107147600000 , 36.438736927704] , [ 1109566800000 , 46.453174659855] , [ 1112245200000 , 43.825369235440] , [ 1114833600000 , 32.036699833653] , [ 1117512000000 , 41.191928040141] , [ 1120104000000 , 40.301151852023] , [ 1122782400000 , 54.922174023466] , [ 1125460800000 , 49.538009616222] , [ 1128052800000 , 61.911998981277] , [ 1130734800000 , 56.139287982733] , [ 1133326800000 , 71.780099623014] , [ 1136005200000 , 78.474613851439] , [ 1138683600000 , 90.069363092366] ]
    }
  ];*/


})

.controller('loginCtrl', function($scope,LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('menu.home');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Anmeldung fehlgeschlagen!',
          template: 'Überprüfen Sie die Eingaben!'
        });
      });
    }
  })

.controller('sensorCtrl', function ($scope, $filter, $stateParams, $http, $ionicHistory,sensor,plants) {

   $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

  var load_data = function () {
      var id = $stateParams.id;
      pflanzen_id = '';

      sensor.getSensor(id).success(function(response) {
            $scope.data = response[0];
            $scope.user = {
            name:''+$scope.data.name+''
          };

      pflanzen_id = $scope.data.pfeinstell_id;

      plants.getPlant(pflanzen_id)
          .success(function(data){
            $scope.pflanze = data[0];
        });

        $scope.$watch('user.name', function(newVal, oldVal) {
          if (newVal !== oldVal) {

            sensor.setName(newVal, id)
              .success(function(){
                alert("Name erfolgreich geändert!");
              });



              }
        });
    })
  }
  load_data();




})

.controller('homeCtrl', function ($scope, sensor) {
  $scope.images = [];
  $scope.onHold = function (){
    var id = '#'+this.image.id;
    $(id).addClass('marked');



}
  sensor.getAll()
    .success(function(data){
    $scope.sensoren = data;
    for(var i = 0; i < $scope.sensoren.length; i++) {

      $scope.images.push({id: $scope.sensoren[i].sensor_id, name: $scope.sensoren[i].name, src: "http://192.168.178.37/humi.png"});
    }
  });


})

.controller('pflanzenSucheCtrl', function ($scope, plants) {
  $scope.query = {name: ""};
  $scope.sort = {predicate: "name", reverse: false};



  plants.getAll()
    .success(function(data){
      $scope.pflanzen = data;
    });

})

.controller('pflanzenCtrl', function ($scope, $stateParams, $ionicHistory, plants,  $ionicPopup,sensor) {
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


  $scope.select_plant = function (){
    $scope.sensoren = {};
   pfid = $stateParams.id;
    sensor.getAll()
      .success(function(data){
        $scope.sensoren = data

          $scope.data = {}
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({

      templateUrl: 'templates/auswahl_sensor.html',
      title: 'Wähle dein Sensor aus',
      subTitle: '',
      scope: $scope,

      buttons: [
        { text: 'Abbrechen',
          type: 'button-assertive'},
        {
          text: 'Übernehmen',
          type: 'button-balanced',
          onTap: function(e) {
            if (!$scope.sensoren) {
              //don't allow the user to close unless he enters wifi password

              e.preventDefault();
            } else {
              //alert($scope.data.sensorid);
              var id = $scope.data.sensorid;
              console.log(id);
              console.log(pfid);
              sensor.setPlant(id,pfid);

                }
            }//on Top
          }
      ],//buttons

    });//mypopup
      })
  }


});
