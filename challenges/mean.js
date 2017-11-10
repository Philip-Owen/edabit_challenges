// Takes an array of numbers as input and calculates the mean average of the
// array and limits the number to only two decimal places.

// Uses the reduce method to add the numbers in the array and divides it by the
// length of the array ( = amount of numbers in the array). Uses toFixed to
// limit the decimal places to two and the parseFloat function to convert the
// number from a string back to an interger. 

function mean(arr) {
  return parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}


// mean([1, 1, 1, 0]) would return 0.75.
