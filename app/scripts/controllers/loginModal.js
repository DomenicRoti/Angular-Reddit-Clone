'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp').controller('LoginModalCtrl', function ($scope, $modalInstance, user) {
  $scope.ok = function () {
    user.login();
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});