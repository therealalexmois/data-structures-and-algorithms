function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let numberToInsert = arr[i]
    let past = i-1

    while (past >= 0 && arr[past] > numberToInsert) {
      arr[past+1] = arr[past]
      past -= 1
    }

    arr[past+1] = numberToInsert
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr)
console.log(arr)
