function isPrimeNumber(num) {
	var isPrime = true;
	if(num === 1) {
  	console.log("1 is neither prime nor composite number.");
  }
  else if (num > 1) {
  	for(let i = 2; i<num; i++) {
    	if(num % i == 0) {
      	isPrime = false;
      }
    } 
    if(isPrime) {
    	console.log(`${num} is a PRIME number`);
    }
    else {
    	console.log(`${num} is NOT a prime number`)
    }
  }
  else {
  	console.log("Invalid Number")
  }
} 

isPrimeNumber(13);
