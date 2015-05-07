var brewcalcApp = angular.module('brewcalcApp', []);

brewcalcApp.controller('BrewcalcCtrl', function ($scope) {
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  }
  $scope.toFixed = function(value, precision) {
    return value.toFixed(precision);
  }
  $scope.og = "1.065";
  $scope.fg = "1.017";
});

