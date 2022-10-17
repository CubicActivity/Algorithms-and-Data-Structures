function FactorialRecursive(n) {
    if (n === 0) {
        return 1
    } else return n * FactorialRecursive(n - 1)
}

console.log(FactorialRecursive(0))
console.log(FactorialRecursive(1))
console.log(FactorialRecursive(5))

//Big-O = O(n)