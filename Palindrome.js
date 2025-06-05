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

///**
//  * Program to check if a string is a palindrome without using array methods
// * A palindrome reads the same forwards and backwards (e.g., "madam", "racecar")
// */

function isPalindrome(str) {
   // Convert string to lowercase and remove non-alphanumeric characters
   let cleanStr = '';
   for (let i = 0; i < str.length; i++) {
       const char = str[i].toLowerCase();
       if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
           cleanStr += char;
       }
   }

   // Use two pointers to check palindrome
   let left = 0;
   let right = cleanStr.length - 1;

   while (left < right) {
       if (cleanStr[left] !== cleanStr[right]) {
           return false;
       }
       left++;
       right--;
   }
   return true;
}

// Test cases
console.log("Palindrome Check Results:");
console.log("madam:", isPalindrome("madam"));           // true
console.log("racecar:", isPalindrome("racecar"));       // true
console.log("hello:", isPalindrome("hello"));           // false
console.log("A man, a plan, a canal: Panama:", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("12321:", isPalindrome("12321"));           // true
console.log("Was it a car or a cat I saw?:", isPalindrome("Was it a car or a cat I saw?")); // true

//palindrome number
// * last digit :n % 10
// *remove last digit : n/10
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
const isPalindrome = function(x) {
    if(x<0) return false
    let xCopy=x
    let rev=0;
    while(x>0){
        let rem=x%10;
        rev=(10*rev)+rem
        x=Math.floor(x/10)
    }
    if(rev===xCopy) {return true}
    else{ return false}
};