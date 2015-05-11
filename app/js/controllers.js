var brewngControllers = angular.module('brewngControllers', []);

brewngControllers.controller('AbvController', ['$scope', function ($scope) {
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  }
  $scope.toFixed = function(value, precision) {
    return value.toFixed(precision);
  }
  $scope.og = "1.065";
  $scope.fg = "1.017";
}]);

