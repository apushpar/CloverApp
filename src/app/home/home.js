/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
  //alert("Aksh");
  $scope.orders = [];
  $scope.pay_total = 0;
  $scope.pay_info = "Pay $0";
  $scope.add = function(name, value){
    $scope.orders.push({name:name, cost:value});
    $scope.pay_total += value;
    $scope.pay_info = "Pay $"+$scope.pay_total;
  };

  $scope.clickOnPay = function (){
      var data = $scope.pay_total;
      Android.sendCloverData(JSON.stringify(data));
  };

    /*$scope.redirectToSomePage = function (someMoreData){
      var processedData = processData(JSON.parse(someMoreData));
      var url = "sample.html";
      window.open(url + "?" + processedData);
    };

    $scope.processData = function(data){
      var paramArray = [];
      for (var key in data) {
        if (p.hasOwnProperty(key)) {
          paramArray.push(key + "=" + data.key);
        }
      }
      return paramArray.join("&");
    };*/
  
})

;

