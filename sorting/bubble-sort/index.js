const initial = [74, 83, 36, 22, 99, 4, 52, 18, 9, 7, 37, 58, 76, 80, 59]

function bubbleSort(items) {
  if (items < 2) return items

  for (let limit = items.length - 1; limit > 0; limit -= 1) {
    for (let i = 0; i < limit; i += 1) {
      if (items[i] > items[i + 1]) {
        swap(items, i, i + 1)
      }
    }
  }

  return items
}

// function bubbleSort(items) {
//   if (items < 2) return items

//   let limit = items.length - 1;

//   while (limit > 0) {
//     for (let i = 0; i < limit; i += 1) {
//       if (items[i] > items[i + 1]) {
//         swap(items, i, i + 1)
//       }
//     }

//     limit -= 1
//   }

//   return items
// }

function swap(items, i, j) {
  const tmp = items[i]
  items[i] = items[j]
  items[j] = tmp
}

console.log(bubbleSort(initial))
