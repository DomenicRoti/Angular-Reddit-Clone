'use strict';

describe('Service: posts', function () {

  // load the service's module
  beforeEach(module('redditCloneApp'));

  // instantiate service
  var posts;
  beforeEach(inject(function (_posts_) {
    posts = _posts_;
  }));

  it('should do something', function () {
    expect(!!posts).toBe(true);
  });

});
