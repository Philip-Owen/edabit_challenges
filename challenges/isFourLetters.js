// Takes an array of names as input and returns only the names that have a
// length of 4.

// Uses filter method and to filter out names longer than 4 letters.

function isFourLetters(arr) {
  return arr.filter(name => name.length === 4);
}

// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) returns '['Ryan', 'Matt']
