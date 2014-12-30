'use strict';

describe('Filter: random', function () {

  // load the filter's module
  beforeEach(module('redditCloneApp'));

  // initialize a new instance of the filter before each test
  var random;
  beforeEach(inject(function ($filter) {
    random = $filter('random');
  }));

  it('should return the input prefixed with "random filter:"', function () {
    var text = 'angularjs';
    expect(random(text)).toBe('random filter: ' + text);
  });

});
