function getPermutations(arr, r) {
  const result = []

  function backtrack(perm = [], used = []) {
    if (perm.length === r) {
      result.push([...perm])
      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue

      used[i] = true
      perm.push(arr[i])
      backtrack(perm, used)
      perm.pop()
      used[i] = false
    }
  }

  backtrack()
  return result
}

// Example usage:
const input = [1, 2, 3, 4, 5]
const permutations = getPermutations(input, 3)
console.log(permutations)
console.log(permutations.length) // 60

// Permutations formula: P(n,r) = n! / (n-r)!
// where n is the total number of items and r is the number of items to choose.
