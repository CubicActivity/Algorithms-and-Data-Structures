function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    } return -1
}

console.log(LinearSearch([1, 2, 3, 4], 4)) //3
console.log(LinearSearch([1, 2, 3, 4], 2)) //1
console.log(LinearSearch([1, 2, 3, 4], 1)) //0

// Big-O = O(n)