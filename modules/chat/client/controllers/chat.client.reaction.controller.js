'use strict';

angular.module('chat').controller('ReactionsCtrl', function($scope, $modalInstance, reactions){
  $scope.reactions = reactions;
  $scope.react = {
    value: '',
    reason: ''
  };

  $scope.ok = function () {
    $modalInstance.close($scope.react);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});