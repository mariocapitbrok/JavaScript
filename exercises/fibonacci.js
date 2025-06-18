function fibonacci(n) {
  const sequence = [0, 1]

  for (i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence
}

const result = fibonacci(10)
console.log(result)
