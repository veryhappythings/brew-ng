var brewngControllers = angular.module('brewngControllers', []);

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

  $scope.quantity = "20";
  $scope.co2 = "2.0";
  $scope.temperature_c = "20";
}]);
