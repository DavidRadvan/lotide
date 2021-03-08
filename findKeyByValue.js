const findKeyByValue = function(object, valueToFind) {
  let output = undefined;
  for (let key in object) {
    if (valueToFind === object[key]) {
      output = key;
    }
  }
  return output;
};

module.exports = findKeyByValue;
