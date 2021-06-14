var num1 = 8;
var num2 = 16;


function f(num1, num2) {
	var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  var gcd = 1;
 	for(let i = 2; i < min; i++) {
    	if(max % i == 0 && min % i == 0) {
      	gcd = i;
    } 
  }
  if(gcd == 1 && max % min == 0) {
  	gcd = min;
  }
return gcd;
}

var result = f(num1, num2);
console.log(result);
