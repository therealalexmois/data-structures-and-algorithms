/**
 * Алгоритм:
 * 1. Разделите данный список на две половины (примерно равные половины в случае списка с нечетным числом элементов).
 * 2. Продолжайте разделять подмассивы таким же образом, пока у вас не останутся только одноэлементные массивы.
 * 3. Начиная с массивов с одним элементом, объедините подмассивы, чтобы отсортировать каждый объединенный подмассив.
 * 4. Повторите шаг 3 с одним отсортированным массивом.
 *
 */

const initial = [74, 83, 36, 22, 99, 4, 52, 18, 9, 7, 37, 58, 76, 80, 59]

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const half = Math.floor(arr.length / 2)
  const left = arr.splice(0, half)

  return merge(mergeSort(left), mergeSort(arr))
}

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
}

console.log(mergeSort(initial))
