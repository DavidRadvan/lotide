const _ = require("../index");
const assert = require('chai').assert;

describe("#without", () => {
  it("correctly removes items in the array", () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });

  const words = ["hello", "world", "lighthouse"];

  it("correctly removes words in an array", () => {
    assert.deepEqual(_.without(words, ["lighthouse"]), ["hello", "world"]);
  });

});
