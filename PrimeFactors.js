function CalculatePrimeFactors(num) {
	var pfArray = [];
  var tempNum = num;
	while(tempNum > 1) {
  	for(let i = 2; i<= tempNum; i++) {
    	if(tempNum % i == 0) {
      	pfArray.push(i);
        tempNum /= i;
      }
    }
  }
  if(pfArray.length > 0) {
  	var result = pfArray.filter((el, i) => pfArray.indexOf(el) === i).toString();
    console.log(`Prime Factors of number ${num} is ${result}`);
  }
  else {
	  console.log("Invalid Number");
  }
} 

CalculatePrimeFactors(40);
