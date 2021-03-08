const takeUntil = function(array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      output.push(array[i]);
    } else {
      i = array.length;
    }
  }
  return output;
};

module.exports = takeUntil;
