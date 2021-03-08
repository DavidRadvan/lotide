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

const flatten = function(inputArr) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.isArray(inputArr[i])) {
      for (let j = 0; j < inputArr[i].length; j++) {
        outputArr.push(inputArr[i][j]);
      }
    } else {
      outputArr.push(inputArr[i]);
    }
  }
  return outputArr;
};

module.exports = flatten;

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
