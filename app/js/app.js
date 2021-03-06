var brewngApp = angular.module('brewngApp', ['ngRoute', 'brewngControllers']);

brewngApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/abv', {
        templateUrl: 'partials/abv.html',
        controller: 'AbvController'
      }).
      when('/priming', {
        templateUrl: 'partials/priming.html',
        controller: 'PrimingController'
      }).
      otherwise({
        redirectTo: '/abv'
      });
}]);

brewngApp.factory('displayValue', function() {
  return function(value, precision) {
    return value.toFixed(precision);
  };
});
