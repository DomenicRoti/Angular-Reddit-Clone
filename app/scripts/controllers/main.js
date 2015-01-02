'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, Posts, $cookies, $http, $routeParams) {
    var after = $routeParams.after;
    var before = $routeParams.before;
    $scope.before = after;

    Posts.getPosts(after, before, function(results){
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
    $scope.getColumnSize = function(postData){
      if(postData.thumbnail !== ''){
        return 'col-xs-9';
      } else {
        return 'col-xs-11';
      }
    };

    $scope.vote = function (e, direction, id){
      e.preventDefault();
      if($cookies.authorized){

      } else {
        alert("you must be logged in to vote");
      }
      console.log('vote!');
    };
  });
