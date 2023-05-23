//string anagram
//cond 1: same length of both strings
//cond 2: no of letters are same but arrangement may vary
//capital letters to be considered same as lower case letters
//spaces and punctutations are excluded -->[use regEx \w]
//ex: hello:lleho -->{ h:1,l:2,e:1,o:1 }hence anagram
//hello:lllod--> not an anagram

//sol 1: using character maps

function isAnagram(str1, str2) {
  const firstCharMap = buildCharMap(str1);
  const secondCharMap = buildCharMap(str2);

  /*compare the number of keys in both the charMap*/
  if (Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length) {
    return false;
  }

  for (let char in firstCharMap) {
    if (firstCharMap[char] != secondCharMap[char]) {
      return false;
    }
  }
  return true;
}
/*helper function */
function buildCharMap(str) {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

const result = isAnagram("rail safety!", "Fairy tales");
const result1 = isAnagram("ra safety!", "tales");
console.log(result);
console.log(result1);

//sol 2:
//sort() is an arrray method sorts not just the numbers but also the alphabets
function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}
/*helper func */
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "") //removes spaces and punctuations
    .toLowerCase() //converts the string into lower case
    .split("") // splits the char of the str in an array separated by nothing
    .sort() //sorts the array of characters alphabetically
    .join(""); // joins the characters of the string
}

const res = anagrams("rail safety!", "Fairy tales");
const res1 = anagrams("ra safety!", "tales");
console.log(res);
console.log(res1);
