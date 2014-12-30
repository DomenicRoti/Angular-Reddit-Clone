'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope, Posts, $cookies, $http) {

    Posts.getPosts(function(results){
      console.log(results.children);
      $scope.posts = results.children;
    });

    $scope.getPostLink = function(postData){
      if(postData.domain.substring(0,4) == "self"){
        return "#/post/" + postData.id;
      } else {
        return postData.url;
      }
    };

    //
    // var authHeaderString = "bearer " + $cookies.accesstoken;
    //   var req = {
    //     method: 'GET',
    //     url: 'https://oauth.reddit.com/api/multi/mine',
    //     headers: {
    //      'Authorization': authHeaderString
    //     }
    //   }

    //   $http(req).success(function(data){
    //     console.log(data);
    //   }).error(function(){
    //   });

  });
