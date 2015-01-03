'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('UserCtrl', function ($scope, $http, $window, $filter, $cookies, user) {
    $scope.authorized = $cookies.authorized;

    if($scope.authorized){
      var authHeaderString = 'bearer ' + $cookies.accesstoken;
      var req = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
         'Authorization': authHeaderString
        }
      };

      $http(req).success(function(data){
        $scope.username = data.name;
        $scope.linkKarma = data.link_karma;
        $scope.commentKarma = data.comment_karma;
        $scope.userCreatedDate = new Date(1285345011 * 1000);
      });
    }

    $scope.requestAuth = function(){
      user.login();
    };

  });
