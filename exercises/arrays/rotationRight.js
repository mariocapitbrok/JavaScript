const arr = [1, 3, 5, 7, 9]

const shift = 2 % arr.length

const rotationsRight = []

for (let i = 0; i < arr.length + shift; i += shift) {
  const rotationRight = arr.slice(-i).concat(arr.slice(0, -i))
  rotationsRight.push(rotationRight)
}

console.log(rotationsRight)
