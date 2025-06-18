function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }

  return -1
}

const numbers = [5, 3, 8, 4, 2]
const target = 4
const index = linearSearch(numbers, target)
console.log(index)
