var str = "madama";

(function() {
  str.split('').reverse().join('') === str ?
  	console.log("Is a Palindrome") :
  	console.log("Not a Palindrome")
})(str);


