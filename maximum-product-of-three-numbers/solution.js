/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    return product(nums)
  }

  const items = nums.sort((a, b) => a - b)
  const mid = Math.min(3, Math.floor(items.length / 2))
  const mid2 = Math.min(3, Math.ceil(items.length / 2))
  const candidates = items.slice(0, mid).concat(items.slice(-mid2))
  let max = product(candidates.slice(0, 3))
  for (let i = 0; i < candidates.length - 2; i++) {
    for (let j = i + 1; j < candidates.length - 1; j++) {
      for (let k = j + 1; k < candidates.length; k++) {
        const p = product([candidates[i], candidates[j], candidates[k]])
        if (p > max) {
          max = p
        }
      }
    }
  }
  return max
}

function product(items) {
  return items.reduce((acc, n) => acc * n, 1)
}
