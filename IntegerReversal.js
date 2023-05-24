//Negative numbers should remain negative.
//Any leading zeroes should be removed.
//The function can accept floats or integers.
//The function will return integers as integers.

function reverseInt(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
const res1 = reverseInt(-10938);
console.log(res1); //-83901
const res2 = reverseInt(12300);
console.log(res2); //321
const res3 = reverseInt(546.28);
console.log(res3); //82.645

//parseFloat(num) converts num into a float from a String.
//parseFloat runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeroes.
//num * Math.sign(num) multiplies the number with the sign of the original number provided.

//PARSEINT:parseInt() ignores the decimal point and even the digits coming after it
//EX:parseInt(3.99)would be 3
//parseFloat() considers the decimal point and the digits coming after it	3. parseInt() ignores the decimal point and even the digits coming after it
//Example - parseFloat(3.99) would be 3.99
