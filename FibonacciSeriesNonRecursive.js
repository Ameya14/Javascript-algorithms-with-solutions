function CalculateFibonacci(count) {
	var fiboArray = [];
  var num1 = 0, num2 = 1;
  for(let i = 1; i <= count; i++) {
  	fiboArray.push(num1);
    var num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return (fiboArray.length > 0) ? console.log(`Fibonacci series upto ${count} counts is:${fiboArray.toString()}`) : console.log("Invalid Count");
}

CalculateFibonacci(12);
