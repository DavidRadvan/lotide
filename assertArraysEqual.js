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

const assertArraysEqual = function(array1, array2, bool) {
  if (eqArrays(array1, array2) === bool) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2} is ${bool}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${array1} === ${array2} is NOT ${bool}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);
assertArraysEqual([0, "2", "3"], [false, "2", "3"], false);
