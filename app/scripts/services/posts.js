'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.posts
 * @description
 * # posts
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .factory('Posts', function ($http, $cookies, $filter) {
    var Posts = {};

    Posts.getPosts = function(after, before, subreddit, callback){
      var postUrl = 'http://www.reddit.com/';
      var postHeader;
      var queryString = {};
      if(after !== ''){
        queryString.after = after;
      }
      if($cookies.authorized && localStorage.getItem('subreddits')){
        postUrl = 'https://oauth.reddit.com/';
        postHeader = {
          'Authorization': 'bearer ' + $cookies.accesstoken,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      }
      if(subreddit !== null){
        postUrl += '/r/' + subreddit;
      }
      postUrl += '.json';
      if(Object.keys(queryString).length > 0){
        postUrl += '?' + $filter('queryString')(queryString);
      }


      // console.log(postUrl);
      var req = {
        method: 'GET',
        url: postUrl,
        headers: postHeader
      };

      return $http(req).success(function(returnedPosts){
        callback(returnedPosts.data);
      });
    };
    return Posts;
});
