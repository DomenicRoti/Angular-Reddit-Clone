'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, $modal, Posts, $cookies, $http, $routeParams, user) {
    var after = $routeParams.after;
    var before = $routeParams.before;
    var subreddit = (typeof $routeParams.subreddit === 'undefined') ? null : $routeParams.subreddit;
    $scope.subreddit = subreddit;
    $scope.before = after;
    $scope.alerts = [];

    Posts.getPosts(after, before, subreddit, function(results){
      $scope.posts = results.children;
      $scope.after = results.after;
    });

    $scope.getPostLink = function(postData){
      if(postData.domain.substring(0,4) === 'self'){
        return '#/post/' + postData.id;
      } else {
        return postData.url;
      }
    };

    $scope.getThumbnail = function(thumbnail){
      if(thumbnail==='self'){
        thumbnail = 'images/self.png';
      }
      return thumbnail;
    };

    $scope.getColumnSize = function(postData){
      if(postData.thumbnail !== ''){
        return 'col-xs-8';
      } else {
        return 'col-xs-11';
      }
    };

    $scope.getPreviousLink = function(before){
      var returnLink = '#/';
      if($scope.subreddit !== null){
        returnLink += 'r/' + $scope.subreddit;
      }
      return returnLink + '/before/' + before;
    };

    $scope.getNextLink = function(after){
      var returnLink = '#/';
      if($scope.subreddit !== null){
        returnLink += 'r/' + $scope.subreddit;
      }
      return returnLink + '/after/' + after;
    };

    $scope.vote = function (e, direction, id){
      e.preventDefault();
      if($cookies.authorized){
        user.vote(direction, id, function(data){
          console.log(data);
        });
      } else {
        $modal.open({
          templateUrl: 'views/loginModal.html',
          controller: 'LoginModalCtrl',
          size: '',
        });
      }
    };

  });
