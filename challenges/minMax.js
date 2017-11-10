// Takes an array of numbers as input and returns the min and max numbers.
// Uses the Math functions to get the min and max numbers.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}

// minMax([14, 35, 6, 1, 34, 54]) returns [1, 54]
