const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const MMOByDeveloper = {
  squareEnix: "Final Fantasy XIV",
  blizzard: "World of Warcraft",
  arenanet: "Guild Wars 2",
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(MMOByDeveloper, "Guild Wars 2"), "arenanet");
