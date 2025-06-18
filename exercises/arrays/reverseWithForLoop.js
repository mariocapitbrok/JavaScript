const arr = [1, 2, 3, 4, 5, 6, 7]

let reversed = []

for (let i = 0; i < arr.length; i++) {
  reversed.unshift(arr[i])
}

console.log(reversed)
