
// Takes a number as an input and returns whether number is even or odd.

// Used ternaray operator for a one-line solution.
// "num % 2 === 0" is the condition that we are checking.
// "? 'even' : 'odd'" is the if/else statement.
// If condition is true return even, if false return odd.

function isEvenOrOdd(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}

// isEvenOrOdd(90) would return even.
