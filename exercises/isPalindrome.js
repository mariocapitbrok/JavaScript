function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  const reversed = cleaned.split('').reverse().join('')

  return cleaned === reversed
}

const result = isPalindrome('A man, a plan, a canal: Panama')
console.log(result)
