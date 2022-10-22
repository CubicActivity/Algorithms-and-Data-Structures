function EuclidianAlgorithm(a, b) {
    let Remainder
    while (a % b > 0) {
        Remainder = a % b
        a = b
        b = Remainder
    }
    return b

}
//Big-O = O(mn)
console.log(EuclidianAlgorithm(1000, 15))