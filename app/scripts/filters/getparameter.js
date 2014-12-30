'use strict';

/**
 * @ngdoc filter
 * @name redditCloneApp.filter:getParameter
 * @function
 * @description
 * # getParameter
 * Filter in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .filter('getParameter', function () {
    return function (name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
          results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
  });
