const _ = require("../index");
const assert = require('chai').assert;

describe("#flatten", () => {
  it("Correctly flattens array", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});
