const initial = [74, 83, 36, 22, 99, 4, 52, 18, 9, 7, 37, 58, 76, 80, 59]

function selectionSort(items) {
  if (items.length < 2) return items

  for (let i = 0; i < items.length; i += 1) {
    let idxMin = i;

    for (let j = i + 1; j < items.length; j += 1) {
      if (items[j] < items[idxMin]) {
        idxMin = j
      }
    }

    const tmp = items[i]
    items[i] = items[idxMin]
    items[idxMin] = tmp
  }

  return items
}

console.log(selectionSort(initial))
