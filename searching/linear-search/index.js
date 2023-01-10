function linearSearch(array, element) {
  if (!array || !array.length) return false

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true
    }
  }

  return false
}

