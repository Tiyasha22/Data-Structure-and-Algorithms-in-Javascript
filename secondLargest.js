const array = [2, 3, 23, 61, 75, 98, 8]
const secondLargest = function (arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargest(array))

//arr[i] !== firstLargest is used to avoid the case where the largest and second largest are the same
//if we don't use this, then the second largest would be the largest number itself
//this is because the second largest would be updated to the largest number if it is equal to the current largest number
//this is not what we want, so we use this condition to avoid this

//sol2:
const array2 = [2, 3, 23, 61, 75, 98, 8]
const secondLargest2 = function (arr) {
    if (arr.length < 2) return null;
    return arr.sort((a, b) => b - a)[1];
}
console.log(secondLargest2(array))