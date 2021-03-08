const _ = require("../index");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("Correctly obtains letter positions", () => {
    assert.deepEqual(_.letterPositions("hello")["l"], [2,3]);
  });

  it("Correctly obtains multiple letter positions", () => {
    assert.deepEqual(_.letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
  });

});
