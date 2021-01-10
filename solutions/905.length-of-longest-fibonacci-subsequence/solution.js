function bin(list, x, start, end) {
  if (start > end) return -1
  const mid = Math.floor((start + end) / 2)
  if (list[mid] === x) return mid
  if (list[mid] > x) return bin(list, x, start, mid - 1)
  return bin(list, x, mid + 1, end)
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let max = 0
  for (let i = 0; i + 1 < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let fib = [arr[i], arr[j]]
      let cursor = j + 1

      while (cursor < arr.length) {
        const x = fib[fib.length - 2] + fib[fib.length - 1]
        const idx = bin(arr, x, i, arr.length)
        if (idx === -1) {
          break
        } else {
          fib.push(x)
          cursor = idx
        }
      }
      if (fib.length > 2) {
        max = Math.max(max, fib.length)
      }
    }
  }
  return max
}
