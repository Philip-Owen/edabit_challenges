// Takes an array as input and returns an array of only numbers.

// Uses the filter method to remove any item in the array of which it's 'typeof'
// does not equal 'number'.

function filterArray(arr) {
  return arr.filter(n => typeof n === 'number');
}

// filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]) returns [43, 76, 88]
