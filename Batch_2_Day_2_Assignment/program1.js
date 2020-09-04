// 1) Program to search for a particular character in a string- Code1

let str;
let pos = 0
str = prompt("Program to search for a particular character in a string\n\nenter a string:");
let key;
key = prompt("enter a char need tobe search");

for (var i = 0; i < (str.length); i++) {
	if (key == str[i]) {
		pos = pos + 1;
		alert("Entered String: "+str+"\n\nSearch character: "+key+"\n\nFound at position " + i + "");
		break;
	}
}
if (pos == 0)
	alert("NOT FOUND!!!");
