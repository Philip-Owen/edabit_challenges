// Takes a string as input and sorts the letters in that string, in alphabetical
// order.

// Uses the split method to seperate each letter into an array.
// Then uses the sort method to sort the letters into alphabetical order.
// Finally it joins the array back into a string.

function AlphabetSoup(str) {
  return str.split('').sort().join('');
}


// AlphabetSoup('hello') returns 'ehllo'.
