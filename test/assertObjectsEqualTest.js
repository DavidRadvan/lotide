const _ = require("../index");
const assert = require('chai').assert;

_.assertObjectsEqual({a: "3", b: 5, c: "six"}, {b: 5, c: "six", a: "3"});
_.assertObjectsEqual({d: 10, e:"none"}, {d: 10, e:"all"});
