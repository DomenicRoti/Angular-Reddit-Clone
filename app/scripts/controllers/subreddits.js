'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:SubredditsCtrl
 * @description
 * # SubredditsCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('SubredditsCtrl', function ($scope, $cookies, $http) {
    if($cookies.authorized){
      var authHeaderString = "bearer " + $cookies.accesstoken;
      var req = {
        method: 'GET',
        url: 'https://oauth.reddit.com/subreddits/mine/?limit=100',
        headers: {
         'Authorization': authHeaderString
        }
      }

      $http(req).success(function(data){
        parseSubreddits(data);
      }).error(function(){
      });
    } else {
      $http.get('http://www.reddit.com/reddits.json').
        success(function(data, status, headers, config) {
          parseSubreddits(data);
        });
    }

    var parseSubreddits = function(subredditData){
      $scope.subreddits = [];
      for (var i = 0; i < subredditData.data.children.length; i++) {
          $scope.subreddits.push(subredditData.data.children[i].data);
      }
    };
  });
