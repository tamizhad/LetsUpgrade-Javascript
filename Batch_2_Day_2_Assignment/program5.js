// 5) Program to reverse the array
let x = prompt("Program to reverse the array\n\nEnter size of the array");
let arr = new Array();
for (var i = 0; i < x; i++) {
	arr[i] = prompt("Enter array elements "+(i+1));
}

for (i = x - 1; i >= 0; i--) {
	console.log(arr[i]);
}