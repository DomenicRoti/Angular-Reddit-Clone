'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:SubredditsCtrl
 * @description
 * # SubredditsCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('SubredditsCtrl', function ($scope, $cookies, $http, Subreddits) {
    if(localStorage.getItem('subreddits')){
      $scope.subreddits = JSON.parse(localStorage.getItem('subreddits'));
    } else {
      Subreddits.getSubreddits(function(subreddits){
        $scope.subreddits = subreddits;
      });
    }

  });
