
// Takes an array as input and returns the largest number in the array.

// Uses spread operator to get a one-line solution.
// Could also be done as:
// function findLargestNum(arr) {
//   return arr.reduce(function (a, b) {
//     return Math.max(a, b);
//   });
// }
// but for simplicity's sake the on-liner below is a little easier to read.

function findLargestNum(arr) {
  return Math.max(...arr);
}


// findLargestNum([4, 5, 1, 3]) would return 5.
