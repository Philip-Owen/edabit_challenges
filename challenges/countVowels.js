// Takes a string as input and returns the count of vowels in the string.

// Uses the match method to look for characters specified in the regexp object
// and returns them into an array, then returns the length of the array, which
// is equal to the amount of vowels in the original string.


function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

// countVowels("Celebration") returns 5.
