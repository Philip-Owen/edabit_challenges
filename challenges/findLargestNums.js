// Takes an array of arrays as an input and returns the largest number in each
// array.

// Uses a for loop that uses the length of the array to determine how many times
// to perform the loop. For each sub array it uses the Math.max() function to
// determine the largest number and returns that number to each sub array.

function findLargestNums(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.max(...arr[i]);
  }
  return arr;
}

// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
// returns [7, 90, 2]
