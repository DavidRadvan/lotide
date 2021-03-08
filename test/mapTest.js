const _ = require("../index");
const assert = require('chai').assert;

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("adds string as a function to each element", () => {
    assert.deepEqual(_.map(words, word => (word + "Test")), ["groundTest", "controlTest", "toTest", "majorTest", "tomTest"]);
  });

  it("manipulates numbers if given a numerical function", () => {
    assert.deepEqual(_.map(numbers, function(number) {
      if (number % 2 === 0) {
        return number * 2;
      } else {
        return number;
      }
    }), [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]);
  });
});
