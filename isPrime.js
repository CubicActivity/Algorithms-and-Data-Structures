// function isPrime(n) { // This is the slowest solution, O(n^2)

//     if (n > 1) {
//         for (let i = 2; i <= n; i++) {
//             for (let j = n; j >= 1; j--) {
//                 if (i * j == n && j != 1) {
//                     return false
//                 } else if (j == 1) { return true }
//             }
//         }
//     } else return false
// }
// // Big-O = O(n^2)


// function isPrime(n) { //Linear O(n) Solution

//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// // Big-O = O(n)

function isPrime(n) { //Fast O(sqrt(n)) solution

    if (n < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
// Big-O = O(Sqrt(n))
console.log(isPrime(1)) //false
console.log(isPrime(2)) //true
console.log(isPrime(3)) //true
console.log(isPrime(4)) //false
console.log(isPrime(5)) //true