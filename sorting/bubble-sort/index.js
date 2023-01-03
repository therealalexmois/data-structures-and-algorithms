const initial = [74, 83, 36, 22, 99, 4, 52, 18, 9, 7, 37, 58, 76, 80, 59]

function bubbleSort(arr) {
  if (arr < 2) return arr

  for (let limit = arr.length - 1; limit > 0; limit -= 1) {
    for (let i = 0; i < limit; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }

  return arr
}

console.log(bubbleSort(initial))
