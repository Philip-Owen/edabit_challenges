// Takes a string as an input and removes all of the vowels from the string.

// Uses the replace method to match [aeiou] and uses the 'g' and 'i' flags.
// 'g' to match all instances of the letters in the string and 'i' to make the
// search case insensitive.


function silenceTrump(str) {
  return str.replace(/[aeiou]/gi, '');
}

// silenceTrump("I have never seen a thin person drinking Diet Coke.")
// returns ' hv nvr sn thn prsn drnkng Dt Ck.'
