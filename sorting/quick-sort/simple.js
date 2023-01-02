/**
  Алгоритм:
  1. Выбрать опорный элемент.
  2. Разделить массив на два подмассива: элементы больше и меньше опорного.
  3. Рекурсивно применить сортировку к двум подмассивам.
*/

const initial = [17, 82, 62, 81, 60, 35, 32, 26, 80, 95, 8, 56, 11, 6, 61]

function quickSort(arr) {
  if (arr.length < 2) return arr

  const pivotIdx = Math.floor((arr.length - 1) / 2)
  const pivot = arr[pivotIdx]
  const less = []
  const greater = []

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) {
      continue;
    }

    if (arr[i] <= pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(initial))
