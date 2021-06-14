var array1 = [8,12,2,14,5,4,3,10];
var array2 = [5,3,6,17,8,0,3,9]

function mergeSortedArrays(array1, array2) {
	var newArray = [
  	...array1,
    ...array2
  ];
 
	return newArray.
  					filter((el,i) => newArray.indexOf(el) == i ).
            sort((a,b) => a - b);
}

var result = mergeSortedArrays(array1, array2);
console.log(result);
