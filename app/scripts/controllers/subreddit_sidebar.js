'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:SubredditSidebarCtrl
 * @description
 * # SubredditSidebarCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('SubredditSidebarCtrl', function ($scope, subredditService) {
    $scope.$on('subredditChange', function() {
      $scope.currentSubreddit = subredditService.getCurrentSubreddit();
    });
  });
