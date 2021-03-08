const _ = require("../index");
const assert = require('chai').assert;

describe("#findKey", () => {

  const starFind = {
    "Blue Hill": {
      stars: 1
    },
    "Akaleri": {
      stars: 3
    },
    "noma": {
      stars: 2
    },
    "elBulli": {
      stars: 3
    },
    "Ora": {
      stars: 2
    },
    "Akelarre": {
      stars: 3
    }
  };

  const friends = {
    Tony: {
      city: "Vancouver",
      age: 26
    },
    Jack: {
      city: "Vancouver",
      age: 27
    },
    Maddy: {
      city: "Vancouver",
      age: 25
    },
    Ronnie: {
      city: "Victoria",
      age: 31
    },
    Daniel: {
      city: "Victoria",
      age: 30
    }
  };

  it("stops after finding first match", () => {
    assert.strictEqual(_.findKey(starFind, x => x.stars === 2), "noma");
  });

  it("stops after finding first match test 2", () => {
    assert.strictEqual(_.findKey(friends, friend => friend.city === "Victoria"), "Ronnie");
  });

  it("can search using booleans", () => {
    assert.strictEqual(_.findKey(friends, friend => friend.age >= 30), "Ronnie");
  });

  it("returns undefined if no matches", () => {
    assert.strictEqual(_.findKey(friends, friend => friend.age >= 50), undefined);
  });

});
