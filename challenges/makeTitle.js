// Takes a string as an input and returns the string with the first letter of
// each word capitalized.

// Uses the split method change the string into an array then uses the map
// method to capitalize the first letter of each item in the array (a[0]) and
// adds that capitalized letter back into its position in the array. Last, it
// uses the join method to change the array back into a string.


function makeTitle(str) {
    return str.split(' ').map(a => a[0].toUpperCase() + a.substr(1)).join(' ');
}


// makeTitle('I am a title') returns 'I Am A Title'
