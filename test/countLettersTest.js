const _ = require("../index");
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns proper number of letters in a string", () => {
    assert.strictEqual(_.countLetters("lighthouse in the house")["h"], 4);
  });

});
