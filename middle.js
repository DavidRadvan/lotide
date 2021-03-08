const middle = function(inputArr) {
  let outputArr = [];
  if (inputArr.length >= 3) {
    if (inputArr.length % 2 === 0) {
      outputArr.push(inputArr[(inputArr.length / 2) - 1]);
      outputArr.push(inputArr[(inputArr.length / 2)]);
    } else {
      outputArr.push(inputArr[Math.floor(inputArr.length / 2)]);
    }
  }
  return outputArr;
};

module.exports = middle;
