//Checking sum zero
//return the pair of the two numbers that when added together hit the target sum zero
//[-5,-4,-3,-2,-1,0,2,4,6,8] -->input
//[-4,4]-->output

//sol-1:: For every element in the array we will try to find out an
//element such that the sum of both the elements in the array becomes equal to the target sum zero.

//problem- multiple iterations for each num
// quadratic time complexity = o(n^2)
function sumZero(array) {
  for (let num of array) {
    for (let j = 1; j < array.length; j++) {
      if (num + array[j] === 0) {
        return [num, array[j]];
      }
    }
  }
}
const result = sumZero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]);
console.log(result);

//optimised soln
//if the array is sorted
//take the sum of the left element and the right element and try to find out whether their sum is zero,
//greater than zero, or less than zero. If the sum is greater than zero then we will decrease the right by 1 .
//And if the sum is less then we will increase left by 1. If we find the sum as zero then we will return the left
//and right elements as a pair.

//time complexity=O(N)
function getSumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const results = getSumZero([-5, -2, -1, 0, 2, 4, -4, -3, 6, 8]);
console.log(results);

/* If arr is not sorted */
function FindPair(arr) {
  let pair = {};
  for (let i = 0; i < arr.length; i++) {
    let x = -arr[i];
    if (pair[x]) {
      // if x is present in pair map
      return [x, arr[i]];
    }
    pair[arr[i]] = 1;
  }

  return [];
}

const pair = FindPair([-5, -3, -1, 0, 2, 4, 6, 8, -4]);
console.log(pair);



