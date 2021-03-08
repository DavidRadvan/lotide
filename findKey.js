const findKey = function(obj, callback) {
  let output = undefined;
  for (const key in obj) {
    if (callback(obj[key])) {
      output = key;
      break;
    }
  }
  return output;
};

module.exports = findKey;
