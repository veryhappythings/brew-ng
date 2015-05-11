var brewngApp = angular.module('brewngApp', ['ngRoute', 'brewngControllers']);

brewngApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/abv', {
        templateUrl: 'partials/abv.html',
        controller: 'AbvController'
      }).
      otherwise({
        redirectTo: '/abv'
      });
}]);
