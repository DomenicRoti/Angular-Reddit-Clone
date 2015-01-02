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
    var after = $routeParams["after"];
    var before = $routeParams["before"];
    $scope.before = after;

    Posts.getPosts(after, before, function(results){
      console.log(results);
      $scope.posts = results.children;
      $scope.after = results.after;
    });

    $scope.getPostLink = function(postData){
      if(postData.domain.substring(0,4) == "self"){
        return "#/post/" + postData.id;
      } else {
        return postData.url;
      }
    };
  });
