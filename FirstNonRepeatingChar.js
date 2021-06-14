var str = "the quick brown fox jumps then quickly blow air";

function findNonRepeatChar(str) {
	var originalArray = str.toLowerCase().split('');
  var arrayOfDuplicates = originalArray.filter((el, i) => originalArray.indexOf(el) != i);
  console.log(originalArray.filter((el,i) => arrayOfDuplicates.indexOf(el) == -1)[0]);
  
  // compared chars of duplicate with original string and filtered the chars from original array that is not present in the array of duplicates and returned the first element
}

findNonRepeatChar(str);

