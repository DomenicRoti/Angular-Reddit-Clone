'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.Subreddits
 * @description
 * # Subreddits
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .service('Subreddits', function ($cookies, $http) {
    var Subreddits = {};

    Subreddits.getSubreddits = function(callback){

      var postHeader;
      var postUrl;
      if($cookies.authorized){
        postUrl = 'https://oauth.reddit.com/subreddits/mine/?limit=100';
        postHeader = {'Authorization': 'bearer ' + $cookies.accesstoken};
      } else {
        postUrl = 'http://www.reddit.com/reddits.json';
      }

      var req = {
        method: 'GET',
        url: postUrl,
        headers: postHeader
      };
      var subreddits = [];

      return $http(req).success(function(subredditData){
        for (var i = 0; i < subredditData.data.children.length; i++) {
            subreddits.push(subredditData.data.children[i].data);
        }
        localStorage.setItem('subreddits',JSON.stringify(subreddits));
        if(callback){
          callback(subreddits);
        }
      });
    };
    return Subreddits;
  });
