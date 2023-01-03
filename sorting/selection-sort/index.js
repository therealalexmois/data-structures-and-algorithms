const initial = [74, 83, 36, 22, 99, 4, 52, 18, 9, 7, 37, 58, 76, 80, 59]

function selectionSort(arr) {
  if (arr.length < 2) return arr

  for (let i = 0; i < arr.length; i += 1) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }

    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }

  return arr
}

console.log(selectionSort(initial))
