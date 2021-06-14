var str = "I am the danger";

function reverseStr(str) {
	var newstr = str.split(' ').reverse().join(' ');
	return console.log(newstr.split('').reverse().join(''));
}

reverseStr(str);

