//given a string ,return true if the given string is palindrome else false;
//sol1:
function palindrome(str) {
  return str.split("").reverse().join("") === str;
}
const res1 = palindrome("abba");
console.log(res1);
const res2 = palindrome("noida");
console.log(res2);
//sol2: using every()

//about every()method:
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

//Problem: it iterates for every element in the array and hence it would check for the same value twice //double comparison

function palindrome(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - index - 1]);
}

const res3 = palindrome("abba");
console.log(res3);
const result = palindrome("noida");
console.log(result);
