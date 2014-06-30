//Especificación del modelo de datos en Angular --> angular.module([nombre del modelo],[datos]);
var testApp = angular.module('angularTest', [
  'ngRoute',
  'angularTestCtrl',
  'angularTestFilters'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'js/templates/main.html',
        controller: 'dataList'
   
      }).
      when('/index/page1', {
        templateUrl: 'js/templates/search.html',
        controller: 'dataList'
   
      }).
      when('/index/page2', {
        templateUrl: 'js/templates/search2.html',
        controller: 'dataList'
   
      }).
      when('/index/page3', {
        templateUrl: 'js/templates/search3.html',
        controller: 'dataList'
   
      }).
     /* when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).*/
      otherwise({
        redirectTo: 'index'
      });
  }]);