# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by David Radvan as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @davidradvan/lotide`

**Require it:**

`const _ = require('@davidradvan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Testing assertion that two arrays are equal.
* `assertEqual`: Testing assertion that two elements are equal.
* `assertObjectsEqual`: Testing assertion that two objects are equal.
* `countLetters`: Counts how many of each letter are in an input string.
* `countOnly`: Counts all elements from the second argument that are contained within the first.
* `eqArrays`: Tests if two arrays are equal.
* `eqObjects`: Tests if two objects are equal.
* `findKey`: Scans the first argument (object) for the first key that passes the second argument's function.
* `findKeyByValue`: Scans the first argument (object) for the value defined by the second argument.
* `flatten`: Removes all inner arrays and returns a single array with all elements.
* `head`: Returns the first element of an array.
* `index`: Master file containing all other functions inside an object.
* `letterPositions`: Returns the position of each letter inside a string (not including spaces).
* `map`: Performs the function from the second argument on each element in the array from the first argument, and returns the results in a new array.
* `middle`: Returns the middle element(s) in an array.
* `tail`: Returns the array without the first element.
* `takeUntil`: Returns each element of the first argument until it reaches an element equal to the second argument.
* `without`: Removes all elements from the first argument that are specified in the second argument.
