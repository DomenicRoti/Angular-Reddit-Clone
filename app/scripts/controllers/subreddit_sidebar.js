'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:SubredditSidebarCtrl
 * @description
 * # SubredditSidebarCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('SubredditSidebarCtrl', function ($scope, subredditService, $filter) {
    $scope.$on('subredditChange', function() {
      $scope.currentSubreddit = subredditService.getCurrentSubredditInfo();
      $scope.sidebar = $filter('decodeHTML')($scope.currentSubreddit.description_html);
    });
  });
