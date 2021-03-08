const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputStr) {
  const noSpaces = inputStr.split(" ").join("").toLowerCase();
  let outputObj = {};

  for (const char of noSpaces) {
    if (outputObj[char]) {
      outputObj[char] += 1;
    } else {
      outputObj[char] = 1;
    }
  }
  return outputObj;
};

module.exports = countLetters;

console.log(assertEqual(countLetters("lighthouse in the house")["h"], 4));
console.log(countLetters("lighthouse in the house"));
