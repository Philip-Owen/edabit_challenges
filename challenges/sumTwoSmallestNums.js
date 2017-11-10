// Takes an array of numbers as input and adds the two lowest numbers together.
// Negative numbers are not included.

// Uses filter method to remove any numbers less than 0. Uses sort method to
// place the numbers in ascedning order. Slices off the first two numbers then
// uses the reduce function to add the two numbers together. 


function sumTwoSmallestNums(arr) {
  return arr.filter(a => a > 0)
            .sort((a,b) => a > b)
            .slice(0,2)
            .reduce((a,b) => a + b);
}

// sumTwoSmallestNums([19, 5, 42, 2, 77]) would return 7
