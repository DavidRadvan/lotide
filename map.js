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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => (word + "Test")), ["groundTest", "controlTest", "toTest", "majorTest", "tomTest"]);
assertArraysEqual(map(numbers, function(number) {
  if (number % 2 === 0) {
    return number * 2;
  } else {
    return number;
  }
}), [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]);
assertArraysEqual(map(numbers, number => number + 5), [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
