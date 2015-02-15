'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.subreddit
 * @description
 * # subreddit
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .service('subredditService', function ($rootScope, $cookies, $http) {
      var subreddit = {};

      var setCurrentSubreddit = function(currentSubreddit){
        var postHeader, postUrl;
        if($cookies.authorized){
          postUrl = 'https://oauth.reddit.com/r/' + currentSubreddit;
          postHeader = {
            'Authorization': 'bearer ' + $cookies.accesstoken,
            'Content-Type': 'application/x-www-form-urlencoded',
          };
        } else {
          postUrl = 'http://www.reddit.com/r/' + currentSubreddit;
        }

        var aboutUrl = postUrl + '/about.json';
        var aboutReq = {
          method: 'GET',
          url: aboutUrl,
          headers: postHeader
        };

        $http(aboutReq).success(function(response){
          console.log(response);
          subreddit = response.data;
          $rootScope.$broadcast('subredditChange', subreddit);
        });

      };

      var getCurrentSubredditInfo = function(){
        return subreddit;
      };

      return {
        setCurrentSubreddit: setCurrentSubreddit,
        getCurrentSubredditInfo: getCurrentSubredditInfo
      };
  });
