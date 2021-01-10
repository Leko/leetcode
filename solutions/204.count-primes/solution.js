// For counting prime numbers
function eratosthenesSieve(n) {
  if (n < 2) return 0
  if (n === 2) return 1

  const sieve = new Map()
  for (let i = 3; i <= n; i += 2) {
    sieve.set(i, true)
  }

  const sqrt = Math.sqrt(n)
  for (let i = 3; i <= sqrt; i += 2) {
    if (!sieve.get(i)) continue
    for (let j = 2; j * i <= n; j++) {
      sieve.delete(i * j)
    }
  }

  return sieve.size + 1
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  return eratosthenesSieve(n - 1)
}
