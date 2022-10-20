function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
// Worst case - O(n^2)
// Avg case - O(nlogn)
console.log(quickSort([5, 4, 8, 2]))
console.log(quickSort([5, 4, 8, 2, 9, -5]))
