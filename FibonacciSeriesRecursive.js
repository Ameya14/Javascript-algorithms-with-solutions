var fiboArray = [];
var num1 = 0, num2 = 1;
  
function CalculateFibonacci(count) {
  fiboArray.push(num1);
  var num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
  if(count > 1) {
  	CalculateFibonacci(count-1);
  }
  else if(fiboArray.length > 0) {
    console.log(`Fibonacci series upto ${count} counts is:${fiboArray.toString()}`)
  }
  else {
    console.log("Invalid Count");
  }
}

CalculateFibonacci(6);
