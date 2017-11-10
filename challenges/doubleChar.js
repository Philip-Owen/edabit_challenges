// Takes a string as input and adds another character to the string for each
// letter.

// Uses split method to split the string into an array, map method to add an
// additional character for each letter in the array, then uses join to return
// the array into a string.


function doubleChar(str) {
  return str.split('').map(a => a + a).join('');
}

// doubleChar("String"); returns SSttrriinngg
