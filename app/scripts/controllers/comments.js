'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('CommentsCtrl', function ($scope, $routeParams, Posts, subredditService) {
    var subreddit = $routeParams.subreddit;
    var postID = $routeParams.postID;
    subredditService.setCurrentSubreddit(subreddit);
    Posts.getPost(postID, subreddit,function(postData, comments){
      // $scope.post = results.children;
      // $scope.after = results.after;
      $scope.post = postData;

      $scope.comments = comments;
    });
  });
