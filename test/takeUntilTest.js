const _ = require("../index");
const assert = require('chai').assert;

describe("#takeUntil", () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = _.takeUntil(data1, x => x < 0);

  it("outputs array until numerical boolean function is true", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = _.takeUntil(data2, x => x === ',');

  it("outputs array until string match is made", () => {
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});
