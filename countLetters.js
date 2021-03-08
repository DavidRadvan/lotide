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
