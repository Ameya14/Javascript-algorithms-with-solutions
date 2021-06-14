var str = "Learn more javascript dude";

function removeDuplicateChar(str) {
  var array = str.split('');
  var duplicates = array.filter((el, i) => array.indexOf(el) != i);
  console.log(array.filter((el,i) => duplicates.indexOf(el) == -1).join(''));
}

removeDuplicateChar(str);

