const arr = [2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0]

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

console.log(removeDuplicates(arr))
