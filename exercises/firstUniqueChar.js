const firstUniqChar = function (str) {
  const countMap = new Map()

  for (let char of str) {
    countMap.set(char, (countMap.get(char) || 0) + 1)
  }

  for (let i = 0; i < str.length; i++) {
    if (countMap.get(str[i]) === 1) return i
  }

  return -1
}

const result = firstUniqChar('lleeecode')
console.log(result)
