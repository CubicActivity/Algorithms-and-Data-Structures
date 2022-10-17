function recursiveFib(n) {
    if (n < 2) {
        return 1
    }
    else {
        return (recursiveFib(n - 1) + recursiveFib(n - 2))
    }
}

console.log(recursiveFib(0))
console.log(recursiveFib(1))
console.log(recursiveFib(8))

// O(n) - Iterative
// O(2^n) - Recursive