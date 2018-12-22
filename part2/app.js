(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  // $scope.stateOfBeing = "fed";
  $scope.sayMessage = function() {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function functionName() {
    $scope.stateOfBeing = "fed";
  };


}

})();
