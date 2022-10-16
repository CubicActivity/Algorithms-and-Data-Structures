function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}
// Big-O = O(1)


// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// Big-O = O(log(n)) 

console.log(isPowerOfTwoBitWise(1)) // true
console.log(isPowerOfTwoBitWise(2)) // true
console.log(isPowerOfTwoBitWise(5)) // false

