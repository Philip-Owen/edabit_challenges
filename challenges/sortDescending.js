// Takes a number as an input and returns the number sorted in descending order.

// First uses the toString method to change the input from an interger to a
// string. Next uses the split method to change the string into an array. Uses
// the sort and reverse methods to place the numbers in decending order then
// joins the array back into a string.

// parseInt() takes the value in the string and changes it into an interger.

function sortDecending(num) {
  return parseInt(num.toString().split('').sort().reverse().join(''));
}

// sortDecending(670276097) returns 977766200.
