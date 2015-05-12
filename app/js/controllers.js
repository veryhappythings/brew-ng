var brewngControllers = angular.module('brewngControllers', []);

brewngControllers.controller('navigation', ['$scope', '$route', function($scope, $route) {
  $scope.tab = function(route) {
    return $route.current && route === $route.current.controller;
  };
}]);

brewngControllers.controller('AbvController', ['$scope', function ($scope) {
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.toFixed = function(value, precision) {
    return value.toFixed(precision);
  };
  $scope.og = "1.065";
  $scope.fg = "1.017";
}]);

brewngControllers.controller('PrimingController', ['$scope', function ($scope) {
  $scope.fahrenheit = function(value) {
    return parseFloat(value) * (9/5) + 32
  };

  $scope.currentVolume = function() {
    var temperature_f = $scope.fahrenheit($scope.temperature_c);
    return (3.0378 - (0.050062 * temperature_f) + (0.00026555 * Math.pow(temperature_f, 2))).toFixed(2);
  };

  $scope.pureGlucose = function () {
    // http://byo.com/issues/item/1271-priming-with-sugar
    // (X g glucose) = Y volumes of CO2 / (88 g CO2/180 g glucose) x (1 mole/44 g CO2) x (22.4 L/mole) x (1/18.9 L beer)
    return (($scope.co2 - $scope.currentVolume()) / ((88.0 / 180.0) * (1.0 / 44.0) * 22.4 * (1.0 / $scope.quantity))).toFixed(2);
  };

  $scope.quantity = "19";
  $scope.co2 = "2.0";
  $scope.temperature_c = "20";
}]);
