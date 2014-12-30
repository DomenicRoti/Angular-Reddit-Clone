'use strict';

/**
 * @ngdoc filter
 * @name redditCloneApp.filter:random
 * @function
 * @description
 * # random
 * Filter in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .filter('random', function () {
    return function (x) {
      var s = '';
      while(s.length<x&&x>0){
          var r = Math.random();
          s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
      }
      return s;
    };
  });
