/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const visited = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      const y = nums[l]
      const z = nums[r]
      const k = `${x},${y},${z}`
      const sum = x + y + z
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        if (!visited.get(k)) {
          visited.set(k, [x, y, z])
        }
        l += 1
      }
    }
  }
  return [...visited.values()]
}
