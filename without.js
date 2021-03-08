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

module.exports = without;
