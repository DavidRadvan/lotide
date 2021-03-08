const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let output = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          output = false;
        }
      } else if ((typeof object1[key] === "object" && object1[key] !== null) && (typeof object2[key] === "object" && object2[key] !== null)) {
        if (!eqObjects(object1[key], object2[key])) {
          output = false;
        }
      } else if ((object1[key] !== object2[key])) {
        output = false;
      }
    }
  } else {
    output = false;
  }
  return output;
};

module.exports = eqObjects;
