//given a string, return a new string with the reverse order of characters
//ex: reverseStr("apple")-->elppa

//sol:1
//convert str to arr and then the array method reverse()
function reverseStr(str) {
  return str.split("").reverse().join("");
}
const res1 = reverseStr("apple");
console.log(res1);

//sol 2:without using the array method
function reverseStr(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed; //each char is stored at the start of each "reversed"
  }
  return reversed;
}
const res2 = reverseStr("apple");
console.log(res2);

//sol:3 using reduce helper

//About reduce():
//reduce() takes in two arguments--> a callback function and an initial value
//The reduce() method does not change the original array.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.

//sol:whatever the reduce fun returns will be the starting value for every successive run of the func
//fun runs one time for every element in the array
function reverseStr(str) {
  return str.split('').reduce((reversed, char) => char + reversed, "");
}
const res3 = reverseStr("apple");
console.log(res3);
