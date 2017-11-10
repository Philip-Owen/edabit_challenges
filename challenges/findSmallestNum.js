
// Takes an array as an input and returns the smallest number in the array.

// Uses spread operator for a one-line solution.
// Could also be written as:
// function findSmallestNum(arr) {
//   return arr.reduce(function (a, b) {
//     return Math.min(a, b);
//   });
// }


function findSmallestNum(arr) {
  return Math.min(...arr);
}

// findSmallestNum([34, -345, -1, 100]) will return -345.
