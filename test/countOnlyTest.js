const _ = require("../index");
const assert = require('chai').assert;

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = _.countOnly(firstNames, {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  });


  it("returns count of search test 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined if told not to count", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns count of search test 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined if told not to count test 2", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});
