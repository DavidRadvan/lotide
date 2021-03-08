const tail = require("../tail");
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("tail function should not alter original array", () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("First element of array should be removed", () => {
    assert.deepEqual(tail(words)[0], words[1]);
  });

  it("One element arrays should return empty arrays", () => {
    assert.deepEqual(tail(["oneWord"]), []);
  });

  it("Should return empty array for empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});






// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(assertEqual(tail(words)[0], words[1]));
// console.log(tail(["oneWord"]));
// console.log(tail([]));
