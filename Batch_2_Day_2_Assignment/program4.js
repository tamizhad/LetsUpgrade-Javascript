// 4) Program to display only elements containing 'a' in them from a array
let input = prompt("Program to display only elements containing 'a' in them from a array\n\nEnter size");
let arr = new Array();
for (var i = 0; i < input; i++) {
	arr[i] = prompt("enter the strings into array");
}
for (i = 0; i <= input; i++) {
	for (var j = 0; j < (arr[i].length); j++) {
		if (arr[i][j] == 'a') {
			alert(arr[i]);
			break;
		}
	}

}