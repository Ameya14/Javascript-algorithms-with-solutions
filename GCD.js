var num1 = 41;
var num2 = 23;
// function

function gcd(num1, num2) {
  var gcd = 0;
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);

  	if(max % min === 0) {
    	gcd = num1
    }
    else {
    	for(let i=2; i<=min; i++) {
      	if(max % i == 0 && min % i == 0) {
        	gcd = i;
        }
        else {
        	gcd = 1;
        }
      }
    }
	return gcd;
}

var result = gcd(num1, num2);
console.log(result)
