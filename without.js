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

const without = function(source, itemsToRemove) {
  let outputArray = [];
  for (let i = 0; i < source.length; i++) {
    let discard = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        discard = true;
      }
    }
    if (!discard) {
      outputArray.push(source[i]);
    }
  }
  return outputArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
