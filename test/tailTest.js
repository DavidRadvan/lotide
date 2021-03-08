const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(assertEqual(tail(words)[0], words[1]));
console.log(tail(["oneWord"]));
console.log(tail([]));
