// Takes an array of numbers as input and sorts them in ascending order. If the
// array is empty or args = null the function returns an empty array ([]).

// First checks if the argument is null, if yes returns an empty array, if no
// it uses the sort method to compare the numbers and sorts them into
// ascending order.

function sortNumsAscending(arr) {
  if (arr === null) return [];
  return arr.sort((a, b) => a - b);
}

// sortNumsAscending([1, 2, 10, 50, 5]) returns [1, 2, 5, 10, 50]).
