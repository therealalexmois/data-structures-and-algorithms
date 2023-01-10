function binarySearch(array, element) {
  if (!array || !array.length) return false

  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (element === array[middle]) {
      return true;
    }

    if (element < array[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return false;
}



console.log(binarySearch([1, 2, 3, 4], 4))
