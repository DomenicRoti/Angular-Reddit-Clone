'use strict';

describe('Service: Subreddits', function () {

  // load the service's module
  beforeEach(module('redditCloneApp'));

  // instantiate service
  var Subreddits;
  beforeEach(inject(function (_Subreddits_) {
    Subreddits = _Subreddits_;
  }));

  it('should do something', function () {
    expect(!!Subreddits).toBe(true);
  });

});
