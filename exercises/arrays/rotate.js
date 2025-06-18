const arr = [1, 2, 3, 4, 5, 6, 7]
const k = 1 // Represents the positions to rotate: 0, 1, 2, 3. Positive right, negative left.

function rotateArray(arr, k) {
  k = k % arr.length // Mange larger numbers than array length. Whole rotations.
  console.log(k)
  console.log(arr.slice(-k))
  return arr.slice(-k).concat(arr.slice(0, -k))
}

console.log(rotateArray(arr, k))
