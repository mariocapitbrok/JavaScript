function getCombinations(arr, r) {
  const result = []

  function backtrack(start = 0, combo = []) {
    if (combo.length === r) {
      result.push([...combo])
      return
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i])
      backtrack(i + 1, combo)
      combo.pop()
    }
  }

  backtrack()
  return result
}

// Example usage:
const input = [1, 2, 3, 4, 5]
const combinations = getCombinations(input, 4)
console.log(combinations)

// Combination formula: C(n,r) = n! / (r! * (n-r)!)
// where n is the total number of items and r is the number of items to choose.
