const _ = require("../index");
const assert = require('chai').assert;

describe("#eqObjects", () => {

  const ab = {
    a: "1",
    b: "2"
  };
  const ba = {
    b: "2",
    a: "1"
  };

  const abc = {
    a: "1",
    b: "2",
    c: "3"
  };

  const cd = {
    c: "1",
    d: ["2", 3]
  };
  const dc = {
    d: ["2", 3],
    c: "1"
  };

  const cd2 = {
    c: "1",
    d: ["2", 3, 4]
  };

  it("returns true even if keys are not in order", () => {
    assert.strictEqual(_.eqObjects(ab, ba), true);
  });

  it("returns false if keys do not match", () => {
    assert.strictEqual(_.eqObjects(ab, abc), false);
  });

  it("returns true if arrays are equal", () => {
    assert.strictEqual(_.eqObjects(cd, dc), true);
  });

  it("returns undefined if told not to count test 2", () => {
    assert.strictEqual(_.eqObjects(cd, cd2), false);
  });

  it("returns true for objects within objects that match", () => {
    assert.strictEqual(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for objects within objects that not not match", () => {
    assert.strictEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

});
