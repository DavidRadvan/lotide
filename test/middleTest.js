const middle = require("../middle");
const assert = require('chai').assert;

describe("#head", () => {
  it("odd numbered array lengths should return middle elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("even numbered array lengths should return two middle elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("odd numbered array lengths should return middle elements: test 2", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
  });

  it("even numbered array lengths should return two middle elements: test 2", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);
  });
});
