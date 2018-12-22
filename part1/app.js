(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Khode";

  $scope.sayMessage = function (){
    return "Khode likes to eat healthy snacks at night!";
  }
}

})();
