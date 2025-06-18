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

const input = [1, 2, 3, 4, 5]
const r = 4
const combinations = getCombinations(input, r)
console.log(combinations)
