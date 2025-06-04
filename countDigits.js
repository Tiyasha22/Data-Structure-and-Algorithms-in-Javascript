//wap to count the number of digits in a number

function countDigits(num) {
    if(num===0 ) return 1;
    //converting negative numbers into positive;
    num=Math.abs(num)
    let count = 0;
    while (num > 0) {
        num=Math.floor(num / 10)
        count++;
    }
    return count;
}
let res = countDigits(259)
console.log(res)