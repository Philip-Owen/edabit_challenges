// Takes an number as input and checks if the number is a prime number, returns
// true or false.

// Uses a for loop. The variable i = 2, the length of the loop will be as long
// as i < num, and for each iteration of the loop i will increase by 1.

// The if statement inside of the for loop checks to see whether the number
// passed in divided by i has a remainder of 0. If the number does have a
// remainder of 0 the number is not prime and false is returned.
// If the loop iterates through without finding a remainder of 0, than it
// verifies that the number is greater than 1 and returns true.

function isPrime(num){
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// isPrime(5) will return true.
// isPrime(9) will return false.
