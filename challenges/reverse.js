
// Takes a string as input and reverses the order of the letters in the string.
// First uses split method to split individual letters in the string into an
// array:
// ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
// Next uses the reverse method to change the order of the letters in the
// array:
// ["d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h"]
// Then uses the join method to assemble the string and returns:
// "dlrow olleh"


function reverse(str) {
  return str.split('').reverse().join('');
}

// reverse("hello world"); returns "dlrow olleh"
