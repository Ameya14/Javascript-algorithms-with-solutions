var array = [1,2,2,1,5,4,3,1];

function removeDuplicates(array) {
	return array.filter((el,i) => array.indexOf(el) == i );
}

var result = removeDuplicates(array);
console.log(result);
