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

    var reqBuilder = function(){
      var postUrl = 'http://www.reddit.com/';
      var postHeader;
      if($cookies.authorized){
        postUrl = 'https://oauth.reddit.com/';
        postHeader = {
          'Authorization': 'bearer ' + $cookies.accesstoken,
          'Content-Type': 'application/x-www-form-urlencoded',
        };
      }
      var req = {
        method: 'GET',
        url: postUrl,
        headers: postHeader
      };
      return req;
    };

    Posts.getPost = function(postID, subreddit, callback){
      var req = reqBuilder();
      req.url += 'r/' + subreddit + '/comments/' + postID + '.json';
      return $http(req).success(function(Post){
        var postData = Post[0].data.children[0];
        var comments = Post[1].data.children;
        callback(postData, comments);
      });
    };

    Posts.getPosts = function(after, before, subreddit, callback){
      var req = reqBuilder();
      var queryString = {};
      if(after !== ''){
        queryString.after = after;
      }

      if(subreddit !== null){
        req.url += '/r/' + subreddit;
      }
      req.url += '.json';
      if(Object.keys(queryString).length > 0){
        req.url += '?' + $filter('queryString')(queryString);
      }

      return $http(req).success(function(returnedPosts){
        callback(returnedPosts.data);
      });
    };
    return Posts;
});
