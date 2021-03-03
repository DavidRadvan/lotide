const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let eqOutput = true;
  if (arr1.length !== arr2.length) {
    eqOutput = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      eqOutput = false;
    }
  }
  return eqOutput;
};

const eqObjects = function(object1, object2) {
  let output = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          output = false;
        }
      } else if (object1[key] !== object2[key]) {
        output = false;
      }
    }
  } else {
    output = false;
  }
  return output;
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false);

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false
