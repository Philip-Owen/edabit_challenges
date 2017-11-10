// Takes a string as input and returns true or false depending on whether there
// is the same amount of 'x''s and 'o's in the string.

// Creates two local variables 'x' and 'o' that change the string to lower case
// to avoid case sensitivity, splits the string into an array, filters the array
// based on the letter it is looking for, and logs the length of the array to
// compare to the length of the other array.

function XO(str) {
  var x = str.toLowerCase().split('').filter(x => x === 'x').length;
  var o = str.toLowerCase().split('').filter(o => o === 'o').length;
  return x === o;
}

// XO("xxxooO") would return true.
