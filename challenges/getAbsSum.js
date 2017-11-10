// Takes an array of numbers as an input and returns the absolute sum of the
// numbers.

// Uses the map method and the Math.abs() function to get the absolute value of
// each number in the array. Then uses the reduce method to add the numbers in
// the array.

function getAbsSum(arr){
  return arr.map(a => Math.abs(a)).reduce((a,b) => a + b);
}

// getAbsSum([2, -1, -3, 4, 8]) returns 18.
