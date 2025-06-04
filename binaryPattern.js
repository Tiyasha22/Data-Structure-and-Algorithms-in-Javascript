/**
 * Program to print the following pattern:
 * 1
 * 10
 * 101
 * 1010
 * 10101
 * 101010
 */

function printBinaryPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            // Alternate between 1 and 0
            pattern += j % 2 === 1 ? '1' : '0';
        }
        console.log(pattern);
    }
}

// Test the pattern with 6 rows
console.log("Binary Pattern:");
printBinaryPattern(6); 