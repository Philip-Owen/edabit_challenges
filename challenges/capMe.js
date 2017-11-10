// Takes an array of names and formats the name so that the first letter is
// capitalized while the rest are lower case.

// Uses the map method to first change the first letter in each item to upper
// case. It then concatenates the new upper case letter to the begining of each
// name, changes the original name to lower case, and removes the first letter
// in the original string.

function capMe(arr) {
	return arr.map(a => a[0].toUpperCase() + a.toLowerCase().substr(1));
}

// capMe(['mARIANN', 'jOI', 'gEORGEANN'])
// returns ['Mariann', 'Joi', 'Georgeann']
