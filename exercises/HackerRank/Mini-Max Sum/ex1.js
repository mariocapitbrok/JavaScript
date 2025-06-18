const arr = [1, 3, 5, 7, 9]

const shift = 1 % arr.length

const rotationsRight = []

for (let i = 0; i < arr.length; i++) {
  const rotationRight = arr.slice(shift - i).concat(arr.slice(0, shift - i))
  rotationsRight.push(rotationRight)
}

console.log(rotationsRight)
