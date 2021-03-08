const _ = require("../index");

_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [3, 2, 1]);

_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
_.assertArraysEqual([0, "2", "3"], [false, "2", "3"]);
