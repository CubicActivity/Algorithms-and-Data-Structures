function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
// Big-O = O(n^2)
const arr = [5, 4, 8, 3, 1]
bubbleSort(arr)
console.log(arr) //[1,3,4,5,8]
