const arr = [1, 3, 5, 7, 9]

const shift = 1 % arr.length

const rotationsLeft = []

for (let i = 0; i < arr.length + shift; i += shift) {
  const rotationLeft = arr.slice(i).concat(arr.slice(0, i))
  rotationsLeft.push(rotationLeft)
}

console.log(rotationsLeft)
