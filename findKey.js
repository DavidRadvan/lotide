const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2), "noma");

const friends = {
  Tony: {
    city: "Vancouver",
    age: 26
  },
  Jack: {
    city: "Vancouver",
    age: 27
  },
  Maddy: {
    city: "Vancouver",
    age: 25
  },
  Ronnie: {
    city: "Victoria",
    age: 31
  },
  Daniel: {
    city: "Victoria",
    age: 30
  }
};

assertEqual(findKey(friends, friend => friend.city === "Victoria"), "Ronnie");
assertEqual(findKey(friends, friend => friend.age >= 30), "Ronnie");
assertEqual(findKey(friends, friend => friend.age >= 50), undefined);
