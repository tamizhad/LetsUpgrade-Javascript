// 3) Program to search for a element in a array of strings

let input = prompt("Program to search for a element in a array of strings\n\nenter size");
let arr = new Array();
for (let i = 0; i < input; i++) {
    arr[i] = prompt("Enter the string " + (i + 1));
}
let key = prompt("Array: " + arr + "\n\nEnter the data need to be search:");
let found = false;
for (let i = 0; i < input; i++) {
    if (arr[i] == key) {
        found = true;
        break;
    }
}

if (found) {
    alert(key + " data is present")
}
else {
    alert("data is not present in the array");
}