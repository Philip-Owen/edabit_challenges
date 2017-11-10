// Takes an array as input and returns only the even numbers in the array.
// Uses filter method to filter out the numbers that when divided by 2, the
// remainder is greater than 0.

function noOdds(arr) {
  return arr.filter(num => num % 2 === 0);
}


// noOdds([1, 2, 3, 4, 5, 6, 7, 8]); returns [2, 4, 6, 8]
