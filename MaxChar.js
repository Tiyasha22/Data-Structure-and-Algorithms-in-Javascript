//given a string, return a character that is most commonly used in the string
//RELATED QUESTIONS:
///WHAT IS THE MOST COMMON CHARACTER IN THE STRING?
///DOES STRING A HAVE THE SAME CHARACTERS AS STRING B(IS IT AN ANAGRAM)?
///DOES THE GIVEN STRING HAVE ANY REPEATED CHARACTERS IN IT?

//sol: building a character map
function maxChar(str) {
  const charMap = {};
  let max = 0; //if any char in charMap has more char than max, then set max value as that value
  let maxChar = ""; ///and will set maxChar with the value that has the max value
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
const res1 = maxChar("abccccddss");
console.log(res1);
const res2 = maxChar("abbccd");
console.log(res2);
const res = maxChar("hello there");
console.log(res);
