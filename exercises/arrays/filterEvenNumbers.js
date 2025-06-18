const arr = [1, 2, 3, 4, 5, 6, 7]

function filterEvenNumbers(arr) {
  return arr.filter((e) => e % 2 === 0)
}

console.log(filterEvenNumbers(arr))
