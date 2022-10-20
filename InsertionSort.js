function InsertionSort(arr) {//[8, 5, 3, 6]
    for (let i = 0; i < arr.length - 1; i++) {
        let NTI = arr[i + 1] //5
        let SE = arr[i] //8

        //if Selected element > Number to insert
        if (SE > NTI) {
            for (let j = i; j >= 0; j--) { // j=0 if>=0 j--
                if (arr[j] > arr[j + 1]) { //if 8>5 [8, 5, 3, 6]
                    arr[j + 1] = arr[j] // [8, 8, 3, 6] move 8 in place of 5
                    arr[j] = NTI  //[5, 8, 3, 6] put 5 in place of 8
                }
            }
        }
    } return arr
}

//Big-O = O(n^2)
console.log(InsertionSort([8, 5, 3, 6]))