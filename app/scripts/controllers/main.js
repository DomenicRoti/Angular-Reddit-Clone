'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, Posts, $cookies) {

    Posts.getPosts(function(results){
      console.log(results.children);
      $scope.posts = results.children;
    });

  });
