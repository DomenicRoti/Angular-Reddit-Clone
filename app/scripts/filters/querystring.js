'use strict';

/**
 * @ngdoc filter
 * @name redditCloneApp.filter:queryString
 * @function
 * @description
 * # queryString
 * Filter in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .filter('queryString', function () {
    return function (data) {
      var result = '';
      for(var key in data) {
          result += key + '=' + data[key] + '&';
      }
      result = result.slice(0, result.length - 1);
      return result;
    };
  });
